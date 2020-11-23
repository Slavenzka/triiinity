<?php
  $name = $_REQUEST["name"];
  $phone = $_REQUEST["phone"];
  $email = $_REQUEST["email"];

  $to = "xyz@somedomain.com";
  $subject = "Нова заявка от "$name;

  $message = "<b>Надійшла нова заявка</b>";
  $message .= "<p>Им'я: $name</p>";
  $message .= "<p>Контактний телефон: $phone</p>";
  $message .= "<p>Контактна пошта: $email</p>";

  $header = "From:abc@somedomain.com \r\n";
  $header .= "MIME-Version: 1.0\r\n";
  $header .= "Content-type: text/html\r\n";

  $retval = mail ($to,$subject,$message,$header);

  if( $retval == true ) {
    echo "Message sent successfully...";
  }else {
    echo "Message could not be sent...";
  }
?>
