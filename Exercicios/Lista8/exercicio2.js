//Aprendendo sobre o método reduce em arrays
valores = [1, 3, 7, 4, 2, 512];

somaDosValores = valores.reduce((acumulador, valorAtual)=> acumulador + valorAtual, 0);
console.log(somaDosValores);