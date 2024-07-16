<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $from = 'From: littlehj.com'; 
    $to = 'younghokim@mac.com'; 
    $subject = 'Request Apple NFR License';

    $body = "From: $name\n E-Mail: $email\n";
?>

<?php

function alert($msg)
{
   echo"<script type='text/javascript'>alert('$msg');history.go(-1);</script>";
}

if (empty($_POST['name']) || empty($_POST['email']))
{
	$name = NULL;
	alert("Enter name or email address correctly");
}
else if (!empty($_POST['name']) && !empty($_POST['email']))
{
	if ($_POST['submit'])
	{
	    if (mail ($to, $subject, $body, $from))
	    { 
	        echo '<p>Thank you for your email!</p>';
	        header("Location: http://www.littlehj.com/apple/thanks.html");
	    }
	    else
	    { 
	        echo '<p>Oops! An error occurred. Try sending your message again.</p>'; 
	    }
	}
}
?>