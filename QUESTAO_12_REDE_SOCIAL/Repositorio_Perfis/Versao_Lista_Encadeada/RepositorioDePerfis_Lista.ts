import { Perfil_Inexistente_Error } from "../../Excecoes/Excecoes.js";
import { IRepositorioDePerfis } from "../../interfaces/IRepositorioDePerfis.js";
import { Perfil } from "../../perfil/Perfil.js";



export class Nodo {
    perfil: Perfil;
    proximo: Nodo | null;
    anterior:Nodo | null;
    constructor(perfil: Perfil) {
        this.perfil = perfil;
        this.proximo = null;
        this.anterior=null;
    }
}


export class RepositorioDePerfisLista implements IRepositorioDePerfis {
    private cabeca: Nodo | null;
    private fim: Nodo | null;
    private tamanho:number;

    constructor() {
        this.cabeca = null;
        this.fim=null;
        this.tamanho=0;
    }
    setCabeca(no_inicial:Nodo=null){
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
    getPerfis() {
        return this.cabeca
    }
    setPerfis(perfil_inicial: Perfil): any {
       this.cabeca=new Nodo(perfil_inicial)
    }
    incluir(perfil: Perfil): void {
        const novoNodo = new Nodo(perfil);

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
    consultarPorNome(nome_procurado: string): Perfil | null {
        let atual = this.cabeca;

        while (atual !== null) {
            if (atual.perfil.getNome()=== nome_procurado) {
                return atual.perfil;
            }
            atual = atual.proximo;
        }
       
      throw new Perfil_Inexistente_Error("Perfil inexistente!")

    }
    consultarPorId(id: number): Perfil | null {
        let atual = this.cabeca;

        while (atual !== null) {
            if (atual.perfil.getId() === id) {
                return atual.perfil;
            }
            atual = atual.proximo;
        }
        throw new Perfil_Inexistente_Error("Perfil inexistente!")
        
    }

    inserir(perfil: Perfil): void {
        const novoNodo = new Nodo(perfil);

        if (this.cabeca === null) {
            this.cabeca = novoNodo;
            this.fim=novoNodo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNodo;
            this.fim=novoNodo;
        }
        this.tamanho++
    }

    consultar(id: number, nome: string, email: string): Perfil | null {
        let atual = this.cabeca;

        while (atual !== null) {
            if (atual.perfil.getId() === id) {
                return atual.perfil;
            }
            atual = atual.proximo;
        }
        throw new Perfil_Inexistente_Error("Perfil inexistente!")
       
    }
}
