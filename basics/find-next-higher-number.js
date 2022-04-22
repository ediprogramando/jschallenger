// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction(x, y) {

    function isdivisible(x, y) {
        if (x % y == 0) {
            return true;
        } else {
            return false;
        }
    }

    while (!isdivisible(x, y)) {
        //x = (x + y);
        x = x + 1
    }
return x;
}
        

console.log(myFunction(1, 23));
console.log(myFunction(23, 23));
console.log(myFunction(7, 3));
console.log(myFunction(-5, 7));
    
/*
myFunction(1, 23)
Expected
23
myFunction(23, 23)
Expected
23
myFunction(7, 3)
Expected
9
myFunction(-5, 7)
Expected
0
*/

