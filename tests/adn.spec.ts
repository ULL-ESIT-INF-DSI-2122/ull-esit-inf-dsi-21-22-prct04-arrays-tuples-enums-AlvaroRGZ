import 'mocha';
import {expect} from 'chai';
import {adnToArn, arnToAdn} from '../src/adnToArn';

describe ('Convierte cadenas de adn en arn y viceversa', () => {
  it('ADN TO ARN', () => {
    const cadenas: string[] = ['ACGTGAT', 'TGCACCTTGA', 'ACGT'];
    expect(adnToArn(cadenas)).to.be.eql(['UGCACUA', 'ACGUGGAACU', 'UGCA']);
  });
  it('Devuelve undefined si hay una cadena invalida', () => {
    const arn: string[] = ['ACBTGAT', 'TGCACCTTGA', 'ACGT'];
    expect(adnToArn(arn)).to.be.eql(undefined);
  });
})