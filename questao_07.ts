interface FiguraGeometrica {
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
  }
  
  class Triangulo implements FiguraGeometrica {
    base: number;
    altura: number;
    ladoA: number;
    ladoB: number;
    ladoC: number;
  
    constructor(base: number, altura: number, ladoA: number, ladoB: number, ladoC: number) {
      this.base = base;
      this.altura = altura;
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }
  
  const quadrado = new Quadrado(5);
  console.log('Quadrado - Área:', quadrado.calcularArea()); 
  console.log('Quadrado - Perímetro:', quadrado.calcularPerimetro()); 
  
  const triangulo = new Triangulo(4, 3, 3, 4, 5);
  console.log('Triângulo - Área:', triangulo.calcularArea()); 
  console.log('Triângulo - Perímetro:', triangulo.calcularPerimetro()); 

  export {}