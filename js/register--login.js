$(function(){
	
		
	
	$(".theLogin ul li:nth-child(1) input").blur(function(){
		var va=$(".theLogin ul li:nth-child(1) input").val()
	    var phone= /^1[3578]\d{9}$/ ; 
		if ($(this).val().length== 0) {
			$(this).val("请输入手机号")
			$(this).css({"color":"#f00"});
		  $(this).animate({"textIndent":"20"},100,function(){
			$(this).animate({"textIndent":"30px"},function(){
				$(this).animate({"textIndent":"20"},100,function(){
			         $(this).animate({"textIndent":"30px"},function(){
			         $(this).val("");
			         $(this).css({"color":"#000"});
			         });
			       })
			});
		});	
		
	    } else if(!(phone.test($(this).val())) ){
		
			$(this).val("请输入手机号")
			$(this).css({"color":"#f00"});
		  $(this).animate({"textIndent":"20px"},100,function(){
			$(this).animate({"textIndent":"30px"},function(){
				$(this).animate({"textIndent":"20px"},100,function(){
			         $(this).animate({"textIndent":"30px"},function(){
			         $(this).val("");
			         $(this).css({"color":"#000"});
			         });
			       })
			});
		});	
		
	    }
		
		
	})
	
//	$(".")


	
//	
//	$(".theLogin ul li:nth-child(3) input").blur(function(){
//		var va=$(".theLogin ul li:nth-child(3) input").val()
////	    var phone= 15732171780; 
//		if ($(this).val().length== 0) {
//			
//			$(this).attr("type","text")
//			$(this).val("密码不能为空")
//			$(this).css({"color":"#f00"});
//		  $(this).animate({"textIndent":"-10px"},100,function(){
//			$(this).animate({"textIndent":"1px"},function(){
//				$(this).animate({"textIndent":"-10px"},100,function(){
//			         $(this).animate({"textIndent":"0px"},function(){
//			         $(this).val("");
//			         $(this).css({"color":"#000"});
//			         });
//			       })
//			});
//			
//			
//		});	
//
//			
//	    } else if($(this).val().length<=6){
//			$(this).attr("type","text")
//			$(this).val("密码长度不够6位")
//			$(this).css({"color":"#f00"});
//		  $(this).animate({"textIndent":"-10px"},100,function(){
//			$(this).animate({"textIndent":"1px"},function(){
//				$(this).animate({"textIndent":"-10px"},100,function(){
//			         $(this).animate({"textIndent":"0px"},function(){
//			         $(this).val("");
//			         $(this).css({"color":"#000"});
//			         });
//			       })
//			});
//		});	
////		$(this).attr("type","password")
//	    }
//		
//	})
//	
//	
//	$(".theLogin ul li:nth-child(4) input").blur(function(){
////		var repassword=$(".theLogin ul li:nth-child(4) input").val()
//	    
//		if ($(this).val() != $(".theLogin ul li:nth-child(3) input").val()) {
//			
//	    
//			$(this).attr("type","text")
//			$(this).val("两次密码输入不一致")
//			$(".theLogin ul li:nth-child(3) input").val("")
//			$(this).css({"color":"#f00"});
//		  $(this).animate({"textIndent":"-10px"},100,function(){
//			$(this).animate({"textIndent":"1px"},function(){
//				$(this).animate({"textIndent":"-10px"},100,function(){
//			         $(this).animate({"textIndent":"0px"},function(){
//			         $(this).val("");
//			         $(this).css({"color":"#000"});
//			         });
//			       })
//			});
//		});	
//		
//	    }
//		
//	})
//	
	$(".theNext").on("click",function(){
		
//		var va=$(".theLogin ul li:nth-child(1) input").val()
////		var phone= 15732171780; 
//		var yangzhengma=$(".theLogin ul li:nth-child(2) input").val()
////		var str=157321;
//		var mima=$(".theLogin ul li:nth-child(3) input").val()
//		var chongfu=$(".theLogin ul li:nth-child(4) input").val() 
////		var zhucexieyi=$(".dengluxieyi img:nth-child(2)")
//		
////		if (yangzhengma == str && va == phone  && chongfu == mima && chongfu.length!=0) {
////			window.location.href="zhucexinxi.html"
////		} else{
////			$(".xinxibuwanzheng").fadeIn(1000,function(){
////				$(this).fadeOut(1000)
////			})
////			
////		}
//		
		
		if($(".theLogin ul li:nth-child(1) input").val().length==""){
			
	        $(".xinxibuwanzheng").text("请输入手机号") 
			$(".xinxibuwanzheng").fadeIn(3000,function(){
				$(this).fadeOut(1500)
			})
			
		}else if($(".theLogin ul li:nth-child(2) input:nth-child(1)").val().length==""){
			 $(".xinxibuwanzheng").text("请先获取验证码") 
			$(".xinxibuwanzheng").fadeIn(3000,function(){
				$(this).fadeOut(1500)
			})
			
		}else if($(".dengluxieyi img:nth-child(1)").is(':visible')){
			 $(".dengluxieyi img:nth-child(1)").show()
			    $(".xinxibuwanzheng").text("是否同意注册条款") 
			$(".xinxibuwanzheng").fadeIn(3000,function(){
				$(this).fadeOut(1500)
			})
			 
			
			
		}else{
				
				
				window.location.href="../index_wojiage.html"
			}
		
		
	})
	
	$(".zhuceguojiaxuanze").on("click",function(){
		$(".xialaliebiao").slideDown(500)
		
		
	})
	
	
	$(".xialaliebiao li").on("click",function(){
		    var city = $(this).text()
		    $(".zhuceguojiaxuanze").text(city)
		$(".xialaliebiao").slideUp(500)
		
		
	})
	
})











