export class AplicacaoError extends Error {
    constructor(message) {
        super(message);
    }
}
export class Perfil_Inexistente_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class Postagem_Inexistente_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class Numero_de_Visualizacoes_Negativas_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class DadosDoPerfil_Invalidos_Error extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class HastagJaExistenteError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
//>>>>>>>>>>>>>>>>>>>>>>>>VALIDACAO<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export class EntradaVazia extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class EntradaDeCaracteresDeTexto extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class EntradaNumerica extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
//>>>>>>>>>>>>>>>>>>>>>>ARQUIVOS 
export class SalvarEmArquivoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
export class CarregarArquivoError extends AplicacaoError {
    constructor(message) {
        super(message);
    }
}
