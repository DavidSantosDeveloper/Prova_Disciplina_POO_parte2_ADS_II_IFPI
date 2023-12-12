"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postagem = void 0;
class Postagem {
    constructor(id, texto, curtida, descurtida, data, perfil) {
        this._id = id;
        this._texto = texto;
        this._curtida = curtida;
        this._descurtida = descurtida;
        this._data = data;
        this._perfil = perfil;
    }
    getId() {
        return this._id;
    }
    getTexto() {
        return this._texto;
    }
    setTexto(texto) {
        this._texto = texto;
    }
    getCurtida() {
        return this._curtida;
    }
    getDescurtida() {
        return this._descurtida;
    }
    getData() {
        return this._data;
    }
    getPerfil() {
        return this._perfil;
    }
    curtir() {
        this._curtida++;
    }
    descurtir() {
        this._descurtida++;
    }
    ehPopular() {
        if (this._curtida != 0) {
            if (this._curtida >= 1.5 * this._descurtida) {
                return true;
            }
            else {
                return false;
            }
        }
        else
            return false;
    }
}
exports.Postagem = Postagem;
