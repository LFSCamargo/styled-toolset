import { getTheme } from '../..';

const theme = {
	black: '#000',
	fonts: {
		roboto: 'Roboto',
	},
};

describe('Get theme tool tests', () => {
	it('should get the theme variable', () => {
		const color = getTheme('black')({ theme });
		expect(color).toBe(theme.black);
	});
	it('should get a deeper theme variable', () => {
		const roboto = getTheme('fonts.roboto')({ theme });
		expect(roboto).toBe(theme.fonts.roboto);
	});
});
