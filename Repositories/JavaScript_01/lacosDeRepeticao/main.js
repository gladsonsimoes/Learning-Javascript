
//colocando na variavel o método que informa o ano atual e estou utilizando  essa variavel em um laço de repetição para exibir uma lista de anos na tag option.

var anoAtual = new Date().getFullYear();

for (let i = 2022; i > 1900; i--){
    document.getElementById("ano").innerHTML += "<option value += '"+ i +"' > " + i + "</option>";
}


// percorrendo elementos do vetor
const carros = ["gol", "fusca", "Brasilia", "Del Rey", "Chevette"];

var tamanho = carros.length;

for(let i = 0; i < tamanho; i++){
    document.getElementById("carro").innerHTML += carros[i] + " - ";
}

