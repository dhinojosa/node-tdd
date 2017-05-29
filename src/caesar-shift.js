
const ALPHA_SIZE = 26;

const encryptChar = (chr, shift) => {
  const temp = chr.charCodeAt(0) + (shift % ALPHA_SIZE);
  return temp > 122 ? String.fromCharCode(temp - ALPHA_SIZE) : String.fromCharCode(temp);
}

const encrypt = (str, shift) => {
  if (!str) return str;
  return str.split('').map((x) => encryptChar(x, shift)).join('');
}

export default encrypt;
