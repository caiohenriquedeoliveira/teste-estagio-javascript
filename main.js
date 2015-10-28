$( document ).ready(function() {
	// Capturando as teclas digitadas pelo usuario detro do elemento "campo-nome"
	$('#campo-nome').keyup(function(){
		// Capturando o texto digitado pelo usuario no campo e atribuindo para a variável
		var nomeDigitado = ''; 
		nomeDigitado = $("#campo-nome").val();

		// Imprimindo o texto digitado pelo usuario no elemento "nome-digitado"
		$('#nome-digitado').text(nomeDigitado);

		// Contando a quantidade de caracteres e atribuindo o valor para a variável "quantidadeCaracteres"
		var quantidadeCaracteres = 0;
		quantidadeCaracteres = nomeDigitado.length;

		// Imprimindo a quantidade de caracteres no elemento "quantidade-caracteres"
		$("#quantidade-caracteres").text(quantidadeCaracteres);
	});

});
