<?php
    header('Content-Type:text/plain; charset=utf-8');

    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $zipcode = $_POST['zipcode'];
    $address = $_POST['address'];
    $phonecall = $_POST['phonecall'];
    
    $name = addslashes($name);
    $address = addslashes($address);

    $now = date("Y-m-d H:i:s");

    $db = mysqli_connect("localhost","teamkim","kimteam1!","teamkim");
    mysqli_query($db, "set names uft8");

    $sql = "INSERT INTO signUpBoard(name, email, password, zipcode, address, phonecall, date) VALUES ('$name', '$email', '$password', '$zipcode', '$address','$phonecall','$now')";
   
    $result = mysqli_query($db, $sql);

    if(isset($_POST['name'])&& isset($_POST['email'])&& isset($_POST['password'])&& isset($_POST['zipcode'])&& isset($_POST['address'])&& isset($_POST['phonecall'])){
        //보안을 강화 (시큐어코딩, 보안코딩)
        mysqli_real_escape_string($db,$_POST['name']);
        mysqli_real_escape_string($db,$_POST['email']);
        mysqli_real_escape_string($db,$_POST['zipcode']);
        mysqli_real_escape_string($db,$_POST['password']);
        mysqli_real_escape_string($db,$_POST['address']);
        mysqli_real_escape_string($db,$_POST['phonecall']);

      
    }

    if($result) echo "insert success";
    else echo "insert failed";


    mysqli_close($db);

?>