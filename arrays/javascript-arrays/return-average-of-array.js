https://www.jschallenger.com/javascript-arrays/return-average-of-array

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {

    var sum = 0;
    for( var i = 0; i < arr.length; i++ ){
        sum += ( arr[i]); 
    }
    
   return sum/arr.length;
   // return arr.reduce((acc, cur) => acc + cur, 0) / arr.length

}

console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000]));
console.log(myFunction([-50,0,50,200]));

/*
myFunction([10,100,40])
Expected
50
myFunction([10,100,1000])
Expected
370
myFunction([-50,0,50,200])
Expected
50
*/