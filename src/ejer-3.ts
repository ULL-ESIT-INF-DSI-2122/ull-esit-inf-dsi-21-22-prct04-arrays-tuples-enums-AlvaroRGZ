export enum color {negro, marron, rojo, naranja, amarillo, verde, azul, violeta, gris, blanco};
export function decodeResistor(c1: color, c2:color, ...rest): number | undefined {
  if (( 8 < c1 || c1 < 0) || ( 8 < c2 || c2 < 0)) {
    return undefined;
  }
  return c1 * 10 + c2;
}