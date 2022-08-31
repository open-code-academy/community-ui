import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BaseLabel } from './BaseLabel.component';

describe('Running tests for BaseLabel', () => {
    const labelText = 'The Label';

    test('Given styles passed explicitly, when rendering input, button takes on dynamically passed styles ', () => {
        const expectedCss = 'padding: 20px 20px';
        render(<BaseLabel htmlFor={'blah'} form={'whatever'} children={labelText} styles={expectedCss} />);
        expect(screen.getByText(labelText)).toHaveStyle(expectedCss);
    });
});
