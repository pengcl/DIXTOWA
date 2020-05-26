<?php
require_once('class.phpmailer.php');
//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded

$mail = new PHPMailer(true); // the true param means it will throw exceptions on errors, which we need to catch

$mail->IsSMTP(); // telling the class to use SMTP

$subject =  $_POST['subject'];
$message =  $_POST['message'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$name =  $firstName.''.$lastName;
$email =  $_POST['email'];
$phone =  $_POST['phone'];
$company =  $_POST['company'];
$body='<h2>Client Details：</h2><p><span>Name:</span><span>'.$name.'</span></p><p><span>Company:</span><span>'.$company.'</span></p><p><span>Phone:</span><span>'.$phone.'</span></p><p><span>Email:</span><span>'.$email.'</span></p><p><span>Message:</span><span>'.$message.'</span></p>';

  $mail->SMTPDebug  = true;                     // enables SMTP debug information (for testing)
  $mail->SMTPAuth   = true;                  // enable SMTP authentication
  $mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
  $mail->Host       = "smtp.qq.com";      // sets GMAIL as the SMTP server
  $mail->Port       = 465;                   // set the SMTP port for the GMAIL server
  $mail->Username   = "3559996@qq.com";  // GMAIL username
  $mail->Password   = "jnpwpoeehepicagj";            // GMAIL password
  $mail->CharSet = "UTF-8";                    	// 指定字符集
  $mail->Encoding = "base64";

  $mail->AddReplyTo($email, $name);
  $mail->AddAddress('gaiassecret@126.com', 'gaiassecret');
  $mail->AddAddress('3559996@qq.com', 'pengcl');
  $mail->SetFrom($email, $name);
  $mail->AddReplyTo('3559996@qq.com', 'pengcl');
  $mail->Subject = $subject;
  $mail->AltBody = 'To view the message, please use an HTML compatible email viewer!'; // optional - MsgHTML will create an alternate automatically
  $mail->MsgHTML($body);
  //$mail->AddAttachment('images/phpmailer.gif');      // attachment
  //$mail->AddAttachment('images/phpmailer_mini.gif'); // attachment
  if(!$mail->Send())
{
 echo "send email error. <p>";
 echo "ErrorInfo: " . $mail->ErrorInfo;
 exit;
} 
echo "1";
?>
