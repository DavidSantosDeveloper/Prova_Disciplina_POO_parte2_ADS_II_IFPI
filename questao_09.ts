import {FiguraGeometrica,IComparavel,Quadrado,Triangulo} from "./questao_08.js"

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