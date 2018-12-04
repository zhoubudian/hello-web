<?php
header("Content-type:text/html;charset=utf-8");
//获取
$uName = $_POST['uName'];
$face = $_POST['face'];
$sTitle = $_POST['sTitle'];
$con = $_POST['con'];

require "./cont.php";
$id = $_GET['id'];

$res = $m->query("update bbs set uName='$uName',face='$face',sTitle='$sTitle',con='$con',sTime='$sTime' where id='$id'");

if($res){
    echo "<script>window.location.href='index.php';</script>";
}else{
    echo 'errer';
}
?>