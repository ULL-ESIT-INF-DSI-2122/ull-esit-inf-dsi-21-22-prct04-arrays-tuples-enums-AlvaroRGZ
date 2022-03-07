function convert(char) {
    let c = '';
    switch (char) {
        case 'A':
            c = 'U';
            break;
        case 'C':
            c = 'G';
            break;
        case 'G':
            c = 'C';
            break;
        case 'T':
            c = 'A';
            break;
        case 'C':
            c = 'G';
            break;
        case 'U':
            c = 'A';
            break;
        default: c = undefined;
    }
    return c;
}
function adnToArn(v) {
    let cadena = '';
    let resultado = [];
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
const cadenas = ['ACGTGAT', 'TGCACCTTGA', 'ACGT'];
console.log('result: ', adnToArn(cadenas));
