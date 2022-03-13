/**
 * Convierte el vector de numeros y cadenas en un vector de dos elementos
 * @param v vector de numeros y cadenas
 * @return vector con dos elementos:
 * 1) El resultado de la media de todos los numeros
 * 2) La cadena resultante de concatenar todas las cadenas
 */
export function meanAndConcatenate(v: (number | string)[]): (number | string)[] {
  let rNums: number = 0;
  let cNums: number = 0;
  let rStrings: string = '';
  for (let i: number = 0; i < v.length; i++) {
    if (typeof v[i] == 'number') {
      rNums += v[i] as number;
      cNums++;
    } else if (typeof v[i] == 'string') {
      rStrings += v[i] as string;
    }
  }
  return [rNums/cNums, rStrings];
}