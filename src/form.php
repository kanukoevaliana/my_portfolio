<?

	$name = $_POST['name'];
	$email = $_POST['email'];
	$inform = $_POST['message'];


	$message = "Имя отправителя:".$name."\r\n".
				"E-mail: ". $email."\r\n".
				"Сообщение: ". $inform ."\r\n";

	$mail = mail('kanukoeva.liana@yandex.ru','письмо с сайта',$message);

	if($mail){
		$answer['status'] = 'Message sent successfully...';
	}
	else
	{
		$answer['status'] = 'Message could not be sent...';
	}

?>