import 'mocha';
import {expect} from 'chai';
import {meanAndConcatenate} from '../src/ejer-5';


describe('EJER 5) Calcular la media y concatenar cadenas', () => {
  it(' ["u", 6, "d", 1, "i", "w", 6, "s", "t", 4, "a", 6, "g", 1, 2, "w", 8, "o", 2, 0] => [3.6, "udiwstagwo"]', () => {
    expect(meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0])).to.be.deep.equal([3.6, 'udiwstagwo']);
  });
});