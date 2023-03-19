import { TCallback } from './common.models';

export enum COLORS {
  PINK = 'rgb(219,161,147)',
  GREEN = 'rgb(136,175,156)',
  BLUE = 'rgb(132,174,199)',
  VIOLET = 'rgb(128,132,159)',
  YELLOW = 'rgb(216,176,91)',
  ORANGE = 'rgb(190,121,46)'
}

export interface IColorSсheme {
  color: COLORS,
  getNewColor: TCallback
}

export const colors: Array<COLORS> = Object.values(COLORS);