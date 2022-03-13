import 'mocha';
import {expect} from 'chai';
import {moveZeros} from '../src/ejer-6';


describe('EJER 6) Mover zeros al final', () => {
  it('[1, 0, 1, 2, 0, 1, 3] => [1, 1, 2, 1, 3, 0, 0]', () => {
    expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.deep.equal([1, 1, 2, 1, 3, 0, 0]);
  });

  it('[6, 3, 0, 0, 5, 0, 9] => [6, 3, 5, 9, 0, 0, 0]', () => {
    expect(moveZeros([6, 3, 0, 0, 5, 0, 9])).to.be.deep.equal([6, 3, 5, 9, 0, 0, 0]);
  });
});