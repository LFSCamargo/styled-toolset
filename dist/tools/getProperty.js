import { path, pipe, split } from 'ramda';
export const getProperty = (property) => (props) =>
	pipe(split(/[[\].]/), path)(property)(props);
//# sourceMappingURL=getProperty.js.map
