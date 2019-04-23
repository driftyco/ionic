import { Build, Component, Element, Event, EventEmitter, Method, Prop, QueueApi, Watch } from '@stencil/core';

import { Animation, AnimationBuilder, ComponentProps, Config, FrameworkDelegate, Gesture, Mode, NavComponent, NavOptions, NavOutlet, NavResult, RouteID, RouteWrite, RouterDirection, TransitionDoneFn, TransitionInstruction, ViewController } from '../../interface';
import { assert } from '../../utils/helpers';
import { TransitionOptions, lifecycle, setPageHidden, transition } from '../../utils/transition';

import { LIFECYCLE_DID_LEAVE, LIFECYCLE_WILL_LEAVE, LIFECYCLE_WILL_UNLOAD } from './constants';
import { VIEW_STATE_ATTACHED, VIEW_STATE_DESTROYED, VIEW_STATE_NEW, convertToViews, matches } from './view-controller';

@Component({
  tag: 'ion-nav',
  styleUrl: 'nav.scss',
  shadow: true
})
export class Nav implements NavOutlet {

  private transInstr: TransitionInstruction[] = [];
  private sbAni?: Animation;
  private useRouter = false;
  private isTransitioning = false;
  private destroyed = false;
  private views: ViewController[] = [];
  private gesture?: Gesture;

  mode!: Mode;

  @Element() el!: HTMLElement;

  @Prop({ context: 'queue' }) queue!: QueueApi;
  @Prop({ context: 'config' }) config!: Config;
  @Prop({ context: 'window' }) win!: Window;

  /** @internal */
  @Prop() delegate?: FrameworkDelegate;

  /**
   * If the nav component should allow for swipe-to-go-back.
   */
  @Prop({ mutable: true }) swipeGesture?: boolean;
  @Watch('swipeGesture')
  swipeGestureChanged() {
    if (this.gesture) {
      this.gesture.setDisabled(this.swipeGesture !== true);
    }
  }

  /**
   * If `true`, the nav should animate the transition of components.
   */
  @Prop() animated = true;

  /**
   * By default `ion-nav` animates transition between pages based in the mode (ios or material design).
   * However, this property allows to create custom transition using `AnimateBuilder` functions.
   */
  @Prop() animation?: AnimationBuilder;

  /**
   * Any parameters for the root component
   */
  @Prop() rootParams?: ComponentProps;

  /**
   * Root NavComponent to load
   */
  @Prop() root?: NavComponent;

  @Watch('root')
  rootChanged() {
    const isDev = Build.isDev;
    if (this.root !== undefined) {
      if (!this.useRouter) {
        this.setRoot(this.root, this.rootParams);
      } else if (isDev) {
        console.warn(
          '<ion-nav> does not support a root attribute when using ion-router.'
        );
      }
    }
  }

  /**
   * Event fired when Nav will load a component
   * @internal
   */
  @Event() ionNavWillLoad!: EventEmitter<void>;
  /**
   * Event fired when the nav will change components
   */
  @Event({ bubbles: false }) ionNavWillChange!: EventEmitter<void>;
  /**
   * Event fired when the nav has changed components
   */
  @Event({ bubbles: false }) ionNavDidChange!: EventEmitter<void>;

  componentWillLoad() {
    this.useRouter =
      !!this.win.document.querySelector('ion-router') &&
      !this.el.closest('[no-router]');

    if (this.swipeGesture === undefined) {
      this.swipeGesture = this.config.getBoolean(
        'swipeBackEnabled',
        this.mode === 'ios'
      );
    }

    this.ionNavWillLoad.emit();
  }

  async componentDidLoad() {
    this.rootChanged();

    this.gesture = (await import('../../utils/gesture/swipe-back')).createSwipeBackGesture(
      this.el,
      this.queue,
      this.canStart.bind(this),
      this.onStart.bind(this),
      this.onMove.bind(this),
      this.onEnd.bind(this)
    );
    this.swipeGestureChanged();
  }

