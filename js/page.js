// JavaScript Document

/**
 * @name	 :imgBgSwitch
 * @author	 :si
 * @dependent:首页背景切换
 */
function imgBgSwitch(minNum, maxNum, time) {
    var img = document.getElementById("index-bg").firstChild;
    if (img.nodeType != 1) {
        img = img.nextSibling
    }
    consoleDebug(img);
    var num = parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
    img.src = "images/bg" + num + ".jpg";

    function circulatory(num, minNum, maxNum, time) {
        consoleDebug(time);
        if (num < maxNum) {
            //                num=minNum;
            //                consoleDebug(num);
            num = num + 1;
            //                consoleDebug(num);
        } else {
            //                num=num+1;
            num = minNum;
            //            consoleDebug(num);
        }
        img.src = "images/bg" + num + ".jpg";
        //        setTimeout(circulatory(num,minNum,maxNum,time),time);
    }
    setTimeout(circulatory(num, minNum, maxNum, time), time);

}
/* @end **/


imgBgSwitch(1, 2, 10000);


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