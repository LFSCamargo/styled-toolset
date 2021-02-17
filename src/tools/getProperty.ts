import { path, pipe, split } from 'ramda';

export const getProperty = (property: string) => <T>(props: T): any =>
	pipe(split(/[[\].]/), path)(property)(props);
