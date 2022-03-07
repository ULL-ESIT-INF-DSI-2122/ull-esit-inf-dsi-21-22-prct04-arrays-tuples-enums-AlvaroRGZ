
function convert (char: string): string | undefined {
  let c: string | undefined = '';
  switch (char) {
    case 'A' : c = 'U';
    break;
    case 'C': c = 'G';
      break;
    case 'G': c = 'C';
      break;
    case 'T': c = 'A';
      break;
    case 'C': c = 'G';
      break;
    case 'U': c = 'A';
      break;
    default: c = undefined;
  }
  return c;
}

export function adnToArn(v: string[]): string[] | undefined{
  let cadena: string = '';
  let resultado: string[] = [];
  for (let i = 0; i < v.length; i++) {
    cadena = '';
    for (let j = 0; j < v[i].length; j++) {
      if (convert(v[i][j]) == undefined) {
        return undefined;
      }
      cadena += convert(v[i][j]);
    }
    resultado.push(cadena);
  }

  return resultado;
}

export function arnToAdn(v: string[]): string[] | undefined {
  return adnToArn(v);
}

const cadenas: string[] = ['ACGTGAT', 'TGCACCTTGA', 'ACGT'];

console.log('result: ', adnToArn(cadenas));