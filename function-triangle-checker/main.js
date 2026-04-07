import { classificarTriangulo } from './lib.js';

const entradas = [
    [2, 2, 2],       // equilateral
    [10, 10, 10],    // equilateral
    [3, 4, 4],       // isosceles
    [4, 3, 4],       // isosceles
    [4, 4, 3],       // isosceles
    [10, 10, 2],     // isosceles
    [3, 4, 5],       // scalene
    [10, 11, 12],    // scalene
    [5, 4, 2],       // scalene
    [0, 0, 0],       // none
    [3, 4, -5],      // none
    [1, 1, 3],       // none
    [2, 4, 2]        // none
];

console.log("Entrada \t\t Saída");
console.log("------------------------------");

entradas.forEach(lados => {
    const resultado = classificarTriangulo(lados[0], lados[1], lados[2]);
    console.log(`${lados.join(', ')} \t\t ${resultado}`);
});