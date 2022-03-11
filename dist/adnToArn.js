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
/**
 * Converts a vector of ADN secuences on another
 * vector with it correspondent ARN secuence
 * @param v ADN secuences vector
 * @return An ARN secuences vector or undefined if
 * any secuence of v is invalid
 */
export function adnToArn(v) {
    let cadena = '';
    const resultado = [];
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
export function arnToAdn(v) {
    return adnToArn(v);
}
