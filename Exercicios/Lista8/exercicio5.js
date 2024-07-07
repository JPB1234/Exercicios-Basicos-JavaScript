//Aprendendo sobre o método filter
function achaMultiplosComuns(lista, numero1, numero2) {
    return lista.filter((elemento) => elemento%numero1 == 0 && elemento%numero2 == 0);
}

console.log(achaMultiplosComuns([1, 3, 9, 15, 19, 25, 30], 3, 5));