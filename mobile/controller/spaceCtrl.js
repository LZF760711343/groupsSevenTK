angular.module('mobileApp').controller('spaceCtrl', function ($scope,spaceServer,infoServer,$ionicPopup) {
    $scope.result = {};
    angular.copy(infoServer,$scope.result);
    $scope.result.data=spaceServer.spaceTopic;
    $scope.spaceImg=spaceServer.spaceImg;
    //  alert（警告） 对话框
    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: '答案',
            template: 'lzf'
        });
    };
    $scope.Null=function () {
        $scope.name='';
        $('textarea').val('');
    }
});

