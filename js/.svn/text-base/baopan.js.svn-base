$(function(){
	//单价展开spr
	$('.inputSpr').focus(function(){
		$(this).attr("placeholder","SPR推荐价:￥236000.00"); 
		$('.SPR').slideDown()
	})
	$('.inputSpr').blur(function(){
		$('.SPR').slideUp()
	})
	
	$('.inputSprcif').focus(function(){
		$(this).attr("placeholder","SPR推荐价:￥236000.00"); 
		$('.SPRcif').slideDown()
	})
	$('.inputSprcif').blur(function(){
		$('.SPRcif').slideUp()
	})
	
	$('.inputSprfob').focus(function(){
		$(this).attr("placeholder","SPR推荐价:￥236000"); 
		$('.SPRfob').slideDown()
	})
	$('.inputSprfob').blur(function(){
		$('.SPRfob').slideUp()
	})
	
	
	
	
	
	$('.wodebaopanbg #inputCity').on('click',function(){
		$('.birCity').css("display","block");
		$(this).blur(function(){
			$('.birCity').css("display","none");
		})
	})
		$('.birCity dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#inputCity').val($test)
			});
		});
	
	
	$('.wodebaopanbg #searchChanghao').on('click',function(){
		$('.changhao').fadeToggle()
		$(this).blur(function(){
			$('.changhao').fadeOut()
		})
	})
	$('.changhao dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchChanghao').val($test)
			});
		});
	
	
	$('.wodebaopanbg #searchPinming').on('click',function(){
		$('.pinming').fadeToggle()
		$(this).blur(function(){
			$('.pinming').fadeOut()
		})
	})
	$('.pinming dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchPinming').val($test)
			});
		});
	

	$('.wodebaopanbg #searchPinpai').on('click',function(){
		$('.pinpai').fadeToggle()
		$(this).blur(function(){
			$('.pinpai').fadeOut()
		})
	})
	$('.pinpai dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchPinpai').val($test)
			});
		});
	
	
	
	$('.wodebaopanbg #cityCoutray').on('click',function(){
		$('.guojia').fadeToggle()
		$(this).blur(function(){
			$('.guojia').fadeOut()
		})
	})
	$('.guojia dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#cityCoutray').val($test)
			});
		});
	
	
	$('.wodebaopanbg #detialsCity').on('click',function(){
		$('.chengshi').fadeToggle()
		$(this).blur(function(){
			$('.chengshi').fadeOut()
		})
	})
	$('.chengshi dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#detialsCity').val($test)
			});
		});
	
	
	$('.wodebaopanbg #kucunInput').on('click',function(){
		$('.kucun').fadeToggle()
		$(this).blur(function(){
			$('.kucun').fadeOut()
		})
	})
	$('.kucun dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.kucunspan').html($test)
			});
		});
	
	
	$('.wodebaopanbg #qishouInput').on('click',function(){
		$('.qishou').fadeToggle()
		$(this).blur(function(){
			$('.qishou').fadeOut()
		})
	})
	$('.qishou dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.qishouspan').html($test)
			});
		});
	
	
	$('.wodebaopanbg .danjiainput').on('click',function(){
		$('.danjia').fadeToggle()
	})
	$('.danjia dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.danjiaspan').html($test)
			});
		});
		
	
	$('.wodebaopanbg #guigeInput').on('click',function(){
		$('.guige').fadeToggle()
		$(this).blur(function(){
			$('.guige').fadeOut()
		})
	})
	$('.guige dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#guigeInput').val($test)
			});
		});
	
	
	$('.wodebaopanbg #yufuInput').on('click',function(){
		$('.yufu').fadeToggle()
		$(this).blur(function(){
			$('.yufu').fadeOut()
		})
		
	})
	$('.yufu dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				var $zongjia=$('.inputSpr').val()*$('.zongshuliang').val()
				$('#yufuInput').val($test)
				if($('#yufuInput').val()=='20%'||$('#yufuInput').val()=='50%'){
					$('.weikuan_zhifu').slideDown()
					$('.yufu').fadeOut()
				}else if($('#yufuInput').val()=='全款'){
					$('.yufujiage').val($zongjia)
					$('.weikuan_zhifu').slideUp()
					$('.yufu').fadeOut()
				}else if($('#yufuInput').val()=='20%'){
					var $zongJiao=$zongjia*Math.floor(0.2)
					('.yufujiage').val($zongJiao)
				
				}
			});
			
		});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('.wodebaopanbg #weikuanInput').on('click',function(){
		$('.weikuan').fadeToggle()
		$(this).blur(function(){
			$('.weikuan').fadeOut()
		})
	})
	$('.weikuan dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#weikuanInput').val($test)
			});
		});
	
	
	$('.wodebaopanbg #timeInput').on('click',function(){
		$('.showTime').fadeToggle()
		$(this).blur(function(){
			$('.showTime').fadeOut()
		})
	})
	$('.showTime dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#timeInput').val($test)
			});
		});
	
	
	
	
	
	
	
