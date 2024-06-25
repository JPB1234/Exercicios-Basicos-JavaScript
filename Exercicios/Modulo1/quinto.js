//O método slice opera em strings de forma que
//O primeiro numero dentro dos parenteses representa que parte da string você quer começar, incluindo o caractere escolhido,
//E o segundo numero representa a parte da string que você quer terminar de retirar a fatia, excluindo o caractere escolhido.
let frase = `Boa noite meu pica`;

console.log(frase.slice(0,3).toUpperCase(), frase.slice(14).toUpperCase());