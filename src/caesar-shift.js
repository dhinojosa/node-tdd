
const ALPHA_SIZE = 26;
const smallA = 'a'.charCodeAt(0);
const capA   = 'A'.charCodeAt(0);
const smallZ = 'z'.charCodeAt(0);
const capZ   = 'Z'.charCodeAt(0);

const encryptChar = (chr, shift) => {
  const charCode = chr.charCodeAt(0);
  if (chr == '') return chr;
  if ((charCode < smallA || charCode > smallZ) &&
      (charCode < capA   || charCode > capZ)) return chr;
  const temp = charCode + ((shift + ALPHA_SIZE) % ALPHA_SIZE);
  return (temp > smallZ || (temp > capZ && temp < smallA)) ?
           String.fromCharCode(temp - ALPHA_SIZE)
           : String.fromCharCode(temp);
}

const shiftWord = (str, shift) => {
  if (str === null) throw new Error('string cannot be null');
  if (str === undefined) throw new Error('string cannot be undefined');
  return [...str].map(x => encryptChar(x, shift)).join('');
}

const encrypt = (str, shift) => {
  return shiftWord(str, shift);
}

const decrypt = (str, shift) => {
  return shiftWord(str, -shift);
}

export {encrypt, decrypt};
