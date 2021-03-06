// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {

    function getNextChar(str) {
        return String.fromCharCode(str.charCodeAt(0) + 1);
    }  
    
    var a = Array.from(str);
    /*
    for (var i = 0; i < a.length; i++) 
    {
        a[i] = getNextChar(a[i]);
    }*/

    return a.map(getNextChar).join("");

    return a.join("");
}
const valores = [
    ['bnchmf', 'coding'],
    ['bgddrd', 'cheese'],
    ['sdrshmf', 'testing']
 ];
 
 for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0]);
    console.log("resultado: " + result + ", " + valores[i][1]);
 }
 

 console.log(myFunction('bnchmf'));
 console.log(myFunction('bgddrd'));
 console.log(myFunction('sdrshmf'));

/*
function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}
*/



/*
return Array.from(String(a), Number);
*/
