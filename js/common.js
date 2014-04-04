// JavaScript Document

//简化信息显示隐藏
function simplifyInfo(sTop) {
    $(window).scroll(function () {
        if ($(window).scrollTop() > sTop) {
            $("#simplifyInfo").slideDown(200);
            $("#simplifyInfo").addClass("showSimplifyInfo");
        } else {
            $("#simplifyInfo").hide().removeClass("showSimplifyInfo");
        }
    });
}

//导航小于896px隐藏
function navLt896(){
    var width=document.documentElement.offsetWidth;
    width <= 869 ? $("#nav").hide(500) : $("#nav").show(500);
}

//导航显示隐藏
function rightsidebar(){
    //载入隐藏 初始化
    navLt896();
    //检测浏览器大小变化
    window.onresize=function(){
        navLt896();
        // (document.documentElement.clientWidth < document.body.clientWidth) ? navLt896():navLt896();
    }
    //浮动导航隐藏显示
    $("#nav").hover(   
        function () {         
            $(this).delay(0).animate({"margin-right":0},600);
            // $(this).animate({"margin-right":0},600);
            // $(this).stop();
            // $(this).stop().delay(0).animate({"margin-right":0},600);
        },
        function () {           
            $(this).delay(1000).animate({"margin-right":-70},600);
            // $(this).animate({"margin-right":-70},600);
            // $(this).stop();
           // $(this).stop().delay(1000).animate({"margin-right":-70},600); 
        }
    )
}

//导航跳转
function navLink(liID){
    var link="index.html#"+liID
    window.location.href=link;
    var x=liID=="meReward"||liID=="meEvaluate"||liID=="meRelation"||liID=="download";
    if(!x){
        var sTop = document.documentElement.scrollTop||document.body.scrollTop;
            sTop=sTop-30;
            $("body,html").scrollTop(sTop);
    }else{
        return;
    }
}

//返回顶部
function toTop(){   
    //首先将#back-to-top隐藏 
    $("#back-to-top").hide();
    
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(600);
            $("#goReturn").stop().animate({bottom:80},800);     
        } else {         
            $("#back-to-top").fadeOut(600);
            $("#goReturn").stop().animate({bottom:25},800);
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
