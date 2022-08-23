import { CssSize } from './CssSize.util';

describe('Running Tests for theme utils', () => {
    test('When halving sizes, should return proper values.', () => {
        expect(new CssSize('20px').multiply(0.5).get()).toEqual('10px');
        expect(new CssSize('1.1rem 2rem').multiply(0.5).get()).toEqual('0.55rem 1rem');
    });
});
