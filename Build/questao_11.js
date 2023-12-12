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
class AuditoriaInterna {
    constructor() {
        this.tributaveis = [];
    }
    adicionar(tributavel) {
        this.tributaveis.push(tributavel);
    }
    calcularTributos() {
        let totalTributos = 0;
        for (const tributavel of this.tributaveis) {
            totalTributos += tributavel.calcularTributos();
        }
        return totalTributos;
    }
}
class TesteAuditoria {
    static executarTeste() {
        const auditoria = new AuditoriaInterna();
        const contaC = new ContaCorrente("davi", 1000);
        const seguroVida = new SeguroDeVida();
        auditoria.adicionar(contaC);
        auditoria.adicionar(seguroVida);
        const totalTributos = auditoria.calcularTributos();
        console.log(`Total de tributos a pagar: ${totalTributos}`);
    }
}
TesteAuditoria.executarTeste();
