$(function() {
	$(".submit").click(function() {
		var nome = $("#nome").val();
		var cognome = $("#cognome").val();
		var email = $("#email").val();
		var oggetto = $("#oggetto").val();
		var messaggio = $("#messaggio").val();
		var dataString = 'nome=' + nome + '&cognome=' + cognome + '&email=' + email + '&oggetto=' + oggetto + '&messaggio=' + messaggio;

		//if (nome == 'Name' || cognome == 'Surname' || email == 'E-mail' || oggetto == 'Subject' || messaggio == 'Message') {
			$('.success').fadeOut(800).hide();
			$('.error').fadeIn(800).show();
		/*} else {
			$.ajax({
				type : "POST",
				url : "invio.php",
				data : dataString,
				success : function() {
					$('.success').fadeIn(800).show();
					$('.error').fadeOut(800).hide();
				}
			});
		}*/
		return false;
	});
}); 