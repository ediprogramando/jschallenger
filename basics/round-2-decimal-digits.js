// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
   
    return Math.round (a * 100 ) / 100;
 }

 const valores = [
    [2.12397, 2.12],
    [3.136, 3.14],
    [1.12397, 1.12],
    [26.1379, 26.14]
];

for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", " + valores[i][1]);
}
