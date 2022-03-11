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