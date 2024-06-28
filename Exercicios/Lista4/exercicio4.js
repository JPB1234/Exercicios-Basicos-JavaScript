//Reforçando conhecimento acerca de funções com condicionais
function achaMaior(variavel1, variavel2, variavel3) {
    //Sequencia de condicionais para identificar qual maior variavel
    if (variavel1 > variavel2 && variavel1 > variavel3) {
        console.log(`A primeira variavel possui maior valor`);
    } else if (variavel2 > variavel1 && variavel2 > variavel3) {
        console.log(`A segunda variavel possui maior valor`);
    } else if (variavel3 > variavel1 && variavel3 > variavel2) {
        console.log(`A terceira variavel possui maior valor`);
    }
    //Condicional para determinar se alguma das variaveis possui o mesmo valor
    if (variavel1 == variavel2 || variavel1 == variavel3 || variavel2 == variavel3) {
        console.log(`Duas ou mais variaveis possuem valor igual`)
    }
}

achaMaior(10, 15, 10);