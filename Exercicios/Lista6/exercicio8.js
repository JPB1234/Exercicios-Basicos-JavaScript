//Reforçando sobre matrizes/arrays multidimensionais e estruturas de repetição fazendo uma matriz de três dimensões
let matrizVazia = [];
let valorInicial = 0;

//Estrutura de repetição que forma a matriz tridimensional
for(let i = 0; i<3; i++){
    let linha = [];
    //Estrutura de repetição que insere os vetores em uma matriz bidimensional
    for(let j = 0; j<3; j++){
        let coluna = [];
        //Estrutura de repetição que insere os primeiros elementos dos vetores que irão compor a matriz
        for(let k = 0; k<3; k++){
            coluna.push(valorInicial++);
        }
        linha.push(coluna);
    }
    matrizVazia.push(linha);
}
console.log(matrizVazia);