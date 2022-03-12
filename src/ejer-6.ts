export function moveZeros(v: number[]): number[] {
  const out: number[] = [];
  let nZeros: number = 0;
  for (let i: number = 0; i < v.length; i++) {
    if (v[i] == 0){
      nZeros++;
    } else {
      out.push(v[i]);
    }
  }
  for (let i: number = 0; i < nZeros; i++) {
    out.push(0);
  }
  return out;
}
