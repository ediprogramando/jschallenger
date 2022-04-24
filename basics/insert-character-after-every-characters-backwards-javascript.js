// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b){

    //arr = Array.from(a);
    //arr[arr.length -1] = b;
    //return arr.join("");
    arr = [];
    input = Array.from(a);

    var i = a.length - 4;
    while (i >= 0) {
        //console.log('iteracion')
        //console.log(input.slice(i + 1, i + 4))
        //console.log('***');
        //console.log(arr)
        arr = [].concat(input.slice(i + 1, i + 4), b, arr);
        //console.log('***');
        //console.log(arr)
        i -= 3;
    }

    //*
    var sobrantes = a.length % 3;
    if (sobrantes != 0) 
    {
        arr = [].concat(input.slice(0, sobrantes), b, arr);
    }//*/
    


    return arr.join("");
    //return a.slice(0, -1) + b;


return a
}

console.log(myFunction('1234567', '.'));
console.log(myFunction('abcde', '$'));
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w'));

/*
myFunction('1234567','.')
Expected
'1.234.567' 

myFunction('abcde','$')
Expected
'ab$cde'

myFunction('zxyzxyzxyzxyzxyz','w')
Expected
'zwxyzwxyzwxyzwxyzwxyz'
*/



