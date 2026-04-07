import { add } from 'mathjs';

export function classificarTriangulo(a, b, c) {
    const existe = (add(a, b) > c) && (add(a, c) > b) && (add(b, c) > a);

    if (!existe || a <= 0 || b <= 0 || c <= 0) {
        return "none";
    }

    if (a === b && b === c) {
        return "equilateral";
    } else if (a === b || a === c || b === c) {
        return "isosceles";
    } else {
        return "scalene";
    }
}