import 'mocha';
import {expect} from 'chai';
// import {productTable} from '../src/ejer-1';
import '../src/ejer-1';

describe('EJER 1) Tablas de multiplicar', () => {
  it('n = 2 | Resultado : [[1, 2], [2, 4]]', () => {
    expect(productTable(2)).to.be.eql([[1, 2], [2, 4]]);
  });
  it('n = 3 | Resultado : [[1, 2, 3], [2, 4, 6], [3, 6, 9]]', () => {
    expect(productTable(3)).to.be.eql([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
});