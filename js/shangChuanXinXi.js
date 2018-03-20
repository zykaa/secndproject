//工商户上传图片
window.URL=window.URL||window.webkitURL;
		var fileElem=document.getElementById("shengfenzhengzhengmian")
		var fileElem=document.getElementById("fileElem")
		fileList=document.getElementById("fileList")
//		fileList=document.getElementById("file")
		
		function handleFiles(obj){
			var files=obj.files
			img=new Image()
			if (window.URL) {
//				alert(files[0].name+","+files[0].size+"bytes");
				
				img.src=window.URL.createObjectURL(files[0]);//创建url
				img.width=76;
				img.height=76;
				img.onload=function(e){
					
					window.URL.revokeObjectURL(this,src)
				}
				
				fileList.appendChild(img)
			} else if(window.FileReader){
				var reader=new FileReader();
				reader.readAsDataURL(files[0])
				reader.onload=function(e){
					
					alert(files[0].name+","+e.total+"bytes")
					img.src=this.result
					img.width=76;
						img.height=76;
					fileList.appendChild(img)
				}
				
			}else{
				
				obj.select()
				obj.blur()
				var nfile=document.seletection.creatRange().text;
				document.selection.empty();
				img.src=nfile
				img.width=76;
					img.height=76;
				img.onload=function(){
//					alert(nfile+","+img.fileSize+"bytes");
					
				}
				
				fileList.appendChild(img);
				
				fileList.style.fileter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src='"+nfile+"')";
				
			}
					
				}
		
//
//window.URL=window.URL||window.webkitURL;
////		var shenfenzhengfanmian=document.getElementById("shengfenzhengzhengmian")
//		var shenfenzhengfanmian=document.getElementById("shenfenzhengfanmian")
////		fileList=document.getElementById("fileList")
//		files=document.getElementById("file")
//		
//		function handleFiles(obj){
//			var files=obj.files
//			img=new Image()
//			if (window.URL) {
////				alert(files[0].name+","+files[0].size+"bytes");
//				
//				img.src=window.URL.createObjectURL(files[0]);//创建url
//				img.width=76;
//				img.height=76;
//				img.onload=function(e){
//					
//					window.URL.revokeObjectURL(this,src)
//				}
//				
//				files.appendChild(img)
//			} else if(window.FileReader){
//				var reader=new FileReader();
//				reader.readAsDataURL(files[0])
//				reader.onload=function(e){
//					
//					alert(files[0].name+","+e.total+"bytes")
//					img.src=this.result
//					img.width=76;
//						img.height=76;
//					files.appendChild(img)
//				}
//				
//			}else{
//				
//				obj.select()
//				obj.blur()
//				var nfile=document.seletection.creatRange().text;
//				document.selection.empty();
//				img.src=nfile
//				img.width=76;
//					img.height=76;
//				img.onload=function(){
////					alert(nfile+","+img.fileSize+"bytes");
//					
//				}
//				
//				files.appendChild(img);
//				
//				files.style.fileter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src='"+nfile+"')";
//				
//			}
//					
//				}
