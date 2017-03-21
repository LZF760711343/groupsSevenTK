/**
 * Created by Administrator on 2016/11/20 0020.
 */
angular.module('mobileApp').factory('subjectTypeServer',function (basePath) {
    var subjectData={
        subjectImg:basePath.imgPath+'/bannerPage@2x.png',
        subject: [
            {
                id:1,
                subjectImg: basePath.imgPath + '/ios.png',
                subjectTitle: 'IOS'
            },
            {
                id:2,
                subjectImg: basePath.imgPath + '/UI.png',
                subjectTitle: 'UI'
            },
            {
                id:3,
                subjectImg: basePath.imgPath + '/angular.png',
                subjectTitle: 'Angular'
            },
            {
                id:4,
                subjectImg: basePath.imgPath + '/CSS3.png',
                subjectTitle: 'CSS3'
            },
            {
                id:5,
                subjectImg: basePath.imgPath + '/HTML5.png',
                subjectTitle: 'HTML5'
            },
            {
                id:6,
                subjectImg: basePath.imgPath + '/js.png',
                subjectTitle: 'JS'
            },
            {
                id:7,
                subjectImg: basePath.imgPath + '/PHP.png',
                subjectTitle: 'PHP'
            },
            {
                id:8,
                subjectImg: basePath.imgPath + '/Java.png',
                subjectTitle: 'Java'
            },
            {
                id:9,
                subjectImg: basePath.imgPath + '/web.png',
                subjectTitle: 'Web'
            },
            {
                id:10,
                subjectImg: basePath.imgPath + '/PHP.png',
                subjectTitle: 'PHP'
            },
            {
                id:11,
                subjectImg: basePath.imgPath + '/Java.png',
                subjectTitle: 'Java'
            },
            {
                id:12,
                subjectImg: basePath.imgPath + '/web.png',
                subjectTitle: 'Web'
            },
            {
                id:13,
                subjectImg: basePath.imgPath + '/PHP.png',
                subjectTitle: 'PHP'
            },
            {
                id:14,
                subjectImg: basePath.imgPath + '/Java.png',
                subjectTitle: 'Java'
            },
            {
                id:15,
                subjectImg: basePath.imgPath + '/web.png',
                subjectTitle: 'Web'
            },
            {
                id:16,
                subjectImg: basePath.imgPath + '/PHP.png',
                subjectTitle: 'PHP'
            },
            {
                id:17,
                subjectImg: basePath.imgPath + '/Java.png',
                subjectTitle: 'Java'
            },
            {
                id:18,
                subjectImg: basePath.imgPath + '/web.png',
                subjectTitle: 'Web'
            },
            {
                id:19,
                subjectImg: basePath.imgPath + '/PHP.png',
                subjectTitle: 'PHP'
            },
            {
                id:20,
                subjectImg: basePath.imgPath + '/Java.png',
                subjectTitle: 'Java'
            },
            {
                id:21,
                subjectImg: basePath.imgPath + '/web.png',
                subjectTitle: 'Web'
            }
        ]
}
    return subjectData;
});