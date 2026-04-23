<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $mobile  = htmlspecialchars($_POST['mobile']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'islabank.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ktp@islabank.com';
        $mail->Password   = 'maramingsalamat';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Sender & recipient
        $mail->setFrom('ktp@islabank.com', 'ISLA Bank Website');
        $mail->addAddress('customerservice@islabank.com', 'Customer Service');
        $mail->addReplyTo($email, $name);

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'ISLA BANK - Client Inquiry/Complaint';
        $mail->Body    = "
            <h3>ISLA BANK - Contact Us Page (Inquiry/Complaint) </h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mobile:</strong> $mobile</p>
            <p><strong>Message:</strong><br>$message</p>
        ";

        // Send the message
        $mail->send();

        // Log success
        $logMessage = "[" . date("Y-m-d H:i:s") . "] SUCCESS: Message sent.\n";
        file_put_contents(__DIR__ . "/mail_logs/mail_log.txt", $logMessage, FILE_APPEND);

        // Show prompt on same page
        echo "<script>
            alert('Thank you for reaching us! Your message has been sent successfully.');
            window.location.href = 'mdl_contactus.html';
        </script>";

    } catch (Exception $e) {
        // Log error
        $logMessage = "[" . date("Y-m-d H:i:s") . "] ERROR: Message failed - {$mail->ErrorInfo}\n";
        file_put_contents(__DIR__ . "/mail_logs/mail_log.txt", $logMessage, FILE_APPEND);

        // Show error prompt
        echo "<script>
            alert('Sorry, your message could not be sent. Error: {$mail->ErrorInfo}');
            window.location.href = 'mdl_contactus.html';
        </script>";
    }
}
?>
