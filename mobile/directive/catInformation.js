/**
 * Created by Administrator on 2016/11/15 0015.
 */
angular.module('mobileApp').directive('catInformation', function (basePath,catServer) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'catInformationTpl.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.imgPath=basePath.imgPath;
            $scope.informationBanner=catServer.informationBanner;
            $scope.informationData=catServer.informationData;
            $scope.doRefresh = function() {
                $scope.$broadcast('scroll.refreshComplete');
            };
        }
    };
});