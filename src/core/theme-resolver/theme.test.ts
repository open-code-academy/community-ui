import '@testing-library/jest-dom';
import { applyCustomTheme, getTheme } from './theme.module';
import { Colors } from './constants';

describe('Running tests for ButtonBase', () => {
    test('Given disabled prop then button disabled', () => {
        expect(
            getTheme().buttonTheme?.buttonThemes?.PRIMARY?.backgroundColor
        ).toEqual(Colors.CYAN['60']);

        applyCustomTheme({
            buttonTheme: {
                buttonThemes: {
                    PRIMARY: {
                        backgroundColor: Colors.CYAN['70'],
                    },
                },
            },
        });

        expect(
            getTheme().buttonTheme?.buttonThemes?.PRIMARY?.backgroundColor
        ).toEqual(Colors.CYAN['70']);
    });
});
