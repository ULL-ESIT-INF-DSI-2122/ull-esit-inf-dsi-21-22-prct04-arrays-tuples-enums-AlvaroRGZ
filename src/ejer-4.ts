export function meshArray(v: string[]): string {
  let out: string = '';
  for (let i: number = 0; i < v.length - 1; i++) {
    const aLen: number = v[i].length;
    const nLen: number = v[i + 1].length;
    let aux: string = '';
    let Match: boolean = false;

    if (aLen == 0 || nLen == 0) {
      return 'Error al encadenar';
    }
    const size: number = Math.min(aLen, nLen);
    for (let j: number = size; j >= 0 && !Match; j--) {
      if (v[i].substring(aLen - j) == v[i+1].substring(0, j)) {
        Match = true;
        aux = v[i].substring(aLen - j);
      }
    }
    if (aux.length == 0) {
      return 'Error al encadenar';
    } else {
      out += aux;
    }
  }
  return out;
}