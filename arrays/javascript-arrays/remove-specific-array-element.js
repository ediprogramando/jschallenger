// https://www.jschallenger.com/javascript-arrays/remove-specific-array-element

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array
function myFunction(a, b) {

var resultado = [];
  for (var i = 0; i < a.length; i += 1) {
    if (a[i] !== b) {
      resultado.push(a[i]);
    } 
  }
  return resultado;
}
console.log([1, 3], myFunction([1,2,3], 2));
console.log([1, 2], myFunction([1,2,'2'], '2'));
console.log(['2', 1], myFunction([false,'2',1], false));
console.log([2, '2'], myFunction([1,2,'2',1], 1));

/*
myFunction([1,2,3], 2)
Expected
[1, 3]
myFunction([1,2,'2'], '2')
Expected
[1, 2]
myFunction([false,'2',1], false)
Expected
['2', 1]
myFunction([1,2,'2',1], 1)
Expected
[2, '2']
*/