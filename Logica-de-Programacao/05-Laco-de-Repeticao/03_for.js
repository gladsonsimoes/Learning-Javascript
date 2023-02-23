/* for

Na maioria das vezes, quando usamos um laço do tipo while também construí-
mos uma estrutura com um contador que é incrementado a cada passo para

controle do laço e manipulação interna de objetos, arrays como nos exemplos
anteriores. Os laços for oferecem a vantagem de já possuírem em sua estrutura
essa variável de contador e incrementá-la de maneira implícita. */

// Exemplo:
var cont = [5,2,3];
for(var i= 0 ; i < 3 ; i++) {
cont[i]++;
}

// Ao final do laço cada elemento do vetor cont foi incrementado em 1

/* 
O significado do comando é for(variável de contador inicializada ; condição de
parada ; incremento da variável de contador). */