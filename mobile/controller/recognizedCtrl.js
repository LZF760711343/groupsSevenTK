angular.module('mobileApp').controller('recognizedCtrl', function ($scope, recognizedServer,infoServer,$ionicPopup) {
    $scope.result = {};
    angular.copy(infoServer,$scope.result);
    $scope.result.data=recognizedServer.recognizedTopic;
    $scope.recognizedImg=recognizedServer.recognizedImg;
    //  alert（警告） 对话框
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: '答案',
            template: '对'
        });
    };
});



