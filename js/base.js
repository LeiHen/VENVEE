// JavaScript Document

/**
 * @name		:
 * @author	:si
 * @dependent:全局变量的命名函数
 *  GLOBAL.namespace("A.BOOK");GLOBAL.A.BOOK.name="b";
 */
var GLOBAL = {};
GLOBAL.namespace = function (str) {
    var arr = str.split("."),
        o = GLOBAL;
    for (i = (arr[0] == "GLOBAL") ? 1 : 0; i < ar.length; i++) {
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }
}
/* @end **/

/**
 * @name		:loading
 * @author	:si
 * @dependent:载入loading 效果
 */
function loading(ID) {
    var loadID = document.getElementById(ID);
    var i = 1;
    loadID.style.opacity = 1;

    function defer() {
        loadID.nextSibling
        loadID.style.opacity = loadID.style.opacity - 0.05;
        var opa = loadID.style.opacity;
        if (opa >= 0.1) {
            setTimeout(defer, 20);
            //            consoleDebug("还没结束么");
        } else {
            //            consoleDebug(opa);
            loadID.style.display = "none";
        }
    }
    defer();
}
/* @end **/

/**
 * @name		:get_previousSibling
 * @author	:si
 * @dependent:获得当前节点的上一个兄弟（除空节点）
 */
function get_previousSibling(node) {
    var x = node.previousSibling;
    while (x.nodeType != 1) {
        x = x.previousSibling;
    }
    return x;
}
/* @end **/

/**
 * @name		:get_nextSibling
 * @author	:si
 * @dependent:获得当前节点的下一个兄弟（除空节点）
 */
function get_nextSibling(node) {
    var y = node.nextSibling;
    while (y.nodeType != 1) {
        y = y.nextSibling;
    }
    return y;
}
/* @end **/


/**
 * @name		:toTop
 * @author	:si
 * @dependent:返回顶部
 */
function toTop() {
    //首先将#back-to-top隐藏 
    $("#back-to-top").hide();

    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(600);
            $("#goReturn").stop().animate({
                bottom: 80
            }, 800);
        } else {
            $("#back-to-top").fadeOut(600);
            $("#goReturn").stop().animate({
                bottom: 25
            }, 800);
        }
    });

    //当点击跳转链接后，回到页面顶部位置
    $("#back-to-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 400);
        return false;
    });

};
/* @end **/

/**
 * @name		:BOMIEVersions
 * @author	:si
 * @dependent:浏览器IE版本判断
 */
function BOMIEVersions() {
    var v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : false;
}
/* @end **/

/**
 * @name		:getDate
 * @author	:si
 * @dependent:获取日期
 */
function getDate() {
    var Digital = new Date();

    if (document.all) {
        var year = Digital.getYear();
    } else {
        var year = Digital.getYear() + 1900;
    }
    var month = Digital.getMonth() + 1;
    var date = Digital.getDate();
    console.log(year, month, date);
    // return year,month,date

    // var hours=Digital.getHours();
    // var minutes=Digital.getMinutes();
    // var seconds=Digital.getSeconds();

    // if (minutes<=9){minutes="0"+minutes;}
    // if (seconds<=9){seconds="0"+seconds;}  
    // if (hours<=9){hours="0"+hours;}

    // var time=year+"年"+month+"月"+date+"日";
    // var name1=document.getElementById("date_time").value=time;
    // var ctime=hours+":"+minutes+":"+seconds;
    // var name1=document.getElementById("date_ctime").value=ctime;
    // setTimeout("showDate()",1000);
}

/* @end **/

/**
 * @name		:btnBindEnter
 * @author	:si
 * @dependent:按钮回车键
 *  btnID为元素ID,scopeID为作用域ID,作用域可为空 默认window
 */
function btnBindEnter(btnID, scopeID) {
    var button = document.getElementById(btnID);
    var scope = document.getElementById(scopeID);
    var temporary;

    function bindEnter(event) {
        if (event.keyCode == 13) {
            console.log("ENTER");
            button.click();
            event.returnValue = false;
        }
    }

    temporary = scope ? scope : window;
    temporary.onkeydown = function bindEnter(event) {
        if (event.keyCode == 13) {
            console.log("ENTER");
            button.click();
            event.returnValue = false;
        }
    };
}
/* @end **/

/**
 * @name		:searchDefault
 * @author	:si
 * @dependent:搜索框默认值
 */
function searchDefault(sID) {
    var searchID = document.getElementById(sID);
    //获得焦点
    searchID.onfocus = function () {
        if (searchID.value == "SEARCH") {
            searchID.value = "";
        }
    };
    //失去焦点
    searchID.onblur = function () {
        if (searchID.value == "") {
            searchID.value = "SEARCH";
        }
    };
}
/* @end **/


/**
 * @name		:consoleDebug
 * @author	:si
 * @dependent:调试函数
 */
function consoleDebug(info) {
    console.log(info);
}
/* @end **/


/**
 * @name		:
 * @author	:si
 * @version	:
 * @type		:基类
 * @explain	:
 * @relating	:
 * @dependent:
 */

/* @end **/