<?php
    header('content-Type:text/plain; charset=utf-8');

    include('')

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

    $sql = "INSERT INTO signUpBoard(name, email, password, zipcode, address, phonecall, date) VALUES ('$name', '$email','$password', '$zipcode', '$address','$phonecall','$now')";
   
    $result = mysqli_query($db, $sql);

    if(isset($_POST['name'])&& isset($_POST['email'])&& isset($_POST['password'])&& isset($_POST['zipcode'])&& isset($_POST['address'])&& isset($_POST['phonecall'])){
        //보안을 강화 (시큐어코딩, 보안코딩)
        mysqli_real_escape_string($db,$_POST['name']);
        mysqli_real_escape_string($db,$_POST['email']);
        mysqli_real_escape_string($db,$_POST['zipcode']);
        mysqli_real_escape_string($db,$_POST['password']);
        mysqli_real_escape_string($db,$_POST['address']);
        mysqli_real_escape_string($db,$_POST['phonecall']);

        //에러를 체크 
        if(empty($name)){
            header("location: signupPost.php?error=아이디가 비어있어요");
            exit();
        }else if(empty($email)){
            header("location: signupPost.php?error=이메일이 비어있어요");
            exit();
        }else if(empty($password)){
            header("location: signupPost.php?error=비밀번호가 비어있어요");
            exit();
        }else if(empty($zipcode)){
            header("location: signupPost.php?error=집코드가 비어있어요");
            exit();
        }else if(empty($address)){
            header("location: signupPost.php?error=주소가 비어있어요");
            exit();
        }else if(empty($phonecall)){
            header("location: signupPost.php?error=전화번호가 비어있어요");
            exit();
        }
    }


    if($result) echo "insert success";
    else echo "insert failed";


    mysqli_close($db);

?>