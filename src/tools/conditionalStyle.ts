import { getProperty } from './getProperty';

export const conditionalStyle = (property: string) => <Truthy, Falsy>(
	truthy: Truthy,
	falsy?: Falsy
) => <Props>(props: Props): Truthy | Falsy | undefined =>
	getProperty(property)(props)
		? typeof truthy === 'function'
			? truthy(props)
			: truthy
		: typeof falsy === 'function'
		? falsy(props)
		: falsy;
