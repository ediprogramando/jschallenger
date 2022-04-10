// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order


function myFunction(a, b, c, d, e, f) {

 return ([a+b-c] * d / e)** f;

}

const valores = [
    [6, 5, 4, 3, 2, 1, 10.5],
    [6, 2, 1, 4, 2, 3, 2744],
    [2, 3, 6, 4, 2, 3, -8]
];

for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0], valores [i][1], valores [i][2], valores[i][3], valores[i][4], valores[i][5]);
    console.log("resultado: " + result + ", " + valores[i][6]);
}
