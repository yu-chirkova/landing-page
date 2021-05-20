<?php
$to = 'to@mail.ru';
$subject = 'Заявка с сайта';
$message = 'Получена заявка на сквозную от пользователя' . $_POST['name'] . 'с номером телефона ' . $_POST['phone'] . '';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";

mail($to, $subject, $message, $headers);
