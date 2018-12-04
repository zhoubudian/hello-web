<?php
require "./cont.php";

$id=$_GET['id'];

$res = $m->query("delete from bbs where id='$id'");

if($res){
    echo "<script>window.location.href='index.php';</script>";
}else{
    echo 'errer';
}

?>