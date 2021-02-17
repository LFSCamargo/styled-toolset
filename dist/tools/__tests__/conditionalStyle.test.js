import { conditionalStyle } from '../..';
const props = {
	active: true,
	disabled: false,
};
describe('Conditional style tool tests', () => {
	it('should use the truthy style', () => {
		const style = conditionalStyle('active')('truthy', 'falsy')(props);
		expect(style).toBe('truthy');
	});
	it('should use the falsy style', () => {
		const style = conditionalStyle('disabled')('truthy', 'falsy')(props);
		expect(style).toBe('falsy');
	});
	it('should use the truthy style when does not pass falsy', () => {
		const style = conditionalStyle('active')('truthy')(props);
		expect(style).toBe('truthy');
	});
	it('should return undefined for not defined falsy', () => {
		const style = conditionalStyle('disabled')('truthy')(props);
		expect(style).toBe(undefined);
	});
});
//# sourceMappingURL=conditionalStyle.test.js.map
