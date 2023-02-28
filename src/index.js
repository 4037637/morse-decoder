const MORSE_TABLE = {
    ' ':      ' ',  
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

function decode(aa) {
  let arr = aa.match(/.{1,10}/g);
  // console.log(arr)
  let arrSum = ''
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replaceAll("00", "");
    arr[i] = arr[i].replaceAll("10", ".");
    arr[i] = arr[i].replaceAll("11", "-");
    arr[i] = arr[i].replaceAll("**********", " ");
  let mm = arr[i];
    arrSum += MORSE_TABLE[mm]

 }
return arrSum  

}

module.exports = {
    decode
}