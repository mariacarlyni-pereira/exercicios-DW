import { add, subtract, multiply, divide } from 'mathjs';

export function calcular(n1, n2, operador) {
    switch (operador) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return "Operador inválido!";
    }
}