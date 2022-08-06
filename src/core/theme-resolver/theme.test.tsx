import * as React from 'react';
import '@testing-library/jest-dom';
import { applyCustomTheme, getGlobalTheme } from './theme.module';
import { Colors } from './constants';
import { render, screen } from '@testing-library/react';
import { PlainButton } from '../../components';

describe('Running Tests for theme-resolver', () => {
    test('When Applying Custom Theme, theme object should update', () => {
        expect(
            getGlobalTheme().buttonTheme.buttonThemes.PRIMARY.backgroundColor
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
            getGlobalTheme().buttonTheme.buttonThemes.PRIMARY.backgroundColor
        ).toEqual(Colors.CYAN['70']);
    });

    test('When Applying Local Theme, Component should merge local theme with global theme', () => {
        const expectedColor = 'rgb(0, 0, 0)';
        render(
            <PlainButton
                children={'PlainButton'}
                localTheme={{
                    buttonTheme: {
                        buttonThemes: {
                            PRIMARY: { backgroundColor: expectedColor },
                        },
                    },
                }}
            />
        );
        const button = screen.getByRole('button', { name: 'PlainButton' });
        const style = window.getComputedStyle(button);
        console.log(style);
        const backgroundColor = style.backgroundColor;
        expect(backgroundColor).toEqual(expectedColor);
    });
});
