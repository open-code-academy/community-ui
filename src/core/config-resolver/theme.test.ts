import '@testing-library/jest-dom';
import {getTheme } from './theme.util';

describe('Running tests for ButtonBase', () => {
    test('Given disabled prop then button disabled', () => {
        const theme = getTheme();
        expect(theme.hello).toEqual("world")
    });
});
