function verificaPalindromo(palavra) {

    let diminutivo = palavra.toLowerCase();
    let transformaArray = diminutivo.split("").reverse().join("");

    if (diminutivo == transformaArray) {
        console.log("Palindromo");
    } else {
        console.log("Não é Palindromo");
    }

}

verificaPalindromo("Arara");