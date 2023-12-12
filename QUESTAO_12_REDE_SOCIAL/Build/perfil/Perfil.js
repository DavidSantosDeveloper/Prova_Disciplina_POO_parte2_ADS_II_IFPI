export { Perfil };
class Perfil {
    constructor(id, nome, email) {
        this._postagens = [];
        this._id = id;
        this._nome = nome;
        this._email = email;
    }
    getId() {
        return this._id;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    setEmail(email) {
        this._email = email;
    }
    getEmail() {
        return this._email;
    }
    getPostagens() {
        return this._postagens;
    }
    adicicionarPostagens(nova_postagem) {
        //FAIL FAST
        this._postagens.push(nova_postagem);
    }
}
