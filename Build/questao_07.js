"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return 4 * this.lado;
    }
}
class Triangulo {
    constructor(base, altura, ladoA, ladoB, ladoC) {
        this.base = base;
        this.altura = altura;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
    calcularPerimetro() {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
const quadrado = new Quadrado(5);
console.log('Quadrado - Área:', quadrado.calcularArea());
console.log('Quadrado - Perímetro:', quadrado.calcularPerimetro());
const triangulo = new Triangulo(4, 3, 3, 4, 5);
console.log('Triângulo - Área:', triangulo.calcularArea());
console.log('Triângulo - Perímetro:', triangulo.calcularPerimetro());
