<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$phone = $_POST['tel'];}
 
/* Сюда впишите свою эл. почту */
$myaddres = "istvudlee@mail.ru"; // кому отправляем 
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "\nТелефон: $phone\nИмя: $name";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ c сайта Автолицензия.рф'; //сабж
$email='автолицензия.рф'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
