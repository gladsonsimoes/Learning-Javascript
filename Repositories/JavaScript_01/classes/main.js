class Carro{

    constructor(valor1, valor2, valor3){
        this.macar = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return "Biiiiii!"
    }
 
}

const uno = new Carro("Fiat", "Uno", 2001);

const gol = new Carro("VolksWagen", "Gol", 2013)
console.log(uno);
console.log(gol.buzina());

