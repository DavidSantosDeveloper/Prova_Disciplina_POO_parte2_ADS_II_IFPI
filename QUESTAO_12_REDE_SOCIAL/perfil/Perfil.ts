import { Postagem } from "../postagem/Postagem.js";
export {Perfil};

class Perfil{
    private _id: number;
    private _nome: string;
    private _email: string;
    private _postagens:Postagem[]=[]
    constructor(id:number, nome:string, email: string){
        this._id = id;
        this._nome = nome;
        this._email= email;
    }
     getId(){
        return this._id
    }
    getNome(){
        return this._nome
    }
    setNome(nome:string){
        this._nome=nome
    }
    setEmail(email:string){
        this._email=email
    }
    getEmail(){
        return this._email
    }
    getPostagens(){
        return this._postagens
    }
    adicicionarPostagens(nova_postagem:Postagem){
        //FAIL FAST
        this._postagens.push(nova_postagem)
    }
}

