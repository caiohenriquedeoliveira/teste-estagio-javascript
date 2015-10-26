$( document ).ready(function() {
	$('#campo-nome').keyup(function(){
	console.log("tecla solta");
		// Obter o nome digitado e o atribuir na variável abaixo
		var nomeDigitado = '';
		nomeDigitado = $("#campo-nome").val();

		// O ID nome-digitado deveria estar recebendo o nome digitado pelo usuário, isto não está acontecendo, 
		// verifique o log de erros no navegador e o corrija.
		$('#nome-digitado').text(nomeDigitado);


		// A variável abaixo deve conter a quantidade de caracteres do nome digitado, crie a lógica para obter este valor
		var quantidadeCaracteres = 0;


		// Em seguida informe este valor no elementdo com ID quantidade-caracteres

	});

});