
###  Array
~~~js
var arr = new Array();
~~~

Por ser um objeto podemos usar o "new" em sua criação
~~~js
var arr = new Array(elem1, elem2, elemN);
~~~
Dessa forma criamos um array já iniciado com elementos.
~~~js
var arr = [1, 2, 3, 4];
~~~
outra forma é iniciar um array com elementos sem usar o "new".

~~~js
var arr = new Array(4);
~~~
Dessa forma criamos um array vazio de 4 posições.

Para acessar as variáveis dentro de um array basta usar o nome do array e o
índice da variável que se deseja acessar.
Exemplo:

~~~js
 arr[0] = "Até mais e obrigado pelos peixes";
arr[1] = 42;
console.log(arr[1]);
//imprime o conteúdo de arr[1]
~~~