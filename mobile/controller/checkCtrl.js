angular.module('mobileApp').controller('checkCtrl', function ($scope,checkServer,infoServer,$ionicPopup) {
    $scope.result = {};
    angular.copy(infoServer,$scope.result);
    $scope.result.data=checkServer.checkTopic;
    $scope.checkImg=checkServer.checkImg;
    //  alert（警告） 对话框
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: '答案',
            template: 'CD'
        });
    };
});

