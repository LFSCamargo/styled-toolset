import { getProperty } from '../..';
const props = {
	value: 'this is a prop value',
};
describe('Get property tool tests', () => {
	it('should get a property from the theme', () => {
		const property = getProperty('value')(props);
		expect(property).toBe(props.value);
	});
});
//# sourceMappingURL=getProperty.test.js.map
