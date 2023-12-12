interface IComparavel {
    comparar(forma: FiguraGeometrica): number;
  }
  
  interface FiguraGeometrica extends IComparavel {
    calcularArea(): number;
    calcularPerimetro(): number;
  }
  
  class Quadrado implements FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      this.lado = lado;
    }
  
    calcularArea(): number {
      return this.lado * this.lado;
    }
  
    calcularPerimetro(): number {
      return 4 * this.lado;
    }
  
    comparar(forma: FiguraGeometrica): number {
      const minhaArea = this.calcularArea();
      const areaForma = forma.calcularArea();
  
      if (minhaArea < areaForma) {
        return -1;
      } else if (minhaArea > areaForma) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  class Triangulo implements FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  
    calcularPerimetro(): number {
      return -1;
    }
  
    comparar(forma: FiguraGeometrica): number {
      const minhaArea = this.calcularArea();
      const areaForma = forma.calcularArea();
  
      if (minhaArea < areaForma) {
        return -1;
      } else if (minhaArea > areaForma) {
        return 1;
      } else {
        return 0;
      }
    }
}
  

const quadrado = new Quadrado(5);
const outroQuadrado = new Quadrado(6);
  
console.log('Comparação entre quadrados:');
console.log(quadrado.comparar(outroQuadrado));
console.log(outroQuadrado.comparar(quadrado)); 
  
const triangulo = new Triangulo(4, 3);
const outroTriangulo = new Triangulo(3, 4);
  
console.log('Comparação entre triângulos:');
console.log(triangulo.comparar(outroTriangulo)); 
console.log(outroTriangulo.comparar(triangulo)); 


export {FiguraGeometrica,IComparavel,Quadrado,Triangulo}