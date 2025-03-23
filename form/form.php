<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $to = "subhanuiux3819@gmail.com";  // Your email address
    $subject = "New Contact Form Submission";
    
    $emailContent = "New contact form submission:\n\n";
    $emailContent .= "Name: $firstName $lastName\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Phone: $phone\n";
    $emailContent .= "Message: $message\n";
    
    $headers = "From: $email\r\n";
    
    mail($to, $subject, $emailContent, $headers);
    
    echo "success";
}
?>