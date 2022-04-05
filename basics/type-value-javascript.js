// Write a function that takes a value as argument
// Return the type of the value

// https://www.jschallenger.com/javascript-basics/type-value-javascript
function myFunction(a) {
   
   return typeof(a);
}


/*
myFunction(1)
Expected
'number'

myFunction(false)
Expected
'boolean'

myFunction({})
Expected
'object'

myFunction(null)
Expected
'object'

myFunction('string')
Expected
'string'

myFunction(['array'])
Expected
'object'
*/

const valores = [
   [1, 'number'],
   [false, 'boolean'],
   [{}, 'object'],
   [null, 'object'],
   ['string', 'string'],
   [['array'], 'object']
];


for (var i = 0; i < valores.length; i++) {
   result = myFunction(valores[i][0]);
   console.log("resultado: " + result + ", " + valores[i][1]);
}


/*
console.log (typeof('1'));
console.log (typeof('false'));
console.log (typeof('{}'));
console.log (typeof('string'));
console.log (typeof('array'));
*/