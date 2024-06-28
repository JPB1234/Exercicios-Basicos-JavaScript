//Exercicio para entender melhor sobre arrays e funções

//Essa função recebe dois arrays como parâmetros e, em seguida, concatena eles, descartando elementos que se repetem nos arrays.
const concatenaArray = (array1, array2) => [... new Set([...array1, ...array2])];

console.log(concatenaArray([1, 2, 3, 4, 4], [2, 3, 3, 4]));