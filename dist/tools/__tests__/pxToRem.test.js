import { pxToRem } from '../..';
describe('Px -> Rem tool tests', () => {
	it('should convert the px to rem fine', () => {
		const convertedValue = `${10 / 16}rem`;
		expect(pxToRem(10)).toBe(convertedValue);
	});
	it('should convert the px using a custom pixel baseline', () => {
		const convertedValue = `${10 / 25}rem`;
		expect(pxToRem(10, 25)).toBe(convertedValue);
	});
});
//# sourceMappingURL=pxToRem.test.js.map
