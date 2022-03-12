export class PointND {
  coords: number[];
  constructor(coordinates: number[], ...rest: number[]){
    this.coords = coordinates;
  }
  sum(other: PointND): PointND | undefined {
    if (this.coords.length != other.coords.length) {
      return undefined;
    }
    const r: number[] = [];
    for (let i: number = 0; i < this.coords.length; i++) {
      r.push(this.coords[i] + other.coords[i]);
    }
    return new PointND(r);
  }
  diff(other: PointND): PointND | undefined {
    if (this.coords.length != other.coords.length) {
      return undefined;
    }
    const r: number[] = [];
    for (let i: number = 0; i < this.coords.length; i++) {
      r.push(this.coords[i] - other.coords[i]);
    }
    return new PointND(r);
  }
  product(n: number): PointND {
    const r: number[] = [];
    for (let i: number = 0; i < this.coords.length; i++) {
      r.push(this.coords[i] * n);
    }
    return new PointND(r);
  }
  euclidean(other: PointND): number {
    let value: number = 0;
    for (let i: number = 0; i < this.coords.length; i++) {
      value += Math.abs(this.coords[i]- other.coords[i]);
    }
    return value;
  }
}