/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').factory('topicTypeServer', function (basePath) {

    var data ={
        topicTypeBanner:basePath.imgPath + '/banner-@2x.png',
        topicType: [
            {
                id: 1,
                name: '单选题',
                icon:'ion-android-checkbox',
                bg: basePath.imgPath + '/huangjuxing@2x.png'
            },
            {
                id: 2,
                name: '多选题',
                icon:'ion-android-checkbox-outline',
                bg: basePath.imgPath + '/hongjuxing@2x.png'
            },
            {
                id: 3,
                name: '问答题',
                icon:'ion-settings',
                bg: basePath.imgPath + '/lanjuxing-@2x.png'
            },
            {
                id: 4,
                name: '判断题',
                icon:'ion-clipboard',
                bg: basePath.imgPath + '/lvjuxing@2x.png'
            },
            {
                id: 5,
                name: '填空题',
                icon:'ion-help-circled',
                bg: basePath.imgPath + '/zijuxing@2x.png'
            },
        ],
    }
    return data;
});