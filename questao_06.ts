abstract class Funcionario {
    private _salario: number;

    constructor(salario: number) {
        this._salario = salario
    }

    abstract getBonificacao(): number;

    get salario(): number {
        return this._salario;
    }

}

 class Gerente extends Funcionario{
     getBonificacao(): number {
         return 0.4*this.salario
     }
     metodo(){
        return this.salario
     }
        
}

class Diretor extends Funcionario{
    getBonificacao(): number {
       return 0.6*this.salario
    }   
}

class Presidente extends Funcionario{
    getBonificacao(): number {
        return 1*this.salario +1000
    }
}