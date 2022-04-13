// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
   
    if (a < b) {
       return a / b;
    }
      else {
       return a*b;
    }
 }

 const valores = [
    [10, 100, 0.1],
    [90, 45, 4050],
    [8, 20, 0.4],
    [2, 0.5, 1]
 ];
 
 for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0], valores[i][1]);
    console.log("resultado: " + result + ", " + valores[i][2]);
 }

 