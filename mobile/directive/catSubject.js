/**
 * Created by Administrator on 2016/11/20 0020.
 */
angular.module('mobileApp').directive('catSubject', function (basePath,subjectTypeServer) {
    return {
        restrict: 'EA',
        scope: false,
        templateUrl: basePath.directiveTemplatePath+'catSubjectTpl.html',
        require: '',
        controller: function ($scope,$element,$attrs,$transclude) {
            // $scope.subjectImg=subjectTypeServer.subjectImg;
            // $scope.subjectData=subjectTypeServer.subject;
        },
        link: function (scope, iElement, iAttrs, controller) {
        }
    };
});