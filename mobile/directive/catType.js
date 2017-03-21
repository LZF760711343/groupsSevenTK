/**
 * Created by Administrator on 2016/11/15 0015.
 */
angular.module('mobileApp').directive('catType', function (basePath,catServer) {
    return {
        restrict: 'EA',
        scope: false,
        templateUrl: basePath.directiveTemplatePath+'topicTypeTpl.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            // console.log('sssssss');
            // $scope.imgPath=basePath.imgPath;//图片路径
            // $scope.banner=catServer.topicTypeBanner;//banner数据
            // $scope.data=catServer.topicType;//题型选择数据
        }
    };
});