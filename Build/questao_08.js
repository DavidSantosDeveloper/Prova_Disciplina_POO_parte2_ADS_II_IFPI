"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = exports.Quadrado = void 0;
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
    comparar(forma) {
        const minhaArea = this.calcularArea();
        const areaForma = forma.calcularArea();
        if (minhaArea < areaForma) {
            return -1;
        }
        else if (minhaArea > areaForma) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
exports.Quadrado = Quadrado;
class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
    calcularPerimetro() {
        return -1;
    }
    comparar(forma) {
        const minhaArea = this.calcularArea();
        const areaForma = forma.calcularArea();
        if (minhaArea < areaForma) {
            return -1;
        }
        else if (minhaArea > areaForma) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
exports.Triangulo = Triangulo;
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
