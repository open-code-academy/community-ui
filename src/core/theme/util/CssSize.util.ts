import { CSSDirection } from '../types';

export class CssSize {
    constructor(size: string | undefined) {
        // allowing size to be 'undefined' so that typescript doesn't complain about the theme object being undefined,
        // throwing the error because it isn't actually allowed to be undefined, will find a way to fix this in the future
        if (!size) throw new Error('Size is required');
        this.sizeArr = size.split(' ');
        if (this.sizeArr.length > 4) {
            throw new Error('Invalid css size. You provided too many elements. Original value: ' + size);
        }
    }
    sizeArr: string[];

    multiply = (ratio: number, ...directions: CSSDirection[]): CssSize => {
        if (directions.length >= 1) {
            directions.forEach((d) => this.modifySize((s) => this._multiplyNum(s, ratio), d));
        } else {
            this.modifySize((s) => this._multiplyNum(s, ratio));
        }
        return this;
    };

    get = (direction?: CSSDirection): string => {
        let str = '';
        if (direction != undefined) {
            if (this.sizeArr.length - 1 < direction) {
                // if someone requests a size that isn't available, we don't want to modify this one.
                return new CssSize(this.get())._expand().get(direction);
            }
            str = this.sizeArr[direction];
        } else {
            this.sizeArr.forEach((s) => (str += s + ' '));
        }
        return str.trim();
    };

    _expand = (): CssSize => {
        switch (this.sizeArr.length) {
            case 1:
                let num = this.sizeArr[0];
                this.sizeArr.push(num, num, num);
                break;
            case 2:
                let num1 = this.sizeArr[0];
                let num2 = this.sizeArr[1];
                this.sizeArr.push(num1, num2);
                break;
            case 3:
                let right = this.sizeArr[1];
                this.sizeArr.push(right);
                break;
        }
        return this;
    };

    _collapse = (): CssSize => {
        const lowerBound = this.sizeArr.length <= 2 ? 0 : this.sizeArr.length - 3;
        const upperBound = lowerBound + (this.sizeArr.length <= 2 ? 1 : 2);
        if (this.sizeArr[lowerBound] == this.sizeArr[upperBound]) {
            this.sizeArr.pop();
            this._collapse();
        }
        return this;
    };

    modifySize = (callback: (s: string) => string, direction?: CSSDirection): CssSize => {
        if (direction != undefined) {
            this._modifyInPlace(direction, callback);
        } else {
            this.sizeArr.forEach((s, i) => {
                this._modifyInPlace(i, callback);
            });
        }

        return this;
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
