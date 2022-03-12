import * as React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { PlainButton } from './PlainButton.component';
import { Colors } from '../../../config';

describe('PlainButton', () => {
    test('its position should be set to relative and it should have expected transition by default', () => {
        const expectedCss = 'position: relative;transition: all 0.2s;';
        render(<PlainButton children={'PlainButton'} />);
        expect(screen.getByRole('button', { name: 'PlainButton' })).toHaveStyle(
            expectedCss
        );
    });

    test('if disabled attribute passed in should be disabled', () => {
        const expectedCss = 'position: relative;transition: all 0.2s;';
        render(<PlainButton children={'PlainButton'} disabled />);
        expect(
            screen.getByRole('button', { name: 'PlainButton' })
        ).toBeDisabled();
    });
});
