import 'mocha';
import {expect} from 'chai';
import {fromArrayToRanges, fromRangesToArray} from '../src/ejer-2';


describe('EJER 2) Compresión de números en rangos', () => {
  describe('fromArrayToRanges', () => {
    it('[] => undefined', () => {
      expect(fromArrayToRanges([])).to.be.equal(undefined);
    });
    it('[5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”', () => {
      expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.be.deep.equal('5_7, 9, 12_14');
    });
    it('[-3, -2, -1, 3, 5, 6, 7] => “-3_-1, 3, 5_7”', () => {
      expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.be.deep.equal('-3_-1, 3, 5_7');
    });
  });
  describe('fromRangesToArray', () => {
    it('"" => undefined', () => {
      expect(fromArrayToRanges([])).to.be.equal(undefined);
    });
    it('“5_7, 9, 12_14” => [5, 6, 7, 9, 12, 13, 14]', () => {
      expect(fromRangesToArray('5_7, 9, 12_14')).to.be.deep.equal([5, 6, 7, 9, 12, 13, 14]);
    });
    it('“-3_-1, 3, 5_7” => [-3, -2, -1, 3, 5, 6, 7]', () => {
      expect(fromRangesToArray('-3_-1, 3, 5_7')).to.be.deep.equal([-3, -2, -1, 3, 5, 6, 7]);
    });
  });
});