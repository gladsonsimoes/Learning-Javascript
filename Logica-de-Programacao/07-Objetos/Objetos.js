//Para criar um objeto é muito simples, basta invocar seu construtor através do operador new.

var objeto = new Object();
// Quando usamos o construtor Object() criamos um objeto
// genérico

//---------------------------------------------------

//OUTRA FORMA de criar um objeto é através de literais.

var nave = {
    nome: "coração de ouro",
    propulsao: "Gerador de improbabilidade infinita",
    dono: "Zaphod Bebblebrox"
}
// Dessa forma, o objeto nave foi criado possuindo os atributos
// nome, propulsão e dono com seus respectivos valores

//-------------------------------------------------------

/* Para acessar uma propriedade de um objeto, basta usar objeto.propriedade e
no caso de métodos adicionar o operador ().

Podemos definir, como já foi dito, um construtor para um objeto, assim po-
demos inicializar atributos logo no momento da instanciação do objeto. 

Para que um construtor inicialize um atributo, ele precisa ser referenciado através da
palavra-chave this. */

//Exemplo:

function Carro(modelo, marca, ano, motor) {
    this.modelo = modelo
    this.marca = marca;
    this.ano = ano;
    this.motor = motor;
}
// Depois para instanciar um objeto, basta usar:
var car = new Carro("G800", "Gurgel", 1976, 1.0);
// Agora car já possui todos os atributos com dados:
console.log("Carro: " + car.modelo);
// o comando acima irá imprimir "Carro: G800"