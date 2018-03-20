	//控制引导依次显示
	
	window.onload=function(){
		var oMask=document.getElementById('mask')
		var oSearch=document.getElementById("searchTip")
		var aStep=oSearch.getElementsByTagName("div")
		var aA=oSearch.getElementsByTagName("a")
		var  aClose=oSearch.getElementsByTagName("span")
		
		//读取cookie
		var res=document.cookie.substring(5);
//		alert(res)
		
		//如果没有cookie执行以下动作
		if(res!="www.dongdong.com.cn"){
			
		
		
		//msak 父框第一单元显示出来
		
		oMask.style.display=oSearch.style.display=aStep[0].style.display='block'
		
		//下一步
		
		for(var i=0; i<aStep.length;i++){
			//为每一个按钮增加一个INDEX属性，为后面引用
			aA[i].index=i  
			aA[i].onclick=function(){
				this.parentNode.style.display="none";
				if(this.index < aStep.length-1){
					aStep[this.index+1].style.display="block";
				}
				else if(this.index==aStep.length-1){
					oMask.style.display=oSearch.style.display="none"
				}
			}
			
		}
		
		
		//关闭按钮
		for( var i=0;i<aClose.length;i++){
			
			aClose[i].onclick=function(){
			  oMask.style.display=oSearch.style.display="none"
			}
			
		}
		
		//添加cookie
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+0)
		document.cookie="name=www.dongdong.com.cn;expires="+oDate;
	}
	
	}
		