// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

function myFunction(a) {
   
    if (a % 2 === 0) {
       return true; }
     else { 
       return false;}
    
 }

 const valores = [
    [10, true],
    [-4, true],
    [5, false],
    [-111, false]
 ];
 
 for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", " + valores[i][1]);
 }
 
