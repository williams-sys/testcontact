
<?php
if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailForm = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "shanhtet07@gmail.com";
    $headers = "Form: ".$mailForm;
    $txt = "You have a message ".$name .$message;

    mail($mailTo, $name, $txt, $headers);

    header("Location: index.html?MessageSent");
}

?>