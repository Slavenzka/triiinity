<?php
  $massage_sent = false;

  if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      if (isset($_POST['name']) && isset($_POST['email'])) {
          $userName = $_POST['name'];
          $userEmail = $_POST['email'];
          $userPhone = $_POST['phone'];
          $messageSubject = 'Новая заявка по Triiinity';

          $to = "";
          $body = "";
          $body .= "From: ".$userName. "\r\n";
          $body .= "Email: ".$userEmail. "\r\n";
          $body .= "Phone: ".$userPhone. "\r\n";

          mail($to, $massageSubject, $body);
          $message_sent = true;
      }
  }
?>
