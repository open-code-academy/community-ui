import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BaseInput } from './BaseInput.component';

describe('Running tests for BaseInput', () => {
    test('Given disabled prop then input disabled', () => {
        render(
            <BaseInput
                disabled
                id={'blah'}
                onChange={(e) => {
                    console.log(e);
                }}
                placeholder={'Test Input'}
                required
                type={'button'}
                form={'blah'}
            />
        );
        expect(screen.getByPlaceholderText('Test Input')).toBeDisabled();
    });

    test('Given styles passed explicitly, when rendering input, button takes on dynamically passed styles ', () => {
        const expectedCss = 'padding: 20px 20px';
        render(
            <BaseInput
                id={'blah'}
                onChange={(e) => {
                    console.log(e);
                }}
                placeholder={'Test Input'}
                required
                type={'text'}
                styles={expectedCss}
                form={'blah'}
            />
        );
        expect(screen.getByPlaceholderText('Test Input')).toHaveStyle(expectedCss);
    });
});
