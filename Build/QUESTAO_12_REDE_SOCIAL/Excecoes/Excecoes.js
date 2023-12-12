"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarregarArquivoError = exports.SalvarEmArquivoError = exports.EntradaNumerica = exports.EntradaDeCaracteresDeTexto = exports.EntradaVazia = exports.HastagJaExistenteError = exports.DadosDoPerfil_Invalidos_Error = exports.Numero_de_Visualizacoes_Negativas_Error = exports.Postagem_Inexistente_Error = exports.Perfil_Inexistente_Error = exports.AplicacaoError = void 0;
class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoError = AplicacaoError;
class Perfil_Inexistente_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.Perfil_Inexistente_Error = Perfil_Inexistente_Error;
class Postagem_Inexistente_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.Postagem_Inexistente_Error = Postagem_Inexistente_Error;
class Numero_de_Visualizacoes_Negativas_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.Numero_de_Visualizacoes_Negativas_Error = Numero_de_Visualizacoes_Negativas_Error;
class DadosDoPerfil_Invalidos_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.DadosDoPerfil_Invalidos_Error = DadosDoPerfil_Invalidos_Error;
class HastagJaExistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.HastagJaExistenteError = HastagJaExistenteError;
//>>>>>>>>>>>>>>>>>>>>>>>>VALIDACAO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
class EntradaVazia extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.EntradaVazia = EntradaVazia;
class EntradaDeCaracteresDeTexto extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.EntradaDeCaracteresDeTexto = EntradaDeCaracteresDeTexto;
class EntradaNumerica extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.EntradaNumerica = EntradaNumerica;
//>>>>>>>>>>>>>>>>>>>>>>ARQUIVOS 
class SalvarEmArquivoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.SalvarEmArquivoError = SalvarEmArquivoError;
class CarregarArquivoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
exports.CarregarArquivoError = CarregarArquivoError;
