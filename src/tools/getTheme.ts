import { getProperty } from './getProperty';

interface Props {
	theme: Record<string, any>;
}

export const getTheme = (property: string) => <T extends Partial<Props>>({
	theme,
}: T): any => getProperty(property)(theme);
