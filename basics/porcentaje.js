// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

function myFunction(a, b) {
   
    return (a*b)/100 ;
 }
 const valores = [
    [100 , 50,  50],
    [10, 1,  0.1],
    [500, 25, 125]
];

for (var i = 0; i < valores.length; i++) {
    result = myFunction(valores[i][0], valores [i][1]);
    console.log("resultado: " + result + ", " + valores[i][2]);
}