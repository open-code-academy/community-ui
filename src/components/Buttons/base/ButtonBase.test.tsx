import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ButtonBase } from './ButtonBase.component';

describe('Running tests for ButtonBase', () => {
    test('Given disabled prop then button disabled', () => {
        render(<ButtonBase children={'ButtonBase'} disabled />);
        expect(
            screen.getByRole('button', { name: 'ButtonBase' })
        ).toBeDisabled();
    });

    test('Given styles passed explicitly, when rendering button, button takes on dynamically passed styles ', () => {
        const expectedCss = 'padding: 20px 20px';
        render(<ButtonBase children={'ButtonBase'} styles={expectedCss} />);
        expect(screen.getByRole('button', { name: 'ButtonBase' })).toHaveStyle(
            expectedCss
        );
    });
});
