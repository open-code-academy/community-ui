import { CssSize } from './CssSize.util';
import { CSSDirection } from '../types';

describe('Running Tests for CssSize utils', () => {
    test('When halving sizes, should return proper values.', () => {
        expect(new CssSize('20px').multiply(0.5).get()).toEqual('10px');
        expect(new CssSize('1.1rem 2rem').multiply(0.5).get()).toEqual('0.55rem 1rem');
    });

    describe('Testing multiply by direction feature', () => {
        test('When multiplying left, only left should be multiplied', () => {
            const initialSize = new CssSize('20px 20px 20px 20px');
            const expectedSize = '20px 20px 20px 40px';
            expect(initialSize.multiply(2, CSSDirection.LEFT).get()).toEqual(expectedSize);
        });

        test('When multiplying right, only right should be multiplied', () => {
            const initialSize = new CssSize('20px 20px 20px 20px');
            const expectedSize = '20px 40px 20px 20px';
            expect(initialSize.multiply(2, CSSDirection.RIGHT).get()).toEqual(expectedSize);
        });

        test('When multiplying top, only top should be multiplied', () => {
            const initialSize = new CssSize('20px 20px 20px 20px');
            const expectedSize = '40px 20px 20px 20px';
            expect(initialSize.multiply(2, CSSDirection.TOP).get()).toEqual(expectedSize);
        });

        test('When multiplying bottom, only bottom should be multiplied', () => {
            const initialSize = new CssSize('20px 20px 20px 20px');
            const expectedSize = '20px 20px 40px 20px';
            expect(initialSize.multiply(2, CSSDirection.BOTTOM).get()).toEqual(expectedSize);
        });

        test('Expand CSS Size from 1', () => {
            const initialSize = new CssSize('20px');
            const expectedSize = '20px 20px 20px 20px';
            expect(initialSize._expand().get()).toEqual(expectedSize);
        });

        test('Expand CSS Size from 2', () => {
            const initialSize = new CssSize('20px 30px');
            const expectedSize = '20px 30px 20px 30px';
            expect(initialSize._expand().get()).toEqual(expectedSize);
        });

        test('Expand CSS Size from 3', () => {
            const initialSize = new CssSize('20px 30px 40px');
            const expectedSize = '20px 30px 40px 30px';
            expect(initialSize._expand().get()).toEqual(expectedSize);
        });

        test('Expand CSS Size from 4', () => {
            const initialSize = new CssSize('20px 30px 40px 50px');
            const expectedSize = '20px 30px 40px 50px';
            expect(initialSize._expand().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 1 should not do anything', () => {
            const initialSize = new CssSize('20px');
            const expectedSize = '20px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 2 should work when values are same', () => {
            const initialSize = new CssSize('20px 20px');
            const expectedSize = '20px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 2 should not work if values are different', () => {
            const initialSize = new CssSize('20px 30px');
            const expectedSize = '20px 30px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 3 should work if index 0 and 2 are the same', () => {
            const initialSize = new CssSize('20px 30px 20px');
            const expectedSize = '20px 30px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 3 should have no effect if index 0 and 2 are different', () => {
            const initialSize = new CssSize('20px 20px 40px');
            const expectedSize = '20px 20px 40px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 3 should collapse to 1 if all values are the same', () => {
            const initialSize = new CssSize('20px 20px 20px');
            const expectedSize = '20px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 4 should have no effect if values are all different', () => {
            const initialSize = new CssSize('20px 30px 40px 50px');
            const expectedSize = '20px 30px 40px 50px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 4 should work if index 0 and 2, 1 and 3 are the same', () => {
            const initialSize = new CssSize('20px 30px 20px 30px');
            const expectedSize = '20px 30px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 4 should have no effect when index 0 and 2 are the same, but 1 and 3 are not', () => {
            const initialSize = new CssSize('20px 30px 20px 50px');
            const expectedSize = '20px 30px 20px 50px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 4 should collapse to 1 if all four values are the same', () => {
            const initialSize = new CssSize('20px 20px 20px 20px');
            const expectedSize = '20px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });

        test('Collapse CSS Size from 4 should collapse to 3 if index 1 and 3 are the same', () => {
            const initialSize = new CssSize('20px 30px 40px 30px');
            const expectedSize = '20px 30px 40px';
            expect(initialSize._collapse().get()).toEqual(expectedSize);
        });
    });

    test('Should throw error if size is not given', () => {
        // @ts-ignore
        expect(() => new CssSize()).toThrowError();
    });

    test('Should throw error if size has too many elements', () => {
        expect(() => new CssSize('20px 30px 40px 50px 60px')).toThrowError();
    });

    test('Should only return the size of the direction I want', () => {
        const initialSize = new CssSize('20px 30px 40px 30px');
        const expectedSize = '40px';
        expect(initialSize.get(CSSDirection.BOTTOM)).toEqual(expectedSize);
    });

    test('Should only return the size of the direction I want', () => {
        const initialSize = new CssSize('20px 30px 40px');
        const expectedSize = '30px';
        expect(initialSize.get(CSSDirection.LEFT)).toEqual(expectedSize);
    });
});
