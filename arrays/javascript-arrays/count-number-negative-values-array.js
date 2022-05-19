https://www.jschallenger.com/javascript-arrays/count-number-negative-values-array

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction(a) {

   var countnegatives
     let count = 0


  for(i = a.length - 1; i >= 0; i--){
    for(j = a[i].length - 1; j >= 0; j--){
      if(Math.sign(a[i][j]) === -1) {
        count++
      } else {
        break
      }
    }
  }

  // return the amount of negative numbers in grid
  return count
};


console.log(2, myFunction([1,-2,2,-4]));
console.log(0, myFunction([0,9,1]));
console.log(1, myFunction([4,-3,2,1,0]));

/*
myFunction([1,-2,2,-4])
Expected
2
myFunction([0,9,1])
Expected
0
myFunction([4,-3,2,1,0])
Expected
1
*/