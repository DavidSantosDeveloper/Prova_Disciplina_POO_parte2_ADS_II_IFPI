"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//classes base
const RedeSocial_js_1 = require("./Rede_Social/RedeSocial.js");
const Perfil_js_1 = require("./perfil/Perfil.js");
const Postagem_js_1 = require("./postagem/Postagem.js");
const PostagemAvancada_js_1 = require("./postagem/PostagemAvancada.js");
//leitura de dados
const readline_sync_1 = __importDefault(require("readline-sync"));
// salvar em arquivos de texto
const fs = __importStar(require("fs"));
//Repositorios
const RepositorioDePerfis_Array_js_1 = require("./Repositorio_Perfis/Versao_Array/RepositorioDePerfis_Array.js");
const RepositorioDePostagens_Array_js_1 = require("./Repositorio_Postagens/Versao_Array/RepositorioDePostagens_Array.js");
const RepositorioDePerfis_Lista_js_1 = require("./Repositorio_Perfis/Versao_Lista_Encadeada/RepositorioDePerfis_Lista.js");
const RepositorioDePostagens_Lista_js_1 = require("./Repositorio_Postagens/Versao_Lista_Encadeada/RepositorioDePostagens_Lista.js");
//validacao dos campos
const Excecoes_js_1 = require("./Excecoes/Excecoes.js");
//decoracao
const chalk_1 = __importDefault(require("chalk"));
let tema = chalk_1.default.green;
class App {
    constructor(redeSocial) {
        this.caminho_arquivo_perfis = "../Arquivos/perfis.txt";
        this.caminho_arquivo_postagens = "../Arquivos/postagens.txt";
        this._redeSocial = redeSocial;
    }
    carregarDadosParaIniciar_Rede_social() {
        console.log(chalk_1.default.white.bold.bgGreen("CARREGANDO DADOS PARA INICIAR A REDE SOCIAL...."));
        try {
            //LENDO OS PERFIS SALVOS
            this.carregarArquivoTxtPerfis();
        }
        catch (error) {
            console.log(error.message);
        }
        try {
            //LENDO AS POSTAGENS SALVAS
            this.carregarArquivoTxtPostagens();
        }
        catch (error) {
            console.log(error.message);
        }
    }
    exibirMenu() {
        try {
            //console.log(this._redeSocial.getRepositorioDePerfis().getPerfis())
            //console.log(this._redeSocial.getRepositorioDePostagens().getPostagens())
            let opcao = 0;
            while (opcao !== 12) {
                console.log(chalk_1.default.white.bold(`\n\n════════//══════════════════════════════//═════════════####### REDE SOCIAL ########══════════════════//═════════════════════════//══════`));
                console.log("\n \n \n ");
                console.log(chalk_1.default.green("╔═══════════════════════════════╗"));
                console.log(chalk_1.default.green("║"), "       Menu da Rede Social", chalk_1.default.green("   ║"));
                console.log(chalk_1.default.green("╚═══════════════════════════════╝"));
                console.log("\n \n 1. Incluir Perfil");
                console.log("2. Consultar Perfil");
                console.log("3. Editar Perfil");
                console.log("4-Excluir Perfil;");
                console.log("5. Incluir Postagem");
                console.log("6. Consultar Postagens");
                console.log("7. Editar Postagem");
                console.log("8. Excluir Postagem");
                console.log("9-Exibir as postagens populares que ainda podem ser exibidas;");
                console.log("10. Curtir Postagem");
                console.log("11. Descurtir Postagem");
                console.log("12. Sair \n");
                opcao = this.obterOpcao();
                this.validarNumero(opcao);
                opcao = Number(opcao);
                if (opcao == 1) {
                    this.incluirPerfil();
                }
                if (opcao == 2) {
                    this.consultarPerfil();
                }
                if (opcao == 3) {
                    this.EditarPerfil();
                }
                if (opcao == 4) {
                    this.excluirPerfil();
                }
                if (opcao == 5) {
                    this.incluirPostagem();
                }
                if (opcao == 6) {
                    this.consultarPostagens();
                }
                if (opcao == 7) {
                    this.EditarPostagens();
                }
                if (opcao == 8) {
                    this.excluirPostagens();
                }
                if (opcao == 9) {
                    this.mostrarPostagensPopulares();
                }
                if (opcao == 10) {
                    this.curtirPostagem();
                }
                if (opcao == 11) {
                    this.descurtirPostagem();
                }
                if (opcao == 12) {
                    console.log("Fechando...");
                    this.salvarAsPostagensEmArquivoTxt();
                    this.salvarOsPerfisEmArquivoTxt();
                    break;
                }
            }
        }
        catch (error) {
            if (error instanceof Excecoes_js_1.AplicacaoError) {
                console.log(chalk_1.default.black.bgWhite.blueBright("\n\n>>>>>>>>>>>⚠️" + error.message + "⚠️<<<<<<<<<<<\n\n"));
                this.exibirMenu();
            }
            else if (error instanceof Error) {
                console.log(chalk_1.default.black.bgWhite.blueBright("\n\n>>>>>>>>>>>⚠️" + "Ocorreu um erro no sistema!. Contate o suporte tecnico." + "⚠️<<<<<<<<<<<\n\n"));
                //console.log("Ocorreu um erro no sistema!. Contate o suporte tecnico.")
                this.exibirMenu();
            }
        }
    }
    obterOpcao() {
        return readline_sync_1.default.question("\n Escolha uma opcao: ");
    }
    validarTexto(texto) {
        if (texto == "") {
            throw new Excecoes_js_1.EntradaVazia("nao ha caracteres digitados!!!");
        }
    }
    validarNumero(numero) {
        if (isNaN(Number(numero))) {
            throw new Excecoes_js_1.EntradaDeCaracteresDeTexto("Entrada contem caracteres que nao sao numericos!");
        }
    }
    incluirPerfil() {
        console.log("\n \n \n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|") + "      Cadrastrar Perfil          " + tema("|"));
        console.log(tema("|---------------------------------|"));
        try {
            let nome = readline_sync_1.default.question("\n \nDigite o nome do usuario:");
            this.validarTexto(nome);
            let email = readline_sync_1.default.question("Digite o email do usuario:");
            this.validarTexto(email);
            console.log("\n \n \n");
            let lista_de_perfis_cadrastrados = this._redeSocial.getRepositorioDePerfis().getPerfis();
            let perfil_cadrastrado;
            if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfis_Lista_js_1.RepositorioDePerfisLista) {
                //Caso da ser lista de perfis está vazia.
                if (this._redeSocial.getRepositorioDePerfis().getTamanho() == 0) {
                    perfil_cadrastrado = new Perfil_js_1.Perfil(1, nome, email);
                    this._redeSocial.getRepositorioDePerfis().incluir(perfil_cadrastrado);
                }
                //Caso de ter pelo menos 1 perfil na lista de perfis
                else if (this._redeSocial.getRepositorioDePerfis().getTamanho() > 0) {
                    let ultimo_no = this._redeSocial.getRepositorioDePerfis().getFim();
                    if (ultimo_no != null) {
                        let id_novo_perfil = (ultimo_no.perfil.getId()) + 1;
                        perfil_cadrastrado = new Perfil_js_1.Perfil(id_novo_perfil, nome, email);
                        this._redeSocial.getRepositorioDePerfis().incluir(perfil_cadrastrado);
                    }
                }
            }
            else if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfis_Array_js_1.RepositorioDePerfisArray) {
                //Caso da ser lista de perfis está vazia.
                if (lista_de_perfis_cadrastrados.length == 0) {
                    perfil_cadrastrado = new Perfil_js_1.Perfil(1, nome, email);
                    lista_de_perfis_cadrastrados.push(perfil_cadrastrado);
                }
                //Caso de ter pelo menos 1 perfil na lista de perfis
                else {
                    let id_novo_perfil = (lista_de_perfis_cadrastrados[lista_de_perfis_cadrastrados.length - 1].getId()) + 1;
                    perfil_cadrastrado = new Perfil_js_1.Perfil(id_novo_perfil, nome, email);
                    lista_de_perfis_cadrastrados.push(perfil_cadrastrado);
                }
            }
            //  >>>>>>>>>>>Salvar no arquivo de texto 'perfis.txt'<<<<<<<<<<<<
            console.log(chalk_1.default.green(`>>>>>>Usuario ${nome} cadrastrado com sucesso!!!\n\n`));
            this.salvarOsPerfisEmArquivoTxt();
            //console.log(lista_de_perfis_cadrastrados)
        }
        catch (error) {
            console.log(error.message);
            this.incluirPerfil();
        }
        finally {
            console.log("finaly");
        }
    }
    consultarPerfil() {
        console.log("\n \n \n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|") + "      Consultar Perfil           " + tema("|"));
        console.log(tema("|---------------------------------|"));
        try {
            let nome_do_usuario_procurado = readline_sync_1.default.question("\n Digite o nome do usuario:");
            this.validarTexto(nome_do_usuario_procurado);
            let resultado_da_consulta = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
            console.log(`\n Usuario com nome '${nome_do_usuario_procurado}' : `);
            //console.log(resultado_da_consulta)
            console.log(` \n                           * USUARIO ${resultado_da_consulta.getNome()}* `);
            console.log(`        ________________________________________________________________________________________________`);
            console.log(`       | ID: ${resultado_da_consulta.getId()}                                                           `);
            console.log(`       |________________________________________________________________________________________________`);
            console.log(`       |>>>> NOME: @ ${resultado_da_consulta.getNome()}                                           `);
            console.log(`       |>>>> EMAIL: ${resultado_da_consulta.getEmail()}                                                        `);
            console.log(`       |>>>> QUANTIDADE DE POSTAGENS: ${resultado_da_consulta.getPostagens().length}                                        `);
            console.log(`       |________________________________________________________________________________________________`);
        }
        catch (error) {
            console.log(error.message);
            this.consultarPerfil();
        }
    }
    EditarPerfil() {
        console.log("\n \n \n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|") + "      Editar Perfil              " + tema("|"));
        console.log(tema("|---------------------------------|"));
        try {
            let nome_do_usuario_procurado = readline_sync_1.default.question("\n Digite o nome do usuario:");
            let resultado_da_consulta = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
            let nome;
            let email;
            let opcao1 = readline_sync_1.default.question(" Editar nome (s-SIM s-NAO) ?");
            if (opcao1.toUpperCase() == "S") {
                nome = readline_sync_1.default.question("Digite o nome:");
                resultado_da_consulta.setNome(nome);
            }
            let opcao2 = readline_sync_1.default.question(" Editar email (s-SIM s-NAO) ?");
            if (opcao2.toUpperCase() == "S") {
                email = readline_sync_1.default.question("Digite o email:");
                resultado_da_consulta.setEmail(email);
            }
            this.salvarOsPerfisEmArquivoTxt();
            console.log(`\n Usuario com nome '${nome_do_usuario_procurado}' : `);
            console.log(resultado_da_consulta);
        }
        catch (error) {
            console.log(error);
            this.EditarPerfil();
        }
    }
    excluirPerfil() {
        console.log("\n \n \n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|") + "      Excluir   Perfil           " + tema("|"));
        console.log(tema("|---------------------------------|"));
        try {
            let nome_do_usuario_procurado = readline_sync_1.default.question("\n Digite o nome do usuario que sera excluido:");
            this.validarTexto(nome_do_usuario_procurado);
            let resultado_da_consulta = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
            if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfis_Lista_js_1.RepositorioDePerfisLista) {
                let lista = this._redeSocial.getRepositorioDePerfis();
                let no_inicial = lista.getPerfis();
                // Caso especial: Remover o primeiro nó
                if (no_inicial.perfil.getNome() === nome_do_usuario_procurado) {
                    lista.setCabeca(no_inicial.proximo);
                }
                let no_anterior = null;
                let no_atual = no_inicial;
                while (no_atual !== null) {
                    if (no_atual.perfil.getNome() === nome_do_usuario_procurado) {
                        // Remove o nó da lista
                        if (no_anterior != null) {
                            no_anterior.proximo = no_atual.proximo;
                        }
                        2;
                        break;
                    }
                    else {
                        no_anterior = no_atual;
                        no_atual = no_atual.proximo;
                    }
                }
            }
            else if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfis_Array_js_1.RepositorioDePerfisArray) {
                let lista_de_perfis = this._redeSocial.getRepositorioDePerfis().getPerfis();
                let lista_de_perfis_atualizada = [];
                for (const perfil_atual of lista_de_perfis) {
                    if (perfil_atual.getNome() != nome_do_usuario_procurado) {
                        lista_de_perfis_atualizada.push(perfil_atual);
                    }
                }
                this._redeSocial.getRepositorioDePerfis().setPerfis(lista_de_perfis_atualizada);
            }
            this.salvarOsPerfisEmArquivoTxt();
            console.log(`\n Usuario com nome '${nome_do_usuario_procurado} excluido' : `);
        }
        catch (error) {
            console.log(error.message);
            this.excluirPerfil();
        }
    }
    mostrarPostagensPopulares() {
        let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
        let lista_de_postagens_simples = [];
        let lista_de_postagens_avancadas = [];
        if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista) {
            let atual = this._redeSocial.getRepositorioDePostagens().getPostagens();
            while (atual !== null) {
                if (atual.postagem instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    if (atual.postagem.ehPopular() && atual.postagem.getVisualizacoesRestantes() > 0) {
                        atual.postagem.decrementarVisualizacoes();
                        lista_de_postagens_avancadas.push(atual.postagem);
                    }
                }
                else {
                    if (atual.postagem.ehPopular()) {
                        lista_de_postagens_simples.push(atual.postagem);
                    }
                }
                atual = atual.proximo;
            }
        }
        else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray) {
            for (const postagem_atual of lista_de_postagens) {
                if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    if (postagem_atual.ehPopular() && postagem_atual.getVisualizacoesRestantes() > 0) {
                        postagem_atual.decrementarVisualizacoes();
                        lista_de_postagens_avancadas.push(postagem_atual);
                    }
                }
                else {
                    if (postagem_atual.ehPopular()) {
                        lista_de_postagens_simples.push(postagem_atual);
                    }
                }
            }
        }
        let numero_postagem_simples = 1;
        for (const postagem_atual of lista_de_postagens_simples) {
            console.log(` \n                           *POSTAGEM ${numero_postagem_simples}* `);
            console.log(`        ________________________________________________________________________________________________`);
            console.log(`       | ID: ${postagem_atual.getId()} DATA:${postagem_atual.getData()}                                 `);
            console.log(`       |________________________________________________________________________________________________`);
            console.log(`       |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                           `);
            console.log(`       |>>>> TEXTO: ${postagem_atual.getTexto()}                                                        `);
            console.log(`       |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                                   `);
            console.log(`       |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                             `);
            console.log(`       |________________________________________________________________________________________________`);
            numero_postagem_simples++;
        }
        let numero_postagem_avancada = 1;
        for (const postagem_atual of lista_de_postagens_avancadas) {
            console.log(`                            \n *POSTAGEM AVANCADA ${numero_postagem_avancada}* `);
            console.log(`       _________________________________________________________________________________________________`);
            console.log(`       | ID: ${postagem_atual.getId()}  DATA:${postagem_atual.getData()}                                `);
            console.log(`       |________________________________________________________________________________________________`);
            console.log(`       |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                           `);
            console.log(`       |>>>> TEXTO: ${postagem_atual.getTexto()}                                                        `);
            console.log(`       |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                                   `);
            console.log(`       |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                             `);
            console.log(`       |>>>> HASHTAGS:${postagem_atual.getHashtagEmString()}                                            `);
            console.log(`       |>>>> VISUALIZACOES RESTANTES:${postagem_atual.getVisualizacoesRestantes()}                      `);
            console.log(`       |________________________________________________________________________________________________`);
            numero_postagem_avancada++;
        }
        if (lista_de_postagens_simples.length == 0 && lista_de_postagens_avancadas.length == 0) {
            console.log(" >>>>  Nao ha postagens populares!!!!");
        }
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PERSISTENCIA DE DADOS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    carregarArquivoTxtPerfis() {
        let tema_carregando = chalk_1.default.blue.bold;
        let tema_conta_carregada = chalk_1.default.bgGray.green.bold;
        let tema_arquivo_vazio = chalk_1.default.bold;
        console.log(tema_carregando(">>>>Iniciando leitura de arquivo perfis.txt"));
        const arquivo = fs.readFileSync(this.caminho_arquivo_perfis, 'utf-8');
        if (arquivo != "") {
            //const linhas: string[] = arquivo.split('\n');
            const linhas = arquivo.split('\r\n');
            for (let i = 0; i < linhas.length; i++) {
                let linhaPerfil = linhas[i].split(";");
                let perfil;
                perfil = new Perfil_js_1.Perfil(Number(linhaPerfil[0]), linhaPerfil[1], linhaPerfil[2]);
                this._redeSocial.getRepositorioDePerfis().incluir(perfil);
                console.log(tema(`Perfil ${perfil.getId()} carregada`));
            }
        }
        else {
            throw new Excecoes_js_1.CarregarArquivoError(tema_arquivo_vazio("arquivo perfis.txt esta vazio!"));
        }
    }
    salvarOsPerfisEmArquivoTxt() {
        let tema_carregando = chalk_1.default.blue.bold;
        let tema_arquivo_gravado = chalk_1.default.green.bold;
        let tema_erro = chalk_1.default.red.bold;
        try {
            console.log(tema_carregando(">>>>Iniciando a gravação de perfis no arquivo perfil.txt"));
            let stringPerfil = "";
            let linha = "";
            if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfis_Lista_js_1.RepositorioDePerfisLista) {
                let cabeca_lista = this._redeSocial.getRepositorioDePerfis().getCabeca();
                let atual = cabeca_lista;
                while (atual !== null) {
                    linha = `${atual.perfil.getId()};${atual.perfil.getNome()};${atual.perfil.getEmail()}\r\n`;
                    stringPerfil += linha;
                    atual = atual.proximo;
                }
                //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
                stringPerfil = stringPerfil.slice(0, stringPerfil.length - 2);
                fs.writeFileSync(this.caminho_arquivo_perfis, stringPerfil, 'utf-8');
                console.log(tema_arquivo_gravado("Perfis salvos em arquivo."));
            }
            else if (this._redeSocial.getRepositorioDePerfis() instanceof RepositorioDePerfis_Array_js_1.RepositorioDePerfisArray) {
                for (let perfil of this._redeSocial.getRepositorioDePerfis().getPerfis()) {
                    linha = `${perfil.getId()};${perfil.getNome()};${perfil.getEmail()}\r\n`;
                    stringPerfil += linha;
                }
                //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
                stringPerfil = stringPerfil.slice(0, stringPerfil.length - 2);
                fs.writeFileSync(this.caminho_arquivo_perfis, stringPerfil, 'utf-8');
                console.log(tema_arquivo_gravado("Perfis salvos em arquivo."));
            }
        }
        catch (error) {
            throw new Excecoes_js_1.SalvarEmArquivoError(tema_erro("Erro ao salvar o arquivo perfis.txt !"));
        }
    }
    carregarArquivoTxtPostagens() {
        let tema_carregando = chalk_1.default.blue.bold;
        let tema_postagem_carregada = chalk_1.default.green.bold;
        let tema_arquivo_vazio = chalk_1.default.bold;
        console.log(tema_carregando(">>>>Iniciando leitura do arquivo postagens.txt"));
        const arquivo = fs.readFileSync(this.caminho_arquivo_postagens, 'utf-8');
        if (arquivo != "") {
            //const linhas: string[] = arquivo.split('\n');
            const linhas = arquivo.split('\r\n');
            for (let i = 0; i < linhas.length; i++) {
                let linhaConta = linhas[i].split(";");
                let postagem;
                let tipo = linhaConta[3];
                if (tipo == 'PA') {
                    let perfil_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorId(Number(linhaConta[6]));
                    let lista_de_hashtags_sem_hash = linhaConta[7].split("#");
                    let lista_de_hashtags_pronta = [];
                    for (const hashtag_atual of lista_de_hashtags_sem_hash) {
                        lista_de_hashtags_pronta.push(`#${hashtag_atual}`);
                    }
                    postagem = new PostagemAvancada_js_1.PostagemAvancada(Number(linhaConta[0]), linhaConta[1], Number(linhaConta[2]), Number(linhaConta[4]), new Date(linhaConta[5]), perfil_da_postagem, lista_de_hashtags_pronta, Number(linhaConta[8]));
                    //console.log(postagem)
                }
                else if (tipo == 'P') {
                    let perfil_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorId(Number(linhaConta[6]));
                    //console.log("____id do perfil que postou______")
                    //console.log(linhaConta[6])
                    //console.log("_____perfil da postagem_____")
                    //console.log(perfil_da_postagem)
                    //console.log(`${linhaConta.length}`)
                    postagem = new Postagem_js_1.Postagem(Number(linhaConta[0]), linhaConta[1], Number(linhaConta[2]), Number(linhaConta[4]), new Date(linhaConta[5]), perfil_da_postagem);
                    if (perfil_da_postagem != null) {
                        perfil_da_postagem.adicicionarPostagens(postagem);
                    }
                    console.log(tema_postagem_carregada(`Postagem de id ${postagem.getId()} carregada`));
                }
                this._redeSocial.getRepositorioDePostagens().incluir(postagem);
            }
        }
        else {
            throw new Excecoes_js_1.CarregarArquivoError(tema_arquivo_vazio("Arquivo postagens.txt esta vazio!"));
        }
    }
    salvarAsPostagensEmArquivoTxt() {
        let tema_carregando = chalk_1.default.blue.bold;
        let tema_arquivo_gravado = chalk_1.default.green.bold;
        let tema_erro = chalk_1.default.red.bold;
        console.log(tema_carregando(">>>>Iniciando a gravação de postagens no arquivo postagens.txt"));
        let stringPostagem = "";
        let linha = "";
        try {
            if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista) {
                let atual = this._redeSocial.getRepositorioDePostagens().getCabeca();
                while (atual !== null) {
                    if (atual.postagem instanceof PostagemAvancada_js_1.PostagemAvancada) {
                        linha = `${atual.postagem.getId()};${atual.postagem.getTexto()};${atual.postagem.getCurtida()};PA;${atual.postagem.getDescurtida()};${atual.postagem.getData()};${atual.postagem.getPerfil().getId()};${atual.postagem.getHashtagEmString()};${atual.postagem.getVisualizacoesRestantes()}\r\n`;
                    }
                    else {
                        linha = `${atual.postagem.getId()};${atual.postagem.getTexto()};${atual.postagem.getCurtida()};P;${atual.postagem.getDescurtida()};${atual.postagem.getData()};${atual.postagem.getPerfil().getId()}\r\n`;
                    }
                    stringPostagem += linha;
                    atual = atual.proximo;
                }
                //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
                stringPostagem = stringPostagem.slice(0, stringPostagem.length - 2);
                fs.writeFileSync(this.caminho_arquivo_postagens, stringPostagem, 'utf-8');
                console.log(tema_arquivo_gravado("Postagens gravadas em arquivos!"));
            }
            else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray) {
                for (let postagem_atual of this._redeSocial.getRepositorioDePostagens().getPostagens()) {
                    if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                        linha = `${postagem_atual.getId()};${postagem_atual.getTexto()};${postagem_atual.getCurtida()};PA;${postagem_atual.getDescurtida()};${postagem_atual.getData()};${postagem_atual.getPerfil().getId()};${postagem_atual.getHashtagEmString()};${postagem_atual.getVisualizacoesRestantes()}\r\n`;
                    }
                    else {
                        linha = `${postagem_atual.getId()};${postagem_atual.getTexto()};${postagem_atual.getCurtida()};P;${postagem_atual.getDescurtida()};${postagem_atual.getData()};${postagem_atual.getPerfil().getId()}\r\n`;
                    }
                    stringPostagem += linha;
                }
                //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
                stringPostagem = stringPostagem.slice(0, stringPostagem.length - 2);
                fs.writeFileSync(this.caminho_arquivo_postagens, stringPostagem, 'utf-8');
                console.log(tema_arquivo_gravado("Postagens gravadas em arquivos!"));
            }
        }
        catch (error) {
            throw new Excecoes_js_1.SalvarEmArquivoError(tema_erro("Erro ao salvar postagens no arquivo postagens.txt!"));
        }
    }
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    incluirPostagem() {
        console.log("\n \n \n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|" + "      Incluir Postagens          " + tema("|")));
        console.log(tema("|---------------------------------|"));
        try {
            let nome_do_usuario_procurado = readline_sync_1.default.question("\n \n Digite o nome do usuario autor da postagem:");
            this.validarTexto(nome_do_usuario_procurado);
            let resultado_da_consulta_pelo_perfil_do_autor_da_postagem = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_do_usuario_procurado);
            let tipo_da_postagem = readline_sync_1.default.question("\n \n Tipo da postagem 1-Postagem 2-Postagem Avancada : ");
            this.validarNumero(tipo_da_postagem);
            //########## Criar postagem
            let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
            let postagem_atual;
            if (Number(tipo_da_postagem) == 1) {
                let texto_da_postagem = readline_sync_1.default.question("\n \n Digite o texto da postagem:");
                if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista) {
                    //>>>>>>>Caso lista de Postagens vazia
                    if (this._redeSocial.getRepositorioDePostagens().getTamanho() == 0) {
                        postagem_atual = new Postagem_js_1.Postagem(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                    }
                    //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                    else {
                        let id_postagem_atual = (this._redeSocial.getRepositorioDePostagens().getFim().postagem.getId()) + 1;
                        postagem_atual = new Postagem_js_1.Postagem(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                    }
                }
                else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray) {
                    //>>>>>>>Caso lista de Postagens vazia
                    if (lista_de_postagens.length == 0) {
                        postagem_atual = new Postagem_js_1.Postagem(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                    }
                    //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                    else {
                        let id_postagem_atual = lista_de_postagens[lista_de_postagens.length - 1].getId() + 1;
                        postagem_atual = new Postagem_js_1.Postagem(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem);
                    }
                }
                //salvando na memoria no Repositorio de Postagens
                this._redeSocial.getRepositorioDePostagens().incluir(postagem_atual);
                //salvando postagem na lista de postagem do usuario autor
                resultado_da_consulta_pelo_perfil_do_autor_da_postagem.adicicionarPostagens(postagem_atual);
            }
            else if (Number(tipo_da_postagem) == 2) {
                let texto_da_postagem = readline_sync_1.default.question("\n \n Digite o texto da postagem:   \n");
                let numero_de_visualizacoes_maximo = Number(readline_sync_1.default.question("\n Digite o numero maximo de visualizacoes:"));
                let lista_de_hashtags = [];
                let numero_hastag_atual = 1;
                while (true) {
                    let hashtag_atual = readline_sync_1.default.question(`\n Digite a ${numero_hastag_atual} hashtag(#): `);
                    lista_de_hashtags.push(`#${hashtag_atual}`);
                    numero_hastag_atual++;
                    let continuar = true;
                    while (continuar) {
                        let opcao = readline_sync_1.default.question(`\n\n\nDeseja adicionar mais hashtags? (S-sim N-Nao):  `);
                        if (opcao.toUpperCase() == "S")
                            break;
                        else if (opcao.toUpperCase() == "N")
                            continuar = false;
                        else
                            continue;
                    }
                    if (continuar == true)
                        continue;
                    else
                        break;
                }
                if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista) {
                    //>>>>>>>Caso lista de Postagens vazia
                    if (this._redeSocial.getRepositorioDePostagens().getTamanho() == 0) {
                        postagem_atual = new PostagemAvancada_js_1.PostagemAvancada(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                    }
                    //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                    else {
                        let id_postagem_atual = (this._redeSocial.getRepositorioDePostagens().getFim().postagem.getId()) + 1;
                        postagem_atual = new PostagemAvancada_js_1.PostagemAvancada(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                    }
                }
                else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray) {
                    //>>>>>>>Caso lista de Postagens vazia
                    if (lista_de_postagens.length == 0) {
                        postagem_atual = new PostagemAvancada_js_1.PostagemAvancada(1, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                    }
                    //>>>>>>>>Caso lista de Postagens com pelo menos 1 postagem
                    else {
                        let id_postagem_atual = lista_de_postagens[lista_de_postagens.length - 1].getId() + 1;
                        postagem_atual = new PostagemAvancada_js_1.PostagemAvancada(id_postagem_atual, texto_da_postagem, 0, 0, new Date(), resultado_da_consulta_pelo_perfil_do_autor_da_postagem, lista_de_hashtags, numero_de_visualizacoes_maximo);
                    }
                }
                //salvando na memoria no Repositorio de Postagens
                this._redeSocial.getRepositorioDePostagens().incluir(postagem_atual);
                //salvando postagem na lista de postagem do usuario autor
                resultado_da_consulta_pelo_perfil_do_autor_da_postagem.adicicionarPostagens(postagem_atual);
            }
            //console.log(postagem_atual)
            //console.log(  this._redeSocial.getRepositorioDePostagens())
            //SALVAR postagens em arquivo "postagens.txt"
            console.log("\n >>>Postagem enviada com sucesso!!!! \n");
            this.salvarAsPostagensEmArquivoTxt();
        }
        catch (error) {
            console.log(error.message);
            this.incluirPostagem();
        }
    }
    EditarPostagens() {
        console.log("\n \n \n");
        console.log(tema("|") + tema("---------------------------------") + tema("|"));
        console.log(tema("|      Editar Postagem            |"));
        console.log(tema("|---------------------------------|"));
        let id_postagem = readline_sync_1.default.question("\n Digite o id da postagem:");
        this.validarNumero(id_postagem);
        let resultado_da_consulta = this._redeSocial.getRepositorioDePostagens().consultarPorID(Number(id_postagem));
        try {
            let texto;
            let hashtag;
            let max_visualizacao;
            let opcao1 = readline_sync_1.default.question(" Editar texto (s-SIM s-NAO) ?");
            this.validarTexto(opcao1);
            let opcao2;
            let opcao3;
            if (opcao1.toUpperCase() == "S") {
                texto = readline_sync_1.default.question("Digite o texto:");
                resultado_da_consulta.setTexto(texto);
            }
            if (resultado_da_consulta instanceof PostagemAvancada_js_1.PostagemAvancada) {
                opcao2 = readline_sync_1.default.question(" Editar hastag (s-SIM s-NAO) ?");
                this.validarTexto(opcao2);
                if (opcao2.toUpperCase() == "S") {
                    let contador = 1;
                    while (true) {
                        hashtag = readline_sync_1.default.question(`Digite a ${contador} hashtag: `);
                        resultado_da_consulta.adicionarHashtag(`#${hashtag}`);
                        contador++;
                        let perguta = readline_sync_1.default.question(`Cadrastar mais hastags (s-Sim n-Nao)`);
                        if (perguta.toUpperCase() == "N") {
                            break;
                        }
                    }
                }
                opcao3 = readline_sync_1.default.question(" Editar numero maximo de visualizacoes (s-SIM s-NAO) ?");
                this.validarTexto(opcao3);
                if (opcao3.toUpperCase() == "S") {
                    max_visualizacao = readline_sync_1.default.question("Digite o numero maximo de visualizacoes:");
                }
            }
            this.salvarAsPostagensEmArquivoTxt();
            console.log(`\n Postagem com id '${id_postagem} foi  atualizada!!!' : `);
        }
        catch (error) {
            console.log(error.message);
            this.EditarPostagens();
        }
    }
    excluirPostagens() {
        console.log("\n \n \n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|") + "      Excluir   Postagens        " + tema("|"));
        console.log(tema("|---------------------------------|"));
        try {
            let id_postagem_exluida = readline_sync_1.default.question("\n Digite o ID da postagem que sera excluida:");
            this.validarNumero(id_postagem_exluida);
            let resultado_da_consulta = this._redeSocial.getRepositorioDePostagens().consultarPorID(Number(id_postagem_exluida));
            if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista) {
                let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
                let lista_de_postagens_atualizada = new RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista();
                let atual = lista_de_postagens;
                while (atual !== null) {
                    if (atual.postagem.getId() != Number(id_postagem_exluida)) {
                        lista_de_postagens_atualizada.incluir(atual.postagem);
                    }
                    atual = atual.proximo;
                }
                this._redeSocial.getRepositorioDePostagens().setPostagens(lista_de_postagens_atualizada.getCabeca());
                this.salvarAsPostagensEmArquivoTxt();
                console.log(`\n Postagem com id '${id_postagem_exluida} excluido' : `);
            }
            else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray) {
                let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
                let lista_de_postagens_atualizada = [];
                for (const postagem_atual of lista_de_postagens) {
                    if (postagem_atual.getId() != Number(id_postagem_exluida)) {
                        lista_de_postagens_atualizada.push(postagem_atual);
                    }
                }
                this._redeSocial.getRepositorioDePostagens().setPostagens(lista_de_postagens_atualizada);
                this.salvarAsPostagensEmArquivoTxt();
                console.log(`\n Postagem com id '${id_postagem_exluida} excluido' : `);
            }
        }
        catch (error) {
            console.log(error.messsage);
            this.excluirPostagens();
        }
    }
    consultarPostagens() {
        console.log("\n\n\n");
        console.log(tema("|---------------------------------|"));
        console.log(tema("|") + "      Consultar Postagens        " + tema("|"));
        console.log(tema("|---------------------------------|"));
        console.log("\n\n\n");
        try {
            let opcao = readline_sync_1.default.question(`Digite uma opcao: 
                  (1-mostrar Todas as postagens
                  2-mostrar as postagens de 1 perfil
                  3-mostrar uma postagem
                  0-Sair
                    

                  ) `);
            this.validarNumero(opcao);
            opcao = Number(opcao);
            //FAIL FAST
            if (opcao == 0) {
                return;
            }
            else if (opcao == 1) {
                console.log(`\n\n\n>>>>>>>>>>>>Todas as postagens da Rede Social<<<<<<<<<<<<<<<<`);
                this.mostrarTodasAsPostagensDaRedeSocialNaTela();
            }
            else if (opcao == 2) {
                console.log(`\n\n\n>>>>>>>>>>>>Todas as postagens da um Perfil<<<<<<<<<<<<<<<<`);
                let nome_usuario = readline_sync_1.default.question("\nDigite o nome do usuario:");
                this.validarTexto(nome_usuario);
                this.mostrarTodasAsPostagensDeUmPerfilNaTela(nome_usuario);
            }
            else if (opcao == 3) {
                console.log(`\n\n\n>>>>>>>>>>>>Mostrar Postagem com ID especifico<<<<<<<<<<<<<<<<`);
                let id_postagem = readline_sync_1.default.question("\nDigite o ID da postagem:");
                this.validarNumero(id_postagem);
                this.mostrarPostagemPorID(Number(id_postagem));
            }
        }
        catch (error) {
            console.log(error.message);
            this.consultarPostagens();
        }
    }
    mostrarTodasAsPostagensDaRedeSocialNaTela() {
        let lista_de_postagens = this._redeSocial.getRepositorioDePostagens().getPostagens();
        let lista_de_postagens_simples = [];
        let lista_de_postagens_avancadas = [];
        if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista) {
            let atual = lista_de_postagens;
            while (atual !== null) {
                if (atual.postagem instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    lista_de_postagens_avancadas.push(atual.postagem);
                }
                else {
                    lista_de_postagens_simples.push(atual.postagem);
                }
                atual = atual.proximo;
            }
        }
        else if (this._redeSocial.getRepositorioDePostagens() instanceof RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray) {
            for (const postagem_atual of lista_de_postagens) {
                if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                    lista_de_postagens_avancadas.push(postagem_atual);
                }
                else {
                    lista_de_postagens_simples.push(postagem_atual);
                }
            }
        }
        let numero_postagem_simples = 1;
        for (const postagem_atual of lista_de_postagens_simples) {
            console.log("\n");
            console.log(`                                   *POSTAGEM ${numero_postagem_simples}* `);
            console.log("        __________________________________________________________________________________________");
            console.log(`       |ID:${postagem_atual.getId()} DATA:${postagem_atual.getData()}                             `);
            console.log("       |___________________________________________________________________________________________");
            console.log(`       |                                                                                          `);
            console.log(`       |                                                                                          `);
            console.log(`       |>>>> AUTOR: @${postagem_atual.getPerfil().getNome()}                                    `);
            console.log(`       |>>>> TEXTO: ${postagem_atual.getTexto()}                                                  `);
            console.log(`       |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                             `);
            console.log(`       |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                       `);
            console.log(`       |__________________________________________________________________________________________`);
            numero_postagem_simples++;
        }
        let numero_postagem_avancada = 1;
        for (const postagem_atual of lista_de_postagens_avancadas) {
            console.log(`                \n                *POSTAGEM AVANCADA ${numero_postagem_avancada}`);
            console.log(`        _________________________________________________________________________________________`);
            console.log(`       | ID: ${postagem_atual.getId()}             DATA:${postagem_atual.getData()}              `);
            console.log(`       |_________________________________________________________________________________________`);
            console.log(`       |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                    `);
            console.log(`       |>>>> TEXTO: ${postagem_atual.getTexto()}                                                 `);
            console.log(`       |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                            `);
            console.log(`       |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                      `);
            console.log(`       |>>>> HASHTAGS:${postagem_atual.getHashtagEmString()}                                     `);
            console.log(`       |>>>> VISUALIZACOES RESTANTES:${postagem_atual.getVisualizacoesRestantes()}               `);
            console.log(`       |_________________________________________________________________________________________`);
            numero_postagem_avancada++;
        }
    }
    mostrarTodasAsPostagensDeUmPerfilNaTela(nome_usuario) {
        let consulta_pelo_usuario = this._redeSocial.getRepositorioDePerfis().consultarPorNome(nome_usuario);
        let lista_de_postagens = consulta_pelo_usuario.getPostagens();
        let lista_de_postagens_simples = [];
        let lista_de_postagens_avancadas = [];
        for (const postagem_atual of lista_de_postagens) {
            if (postagem_atual instanceof PostagemAvancada_js_1.PostagemAvancada) {
                lista_de_postagens_avancadas.push(postagem_atual);
            }
            else {
                lista_de_postagens_simples.push(postagem_atual);
            }
        }
        let numero_postagem_simples = 1;
        for (const postagem_atual of lista_de_postagens_simples) {
            console.log(` \n                    *POSTAGEM ${numero_postagem_simples}* `);
            console.log(`       ____________________________________________________________________________________________`);
            console.log(`       | ID: ${postagem_atual.getId()}              DATA:${postagem_atual.getData()}               `);
            console.log(`       |___________________________________________________________________________________________`);
            console.log(`       |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                      `);
            console.log(`       |>>>> TEXTO: ${postagem_atual.getTexto()}                                                   `);
            console.log(`       |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                              `);
            console.log(`       |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                        `);
            console.log(`       |___________________________________________________________________________________________`);
            numero_postagem_simples++;
        }
        let numero_postagem_avancada = 1;
        for (const postagem_atual of lista_de_postagens_avancadas) {
            console.log(`                \n         *POSTAGEM AVANCADA ${numero_postagem_avancada}* `);
            console.log(`       ____________________________________________________________________________________________`);
            console.log(`       | ID: ${postagem_atual.getId()}    DATA:${postagem_atual.getData()}                         `);
            console.log(`       |___________________________________________________________________________________________`);
            console.log(`       |>>>> AUTOR: @ ${postagem_atual.getPerfil().getNome()}                                      `);
            console.log(`       |>>>> TEXTO: ${postagem_atual.getTexto()}                                                   `);
            console.log(`       |>>>> CURTIDAS: ${postagem_atual.getCurtida()}                                              `);
            console.log(`       |>>>> DESCURTIDAS: ${postagem_atual.getDescurtida()}                                        `);
            console.log(`       |>>>> HASHTAGS:${postagem_atual.getHashtagEmString()}                                       `);
            console.log(`       |>>>> VISUALIZACOES RESTANTES:${postagem_atual.getVisualizacoesRestantes()}                 `);
            console.log(`       |___________________________________________________________________________________________`);
            numero_postagem_avancada++;
        }
    }
    mostrarPostagemPorID(id_postagem) {
        let consulta_pela_postagem = this._redeSocial.getRepositorioDePostagens().consultarPorID(id_postagem);
        if (consulta_pela_postagem instanceof PostagemAvancada_js_1.PostagemAvancada) {
            console.log(`                \n                *POSTAGEM AVANCADA* `);
            console.log(`      _________________________________________________________________________________________________`);
            console.log(`      | ID: ${consulta_pela_postagem.getId()}                DATA:${consulta_pela_postagem.getData()}  `);
            console.log(`      |________________________________________________________________________________________________`);
            console.log(`      |>>>> AUTOR: @ ${consulta_pela_postagem.getPerfil().getNome()}                                   `);
            console.log(`      |>>>> TEXTO: ${consulta_pela_postagem.getTexto()}                                                `);
            console.log(`      |>>>> CURTIDAS: ${consulta_pela_postagem.getCurtida()}                                           `);
            console.log(`      |>>>> DESCURTIDAS: ${consulta_pela_postagem.getDescurtida()}                                     `);
            console.log(`      |>>>> HASHTAGS:${consulta_pela_postagem.getHashtagEmString()}                                    `);
            console.log(`      |>>>> VISUALIZACOES RESTANTES:${consulta_pela_postagem.getVisualizacoesRestantes()}              `);
            console.log(`      |________________________________________________________________________________________________`);
        }
        else {
            console.log(` \n                                *POSTAGEM *                                                                    `);
            console.log(`       _________________________________________________________________________________________________`);
            console.log(`       | ID: ${consulta_pela_postagem.getId()}                DATA:${consulta_pela_postagem.getData()}  `);
            console.log(`       |________________________________________________________________________________________________`);
            console.log(`       |>>>> AUTOR: @ ${consulta_pela_postagem.getPerfil().getNome()}                                   `);
            console.log(`       |>>>> TEXTO: ${consulta_pela_postagem.getTexto()}                                                `);
            console.log(`       |>>>> CURTIDAS: ${consulta_pela_postagem.getCurtida()}                                           `);
            console.log(`       |>>>> DESCURTIDAS: ${consulta_pela_postagem.getDescurtida()}                                     `);
            console.log(`       |________________________________________________________________________________________________`);
        }
    }
    curtirPostagem() {
        console.log(tema("\n_________________________________"));
        console.log(tema("|") + "      Curtir Postagens          " + tema("|"));
        console.log(tema(`|________________________________|\n`));
        try {
            let id_postagem = readline_sync_1.default.question("Digite o ID da postagem:");
            this.validarNumero(id_postagem);
            let consulta_pela_postagem = this._redeSocial.getRepositorioDePostagens().consultarPorID(Number(id_postagem));
            console.log("----Postagem antes do like---------");
            this.mostrarPostagemPorID(Number(id_postagem));
            consulta_pela_postagem.curtir();
            console.log("----Postagem apos o like---------");
            this.mostrarPostagemPorID(Number(id_postagem));
        }
        catch (error) {
            console.log(error.message);
            this.curtirPostagem();
        }
        this.salvarAsPostagensEmArquivoTxt();
    }
    descurtirPostagem() {
        console.log(tema("\n_________________________________"));
        console.log(tema("|") + "      Descurtir Postagens       " + tema("|"));
        console.log(tema(`|________________________________|\n`));
        try {
            let id_postagem = readline_sync_1.default.question("Digite o ID da postagem:");
            this.validarNumero(id_postagem);
            let consulta_pela_postagem = this._redeSocial.getRepositorioDePostagens().consultarPorID(Number(id_postagem));
            console.log("----Postagem antes do Deslike---------");
            this.mostrarPostagemPorID(Number(id_postagem));
            consulta_pela_postagem.descurtir();
            console.log("\n----Postagem apos o Deslike---------");
            this.mostrarPostagemPorID(Number(id_postagem));
        }
        catch (error) {
            console.log(error.messsage);
            this.descurtirPostagem();
        }
        this.salvarAsPostagensEmArquivoTxt();
    }
}
console.log("########### IMPLEMENTACAO DA REDE SOCIAL #############");
let repositorio_de_perfis;
let repositorio_de_postagens;
let opcao = readline_sync_1.default.question("\n\n ESCOLHA A IMPLEMENTACAO (1-ARRAY 2-LISTA DUPLAMENTE ENCADEADA): ");
if (Number(opcao) == 1) {
    repositorio_de_perfis = new RepositorioDePerfis_Array_js_1.RepositorioDePerfisArray([]);
    repositorio_de_postagens = new RepositorioDePostagens_Array_js_1.RepositorioDePostagensArray([]);
}
else if (Number(opcao) == 2) {
    repositorio_de_perfis = new RepositorioDePerfis_Lista_js_1.RepositorioDePerfisLista();
    repositorio_de_postagens = new RepositorioDePostagens_Lista_js_1.RepositorioDePostagens_Lista();
}
const redeSocial = new RedeSocial_js_1.RedeSocial(repositorio_de_postagens, repositorio_de_perfis);
const app = new App(redeSocial);
app.carregarDadosParaIniciar_Rede_social();
app.exibirMenu();
