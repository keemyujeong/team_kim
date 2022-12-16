<?php
    $title=$_POST['title'];
    $contents=$_POST['contents'];

    echo $title + $contents;

    $db=mysqli_connect("localhost","teamkim","kimteam1!","teamkim");
    mysqli_query($db, "set names utf8");

    $noCnt="SELECT COUNT(*) FROM board"
    $noCnt=$noCnt+1

    $sql="INSERT INTO board(no, title, contents, user, regDate, recomCnt)
            VALUES('')"
?>