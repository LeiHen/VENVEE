// JavaScript Document

//作品浮动显示
function worksLiskLiHoer(){
    $(".worksLisk>ul>li").hover(
        function () {
            var d=$(this).find(".worksCover-A").css("display");
            // alert(d);
            if(d=="block"){
                $(this).find(".worksDescribe").css("display","block").animate({top: 112}, 200);
            }
            else{
                return 
            }
        },
        function () {
            $(this).find(".worksDescribe").animate(
                {top: 180},
                200
            )
        }
    )
}

//图片最大880，超过等比例缩放
function worksImg880(){
    //width
    img=$(".worksContent li img");
    imgL=$(".worksContent li img").length;
    // var x=img;
    // alert(imgL);
    for (var i = 0; i < imgL; i++) {        
        w=img.eq(i).css("width");
        h=img.eq(i).css("height");
        intW=parseInt(w);
        intH=parseInt(h);
        // alert(intW);alert(intH);
        if (intW>880) {
            intH=intH/intW*880;
            img.eq(i).css("height",intH+"px");
            img.eq(i).css("width","880px");
        }        
    }
}

//兼容IE10以下不支持css3载入
function initLoadImg(element,classN){
    var name=document.getElementsByTagName(element);
    for(var i=0;i<name.length;i++){
        if( name[i].className == classN ){
            var xF=name[i].firstChild;
            while (xF.nodeType!= 1) {
                xF=xF.nextSibling;
            };
            xF.style.display="none";
            var xL=name[i].lastChild;
            while (xL.nodeType!= 1) {
                xL=xL.previousSibling;
            };
            xL.style.display="block";
        }
    }
}

//分页只有一页时隐藏
function pageOneHide(){
    var liL=$(".pageList ul li").length;
    liL<=1 ? $(".pageList").hide():$(".pageList").show();
}

//分页左右提示
function pageLRAlert(){
    var a=$(".pageList ul li a");
    var aL=a.length;
    var firstClass=a[0].className;
    var lastClass=a[aL-1].className;
    var promptText=$(".pagePrompt");

    $(".pageListL a").click(function(){
        if (firstClass=="pageListDef") {
            promptText.empty();
            promptText.html("第一页");
            promptText.fadeIn(1000);
            setTimeout(
                function(){promptText.fadeOut(1000);}
            ,2000);
            return false
        }
    });

    $(".pageListR a").click(function(){
        if (lastClass=="pageListDef") {
            promptText.empty();
            promptText.html("最后一页");
            promptText.fadeIn(100);
            setTimeout(
                function(){promptText.fadeOut(1000).hide();}
            ,2000);
            return false
        }
    });
}

//查看图
function worksImgBox() {                         
    $("a[name='worksImg']").imgbox({
        'zoomOpacity'   : true,
        'alignment'     : 'center',
        'overlayShow'   : true
    });
}