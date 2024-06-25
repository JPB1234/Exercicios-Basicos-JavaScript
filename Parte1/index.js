import { ContaCorrente } from "./ContaCorrente.js";

const contaRicardo = new ContaCorrente(1001, "Ricardo", 33344422215);
const contaPaulo = new ContaCorrente(1002, "Paulo", 33344422346);

contaRicardo.depositar(400);
contaRicardo.transferir(400, contaPaulo);

console.log(contaRicardo.inf);
console.log(contaPaulo.inf);