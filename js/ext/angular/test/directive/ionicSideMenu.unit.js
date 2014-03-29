/**
 * Test the side menu directive. For more test coverage of the side menu,
 * see the core Ionic sideMenu controller tests.
 */
describe('Ionic Angular Side Menu', function() {
  var el;

  beforeEach(module('ionic'));

  it('should register with $ionicSideMenuDelegate', inject(function($compile, $rootScope, $ionicSideMenuDelegate) {
    var deregisterSpy = jasmine.createSpy('deregister');
    spyOn($ionicSideMenuDelegate, '_registerInstance').andCallFake(function() {
      return deregisterSpy;
    });
    var el = $compile('<ion-side-menus delegate-handle="superHandle">')($rootScope.$new());
    $rootScope.$apply();

    expect(el.controller('ionSideMenus')).toBeDefined();
    expect($ionicSideMenuDelegate._registerInstance)
      .toHaveBeenCalledWith(el.controller('ionSideMenus'), 'superHandle');

    expect(deregisterSpy).not.toHaveBeenCalled();
    el.scope().$destroy();
    expect(deregisterSpy).toHaveBeenCalled();
  }));

  it('should canDragContent', inject(function($compile, $rootScope) {
    var el = $compile('<ion-side-menus><div ion-side-menu-content></div></ion-side-menus>')($rootScope.$new());
    $rootScope.$apply();
    expect(el.controller('ionSideMenus').canDragContent()).toBe(true);
    expect(el.scope().dragContent).toBe(true);

    el.controller('ionSideMenus').canDragContent(false);
    expect(el.controller('ionSideMenus').canDragContent()).toBe(false);
    expect(el.scope().dragContent).toBe(false);

    el.controller('ionSideMenus').canDragContent(true);
    expect(el.controller('ionSideMenus').canDragContent()).toBe(true);
    expect(el.scope().dragContent).toBe(true);
  }));
});

describe('Ionic Side Menu Content Directive', function () {
  var $compile, element, scope, sideMenusCtrl;

  beforeEach(module('ionic.ui.sideMenu'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    scope = _$rootScope_;

    var sideMenus = $compile('<ion-side-menus>')(scope).appendTo('body');

    sideMenuCtrl = sideMenus.controller('sideMenus');
    spyOn(sideMenuCtrl, '_handleDrag');

    element = angular.element('<div ion-side-menu-content>').appendTo(sideMenus);

    $compile(element)(scope);
    scope.$digest();
  }));
});

describe('Ionic Side Menu Directive', function () {
  var element, scope, sideMenuCtrl;

  beforeEach(module('ionic.ui.sideMenu'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    var $compile = _$compile_;
    var $rootScope = _$rootScope_.$new();

    $rootScope.widthVal = 250;
    $rootScope.enabledVal = true;

    var sideMenus = $compile('<ion-side-menus>')($rootScope);

    sideMenuCtrl = sideMenus.controller('ionSideMenus');

    element = angular.element(
      '<ion-side-menu side="left" is-enabled="enabledVal" width="widthVal">' +
        '<div class="content"></div>' +
      '</div>'
    ).appendTo(sideMenus);
    $compile(element)($rootScope);

    scope = element.scope();
    scope.$digest();
  }));

  it('Should set attributes on the controller', function () {
    expect(sideMenuCtrl.left.isEnabled).not.toBe(undefined);
    expect(sideMenuCtrl.left.pushDown).not.toBe(undefined);
    expect(sideMenuCtrl.left.bringUp).not.toBe(undefined);
  });

  it('should transclude content with same scope', function() {
    var content = angular.element(element[0].querySelector('.content'));
    expect(content.length).toBe(1);
    expect(content.scope()).toBe(scope);
  });

  it('should watch isEnabled', function() {
    expect(sideMenuCtrl.left.isEnabled).toBe(true);
    scope.$apply('enabledVal = false');
    expect(sideMenuCtrl.left.isEnabled).toBe(false);
  });

  it('should watch width', function() {
    expect(sideMenuCtrl.left.width).toBe(250);
    expect(sideMenuCtrl.left.el.style.width).toBe('250px');
    scope.$apply('widthVal = 222');
    expect(sideMenuCtrl.left.width).toBe(222);
    expect(sideMenuCtrl.left.el.style.width).toBe('222px');
  });
});

describe('menuToggle directive', function() {
  beforeEach(module('ionic'));
  it('should error without a side menu', inject(function($compile, $rootScope) {
    expect(function() {
      $compile('<div menu-toggle>')($rootScope.$new());
    }).toThrow();
  }));
  var toggleLeftSpy, toggleRightSpy;
  function setup(side) {
    var el = angular.element('<div menu-toggle="' + (side||'') + '">');
    toggleLeftSpy = jasmine.createSpy('toggleLeft')
    toggleRightSpy = jasmine.createSpy('toggleRight')
    el.data('$ionSideMenusController', {
      toggleLeft: toggleLeftSpy,
      toggleRight: toggleRightSpy
    });
    inject(function($compile, $rootScope) {
      $compile(el)($rootScope.$new());
      $rootScope.$apply();
    });
    return el;
  }
  it('should toggle left on click by default', function() {
    var el = setup();
    expect(toggleLeftSpy).not.toHaveBeenCalled();
    expect(toggleRightSpy).not.toHaveBeenCalled();
    el.triggerHandler('click');
    expect(toggleLeftSpy).toHaveBeenCalled();
    expect(toggleRightSpy).not.toHaveBeenCalled();
  });
  it('should toggle left on click with attr', function() {
    var el = setup('left');
    expect(toggleLeftSpy).not.toHaveBeenCalled();
    expect(toggleRightSpy).not.toHaveBeenCalled();
    el.triggerHandler('click');
    expect(toggleLeftSpy).toHaveBeenCalled();
    expect(toggleRightSpy).not.toHaveBeenCalled();
  });
  it('should toggle right on click with attr', function() {
    var el = setup('right');
    expect(toggleLeftSpy).not.toHaveBeenCalled();
    expect(toggleRightSpy).not.toHaveBeenCalled();
    el.triggerHandler('click');
    expect(toggleLeftSpy).not.toHaveBeenCalled();
    expect(toggleRightSpy).toHaveBeenCalled();
  });
});

describe('menuClose directive', function() {
  beforeEach(module('ionic'));
  it('should error without a side menu', inject(function($compile, $rootScope) {
    expect(function() {
      $compile('<div menu-close>')($rootScope.$new());
    }).toThrow();
  }));
  it('should close on click', inject(function($compile, $rootScope) {
    var el = angular.element('<div menu-close>');
    var closeSpy = jasmine.createSpy('sideMenuClose')
    el.data('$ionSideMenusController', {
      close: closeSpy
    });
    $compile(el)($rootScope.$new());
    $rootScope.$apply();
    expect(closeSpy).not.toHaveBeenCalled();
    el.triggerHandler('click');
    expect(closeSpy).toHaveBeenCalled();
  }));
});
