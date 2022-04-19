// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
//*
function myFunction(a)
{
    function checkPrime(number) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    while (checkPrime(a) == false) {
        a = a + 1;
    }
    return a;
    /*

    if (checkPrime (a)) {
        return a;
    }
    else {
        do {
            a = a + 1;
        }
        while (checkPrime(a) == false);
        return a;
    }*/
}



console.log(myFunction(38));
console.log(myFunction(7));
console.log(myFunction(115));
console.log(myFunction(2000));

/*
myFunction(38)
Expected
41

myFunction(7)
Expected
7

myFunction(115)
Expected
127

myFunction(2000)
Expected
2003

*/