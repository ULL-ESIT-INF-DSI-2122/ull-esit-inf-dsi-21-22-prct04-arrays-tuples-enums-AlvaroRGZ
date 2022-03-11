import 'mocha';
import {expect} from 'chai';
import {productTable} from '../src/ejer-1';


describe('EJER 1) Tablas de multiplicar', () => {
  it('n = 0 | Resultado : undefined', () => {
    expect(productTable(0)).to.be.deep.equal(undefined);
  });
  it('n = 1 | Resultado : [[1]]', () => {
    expect(productTable(1)).to.be.deep.equal([[1]]);
  });
  it('n = 2 | Resultado : [[1, 2], [2, 4]]', () => {
    expect(productTable(2)).to.be.deep.equal([[1, 2], [2, 4]]);
  });
  it('n = 3 | Resultado : [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
    expect(productTable(3)).to.deep.equal([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
  it('n = 4 | Resultado : [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]', () => {
    expect(productTable(4)).to.deep.equal([[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]);
  });
});