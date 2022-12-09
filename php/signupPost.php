<?php
    header('content-Type:text/plain; charset=utf-8');

    $id = $_POST['id'];
    $password = $_POST['password'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $zipcode = $_POST['zipcode'];
    $address = $_POST['address'];
    $phonecall = $_POST['phonecall'];
    
    $name = addslashes($name);
    $address = addslashes($address);

    $now = date("Y-m-d H:i:s");

    $db = mysqli_connect("localhost","kyjsoft","appleyummy1!","kyjsoft");
    mysqli_query($db, "set names uft8");

    $sql = "INSERT INTO plantBoard(id, password, name, zipcode, address, phonecall) VALUES ('$id', '$password', '$name', '$email', '$zipcode', '$address','$phonecall')";
   
    $result = mysqli_query($db, $sql);


    if($result) echo "insert success";
    else echo "insert failed";


    mysqli_close($db);

?>