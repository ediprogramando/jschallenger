// https://www.jschallenger.com/javascript-basics/get-nth-character-string-javascript

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function myFunction (a, n)
{
    return a [n - 1];
}

/*
myFunction('abcd',1)
Expected
'a'

myFunction('zyxbwpl',5)
Expected
'w'

myFunction('gfedcba',3)
Expected
'e'

*/

const valores = [
    ['abcd', 1, 'a'],
    ['zyxbwpl', 5, 'w'],
    ['fgedcba', 3, 'e']
 ];

 for (var i = 0; i < valores.length; i++)
 { result = myFunction(valores [i] [0], valores [i] [1]); 
    console.log ("resultado: " + result + " , " + valores [i] [2]);


}
 
