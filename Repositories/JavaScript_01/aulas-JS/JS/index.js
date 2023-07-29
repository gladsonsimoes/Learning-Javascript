/*
let lampada = "on"

 if(lampada == "on"){
    alert('A lâmpada está ligada!')
}else{
     alert('A lâmpada está desligada!')
 }

 function verificar(){

     let nome = document.getElementById("nome").value;

     if(nome == "" || nome == null ){
         let p = document.getElementById("teste");
         p.innerHTML = "O campo não pode ser vazio";
         p.style.color =  "red";
     }else{
        let p = document.getElementById("teste");
         p.innerHTML = "Registrado!";
         p.style.color =  "green";
     }

 }*/

/*
function verificaCor(){
    let cor = document.getElementById("cor").value;
    
    //converter conteúdo da variavel para tudo minusculo. Assim não importa como o usuário digitar sendo caixa alta ou não, não irá dar erro.
    cor = cor.toLowerCase();

    switch (cor){

        case "azul":
            document.body.style.backgroundColor = "blue";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
    
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;

        default:
        document.getElementById("teste").innerHTML = "Nenhumaa cor disponivel para: " + cor;
    }
}*/

function dayOfTheWeek(){

    var dia = document.getElementById("dia").value;

    for(let i = 0; i < dia.lenght; i++){


    }

    switch (dia){

        case 0:
            document.getElementById("teste").innerHTML =  "Hoje é Domingo"
            break;

        case 1:
            document.getElementById("teste").innerHTML =  "Hoje é Segunda-Feira"
            break;
    
        case 2:
            document.getElementById("teste").innerHTML =  "Hoje é Terça-Feira"
            break;

        case 3:
            document.getElementById("teste").innerHTML =  "Hoje é Quarta-Feira"
            break;

        case 4:
            document.getElementById("teste").innerHTML =  "Hoje é Quinta-Feira"
            break;

        case "5":
            document.getElementById("teste").innerHTML =  "Hoje é Sexta-Feira"
            break;

        case 6:
            document.getElementById("teste").innerHTML =  "Hoje é Sábado"
            break;

        default:
        document.getElementById("teste").innerHTML = " undefined " + dia;
    }

}