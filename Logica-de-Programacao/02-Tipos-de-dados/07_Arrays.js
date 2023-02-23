/* 
Os Arrays são pares do tipo inteiro-valor para se mapear valores a partir de um
índice numérico. Em JavaScript os Arrays são objetos com métodos próprios.
Um objeto do tipo Array serve para se guardar uma coleção de ítens em uma
única variável.
*/

//Arrays


//---------------------------------------------------------------

var listaAlunos = ["Lucas", "Francisco", "José", "Renato"];

console.log(listaAlunos); //imprimindo todo o Array no console

listaAlunos[4] = "Gladson"; //adicionando o valor dentro da posição 4 do array

console.log(listaAlunos);

//Inserindo itens no final do vetor
listaAlunos.push("Reinado");
console.log(listaAlunos);

//Inserindo itens no começo do vetor
listaAlunos.unshift("Júlio");
console.log(listaAlunos);

//Removendo itens no final do vetor
listaAlunos.pop();
console.log(listaAlunos);

//Removendo itens no começo do vetor
listaAlunos.shift();
console.log(listaAlunos);

//ordenando vetor ordem alfabetica
listaAlunos.sort();
console.log(listaAlunos);

//-----------------------------------

//vetor variado (neste caso os valores variado são: String , numero , boolean)
var vetorCoisas2 = []
vetorCoisas2[0] = "Olá";
vetorCoisas2[1] = 2021;
vetorCoisas2[2] = true;
vetorCoisas2["nome"] = "Ramon";
vetorCoisas2["funcao"] = function teste() { };
console.log(vetorCoisas2);
console.log(vetorCoisas2["nome"]); //Ramon