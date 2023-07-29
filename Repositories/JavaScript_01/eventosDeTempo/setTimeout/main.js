/*setTimeout(function, tempo em milesegundos)
--> executa uma função, depois de esperar um número especificado de milesegundos.*/

/*setInterval(function, milliseconds)
--> é o mesmo que setTimeOut(), mas repete a execução da função continuamente.*/

function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar!";

    //Ativa a função apenas uma vez quando der o tempo especificado
    var tempo = setTimeout(function(){ document.getElementById('tempo').innerHTML = "Execultou o setTimeout." }, 5000);
}
//para parar uma contagem sempre tem que por o setTimeout dentro de uma variavel.

function pararContagem(){
    //Código clear para parar a contagem
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem"
    
}