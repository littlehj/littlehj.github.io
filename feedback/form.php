<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $content = $_POST['content'];
    $from = 'From: littlehj.com'; 
    $to = 'support_pixave_app@littlehj.com'; 
    $subject = 'Pixave Feedback';

    $body = "From: $name\n E-Mail: $email\n Feedback: $content\n";
?>

<?php

function alert($msg)
{
   echo"<script type='text/javascript'>alert('$msg');history.go(-1);</script>";
}

if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['content']))
{
	$name = NULL;
	$email = NULL;
	$content = NULL;
	alert("Enter name or email address, content correctly");
}
else if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['content']))
{
	if ($_POST['submit'])
	{
	    if (mail ($to, $subject, $body, $from))
	    { 
	        echo '<p>Thank you for your email!</p>';
	        header("Location: http://www.littlehj.com/feedback/thanks.html");
	    }
	    else
	    { 
	        echo '<p>Oops! An error occurred. Try sending your message again.</p>'; 
	    }
	}
}
?>