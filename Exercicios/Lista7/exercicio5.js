//Reforçando conhecimento acerca de estruturas de repetições
let lista = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let listaPares = [];
for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
        listaPares.push(lista[i]);
    }    
}

console.log(listaPares);