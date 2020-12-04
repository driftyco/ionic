import { AnimationBuilder } from '@ionic/core';
import React from 'react';

import { NavContext } from '../contexts/NavContext';
import { RouterOptions } from '../models';
import { RouterDirection } from '../models/RouterDirection';

import { attachProps, camelToDashCase, createForwardRef, dashToPascalCase, isCoveredByReact } from './utils';

interface IonicReactInternalProps<ElementType> extends React.HTMLAttributes<ElementType> {
  forwardedRef?: React.Ref<ElementType>;
  href?: string;
  routerLink?: string;
  ref?: React.Ref<any>;
  routerDirection?: RouterDirection;
  routerOptions?: RouterOptions;
  routerAnimation?: AnimationBuilder;
}

export const createReactComponent = <PropType, ElementType>(
  tagName: string,
  routerLinkComponent = false
) => {
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component<IonicReactInternalProps<PropType>> {
    context!: React.ContextType<typeof NavContext>;
    ref: React.RefObject<HTMLElement>;

    constructor(props: IonicReactInternalProps<PropType>) {
      super(props);
      // If we weren't given a ref to forward, we still need one
      // in order to attach props to the wrapped element.
      this.ref = React.createRef();
    }

    componentDidMount() {
      this.componentDidUpdate(this.props);
    }

    componentDidUpdate(prevProps: IonicReactInternalProps<PropType>) {
      // Try to use the forwarded ref to get the child node.
      // Otherwise, use the one we created.
      const node = (this.props.forwardedRef || this.ref.current!) as HTMLElement;
      attachProps(node, this.props, prevProps);
    }

    private handleClick = (e: React.MouseEvent<PropType>) => {
      const { routerLink, routerDirection, routerOptions, routerAnimation } = this.props;
      if (routerLink !== undefined) {
        e.preventDefault();
        this.context.navigate(routerLink, routerDirection, undefined, routerAnimation, routerOptions);
      }
    }

    render() {
      const { children, forwardedRef, style, className, ref, ...cProps } = this.props;

      // tslint:disable-next-line:strict-type-predicates
      const isRunningInBrowser = typeof document !== 'undefined';
      const propsToPass = Object.keys(cProps).reduce((acc, name) => {
        if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (isRunningInBrowser && isCoveredByReact(eventName)) {
            (acc as any)[name] = (cProps as any)[name];
          }
        } else if (typeof (cProps as any)[name] === 'string') {
          (acc as any)[camelToDashCase(name)] = (cProps as any)[name];
        }
        return acc;
      }, {});

      const newProps: IonicReactInternalProps<PropType> = {
        ...propsToPass,
        ref: forwardedRef || this.ref,
        style
      };

      if (isRunningInBrowser && routerLinkComponent) {
        if (this.props.routerLink && !this.props.href) {
          newProps.href = this.props.routerLink;
        }
        if (newProps.onClick) {
          const oldClick = newProps.onClick;
          newProps.onClick = (e: React.MouseEvent<PropType>) => {
            oldClick(e);
            if (!e.defaultPrevented) {
              this.handleClick(e);
            }
          };
        } else {
          newProps.onClick = this.handleClick;
        }
      }

      return React.createElement(
        tagName,
        newProps,
        children
      );
    }

    static get displayName() {
      return displayName;
    }

    static get contextType() {
      return NavContext;
    }
  };
  return createForwardRef<PropType, ElementType>(ReactComponent, displayName);
};
