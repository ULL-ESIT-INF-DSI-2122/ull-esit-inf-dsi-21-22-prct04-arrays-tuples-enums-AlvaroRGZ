import 'mocha';
import {expect} from 'chai';
import {PointND} from '../src/ejer-9';


describe('EJER 9) Puntos bi-dimensionales', () => {
  const p1 = new PointND([3, 5, 6]);
  const p2 = new PointND([1, 2, 3]);
  it('PointND([3, 5, 6]) + PointND([1, 2]) => undefined', () => {
    expect(p1.sum(new PointND([1, 2]))).to.be.deep.equal(undefined);
  });
  it('PointND([3, 5, 6]) + PointND([1, 2, 3]) => PointND([4, 7, 9])', () => {
    expect(p1.sum(p2)).to.be.deep.equal(new PointND([4, 7, 9]));
  });
  it('PointND([3, 5, 6]) - PointND([1, 2, 3]) => PointND([2, 3, 3])', () => {
    expect(p1.diff(p2)).to.be.deep.equal(new PointND([2, 3, 3]));
  });
  it('PointND([3, 5, 6]) * 3 => PointND([9, 15, 18])', () => {
    expect(p1.product(3)).to.be.deep.equal(new PointND([9, 15, 18]));
  });
  it('PointND([3, 5, 6]) euclidean PointND([1, 2, 3]) => 8', () => {
    expect(p1.euclidean(p2)).to.be.deep.equal(8);
  });
});