<?php


if(isset($_POST['user_email'])) {
    $user_name = isset($_POST['user_name']) ? $_POST['user_name'] : "";
    $user_email = isset($_POST['user_email']) ? $_POST['user_email'] : "";
    $friend_name = isset($_POST['friend_name']) ? $_POST['friend_name'] : "";
    $friend_email = isset($_POST['friend_email']) ? $_POST['friend_email'] : "";
    $comment = isset($_POST['comment']) ? $_POST['comment'] : "";
    $error = "";

    if($user_name == "" || $user_email == "" || $friend_name == "" || $friend_email == "" || $comment == "") {
        $error = "All Fields Are Required";
    } else if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
        $error = "Your email is not valid";
    } else if(!filter_var($friend_email, FILTER_VALIDATE_EMAIL)) {
        $error = "Your friends email is not valid";
    }

    if($error) {
        echo json_encode(array("status" => "error", "message" => $error));
        exit;
    }

    $subject = "Hi ".$user_name." Check out Pontoon Calculator App";

    if(mail($user_email, $subject, $comment, "From:" . $friend_email))
    {
        echo json_encode(array("status" => "success", "message" => "Thank you for recommending Aurora Marine Pontoon Calculator App"));
        exit;
    }
    else
    {
        echo json_encode(array("status" => "error", "message" => "Email could not be sent at the moment"));
        exit;
    }
}