  componentDidUnload() {
    for (const view of this.views) {
      lifecycle(view.element!, LIFECYCLE_WILL_UNLOAD);
      view._destroy();
    }

    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }

    // release swipe back gesture and transition
    this.transInstr.length = this.views.length = 0;
    this.destroyed = true;
  }

  /**
   * Push a new component onto the current navigation stack. Pass any additional information along as an object. This additional information is accessible through NavParams
   */
  @Method()
  push<T extends NavComponent>(
    component: T,
    componentProps?: ComponentProps<T> | null,
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    return this.queueTrns(
      {
        insertStart: -1,
        insertViews: [{ page: component, params: componentProps }],
        opts
      },
      done
    );
  }

  /**
   * Inserts a component into the nav stack at the specified index. This is useful if you need to add a component at any point in your navigation stack.
   */
  @Method()
  insert<T extends NavComponent>(
    insertIndex: number,
    component: T,
    componentProps?: ComponentProps<T> | null,
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    return this.queueTrns(
      {
        insertStart: insertIndex,
        insertViews: [{ page: component, params: componentProps }],
        opts
      },
      done
    );
  }

  /**
   * Inserts an array of components into the nav stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view.
   */
  @Method()
  insertPages(
    insertIndex: number,
    insertComponents: NavComponent[],
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    return this.queueTrns(
      {
        insertStart: insertIndex,
        insertViews: insertComponents,
        opts
      },
      done
    );
  }

  /**
   * Call to navigate back from a current component. Similar to push(), you can also pass navigation options.
   */
  @Method()
  pop(opts?: NavOptions | null, done?: TransitionDoneFn): Promise<boolean> {
    return this.queueTrns(
      {
        removeStart: -1,
        removeCount: 1,
        opts
      },
      done
    );
  }

  /**
   * Pop to a specific index in the navigation stack
   */
  @Method()
  popTo(
    indexOrViewCtrl: number | ViewController,
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    const config: TransitionInstruction = {
      removeStart: -1,
      removeCount: -1,
      opts
    };
    if (typeof indexOrViewCtrl === 'object' && (indexOrViewCtrl as ViewController).component) {
      config.removeView = indexOrViewCtrl;
      config.removeStart = 1;
    } else if (typeof indexOrViewCtrl === 'number') {
      config.removeStart = indexOrViewCtrl + 1;
    }
    return this.queueTrns(config, done);
  }

  /**
   * Navigate back to the root of the stack, no matter how far back that is.
   */
  @Method()
  popToRoot(
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    return this.queueTrns(
      {
        removeStart: 1,
        removeCount: -1,
        opts
      },
      done
    );
  }

  /**
   * Removes a page from the nav stack at the specified index.
   */
  @Method()
  removeIndex(
    startIndex: number,
    removeCount = 1,
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    return this.queueTrns(
      {
        removeStart: startIndex,
        removeCount,
        opts
      },
      done
    );
  }

  /**
   * Set the root for the current navigation stack.
   */
  @Method()
  setRoot<T extends NavComponent>(
    component: T,
    componentProps?: ComponentProps<T> | null,
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    return this.setPages(
      [{ page: component, params: componentProps }],
      opts,
      done
    );
  }

  /**
   * Set the views of the current navigation stack and navigate to the last view. By default animations are disabled, but they can be enabled by passing options to the navigation controller.You can also pass any navigation params to the individual pages in the array.
   */
  @Method()
  setPages(
    views: any[],
    opts?: NavOptions | null,
    done?: TransitionDoneFn
  ): Promise<boolean> {
    if (opts == null) {
      opts = {};
    }
    // if animation wasn't set to true then default it to NOT animate
    if (opts.animated !== true) {
      opts.animated = false;
    }
    return this.queueTrns(
      {
        insertStart: 0,
        insertViews: views,
        removeStart: 0,
        removeCount: -1,
        opts
      },
      done
    );
  }

  /** @internal */
  @Method()
  setRouteId(
    id: string,
    params: ComponentProps | undefined,
    direction: RouterDirection
  ): Promise<RouteWrite> {
    const active = this.getActiveSync();
    if (matches(active, id, params)) {
      return Promise.resolve({
        changed: false,
        element: active.element
      });
    }

    let resolve: (result: RouteWrite) => void;
    const promise = new Promise<RouteWrite>(r => (resolve = r));
    let finish: Promise<boolean>;
    const commonOpts: NavOptions = {
      updateURL: false,
      viewIsReady: enteringEl => {
        let mark: () => void;
        const p = new Promise<void>(r => (mark = r));
        resolve({
          changed: true,
          element: enteringEl,
          markVisible: async () => {
            mark();
            await finish;
          }
        });
        return p;
      }
    };

    if (direction === 'root') {
      finish = this.setRoot(id, params, commonOpts);
    } else {
      const viewController = this.views.find(v => matches(v, id, params));

      if (viewController) {
        finish = this.popTo(viewController, {
          ...commonOpts,
          direction: 'back'
        });
      } else if (direction === 'forward') {
        finish = this.push(id, params, commonOpts);
      } else if (direction === 'back') {
        finish = this.setRoot(id, params, {
          ...commonOpts,
          direction: 'back',
          animated: true
        });
      }
    }
    return promise;
  }

  /** @internal */
  @Method()
  async getRouteId(): Promise<RouteID | undefined> {
    const active = this.getActiveSync();
    return active
      ? {
          id: active.element!.tagName,
          params: active.params,
          element: active.element
        }
      : undefined;
  }

  /**
   * Gets the active view
   */
  @Method()
  getActive(): Promise<ViewController | undefined> {
    return Promise.resolve(this.getActiveSync());
  }

  /**
   * Returns the view at the index
   */
  @Method()
  getByIndex(index: number): Promise<ViewController | undefined> {
    return Promise.resolve(this.views[index]);
  }

  /**
   * Returns `true` or false if the current view can go back
   */
  @Method()
  canGoBack(view?: ViewController): Promise<boolean> {
    return Promise.resolve(this.canGoBackSync(view));
  }

  /**
   * Gets the previous view
   */
  @Method()
  getPrevious(view?: ViewController): Promise<ViewController | undefined> {
    return Promise.resolve(this.getPreviousSync(view));
  }

  /**
   * Returns the number of views
   */
  @Method()
  length(): Promise<number> {
    return Promise.resolve(this.getLength());
  }

  getLength() {
    return this.views.length;
  }

  private getActiveSync(): ViewController | undefined {
    return this.views[this.views.length - 1];
  }

  private canGoBackSync(view = this.getActiveSync()): boolean {
    return !!(view && this.getPreviousSync(view));
  }

  private getPreviousSync(view = this.getActiveSync()): ViewController | undefined {
    if (!view) {
      return undefined;
    }
    const views = this.views;
    const index = views.indexOf(view);
    return index > 0 ? views[index - 1] : undefined;
  }

  // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
  // 1. _nextTrns(): consumes the next transition in the queue
  // 2. _viewInit(): initializes enteringView if required
  // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
  // 4. _postViewInit(): add/remove the views from the navigation stack
  // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
  // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
  // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
  // 8. _transitionFinish(): called once the transition finishes
  // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.
  private queueTrns(
    ti: TransitionInstruction,
    done: TransitionDoneFn | undefined
  ): Promise<boolean> {
    if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
      return Promise.resolve(false);
    }

    const promise = new Promise<boolean>((resolve, reject) => {
      ti.resolve = resolve;
      ti.reject = reject;
    });
    ti.done = done;

    // Normalize empty
    if (ti.insertViews && ti.insertViews.length === 0) {
      ti.insertViews = undefined;
    }

    // Enqueue transition instruction
    this.transInstr.push(ti);

    // if there isn't a transition already happening
    // then this will kick off this transition
    this.nextTrns();

    return promise;
  }

  private success(result: NavResult, ti: TransitionInstruction) {
    if (this.destroyed) {
      this.fireError('nav controller was destroyed', ti);
      return;
    }

    if (ti.done) {
      ti.done(
        result.hasCompleted,
        result.requiresTransition,
        result.enteringView,
        result.leavingView,
        result.direction
      );
    }
    ti.resolve!(result.hasCompleted);

    if (ti.opts!.updateURL !== false && this.useRouter) {
      const router = this.win.document.querySelector('ion-router');
      if (router) {
        const direction = result.direction === 'back' ? 'back' : 'forward';
        router.navChanged(direction);
      }
    }
  }

  private failed(rejectReason: any, ti: TransitionInstruction) {
    if (this.destroyed) {
      this.fireError('nav controller was destroyed', ti);
      return;
    }
    this.transInstr.length = 0;
    this.fireError(rejectReason, ti);
  }

  private fireError(rejectReason: any, ti: TransitionInstruction) {
    if (ti.done) {
      ti.done(false, false, rejectReason);
    }
    if (ti.reject && !this.destroyed) {
      ti.reject(rejectReason);
    } else {
      ti.resolve!(false);
    }
  }

  private nextTrns(): boolean {
    // this is the framework's bread 'n butta function
    // only one transition is allowed at any given time
    if (this.isTransitioning) {
      return false;
    }

    // there is no transition happening right now
    // get the next instruction
    const ti = this.transInstr.shift();
    if (!ti) {
      return false;
    }

    this.runTransition(ti);
    return true;
  }

  private async runTransition(ti: TransitionInstruction) {
    try {
      // set that this nav is actively transitioning
      this.ionNavWillChange.emit();
      this.isTransitioning = true;
      this.prepareTI(ti);

      const leavingView = this.getActiveSync();
      const enteringView = this.getEnteringView(ti, leavingView);

      if (!leavingView && !enteringView) {
        throw new Error('no views in the stack to be removed');
      }

      if (enteringView && enteringView.state === VIEW_STATE_NEW) {
        await enteringView.init(this.el);
      }
      this.postViewInit(enteringView, leavingView, ti);

      // Needs transition?
      const requiresTransition =
        (ti.enteringRequiresTransition || ti.leavingRequiresTransition) &&
        enteringView !== leavingView;
      const result = requiresTransition
        ? await this.transition(enteringView!, leavingView, ti)
        : {
            // transition is not required, so we are already done!
            // they're inserting/removing the views somewhere in the middle or
            // beginning, so visually nothing needs to animate/transition
            // resolve immediately because there's no animation that's happening
            hasCompleted: true,
            requiresTransition: false
          };

      this.success(result, ti);
      this.ionNavDidChange.emit();
    } catch (rejectReason) {
      this.failed(rejectReason, ti);
    }
    this.isTransitioning = false;
    this.nextTrns();
  }

  private prepareTI(ti: TransitionInstruction) {
    const viewsLength = this.views.length;

    ti.opts = ti.opts || {};

    if (ti.opts.delegate === undefined) {
      ti.opts.delegate = this.delegate;
    }
    if (ti.removeView !== undefined) {
      assert(ti.removeStart !== undefined, 'removeView needs removeStart');
      assert(ti.removeCount !== undefined, 'removeView needs removeCount');

      const index = this.views.indexOf(ti.removeView);
      if (index < 0) {
        throw new Error('removeView was not found');
      }
      ti.removeStart! += index;
    }
    if (ti.removeStart !== undefined) {
      if (ti.removeStart < 0) {
        ti.removeStart = viewsLength - 1;
      }
      if (ti.removeCount! < 0) {
        ti.removeCount = viewsLength - ti.removeStart;
      }
      ti.leavingRequiresTransition =
        ti.removeCount! > 0 && ti.removeStart + ti.removeCount! === viewsLength;
    }

    if (ti.insertViews) {
      // allow -1 to be passed in to auto push it on the end
      // and clean up the index if it's larger then the size of the stack
      if (ti.insertStart! < 0 || ti.insertStart! > viewsLength) {
        ti.insertStart = viewsLength;
      }
      ti.enteringRequiresTransition = ti.insertStart === viewsLength;
    }

    const insertViews = ti.insertViews;
    if (!insertViews) {
      return;
    }
    assert(insertViews.length > 0, 'length can not be zero');
    const viewControllers = convertToViews(insertViews);

    if (viewControllers.length === 0) {
      throw new Error('invalid views to insert');
    }

    // Check all the inserted view are correct
    for (const view of viewControllers) {
      view.delegate = ti.opts.delegate;
      const nav = view.nav;
      if (nav && nav !== this) {
        throw new Error('inserted view was already inserted');
      }
      if (view.state === VIEW_STATE_DESTROYED) {
        throw new Error('inserted view was already destroyed');
      }
    }
    ti.insertViews = viewControllers;
  }

  private getEnteringView(
    ti: TransitionInstruction,
    leavingView: ViewController | undefined
  ): ViewController | undefined {
    const insertViews = ti.insertViews;
    if (insertViews !== undefined) {
      // grab the very last view of the views to be inserted
      // and initialize it as the new entering view
      return insertViews[insertViews.length - 1];
    }

    const removeStart = ti.removeStart;
    if (removeStart !== undefined) {
      const views = this.views;
      const removeEnd = removeStart + ti.removeCount!;
      for (let i = views.length - 1; i >= 0; i--) {
        const view = views[i];
        if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
          return view;
        }
      }
    }
    return undefined;
  }

  private postViewInit(
    enteringView: ViewController | undefined,
    leavingView: ViewController | undefined,
    ti: TransitionInstruction
  ) {
    assert(
      leavingView || enteringView,
      'Both leavingView and enteringView are null'
    );
    assert(ti.resolve, 'resolve must be valid');
    assert(ti.reject, 'reject must be valid');

    const opts = ti.opts!;
    const insertViews = ti.insertViews;
    const removeStart = ti.removeStart;
    const removeCount = ti.removeCount;
    let destroyQueue: ViewController[] | undefined;

    // there are views to remove
    if (removeStart !== undefined && removeCount !== undefined) {
      assert(removeStart >= 0, 'removeStart can not be negative');
      assert(removeCount >= 0, 'removeCount can not be negative');

      destroyQueue = [];
      for (let i = 0; i < removeCount; i++) {
        const view = this.views[i + removeStart];
        if (view && view !== enteringView && view !== leavingView) {
          destroyQueue.push(view);
        }
      }
      // default the direction to "back"
      opts.direction = opts.direction || 'back';
    }

    const finalBalance =
      this.views.length +
      (insertViews !== undefined ? insertViews.length : 0) -
      (removeCount !== undefined ? removeCount : 0);
    assert(finalBalance >= 0, 'final balance can not be negative');
    if (finalBalance === 0) {
      console.warn(
        `You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.`,
        this,
        this.el
      );

      throw new Error('navigation stack needs at least one root page');
    }

    // At this point the transition can not be rejected, any throw should be an error
    // there are views to insert
    if (insertViews) {
      // add the views to the
      let insertIndex = ti.insertStart!;
      for (const view of insertViews) {
        this.insertViewAt(view, insertIndex);
        insertIndex++;
      }

      if (ti.enteringRequiresTransition) {
        // default to forward if not already set
        opts.direction = opts.direction || 'forward';
      }
    }

    // if the views to be removed are in the beginning or middle
    // and there is not a view that needs to visually transition out
    // then just destroy them and don't transition anything
    // batch all of lifecycles together
    // let's make sure, callbacks are zoned
    if (destroyQueue && destroyQueue.length > 0) {
      for (const view of destroyQueue) {
        lifecycle(view.element, LIFECYCLE_WILL_LEAVE);
        lifecycle(view.element, LIFECYCLE_DID_LEAVE);
        lifecycle(view.element, LIFECYCLE_WILL_UNLOAD);
      }

      // once all lifecycle events has been delivered, we can safely detroy the views
      for (const view of destroyQueue) {
        this.destroyView(view);
      }
    }
  }

  private async transition(
    enteringView: ViewController,
    leavingView: ViewController | undefined,
    ti: TransitionInstruction
  ): Promise<NavResult> {
    // we should animate (duration > 0) if the pushed page is not the first one (startup)
    // or if it is a portal (modal, actionsheet, etc.)
    const opts = ti.opts!;

    const progressCallback = opts.progressAnimation
      ? (ani: Animation | undefined) => this.sbAni = ani
      : undefined;

    const enteringEl = enteringView.element!;
    const leavingEl = leavingView && leavingView.element!;
    const animationOpts: TransitionOptions = {
      mode: this.mode,
      showGoBack: this.canGoBackSync(enteringView),
      queue: this.queue,
      window: this.win,
      baseEl: this.el,
      animationBuilder: this.animation || opts.animationBuilder || this.config.get('navAnimation'),
      progressCallback,
      animated: this.animated && this.config.getBoolean('animated', true),

      enteringEl,
      leavingEl,

      ...opts
    };
    const { hasCompleted } = await transition(animationOpts);
    return this.transitionFinish(hasCompleted, enteringView, leavingView, opts);
  }

  private transitionFinish(
    hasCompleted: boolean,
    enteringView: ViewController,
    leavingView: ViewController | undefined,
    opts: NavOptions
  ): NavResult {
    const cleanupView = hasCompleted ? enteringView : leavingView;
    if (cleanupView) {
      this.cleanup(cleanupView);
    }

    return {
      hasCompleted,
      requiresTransition: true,
      enteringView,
      leavingView,
      direction: opts.direction
    };
  }

  private insertViewAt(view: ViewController, index: number) {
    const views = this.views;
    const existingIndex = views.indexOf(view);
    if (existingIndex > -1) {
      // this view is already in the stack!!
      // move it to its new location
      assert(view.nav === this, 'view is not part of the nav');
      views.splice(index, 0, views.splice(existingIndex, 1)[0]);
    } else {
      assert(!view.nav, 'nav is used');
      // this is a new view to add to the stack
      // create the new entering view
      view.nav = this;

      // insert the entering view into the correct index in the stack
      views.splice(index, 0, view);
    }
  }

  private removeView(view: ViewController) {
    assert(
      view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED,
      'view state should be loaded or destroyed'
    );

    const views = this.views;
    const index = views.indexOf(view);
    assert(index > -1, 'view must be part of the stack');
    if (index >= 0) {
      views.splice(index, 1);
    }
  }

  private destroyView(view: ViewController) {
    view._destroy();
    this.removeView(view);
  }

  /**
   * DOM WRITE
   */
  private cleanup(activeView: ViewController) {
    // ok, cleanup time!! Destroy all of the views that are
    // INACTIVE and come after the active view
    // only do this if the views exist, though
    if (this.destroyed) {
      return;
    }
    const views = this.views;
    const activeViewIndex = views.indexOf(activeView);

    for (let i = views.length - 1; i >= 0; i--) {
      const view = views[i];
      const element = view.element;
      if (i > activeViewIndex) {
        // this view comes after the active view
        // let's unload it
        lifecycle(element, LIFECYCLE_WILL_UNLOAD);
        this.destroyView(view);
      } else if (i < activeViewIndex) {
        // this view comes before the active view
        // and it is not a portal then ensure it is hidden
        setPageHidden(element!, true);
      }
    }
  }

  private canStart(): boolean {
    return (
      !!this.swipeGesture &&
      !this.isTransitioning &&
      this.transInstr.length === 0 &&
      this.canGoBackSync()
    );
  }

  private onStart() {
    this.queueTrns({
      removeStart: -1,
      removeCount: 1,
      opts: {
        direction: 'back',
        progressAnimation: true
      }
    }, undefined);
  }

  private onMove(stepValue: number) {
    if (this.sbAni) {
      this.sbAni.progressStep(stepValue);
    }
  }

  private onEnd(shouldComplete: boolean, stepValue: number, dur: number) {
    if (this.sbAni) {
      this.sbAni.progressEnd(shouldComplete, stepValue, dur);
    }
  }

  render() {
    return (
      <slot></slot>
    );
  }
}
