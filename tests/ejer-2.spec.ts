import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges} from '../src/ejer-2';


describe('EJER 2) Compresión de números en rangos', () => {
  it('[] => undefined', () => {
    expect(fromArrayToRanges([])).to.be.equal(undefined);
  });
  it('[5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”', () => {
    expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.be.equal('5_7, 9, 12_14');
  });
});