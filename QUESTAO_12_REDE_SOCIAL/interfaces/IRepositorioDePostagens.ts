import { Perfil } from "../perfil/Perfil.js"
import { Postagem } from "../postagem/Postagem.js"
import { Nodo } from "../Repositorio_Perfis/Versao_Lista_Encadeada/RepositorioDePerfis_Lista.js"

export interface IRepositorioDePostagens {
    getPostagens():any
    setPostagens(lista_de_postagens:Postagem[] | Nodo | any):void
    incluir(postagem: Postagem): void
    consultar(id?: number, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] | Nodo | any
    consultarPorID(id:number):Postagem | null
}