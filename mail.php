<?
if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['phone']) && $_POST['phone'] != "")) {
  $to = 'sedoi787@yandex.ru';
  $subject = 'Заявка с сайта Автолицензия.рф';
  $message = '
    <html>
      <head>
        <title>'.$subject.'</title>
      </head>
      <body>
        <p>Имя: '.$_POST['name'].'</p>
        <p>Телефон: '.$_POST['phone'].'</p>
      </body>
    </html>';
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $headers .= "From: Автолицензия.рф\r\n";
  $status = mail($to, $subject, $message, $headers);
  echo("sended mail:");
  echo($status);
} else {
  echo("not enough arguments");
}
?>

