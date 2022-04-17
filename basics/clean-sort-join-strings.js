// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b) {

    const words = [
        'Javascript', 'Countryside', 'Downtown'
    ];
    const input = (a + b).toLowerCase();
    let i = 0;
    //*
    while (i < words.length) {
        let s = words[i];
        let j = 0;
        while (j < s.length) {
            if (input.indexOf(s[j].toLowerCase()) == -1) {
                break;
            }
            j++;
        }
        //if ( j <= s.length)
        if (!(j < s.length)) {
            return words[i];
        }
        i++;
    }//*/

    return '';
}


/*
- cambiar whiles por for
- que no use break usa otro para romper el ciclo
- rescribir el algorithmo para que replace(), split(), slice()
- Usar un algoritmo basado en sort
        Array.from('Javascript'.toLowerCase()).sort()
        Array.from('javatpi%rcs'.toLowerCase()).sort()
        
*/

/*
Javascript
Countryside
Downtown
*/
console.log(myFunction('java', 'tpi%rcs'));
console.log(myFunction('c%ountry', 'edis'));
console.log(myFunction('down', 'nw%ot'));