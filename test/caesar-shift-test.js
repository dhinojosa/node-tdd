import {chai,
        expect,
       } from 'chai';
import encrypt from '../src/caesar-shift.js';

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
});
