//var index=0;
//var timer=null;
//$(function(){
//	//=======================header================================
//	
//	//===========================nav==================================
//	
//	//===========================轮播=====================================
//	init(index);
//	autoPlay();
//	$("#banner .center>div>a").mouseover(function(){
//		clearInterval(timer);
//		var $index=$(this).index();
//		init($index);
//	})
//	$("#banner .center>div>a").mouseout(function(){
//		index=$(this).index();
//		autoPlay();
//	})
//	$("#banner .center").mouseover(function(){
//		//=========首页==============
//		$("#banner .center>a").show();
//		$("#banner .center>a").first().stop().animate({
//			"left":0
//		},200)
//		$("#banner .center>a").last().stop().animate({
//			"right":0
//		},200)
//		//=========togirl=============
//		$("#banner >.banner>.center>a").stop().animate({
//			"opacity":1
////				"width":9px
//		},200)
//	})
//	$("#banner .center").mouseout(function(){
//		//=========首页==============
//		$("#banner .center>a").hide();
//		$("#banner .center>a").first().stop().animate({
//			"left":"80px"
//		},200)
//		$("#banner .center>a").last().stop().animate({
//			"right":"80px"
//		},200)
//		
//		//=========togirl=============
//		$("#banner>.banner>.center>a").show();
//		$("#banner >.banner>.center>a").stop().animate({
//			"opacity":.7
//		},200)
//	})
//	
//	/////////////////////注册登录////////////////////
//	// register
//	$(".register").click(function(){
//		//inputInit()
//		$("#bg").show()
//		$("#register").show()
//		$("#register").animate({"left":"20%"},300)
//		$("#register>.registerContent>.register").show()
//		$("#register>.registerContent>.login").hide()
//	})
//	//login
//	$(".login").click(function(){
//		$("#bg").show()
//		$("#register").show()
//		$("#register").animate({"left":"20%"},300)
//		$("#register>.registerContent>.login").show()
//		$("#register>.registerContent>.register").hide()
//	})
//	$("#register>a").click(function(){
//		inputInit();//关闭登录界面，清空邮箱，密码
//		$("#bg").hide()
//		$("#register").hide()
//		$("#register").animate({"left":"100%"},300)
//	})
//})
//
////轮播初始化
//function init(index){
//	$("#banner .center>ul>li").eq(index).fadeIn(500).siblings().fadeOut(500);
//	$("#banner .center>div>a").eq(index).css("background","#F45E4B");
//	$("#banner .center>div>a").eq(index).siblings().css("background","#999");
//}
////轮播自动播放
//function autoPlay(){
//	timer=setInterval(function(){
//		index++;
//		if(index>$("#banner .center>div>a").length-1){
//			index=0;
//		}
//		init(index);
//	},2000);
//}
//function inputInit(){
//	$("#register input").val("")
//	$("#register input").next().html("")
//}


