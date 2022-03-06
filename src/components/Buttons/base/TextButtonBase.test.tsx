import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { TextButtonBase } from './TextButtonBase.component';

describe('TextButtonBase', () => {
    test('by default its width fits its contents', () => {
        const expectedCss = 'width: fit-content';
        render(<TextButtonBase children={'TextButtonBase'} />);
        expect(
            screen.getByRole('button', { name: 'TextButtonBase' })
        ).toHaveStyle(expectedCss);
    });

    test('Given a disabled prop the cursor is not-allowed', () => {
        const expectedCss = 'cursor: not-allowed';
        render(<TextButtonBase children={'TextButtonBase'} disabled />);
        expect(
            screen.getByRole('button', { name: 'TextButtonBase' })
        ).toHaveStyle(expectedCss);
    });
});
