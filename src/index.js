const { compareIdentifiers } = require("semver");

const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '**********': ' '
};

function decode(expr) {
  // write your solution here
  const morse = { '10': '.', '11': '-' };
  let masStr = [];

  const cod = (el) => {
    if (el === '**********') return '**********'
    let res = '';
    for (let i = 0; i < 10; i += 2) {
        if (el.slice(i, i + 2) in morse) res = res + morse[el.slice(i, i + 2)];
    }
    return res;
  }

  for (let i = 0; i < expr.length; i += 10)
    masStr.push(expr.slice(i, i + 10));
  return masStr.map(el => cod(el)).map(el => MORSE_TABLE[el]).join('');
}

module.exports = {
  decode
}
