(function() {
'use strict';

angular.module('ionic.ui.service.scrollDelegate', [])

/**
 * @ngdoc service
 * @name $ionicScrollDelegate
 * @module ionic
 * @group page layout
 * @description
 * Allows you to have some control over a scrollable area (created by an
 * {@link ionic.directive:ionContent} or {@link ionic.directive:ionScroll}
 * directive).
 *
 * Inject it into a controller, create a new instance based upon the current scope,
 * and its methods will send messages to the nearest scrollView and all of
 * its children.
 *
 * @usage
 * ```html
 * <ion-content ng-controller="MyController">
 *   <button class="button" ng-click="scrollToTop()">
 *     Scroll To Top
 *   </button>
 * </ion-content>
 * ```
 * ```js
 * function MyController($scope, $ionicScrollDelegate) {
 *   $scope.scrollToTop = function() {
 *     var delegate = $ionicScrollDelegate($scope);
 *     delegate.scrollTop();
 *   };
 * }
 * ```
 */
.factory('$ionicScrollDelegate', ['$rootScope', '$timeout', '$location', function($rootScope, $timeout, $location) {

  function getScrollCtrl($scope) {
    var ctrl;
    while ($scope) {
      if ( (ctrl = $scope.$$ionicScrollController) ) {
        return ctrl;
      }
      $scope = $scope.$parent;
    }
    return ctrl;
  }

  function ionicScrollDelegate($scope) {
    var scrollCtrl = getScrollCtrl($scope);
    var scrollScope = scrollCtrl && scrollCtrl.$scope || $rootScope;

    return {
      /**
       * @ngdoc method
       * @name $ionicScrollDelegate#scrollTop
       * @description Used on an instance of $ionicScrollDelegate.
       * @param {boolean=} shouldAnimate Whether the scroll should animate.
       */
      scrollTop: function(animate) {
        scrollScope.$broadcast('scroll.scrollTop', animate);
      },
      /**
       * @ngdoc method
       * @name $ionicScrollDelegate#scrollBottom
       * @description Used on an instance of $ionicScrollDelegate.
       * @param {boolean=} shouldAnimate Whether the scroll should animate.
       */
      scrollBottom: function(animate) {
        scrollScope.$broadcast('scroll.scrollBottom', animate);
      },
      /**
       * @ngdoc method
       * @name $ionicScrollDelegate#scroll
       * @description Used on an instance of $ionicScrollDelegate.
       * @param {number} left The x-value to scroll to.
       * @param {number} top The y-value to scroll to.
       * @param {boolean=} shouldAnimate Whether the scroll should animate.
       */
      scrollTo: function(left, top, animate) {
        scrollScope.$broadcast('scroll.scrollTo', left, top, animate);
      },
      /**
       * @ngdoc method
       * @name $ionicScrollDelegate#anchorScroll
       * @description Used on an instance of $ionicScrollDelegate.
       *
       * Tell the scrollView to scroll to the element with an id
       * matching window.location.hash.
       *
       * If no matching element is found, it will scroll to top.
       *
       * @param {boolean=} shouldAnimate Whether the scroll should animate.
       */
      anchorScroll: function(animate) {
        scrollScope.$broadcast('scroll.anchorScroll', animate);
      },
      /**
       * @ngdoc method
       * @name $ionicScrollDelegate#resize
       * @description Used on an instance of $ionicScrollDelegate.
       *
       * Tell the scrollView to recalculate the size of its container.
       */
      resize: function() {
        scrollScope.$broadcast('scroll.resize');
      },
      /**
       * @private
       */
      tapScrollToTop: function(element, animate) {
        var _this = this;
        if (!angular.isDefined(animate)) {
          animate = true;
        }

        ionic.on('tap', function(e) {
          var target = e.target;
          //Don't scroll to top for a button click
          if (ionic.DomUtil.getParentOrSelfWithClass(target, 'button')) {
            return;
          }

          var el = element[0];
          var bounds = el.getBoundingClientRect();

          if(ionic.DomUtil.rectContains(e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, bounds.left, bounds.top, bounds.left + bounds.width, bounds.top + 20)) {
            _this.scrollTop(animate);
          }
        }, element[0]);
      },

      /**
       * @private
       * Attempt to get the current scroll view in scope (if any)
       *
       * Note: will not work in an isolated scope context.
       */
      getScrollView: function() {
        return scrollCtrl && scrollCtrl.scrollView;
      }
    };
  }

  /**
   * @private
   * Register a scope and scroll view for scroll event handling.
   * $scope {Scope} the scope to register and listen for events
   */
  ionicScrollDelegate.register = function($scope, $element, scrollView) {

    var scrollEl = $element[0];

    function scrollViewResize() {
      // Run the resize after this digest
      return $timeout(function() {
        scrollView.resize();
      });
    }

    $element.on('scroll', function(e) {
      var detail = (e.originalEvent || e).detail || {};

      $scope.$onScroll && $scope.$onScroll({
        event: e,
        scrollTop: detail.scrollTop || 0,
        scrollLeft: detail.scrollLeft || 0
      });

    });

    $scope.$on('scroll.resize', scrollViewResize);

    $scope.$on('scroll.anchorScroll', function(e, animate) {
      scrollViewResize().then(function() {
        var hash = $location.hash();
        var elm;
        if (hash && (elm = document.getElementById(hash)) ) {
          var scroll = ionic.DomUtil.getPositionInParent(elm, scrollEl);
          scrollView.scrollTo(scroll.left, scroll.top, !!animate);
        } else {
          scrollView.scrollTo(0,0, !!animate);
        }
      });
    });

    $scope.$on('scroll.scrollTo', function(e, left, top, animate) {
      scrollViewResize().then(function() {
        scrollView.scrollTo(left, top, !!animate);
      });
    });
    $scope.$on('scroll.scrollTop', function(e, animate) {
      scrollViewResize().then(function() {
        scrollView.scrollTo(0, 0, !!animate);
      });
    });
    $scope.$on('scroll.scrollBottom', function(e, animate) {
      scrollViewResize().then(function() {
        var sv = scrollView;
        if (sv) {
          var max = sv.getScrollMax();
          sv.scrollTo(max.left, max.top, !!animate);
        }
      });
    });
  };

  return ionicScrollDelegate;
}]);

})(ionic);