//	cif
	$('.wodebaopanbg #inputCitycif').on('click',function(){
		$('.birCitycif').css("display","block");
		$(this).blur(function(){
			$('.birCitycif').css("display","none");
		})
	})
		$('.birCitycif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#inputCitycif').val($test)
			});
		});
	
	
	$('.wodebaopanbg #searchChanghaocif').on('click',function(){
		$('.changhaocif').fadeToggle()
		$(this).blur(function(){
			$('.changhaocif').fadeOut()
		})
	})
	$('.changhaocif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchChanghaocif').val($test)
			});
		});
	
	
	$('.wodebaopanbg #searchPinmingcif').on('click',function(){
		$('.pinmingcif').fadeToggle()
		$(this).blur(function(){
			$('.pinmingcif').fadeOut()
		})
	})
	$('.pinmingcif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchPinmingcif').val($test)
			});
		});
	

	$('.wodebaopanbg #searchPinpaicif').on('click',function(){
		$('.pinpaicif').fadeToggle()
		$(this).blur(function(){
			$('.pinpaicif').fadeOut()
		})
	})
	$('.pinpaicif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchPinpaicif').val($test)
			});
		});
	
	
	
	$('.wodebaopanbg #cityCoutraycif').on('click',function(){
		$('.guojiacif').fadeToggle()
		$(this).blur(function(){
			$('.guojiacif').fadeOut()
		})
	})
	$('.guojiacif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#cityCoutraycif').val($test)
			});
		});
	
	
	$('.wodebaopanbg #detialsCitycif').on('click',function(){
		$('.chengshicif').fadeToggle()
		$(this).blur(function(){
			$('.chengshicif').fadeOut()
		})
	})
	$('.chengshicif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#detialsCitycif').val($test)
			});
		});
	
	
	$('.wodebaopanbg #kucunInputcif').on('click',function(){
		$('.kucuncif').fadeToggle()
		$(this).blur(function(){
			$('.kucuncif').fadeOut()
		})
	})
	$('.kucuncif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.kucunspancif').html($test)
			});
		});
	
	
	$('.wodebaopanbg #qishouInputcif').on('click',function(){
		$('.qishoucif').fadeToggle()
		$(this).blur(function(){
			$('.qishoucif').fadeOut()
		})
	})
	$('.qishoucif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.qishouspancif').html($test)
			});
		});
	
	
	$('.wodebaopanbg .danjiainputcif').on('click',function(){
		$('.danjiacif').fadeToggle()
	})
	$('.danjiacif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.danjiaspancif').html($test)
			});
		});
		
	
	$('.wodebaopanbg #guigeInputcif').on('click',function(){
		$('.guigecif').fadeToggle()
		$(this).blur(function(){
			$('.guigecif').fadeOut()
		})
	})
	$('.guigecif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#guigeInputcif').val($test)
			});
		});
	
	
	$('.wodebaopanbg #yufuInputcif').on('click',function(){
		$('.yufucif').fadeToggle()
		$(this).blur(function(){
			$('.yufucif').fadeOut()
		})
	})
	$('.yufucif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#yufuInputcif').val($test)
			});
		});
		
		
	$('.wodebaopanbg #yufuInputcif').on('click',function(){
		$('.yufucif').fadeIn()
		$(this).blur(function(){
			$('.yufucif').fadeOut()
		})
		
	})
	$('.yufucif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				var $zongjia=$('#danjiaInputcif').val()*$('.zongshuliangcif').val()
				$('#yufuInputcif').val($test)
				if($('#yufuInputcif').val()=='20%'||$('#yufuInputcif').val()=='50%'){
					$('.yufujiagecif').val($(''))
					$('.weikuan_zhifucif').slideDown()
					$('.yufucif').fadeOut()
				}else if($('#yufuInputcif').val()=='全款'){
					$('.yufujiagecif').val($zongjia)
					$('.weikuan_zhifucif').slideUp()
					$('.yufucif').fadeOut()
				}
			});
			
		});	
	
	
	$('.wodebaopanbg #weikuanInputcif').on('click',function(){
		$('.weikuancif').fadeToggle()
		$(this).blur(function(){
			$('.weikuancif').fadeOut()
		})
	})
	$('.weikuancif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#weikuanInputcif').val($test)
			});
		});
	
	
	$('.wodebaopanbg #timeInputcif').on('click',function(){
		$('.showTimecif').fadeToggle()
		$(this).blur(function(){
			$('.showTimecif').fadeOut()
		})
	})
	$('.showTimecif dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#timeInputcif').val($test)
			});
		});
	
	
