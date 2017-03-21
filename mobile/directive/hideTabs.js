/**
 * Created by Administrator on 2016/11/20 0020.
 */
angular.module('mobileApp').directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });
            scope.$on('$ionicView.beforeLeave', function() {
                    $rootScope.hideTabs = false;
            });
        }
    };
});

