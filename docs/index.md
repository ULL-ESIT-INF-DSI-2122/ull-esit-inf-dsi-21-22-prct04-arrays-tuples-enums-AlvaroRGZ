# Práctica 4 - DSI
## Arrays, tuplas y enumerados

### Introducción

En este nuevo proyecto, emplearemos un desarrollo dirigido por pruebas (TDD) y estará documentado, para lo 
que vamos a valernos de tres herramientas para llevarlo a cabo:

* [Typedoc](https://typedoc.org/): para realizar la documentación automática de nuestro codigo.
* [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/): para incorporar TDD.

Continuaremos con la misma estructura de directorios basada en las anteriores prácticas, añadiendo el nuevo
directorio `test` para alojar las expectativas del código y `Typedocumentation` para almacenar la
documentación generada por `Typedoc`.

Con todo esto implementaremos 10 funciones propuestas, repasando conceptos sobre los apartados vistos en 
clase:
* [Creación de un proyecto inicial con Typescript](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html)
* [Tipos de datos estáticos](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-static-types.html)
* [Funciones](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-functions.html)
* [Arrays, tuplas y enumerados](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-arrays-tuples-enums.html)

## Ejercicios

### Ejercicio 1 - Tablas de multiplicar

Crearemos una funcion que reciba un numero `n >= 1` y devolvera un array de arrays conteniendo `n` tablas
de multiplicar, cada una con los `n` primeros productos.

``` Typescript
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
```
**Pruebas**
```Typescript
import {fromArrayToRanges, fromRangesToArray} from '../src/ejer-2';


describe('EJER 2) Compresión de números en rangos', () => {
  describe('fromArrayToRanges', () => {
    it('[] => undefined', () => {
      expect(fromArrayToRanges([])).to.be.equal(undefined);
    });
    it('[5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”', () => {
      expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.be.deep.equal('5_7, 9, 12_14');
    });
    it('[-3, -2, -1, 3, 5, 6, 7] => “-3_-1, 3, 5_7”', () => {
      expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.be.deep.equal('-3_-1, 3, 5_7');
    });
  });
  describe('fromRangesToArray', () => {
    it('"" => undefined', () => {
      expect(fromArrayToRanges([])).to.be.equal(undefined);
    });
    it('“5_7, 9, 12_14” => [5, 6, 7, 9, 12, 13, 14]', () => {
      expect(fromRangesToArray('5_7, 9, 12_14')).to.be.deep.equal([5, 6, 7, 9, 12, 13, 14]);
    });
    it('“-3_-1, 3, 5_7” => [-3, -2, -1, 3, 5, 6, 7]', () => {
      expect(fromRangesToArray('-3_-1, 3, 5_7')).to.be.deep.equal([-3, -2, -1, 3, 5, 6, 7]);
    });
  });
});
```
![pruebas e1](./images/e1.png)
