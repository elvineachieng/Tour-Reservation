<?php

    include 'connect.php';
    $fname = mysqli_real_escape_string($conn, $_POST['fname']);
    $lname = mysqli_real_escape_string($conn, $_POST['lname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $sql = "INSERT INTO users(fname, lname, email, password) VALUES ('$fname', '$lname', '$email', '$password')";
    $query = mysqli_query($conn, $sql);

    if($query){
        echo 'success';
    }else{
        echo 'failed';
    }
?>