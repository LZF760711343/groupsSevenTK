/**
 * Created by Administrator on 2016/11/17 0017.
 */
angular.module('mobileApp').factory('answerServer',function (basePath) {
    var data={
            answerImg:basePath.imgPath+'/banner@2x.png',
            answerTopic:[
                    {
                        name:'form中的input有哪些类型？',
                        info:'text radio checkbox file button image submit reset hidden'
                    },
                    {
                        name:'table标签中border,cellpadding；td标签中colspan,rowspan分别起什么作用？',
                        info:'border边界  cellpadding边距  colspan跨列数  rowspan跨行数'
                    },
                    {
                        name:'form中的input可以设置readonly和disable，请问这两项属性有什么区别？',
                        info:'readonly不可编辑,但可以选择和复制 disable不能编辑复制选择'
                    },
                    {
                        name:'JS中的三种弹出式消息提醒(警告窗口、确认窗口、信息输入窗口)的命令是什么？',
                        info:'警告窗口：alert 确认窗口：confirm 信息输入窗口：prompt'
                    },
                    {
                        name:'谈谈javascript数组排序方法sort()的使用，重点介绍sort()参数的使用及其内部机制',
                        info:'sort的实现的功能类似JAVA的比较器，数据排序从多维数组的第一维开始排序可以自己定义排序方法，很不多的函数'
                    },
                    {
                        name:'简述DIV元素和SPAN元素的区别',
                        info:'DIV是块元素，SPAN是内嵌元素。块元素相当于内嵌元素在前后各加一个<br>换行。其实，块元素和行内元素也不是一成不变的，只要给块元素定义display:inline，块元素就成了内嵌元素，同样地，给内嵌元素定义了display:block就成了块元素了。'
                    },
                    {
                        name:'结合<span id=”outer”><span id=”inner”>text</span></span>这段结构，谈谈innerHTML outerHTML innerText之间的区别。',
                        info:'innerHTML对象里面的HTML,outerHTML包括对象和里面的innerText对象里面的文本'
                    },
                    {
                        name:'说几条XHTML规范的内容（至少3条）',
                        info:'属性加引号，不能有不匹配的标签，加定义'
                    }
                ]
    };

    return data;
    
});