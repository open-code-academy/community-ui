import '@testing-library/jest-dom';
import {getTheme } from './theme.util';

describe('Running tests for ButtonBase', () => {
    test('Given disabled prop then button disabled', () => {
        const theme = getTheme();
        console.log(theme)
        expect(theme.buttonSize).toEqual("overridden")
        expect(theme.somethingElse).toEqual("value")
    });
});
