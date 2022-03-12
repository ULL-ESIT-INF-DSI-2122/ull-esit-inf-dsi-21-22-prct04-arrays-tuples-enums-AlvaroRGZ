import 'mocha';
import {expect} from 'chai';
import {paseito} from '../src/ejer-x';

describe('EJER 10) Paseitos por Cartesia', () => {
  it('("n", "s", "e", "o") => true', () => {
    expect(paseito(['n', 's', 'e', 'o'])).to.be.deep.equal(true);
  });
  it('("n", "s", "e", "o", "n") => false', () => {
    expect(paseito(['n', 's', 'e', 'o', 'n'])).to.be.deep.equal(false);
  });
  it('("n", "s", "e", "o", "d") => undefined', () => {
    expect(paseito(['n', 's', 'e', 'o', 'n', 'd'])).to.be.deep.equal(undefined);
  });
});