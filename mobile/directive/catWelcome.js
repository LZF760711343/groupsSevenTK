/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').directive('catWelcome', function (basePath,welcomeServer) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'welcomeTpl.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            $scope.url=welcomeServer.url;
            $scope.firstImg=welcomeServer.firstImg;
            $scope.imgData=welcomeServer.imgData;
            $scope.goIndex=welcomeServer.goIndex;
            $scope.imgPath=basePath.imgPath;
        }
    };
});