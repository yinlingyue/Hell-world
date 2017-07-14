$(function(){
	
	$("#sc").click(function(){
		alert("您可以尝试通过快捷键CTRL + D 加入到收藏夹~")
	})
	$("#xieyi").click(function(){
		$(".read").show();
	})
	$("#xybtn").click(function(){
		$(".read").hide();
	})


	//开关
	var flagname1=false;//表示不成功；
	var flagname2=false;//表示不成功；
	var flagname3=false;//表示不成功；
	var flagname4=false;//表示不成功；
	var flagname5=false;//表示不成功；
	//正则
	var regName = /^(13|18|15|17)\d{9}$/;
	var regPsd = /^\w{6,16}$/;


	//用户名
	$('.uname').blur(function(){
		if( regName.test( $('.uname').val() ) ){
			$('.bi1 span').hide(500);
			$(".fix2").show(500);
			$(".verify").animate({"height":500},500)
			flagname1=true;
		}
		else{
			$('.bi1 #s2').show();
			$('.bi1 #s1').hide();
			$(".fix2").hide(500);
			$(".verify").animate({"height":390},500)
			flagname1=false;
		}
	})
	$('.uname').focus(function(){
		$("#s2").hide(500);
		$("#s1").hide(500);
	})

	//密码
	$('.paswd').blur(function(){
		if($('.paswd').val()==""){
			$(".p1").show(500);
		}else if( regPsd.test( $('.paswd').val() ) ){
			$(".p2").hide();
			$(".p1").hide();
			flagname2=true;
		}else{
			$(".p1").hide();
			$(".p2").show(500);
			flagname2=false;
		}
	})
	
	$('.paswd').focus(function(){
		$(".p1").hide();
		$(".p2").hide();
	})

	//第二次密码确认
	$('.paswd1').blur(function(){
		if($('.paswd1').val()==""){
			$(".p3").show(500);
		}else if( $('.paswd').val() ==$('.paswd1').val() ){
			$(".p3").hide();
			$(".p4").hide();
			flagname3=true;
		}else{
			$(".p3").hide();
			$(".p4").show(500);
			flagname3=false;
		}
	})

	//验证码
	var regCode = /^[a-zA-Z\d]$/;
	var codeLength = 4; //ÑéÖ¤ÂëµÄ³¤¶È
	var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
	  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
	  'r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G',
	  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	//随机获取4位数验证码
	//封装函数
	rand()
	function rand(){
		code = "";
		for(var i = 0; i < codeLength; i++) {
			var charNum = Math.floor(Math.random() * 52);
			code += codeChars[charNum];
			$(".code").html(code);		
		}
	}
	//点击换一换出现新的验证码
	$(".btnh").click(function(){
		rand()
	})

	//验证验证码是否正确
	$('#yz1').blur(function(){
		if(  $('#yz1').val() ==  $('.code').html() ){
			flagname4=true;
		}else{
			$("#s1").hide(200);
			$("#s3").hide(200);
			$("#s2").hide(200);
			$("#s4").show(500);
			flagname4=false;
		}
	})
	$('#yz1').focus(function(){
		$("#s4").hide();
	})
	//短信验证码
	var regduan = /^\d{6}$/;
	$('#yz2').blur(function(){
		if( regduan.test( $('#yz2').val() ) ){
			flagname5=true;
			$('.bi1 #s3').hide(200);
		}
		else{
			$('.bi1 #s3').show(500);
			$('.bi1 #s2').hide(200);
			$('.bi1 #s4').hide(200);
			flagname5=false;
		}
	})
	$('#yz2').focus(function(){
		$('.bi1 #s3').hide(200);
	})



	//判断是成功登录
	$("#btn").submit(function(){
		if( flagname1==true && flagname2==true && flagname3==true && flagname4==true ){
	 		return true;
	 	}
		alert("注册失败")
	 	return false;
	})

});











