<?php
// Запрет на кэширование
header("Expires: Mon, 23 May 1995 02:00:00 GTM");
header("Last-Modified: ".gmdate("D, d M Y H:i:s")." GTM");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
//****

$log =="";
$error="no"; //флаг наличия ошибки

require_once 'JsHttpRequest.php';
$JsHttpRequest = new JsHttpRequest("UTF-8");

//Короткие имена переменных и обрезка пробелов img_title
$from = trim($_POST['from']);
$phone = trim($_POST['phone']);
$mail = trim($_POST['mail']);
$text = trim($_POST['text']);
//Проверка наличия введенного текста комментария
if (empty($phone))
{
	$log .= "<li>Необходимо указать номер телефона!</li>";
	$error = "yes";
}
/*
//Проверка наличия введенного текста комментария
if (empty($name))
{
    $log .= "<li>Необходимо указать имя!</li>";
    $error = "yes";
}
*/


//Если нет ошибок отправляем email
if($error=="no")
{
$prov = 0;


//Отправка письма админу о новом комментарии
$emailadmin = 'avocode.web01@yandex.ru';//e-mail админа


$mes = "Заявка с сайта НЕРЖПРОФИ
--------------------------------------------------
Заявка с формы: $from
Имя: $name
Почта: $mail
Обращение: $text
---------------------------------------\n
";

// $from = "Заявка";

$to = $emailadmin;
$sub = '=?UTF-8?B?'.base64_encode('Заявка с сайта НЕРЖПРОФИ').'?=';
$headers = 'From: profi.info
';
$headers .= 'MIME-Version: 1.0
';
$headers .= 'Content-type: text/plain; charset=UTF-8
';
mail($to, $sub, $mes, $headers);
//****

$ok ="<div class='ok'><strong>Спасибо! Мы перезвоним вам, в ближайшее время!</strong></div>";


//Помещаем результат в массив
$GLOBALS['_RESULT'] = array(
'error' => 'no',
'text' => $name,
'ok' => $ok
);
//****
}
else//если ошибки есть
{
$log = "<ul class='no'>".$log."</ul>";

//Отправляем результат в массив
$GLOBALS['_RESULT'] = array(
'error' => 'yes',
'er_mess' => $log);
}
?>
