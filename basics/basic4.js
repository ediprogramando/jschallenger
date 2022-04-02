// https://www.jschallenger.com/javascript-basics/get-first-characters-string-javascript
function myFunction(a) {
   
   return a[0] + a[1]  + a[2];
   
   
}

const sencillo = ['abcdefg', 'abc'];

const valores = [
   ['abcdefg', 'abc'],
   ['1234', '123'],
   ['fgedcba', 'fge']
];

for (var i = 0; i < valores.length; i++) {
   result = myFunction(valores[i][0]);
   console.log("resultado: " + result + ", " + valores[i][1]);
}
console.log();
console.log();
console.log();
var i = 0;
while (i < valores.length)
{
   result = myFunction(valores[i][0]);
   console.log("resultado: " + result + ", " + valores[i][1]);
   i++;
}



/*
function myFunction(a) {
   return a.slice(0, 3);
}
*/
