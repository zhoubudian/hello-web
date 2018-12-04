<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      *{
          margin:0;
          padding:0;
      }
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
    require "./cont.php";
    $res = $m->query("select * from bbs order by sTime desc");
    ?>
    <?php
         while($row = $res->fetch_assoc()){
        ?>
    <div id="box"> 
        <dl>
            <dt>
                <img src="face/<?php echo $row['face'];?>" />
                <h4><?php echo $row['uName'];?></h4>
            </dt>
            <dd>
            </dd>
            <dd>
                <h2>用户标题:<?php echo $row['sTitle'];?></h2>
            </dd>
            <dd>
                <?php echo $row['con'];?>
            </dd>
            <dd>
                <?php echo $row['sTime'];?>
            </dd>
            <dd>
                <a href="del.php?id=<?php echo $row['id']?>"> <img src="face/sc.PNG" /></a>
                <a href="upda.php?id=<?php echo $row['id']?>"> <img src="face/xg.PNG" /></a>
            </dd>
        </dl>
    </div>
    <?php
        }
    ?>
</body>
</html>