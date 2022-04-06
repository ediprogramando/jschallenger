// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction(a){

    return a.slice(3)
}
    
    
    
const valores = [
    ['abcdefg', 'defg'],
    ['1234', '4'],
    ['fgedcba', 'dcba']
];

for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", " + valores[i][1]);
}


