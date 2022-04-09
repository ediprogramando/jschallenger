// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// https://www.jschallenger.com/javascript-basics/comparison-strict-equality
function
myFunction (a, b) {

if (a ===b) {
   return true;
} else {
   return false;
}
}

const valores = [
   [2, 3, false],
   [3, 3, true],
   [1, '1', false],
   ['10', '10', true]
];

for (var i = 0; i < valores.length; i++) {
   result = myFunction(valores[i][0], valores [i] [1]);
   console.log("resultado: " + result + ", " + valores[i][2]);
}
