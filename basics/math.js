// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {

   if (a==Math.trunc(a)) {
   //if (a== (a | 0)) {
   return (
      true);
   }
      else { 
   return false;
   } 
}

const valores = [
    [4, true],
    [1.123, false],
    [1048, true],
    [10.48, false]
];

for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", " + valores[i][1]);
}