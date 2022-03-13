import 'mocha';
import {expect} from 'chai';
import {arnToAdn} from '../src/adnToArn';

describe('Convierte cadenas de ARN en ADN y viceversa', () => {
  it('ARN TO ADN', () => {
    const cadenas: string[] = ['ACGTGAT', 'TGCACCTTGA', 'ACGT'];
    expect(arnToAdn(cadenas)).to.be.eql(['UGCACUA', 'ACGUGGAACU', 'UGCA']);
  });
  it('Devuelve undefined si hay una cadena invalida', () => {
    const arn: string[] = ['ACBTGAT', 'TGCACCTTGA', 'ACGT'];
    expect(arnToAdn(arn)).to.be.eql(undefined);
  });
});