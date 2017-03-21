angular.module('mobileApp').controller('subjectCtrl', function ($scope, subjectTypeServer, $window) {
    $scope.subjectImg=subjectTypeServer.subjectImg;
    $scope.subjectData=subjectTypeServer.subject;
    $scope.colClick = function (subjectType) {
        sessionStorage.setItem('subjectId', subjectType.id);
        sessionStorage.setItem('subjectTitle', subjectType.subjectTitle);
        var  topicTypeId= sessionStorage.getItem('topicTypeId');
        switch (topicTypeId){
            case '1':
                $window.location = '#/tabs/home_choice';
                break;
            case '2':
                $window.location = '#/tabs/home_check';
                break;
            case '3':
                $window.location = '#/tabs/home_answer';
                break;
            case '4':
                $window.location = '#/tabs/home_recognized';
                break;
            case '5':
                $window.location = '#/tabs/home_space';
                break;
        }
    };

});