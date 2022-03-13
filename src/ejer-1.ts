/**
 * Devuelve un array de arrays con n tablas de multiplicar,
 * donde cada tabla de multiplicar contiene los primeros n
 * productos.
 * @param n número de tablas de multiplicar. n >= 1
 * @return number[][] conteniendo las tablas generadas
 * o undefined si n < 1
 */
export function productTable(n: number): number[][] | undefined {
  if (n < 1) {
    return undefined;
  }

  const result: number[][] = [];

  for (let i: number = 1; i <= n; i++) {
    const aux: number[] = [];
    for (let j: number = 1; j <= n; j++) {
      aux.push(i*j);
    }
    result.push(aux);
  }

  return result;
}