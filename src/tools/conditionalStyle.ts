import { getProperty } from './getProperty';

export const conditionalStyle = (property: string) => <Truthy, Falsy>(
	truthy: Truthy,
	falsy?: Falsy
) => <Props>(props: Props): Truthy | Falsy | undefined =>
	getProperty(property)(props) ? truthy : falsy;
