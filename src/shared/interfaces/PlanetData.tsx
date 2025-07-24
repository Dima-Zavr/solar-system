export interface IPlanetData {
  semiMajorAxis: number;
  size: number;
  axialTilt: number;
  dayDuration: number;
  yearDuration: number;
  eccentricity: number;
  inclination: number;
  url: string;
  ringUrl?: false | string;
}
