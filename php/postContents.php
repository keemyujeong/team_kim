<?php
    $title=$_POST['title'];
    $contents=$_POST['contents'];

    echo $title + $contents;

    $db=mysqli_connect("localhost","ezra2022","ezra1409*","ezra2022");
    mysqli_query($db, "set names utf8");

    $noCnt="SELECT COUNT(*) FROM board"
    $noCnt=$noCnt+1

    $sql="INSERT INTO board(no, title, contents, user, regDate, recomCnt)
            VALUES('')"
?>