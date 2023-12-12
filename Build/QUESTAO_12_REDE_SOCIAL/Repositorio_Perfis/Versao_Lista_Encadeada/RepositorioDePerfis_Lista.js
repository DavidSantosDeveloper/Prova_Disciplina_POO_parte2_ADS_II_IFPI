"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePerfisLista = exports.Nodo = void 0;
const Excecoes_js_1 = require("../../Excecoes/Excecoes.js");
class Nodo {
    constructor(perfil) {
        this.perfil = perfil;
        this.proximo = null;
        this.anterior = null;
    }
}
exports.Nodo = Nodo;
class RepositorioDePerfisLista {
    constructor() {
        this.cabeca = null;
        this.fim = null;
        this.tamanho = 0;
    }
    setCabeca(no_inicial = null) {
        this.cabeca = no_inicial;
    }
    getCabeca() {
        return this.cabeca;
    }
    getFim() {
        return this.fim;
    }
    getTamanho() {
        return this.tamanho;
    }
    getPerfis() {
        return this.cabeca;
    }
    setPerfis(perfil_inicial) {
        this.cabeca = new Nodo(perfil_inicial);
    }
    incluir(perfil) {
        const novoNodo = new Nodo(perfil);
        if (this.cabeca === null) {
            this.cabeca = novoNodo;
            this.fim = novoNodo;
        }
        else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNodo;
            novoNodo.anterior = this.fim;
            this.fim = novoNodo;
        }
        this.tamanho++;
    }
    consultarPorNome(nome_procurado) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.perfil.getNome() === nome_procurado) {
                return atual.perfil;
            }
            atual = atual.proximo;
        }
        throw new Excecoes_js_1.Perfil_Inexistente_Error("Perfil inexistente!");
    }
    consultarPorId(id) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.perfil.getId() === id) {
                return atual.perfil;
            }
            atual = atual.proximo;
        }
        throw new Excecoes_js_1.Perfil_Inexistente_Error("Perfil inexistente!");
    }
    inserir(perfil) {
        const novoNodo = new Nodo(perfil);
        if (this.cabeca === null) {
            this.cabeca = novoNodo;
            this.fim = novoNodo;
        }
        else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNodo;
            this.fim = novoNodo;
        }
        this.tamanho++;
    }
    consultar(id, nome, email) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.perfil.getId() === id) {
                return atual.perfil;
            }
            atual = atual.proximo;
        }
        throw new Excecoes_js_1.Perfil_Inexistente_Error("Perfil inexistente!");
    }
}
exports.RepositorioDePerfisLista = RepositorioDePerfisLista;
