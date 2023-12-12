"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
const RepositorioDePerfis_Lista_js_1 = require("../Repositorio_Perfis/Versao_Lista_Encadeada/RepositorioDePerfis_Lista.js");
const RepositorioDePerfis_Array_js_1 = require("../Repositorio_Perfis/Versao_Array/RepositorioDePerfis_Array.js");
const PostagemAvancada_js_1 = require("../postagem/PostagemAvancada.js");
const Excecoes_js_1 = require("../Excecoes/Excecoes.js");
class RedeSocial {
    constructor(RepositorioDePostagens, RepositorioDePerfis) {
        this._RepositorioDePostagens = RepositorioDePostagens;
        this._RepositorioDePerfis = RepositorioDePerfis;
    }
    getRepositorioDePerfis() {
        return this._RepositorioDePerfis;
    }
    getRepositorioDePostagens() {
        return this._RepositorioDePostagens;
    }
    incluirPerfil(perfil) {
        //FAIL FAST
        if (perfil.getId() != undefined) {
            throw new Excecoes_js_1.DadosDoPerfil_Invalidos_Error("Dados do perfil sao invalidos!");
        }
        this._RepositorioDePerfis.incluir(perfil);
    }
    consultarPerfil(id, nome, email) {
        let resultado_da_consulta = this._RepositorioDePerfis.consultar(id, nome, email);
        //FAIL FAST
        if (resultado_da_consulta == null) {
            throw new Excecoes_js_1.Perfil_Inexistente_Error("Perfil inexistente!");
        }
        return resultado_da_consulta;
    }
    incluirPostagem(postagem) {
        //FAIL FAST
        if (postagem.getId() == undefined) {
            throw new Excecoes_js_1.DadosDoPerfil_Invalidos_Error("Dados do perfil invalidos!");
        }
        this._RepositorioDePostagens.incluir(postagem);
    }
    consultarPostagens(id, texto, hashtag, perfil) {
        return this._RepositorioDePostagens.consultar(id, texto, hashtag, perfil);
    }
    curtir(id_Postagem) {
        let resultado_da_consulta = this._RepositorioDePostagens.consultarPorID(id_Postagem);
        if (resultado_da_consulta == null) {
            throw new Excecoes_js_1.Postagem_Inexistente_Error("Perfil inexistente!");
        }
        resultado_da_consulta.curtir();
    }
    descurtir(id_Postagem) {
        let resultado_da_consulta = this._RepositorioDePostagens.consultarPorID(id_Postagem);
        if (resultado_da_consulta == null) {
            throw new Excecoes_js_1.Postagem_Inexistente_Error("Perfil inexistente!");
        }
        resultado_da_consulta.descurtir();
    }
    decrementarVisualizacoes(postagem) {
        //FAIL FAST
        if (postagem.getVisualizacoesRestantes() < 0) {
            throw new Excecoes_js_1.Numero_de_Visualizacoes_Negativas_Error("O numero de visualizacoes nao pode ser negativo");
        }
        postagem.decrementarVisualizacoes();
    }
    exibirPostagensPorPerfil(id_perfil) {
        let resultado_da_consulta_pelo_perfil = this._RepositorioDePerfis.consultar(id_perfil);
        let postagens_do_perfil = [];
        let postagens_que_ainda_podem_ser_exibidas = [];
        //FAIL FAST
        if (resultado_da_consulta_pelo_perfil == null) {
            throw new Excecoes_js_1.Perfil_Inexistente_Error("Perfil inexistente");
        }
        else {
            postagens_do_perfil = resultado_da_consulta_pelo_perfil.getPostagens();
            for (const postagem_atual of postagens_do_perfil) {
                if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    this.decrementarVisualizacoes(postagem_atual);
                }
            }
            for (const postagem_atual of postagens_do_perfil) {
                //FAIL FAST
                if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    if (postagem_atual.getVisualizacoesRestantes() > 0) {
                        postagens_que_ainda_podem_ser_exibidas.push(postagem_atual);
                    }
                }
                else {
                    postagens_que_ainda_podem_ser_exibidas.push(postagem_atual);
                }
            }
            return postagens_que_ainda_podem_ser_exibidas;
        }
    }
    exibirPostagensPorHashtag(hashtag) {
        let postagens_que_ainda_podem_ser_exibidas = [];
        if (this._RepositorioDePerfis instanceof RepositorioDePerfis_Lista_js_1.RepositorioDePerfisLista) {
            let atual = this._RepositorioDePerfis.getCabeca();
            while (atual !== null) {
                for (const postagem_atual_do_perfil of atual.perfil.getPostagens()) {
                    if (postagem_atual_do_perfil instanceof PostagemAvancada_js_1.PostagemAvancada) {
                        if (postagem_atual_do_perfil.getVisualizacoesRestantes() > 0) {
                            postagem_atual_do_perfil.decrementarVisualizacoes();
                            postagens_que_ainda_podem_ser_exibidas.push({ id_perfil: atual.perfil.getId(), postagensAvancadas: [postagem_atual_do_perfil] });
                        }
                    }
                    else {
                        postagens_que_ainda_podem_ser_exibidas.push({ id_perfil: atual.perfil.getId(), postagensAvancadas: [postagem_atual_do_perfil] });
                    }
                }
                atual = atual.proximo;
            }
        }
        else if (this._RepositorioDePerfis instanceof RepositorioDePerfis_Array_js_1.RepositorioDePerfisArray) {
            for (const perfil_atual of this._RepositorioDePerfis.getPerfis()) {
                for (const postagem_atual of perfil_atual.getPostagens()) {
                    if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                        if (postagem_atual.getVisualizacoesRestantes() > 0) {
                            postagem_atual.decrementarVisualizacoes();
                            postagens_que_ainda_podem_ser_exibidas.push({ id_perfil: perfil_atual.getId(), postagensAvancadas: [postagem_atual] });
                        }
                    }
                    else {
                        postagens_que_ainda_podem_ser_exibidas.push({ id_perfil: perfil_atual.getId(), postagensAvancadas: [postagem_atual] });
                    }
                }
            }
        }
        return postagens_que_ainda_podem_ser_exibidas;
    }
}
exports.RedeSocial = RedeSocial;
