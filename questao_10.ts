
interface Tributavel{
   calcularTributos():number
}


class Conta {
    private _nome:string
    private _saldo:number

    constructor(nome:string,saldo:number){
        this._nome=nome
        this._saldo=saldo
    }
   get nome():string{
       return this._nome
   }
   get saldo():number{
       return this._saldo
   }

}


class ContaCorrente extends Conta implements Tributavel{
    calcularTributos(): number {
       return 0.1*this.saldo
    }

}

class SeguroDeVida implements Tributavel{
    calcularTributos(): number {
        return 50;
    }

}

let contaC=new ContaCorrente("davi",1000)

