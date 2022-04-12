// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

function myFunction(a, b) {
   
    return b.split(a).length -1;
 }

 const valores = [
    ['m', 'how many times does the character occur in this sentence?', 2],
    ['h', 'how many times does the character occur in this sentence?', 4],
    ['?', 'how many times does the character occur in this sentence?', 1],
    ['z', 'how many times does the character occur in this sentence?', 0]
 ];
 
 for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0], valores [i] [1]);
    console.log("resultado: " + result + ", " + valores[i][2]);
 }

