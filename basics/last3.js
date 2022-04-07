// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a) {

return  a.slice(0, -3);
}
const valores = [
    ['abcdefg', 'abcd'],
    ['1234', '1'],
    ['fgedcba', 'fged']
 ];
 
 for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", " + valores[i][1]);
 }
 
