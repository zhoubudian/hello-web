<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    div, ul, li{ margin:0; padding: 0;}
    li{ list-style: none; padding: 10px;}
    h2{ width: 300px; margin: 0 auto;}
    #bbs{border-bottom: 1px solid #ddd; font-size: 14px;}
    #bbs ul{border-top: 1px solid #ddd; padding:10px 20px;}
    #bbs ul li span{padding:10px 20px; }
    #bbs ul li input.msg{width: 400px;}
    #bbs ul li span.mid{ display:block; float:left;}
    #box{
          width:60%;
          height:300px;
          margin:20px auto;
          border:1px solid #000;
      }
      dt{
          width: 100px;
          height:100px;
          float:left;
          margin:50px 20px;
          text-align:center;
      }
      
      dd:nth-of-type(1){
          
      }
      dd:nth-of-type(2){
          width: 500px;
          height:30px;
          border:1px solid #ccc;
          margin-top:40px;
          float: left;
      }
      dd:nth-of-type(3){
          width: 500px;
          height:100px;
          border:1px solid #ccc;
          margin-top:20px;
          float: left;
      }
      dd:nth-of-type(4){
          width:500px;
          height:30px;
          border:1px solid #ccc;
          float:left;
          margin-top:20px;
      }
      dd:nth-of-type(5) img{
          display:inline-block;
          width:20px;
          height:20px;
      }
    </style>
</head>
<body>
    <?php
    require './cont.php';
    $btn = $_POST['btn'];

    if ($btn) {
        $uName = $_POST['uName'];
        $face = $_POST['face'];
        $sTitle = $_POST['sTitle'];
        $con = $_POST['con'];
        if($uName == ''|| $face == ''|| $sTitle == ''|| $con == ''){
            echo '<script>alert("输入不能为空");</script>';
        }else{
            $sql1 = "insert into bbs(uName ,face ,sTitle ,con ,sTime) values('$uName','$face','$sTitle','$con','$sTime')";
            $m->query($sql1);
        }
    }

    $sql = "select * from bbs order by sTime desc";
    $res = $m->query($sql);
    ?>
<h2>Huawei在线留言系统</h2>
<div id="bbs">
    <form action="" method="post">
    <ul>
        <li>
            <span>用户名称</span>
            <input class="msg" type="text" name="uName">
        </li>
        <li>
            <span>用户头像</span>
            <input type="radio" name="face" value="1.jpg" checked/><img src="face/1.jpg" />
            <input type="radio" name="face" value="2.jpg"/><img src="face/2.jpg" />
            <input type="radio" name="face" value="3.jpg"/><img src="face/3.jpg" />
            <input type="radio" name="face" value="4.jpg"/><img src="face/4.jpg" />
            <input type="radio" name="face" value="5.jpg"/><img src="face/5.jpg" />
        </li>
        <li><span>留言标题</span><input class="msg" type="text" name="sTitle" /></li>
        <li><span class="mid">留言内容</span> <textarea cols="60" rows="10" name="con"></textarea></li>
        <li><span></span><input type="submit" name="btn" value="提交留言" /></li>
    </ul>
    </form>
</div>

<?php
while ($row = $res->fetch_assoc()) {
    ?>
<div id="box"> 
        <dl>
            <dt>
                <img src="face/<?php echo $row['face']; ?>" />
                <h4><?php echo $row['uName']; ?></h4>
            </dt>
            <dd>
            </dd>
            <dd>
                <h2>用户标题:<?php echo $row['sTitle']; ?></h2>
            </dd>
            <dd>
                <?php echo $row['con']; ?>
            </dd>
            <dd>
                <?php echo $row['sTime']; ?>
            </dd>
            <dd>
                <a href="del.php?id=<?php echo $row['id'] ?>"> <img src="face/sc.PNG" /></a>
                <a href="upda.php?id=<?php echo $row['id'] ?>"> <img src="face/xg.PNG" /></a>
            </dd>
        </dl>
    </div>
    <?php 
} ?>
</body>
</html>