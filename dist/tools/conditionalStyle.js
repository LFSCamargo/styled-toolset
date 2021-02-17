import { getProperty } from './getProperty';
export const conditionalStyle = (property) => (truthy, falsy) => (props) =>
	getProperty(property)(props) ? truthy : falsy;
//# sourceMappingURL=conditionalStyle.js.map