//	fob
	$('.wodebaopanbg #inputCityfob').on('click',function(){
		$('.birCityfob').css("display","block");
		$(this).blur(function(){
			$('.birCityfob').css("display","none");
		})
	})
		$('.birCityfob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#inputCityfob').val($test)
			});
		});
	
	
	$('.wodebaopanbg #searchChanghaofob').on('click',function(){
		$('.changhaofob').fadeToggle()
		$(this).blur(function(){
			$('.changhaofob').fadeOut()
		})
	})
	$('.changhaofob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchChanghaofob').val($test)
			});
		});
	
	
	$('.wodebaopanbg #searchPinmingfob').on('click',function(){
		$('.pinmingfob').fadeToggle()
		$(this).blur(function(){
			$('.pinmingfob').fadeOut()
		})
	})
	$('.pinmingfob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchPinmingfob').val($test)
			});
		});
	

	$('.wodebaopanbg #searchPinpaifob').on('click',function(){
		$('.pinpaifob').fadeToggle()
		$(this).blur(function(){
			$('.pinpaifob').fadeOut()
		})
	})
	$('.pinpaifob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#searchPinpaifob').val($test)
			});
		});
	
	
	
	$('.wodebaopanbg #cityCoutrayfob').on('click',function(){
		$('.guojiafob').fadeToggle()
		$(this).blur(function(){
			$('.guojiafob').fadeOut()
		})
	})
	$('.guojiafob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#cityCoutrayfob').val($test)
			});
		});
	
	
	$('.wodebaopanbg #detialsCityfob').on('click',function(){
		$('.chengshifob').fadeToggle()
		$(this).blur(function(){
			$('.chengshifob').fadeOut()
		})
	})
	$('.chengshifob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#detialsCityfob').val($test)
			});
		});
	
	
	$('.wodebaopanbg #kucunInputfob').on('click',function(){
		$('.kucunfob').fadeToggle()
		$(this).blur(function(){
			$('.kucunfob').fadeOut()
		})
	})
	$('.kucunfob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.kucunspanfob').html($test)
			});
		});
	
	
	$('.wodebaopanbg #qishouInputfob').on('click',function(){
		$('.qishoufob').fadeToggle()
		$(this).blur(function(){
			$('.qishoufob').fadeOut()
		})
	})
	$('.qishoufob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.qishouspanfob').html($test)
			});
		});
	
	
	$('.wodebaopanbg .danjiainputfob').on('click',function(){
		$('.danjiafob').fadeToggle()
	})
	$('.danjiafob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('.danjiaspanfob').html($test)
			});
		});
		
	
	$('.wodebaopanbg #guigeInputfob').on('click',function(){
		$('.guigefob').fadeToggle()
		$(this).blur(function(){
			$('.guigefob').fadeOut()
		})
	})
	$('.guigefob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#guigeInputfob').val($test)
			});
		});
	
	
	$('.wodebaopanbg #yufuInputfob').on('click',function(){
		$('.yufufob').fadeToggle()
		$(this).blur(function(){
			$('.yufufob').fadeOut()
		})
		
	})
	$('.yufufob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				var $zongjia=$('#danjiaInputfob').val()*$('.zongshuliangfob').val()
				$('#yufuInputfob').val($test)
				if($('#yufuInputfob').val()=='20%'||$('#yufuInputfob').val()=='50%'){
					$('.yufujiagefob').val($(''))
					$('.weikuan_zhifufob').slideDown()
					$('.yufufob').fadeOut()
				}else if($('#yufuInputfob').val()=='全款'){
					$('.yufujiagefob').val($zongjia)
					$('.weikuan_zhifufob').slideUp()
					$('.yufufob').fadeOut()
				}
			});
			
		});
	
	
	
	
	
	
	$('.wodebaopanbg #weikuanInputfob').on('click',function(){
		$('.weikuanfob').fadeToggle()
		$(this).blur(function(){
			$('.weikuanfob').fadeOut()
		})
	})
	$('.weikuanfob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#weikuanInputfob').val($test)
			});
		});
	
	
	$('.wodebaopanbg #timeInputfob').on('click',function(){
		$('.showTimefob').fadeToggle()
		$(this).blur(function(){
			$('.showTimefob').fadeOut()
		})
	})
	$('.showTimefob dl dt').each(function(index,val){
			$(val).on('click',function(){
				var $test=$(this).html()
				$('#timeInputfob').val($test)
			});
		});
	

	
})