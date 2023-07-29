const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

//convertendo para texto JSON
let texto = JSON.stringify(carro);
//Aplicou otexto no html
document.getElementById('area').innerHTML = texto;

//convertendo o texto em objeto
let obj = JSON.parse(texto);
//pegando o valor deste objeto
console.log(obj.modelo)