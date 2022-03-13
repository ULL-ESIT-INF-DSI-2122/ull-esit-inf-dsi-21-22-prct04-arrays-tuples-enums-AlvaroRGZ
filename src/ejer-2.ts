/**
 * Convierte un array de enteros y los comprime en una cadena
 * representando los rangos entre estos separados por '_'
 * y cada una separados por ','. Ejemplo:
 * [5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”
 *
 * @param v vector de numeros ordenados
 * @return cadena representando los rangos entre los elementos de v
 * o undefined si el tamaño de v < 1
 */
export function fromArrayToRanges(v: number[]): string | undefined {
  if (v.length < 1) {
    return undefined;
  }

  let out: string = '';
  let j: number = 0;
  let c: number = 0;
  for (let i: number = 0; i < v.length; i++) {
    j = i;
    let d: number = 0;
    const ini: string = v[i].toString(); // Guardamos el primer numero del rango
    while ((j < v.length - 1) && (v[j + 1] == v[j] + 1)) {
      d++;
      j++;
      i++;
    }
    if (c > 0) {
      out += ', ';
    }
    if (d > 0) {
      out += ini + '_' + v[j].toString();
    } else {
      out += ini;
    }
    c++; // Para la coma
  }
  return out;
}

/**
 * Revierte la cadena generada por el proceso anterior a un
 * vector conteniendo todos nos numéros en los rangos indicados
 * Cada elemento del vector es un numero del rango. Ejemplo:
 * “5_7, 9, 12_14” => [5, 6, 7, 9, 12, 13, 14]
 *
 * @param entry cadena representando los rangos
 * @return vector de numeros ordenados o undefined si 
 * el tamaño de entry < 1
 */
export function fromRangesToArray(entry: string):number[] | undefined {
  const cad: string = entry.replace(/ /g, '');
  const ranges: string[] = cad.split(',');
  const output: number[] = [];

  if (cad.length < 1) {
    return undefined;
  }

  for (let i: number = 0; i < ranges.length; i++) {
    if (ranges[i].includes('_')){
      const n1: number = parseInt(ranges[i].split('_')[0]);
      const n2: number = parseInt(ranges[i].split('_')[1]);
      for (let i: number = n1; i <= n2; i++) {
        output.push(i);
      }
    } else {
      output.push(parseInt(ranges[i]));
    }
  }

  return output;
}