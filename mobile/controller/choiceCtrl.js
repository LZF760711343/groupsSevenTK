angular.module('mobileApp').controller('choiceCtrl', function ($scope,choiceServer,infoServer,$ionicPopup) {
    $scope.result = {};
    angular.copy(infoServer,$scope.result);
    $scope.result.data=choiceServer.choiceTopic;
    $scope.choiceImg=choiceServer.choiceImg;
    //  alert（警告） 对话框
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: '答案',
            template: 'B'
        });
    };
    // infoServer.data = answerServer;
    // $scope.result = infoServer;
});

