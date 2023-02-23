/* 
Quando declaramos ou atribuímos um método no construtor de um objeto ele
ficará disponível para todas as instâncias criadas a partir desse construtor.

No entanto, existe um modo muito mais eficiente de se fazer isso, que é com o uso
da propriedade prototype. 

Tudo o que for definido no prototype de um objeto poderá ser referenciado por todas as
instâncias desse objeto.

Mesmo as propriedades do prototype que forem definidas ou alteradas depois da instanciação
serão acessíveis aos objetos declarados anteriormente. 

Além disso, é importante ter em mente que os atributos e funções declarados no prototype não são copia-
dos para os objetos, portanto há uma economia significativa de memória quando

usamos muitas propriedades compartilhadas e instâncias.

Exemplo: */

// Vamos elaborar mais o exemplo do carro, mas dessa
// vez usando prototype
function calc_consumo(distancia) {
    return distancia / (15 / this.motor);
}
// Classe que representa um carro
function Carro(modelo, marca, ano, motor) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.motor = motor;
}

Carro.prototype.rodas = 4;
Carro.prototype.consumo = calc_consumo;
// Agora a classe possui uma constante que informa
// o número de rodas e o método consumo em seu
// prototype
var car1 = new Carro("G800", "Gurgel", 1976, 1.0);
var car2 = new Carro("147", "Fiat", 1984, 2.0);
// Podemos acessar agora tanto a constante rodas
// quanto o método consumo
if (car1.rodas == 4) window.alert("ainda bem!");
var gas = car2.consumo(180);
    // e o mais importante é que ambas estão acessando
    // apenas uma única constante e um único método
    // na memória