// WSCSlideTransition    Transition的class名
// WSCSlideWrapper    轮播的jQuery对象
// WSCSlide     包裹轮播图片jQuery对象
// WSCSlide_img   轮播图片列表jQuery对象
// timerNum     循环时间
//function WSCMobileSlide(arg_obj) {
//  
//  function getTransform(el) {
//      var style = window.getComputedStyle($(el).get(0));
//      var matrix = new WebKitCSSMatrix(style.webkitTransform);
//      return matrix;
//  }
//
//  function slideAnimate(x, y) {
//      if (Math.abs(x) >= y) {
//          // $(".WSCSlide").removeClass("WSCSlideTransition");
//          $(".WSCSlide").css("-webkit-transform", "translate3d(0,0,0)");
//      } else {
//          // $(".WSCSlide").addClass("WSCSlideTransition");
//          $(".WSCSlide").css("-webkit-transform", "translate3d(" + x + "px,0,0)");
//      }
//  }
//
//  function getSlideTimer(timeNum) {
//      if(typeof(timeNum) == "undefined"){
//          timeNum = 3000;
//      }
//      var slideTimer = setInterval(function() {
//          var x = getTransform(".WSCSlide").m41;
//          x = x - ImgWidth;
//          slideAnimate(x, endPosition);
//
//      }, timeNum);
//      return slideTimer;
//  }
//
//
//  function touchDragMe($element) {
//  	
//      var gundongX = 0;
//      var gundongY = 0;
//      var d = document;
//      var g = 'getElementById';
//      var moveEle = $element;
//      var stx = sty = etx = ety = curX = curY = 0;
//
//      moveEle.on("touchstart", function(event) { //touchstart
//          $element.removeClass(transitionName);
//          clearInterval(slideTimer);
//          var event = event.originalEvent;
//          gundongX = 0;
//          gundongY = 0;
//
//
//          // 元素当前位置
//          etx = parseInt(getT3d(moveEle, "x"));
//          ety = parseInt(getT3d(moveEle, "y"));
//
//          // 手指位置
//          stx = event.touches[0].pageX;
//          sty = event.touches[0].pageY;
//      });
//
//      moveEle.on("touchmove", function(event) {
//          var event = event.originalEvent;
//          // 防止拖动页面
//          event.preventDefault();
//
//          // 手指位置 减去 元素当前位置 就是 要移动的距离
//          gundongX = event.touches[0].pageX - stx;
//          gundongY = event.touches[0].pageY - sty;
//
//          // 目标位置 就是 要移动的距离 加上 元素当前位置
//          curX = gundongX + etx;
//          curY = gundongY + ety;
//
//          // 自由移动
//          // moveEle.style.webkitTransform = 'translate3d(' + (curX) + 'px, ' + (curY) + 'px,0px)';
//          // 只能移动Y轴方向
//          // var realMoveEle = moveEle[0];
//          moveEle[0].style.webkitTransform = 'translate3d(' + (curX) + 'px, ' + 0 + 'px,0px)';
//
//
//      });
//      moveEle.on("touchend", function(event) {
//          // 手指接触屏幕的位置
//          var oriX = etx;
//          var oriY = ety;
//
//          // 手指离开屏幕的位置
//          etx = curX;
//          ety = curY;
//
//          var slidePosition = 0;
//          for (var i = 0; i < ImgWidth_arr_length + 1; i++) {
//              if (Math.abs(etx) > ImgWidth_arr[i]) {
//
//                  if (oriX > etx) {
//                      // 左滑
//                      slidePosition = -ImgWidth_arr[i + 1];
//                  } else {
//                      // 右滑
//                      slidePosition = -ImgWidth_arr[i];
//                  }
//              }
//
//          }
//          $element.addClass(transitionName);
//          slideAnimate(slidePosition, endPosition);
//          slideTimer = getSlideTimer(timerNum);
//      });
//
//      function getT3d(elem, ename) {
//          var elem = elem[0];
//          var str1 = elem.style.webkitTransform;
//          if (str1 == "") return "0";
//          str1 = str1.replace("translate3d(", "");
//          str1 = str1.replace(")", "");
//          var carr = str1.split(",");
//
//          if (ename == "x") return carr[0];
//          else if (ename == "y") return carr[1];
//          else if (ename == "z") return carr[2];
//          else return "";
//      }
//  }
//
//
//  var transitionName = arg_obj["WSCSlideTransition"] || "WSCSlideTransition";
//  var $WSCSlideWrapper = arg_obj["WSCSlideWrapper"] || $(".WSCSlideWrapper");
//  var $WSCSlide = arg_obj["WSCSlide"] || $(".WSCSlide");
//  var $WSCSlide_img = arg_obj["WSCSlide_img"] || $(".WSCSlide_img");
//  var timerNum = arg_obj["timerNum"] || 3000;
//
//  $WSCSlide_img.width($WSCSlideWrapper.width());
//  $WSCSlide_img.height($WSCSlideWrapper.height());
//
//  var ImgWidth_arr_length = $WSCSlide_img.length;
//  var ImgWidth = $WSCSlide_img.width();
//
//
//  $WSCSlide.width(ImgWidth * ImgWidth_arr_length);
//
//  var WSCSlideWidth = $WSCSlide.width();
//  // 轮播图终止位置
//  var endPosition = WSCSlideWidth - ImgWidth;
//
//  var ImgWidth_arr = [];
//  for (var i = 0; i < ImgWidth_arr_length; i++) {
//      ImgWidth_arr.push(i * ImgWidth);
//  }
//  // console.log(ImgWidth_arr);
//
//  var slideTimer = getSlideTimer(timerNum);
//
//  touchDragMe($WSCSlide, slideTimer);
//
//  return slideTimer;
//}
//WSCMobileSlide({
//  "WSCSlideTransition": "WSCSlideTransition",
//  "WSCSlideWrapper": $(".WSCSlideWrapper"),
//  "WSCSlide": $(".WSCSlide"),
//  "WSCSlide_img": $(".WSCSlide_img"),
//  "timerNum": 3000
//});
//


