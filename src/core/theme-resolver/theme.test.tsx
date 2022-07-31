import * as React from 'react';
import '@testing-library/jest-dom';
import { applyCustomTheme, getTheme } from './theme.module';
import { Colors } from './constants';
import { render, screen } from '@testing-library/react';

import { AnimatedButton, ButtonVariant } from '../../components';

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

// describe('Running test for applyCustomTheme()', ()=>{
//     test('Calling applyCustomTheme() should update all components that are rendered',()=>{
//         render(<AnimatedButton children={'Animated Button'} buttonVariant={ButtonVariant.SOLID} buttonTheme={getTheme()?.buttonTheme?.buttonThemes?.PRIMARY} />);
//         render(<AnimatedButton children={'Animated Button2'} buttonVariant={ButtonVariant.SOLID} buttonTheme={getTheme()?.buttonTheme?.buttonThemes?.PRIMARY} />);
//         const elem = screen.getByRole('button', { name: 'Animated Button'})
//         const style = window.getComputedStyle(elem)
//         expect(style.backgroundColor).toEqual("rgb(6, 182, 212)")
//         applyCustomTheme({
//             buttonTheme: {
//                 buttonThemes: {
//                     PRIMARY: {
//                         backgroundColor: "black"
//                     }
//                 }
//             }
//         })
//         const elemAfter = screen.getByRole('button', { name: 'Animated Button'})
//         const styleAfter = window.getComputedStyle(elemAfter);
//         expect(styleAfter.backgroundColor).toEqual("rgb(0, 0, 0)")
//     });
// })
