(function() {
'use strict';

/**
 * @description
 * The slideBox is a multi-page container where you can be swipe or drag between pages
 */

angular.module('ionic.ui.slideBox', [])

.directive('slideBox', ['$compile', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    controller: ['$scope', '$element', function($scope, $element) {
      $scope.slides = [];
      this.slideAdded = function() {
        $scope.slides.push({});
      };
    }],
    scope: {},
    template: '<div class="slide-box">\
            <div class="slide-box-slides" ng-transclude>\
            </div>\
          </div>',

    link: function($scope, $element, $attr, slideBoxCtrl) {
      // If the pager should show, append it to the slide box
      if($attr.showPager !== "false") {
        var childScope = $scope.$new();
        var pager = $compile('<pager></pager>')(childScope);
        $element.append(pager);

        $scope.slideBox = new ionic.views.SlideBox({
          el: $element[0],
          slideChanged: function(slideIndex) {
            $scope.$parent.$broadcast('slideBox.slideChanged', slideIndex);
          }
        });
      }
    }
  }
}])

.directive('slide', function() {
  return {
    restrict: 'E',
    replace: true,
    require: '^slideBox',
    transclude: true,
    template: '<div class="slide-box-slide" ng-transclude></div>',
    compile: function(element, attr, transclude) {
      return function($scope, $element, $attr, slideBoxCtrl) {
        slideBoxCtrl.slideAdded();
      }
    }
  }
})

.directive('pager', function() {
  return {
    restrict: 'E',
    replace: true,
    require: '^slideBox',
    template: '<div class="slide-box-pager"><span ng-repeat="slide in slides"><i class="icon ion-record"></i></span></div>'
  }

});

})();
