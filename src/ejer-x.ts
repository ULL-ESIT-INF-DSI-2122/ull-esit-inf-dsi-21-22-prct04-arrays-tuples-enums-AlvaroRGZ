export function paseito(pasos: string[]): boolean | undefined {
  let x: number = 0;
  let y: number = 0;
  for (let i: number = 0; i < pasos.length && i < 10; i++) {
    switch (pasos[i]) {
      case 'n':
        y++;
        break;
      case 's':
        y--;
        break;
      case 'e':
        x++;
        break;
      case 'o':
        x--;
        break;
      default:
        return undefined;
    }
  }
  return ((x + y) == 0) ? true : false;
}