//transformar uma variavel de string para numero usando parse
// nesse caso a variavel "n1" está definido como String 
//para transformar em uma variavel pra receber numero usamos o parse
//no final usamos os valores para soma , se fosse string não seria legal.

var n1 = prompt("Digite um valor inteiro");
n1 = parseInt(n1);
var n2 = prompt("Digite outro valor inteiro");
n2 = parseInt(n2);

var soma = n1 + n2;

document.write("<h1>" + soma + "</h1>");