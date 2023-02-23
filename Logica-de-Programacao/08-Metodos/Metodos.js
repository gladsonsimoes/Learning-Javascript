/* 
No paradigma de orientação a objetos, os métodos são simplesmente funções
que são invocadas por meio de um objeto! 

E em JavaScript isso é levado tão a sério que a maneira de se criar métodos para seus objetos 
leva isso ao pé da letra.

Basta criarmos uma função e atribuí-la a uma propriedade do objeto. */

//Exemplo:

// Uma função fictícia para cálculo de um consumo de combustível
function calc_consumo(distancia) {
    return distancia / (15 / this.motor);
}

// Agora atribuimos a função, sem os argumentos, para a
// propriedade consumo. Considerando o objeto já instânciado
// do exemplo anterior

car.consumo = calc_consumo;
// Pronto! já podemos invocá-la fazendo:
var gas = car.consumo(200);
// calculando quanto o carro gastaria de
// combustível em 200 kilômetros


/* Também podemos definir os métodos dentro do próprio construtor de uma
função, tanto definindo a função fora e atribuindo no construtor, como definindo
a própria função dentro do próprio construtor uma vez que JavaScript suporta
o aninhamento de funções. */