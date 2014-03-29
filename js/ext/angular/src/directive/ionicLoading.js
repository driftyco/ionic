(function() {
'use strict';

angular.module('ionic.ui.loading', [])

/**
 * @private
 * $ionicLoading service is documented
 */
.directive('ionLoading', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    link: function($scope, $element){
      $element.addClass($scope.animation || '');
    },
    template: '<div class="loading-backdrop" ng-class="{\'show-backdrop\': showBackdrop}">' +
                '<div class="loading" ng-transclude>' +
                '</div>' +
              '</div>'
  };
});

})();
