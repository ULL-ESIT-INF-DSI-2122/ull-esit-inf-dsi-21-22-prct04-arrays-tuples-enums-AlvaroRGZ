export function multiplyAll(v: number[]): (n: number) => number[] {
  function multiply(n: number): number[] {
    const r: number[] = v;
    for (let i: number = 0; i < v.length; i++) {
      r.push(v[i]*n);
    }
    return r;
  }
  return multiply;
}