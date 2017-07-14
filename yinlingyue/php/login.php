<?php

	//后台实现唯一性验证
	//接收客户端提交的用户名和密码
	$uname = $_GET["uname"];
	$upwd = $_GET["upwd"];
	include "public.php";
	//编写sql语句
	$sql = 'select * from account';

	//执行SQL语句
	$res = mysql_query($sql);
	$arr = mysql_fetch_array($res); //返回一个数组
		
	//判断$uname 在  $arr 中是否存在
	

	print_r($arr);
	if( $arr ){ //说明有用户名
		//用数据库的密码 和 用户填入的密码做比较 
		if( $arr["password"] == $upwd ){//判断密码   如果条件成立  说明 登录成功
			echo "$upwd";
			echo "<script>alert('登录成功');location.href='../index.html';</script>";
		}else{
			//说明用户名存在  密码是错误的
			echo "<script>alert('密码错误');location.href='../login.html';</script>";
		}
	}else{
		//说明用户名不存在  用户名错误
		echo "<script>alert('用户名不存在');location.href='../login.html';</script>";
	}

	
?>