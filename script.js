let frase = 'am ma';

if (frase.split('').filter( value => value != ' ').join('') === 
frase.split('').filter( value => value != ' ').reverse().join('')){
    console.log(frase + ' é um palíndromo\n');
}else{
    console.log(frase + ' não é um palíndromo\n');
}

let cas = 'asa'
verificarPalindromo('asa');
function verificarPalindromo(string) {
    if (!string) return;
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
            return console.log('não é um palíndromo');
        }
    }
    return console.log(cas + ' é um palíndromo');
}
