/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').factory('checkServer',function (basePath) {
    var data={
            checkImg:basePath.imgPath+'/banner@2x.png',
            checkTopic:[
                {
                    name:'在HTML，下面哪个不属于HTML文档的基本组成部分?',
                    choice:[
                        {
                            name:'<STYLE></STYTLE>'
                        },
                        {
                            name:'<BODY></BODY>'
                        },
                        {
                            name:'<HTMI></HTMI>'
                        },
                        {
                            name:'<HEAD></HEAD>'
                        }
                    ],
                    info:'cd'
                }
                ,{
                    name:' 分析以下的CSS样式代码，可以得出 h1{color;limegreen;font-family;arial} ',
                    choice:[
                        {
                            name:'此段代码是一个HTML选择器 '
                        },
                        {
                            name:'选择器的名称是color'
                        },
                        {
                            name:'{} 部分的样式属性将作为h1元素的默认样式'
                        },
                        {
                            name:'limegreen和font-family都是值'
                        }
                    ],
                    info:'ac'
                },
                {
                    name:' 以下关于HTML语言中的表格的说法正确的是',
                    choice:[
                        {
                            name:'在HTML语言中，表格必须由<TABLE>标签、<TR>标签、<TD>标签组成，缺一不可 '
                        },
                        {
                            name:'有多少对<TD>标签，就有多少个单元格'
                        },
                        {
                            name:'有多少对<TR>标签，就有多少列'
                        },
                        {
                            name:' 有多少对<TD>标签，就有多少行'
                        }
                    ]
                    ,
                    info:'ad'
                },
                {
                    name:' 以下哪些是javascript的全局函数：',
                    choice:[
                        {
                            name:'escape '
                        },
                        {
                            name:'parseFloat'
                        },
                        {
                            name:'eval'
                        },
                        {
                            name:' setTimeout'
                        },
                        {
                            name:' alert'
                        }
                    ]
                    ,
                    info:'abc'
                },
                {
                    name:' 关于IFrame表述正确的有：',
                    choice:[
                        {
                            name:'经由过程IFrame，网页可以嵌入其他网页内容，并可以动态更改 '
                        },
                        {
                            name:'在雷同域名下，内嵌的IFrame可以获取外层'
                        },
                        {
                            name:'在雷同域名下，外层网页脚本可以获取IFrame网页内的对象'
                        },
                        {
                            name:' 可以经由过程脚本调剂IFrame的大小'
                        }
                    ]
                    ,
                    info:'abcd'
                },
                {
                    name:'关于表格表述正确的有：',
                    choice:[
                        {
                            name:'表格中可以包含TBODY元素 '
                        },
                        {
                            name:'表格中可以包含CAPTION元素'
                        },
                        {
                            name:'表格中可以包含多个TBODY元素'
                        },
                        {
                            name:'表格中可以包含COLGROUP元素'
                        },
                        {
                            name:'表格中可以包含COL元素'
                        }
                    ]
                    ,
                    info:'abcde'
                },
                {
                    name:' 关于IE的window对象表述正确的有：',
                    choice:[
                        {
                            name:'window.opener属性本身就是指向window对象'
                        },
                        {
                            name:'window.reload()办法可以用来刷新当前页面'
                        },
                        {
                            name:'window.location.href=”a.html”的感化都是把当前页面调换成a.html页面'
                        },
                        {
                            name:'定义了全局变量g;可以用window.g的体式格式来存取该变量'
                        },
                        {
                            name:' alert'
                        }
                    ]
                    ,
                    info:'acd'
                }
        ]
    }

    return data;
    
});