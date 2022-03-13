/**
 * Calcula si al cabo de un cierto numero de pasos, como
 * maximo 10. Hemos vuelto al punto de partida
 * @param pasos vector de caracteres (movimientos)
 * @return si hemos vuelto o no al punto de partida
 */
export function paseito(pasos: string[]): boolean | undefined {
  if (pasos.length < 1) {
    return undefined;
  }
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