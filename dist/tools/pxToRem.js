import { Big } from 'big.js';
export const pxToRem = (value, basePx = 16) => `${Big(value).div(basePx)}rem`;
//# sourceMappingURL=pxToRem.js.map
