abstract class FiguraGeometrica{
    quantidade_de_lados:number;

    constructor(quantidade_de_lados:number){
        this.quantidade_de_lados=quantidade_de_lados
    }

    abstract perimetro():number
    abstract area():number
}


class Quadrado extends FiguraGeometrica{
    base:number
    altura:number
    constructor(quantidade_de_lados:number,base:number, altura:number){
           super(quantidade_de_lados)
           this.base=base
           this.altura=altura
    }

    perimetro(): number {
        return 2*this.base+2*this.altura
    }
    area(): number{
          return this.base*this.altura
    }
}
class Retangulo extends FiguraGeometrica{
    base:number
    altura:number
    constructor(quantidade_de_lados:number,base:number, altura:number){
           super(quantidade_de_lados)
           this.base=base
           this.altura=altura
    }

    perimetro(): number {
        return 2*this.base+2*this.altura
    }
    area(): number{
          return this.base*this.altura
    }
}

class TrianguloEquilatero extends FiguraGeometrica{
    lado1:number
    lado2:number
    lado3:number
    constructor(quantidade_de_lados:number,valor_dos_lados:number){
           super(quantidade_de_lados)
           this.lado1=valor_dos_lados
           this.lado2=valor_dos_lados
           this.lado3=valor_dos_lados
    }

    perimetro(): number {
        return 3*this.lado1
    }
    area(): number{
          return Math.floor(    (this.lado1**2) * (3**(0.5) )/4    )
    }
}

let quadrado=new Quadrado(4,1,2)
console.log(`____________Quadrado_____________________`)
console.log(`Perimetro:${quadrado.perimetro()}`)
console.log(`Area: ${quadrado.area()}`)
let retangulo=new Retangulo(4,2,4)
console.log(`____________Retangulo_____________________`)
console.log(`Perimetro:${retangulo.perimetro()}`)
console.log(`Area: ${retangulo.area()}`)
let triangulo=new TrianguloEquilatero(3,4)
console.log(`____________TrianguloEquilatero___________________`)
console.log(`Perimetro:${triangulo.perimetro()}`)
console.log(`Area: ${triangulo.area()}`)
