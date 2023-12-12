import { Postagem_Inexistente_Error } from "../../Excecoes/Excecoes.js";
import {IRepositorioDePostagens} from "../../interfaces/IRepositorioDePostagens.js"
import { Perfil } from "../../perfil/Perfil.js";
import { Postagem } from "../../postagem/Postagem.js";

export class No {
     postagem: Postagem;
    proximo: No | null;
    anterior:No | null;
    constructor(postagem: Postagem) {
        this.postagem = postagem;
        this.proximo = null;
        this.anterior=null;
    }
}

export class RepositorioDePostagens_Lista implements IRepositorioDePostagens{
    private cabeca: No | null;
    private fim: No | null;
    private tamanho:number;

    constructor() {
        this.cabeca = null;
        this.fim=null;
        this.tamanho=0;
    }
    setCabeca(no_inicial:No=null){
        this.cabeca=no_inicial
    }
    getCabeca():any{
        return this.cabeca
    }
    getFim(){
        return this.fim
    }
    getTamanho(){
        return this.tamanho
    }
    getPostagens() {
        return this.cabeca
    }
    setPostagens(no_inicial: No | null): void {
        this.cabeca=no_inicial
    }
    incluir(postagem: Postagem): void {
        const novoNodo = new No(postagem);

        if (this.cabeca === null) {
            this.cabeca = novoNodo;
            this.fim=novoNodo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNodo;
            novoNodo.anterior=this.fim
            this.fim=novoNodo;
        }
        this.tamanho++
    }
    consultar(id?: number, texto?: string, hashtag?: string, perfil?: Perfil) {
        let atual = this.cabeca;

        while (atual !== null) {
            if (atual.postagem.getId() === id) {
                return atual.postagem;
            }
            atual = atual.proximo;
        }
        throw  new Postagem_Inexistente_Error("Postagem inexistente")
    }
    
    consultarPorID(id: number): Postagem {
        let atual = this.cabeca;

        while (atual !== null) {
            if (atual.postagem.getId() === id) {
                return atual.postagem;
            }
            atual = atual.proximo;
        }

        throw  new Postagem_Inexistente_Error("Postagem inexistente")

    }
          
}