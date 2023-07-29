//MÉTODO .JOIN();
//Adicionar um caracter especifico entre cada elemento exibido no vetor
const lista = ["Arroz", "Feijão", "Leite", "Macarrão"]

document.getElementById("print").innerHTML = lista.join(" - ");


//MÉTODO .POP();/SHIFT();/PUSH();/UNSHIFT();/ddelete();
//removendo ultimo item do array
lista.pop();
//Removendo primeiro item do array
lista.shift();
//Add item ao array
lista.push("Batata")
//Add item ao array na primeira posição
lista.unshift("Batata");
//remove o item da posição selecionada porém substitui o conteúdo e o deixa undefined.
delete lista [3];


//MÉTODO SPLICE();
//1 é em qual posição vc quer que esse elemnto seja add, 2 determinar quantos elementos serão removidos adiante, 3 então add os valores que vc quer.
lista.splice(1, 0, "Tomate", "Alface" );


//MÉTODO .CONCAT();
const lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["sabão em pó", "Detergente"];
//a superlista vai ser a lista1 concatenado com a lista2 e 3 (estou juntando as 3 listas em  um unico array)
const superLista = lista1.concat(lista2, lista3);


//MÉTODO .SLICE();
const cantores = ["Chloe", "Zayn", "Matue", "Anitta", "Ludmilla", "Teto", "Doja Cat", "Selena"];
//O metodo diviide o array. Estou determinando que só serão exibidos os elementos a partir do array[2] até o array[5].
const nacionais = cantores.slice(2, 5);


//MÉTODO .SORT();
//Método utilizado para organizar os elementos do array em pordem alfabética
const cantOrdem = cantores.sort();
//Modo reverso
cantOrdem.reverse();


//FUNCÕES PARA NUMEROS;
const numeros = [40, 100, 33, 67, 25, 9];

//Utilizado para organizar os numero de forma crescente
numeros.sort(function (a,b) {return a - b});
/*Forma decrescente é só trocar a posição do a e b (b - a)

pegar maior numero de um array:*/
function maiorNumero (array){
    return Math.max.apply(null,array);
}
document.getElementById("Texto").innerHTML = maiorNumero(numeros);
//para pegar o menor num é só substituir a função "max" pela "min"

/*filtragem. exibir apenas numeros maior ou menor que determinado valor.
Estamos usando o metodo filter e declarando nele uma função que criamos logo abaixo*/
const maior20 = numeros.filter(filtragem);
function filtragem(value, index, array){
    return value > 20;
}
