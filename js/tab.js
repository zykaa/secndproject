$(function() {
	FastClick.attach(document.body);
});

$("body").fadeIn(5)
	//首页分类切换效果
$(function() {
	//轮播初始化
	function init(index) {
		$("#banner .center>ul>li").eq(index).fadeIn(500).siblings().fadeOut(500);
		$("#banner .center>div>a").eq(index).css("background", "#F45E4B");
		$("#banner .center>div>a").eq(index).siblings().css("background", "#999");
	}
	//轮播自动播放
	function autoPlay() {
		timer = setInterval(function() {
			index++;
			if(index > $("#banner .center>div>a").length - 1) {
				index = 0;
			}
			init(index);
		}, 2000);
	}

	//底部导航切换
	$(".footer ul li:nth-child(1)").on("click", function() {
		$(".theshangpinPage").css("display", "block").siblings(" .theFivePage , .theThirdPage  ,.xunpanpage ,.baopanpage").css("display", "none")

	})
	$(".footer ul li:nth-child(2)").on("click", function() {
		$(".xunpanpage").css("display", "block").siblings(" .theFivePage , .theThirdPage  ,.theshangpinPage ,.baopanpage").css("display", "none")

	})
	$(".footer ul li:nth-child(3)").on("click", function() {
		$(".theThirdPage").css("display", "block").siblings(" .theFivePage , .xunpanpage  ,.theshangpinPage ,.baopanpage").css("display", "none")

	})
	$(".footer ul li:nth-child(4)").on("click", function() {
		$(".baopanpage").css("display", "block").siblings(" .theFivePage , .xunpanpage  ,.theshangpinPage ,.theThirdPage").css("display", "none")

	})
	$(".footer ul li:nth-child(5)").on("click", function() {
		$(".theFivePage").css("display", "block").siblings("  .baopanpage , .xunpanpage  ,.theshangpinPage ,.theThirdPage").css("display", "none")

	})

	//	$(".theleft").on("click",function(){
	//		window.location.href="html/fenleixinxi.html"
	//		
	//		
	//	})

	$(".theleft").on("click", function() {
		mui.openWindow({
			url: 'html/fenleixinxi.html',
			id: 'html/fenleixinxi.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	$(".feileiHeader .thefirstli li").on("click", function() {
		//		alert(12)
		$(this).children().css("color", "#EA0406").parents().siblings().children().css("color", "#000")
			//$(this).find("img:nth-child(2)").css("display","block").siblings("img").css("display","none")
		$(this).find("img:nth-child(1)").css("display", "none").siblings("img:nth-child(2)").css("display", "block").parents().siblings().find("img:nth-child(2)").css("display", "none").siblings("img:nth-child(1)").css("display", "block")
		$(this).css("border-bottom", "0.05rem solid #ea0406").siblings().css("border-bottom", "0.05rem solid #d6d6d6")
			//		$(this).parents().find(".toPig").css("display","none")

	})
	$(".feileiHeader .thefirstli li:nth-child(1)").on("click", function() {
		$(this).parents().find(".topigpok ul:nth-child(1)").css("display", "block").siblings().css("display", "none")

	})
	$(".feileiHeader .thefirstli li:nth-child(2)").on("click", function() {
		$(this).parents().find(".topigpok ul:nth-child(1)").css("display", "block").siblings().css("display", "none")

	})
	$(".feileiHeader .thefirstli li:nth-child(3)").on("click", function() {
		$(this).parents().find(".topigpok ul:nth-child(1)").css("display", "block").siblings().css("display", "none")

	})
	$(".feileiHeader .thefirstli li:nth-child(4)").on("click", function() {
		$(this).parents().find(".topigpok ul:nth-child(1)").css("display", "block").siblings().css("display", "none")

	})

	//footer
	$(".footer>ul>li").on("click", function() {
		$(this).children("img:nth-child(1)").css("display", "none").siblings().css("display", "block").parent().siblings().find("img:nth-child(1)").css("display", "block").siblings().css("display", "none")

	})

	//分类tab

	$(".fenleixinxi .toPig li").on("click", function() {

		$(this).css({
			"background": "#ea0607",
			"color": "#fff",
			"borderRadius": "10px"
		}).siblings().css({
			"background": "#e5e5e5",
			"color": "#000"

		})

	});

	//	$(".thefirstli li").on("click",function(){
	//		$(this)
	//		
	//		
	//		
	//	})

	// 大货	
	// 商品数字加减
	$(".up").on("click", function() {
		$(".down").css("color", "#000")
		var num = $(this).siblings(".num").html()
		num++
		$(this).siblings(".num").html(num)
	})
	$(".down").click(function() {
		var num = $(this).siblings(".num").html()
		num--
		if(num == 0) {
			$(this).css("color", "#ccc")
		} else {
			$(this).siblings(".num").html(num)
		}

	})

	$(".dahuoTabBanner ul li").on("click", function() {
			$(this).css({
				"color": "#ea0607",
				"borderBottom": "0.03rem solid #ea0607",
				"borderRadius": "0.03rem"

			}).siblings().css({
				"color": "#000",
				"borderBottom": "none",
				"borderRadius": "0.03rem"

			})

		})
		//header部分搜所选择

	$(".thebigheader ul li:nth-child(3)").on("click", function() {

		//		$(this).parents().find(".thebigheader").css("display","none").siblings().find(".searchshangpin").css("display","block")

		//		console.log(	$(this).parent().parent().css("display","none").children().children().siblings().find(".searchshangpin").css("display","block"));
	})

	//全部点击蒙版

	//	$(".dahuoTabBanner ul li:nth-child(1)").on("click",function(){
	//			$(this).closest().siblings().find(".theAllMengbanaa").slideToggle()

	//	})

	//收藏
	$(".addnumDaHuo ul li:nth-child(2) img:nth-child(1)").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block")
		$('.theAllMengbanaa').css("display", "none")
		$(this).siblings("span").text("已收藏")
			//			  var shoucang=$(".shoucangyufeishoucang").text()

	})

	$(".addnumDaHuo ul li:nth-child(2) img:nth-child(2)").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block")
		$('.theAllMengbanaa').css("display", "none")
		$(this).siblings("span").text("收藏")
			//			  var shoucang=$(".shoucangyufeishoucang").text()

	})

	//不限时
	$(".dahuoBuxianshi ul li").on("click", function() {
		$(this).css("color", "#Ea0607").siblings().css("color", "#999")
		$('.theAllMengbanaa').css("display", "none")

	})

	//筛选百叶窗
	$(".theAllshuJu .theTabMessage").on("click", function() {
		$(this).siblings(".quanbu_message").slideToggle(500)
			//		$(this).children(".theTabMessage li:nth-child(3) span").html("<span class='fa fa-caret-up' aria-hidden='true'></span>")

		//		alert(21)
	})

	//	隐藏全部 不限时 筛选 切换

	$(".dahuoTabBanner ul li:nth-child(1)").on("click", function() {
		//		$(this).children(".thaAllDaHuo").css("display","block").parent().siblings().children().css("display","none")
		$(this).parent().parents().siblings(".thaAllDaHuo").css("display", "block").siblings(".shaixuan , .dahuoBuxianshi").css("display", "none")
		$('.theAllMengbanaa').fadeToggle(300)

	})
	$(".dahuoTabBanner ul li:nth-child(2)").on("click", function() {
		//		$(this).children(".thaAllDaHuo").css("display","block").parent().siblings().children().css("display","none")
		$(this).parent().parents().siblings(".dahuoBuxianshi").css("display", "block").siblings(".thaAllDaHuo, .shaixuan").css("display", "none")

		$('.theAllMengbanaa').css("display", "none")

	})
	$(".dahuoTabBanner ul li:nth-child(3)").on("click", function() {
		//		$(this).children(".thaAllDaHuo").css("display","block").parent().siblings().children().css("display","none")
		$(this).parent().parents().siblings(".shaixuan").css("display", "block").siblings(".thaAllDaHuo , .dahuoBuxianshi").css("display", "none")

		$('.theAllMengbanaa').css("display", "none")

	})

	//页面转跳
	//	$(".lijidengluindex").on("click",function(){
	//		window.location.href="html/login.html"
	//		
	//		
	//	})
	//	

	$(".lijidengluindex").on("click", function() {
		mui.openWindow({
			url: 'html/login.html',
			id: 'html/login.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	$(".yanmzhengmadenglu").on("click", function() {
		//	var ss=$(".thezhucecengter").text()
		//			console.log(ss);
		window.location.href = "zhucexinxi.html"

		//			alert(21)
	})

	$(".yanmzhengmadenglu").on("click", function() {
		mui.openWindow({
			url: 'zhucexinxi.html',
			id: 'zhucexinxi.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	
	//	$(".shoujihaozhuce").on("click",function(){
	//		window.location.href="zhuce.html"
	//		
	//		
	//	})

	//
	$(".shoujihaozhuce").on("click", function() {
		mui.openWindow({
			url: 'zhuce.html',
			id: 'zhuce.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".touxiang").on("click",function(){
	//		window.location.href="html/setting.html"
	//		
	//		
	//	})
	//
	$(".touxiang").on("click", function() {
		mui.openWindow({
			url: 'html/setting.html',
			id: 'html/setting.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".theLogin li:nth-child(3) .kuaisuzhuce").on("click",function(){
	//		window.location.href="yanZhengMaDengLu.html"
	//		
	//	})

	$(".theLogin li:nth-child(3) .kuaisuzhuce").on("click", function() {
		mui.openWindow({
			url: 'yanZhengMaDengLu.html',
			id: 'yanZhengMaDengLu.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".theLogin li:nth-child(3) .shoujihaodenglu").on("click",function(){
	//		window.location.href="login.html"
	//		
	//	})
	//	
	$(".theLogin li:nth-child(3) .shoujihaodenglu").on("click", function() {
		mui.openWindow({
			url: 'login.html',
			id: 'login.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".theLogin li:nth-child(3) .forget").on("click",function(){
	//		window.location.href="forgetMiMa.html"
	//		
	//	})

	$(".theLogin li:nth-child(3) .forget").on("click", function() {
		mui.openWindow({
			url: 'forgetMiMa.html',
			id: 'forgetMiMa.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '正在加载...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".forget").on("click",function(){
	//		
	//		window.location.href="login.html"
	//		
	//	})

	//	$(".theNext").on("click",function(){
	//		window.location.href="zhucexinxi.html"
	//		
	//		
	//	})

	//	$(".wanchengzhuce").on("click",function(){
	//		$(".dengluzhong").fadeIn(1000,function(){
	//			window.location.href="../index.html"
	//			
	//		})
	//		
	//		
	//	})

	$(".wanchengzhuce").on("click", function() {
		mui.openWindow({
			url: '../index.html',
			id: '../index.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//我的收藏 

	$(".tabheader li").on("click", function() {

		$(this).css({
			"color": "#ea0607",
			"borderBottom": "0.05rem solid #ea0607"

		}).siblings().css({

			"color": "#000",
			"borderBottom": "none"

		})

	})
	$(".tabheader li:nth-child(1)").on("click", function() {
		$(".theAllShouCang").css("display", "block")
		$(".xiajia").css("display", "none");
		$("#bianer").hide()
		$("#bianyi").show()
		$("#bianyi").text("编辑")
		$(".theAllShouCang ul li").animate({
				left: "0"
			})
			//zhaohu			
		if($(".theAllShouCang .theshoucangAllShop li").undefined) {
			$(".tabheader div").show();
		} else {
			$(".tabheader div").hide();
		}

	})
	$(".tabheader li:nth-child(2)").on("click", function() {
		$(".xiajia ul li").animate({
			left: "0"
		})
		$(".theAllShouCang").css("display", "none")
		$(".xiajia").css("display", "block")
		$("#bianer").show()
		$("#bianer").text("编辑")
		$("#bianyi").hide()
		$(".xiajia .quanXuan").hide();
		$(".xiajia ul li").animate({
				left: "0"
			})
			//zhaohu
		if($(".xiajia .theshoucangAllShop li").undefined) {
			$(".tabheader div").show();
		} else if(!(".xiajia .theshoucangAllShop li").undefined) {
			$(".tabheader div").hide();
		}

	})

	$("#bianyi").on("click", function() {
		if($(this).text() == "编辑") {
			$(this).text("完成")
			$(".theAllShouCang ul li p:last-child").css("width", "4.5rem");
			$(".theAllShouCang ul li").animate({
				left: "0.55rem"
			})
			$(".xiajia ul li").animate({
				left: "0"
			})
			$(".quanbushangpin .quanXuan").slideDown(300)
		} else if($(this).text() == "完成") {
			$(this).text("编辑")
			$(".theAllShouCang ul li p:last-child").css("width", "5rem");
			$(".theAllShouCang ul li").animate({
				left: "0"
			})
			$(".quanbushangpin .quanXuan").hide(300)
		}
	})
	$("#bianer").on("click", function() {
		if($(this).text() == "编辑") {
			$(this).text("完成")
			$(".xiajia ul li p:last-child").css("width", "4.5rem");
			$(".xiajia ul li").animate({
				left: "0.55rem"
			})
			$(".xiajia .quanXuan").slideDown(300)

			//			alert(1)
		} else if($(this).text() == "完成") {
			$(this).text("编辑")
			$(".xiajia ul li p:last-child").css("width", "5rem");
			$(".xiajia ul li").animate({
				left: "0"
			})
			$(".xiajia .quanXuan").hide(300)
		}
	})

	$(".headershoucang ul li:nth-child(4)").on("click", function() {
		//		$(this).text("取消")
		$(".xiajia ul li").animate({
			left: "0.55rem"
		})
		$(".xiajia .quanXuan").slideDown(500)

	})

	$(".bianjianniu img").on("click", function() {
		$(this).css("display", "none").siblings().css("display", "block")

	})
	$(".quanXuan .thebottom li:nth-child(1) img:nth-child(1)").on("click", function() {

		$(this).css("display", "none").siblings().css("display", "block")
		$(".bianjianniu img:nth-child(2)").css("display", "block")
	})
	$(".quanXuan .thebottom li:nth-child(1) img:nth-child(2)").on("click", function() {

			$(this).css("display", "none").siblings().css("display", "block")
			$(".bianjianniu img:nth-child(2)").css("display", "none").siblings().css("display", "block")
		})
		///////////////////////////////////////////

	$(".quanbushanchu li:nth-child(2)").on("click", function() {
		//		$(".theAllShouCang .theshoucangAllShop li").animate({
		//			left:"0rem"
		//		})
		//		$(".quanXuan").slideToggle(500)

		//		$(".bgcolor").fadeIn(300).siblings(".tanchuceng").fadeIn(300)
		$(this).parent().parent().siblings(".bgcolor").fadeIn(300).siblings(".tanchuceng").fadeIn(300)

	})

	$(".xiajiawsss li:nth-child(2)").on("click", function() {
		//		$(".theAllShouCang .theshoucangAllShop li").animate({
		//			left:"0rem"
		//		})
		//		$(".quanXuan").slideToggle(500)

		//		$(".bgcolor").fadeIn(300).siblings(".tanchuceng").fadeIn(300)
		$(this).parent().parent().siblings(".bgcolor").fadeIn(300).siblings(".tanchuceng").fadeIn(300)

	})

	$(".theAllShouCang .tanchuceng p span:nth-child(2)").on("click", function() {
		$(".theAllShouCang .theshoucangAllShop li").remove()
			//zhaohu
		if($(".theAllShouCang").hide) {
			$(".tabheader div").show();
		}
		$(".quanbushangpin .tanchuceng").fadeOut(200)
		$(".quanbushangpin .bgcolor").fadeOut(200)

	})
	$(".xiajia .tanchuceng p span:nth-child(2)").on("click", function() {
		$(".xiajia .theshoucangAllShop li").remove()
			//zhaohu
		if($(".xiajia").hide) {
			$(".tabheader div").show();
		}
		$(".xiajia .tanchuceng").fadeOut(200)
		$(".xiajia .bgcolor").fadeOut(200)

	})

	$(".tanchuceng p span:nth-child(1)").on("click", function() {
		$(".theAllShouCang .theshoucangAllShop li").animate({
			left: "0rem"
		})
		$(".quanbushangpin .quanXuan").slideUp(500)
		$(".quanbushangpin .tanchuceng").fadeOut(200)
		$(".quanbushangpin .bgcolor").fadeOut(200)

	})

	//
	$(".tanchuceng p span:nth-child(2)").on("click", function() {
		$(".xiajia .theshoucangAllShop li").remove()
		$(".tanchuceng").fadeOut(200)
		$(".bgcolor").fadeOut(200)

	})

	$(".tanchuceng p span:nth-child(1)").on("click", function() {
		$(".xiajia .theshoucangAllShop li").animate({
			left: "0rem"
		})
		$(".quanXuan").slideUp(500)
		$(".tanchuceng").fadeOut(200)
		$(".bgcolor").fadeOut(200)

	})

	//申请退款

	$(".tuikauntuihuo li img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	//	$(".wherethemoney").on("click",function(){
	//		window.location.href="qianKuanQuXiang.html"
	//		
	//		
	//	})

	$(".wherethemoney").on("click", function() {
		mui.openWindow({
			url: 'qianKuanQuXiang.html',
			id: 'qianKuanQuXiang.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	
	//	$(".tijiao").on("click",function(){
	//		window.location.href="tuiKuanChuLiZhong.html"
	//		
	//		
	//	})
	//	
	$(".tijiao").on("click", function() {
		mui.openWindow({
			url: 'tuiKuanChuLiZhong.html',
			id: 'tuiKuanChuLiZhong.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".xiugaiquxiao p:nth-child(1)").on("click",function(){
	//		
	//		window.location.href="TianXieShenQing.html"
	//		
	//	})

	$(".xiugaiquxiao p:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'TianXieShenQing.html',
			id: 'TianXieShenQing.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".tuikaunxaingqing p:nth-child(4) span:nth-child(1)").on("click",function(){
	//			window.location.href="xieShangJiLu.html"	
	//	})

	$(".tuikaunxaingqing p:nth-child(4) span:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'xieShangJiLu.html',
			id: 'xieShangJiLu.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//		$(".tuikaunxaingqing p:nth-child(4) span:nth-child(2)").on("click",function(){
	//			window.location.href="qianKuanQuXiang.html"	
	//	})
	$(".tuikaunxaingqing p:nth-child(4) span:nth-child(2)").on("click", function() {
		mui.openWindow({
			url: 'qianKuanQuXiang.html',
			id: 'qianKuanQuXiang.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//投诉列表
	$(".tousupingjia li:nth-child(2) .redheart img").on("click", function() {
		//		$(this).css("display","none").siblings().css("display","block")
	})
	$(".tousuTabXuanZe li:nth-child(1)").on("click", function() {
		$(this).css({
			"color": "#ea0607",
			"borderBottom": "0.05rem solid #ea0607"
		})
		$(".tousuTabXuanZe li:nth-child(2)").css({
			"color": "#999",
			"borderBottom": "none"

		})
		$(".qiehuan").css("display", "block")
		$("#tousushangpin").css("display", "none")

	})
	$(".tousuTabXuanZe li:nth-child(2)").on("click", function() {
		$(this).css({
			"color": "#ea0607",
			"borderBottom": "0.05rem solid #ea0607"
		})
		$(".tousuTabXuanZe li:nth-child(1)").css({
			"color": "#999",
			"borderBottom": "none"

		})
		$(".qiehuan").css("display", "none")
		$("#tousushangpin").css("display", "block")

	})

	//	$(".dingdanquanbu .yincang li:nth-child(3)").on("click",function(){
	//		$(".wodedingdanheader").fadeOut(0,function(){
	//			
	//			$(".wodedingdanSearch").toggle(500)
	//			$(".wodedingdanSousuo").toggle(500)
	//			
	//		})
	//		})
	$(".wodedingdanSearch span").on("click", function() {
		$(".wodedingdanheader").fadeIn(0, function() {

			$(".wodedingdanSearch").toggle(500)
			$(".wodedingdanSousuo").toggle(500)

		})

	})

	//我的全部订单列表切换

	$(".wodedingdanquanbuTab .wodedingdanlist li").on("click", function() {

		$(this).css({
			"color": "#ea0607",
			"borderBottom": "solid 0.05rem #ea0607"

		}).siblings().css({
			"color": "#333",
			"borderBottom": "none"

		})

	})

	//切换

	$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(1)").on("click", function() {
		$(".wodedingdanfirst").css("display", "block")
		$(".wodedingdansecond").css("display", "none")
		$(".wodedingdanthird").css("display", "none")
		$(".wodedingdanfopurth").css("display", "none")
		$(".wodedingdanfive").css("display", "none")

	})

	$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(2)").on("click", function() {
			$(".wodedingdanfirst").css("display", "none")
			$(".wodedingdansecond").css("display", "block")
			$(".wodedingdanthird").css("display", "none")
			$(".wodedingdanfopurth").css("display", "none")
			$(".wodedingdanfive").css("display", "none")

		})
		//	$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(3)").on("click",function(){
		//		$(".wodedingdanfirst").css("display","none")
		//		$(".wodedingdansecond").css("display","none")
		//		$(".wodedingdanthird").css("display","block")
		//		$(".wodedingdanfopurth").css("display","none")
		//		$(".wodedingdanfive").css("display","none")
		//		
		//	})
	$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(3)").on("click", function() {
		$(".wodedingdanfirst").css("display", "none")
		$(".wodedingdansecond").css("display", "none")
		$(".wodedingdanthird").css("display", "none")
		$(".wodedingdanfopurth").css("display", "block")
		$(".wodedingdanfive").css("display", "none")

	})
	$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(4)").on("click", function() {
		$(".wodedingdanfirst").css("display", "none")
		$(".wodedingdansecond").css("display", "none")
		$(".wodedingdanthird").css("display", "none")
		$(".wodedingdanfopurth").css("display", "none")
		$(".wodedingdanfive").css("display", "block")

	})

	$(".wodedingdan_zhanshishangpin").on("click", function() {
			$(this).siblings().animate({
				"left": "0"
			}, 500)

		})
		//	$(".wodedingdan_xiangxixinxi .woddingdan_xinxilist li:nth-child(1) img").on("click",function(){
		//		$(this).parent().parent().parent().animate({
		//			"left":"-7.5rem"
		//		},500)
		//
		//
		//
		//		
		//	})
		//	$(".wodedingdan_xiangxixinxi .woddingdan_xinxilist li:nth-child(3) p:nth-child(1)").on("click",function(){
		//
		//		$(this).parent().parent().parent().parent().remove()
		//		
		//		
		//	})
		//	

	//	$("#daipingjia p").on("click",function(){
	//		
	//		window.location.href="pingjiafankui.html"
	//		
	//	})
	$("#daipingjia p").on("click", function() {
		mui.openWindow({
			url: 'pingjiafankui.html',
			id: 'pingjiafankui.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	$(".wodedingdanlist li:nth-child(1)").on("click", function() {

		$(".wodebaopanDDP").css("display", "block")
		$(".wodebaopanCIF").css("display", "none")
		$(".wodebaopanFOB").css("display", "none")

	})

	$(".wodedingdanlist li:nth-child(2)").on("click", function() {

		$(".wodebaopanDDP").css("display", "none")
		$(".wodebaopanCIF").css("display", "block")
		$(".wodebaopanFOB").css("display", "none")
	})

	$(".wodedingdanlist li:nth-child(3)").on("click", function() {

		$(".wodebaopanDDP").css("display", "none")
		$(".wodebaopanCIF").css("display", "none")
		$(".wodebaopanFOB").css("display", "block")

	})

	//我的询盘
	$(".xieyixvke img").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	//注册协议

	$(".peisongfangshi .dengluxieyi img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	$(".peisongfangshi .tuijiawuliuzixuan li img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	$(".peisongfangshi .tuijiawuliuzixuan li:nth-child(1) img").on("click", function() {
		$(".peisongfangshi .tuijiawuliuzixuan li:nth-child(2) img:nth-child(1)").css("display", "block").siblings("img").css("display", "none")

	})
	$(".peisongfangshi .tuijiawuliuzixuan li:nth-child(2) img").on("click", function() {
		$(".peisongfangshi .tuijiawuliuzixuan li:nth-child(1) img:nth-child(2)").css("display", "block").siblings("img").css("display", "none")

	})

	//
	$(".fukuanjine .dengluxieyi img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	$(".fukuanjine .tuijiawuliuzixuan li img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	$(".fukuanjine .tuijiawuliuzixuan li:nth-child(1) img").on("click", function() {
		$(".fukuanjine .tuijiawuliuzixuan li:nth-child(2) img:nth-child(1)").css("display", "block").siblings("img").css("display", "none")

	})
	$(".fukuanjine .tuijiawuliuzixuan li:nth-child(2) img").on("click", function() {
		$(".fukuanjine .tuijiawuliuzixuan li:nth-child(1) img:nth-child(2)").css("display", "block").siblings("img").css("display", "none")

	})

	$(".zhifuxuanze li p img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block").closest(".zhifuxuanze li").siblings().children("p").children("img:nth-child(2)").css("display", "block").siblings("img").css("display", "none")

	})

	$(".shifujie .dengluxieyi img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	$(".theLogin .dengluxieyi img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	//donghuatiaozhuang

	//	$(".querenzhifu p").on("click",function(){
	//		
	//		window.location.href="zhifudonghua.html"
	//	})
	//	

	$(".querenzhifu p").on("click", function() {
		mui.openWindow({
			url: 'zhifudonghua.html',
			id: 'zhifudonghua.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-right',
				duration: '1000'
			},
			waiting: {
				autoShow: true,
				title: '正在登陆请稍等...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//退款理由
	$(".quxiaoliyou li img").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block").parent().siblings().children("img:nth-child(1)").css("display", "block").siblings("img").css("display", "none")

		//		$(".bgqueding span:nth-child(2)").on("click",function(){
		////		var session= $(this).siblings("p").text()
		//		
		//			window.location.href="../wodedingdan/guanBiDingDanXiangQIng.html"
		//			
		////			$(".dingdan_xiangqing p:nth-child(2)").text(session)
		//			//
		//		})

		$(".bgqueding span:nth-child(2)").on("click", function() {
			mui.openWindow({
				url: '../wodedingdan/guanBiDingDanXiangQIng.html',
				id: '../wodedingdan/guanBiDingDanXiangQIng.html',
				styles: {
					top: '0',
					bottom: '0px',
					width: '100%',
					height: '100%'

				},
				extras: {

				},
				show: {
					autoShow: true,
					aniShow: 'slide-in-right',
					duration: '1000'
				},
				waiting: {
					autoShow: true,
					title: '正在登陆请稍等...',
					options: {
						width: 'waiting-dialog-widht',
						height: 'waiting-dialog-height'

					}
				}
			})
		});
		//		console.log($(".dingdan_xiangqing p:nth-child(2)").text(session))

	})

	$(".dingdnaquxiao ul li:nth-child(1)").on("click", function() {

		$(".bgOpacity").fadeIn(500, function() {

			$(".quxiaoliyou").show(300)

		})

	})

	$(".bgqueding span:nth-child(1)").on("click", function() {
		$(".quxiaoliyou").fadeOut(500, function() {
			$(".bgOpacity").hide(300)
		})

	})

	//个人资料

	$("#sex .boy img").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block").parent().siblings(".girl").children("img:nth-child(2)").css("display", "none").siblings("img").css("display", "block")
			//			$("#sex .girl img:nth-child(2)").css("display","none")

	})
	$("#sex .girl img").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block").parent().siblings(".boy").children("img:nth-child(2)").css("display", "none").siblings("img").css("display", "block")
			//			$("#sex .girl img:nth-child(2)").css("display","none")
	})

	$(".gerenzilaio ul li:nth-child(3)").on("click", function() {

		var zhuangtai = $(this).text()

		if(zhuangtai == "保存") {
			$(this).text("编辑")

			//				$(".yonghujibie ul li input").css("border","0.03rem solid #e5e5e5")
			$(".yonghujibie ul li input").attr("readonly", true)
			$(".yonghujibie ul li textarea").attr("readonly", true)

		} else if(zhuangtai == "编辑") {
			$(this).text("保存")
			$(".yonghujibie ul li input").attr("readonly", false)
			$(".yonghujibie ul li textarea").attr("readonly", false)
			$(".yonghujibie ul li .zhenshi").attr("readonly", true)
		}

	})

	$(".yonghujibie ul li select ").on("click", function() {
		console.log($(this).val())

		var yonghu = $(this).val()

		if(yonghu == "提升权限") {
			$(".yonghujibie ul li:nth-child(1) span:nth-child(2)").text("普通用户")

		} else if(yonghu == "提升为个体工商户") {
			//				$(this).val("")
			$(".yonghujibie ul li:nth-child(1) span:nth-child(2)").text("个体工商户")
		} else if(yonghu == "提升为企业用户") {
			//				$(this).val("")
			$(".yonghujibie ul li:nth-child(1) span:nth-child(2)").text("企业用户")
		}

	})

	//		首页页面跳转

	//	$(".theheader .theright li:nth-child(2)").on("click",function(){
	//		
	//		$("#shousuotab").slideDown(500)
	//		$(".main").slideUp(400)
	//		
	//	})
	//

	//主页tabbav 切换

	$(".footer ul li:nth-child(1)").on("click", function() {

		　
		window.location.href = "shangpin.html";

	})

	//			$(".footer ul li:nth-child(1)").on("click",function(){
	//	mui.openWindow({
	//	url:'shangpin.html',
	//	id:'shangpin.html',
	//	styles:{
	//	top:'0',
	//	bottom:'0px',
	//	width:'100%',
	//	height:'100%'
	//
	//	},
	//	extras:{
	//	
	//	},
	//	show:{
	//	autoShow:true,
	//	aniShow:'slide-in-bottom',
	//	duration:'1000'
	//	},
	//	waiting:{
	//	autoShow:true,
	//	title:'加载中...',
	//	options:{
	//	width:'waiting-dialog-widht',
	//	height:'waiting-dialog-height'
	//	
	//	}
	//	}
	//})
	//});		
	//	

	$(".footer ul li:nth-child(2)").on("click", function() {

			　
			window.location.href = "wodexunpan.html";

		})
		////	
		//	$(".footer ul li:nth-child(2)").on("click",function(){
		//	mui.openWindow({
		//	url:'wodexunpan.html',
		//	id:'wodexunpan.html',
		//	styles:{
		//	top:'0',
		//	bottom:'0px',
		//	width:'100%',
		//	height:'100%'
		//
		//	},
		//	extras:{
		//	
		//	},
		//	show:{
		//	autoShow:true,
		//	aniShow:'slide-in-bottom',
		//	duration:'1000'
		//	},
		//	waiting:{
		//	autoShow:true,
		//	title:'加载中...',
		//	options:{
		//	width:'waiting-dialog-widht',
		//	height:'waiting-dialog-height'
		//	
		//	}
		//	}
		//})
		//});		
		//	

	$(".footer ul li:nth-child(3)").on("click", function() {

			　
			window.location.href = "index.html"

		})
		//	$(".footer ul li:nth-child(3)").on("click",function(){
		//	mui.openWindow({
		//	url:'index.html',
		//	id:'index.html',
		//	styles:{
		//	top:'0',
		//	bottom:'0px',
		//	width:'100%',
		//	height:'100%'
		//
		//	},
		//	extras:{
		//	
		//	},
		//	show:{
		//	autoShow:true,
		//	aniShow:'slide-in-bottom',
		//	duration:'1000'
		//	},
		//	waiting:{
		//	autoShow:true,
		//	title:'加载中...',
		//	options:{
		//	width:'waiting-dialog-widht',
		//	height:'waiting-dialog-height'
		//	
		//	}
		//	}
		//})
		//});		

	$(".footer ul li:nth-child(4)").on("click", function() {

		　
		window.location.href = "wodebaopan.html"

	})

	//	$(".footer ul li:nth-child(4)").on("click",function(){
	//	mui.openWindow({
	//	url:'wodebaopan.html',
	//	id:'wodebaopan.html',
	//	styles:{
	//	top:'0',
	//	bottom:'0px',
	//	width:'100%',
	//	height:'100%'
	//
	//	},
	//	extras:{
	//	
	//	},
	//	show:{
	//	autoShow:true,
	//	aniShow:'slide-in-bottom',
	//	duration:'1000'
	//	},
	//	waiting:{
	//	autoShow:true,
	//	title:'加载中...',
	//	options:{
	//	width:'waiting-dialog-widht',
	//	height:'waiting-dialog-height'
	//	
	//	}
	//	}
	//})
	//});		

	$(".footer ul li:nth-child(5)").on("click", function() {

		window.location.href = "wode.html"

	})

	//	$(".footer ul li:nth-child(5)").on("click",function(){
	//	mui.openWindow({
	//	url:'wode.html',
	//	id:'wode.html',
	//	styles:{
	//	top:'0',
	//	bottom:'0px',
	//	width:'100%',
	//	height:'100%'
	//
	//	},
	//	extras:{
	//	
	//	},
	//	show:{
	//	autoShow:true,
	//	aniShow:'slide-in-bottom',
	//	duration:'1000'
	//	},
	//	waiting:{
	//	autoShow:true,
	//	title:'加载中...',
	//	options:{
	//	width:'waiting-dialog-widht',
	//	height:'waiting-dialog-height'
	//	
	//	}
	//	}
	//})
	//});		

	//公告连接处

	//	$(".bannerBottom li:nth-child(1)").on("click",function(){
	//		window.location.href="html/indexNews/dongDongGongGao.html"
	//		
	//		
	//	})
	//	$(".bannerBottom li:nth-child(2)").on("click",function(){
	//		window.location.href="html/indexNews/shichangxinxi.html"
	//		
	//		
	//	})
	//	
	//	$(".bannerBottom li:nth-child(3)").on("click",function(){
	//		window.location.href="html/indexNews/xinwendongtai.html"
	//		
	//		
	//	})
	//	
	//		$(".bannerBottom li:nth-child(4)").on("click",function(){
	//		window.location.href="html/indexNews/changjiazixun.html"
	//		
	//		
	//	})

	//		$(".tomore").on("click",function(){
	//			window.location.href="html/zuiXinYouHui.html"
	//			
	//			
	//		})

	$(".tomore").on("click", function() {
		mui.openWindow({
			url: 'html/zuiXinYouHui.html',
			id: 'html/zuiXinYouHui.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".jintituijianmore").on("click",function(){
	//			window.location.href="html/jinriyouhui.html"
	//			
	//			
	//		})

	

	//	$(".rementuijian").on("click",function(){
	//		
	//		window.location.href="html/remenHot.html"
	//		
	//	})

	$(".rementuijian").on("click", function() {
		mui.openWindow({
			url: 'html/remenHot.html',
			id: 'html/remenHot.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".fabu p").on("click",function(){
	//		window.location.href="tousuLieBiao.html"
	//	})
	//	
	$(".fabu p").on("click", function() {
		mui.openWindow({
			url: 'tousuLieBiao.html',
			id: 'tousuLieBiao.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//我的页面链接
	//	$(".wodeList ul .wodebaopan_wode").on("click",function(){
	//		
	//		window.location.href="html/baopan/wodebaopan.html"
	//		
	//	})
	$(".wodeList ul .wodebaopan_wode").on("click", function() {
		mui.openWindow({
			url: 'html/baopan/wodebaopan.html',
			id: 'html/baopan/wodebaopan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .wodexunpan_wode").on("click",function(){
	//		
	//		window.location.href="html/xunpan/wodexunpan.html"
	//		
	//	})

	$(".wodeList ul .wodexunpan_wode").on("click", function() {
		mui.openWindow({
			url: 'html/xunpan/wodexunpan.html',
			id: 'html/xunpan/wodexunpan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});
	//	$(".wodeList ul .wodeshoucang_wode").on("click",function(){
	//		
	//		window.location.href="html/woDeShouCang.html"
	//		
	//	})
	//	
	$(".wodeList ul .wodeshoucang_wode").on("click", function() {
		mui.openWindow({
			url: 'html/woDeShouCang.html',
			id: 'html/woDeShouCang.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .wodegouwuche_wode").on("click",function(){
	//		
	//			window.location.href="html/gouWuChe/gouwucheBianji.html"
	//		
	//		
	//	})

	$(".wodeList ul .wodegouwuche_wode").on("click", function() {
		mui.openWindow({
			url: 'html/gouWuChe/gouwucheBianji.html',
			id: 'html/gouWuChe/gouwucheBianji.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .wodetousu_wode").on("click",function(){
	//		
	//		window.location.href="html/shensujilu/tousuLieBiao.html"
	//		
	//	})

	$(".wodeList ul .wodetousu_wode").on("click", function() {
		mui.openWindow({
			url: 'html/shensujilu/tousuLieBiao.html',
			id: 'html/shensujilu/tousuLieBiao.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .wodeshouhou_wode").on("click",function(){
	//		
	//		window.location.href="html/shengQingTuiKuan.html"
	//	})

	$(".wodeList ul .wodeshouhou_wode").on("click", function() {
		mui.openWindow({
			url: 'html/shengQingTuiKuan.html',
			id: 'html/shengQingTuiKuan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .gerenziliao_wode").on("click",function(){
	//		
	////		alert("尚未开通！！！")
	//		window.location.href="html/geRenZiLiao/gerenziliao.html"
	//	})

	$(".wodeList ul .gerenziliao_wode").on("click", function() {
		mui.openWindow({
			url: 'html/geRenZiLiao/gerenziliao.html',
			id: 'html/geRenZiLiao/gerenziliao.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .zhifuguanli_wode").on("click",function(){
	//		
	////		alert("尚未开通！！！")
	//		window.location.href="html/zhiFuGuanLi/alipay.html"
	////		window.location.href="html/geRenZiLiao/gerenziliao.html"
	//	})

	$(".wodeList ul .zhifuguanli_wode").on("click", function() {
		mui.openWindow({
			url: 'html/zhiFuGuanLi/alipay.html',
			id: 'html/zhiFuGuanLi/alipay.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodeList ul .zhuangshukefu_wode").on("click",function(){
	//		//
	////		alert("尚未开通！！！")
	//		window.location.href="html/zhuanshukefu.html"
	//	})
	//	
	$(".wodeList ul .zhuangshukefu_wode").on("click", function() {
		mui.openWindow({
			url: 'html/zhuanshukefu.html',
			id: 'html/zhuanshukefu.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".quanbudingdanHeader p").on("click",function(){
	//		
	//		window.location.href="html/wodedingdan/woDeDingDanQuanBu.html"
	//		
	//	})

	$(".quanbudingdanHeader p").on("click", function() {
		mui.openWindow({
			url: 'html/wodedingdan/woDeDingDanQuanBu.html',
			id: 'html/wodedingdan/woDeDingDanQuanBu.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodezhuangtai ul li:nth-child(1)").on("click",function(){
	//		window.location.href="html/wodedingdan/wodedingdanDaiFukuan.html"
	////		$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(2)").css({
	////			"color":"#ea0607"
	////			
	////		})
	//		
	//	})
	//	

	$(".wodezhuangtai ul li:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'html/wodedingdan/wodedingdanDaiFukuan.html',
			id: 'html/wodedingdan/wodedingdanDaiFukuan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});
	//	
	//	$(".wodezhuangtai ul li:nth-child(2)").on("click",function(){
	//		window.location.href="html/wodedingdan/wodedingdanDaiShouhuo.html"
	////		$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(2)").css({
	////			"color":"#ea0607"
	////			
	////		})
	//		
	//	})

	$(".wodezhuangtai ul li:nth-child(2)").on("click", function() {
		mui.openWindow({
			url: 'html/wodedingdan/wodedingdanDaiShouhuo.html',
			id: 'html/wodedingdan/wodedingdanDaiShouhuo.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodezhuangtai ul li:nth-child(3)").on("click",function(){
	//		window.location.href="html/wodedingdan/wodedingdanDaiPingjia.html"
	////		$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(2)").css({
	////			"color":"#ea0607"
	////			
	////		})
	//		
	//	})

	$(".wodezhuangtai ul li:nth-child(3)").on("click", function() {
		mui.openWindow({
			url: 'html/wodedingdan/wodedingdanDaiPingjia.html',
			id: 'html/wodedingdan/wodedingdanDaiPingjia.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//		$(".wodezhuangtai ul li:nth-child(4)").on("click",function(){
	//		window.location.href="html/shengQingTuiKuan.html"
	////		$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(2)").css({
	////			"color":"#ea0607"
	////			
	////		})
	//		
	//	})

	$(".wodezhuangtai ul li:nth-child(4)").on("click", function() {
		mui.openWindow({
			url: 'html/shengQingTuiKuan.html',
			id: 'html/shengQingTuiKuan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".wodezhuangtai ul li:nth-child(5)").on("click",function(){
	////		window.location.href="html/TuiKuanXiangQing.html"
	////		$(".wodedingdanquanbuTab .wodedingdanlist li:nth-child(2)").css({
	////			"color":"#ea0607"
	////			
	////		})
	//		
	//	})

	//	$(".wode ul li:nth-child(3) img").on("click",function(){
	//		window.location.href="html/xiaoxiliebiao.html"
	//		
	//	})

	$(".wode ul li:nth-child(3) img").on("click", function() {
		mui.openWindow({
			url: 'html/xiaoxiliebiao.html',
			id: 'html/xiaoxiliebiao.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".theThirdPage").on("touchmove",function(){
	//		
	//		$(".kefu_index").fadeOut(500)
	//		$(".huidaodingbu").fadeOut(500)
	//		
	//		
	//	})
	$(".theThirdPage").on("touchend", function() {

		$(".kefu_index").fadeIn(500)
		$(".huidaodingbu").fadeIn(500)

	})

	//选择用户

	$(".baopanzhuangtai p span").on("click", function() {
		$(".wodebaopan_xuanzeyonghuleixing").fadeIn(500)
		$(".yonghuxianze").fadeIn(500)

	})
	$(".yonghuxianze ul li:nth-child(1) span").on("click", function() {
		$(".wodebaopan_xuanzeyonghuleixing").fadeOut(500)
		$(".yonghuxianze").fadeOut(500)

	})

	$('.tijiaoshenhe').on("click", function() {
		$(".ziliaotijiaodengdai").fadeIn(1000, function() {
			$(this).fadeOut(500, function() {
				$(".wodebaopan_xuanzeyonghuleixing").remove()
				$(".yonghuxianze").remove()

				window.location.href = "../index.html"
			})

		})
	})

	$(".baopan_xieyi img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")
	})

	//gouwuche
	$(".gouwuche_dianpu li:nth-child(1) img,.GouWuChe_Shangpin li:nth-child(1) img,.gouwubottom ul li:nth-child(1) img").on("click", function() {
		$(this).css("display", "none").siblings("img").css("display", "block")
	})

	//选择用户后的逻辑的跳转

	//	$(".geti").on("click",function(){
	//		
	//		window.location.href="html/geTiGongShangHuDengJi.html"
	//		
	//		
	//	})

	$(".geti").on("click", function() {
		mui.openWindow({
			url: 'html/geTiGongShangHuDengJi.html',
			id: 'html/geTiGongShangHuDengJi.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".qiye").on("click",function(){
	////		$(this).fadeOut(500,function(){
	//				window.location.href="html/qiyeyonghudengji.html"
	////		})
	//	
	//	})
	$(".qiye").on("click", function() {
		mui.openWindow({
			url: 'html/qiyeyonghudengji.html',
			id: 'html/qiyeyonghudengji.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	$(".shanchudingdanhoujia p").on("click", function() {
		$(".bgshanchudingdan").slideDown(400)
		$(".shangchudingdan").slideDown(500)

	})

	$(".shangchudingdan ul li:nth-child(2) span:nth-child(1)").on("click", function() {
		$(".bgshanchudingdan").slideUp(600)
		$(".shangchudingdan").slideUp(500)
	})

	//二三级页面tiaozhuan

	//加入购物车  立即抢购
	//	$(".jiaruqiaongou li:nth-child(1) ").on("click",function(){
	//		window.location.href="html/gouWuChe/gouwucheBianji.html"
	//		
	//		
	//	})

	$(".jiaruqiaongou li:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'html/gouWuChe/gouwucheBianji.html',
			id: 'html/gouWuChe/gouwucheBianji.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

//	$(".jinrituijian_shangpin ul li:nth-child(5) span:nth-child(1) ").on("click", function() {
//
//		window.location.href = "html/gouWuChe/gouwucheBianji.html"
//
//	})

	$(".jinrituijian_shangpin ul li:nth-child(5) span:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'html/gouWuChe/gouwucheBianji.html',
			id: 'html/gouWuChe/gouwucheBianji.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".hot_shangpin ul li:nth-child(5) span:nth-child(1)").on("click",function(){
	//		
	//		window.location.href="html/gouWuChe/gouwucheBianji.html"
	//		
	//	})
	//	

	$(".hot_shangpin ul li:nth-child(5) span:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'html/gouWuChe/gouwucheBianji.html',
			id: 'html/gouWuChe/gouwucheBianji.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//立即抢购跳转
	//	$(".jiaruqiaongou li:nth-child(2) ").on("click",function(){
	//		window.location.href="html/shangPinXiangQingLiJIGouMai/querendingdan.html"
	//		
	//		
	//	})

	$(".jiaruqiaongou li:nth-child(2)").on("click", function() {
		mui.openWindow({
			url: 'html/shangPinXiangQingLiJIGouMai/querendingdan.html',
			id: 'html/shangPinXiangQingLiJIGouMai/querendingdan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".jinrituijian_shangpin ul li:nth-child(5) span:nth-child(2) ").on("click",function(){
	//		
	//		window.location.href="html/shangPinXiangQingLiJIGouMai/querendingdan.html"
	//		
	//	})
	//	
	$(".jinrituijian_shangpin ul li:nth-child(5) span:nth-child(2)").on("click", function() {
		mui.openWindow({
			url: 'html/shangPinXiangQingLiJIGouMai/querendingdan.html',
			id: 'html/shangPinXiangQingLiJIGouMai/querendingdan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".hot_shangpin ul li:nth-child(5) span:nth-child(2)").on("click",function(){
	//		
	//		window.location.href="html/shangPinXiangQingLiJIGouMai/querendingdan.html"
	//		
	//	})
	//	

	$(".hot_shangpin ul li:nth-child(5) span:nth-child(2)").on("click", function() {
		mui.openWindow({
			url: 'html/shangPinXiangQingLiJIGouMai/querendingdan.html',
			id: 'html/shangPinXiangQingLiJIGouMai/querendingdan.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//商品详情
	//	
	//	$(".theimg_shangpin").on("click",function(){
	//		
	//		window.location.href="html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html"
	//	})

	$(".theimg_shangpin").on("click", function() {
		mui.openWindow({
			url: 'html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
			id: 'html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".jinrituijian_shangpin ul li:nth-child(1)").on("click",function(){
	//		window.location.href="html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html"
	//		
	//	})

	$(".jinrituijian_shangpin ul li:nth-child(1)").on("click", function() {
		mui.openWindow({
			url: 'html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
			id: 'html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".hot_shangpin ul li:nth-child(2)").on("click",function(){
	//		window.location.href="html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html"
	//	})
	//	

	$(".hot_shangpin ul li:nth-child(2)").on("click", function() {
		mui.openWindow({
			url: 'html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
			id: 'html/shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//	$(".kefu_index").on("click",function(){
	//		
	//		window.location.href="html/zhuanshukefu.html"
	//	})

	$(".kefu_index").on("click", function() {
		mui.openWindow({
			url: 'html/zhuanshukefu.html',
			id: 'html/zhuanshukefu.html',
			styles: {
				top: '0',
				bottom: '0px',
				width: '100%',
				height: '100%'

			},
			extras: {

			},
			show: {
				autoShow: true,
				aniShow: 'slide-in-bottom',
				duration: '500'
			},
			waiting: {
				autoShow: true,
				title: '加载中...',
				options: {
					width: 'waiting-dialog-widht',
					height: 'waiting-dialog-height'

				}
			}
		})
	});

	//冻冻公告 新闻 动态 咨询转跳

	//	$(".bannerBottom ul li:nth-child(2) p").on("click",function(){
	//		
	//		window.location.href="html/indexNews/dongDongGongGao.html"
	//		
	//	})
	//	
	//		
	//	$(".bannerBottom ul li:nth-child(3) p").on("click",function(){
	//		
	//		window.location.href="html/indexNews/shichangxinxi.html"
	//		
	//	})
	//	
	//	$(".bannerBottom ul li:nth-child(4) p").on("click",function(){
	//		
	//		window.location.href="html/indexNews/xinwendongtai.html"
	//		
	//	})
	//	
	//	$(".bannerBottom ul li:nth-child(5) p").on("click",function(){
	//		
	//		window.location.href="html/indexNews/changjiazixun.html"
	//		
	//	})
	//	
	//	
	//商品详情

	$(".tuijianshangpin_gouwuche li p:nth-child(1) img").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	$(".gouwucheFooter ul li:nth-child(1) img").on("click", function() {

		$(this).css("display", "none").siblings("img").css("display", "block")

	})

	//购物车编辑
	$(".gouwubottom li:nth-child(1) img:nth-child(1)").on("click", function() {

		//		$(this).css("display","none").siblings("img").css("display","block")
		$(".GouWuChe_Shangpin li:nth-child(1) img:nth-child(2)").css("display", "block").siblings("img").css("display", "none")
		$(".gouwuche_dianpu li:nth-child(1) img:nth-child(2)").css("display", "block").siblings("img").css("display", "none")

	})
	$(".gouwubottom li:nth-child(1) img:nth-child(2)").on("click", function() {

		//		$(this).css("display","none").siblings("img").css("display","block")
		$(".GouWuChe_Shangpin li:nth-child(1) img:nth-child(1)").css("display", "block").siblings("img").css("display", "none")
		$(".gouwuche_dianpu li:nth-child(1) img:nth-child(1)").css("display", "block").siblings("img").css("display", "none")

	})
	$(".gouwubottom li:nth-child(1) img:nth-child(1)").on("click", function() {
		$(".gouwubottom li:nth-child(2) span").text("2500000.00元")

	})
	$(".gouwubottom li:nth-child(1) img:nth-child(2)").on("click", function() {
		$(".gouwubottom li:nth-child(2) span").text("1980.00元")

	})

	$(".tuikuanyuanyinisThis").on("click", function() {
		$(".tuikuanyuanyinxialaliebiao").slideToggle(500)

	})

	$(".tuikuanyuanyinxialaliebiao li").on("click", function() {
		var theSession = $(this).text()
		$(".tuikuanyuanyinisThis").text(theSession)
		$(this).parent().slideUp(500)

	})

	//商品分类

	$(".shangpinxinxi_fenlei ul li").on("click", function() {
		$(this).css("color", "#EA0607").siblings().css("color", "#333")
	})

	$(".shangpinxinxi_fenlei ul li:nth-child(1)").on("click", function() {
		$(".fenlei_toubu").css("display", "block").siblings().css("display", "none")
	})
	$(".shangpinxinxi_fenlei ul li:nth-child(2)").on("click", function() {
		$(".fenlei_beibu").css("display", "block").siblings().css("display", "none")
	})
	$(".shangpinxinxi_fenlei ul li:nth-child(3)").on("click", function() {
		$(".fenlei_fubu").css("display", "block").siblings().css("display", "none")
	})
	$(".shangpinxinxi_fenlei ul li:nth-child(4)").on("click", function() {
		$(".fenlei_qiantui").css("display", "block").siblings().css("display", "none")
	})

	$(".shangpinxinxi_fenlei ul li:nth-child(5)").on("click", function() {
		$(".fenlei_houtui").css("display", "block").siblings().css("display", "none")
	})

	//三级页面点击图片近详情页

	//	$(".daHuoShangpin li:nth-child(1) img").on("click",function(){
	//		
	//		window.location.href="shangPinXiangQingLiJIGouMai/shangPinXiangQing.html"
	//		
	//	})
//	$(".daHuoShangpin li:nth-child(1) img").on("click", function() {
//		mui.openWindow({
//			url: 'shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
//			id: 'shangPinXiangQingLiJIGouMai/shangPinXiangQing.html',
//			styles: {
//				top: '0',
//				bottom: '0px',
//				width: '100%',
//				height: '100%'
//
//			},
//			extras: {
//
//			},
//			show: {
//				autoShow: true,
//				aniShow: 'slide-in-bottom',
//				duration: '500'
//			},
//			waiting: {
//				autoShow: true,
//				title: '加载中...',
//				options: {
//					width: 'waiting-dialog-widht',
//					height: 'waiting-dialog-height'
//
//				}
//			}
//		})
//	});

})