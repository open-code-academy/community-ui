import { Sizes } from '../types';
export declare const resolveSize: (
    choice: keyof Sizes | string | undefined,
    sizes: Sizes | undefined
) => string | undefined;
