import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { TextButton } from './TextButton.component';

describe('TextButton', () => {
    test('by default its width fits its contents', () => {
        const expectedCss = 'width: fit-content';
        render(<TextButton children={'TextButton'} />);
        expect(screen.getByRole('button', { name: 'TextButton' })).toHaveStyle(
            expectedCss
        );
    });

    test('Given a disabled prop the cursor is not-allowed', () => {
        const expectedCss = 'cursor: not-allowed';
        render(<TextButton children={'TextButton'} disabled />);
        expect(screen.getByRole('button', { name: 'TextButton' })).toHaveStyle(
            expectedCss
        );
    });
});
