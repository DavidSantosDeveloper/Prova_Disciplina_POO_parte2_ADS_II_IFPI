import {Perfil} from '../../perfil/Perfil.js'
import {IRepositorioDePerfis} from "../../interfaces/IRepositorioDePerfis.js"
import { Perfil_Inexistente_Error } from '../../Excecoes/Excecoes.js';
export {RepositorioDePerfisArray}

class RepositorioDePerfisArray implements IRepositorioDePerfis {
    private _perfis: Perfil[]=[];
    constructor(perfis:Perfil[]){
        this._perfis=perfis
    }
    getTamanho(): number {
        return this._perfis.length
    }

    getPerfis(){
        return this._perfis
    }
    setPerfis(lista_de_perfis:Perfil[]){
        this._perfis=lista_de_perfis
    }
    incluir(perfil: Perfil): void{
        this._perfis.push(perfil)
    }
    consultarPorNome(nome_procurado: string){
        let resultado_da_consulta:Perfil | null=null
        for (const perfil_atual of this._perfis) {
            if(perfil_atual.getNome()==nome_procurado){
                resultado_da_consulta=perfil_atual
            }
        }
        if(resultado_da_consulta==null){
            throw new Perfil_Inexistente_Error("Perfil inexistente!")
        }
        return resultado_da_consulta
    }
    consultarPorId(id: number){
        let resultado_da_consulta: Perfil | null=null;
        for (const perfil_atual of this._perfis) {
            if(perfil_atual.getId()==id){
                resultado_da_consulta=perfil_atual
            }
        }

        if(resultado_da_consulta==null){
            throw new Perfil_Inexistente_Error("Perfil inexistente!")
        }
        return resultado_da_consulta
    }
    consultar(id?: number, nome?: string, email?: string): Perfil | null{
        let resultado_da_consulta: Perfil | null=null;
        if(id!=undefined){
            for (const perfil_atual of this._perfis) {
                if(perfil_atual.getId()==id){
                    resultado_da_consulta=perfil_atual
                }
            }
          //  resultado_da_consulta=this._perfis.filter((perfil_atual)=>perfil_atual.getId()==id)[0]
        }
        else if(nome!=undefined){
            for (const perfil_atual of this._perfis) {
                if(perfil_atual.getNome()==nome){
                    resultado_da_consulta=perfil_atual
                }
            }
        }
        else if(email!=undefined){
            for (const perfil_atual of this._perfis) {
                if(perfil_atual.getNome()==nome){
                    resultado_da_consulta=perfil_atual
                }
            }
         
        }
        
        if(resultado_da_consulta==null){
            throw new Perfil_Inexistente_Error("Perfil inexistente!")
        }

        return resultado_da_consulta

    }


}
   