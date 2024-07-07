//Reforçando conhecimento acerca do método spread e de operações usando arrays
function descobrePares(...lista){
    let listaConjunta = [].concat(...lista); 
    let listaPares = [];
    for (let i = 0; i < listaConjunta.length; i++) {
        if (listaConjunta[i] % 2 == 0) {
            listaPares.push(listaConjunta[i]);
        }    
    }    
    return [...new Set(listaPares.sort())];
}
console.log(descobrePares([1, 3, 4], [1.3, 2.5, 6.0], [2, 4], [2, 2, 2, 8]));