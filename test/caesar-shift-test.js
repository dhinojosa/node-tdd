import {chai,
        expect,
       } from 'chai';
import {encrypt, decrypt} from '../src/caesar-shift.js';

describe('caesar encrypt', () => {
   it('should encrypt an empty string with shift of 0', () => {
        expect(encrypt('', 0)).to.be.equal('');
   });
   it('should encrypt an empty string with shift of 4', () => {
        expect(encrypt('', 4)).to.be.equal('');
   });
   it('should encrypt a single letter string with shift of 0', () => {
        expect(encrypt('a', 0)).to.be.equal('a');
   });
   it('should encrypt a single letter string with shift of 1', () => {
        expect(encrypt('a', 1)).to.be.equal('b');
   });
   it('should encrypt a single zeti string with shift of 1', () => {
        expect(encrypt('z', 1)).to.be.equal('a');
   });
   it('should encrypt a single zeti string with shift of 27', () => {
        expect(encrypt('z', 27)).to.be.equal('a');
   });
   it('should encrypt a single zeti string with shift of 53', () => {
        expect(encrypt('z', 53)).to.be.equal('a');
   });
   it('should encrypt more than one character', () => {
       expect(encrypt('ab', 1)).to.be.equal('bc');
   });
   it('should encrypt more than one character', () => {
       expect(encrypt('Z', 1)).to.be.equal('A');
   });
   it ('should throw an error with a null with msg', () => {
       expect(() => encrypt(null, 0)).to.throw(Error, 'string cannot be null');
   });
   it ('should throw an error with a undefined with msg', () => {
       expect(() => encrypt(undefined, 0)).to.throw(Error, 'string cannot be undefined');
   });
   it('should encrypt a single special character shift of 4', () => {
      expect(encrypt('@', 4)).to.be.equal('@');
   });
});

describe('caesar decrypt', () => {
  it('should decrypt an empty string with shift of 0', () => {
       expect(decrypt('', 0)).to.be.equal('');
  });
  it('should decrypt a single letter string with shift of 1', () => {
       expect(decrypt('b', 1)).to.be.equal('a');
  });
  it('should decrypt a single letter string with shift of 0', () => {
       expect(decrypt('c', 0)).to.be.equal('c');
  });
  it('should decrypt an a with shift of 1', () => {
       expect(decrypt('a', 1)).to.be.equal('z');
  });
  it('should decrypt an a with shift of 4', () => {
       expect(decrypt('a', 4)).to.be.equal('w');
  });
  it('should decrypt an cap A with shift of 4', () => {
       expect(decrypt('A', 4)).to.be.equal('W');
  });
  it('should decrypt an cap A with shift of 26', () => {
       expect(decrypt('A', 26)).to.be.equal('A');
  });
  it('should decrypt an cap A with shift of 52', () => {
       expect(decrypt('A', 52)).to.be.equal('A');
  });
  it('should decrypt more than one character', () => {
      expect(decrypt('ab', 1)).to.be.equal('za');
  });
  it ('should throw an error with a null with msg', () => {
      expect(() => decrypt(null, 0)).to.throw(Error, 'string cannot be null');
  });
  it ('should throw an error with a undefined with msg', () => {
      expect(() => encrypt(undefined, 0)).to.throw(Error, 'string cannot be undefined');
  });
});
