$(function(){
	//放大镜
	//鼠标移入到底部小图时，显示对应的中图和大图
	$("#left li").mouseover(function(){
		var index = $(this).index();
		$("#left li i").hide().eq(index).show();
		$("#small img").eq(index).show().siblings("img").hide();
		$("#big img").eq(index).show().siblings().hide();
	})
	//鼠标移入移出small盒子  显示或隐藏大图显示区big  和 mask
	$("#small").mouseover(function(){
		$("#big").show();
		$("#mask").show();
	})
	$("#small").mouseout(function(){
		$("#big").hide();
		$("#mask").hide();
	})
	//鼠标在small盒子上移动
	$("#small").mousemove(function(evt){
		var e = evt || event;
		var x = e.clientX - $("#small").offset().left - $("#mask").width()/2;
		var y = e.pageY - $("#small").offset().top - $("#mask").height()/2;
		
		var mx = $("#small").width()  - $("#mask").width();
		var my = $("#small").height()  - $("#mask").height();
		
		//边界处理
		x = x<=0 ? 0 : x>=mx ? mx : x;
		y = y<=0 ? 0 : y>=my ? my : y;
		
		//大图宽度/小图宽度 = 大图偏移 / mask的偏移
		var bigImageX = -x * $(".bigImage").width() / $("#small").width();
		var bigImageY = -y * $(".bigImage").height() / $("#small").height();
		$("#mask").css({
			"left":x + "px",
			"top":y+"px"
		})
		
		$(".bigImage").css({
			"left" : bigImageX+"px",
			"top" : bigImageY+"px"
		})
	})

	//选项卡
	$(".tab").click(function(){
		$(this).addClass("active")
		 	   .siblings()
		 	   .removeClass("active");
		$("body,html").animate({"scrollTop":$(".detRight").offset().top-36},500);   
		$(".main").eq( $(this).index() ).addClass("selected").siblings().removeClass("selected");
	})
	$(".tab1").click(function(){
		$(this).addClass("active1")
		 	   .siblings()
		 	   .removeClass("active1");
		$("body,html").animate({"scrollTop":$(".detRight1").offset().top-36},500);   	   
		$(".main1").eq( $(this).index() ).addClass("selected1").siblings().removeClass("selected1");
	})

	
	//点击按钮返回顶部
	$(".c1").click(function(){
		$("body,html").animate({"scrollTop":0},1500);
	})

	//操作滚动条
	$(window).scroll(function(){
		var h = $(".detRight").offset().top;
		var h1 = $(".detRight1").offset().top-36;
		if($(document).scrollTop() >=  $(".footerWarp").offset().top - 500){
			//地图移动到最右
			$(".footerUnwarp").stop().animate({"background-position":760},500)				
		}else{
			$(".footerUnwarp").css("background-position",0)
		}

		var sTop =  $(document).scrollTop();
		//第一固定栏出现与隐藏
  		if( sTop>=h && sTop<=h1-50){
  			$(".rightNav").css({"position":"fixed","top":0})
  		}else{
  			$(".rightNav").css({"position":""})
  		}
  		//第二个固定兰出现与隐藏
  		if( sTop>=h1){
  			$(".rightNav1").css({"position":"fixed","top":0})
  		}else{
  			$(".rightNav1").css({"position":""})
  		}

  		//返回顶部出现与隐藏
  		if( sTop>=h-250){
  			$(".b1").show(1000)
  			$(".c1").show(1000)
  		}else{
  			$(".b1").hide(1000)
  			$(".c1").hide(1000)
  		}
	})









})






















