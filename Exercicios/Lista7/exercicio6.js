//Reforçando conhecimento acerca de estruturas de repetições
function calculaMedia(lista) {
    let elemento = 0;
    for (let i = 0; i< lista.length; i++){
        elemento += lista[i];
        }
   
    return elemento/lista.length;
}
console.log(calculaMedia([1, 2, 3, 4, 5, 6]));