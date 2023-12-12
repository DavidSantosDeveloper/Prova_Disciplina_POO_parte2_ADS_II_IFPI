interface Tributavel {
    calcularTributos(): number;
}

class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo: number) {
        this._nome = nome;
        this._saldo = saldo;
    }

    get nome(): string {
        return this._nome;
    }

    get saldo(): number {
        return this._saldo;
    }
}

class ContaCorrente extends Conta implements Tributavel {
    calcularTributos(): number {
        return 0.1 * this.saldo;
    }
}

class SeguroDeVida implements Tributavel {
    calcularTributos(): number {
        return 50;
    }
}

class AuditoriaInterna {
    private tributaveis: Tributavel[] = [];

    adicionar(tributavel: Tributavel): void {
        this.tributaveis.push(tributavel);
    }

    calcularTributos(): number {
        let totalTributos = 0;
        for (const tributavel of this.tributaveis) {
            totalTributos += tributavel.calcularTributos();
        }
        return totalTributos;
    }
}

class TesteAuditoria {
    static executarTeste(): void {
        const auditoria = new AuditoriaInterna();

        const contaC = new ContaCorrente("davi", 1000);
        const seguroVida = new SeguroDeVida();

        auditoria.adicionar(contaC);
        auditoria.adicionar(seguroVida);

        const totalTributos = auditoria.calcularTributos();
        console.log(`Total de tributos a pagar: ${totalTributos}`);
    }
}
TesteAuditoria.executarTeste();