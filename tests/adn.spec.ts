import 'mocha';
import {expect} from 'chai';
import {adnToArn, arnToAdn} from '../src/adnToArn';

describe('Convierte cadenas de ADN en ARN y viceversa', () => {
  it('ADN TO ARN', () => {
    const cadenas: string[] = ['ACGTGAT', 'TGCACCTTGA', 'ACGT'];
    expect(adnToArn(cadenas)).to.be.eql(['UGCACUA', 'ACGUGGAACU', 'UGCA']);
  });
  it('Devuelve undefined si hay una cadena invalida', () => {
    const arn: string[] = ['ACBTGAT', 'TGCACCTTGA', 'ACGT'];
    expect(arnToAdn(arn)).to.be.eql(undefined);
  });
});