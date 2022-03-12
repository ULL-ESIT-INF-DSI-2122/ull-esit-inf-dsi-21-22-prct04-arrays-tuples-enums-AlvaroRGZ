export function multiplyAll(v: number[]): Function {
  function multiply(n: number): number[] {
    const r: number[] = [];
    for (let i: number = 0; i < v.length; i++) {
      r.push(v[i]*n);
    }
    return r;
  }
  return multiply;
}