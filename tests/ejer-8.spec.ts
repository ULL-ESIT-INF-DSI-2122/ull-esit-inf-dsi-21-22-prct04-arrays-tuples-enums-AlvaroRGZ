import 'mocha';
import {expect} from 'chai';
import {Point2D} from '../src/ejer-8';


describe('EJER 8) Puntos bi-dimensionales', () => {
  const p1 = new Point2D(3, 5);
  const p2 = new Point2D(1, 2);
  it('Point2D(3,5) + Point2D(1,2) => Point2D(4,7)', () => {
    expect(p1.sum(p2)).to.be.deep.equal(new Point2D(4, 7));
  });
  it('Point2D(3,5) - Point2D(1,2) => Point2D(2,3)', () => {
    expect(p1.diff(p2)).to.be.deep.equal(new Point2D(2, 3));
  });
  it('Point2D(3,5) * 3 => Point2D(9,15)', () => {
    expect(p1.pruduct(3)).to.be.deep.equal(new Point2D(9, 15));
  });
  it('Point2D(3,5) euclidean Point2D(1, 2) => 5', () => {
    expect(p1.euclidean(p2)).to.be.deep.equal(5);
  });
});