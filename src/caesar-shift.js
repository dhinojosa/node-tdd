
function isAlpha(str) {
  return str.length === 1 && str.match(/[a-z]/i) !== null;
}

function encode(str, shift) {
  if (str === null) throw new Error('String cannot be null');
  if (str === undefined) throw new Error('String cannot be undefined');
  if (typeof str !== 'string') throw new Error('Invalid Parameter Type. Expected String');
  if (str.length === 0) return str;

  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    const charCode = arr[i].charCodeAt(0);
    let result = charCode;
    if (isAlpha(arr[i])) {
      result = (charCode + shift - 97) % 26 + 97;
    }
    arr[i] = String.fromCharCode(result);
  }
  return arr.join('');
}

export { encode, isAlpha };
