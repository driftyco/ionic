/**
 * Test the side menu directive. For more test coverage of the side menu,
 * see the core Ionic sideMenu controller tests.
 */
describe('Ionic Angular Side Menu', function() {
  var el;

  beforeEach(module('ionic.ui.sideMenu'));

  beforeEach(inject(function($compile, $rootScope) {
    el = $compile('<side-menus></side-menus>')($rootScope);
  }));

  it('Should init', function() {
    var scope = el.scope();
    expect(scope.sideMenuController).not.toBe(undefined);
  });
});

describe('Ionic Side Menu Content Directive', function () {
  var $compile, element, scope, sideMenusCtrl;

  beforeEach(module('ionic.ui.sideMenu'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    scope = _$rootScope_;

    var sideMenus = $compile('<side-menus>')(scope).appendTo('body');

    sideMenuCtrl = sideMenus.controller('sideMenus');
    spyOn(sideMenuCtrl, '_handleDrag');

    element = angular.element('<div side-menu-content>').appendTo(sideMenus);

    $compile(element)(scope);
    scope.$digest();
  }));

  it('Should handle drag', function () {
    ionic.trigger('drag', {target: element[0]});

    expect(sideMenuCtrl._handleDrag).toHaveBeenCalled();
  });

  it('Should not handle drag when prevented', function () {
    var event = new CustomEvent('mousedown', {bubbles: true, cancelable: true});
    event.preventDefault();
    element[0].dispatchEvent(event);

    ionic.trigger('drag', {target: element[0]});

    expect(sideMenuCtrl._handleDrag).not.toHaveBeenCalled();
  });
});

describe('Ionic Side Menu Directive', function () {
  var element, scope, sideMenuCtrl;

  beforeEach(module('ionic.ui.sideMenu'));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    var $compile = _$compile_;
    var $rootScope = _$rootScope_;

    var sideMenus = $compile('<side-menus>')($rootScope);

    sideMenuCtrl = sideMenus.controller('sideMenus');

    element = angular.element('<side-menu side="left">').appendTo(sideMenus);
    $compile(element)($rootScope);

    scope = element.scope();
    scope.$digest();
  }));

  it('Should set attributes on the controller', function () {
    expect(sideMenuCtrl.left.isEnabled).not.toBe(undefined);
    expect(sideMenuCtrl.left.pushDown).not.toBe(undefined);
    expect(sideMenuCtrl.left.bringUp).not.toBe(undefined);
  });

  it('Should remove the attributes it sets on the controller', function () {
    scope.$destroy();
    expect(sideMenuCtrl.left.isEnabled).toBe(undefined);
    expect(sideMenuCtrl.left.pushDown).toBe(undefined);
    expect(sideMenuCtrl.left.bringUp).toBe(undefined);
  });
});
