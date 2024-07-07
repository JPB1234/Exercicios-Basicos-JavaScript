//Aprendendo sobre o método spread em arrays
function combinaArrays(...lista){
    let listaConjunta = [].concat(...lista); 
    return listaConjunta.sort();
}
console.log(combinaArrays([1, 2, 3, 4], [1.3, 2.5, 6.0]));