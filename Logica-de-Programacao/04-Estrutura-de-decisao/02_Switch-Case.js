//Switch-Case

/* As estruturas do tipo switch são usadas quando queremos selecionar uma
opção dentre várias disponíveis. */

//exemplo
var marvin = "robot";

switch (marvin) {
case "human":
console.log("hello carbon unit!");
break;
case "alien":
console.log("brrr I hate aliens!");
break;
case "robot":
console.log("emergency, to the rescue!");
break;
default:
console.log("what are you?");
break;
}

/* Ao contrário de outras linguagens, os valores de comparação podem ser
strings além de valores numéricos.

O comando break faz com que o switch pare de verificar as outras possibili-
dades abaixo e pode ser omitido caso se deseje uma estrutura que tornará mais

de uma opção como verdadeira. Por fim, default é opcional e corresponde a uma
sequência de comandos que será executada quando nenhum dos outros case o
forem. */