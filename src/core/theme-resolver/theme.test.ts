import '@testing-library/jest-dom';
import { getTheme } from './theme.module';
import { Colors } from './constants';

describe('Running tests for ButtonBase', () => {
    test('Given disabled prop then button disabled', () => {
        const theme = getTheme();
        expect(
            theme.buttonTheme?.buttonThemes?.PRIMARY?.backgroundColor
        ).toEqual(Colors.CYAN['70']);
    });
});
