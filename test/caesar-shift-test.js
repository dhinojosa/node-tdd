import { describe, it } from 'mocha';
import { expect } from 'chai';
import { encode, isAlpha } from '../src/caesar-shift';

describe('isAlpha', () => {
  it("should take an 'a' and return true", () => {
    expect(isAlpha('a')).to.be.equal(true);
  });
  it("should take an '1' and return false", () => {
    expect(isAlpha('1')).to.be.equal(false);
  });
});
describe('Encode', () => {
  it('should take a empty string and a shift of 0 and return empty string', () => {
    expect(encode('', 0)).to.be.equal('');
  });
  it('should take a string with a and a shift of 0 and return the same string', () => {
    expect(encode('a', 0)).to.be.equal('a');
  });
  it('should take a string with a and a shift of 1 and return a b', () => {
    expect(encode('a', 1)).to.be.equal('b');
  });
  it('should not take a undefined regardless of shift', () => {
    expect(() => encode(undefined, 1)).to.throw(Error, 'String cannot be undefined');
  });
  it('should not take a null regardless of shift', () => {
    expect(() => encode(null, 1)).to.throw(Error, 'String cannot be null');
  });
  it('should not take a number regardless of shift', () => {
    expect(() => encode(10, 1)).to.throw(Error, 'Invalid Parameter Type. Expected String');
  });
  it('should take a string of ab and with a shift of 1 return bc', () => {
    expect(encode('ab', 1)).to.be.equal('bc');
  });
  it('should take a string of 2 and with a shift of 1 return 2', () => {
    expect(encode('2', 1)).to.be.equal('2');
  });
  it('should take a string of z and with a shift of 1 return a', () => {
    expect(encode('z', 1)).to.be.equal('a');
  });
  it('should take a string of a and with a shift of -1 return z', () => {
    expect(encode('a', -1)).to.be.equal('z');
  });
});
