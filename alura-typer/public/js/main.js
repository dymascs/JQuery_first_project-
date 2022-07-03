var frase = $(".frase").text();
var numPalavra = frase.split("").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavra);