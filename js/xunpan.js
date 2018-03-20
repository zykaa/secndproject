$(function(){
	$('wodedingdanlist li').on('click',function(){
		$(this).addClass('hover').siblings().removeClass('hover')
	})
	
//	询盘协议
	$(".xieyixvke img:nth-child(1)").on("click",function(){
			$(this).css("display","none").siblings("img").css("display","block").parent().siblings('.fukuananniu').children().css('background','#EA0404');
			$('.xieyip').on('click',function(){
				$('.xieyitupian').css('display','block');
			})
			$(this).parent().siblings('.fukuananniu').children().on('click',function(){
				window.location.href = 'wodexunpan.html';
			})
		
		});
	
		$(".xieyixvke img:nth-child(2)").on("click",function(){
			$(this).css("display","none").siblings("img").css("display","block").parent().siblings('.fukuananniu').children().css('background','#E5E5E5');
			$(this).parent().siblings('.fukuananniu').children().on('click',function(){
				$(this).unbind('click');
			})
		});
		
		
		$('.xieyip').on('click',function(){
			$('.xieyitupianbg').css('display','block');
			$('.xieyitupian').css('display','block');
		})
		$('.xieyitupian img').on('click',function(){
			$('.xieyitupianbg').css('display','none');
			$('.xieyitupian').css('display','none');
		})
		
		
		//人工询盘
		$('#inputRengong').on('click',function(){
			$('.numberRengong').slideDown();
			$(this).blur(function(){
				$('.numberRengong').slideUp();
			})
		})
		$('.numberRengong dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.numberChange').html($test)
			});
		});

		//精确询盘
		$('.guojiaxinxi').on('click',function(){
			$('.guojiaXunpan').slideToggle()
			$(this).blur(function(){
				$('.guojiaXunpan').slideUp()
			})
		})
		$('.guojiaXunpan dt').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.guojiaxinxi').val($test)
			});
		});
		
		$('.baopanshixiao').on('click',function(){
			$('.shixiaolist').slideToggle()
			$(this).blur(function(){
				$('.shixiaolist').slideUp()
			})
		})
		$('.shixiaolist dt').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.baopanshixiao').val($test)
			});
		});
		
		
		$('.pinmingxinxi').on('click',function(){
			$('.pinmingXunpan').slideToggle()
			$(this).blur(function(){
				$('.pinmingXunpan').slideUp()
			})
		})
		$('.pinmingXunpan dt').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.pinmingxinxi').val($test)
			});
		});
		
		
		$('.changhaoxinxi').on('click',function(){
			$('.changhaoXunpan').slideToggle()
			$(this).blur(function(){
				$('.changhaoXunpan').slideUp()
			})
		})
		$('.changhaoXunpan dt').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.changhaoxinxi').val($test)
			});
		});
		
		
		
		
		
		
		//模糊询盘
		//国家
		$('.mohuGuojia').on('click',function(){
			$('.mohuXunpan').slideToggle()
			$(this).blur(function(){
				$('.mohuXunpan').slideUp()
			})
		})
		$('.mohuXunpan dt').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.mohuGuojia').val($test)
				$('.subguojia').html($test+'、')
			});
		});
		
		//城市
		$('.inputChanghao').on('click',function(){
			$('.mohuChanghao').slideToggle()
			$(this).blur(function(){
				$('.mohuChanghao').slideUp()
			})
		})
		$('.mohuChanghao dt').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.inputChanghao').val($test)
				$('.subchanghao').html($test+'、')
			});
		});
		
		
		//数量
		$('.numBer').each(function(){
			$(this).on('click',function(){
				
				$(this).siblings().bind('click',function(){
					
				})
			})
		})
		
		
		$(".up").on("click",function(){
			$(".down").css("color","#000")
			var num=$(this).siblings(".num").html()
			num
//			$(this).siblings(".num").html(num)
			$('.subnumber').html('x'+num)
			$(this).siblings('.num').clear()
		})
		$(".down").click(function(){
			var num=$(this).siblings(".num").html()
			num--
			if (num==0) {
				$(this).css("color","#ccc")
			}else{
				$('.subnumber').html('x'+num)
			}
		})
		
		
//		$(".yixuanPinlei span img:nth-child(1)").each(function(){
//			$(this).on("click",function(){
//				$(this).css("display","none").siblings().css("display","block")
//				$(this).parents().find('img:nth-child(0)').css("display","block").siblings().parents().find('img:nth-child(1)').css("display","none")
//			})
//		})
//		
//		$('.peisongul li img:nth-child(1)').on('click',function(){
//			$(this).css("display","none").siblings("img").css("display","block").parents().siblings().children("img:nth-child(1)").css("display","block").siblings("img:nth-child(2)").css("display","none");
//			$('.peisongulli li:nth-child(1) p').css('color','#EA0404').parent().siblings().children().css('color','#999');
//		
//		});
	
		$('.yixuanPinlei span img').on('click',function(){
			$(this).css("display","none").siblings("img").css("display","block").parents().siblings().children("img:nth-child(1)").css("display","block").siblings("img:nth-child(2)").css("display","none");
			
		});
		
		
		$('.danwei span').each(function(index,val){
			$(val).on('click',function(){
			var $test=$(this).html()
				$('.subdanwei').html($test)
			});
		});
		
		

//	报盘协议
	$(".xieyixvke img:nth-child(1)").on("click",function(){
			$(this).css("display","none").siblings("img").css("display","block").parent().siblings('.fukuananniu').children().css('background','#EA0404');
			$('.xieyip').on('click',function(){
				$('.xieyitupian').css('display','block');
			})
			$(this).parent().siblings('.fukuananniu').children().on('click',function(){
				window.location.href = '../fukuan.html';
			})
		
		});
	
		$(".xieyixvke img:nth-child(2)").on("click",function(){
			$(this).css("display","none").siblings("img").css("display","block").parent().siblings('.fukuananniu').children().css('background','#E5E5E5');
			$(this).parent().siblings('.fukuananniu').children().on('click',function(){
				$(this).unbind('click');
			})
		});
		
		
		$('.xieyip').on('click',function(){
			$('.xieyitupianbg').css('display','block');
			$('.xieyitupian').css('display','block');
		})
		$('.xieyitupian img').on('click',function(){
			$('.xieyitupianbg').css('display','none');
			$('.xieyitupian').css('display','none');
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
})
