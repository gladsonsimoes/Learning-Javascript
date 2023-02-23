/* 
Os Arrays são pares do tipo inteiro-valor para se mapear valores a partir de um
índice numérico. Em JavaScript os Arrays são objetos com métodos próprios.
Um objeto do tipo Array serve para se guardar uma coleção de ítens em uma
única variável.
*/

//Arrays

var arr = new Array();
// Por ser um objeto podemos usar o "new" em sua criação
var arr = new Array(elem1,elem2, elemN);
// Dessa forma criamos um array já iniciado com elementos.
var arr = [1,2,3,4];
// outra forma é iniciar um array com elementos sem usar o "new".
var arr = new Array(4);
// Dessa forma criamos um array vazio de 4 posições.

// Para acessar as variáveis dentro de um array basta usar o nome do array e o
// índice da variável que se deseja acessar.
// Exemplo:

arr[0] = "Até mais e obrigado pelos peixes";
arr[1] = 42;
document.write(arr[1]);
//imprime o conteúdo de arr[1]