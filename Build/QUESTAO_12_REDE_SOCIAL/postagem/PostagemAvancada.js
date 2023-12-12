"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemAvancada = void 0;
const Postagem_js_1 = require("./Postagem.js");
const Excecoes_js_1 = require("../Excecoes/Excecoes.js");
class PostagemAvancada extends Postagem_js_1.Postagem {
    constructor(id, texto, curtida, descurtida, data, perfil, hashtags, visualizacoesRestantes) {
        super(id, texto, curtida, descurtida, data, perfil);
        this._hashtags = hashtags;
        this._visualizacoesRestantes = visualizacoesRestantes;
    }
    getHashtagEmString() {
        let soma_hastags = "";
        for (const hashtag_atual of this._hashtags) {
            soma_hastags += `${hashtag_atual} `;
        }
        return soma_hastags;
    }
    getVisualizacoesRestantes() {
        return this._visualizacoesRestantes;
    }
    setVisualizacoesRestantes(visualizacoesRestantes) {
        this._visualizacoesRestantes = visualizacoesRestantes;
    }
    adicionarHashtag(hashtag) {
        this._hashtags.push(hashtag);
    }
    existeHashtag(hashtag_procurada) {
        let resultado = false;
        for (let hashtag_atual of this._hashtags) {
            if (hashtag_atual == hashtag_procurada) {
                throw new Excecoes_js_1.HastagJaExistenteError("Hashtag ja existente!");
            }
        }
        return resultado;
    }
    decrementarVisualizacoes() {
        this._visualizacoesRestantes--;
    }
}
exports.PostagemAvancada = PostagemAvancada;
