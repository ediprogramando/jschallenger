// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
   
    return Array.from(String(a), Number);
 }

 const valores = [
    [10, [1, 0]],
    [931, [9, 3, 1]],
    [193278, [1, 9, 3, 2, 7, 8]]
];

for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", [" + valores[i][1] + "]");
}


