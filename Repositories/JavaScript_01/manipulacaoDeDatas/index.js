/*MANIPULAÇÃO DE DATAS EM JS*/

//Comando base para pegar data
let data = new Date();
console.log(data);

//Pegar o ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//Pegar mês atual de 0 até 11, sendo 0 janeiro e 11 dezembro
let mes =data.getMonth();
//exibindo de maneira escrita
const mesesDoAno = ["Jan", "Fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
let mesEscrito = mesesSoAno[data.getMonth()]
console.log(mesEscrito);

//Pagar 0 dia do mês
let diaMes = data.getDate();
console.log(diaMes);

//Pegar o dia da semana de 0 até 6
let diasemana = data.getDay();
//exibindo de maneira escrita
const diasDaSemana = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
let diaSemanaescrito = diasDaSemana[data.getDay];
console.log(diaSemanaescrito);

//Pegar a hora, minutos, segundos, millisegundos.
let hora = data.getHours();
           data.getMinutes();
           data.getSeconds();
           data.getMilliseconds();
console.log("...");

//Pegar data no padrão brasileiro DIA/MÊS/ANO
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBR);

//Comparar datas. maior ou menor EX: vencimentos
var hoje = new Date();
//declaramos sempre pela ordem de: ano,mes e dia
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento){
    console.log("Sua conta está vencida!")
}else{
    console.log("Ainda não venceu.")
}

//Diferença em dias entre duas datas

var dataInicial = new date();
var DataFinal = new Date(2022, 11,05)

var diferencaDeTempo = DataFinal.getTime() - dataInicial.getTime();

var diferencaDias = math.ceil(diferencaDeTempo / 24 * 60 * 60 * 1000);
console.log(diferencaDias);