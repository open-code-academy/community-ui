import { CSSDirection } from '../types';
export declare class CssSize {
    constructor(size: string | undefined);
    sizeArr: string[];
    multiply: (ratio: number, ...directions: CSSDirection[]) => CssSize;
    get: (direction?: CSSDirection | undefined) => string;
    _expand: () => CssSize;
    _collapse: () => CssSize;
    modifySize: (callback: (s: string) => string, direction?: CSSDirection | undefined) => CssSize;
    _modifyInPlace: (index: number, callback: (str: string) => string) => string;
    _multiplyNum: (s: string, ratio: number) => string;
}
