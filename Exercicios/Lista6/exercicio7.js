//Reforçando aprendizado acerca de operações em matrizes
let matrizVazia = [];
let valorInicial = 0;

//Estrutura de repetição que forma a matriz bidimensional
for(let i = 0; i<3; i++){
    let linha = [];
    //Estrutura de repetição que insere os  elementos dos vetores que irão compor a matriz
    for(let j = 0; j<3; j++){
        linha.push(valorInicial++);
    }
    matrizVazia.push(linha);
}

console.log(matrizVazia);

//Usando o método splice para adicionar um elemento especifico a uma array da matriz
matrizVazia[2].splice(3, 0, 9);
//Exibindo elemento da segunda linha e terceira coluna
console.log(matrizVazia);