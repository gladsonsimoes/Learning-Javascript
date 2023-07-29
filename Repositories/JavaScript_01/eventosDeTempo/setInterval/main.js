/*setInterval(function, milliseconds)
--> é o mesmo que setTimeOut(), mas repete a execução da função continuamente.*/

function ativarContagem(){

    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        //urilizando parseInt() para transfomar o texto que esta na #tempo em numero para a contagem
        var soma = parseInt(cronometro) - 1;
        document.getElementById('tempo').innerHTML = soma;

         if(soma === 0){
        
             document.getElementById('tempo').innerHTML = "Tempo esgotado!"
             pararContagem();
         } 
    }, 1000)
}

function pararContagem(){
    
    clearInterval(tempo);

}