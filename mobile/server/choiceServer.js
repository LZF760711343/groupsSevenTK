/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').factory('choiceServer',function (basePath) {
    var data={
            choiceImg:basePath.imgPath+'/banner@2x.png',
            choiceTopic:[
            {
                name:'HTML指的是?',
                choice:[
                    {
                        name:'超文本标记语言'
                    },
                    {
                        name:'家庭工具标记语言'
                    },
                    {
                        name:'超链接和文本标记语言'
                    },
                    {
                        name:'文本标记语言'
                    }
                ],
                info:'A'
            },
                {
                    name:'Web标准的制定者是?',
                    choice:[
                        {
                            name:'微软'
                        },
                        {
                            name:'万维网'
                        },
                        {
                            name:'网景公司'
                        },
                        {
                            name:'谷歌'
                        }
                    ],
                    info:'B'
                }
                ,{
                    name:'在下列的HTML中，哪个是最大的标题?',
                    choice:[
                        {
                            name:'<h6>'
                        },
                        {
                            name:'<head>'
                        },
                        {
                            name:'<heading>'
                        },
                        {
                            name:'<h1>'
                        }
                    ],
                    info:'D'
                },{
                    name:'请选择产生粗体字的HTML标签：',
                    choice:[
                        {
                            name:'<bold>'
                        },
                        {
                            name:'<bb>'
                        },
                        {
                            name:'<b>'
                        },
                        {
                            name:'<bld>'
                        }
                    ],
                    info:'C'
                },{
                    name:'请选择产生斜体字的HTML标签：',
                    choice:[
                        {
                            name:'<i>'
                        },
                        {
                            name:'<italics>'
                        },
                        {
                            name:'<li>'
                        },
                        {
                            name:'<ul>'
                        }
                    ],
                    info:'A'
                },{
                    name:'javascript的数据类型不包括:',
                    choice:[
                        {
                            name:'汉字型'
                        },
                        {
                            name:'数值型'
                        },
                        {
                            name:'对象型'
                        },
                        {
                            name:'布尔型'
                        }
                    ],
                    info:'A'
                },{
                    name:'以下哪条语句不能创建对象：',
                    choice:[
                        {
                            name:'var obj = (); '
                        },
                        {
                            name:'var obj = [];'
                        },
                        {
                            name:'var obj = {};'
                        },
                        {
                            name:'var obj = //;'
                        }
                    ],
                    info:'D'
                },{
                    name:'javascript的单行注释方式:',
                    choice:[
                        {
                            name:'{} '
                        },
                        {
                            name:'<!--> '
                        },
                        {
                            name:' // '
                        },
                        {
                            name:'/* * * * */ '
                        }
                    ],
                    info:'C'
                },{
                    name:'写 "Hello World" 的正确 Javascript 语法是:',
                    choice:[
                        {
                            name:'("Hello World") '
                        },
                        {
                            name:'"Hello World" '
                        },
                        {
                            name:'response.write("Hello World") '
                        },
                        {
                            name:'document.write("Hello World") '
                        }
                    ],
                    info:'D'
                },{
                    name:'如何在警告框中写入 "Hello World"？',
                    choice:[
                        {
                            name:'alertBox="Hello World" '
                        },
                        {
                            name:'msgBox("Hello World”) '
                        },
                        {
                            name:'alert("Hello World”)'
                        },
                        {
                            name:'alertBox("Hello World”)'
                        }
                    ],
                    info:'C'
                },{
                    name:'如何编写当 i 等于 5 时执行一些语句的条件语句？',
                    choice:[
                        {
                            name:'if (i==5)'
                        },
                        {
                            name:'if i=5 then'
                        },
                        {
                            name:'if i=5'
                        },
                        {
                            name:'if i==5 then'
                        }
                    ],
                    info:'A'
                },{
                    name:'jQuery中如果需要匹配包含文本的元素，用下面哪种来实现？',
                    choice:[
                        {
                            name:'text()'
                        },
                        {
                            name:'contains() '
                        },
                        {
                            name:'input()'
                        },
                        {
                            name:'attr(name) '
                        }
                    ],
                    info:'A'
                },{
                    name:'在 JavaScript 中，有多少种不同类型的循环:',
                    choice:[
                        {
                            name:'两种。for 循环和 while 循环。'
                        },
                        {
                            name:'三种。for 循环、while 循环、do...while 。'
                        },
                        {
                            name:'一种。for 循环。'
                        }
                    ],
                    info:'C'
                },{
                    name:'在一个框架的属性面板中，不能设置下面哪一项。',
                    choice:[
                        {
                            name:'源文件'
                        },
                        {
                            name:'边框颜色'
                        },
                        {
                            name:'边框宽度'
                        },
                        {
                            name:'滚动条 '
                        }
                    ],
                    info:'C'
                },{
                    name:'CSS样式表根据所在网页的位置，可分为?',
                    choice:[
                        {
                            name:'行内样式表、内嵌样式表、混合样式表'
                        },
                        {
                            name:'行内样式表、内嵌样式表、外部样式表'
                        },
                        {
                            name:'外部样式表、内嵌样式表、导入样式表'
                        },
                        {
                            name:'外部样式表、混合样式表、导入样式表'
                        }
                    ],
                    info:'B'
                },{
                    name:'对于标签，其中*代表GET或',
                    choice:[
                        {
                            name:'SET'
                        },
                        {
                            name:'PUT'
                        },
                        {
                            name:'POST'
                        },
                        {
                            name:'INPUT'
                        }
                    ],
                    info:'C'
                },{
                    name:'HTML代码表示?',
                    choice:[
                        {
                            name:' 创建表格'
                        },
                        {
                            name:'创建一个滚动菜单'
                        },
                        {
                            name:'设置每个表单项的内容'
                        },
                        {
                            name:'创建一个下拉菜单 '
                        }
                    ],
                    info:'D'
                },{
                    name:'在CSS中下面哪种方法表示超链接文字在鼠标经过时，超链接文字无下划线',
                    choice:[
                        {
                            name:'A:link{TEXT-DECORATION: underline }'
                        },
                        {
                            name:'A:hover {TEXT-DECORATION: none}'
                        },
                        {
                            name:' A:active {TEXT-DECORATION: blink }'
                        },
                        {
                            name:'A:visited {TEXT-DECORATION: overline }'
                        }
                    ],
                    info:'B'
                },{
                    name:'若将Dreamweaver中２个横向相邻的单元格合并，则两单元格中文字会:',
                    choice:[
                        {
                            name:'文字合并'
                        },
                        {
                            name:'左单元格文字丢失'
                        },
                        {
                            name:'右单元格文字丢失'
                        },
                        {
                            name:'系统出错 '
                        }
                    ],
                    info:'A'
                },{
                    name:'ID为left的DIV标签，用CSS设置DIV的左边为红色实线，下面设置正确的是',
                    choice:[
                        {
                            name:'style=”border-top: #ff0000 1 solid;”'
                        },
                        {
                            name:'style=”border-left: 1, #ff0000 ,solid;”'
                        },
                        {
                            name:'style=”border-left: 1 #ff0000 solid;”'
                        },
                        {
                            name:'style=”border-right: 1, #ff0000, dashed;”'
                        }
                    ],
                    info:'C'
                },{
                    name:'一个有 3 个框架的 Web 页实际上有几个独立 的HTML 文件?',
                    choice:[
                        {
                            name:'2'
                        },
                        {
                            name:'3'
                        },
                        {
                            name:'4'
                        },
                        {
                            name:'5'
                        }
                    ],
                    info:'C'
                },{
                    name:'下列标签可以不成对出现的是',
                    choice:[
                        {
                            name:'〈HTML〉〈/HTML〉'
                        },
                        {
                            name:'〈P〉 〈/P〉'
                        },
                        {
                            name:'〈TITLE〉〈/TITLE〉'
                        },
                        {
                            name:'〈BODY〉〈/BODY〉'
                        }
                    ],
                    info:'B'
                },{
                    name:'下列那个不是CSS选择符',
                    choice:[
                        {
                            name:'p'
                        },
                        {
                            name:'.td'
                        },
                        {
                            name:'#box'
                        },
                        {
                            name:'.shop'
                        }
                    ],
                    info:'A'
                },{
                    name:'在CSS的三种选择符种，哪个优先级最高?',
                    choice:[
                        {
                            name:'标签选择符'
                        },
                        {
                            name:'类选择符号'
                        },
                        {
                            name:'ID选择符'
                        }
                    ],
                    info:'C'
                }
            
        ],
    }

    return data;
    
});