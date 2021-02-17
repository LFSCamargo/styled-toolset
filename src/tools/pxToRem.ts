import { Big } from 'big.js';

export const pxToRem = (value: number, basePx = 16): string =>
	`${Big(value).div(basePx)}rem`;
