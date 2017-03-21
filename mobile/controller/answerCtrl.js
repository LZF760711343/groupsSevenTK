angular.module('mobileApp').controller('answerCtrl', function ($scope,answerServer,infoServer,$ionicPopup) {
    $scope.result = {};
    angular.copy(infoServer,$scope.result);
    $scope.result.data=answerServer.answerTopic;
    $scope.answerImg=answerServer.answerImg;
    //  alert（警告） 对话框
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: '答案',
            template: '123456'
        });
    };
    $scope.Null=function () {
        $scope.name='';
        $('textarea').val('');
    }
});

