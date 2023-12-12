"use strict";
class Funcionario {
    constructor(salario) {
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
}
class Gerente extends Funcionario {
    getBonificacao() {
        return 0.4 * this.salario;
    }
    metodo() {
        return this.salario;
    }
}
class Diretor extends Funcionario {
    getBonificacao() {
        return 0.6 * this.salario;
    }
}
class Presidente extends Funcionario {
    getBonificacao() {
        return 1 * this.salario + 1000;
    }
}
