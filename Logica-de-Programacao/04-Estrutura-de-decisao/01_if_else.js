/* if ... else
A estrutura if é usada quando se deseja verificar se determinada expressão é
verdadeira ou não, e executar comandos específicos para cada caso.*/

var a = 12;
var b = 5;
if (a == b) {
console.log("12 é igual a 5?!?!");
} else {
console.log("a é diferente de b");
}
// No caso acima a frase escrita seria "a é diferente de b"

/* Assim, se a expressão for avaliada como verdadeira, o primeiro bloco de
comandos é executado. Caso seja avaliada como falsa, o bloco de comandos que
segue o else será executado.
Também é possível aglomerar mais testes, utilizando-se o comando else if. */

var a = 10;
if (a < 6) {
console.log("a menor que 6");
} else if (a > 6) {
console.log("a maior que 6");
} else {
console.log("se a não é maior nem menor que 6, a é 6!");
}

/* Outra forma possível de se utilizar o if é com sua forma abreviada como
na linguagem C, usando o operador ternário ?. Ele pode criar estruturas de
decisão simples em apenas uma linha de comando, porém, muitas vezes isso
pode prejudicar a clareza do seu código, tornando-o complicado de entender
para alguém que não esteja familiarizado com o uso desde operador condicional. */

var a = 8;
(a >= 5 ? console.log("yes") : console.log("no"));
// Isso equivale ao código:
var a = 5;
if (a >= 5) {
console.log("yes");
} else {
console.log("no");
}