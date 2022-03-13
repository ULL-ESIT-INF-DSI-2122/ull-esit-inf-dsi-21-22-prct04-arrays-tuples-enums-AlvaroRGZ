/**
 * Representa el valor númerico correspondiente a cada color
 * @enum color
 */
export enum color {negro, marron, rojo, naranja, amarillo, verde, azul, violeta, gris, blanco};

/**
 * Genera un numero de dos digitos correspondiente al valor de una
 * resistencia con los dos colores indicados. Si recibe más de dos
 * colores, estos son ignorados
 *
 * @param c1 primera banda de color
 * @param c2 segunda banda de color
 * @param ...rest resto de colores a ignorar
 * @return valor de la resistencia
 */
export function decodeResistor(c1: color, c2:color, ...rest: number[]): number | undefined {
  if (( 8 < c1 || c1 < 0) || ( 8 < c2 || c2 < 0)) {
    return undefined;
  }
  return c1 * 10 + c2;
}