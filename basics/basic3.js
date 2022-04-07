// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {

   return str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
}
const valores = [
   ['abcdefg', 'efg'],
   ['1234', '234'],
   ['fgedcba', 'cba']
];

for (var i = 0; i < valores.length; i++) {
   result = myFunction(valores[i][0]);
   console.log("resultado: " + result + ", " + valores[i][1]);
}

