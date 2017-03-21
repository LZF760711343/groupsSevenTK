/**
 * Created by Administrator on 2016/11/15 0015.
 */
angular.module('mobileApp').service('catServer',function () {
    var data={
        informationBanner:[
            {
                img:'/bbbbb@2x.png'
            },
            {
                img:'/baaaaa@2x.png'
            },
            {
                img:'/bcccc.png'
            },
        ],
        informationData:[
            {
                imgData:'/guanggao.png',
                title:'关于题库项目上线的公告',
                info:'新版题库即将上线。。。'
            },
            {
                imgData:'/guanggao-2.png',
                title:'学习心得分享',
                info:'使用题库后的分享，学习心得'
            },
            {
                imgData:'/guanggao-3.png',
                title:'Angular 2.X版本题目全新上线',
                info:'最新的Angular 2.X版本，助你学习全新技术'
            },
            {
                imgData:'/guanggao-4.png',
                title:'HTML5重磅来袭',
                info:'让你全面深入地了解各种关于HTML5技术'
            },
            {
                imgData:'/guanggao-4.png',
                title:'HTML5重磅来袭',
                info:'让你全面深入地了解各种关于HTML5技术'
            },
            {
                imgData:'/guanggao-3.png',
                title:'Angular 2.X版本题目全新上线',
                info:'最新的Angular 2.X版本，助你学习全新技术'
            },
            {
                imgData:'/guanggao-2.png',
                title:'学习心得分享',
                info:'使用题库后的分享，学习心得'
            },
            {
                imgData:'/guanggao-4.png',
                title:'HTML5重磅来袭',
                info:'让你全面深入地了解各种关于HTML5技术'
            },
            {
                imgData:'/guanggao-3.png',
                title:'Angular 2.X版本题目全新上线',
                info:'最新的Angular 2.X版本，助你学习全新技术'
            },
            {
                imgData:'/guanggao-2.png',
                title:'学习心得分享',
                info:'使用题库后的分享，学习心得'
            }
        ],
        myselfImg:'/logoaaa.png'
    };
    return data;
});