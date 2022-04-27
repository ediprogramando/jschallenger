// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction(a) {

   return [a[0], a[1], a[2]];
}

console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));

/*
myFunction([1,2,3,4])
Expected
[1,2,3]
myFunction([5,4,3,2,1,0])
Expected
[5,4,3]
myFunction([99,1,1])
Expected
[99,1,1]
*/