<?php
$mysql_db_hostname = "localhost";
$mysql_db_user = "twgcom";
$mysql_db_password = "ba590814-1940-410c-9925-bb5f97d1e5cd";
$mysql_db_database = "twgcom"; 


$con = mysql_connect($mysql_db_hostname, $mysql_db_user, $mysql_db_password) or die("Could not connect database");
mysql_select_db($mysql_db_database, $con) or die("Could not select database");

?>
