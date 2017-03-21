/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').factory('spaceServer',function (basePath) {
    var data={
            spaceImg:basePath.imgPath+'/banner@2x.png',
            spaceTopic:[
                {
                    name:'window.alert = function(){};____;alert(1);',
                    info:'html '
                },
                {
                    name:'改变元素的外边距用________，改变元素的内填充用________。',
                    info:'margin  padding'
                },
                {
                    name:'在Table中，TR是________，TD是________。',
                    info:'行列'
                },
                {
                    name:'如果给一行两列的表格（table）定义高度样式，在________标签中定义最合理，最能减少代码的臃肿。',
                    info:'tr'
                },
                {
                    name:'对ul li的样式设成无，应该是用什么属性________。',
                    info:'list-styl-type：none'
                },
                {
                    name:'在新窗口打开链接的方法是________。',
                    info:'target=_bank '
                },
                {
                    name:'Color:#666666;可缩写为________。',
                    info:'color：#666 '
                },
                {
                    name:'合理的页面布局中常听过结构与表现分离，那么结构是________，表现是________',
                    info:'div css'
                }
        ],
    }
    return data;
    
});