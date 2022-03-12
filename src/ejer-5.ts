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