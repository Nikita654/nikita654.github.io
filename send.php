<?php
$fio = $_POST['userName'];
$email = $_POST['password'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
mail("xyk654@bk.ru", "Заказать звонок", "Имя:".$fio.". E-mail: ".$email ,"From: xyk654@bk.ru \r\n")
?>