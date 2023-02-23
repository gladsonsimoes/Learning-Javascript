/* Os laços do tipo while são usados quando se deseja que uma sequência de ações
seja executada apenas no caso da expressão de condição ser válida. Assim,
primeiro a expressão é testada, para depois o conteúdo do laço ser executado ou
não.
Exemplo: */

var cont = [5,2];
while ((cont[0]+cont[1]) < 15) {
cont[0]+=1;
cont[1]+=2;
console.log(' cont0 = '+cont[0]+' cont1 = '+cont[1]);
}

// Com o uso de while, no primeiro teste, cont[0]+cont[1] vale 7;