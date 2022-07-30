import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PlainButton } from './PlainButton.component';

describe('PlainButton', () => {
    test('when not passed explicit arguments its position should be set to relative and it should have expected transition', () => {
        const expectedCss = 'position: relative;transition: all 0.2s;';
        render(<PlainButton children={'PlainButton'} />);
        expect(screen.getByRole('button', { name: 'PlainButton' })).toHaveStyle(
            expectedCss
        );
    });

    test('when passed the disabled attribute component should be disabled', () => {
        render(<PlainButton children={'PlainButton'} disabled />);
        expect(
            screen.getByRole('button', { name: 'PlainButton' })
        ).toBeDisabled();
    });
});
