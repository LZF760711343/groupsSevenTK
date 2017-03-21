angular.module('mobileApp').controller('topicTypeCtrl',function ($scope,topicTypeServer,$window) {

    $scope.banner=topicTypeServer.topicTypeBanner;
    $scope.data=topicTypeServer.topicType;
    $scope.colClick=function (id) {
        sessionStorage.setItem('topicTypeId',id);
        $window.location='#/tabs/subjectPage';
    };
});