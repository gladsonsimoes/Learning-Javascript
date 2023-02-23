/*
 A primeira maneira de se declarar uma função é através do uso da palavra
chave function de maneira similar a como elas são declaradas na linguagem
C, com as diferenças de que em JavaScript não definimos o tipo de retorno
e nem mesmo o tipo dos argumentos. Uma função complexa pode ser capaz
de tratar argumentos diferentes e retornar argumentos diferentes dependendo
das circunstâncias nas quais foi invocada. Deve-se definir seu nome e seus
argumentos conforme mostra o exemplo a seguir.
*/


function incArray(array,valor) {
    for(item in array) {
    array[item]+=valor;
    }
    return array;
    }
    // Para invocar essa função depois basta usar incArray(arg1,arg2)


//O construtor Function()    
/*  A segunda forma de se declarar uma função é utilizando o construtor Function()
e o operador new, pois em JavaScript funções e objetos são interligados.
Exemplo:  */

var areaTri = new Function("b","h","return (b*h)/2;");
// a função acima calcula a área de um triângulo dadas sua base
// altura. Para invocá-la basta usar areaTri(arg1,arg2)


// Funções como literais
/*
Essa forma é basicamente a mesma que declarar através do construtor Func-
tion(). No entanto, ela é melhor porque os comandos podem ser declarados com

a sintaxe normal de JavaScript ao invés de ser uma string como é o caso do
construtor. Com literais não há necessidade de manter a função em uma linha,
dentro das chaves podemos construir a função usando um comando por linha
normalmente.
*/

var areaTri = function(b,h) { return (b*h)/2; };
// Para invocar a função basta usar areaTri(arg1,arg2) como
// na declaração pelo construtor