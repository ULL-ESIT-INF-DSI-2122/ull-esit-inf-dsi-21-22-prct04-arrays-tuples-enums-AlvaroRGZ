import 'mocha';
import {expect} from 'chai';
import {meshArray} from '../src/ejer-4';


describe('EJER 4) Palabras encadenadas en array', () => {
  it('[“allow”, “lowering”, “ringmaster”, “terror”] => "lowringter"', () => {
    expect(meshArray(['allow', 'lowering', 'ringmaster', 'terror'])).to.be.equal('lowringter');
  });
  it('[“kingdom”, “dominator”, “notorious”, “usual”, “allegory”]  => “Error al encadenar”', () => {
    expect(meshArray(['kingdom', 'dominator', 'notorious', 'usual', 'allegory'])).to.be.equal('Error al encadenar');
  });
});