import { conditionalStyle, getTheme } from '../..';

const props = {
	active: true,
	disabled: false,
	isBlack: true,
	theme: {
		white: '#fff',
		black: '#000',
	},
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

	it('should work with getTheme vars when truthy', () => {
		const white = getTheme('white');
		const black = getTheme('black');
		const style = conditionalStyle('isBlack')(black, white)(props);
		expect(style).toBe(props.theme.black);
	});

	it('should work with getTheme vars when truthy', () => {
		const white = getTheme('white');
		const black = getTheme('black');
		const style = conditionalStyle('isBlack')(black, white)({
			...props,
			isBlack: false,
		});
		expect(style).toBe(props.theme.white);
	});
});
