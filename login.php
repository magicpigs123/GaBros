<?php
    $username = $_POST['username'];
    $password = $POST['password'];
    
    $conn = new mysqli('localhost','root','','logins');
    if($conn->connect_error){
        die('Connection Failed  : '.$conn->connect_error);

    }else{
        $stmt = $conn->prepare('insert into registration(username, password)
        values(?, ?)');
        $stmt->bind_param('ss',$username, $password);
        $stmt->execute();
        echo "You're in for a treat. Registration Successful.";
        $stmt->close();
        $conn->close();
    }
?>