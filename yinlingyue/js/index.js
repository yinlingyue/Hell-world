$(function(){

	/*banner*/
	//轮播图淡入淡出
	var timer = setInterval(auto,3000);
	var index = 0;
	//当前下标的图片显示 其他隐藏
	function auto(){
			if(index == $(".bannerImg").size()){
				index = 0;
			}
			if(index == 1){
				$(".banner0").css("background-color","#dee6e9");
			}else{
				$(".banner0").css("background-color","black");
			}
			$(".bac1").eq(index).css({"margin-left":-40})
			$(".bac2").eq(index).css({"margin-left":80})
			$(".circle .cirs").eq(index).stop().addClass("active").siblings().stop().removeClass("active");
			$(".bannerImg").eq(index).stop().fadeIn(1500).siblings().stop().fadeOut(1500,function(){
			});
			$(".bac1").eq(index).animate({"margin-left":0},1500);
			$(".bac2").eq(index).animate({"margin-left":40},1500);
			index++;
	}

	//滑过小圆点时图片跟随
	$(".circle .cirs").mouseenter(function(){
		index = $(this).index();
		auto();
	})
	//划入banner图 停止定时器
	$(".bannerMain").mouseenter(function(){
		clearInterval(timer);
	})
	//离开banner图 继续
	$(".bannerMain").mouseleave(function(){
		timer = setInterval(auto,1500);		
	})
	//点击Left  按钮 进入下一张
	$(".arrows-right").click(function(){
		auto();
	})
	//点击Right 按钮 返回上一张
	$(".arrows-left").click(function(){
			clearInterval(timer);
			index--;
			if(index <= -1){
				index = $(".bannerImg").size()-1;
			}
			if(index == 1){
				$(".banner0").css("background-color","#c6c6c6");
			}else{
				$(".banner0").css("background-color","black");
			}
			$(".bac1").eq(index).css({"margin-left":-40})
			$(".bac2").eq(index).css({"margin-left":80})
			$(".circle .cirs").eq(index).stop().addClass("active").siblings().stop().removeClass("active");
			$(".bannerImg").eq(index).stop().fadeIn(1500).siblings().stop().fadeOut(1500,function(){
			});
			$(".bac1").eq(index).animate({"margin-left":0},1000);
			$(".bac2").eq(index).animate({"margin-left":40},1000);
	})


	//楼层
	var flag = true;//开关边框控制滚动条是否被触发  假设值为true时  可以触发滚动条
	//点击左侧楼层号  除了 top
	$("#LoutiNav li:not(:last)").click(function(){
		flag = false;	
		//当前点击的span的文字红色  其余默认
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");	   
		//根据当前操作的楼层号的下标  找到对应楼层距离文档顶部的 距离 
		var topHeight = $(".floor").eq( $(this).index() ).offset().top;
		
		//设置滚动条滚走的距离 为  topHeight
		$("body,html").stop().animate({"scrollTop":topHeight-50},1000,function(){
			flag = true; //点击事件动画完成后，将开关变量改变成true，让scroll滚动条事件可以继续执行
		})
	})
	
	//点击楼层号的最后一个按钮   滚动条回到顶部
	$(".last").click(function(){
		flag = false;
		$("body,html").animate({"scrollTop":0},1000,function(){
			flag = true;
			$("#LoutiNav").hide(500);
		});
	})


	//操作滚动条
	$(window).scroll(function(){
		//console.log($(document).scrollTop());
		
		if(flag){
		//获取滚动条滚走距离显示楼层界面
		if( $(document).scrollTop()>$(".content0").offset().top && $(document).scrollTop()<$(".enjoy").offset().top){
			$("#LoutiNav").show(1000);
		}else{
			$("#LoutiNav").hide(500);
		}
		//获取高度
		var sTop = $(document).scrollTop();
		var $floor = $(".floor").filter(function(){
			return Math.abs( $(this).offset().top - sTop )   < $(this).height()/2;
		})

		if( $floor.index()!=-1 ){
			//根据楼层的索引  找到对应的楼层号   设置样式
			$("#LoutiNav li").eq( $floor.index() )
							 .find("span")
							 .addClass("active")
							 .end()
							 .siblings()
							 .find("span")
							 .removeClass("active");					 			 	 
			}
			if($(document).scrollTop() >  $(".footerWarp").offset().top-520){
				//地图移动到最右
				$(".footerUnwarp").stop().animate({"background-position":760},500)				
			}else{
				$(".footerUnwarp").css("background-position",0)
			}
		}
		
		
		//获取搜索栏出现的高度
		var h = $(".bannerFot").offset().top+100;
		var sTop =  $(document).scrollTop();
		if( sTop >= h ){
			$(".header-bot").removeClass("header-bot").addClass("typeCon");
			$(".searchCons").siblings().hide();

		}else{
			$(".typeCon").removeClass("typeCon").addClass("header-bot");
			$(".searchCons").siblings().show();
		}

	})




})	
















