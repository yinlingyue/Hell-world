<?php
	include "public.php";
	//要将数据库表中的数据显示到页面中   操作数据库	
	//编写sql语句
	$sql = "select * from account";//执行的结果是一个结果集	
	//执行sql
	$res = mysql_query($sql);//结果集	
	//$arr = mysql_fetch_array($res); //（该方法每执行一次，只取一条数据，并且返回的是一个数组） 对结果集中的数据是按行取出  并且取出来的是一个数组	
	//	print_r($arr);//打印数组	
	echo "<table width=500 border=1>";
		echo "<td>编号</td><td>用户名</td><td>密码</td>";
		while($arr = mysql_fetch_array($res)){
			echo "<tr>";
				echo "<td>".$arr["wid"]."</td><td>".$arr["names"]."</td><td>".$arr["password"]."</td>";
				echo "<td><a href='delete.php?id=".$arr["wid"]."'>删除</a></td>";
			echo "</tr>";
		}
	echo "</table>";

	
?>
