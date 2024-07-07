//Aprendendo sobre o método Set() em arrays
let listaDeCores = [`azul`, `vermelho`, `amarelo`];
let ListaDeCores2 = [`azul`, `magenta`, `verde`, `magenta`, `vermelho`, `laranja`, `verde`, `laranja`, `amarelo`];

let listaCombinada = [...new Set(listaDeCores.concat(ListaDeCores2))];

console.log(listaCombinada);