//自适应
function sizeShow(){
    var pic_w=$(window).width();
    var pic_h=pic_w*0.45;
    $(".slide").height(pic_h);
    $(".slide li").width(pic_w).height(pic_h);
    $(".slide ul").width(pic_w*5)
};

function scrollAuto(){
    sizeShow();
    $(window).resize(function(){sizeShow()});
    var oclass=$(".slide");
    var w=oclass.find("li").width();
    var iNow = 0, index = 1, timer = null;
    var touch={
            "s":[],
            "m":[],
            "e":[],
            "d":""
        };
    
    oclass[0].addEventListener('touchstart', function(e){
        touch.s[0] = e.targetTouches[0].pageX;
        touch.s[1] = e.targetTouches[0].pageY;
        touch.s[2] = (new Date()).getTime();
        clearInterval(timer)
    }, false);
    
    oclass[0].addEventListener('touchmove', function(e){
        var a=Math.abs(e.targetTouches[0].pageX-touch.s[0])
        var b=Math.abs(e.targetTouches[0].pageY-touch.s[1]);
        console.log("dMove:"+touch.d)
        if(a>=b && touch.d==""){
            touch.d=1;//左右
            //touch.m[0]=touch.s[0]
        }else if(touch.d==""){
            touch.d=0;//上下或者偏上下
        }
        console.log(a+":::"+b)
        if(touch.d==1){//左右滚动
           e.preventDefault();
            $(".slide ul").css({"left":-iNow*w+e.targetTouches[0].pageX-touch.s[0]});
           // touch.m[0]=e.targetTouches[0].pageX;
            //touch.m[1]=e.targetTouches[0].pageY;
        }
        
    }, false);
    
    oclass[0].addEventListener('touchend', function(e){
        console.log("dEnd:"+touch.d)
        if(touch.d==1){
            if((new Date()).getTime()-touch.s[2]>700){
                if(e.changedTouches[0].pageX-touch.s[0]>w/3){
                    auto("right")
                }else if(touch.s[0]-e.changedTouches[0].pageX>w/3){
                    auto("left")
                }else{
                    auto("reset")
                }
            }else{
                if(e.changedTouches[0].pageX>touch.s[0]){
                    auto("right");
                }else if(touch.s[0]>e.changedTouches[0].pageX){
                    auto("left")
                }
            }
        }
        touch.d="";
        timer=setInterval(function(){
            if(iNow>=$(".slide li").length-1){
                iNow=0;
            }else{
                iNow++
            }
            $(".slide ul").animate({"left":-w*iNow})
            $(".circle em").eq(iNow).addClass("active").siblings().removeClass("active");
            $(".title-box .title").html($(".slide li").eq(iNow).find("a").attr("title"))
        },3000);
        
    }, false);
    
    function auto(c){
        if(c=="left"){
            if(iNow>=$(".slide li").length-1){
                iNow=$(".slide li").length-1
            }else{
                iNow++
            }
            console.log(iNow)
            $(".slide ul").animate({"left":-w*iNow})
        }else if(c=="right"){
            if(iNow<=0){
                iNow=0
            }else{
                iNow--
            }
            $(".slide ul").animate({"left":-w*iNow})
        }else if(c=="reset"){
            $(".slide ul").animate({"left":-w*iNow})
        }
        $(".circle em").eq(iNow).addClass("active").siblings().removeClass("active");
        $(".title-box .title").html($(".slide li").eq(iNow).find("a").attr("title"))
    };
    
    timer=setInterval(function(){
        if(iNow>=$(".slide li").length-1){
            iNow=0;
        }else{
            iNow++
        }
        $(".slide ul").animate({"left":-w*iNow})
        $(".circle em").eq(iNow).addClass("active").siblings().removeClass("active");
        $(".title-box .title").html($(".slide li").eq(iNow).find("a").attr("title"))
    },4000);
    
}
$(function(){
    scrollAuto();
})



