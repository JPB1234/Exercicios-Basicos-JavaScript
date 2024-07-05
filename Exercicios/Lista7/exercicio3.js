//Reforçando conhecimento acerca da estrutura de repetição for of 
function somaDeElementos(lista) {
    let elemento = 0;
    for (elemento of lista) {
        elemento += elemento;
    }
    return elemento;
}
console.log(somaDeElementos([1, 2, 3]));
