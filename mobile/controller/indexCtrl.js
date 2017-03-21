/**
 * Created by Administrator on 2016/9/26 0026.
 */
angular.module('mobileApp').controller('indexCtrl',function ($scope,$ionicSlideBoxDelegate) {
    //使二级页的轮播自动激活，即跳转回来的时候不需点击激活就可以轮播
    $scope.Dong = function() {
        $ionicSlideBoxDelegate.stop();
        $ionicSlideBoxDelegate.start();
    };
});
