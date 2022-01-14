export interface Point {
  lat: number,
  lon: number,
}

export enum Animation {
  SMOOTH,
  LINEAR,
}

export interface CameraPosition {
  zoom: number;
  tilt: number;
  azimuth: number;
  point: Point;
  isFinished: boolean;
}

export interface VisibleRegion  {
  topLeft: Point;
  topRight: Point;
  bottomLeft: Point;
  bottomRight: Point;
}
