<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
mail("info@svai-servis.ru", "Заказать звонок", "Имя:".$fio.". E-mail: ".$email ,"From: info@svai-servis.ru \r\n")
?>