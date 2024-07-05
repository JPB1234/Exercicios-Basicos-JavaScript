//Reforçando conhecimento acerca de estruturas de repetições e estruturas condicionais
function descobreMaiorMenor(lista) {
    let achaMaior = lista[0];
    let achaMenor = lista[0];
    for (const elemento of lista) {
        if (elemento > achaMaior) {
            achaMaior = elemento;
        } else if(elemento < achaMenor){
            achaMenor = elemento;
        }
    }
    return (`O maior elemento da lista é ${achaMaior}, e o menor elemento da lista é ${achaMenor}`)
}

console.log(descobreMaiorMenor([3, 5, 2, 67, 1]));