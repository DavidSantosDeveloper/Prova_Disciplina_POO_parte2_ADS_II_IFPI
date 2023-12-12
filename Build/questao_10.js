"use strict";
class Conta {
    constructor(nome, saldo) {
        this._nome = nome;
        this._saldo = saldo;
    }
    get nome() {
        return this._nome;
    }
    get saldo() {
        return this._saldo;
    }
}
class ContaCorrente extends Conta {
    calcularTributos() {
        return 0.1 * this.saldo;
    }
}
class SeguroDeVida {
    calcularTributos() {
        return 50;
    }
}
let contaC = new ContaCorrente("davi", 1000);
