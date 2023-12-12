import { Perfil } from "../perfil/Perfil.js";
import {Nodo} from "../Repositorio_Perfis/Versao_Lista_Encadeada/RepositorioDePerfis_Lista.js"

export interface IRepositorioDePerfis {
    getTamanho(): number;
    getPerfis():any
    setPerfis(lista_de_perfis:Perfil[] | Nodo | null | any):void
    incluir(perfil: Perfil): void
    consultarPorNome(nome_procurado: string):Perfil | null
    consultarPorId(id: number): Perfil | null
    consultar(id?: number, nome?: string, email?: string): Perfil | null
}

