"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePostagens_Lista = exports.No = void 0;
const Excecoes_js_1 = require("../../Excecoes/Excecoes.js");
class No {
    constructor(postagem) {
        this.postagem = postagem;
        this.proximo = null;
        this.anterior = null;
    }
}
exports.No = No;
class RepositorioDePostagens_Lista {
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
    getPostagens() {
        return this.cabeca;
    }
    setPostagens(no_inicial) {
        this.cabeca = no_inicial;
    }
    incluir(postagem) {
        const novoNodo = new No(postagem);
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
    consultar(id, texto, hashtag, perfil) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.postagem.getId() === id) {
                return atual.postagem;
            }
            atual = atual.proximo;
        }
        throw new Excecoes_js_1.Postagem_Inexistente_Error("Postagem inexistente");
    }
    consultarPorID(id) {
        let atual = this.cabeca;
        while (atual !== null) {
            if (atual.postagem.getId() === id) {
                return atual.postagem;
            }
            atual = atual.proximo;
        }
        throw new Excecoes_js_1.Postagem_Inexistente_Error("Postagem inexistente");
    }
}
exports.RepositorioDePostagens_Lista = RepositorioDePostagens_Lista;
