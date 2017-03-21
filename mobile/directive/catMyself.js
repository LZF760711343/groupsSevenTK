/**
 * Created by Administrator on 2016/11/15 0015.
 */
angular.module('mobileApp').directive('catMyself', function (basePath,catServer) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: basePath.directiveTemplatePath+'catMyselfTpl.html',
        require: '',
        controller: function ($scope, $ionicPopup, $ionicActionSheet) {
            $scope.imgPath=basePath.imgPath;//图片路径
            $scope.myselfImg=catServer.myselfImg;
            //  confirm 对话框,退出软件
            $scope.showConfirm = function () {
                var confirmPopup = $ionicPopup.confirm({
                    title: '退出软件',
                    template: '你确定退出软件吗？',
                    buttons:[
                        {text: '取消'},
                        {
                            text: '<b>确定</b>',
                            type: 'button-positive',
                        }
                    ]
                });
                confirmPopup.then(function (res) {
                    if (res) {
                        console.log('You are sure');
                    } else {
                        console.log('You are not sure');
                    }
                });
            };
            // 点击按钮触发，或一些其他的触发条件,分享
            $scope.show = function () {
                // 显示操作表
                $ionicActionSheet.show({
                    buttons: [
                        {text: '分享至微信好友'},
                        {text: '分享至微信朋友圈'},
                        {text: '分享至QQ好友'},
                        {text: '分享至QQ空间'}
                    ],
                    titleText: 'Share Friends',
                    cancelText: '取消分享',
                    buttonClicked: function (index) {
                        return true;
                    }
                });
            };
            //意见反馈
            $scope.opinionAdd = function () {
                $scope.opinion = {
                    type: null,
                    content: null
                };
                var myPopup = $ionicPopup.show({
                    template: '<div><label>意见类型:<input type="text" ng-model="opinion.type"/></label></div>' +
                    '<div></label>反馈内容：<textarea rows="8" ng-model="opinion.content"></textarea></textarea></label></div>',
                    title: '意见反馈',
                    subTitle: '我们会认真审查你所提出的宝贵意见',
                    scope: $scope,
                    buttons: [
                        {text: '取消'},
                        {
                            text: '<b>确定</b>',
                            type: 'button-positive'
                        }
                    ]
                });
            }
        }
    };
});