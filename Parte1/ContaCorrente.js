import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    #cliente;
    #saldo = 0;
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this.#cliente = novoValor;
        }
    }

    get inf(){
        return {
            agencia: this.agencia,
            cliente: {
                nome: this.#cliente.nome,
                cpf: this.#cliente.cpf
            },
            saldo: this.#saldo
        }
    }

    get cliente(){
        return this.#cliente;
    }

    get saldo(){
        return this.#saldo;
    }

    constructor(agencia, nome, cpf){
        this.agencia = agencia;
        this.#cliente = new Cliente(nome, cpf);
        ContaCorrente.numeroDeContas +=1;
    }


    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return [this.#saldo, valor];
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            return [this.#saldo, valor];
        }

    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado[1]);
    }
}