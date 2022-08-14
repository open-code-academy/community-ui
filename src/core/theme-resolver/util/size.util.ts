import { CSSDirection, Size, Sizes } from '../types';

export class SizeUtil {
    constructor(size: keyof Sizes | string | undefined) {
        if (!size) {
            throw Error('Size is required');
        }
        this.sizeArr = size.split(' ');
        this.sizeArrLength = this.sizeArr.length;
    }
    sizeArr: string[];
    sizeArrLength: number;

    multiply = (ratio?: number, direction?: CSSDirection): SizeUtil => {
        this.applyToDirection(direction, (s) => {
            return this._multiplyNum(s, ratio || 1);
        });
        return this;
    };

    up = (ratio?: number): SizeUtil => {
        this.multiply(ratio, CSSDirection.UP);
        return this;
    };

    down = (ratio: number): SizeUtil => {
        this.multiply(ratio, CSSDirection.DOWN);
        return this;
    };

    left = (ratio: number): SizeUtil => {
        this.multiply(ratio, CSSDirection.LEFT);
        return this;
    };

    right = (ratio: number): SizeUtil => {
        this.multiply(ratio, CSSDirection.RIGHT);
        return this;
    };

    get = (direction?: CSSDirection): string => {
        let str = '';
        if (direction) {
            this.applyToDirection(direction, (s) => (str = s));
        }
        this.sizeArr.forEach((s) => (str += s + ' '));
        return str.trim();
    };

    applyToDirection = (
        direction: CSSDirection | undefined,
        callback: (s: string) => string
    ): string => {
        switch (direction) {
            case CSSDirection.UP:
                return this._modifyInPlace(0, callback);
            case CSSDirection.RIGHT:
                if (this.sizeArrLength == 1) {
                    return this._modifyInPlace(0, callback);
                } else {
                    return this._modifyInPlace(1, callback);
                }
            case CSSDirection.DOWN:
                if (this.sizeArrLength < 3) {
                    return this._modifyInPlace(0, callback);
                } else {
                    return this._modifyInPlace(2, callback);
                }
            case CSSDirection.LEFT:
                if (this.sizeArrLength == 1) {
                    return this._modifyInPlace(0, callback);
                } else if (this.sizeArrLength == 2 || this.sizeArrLength == 3) {
                    return this._modifyInPlace(1, callback);
                } else {
                    return this._modifyInPlace(3, callback);
                }
            default:
                this.sizeArr.forEach((s, i) => {
                    this._modifyInPlace(i, callback);
                });
                return this.get();
        }
    };

    _modifyInPlace = (index: number, callback: (str: string) => string) => {
        this.sizeArr[index] = callback(this.sizeArr[index]);
        return this.sizeArr[index];
    };

    _multiplyNum = (s: string, ratio: number) => {
        let letters = s.replace(/[\d\\.-]/g, '');
        let num = parseFloat(s.replace(/[^\d\\.-]/g, '')) * ratio;
        return num + letters;
    };
}

export const resolveSize = (
    choice: keyof Sizes | string | undefined,
    sizes: Sizes | undefined
) => {
    if (!sizes) {
        return choice;
    }
    if (choice) {
        switch (choice) {
            case Size.default:
                return sizes.default;
            case Size.xs:
                return sizes.xs;
            case Size.sm:
                return sizes.sm;
            case Size.md:
                return sizes.md;
            case Size.lg:
                return sizes.lg;
            case Size.xl:
                return sizes.xl;
            case Size.xxl:
                return sizes.xxl;
            case Size['3xl']:
                return sizes['3xl'];
            default:
                return choice;
        }
    }
    return sizes.default;
};