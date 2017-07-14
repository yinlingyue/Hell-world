$(function(){
	

	//开关
	var flagname1=false;//表示不成功；
	var flagname2=false;//表示不成功；

	//验证码
	var regCode = /^[a-zA-Z\d]$/;
	var codeLength = 4; //验证码的长度
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
	  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
	  'r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G',
	  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	//四位随机验证码
	//刷新页面 出现新的验证码
	rand()
	function rand(){
		code = "";
		for(var i = 0; i < codeLength; i++) {
			var charNum = Math.floor(Math.random() * 52);
			code += codeChars[charNum];
			$(".code").html(code);		
		}
	}
	//点击换一换 出现新的验证码
	$(".btnhh").click(function(){
		rand()
	})

	//检查验证码是否相等
	$('.yanzz').blur(function(){
		if(  $('.yanzz').val() ==  $('.code').html() ){
			flagname1=true;
		}else{
			$(".b11").show();
			flagname1=false;
		}
	})
	//点击时隐藏
	$('.yanzz').focus(function(){
		$(".b11").hide();
	})


	//判断是成功登录
	$("#btnn").submit(function(){
 		alert()
		$(".error").show(500)
		if( flagname1==true ){
	 		return true;
	 	}
	 	return false;	 	
	})




});











