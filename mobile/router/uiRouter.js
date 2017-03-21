/**
 * Created by sks on 2016/9/27.
 */
/**
 * Created by Administrator on 2016/9/26 0026.
 */
//该路由定义为一个堆栈式【只有两层】
angular.module('mobileApp').config(function ($stateProvider, $urlRouterProvider, basePathProvider) {
    //父级
    $stateProvider.state('tabs', {
        url: '/tabs',
        abstract: true,
        templateUrl: basePathProvider.routerTemplatePath + 'tabsTemp.html',
    });
    //一级页
    $stateProvider.state('tabs.topicType', {
        url: '/topicType',
        views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'topicTypeTemp.html',
            }
        }
    });
    $stateProvider.state('tabs.information', {
        url: '/information',
        views: {
            'information-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'informationTemp.html',
            }
        }
    });
    $stateProvider.state('tabs.myself', {
        url: '/myself',
        views: {
            'myself-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'myselfTemp.html',
            }
        }
    });
    //一级页结束
    //二级页
    $stateProvider.state('tabs.subjectPage', {
        url: '/subjectPage',
        views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'subjectPageTemp.html',
            }
        }
    });
    $stateProvider.state('tabs.install', {
        url: '/install',
        views: {
            'myself-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'installTemp.html',
            }
        }
    });
    //二级页结束
    //题型跳转
    $stateProvider.state('tabs.home_ridio', {
        url: '/home_choice',
            views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_choice.html',
            }
        }
    });
    $stateProvider.state('tabs.home_check', {
        url: '/home_check',
        views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_check.html',
            }
        }
    });
    $stateProvider.state('tabs.home_answer', {
        url: '/home_answer',
        views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_answer.html',
            }
        }
    });

    $stateProvider.state('tabs.home_recognized', {
        url: '/home_recognized',
        views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_recognized.html',
            }   
        }
    });


    $stateProvider.state('tabs.home_space', {
        url: '/home_space',
        views: {
            'topicType-tab': {
                templateUrl: basePathProvider.routerTemplatePath + 'home_space.html',
            }
        }
    });
    //题型跳转结束
    //默认导航
    $urlRouterProvider.otherwise("/tabs/topicType");
});

