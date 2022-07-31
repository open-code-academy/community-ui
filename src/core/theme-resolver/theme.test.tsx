import * as React from 'react';
import '@testing-library/jest-dom';
import { applyCustomTheme, getTheme } from './theme.module';
import { Colors } from './constants';

describe('Running Tests for theme-resolver', () => {
    test('When Applying Custom Theme, theme object should update', () => {
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
