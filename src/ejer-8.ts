export class Point2D {
  x: number;
  y: number;
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
  sum(other: Point2D): Point2D {
    return new Point2D(this.x+other.x, this.y+other.y);
  }
  diff(other: Point2D): Point2D {
    return new Point2D(this.x-other.x, this.y-other.y);
  }
  pruduct(n: number): Point2D {
    return new Point2D(this.x*n, this.y*n);
  }
  euclidean(other: Point2D): number {
    return Math.abs(this.x-other.x) + Math.abs(this.y-other.y);
  }
}