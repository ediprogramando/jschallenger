// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction (a, b)
{
 if (a.indexOf(b) != -1) {
   return b + a;
}  
   else {
   var ab = a + b;
    return ab;
 }
}

const valores = [
    ['cheese', 'cake', 'cheesecake'],
    ['lips', 's', 'slips'],
    ['Java', 'script', 'Javascript'],
    [' thing, therefore I am', 'I', 'I think, therefore I am']
 ];
 
 for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0], valores[i][1]);
    console.log("resultado: " + result + ", " + valores[i][2]);
 }