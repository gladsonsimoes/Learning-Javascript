var number = [1 , 2, 4, 5];

function somaArray(array) {
  let soma = 0;

  for (let index = 0; index < array.length; index = index + 1) {
    soma = soma + array[index];
  }

  return soma;
}

console.log(somaArray(number));
