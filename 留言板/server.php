<?php
header("Content-type:text/html;charset=utf-8");
//获取
$uName = $_POST['uName'];
$face = $_POST['face'];
$sTitle = $_POST['sTitle'];
$con = $_POST['con'];

require "./cont.php";
//向数据库里面存入数据
$res = $m->query("insert into bbs(uName,face,sTitle,con,sTime) values('$uName','$face','$sTitle','$con','$sTime')");


if ($res) {
    echo "<script>window.location.href='xsly.php';</script>";
} else {
    echo 'errer';
}
?>