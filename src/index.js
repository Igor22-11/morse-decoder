const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    
    let words = [];

    for (let i = 0; i < expr.length-1; i += 10) {
        words.push(expr.substring(i, i+10));
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i] === '**********') {
            words[i] = ' ';
            continue;
        }

        let morz = '';
        for (let j = 0; j < words[i].length; j += 2) {
            if (words[i].substring(j,j+2) === '10') {
                morz += '.';
            } else if (words[i].substring(j,j+2) === '11') {
                morz += '-';
            }
        }

        for (const [key, value] of Object.entries(MORSE_TABLE)) {
            if (key === morz) {
                words[i] = value;
            }
        }
    }
    return words.join('');
}

module.exports = {
    decode
}
