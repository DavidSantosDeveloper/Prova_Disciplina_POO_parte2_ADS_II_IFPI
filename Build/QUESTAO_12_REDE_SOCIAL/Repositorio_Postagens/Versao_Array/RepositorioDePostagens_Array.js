"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePostagensArray = void 0;
const PostagemAvancada_js_1 = require("../../postagem/PostagemAvancada.js");
const Excecoes_js_1 = require("../../Excecoes/Excecoes.js");
class RepositorioDePostagensArray {
    constructor(postagens) {
        this._postagens = postagens;
    }
    getPostagens() {
        return this._postagens;
    }
    setPostagens(lista_de_postagens) {
        this._postagens = lista_de_postagens;
    }
    incluir(postagem) {
        this._postagens.push(postagem);
    }
    consultar(id, texto, hashtag, perfil) {
        let resultado_das_consultas = [];
        if (id != undefined) {
            for (const postagem_atual of this._postagens) {
                if (postagem_atual.getId() == id) {
                    resultado_das_consultas.push(postagem_atual);
                }
            }
        }
        if (texto != undefined) {
            for (const postagem_atual of this._postagens) {
                if (postagem_atual.getTexto() == texto) {
                    resultado_das_consultas.push(postagem_atual);
                }
            }
        }
        if (hashtag != undefined) {
            for (const postagem_atual of this._postagens) {
                if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    if (postagem_atual.existeHashtag(hashtag)) {
                        resultado_das_consultas.push(postagem_atual);
                    }
                }
            }
        }
        if (perfil != undefined) {
            let lista_de_postagens_do_perfil = [];
            for (const postagem_atual of lista_de_postagens_do_perfil) {
                resultado_das_consultas.push(postagem_atual);
            }
        }
        if (resultado_das_consultas == null) {
            throw new Excecoes_js_1.Postagem_Inexistente_Error("Postagem inexistente");
        }
        return resultado_das_consultas;
    }
    consultarPorID(id) {
        let resultado_das_consultas = null;
        for (const postagem_atual of this._postagens) {
            if (postagem_atual.getId() == id) {
                resultado_das_consultas = postagem_atual;
            }
        }
        if (resultado_das_consultas == null) {
            throw new Excecoes_js_1.Postagem_Inexistente_Error("Postagem inexistente");
        }
        return resultado_das_consultas;
    }
}
exports.RepositorioDePostagensArray = RepositorioDePostagensArray;
