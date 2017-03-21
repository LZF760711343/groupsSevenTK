/**
 * Created by Administrator on 2016/11/14 0014.
 */
angular.module('mobileApp').factory('welcomeServer',function () {
    var welcomeData={
        url:'catNav.html',
        imgData:[
            {
                img:'/yindaoye1@2x.png'
            },
            {
                img:'/yindaoye2@2x.png'
            },
            {
                img:'/yindaoye3@2x.png'
            }
        ],
       goIndex: {
               goImg:'/jinyutiku-icon.png',
               goFont:'进入题库'
           }
       
    };
    return welcomeData;
});