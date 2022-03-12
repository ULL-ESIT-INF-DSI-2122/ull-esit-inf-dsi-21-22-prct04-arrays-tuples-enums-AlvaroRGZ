import 'mocha';
import {expect} from 'chai';
import {decodeResistor, color} from '../src/ejer-3';


describe('EJER 3) Decodificar resistencias', () => {
  it('marron-verde => 15', () => {
    expect(decodeResistor(color.marron, color.verde)).to.be.equal(15);
  });
  it('marron-verde-violeta => 15', () => {
    expect(decodeResistor(color.marron, color.verde, color.violeta)).to.be.equal(15);
  });
});