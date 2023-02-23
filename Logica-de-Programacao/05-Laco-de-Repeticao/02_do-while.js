/* Diferentemente do while, o do ... while primeiro executa o conteúdo do laço
uma vez e, depois disso, realiza o teste da expressão pare decidir se continuará
executando o laço ou irá seguir o resto do programa. */

//Exemplo:
var cont = [5,2];
do{
cont[0]+=1;
cont[1]+=2;
console.log(`cont0 = `+cont[0]+`cont1 = `+cont[1]);
} while ((cont[0]+cont[1]) < 15)

// Com o uso de do...while, no primeiro teste, cont[0]+cont[1]
// já valerá 10, e os contadores já terao sido impressos uma vez
// pois o laço já foi executado a primeira vez antes do teste!