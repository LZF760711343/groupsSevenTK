/**
 * Created by Administrator on 2016/11/18 0018.
 */
angular.module('mobileApp').factory('recognizedServer',function (basePath) {
    var data= {
        recognizedImg: basePath.imgPath + '/banner@2x.png',
        recognizedTopic:[
            {
                name: 'B3是CSS框架且是响应式的框架!',
                info: '对'
            },
            {
                name: 'XHTML是符合XML规范的HTML',
                info: '对'
            },
            {
                name: 'HTML文档的所有标签都是成对出现，如<h1>....<h1>。',
                info: '错'
            },
            {
                name: '在HTML文档中，可以将<title>元素嵌于<body>标签对之间。',
                info: '错'
            },
            {
                name: '在HTML文档中，只能用<p>标签标记段落。',
                info: '错'
            },
            {
                name: '在HTML文档中，超链接能够接其他文档中的特定位置。',
                info: '对'
            },
            {
                name: 'HTML语言的通用属性也包括name属性。',
                info: '错'
            },
            {
                name: '在设计HTML文档中必须安装Web服务器!',
                info: '错'
            },
            {
                name: '空字符串（""）也是字符串常量。',
                info: '对'
            },
            {
                name: '在定义JavaScript变量中，一定要指出变量名和值。',
                info: '错'
            },
            {
                name: '在css样式定义中，选择器就是html标签。',
                info: '错'
            },
            {
                name: '一个页面中只可以有一个Div。',
                info: '错'
            },
            {
                name: '在css层叠规则中，id选择器样式表的优先级高于类选择器。',
                info: '对'
            },
            {
                name: '在html文档结构树中，body元素都是所有可显示元素的祖先元素。',
                info: '对'
            },
            {
                name: 'JavaScript表达式的类型只取决于运算符，与操作数无关。',
                info: '错'
            }

        ]
    }


    return data;

});