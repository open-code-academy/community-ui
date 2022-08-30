import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TextInput } from './TextInput.component';
import { BorderVariant } from '../../types/Input.types';
import { getGlobalTheme } from '../../../../core';

describe('Running tests for TextInput', () => {
    test('Given disabled prop then input disabled', () => {
        const placeholder = 'Test Input';
        render(
            <TextInput
                disabled
                id={''}
                form={''}
                onChange={console.log}
                type={''}
                required={false}
                placeholder={placeholder}
            />
        );
        expect(screen.getByPlaceholderText(placeholder)).toBeDisabled();
    });

    test('Given styles passed explicitly, when rendering input, button takes on dynamically passed styles ', () => {
        const expectedCss = 'padding: 20px 20px';
        const placeholder = 'Test Input';
        const label = 'Test Label';
        render(
            <TextInput
                id={'blah'}
                onChange={console.log}
                placeholder={'Test Input'}
                type={''}
                styles={expectedCss}
                labelText={label}
                labelProps={{ styles: expectedCss }}
                form={''}
            />
        );
        expect(screen.getByPlaceholderText(placeholder)).toHaveStyle(expectedCss);

        expect(screen.getByText(label)).toHaveStyle(expectedCss);
    });

    test('Given styles labelText passed explicitly, should display label text', () => {
        const placeholder = 'Test Input';
        const label = 'Test Label';
        render(<TextInput id={'blah'} onChange={console.log} placeholder={placeholder} type={''} form={''} />);
        expect(() => screen.getByText(label)).toThrowError();
        expect(screen.getByText(placeholder)).toBeDefined();

        render(
            <TextInput
                id={'blah2'}
                onChange={console.log}
                placeholder={placeholder}
                type={''}
                labelText={label}
                form={''}
            />
        );
        expect(screen.getByText(label)).toBeDefined();
    });

    test('Given borderVariant, display appropriate BorderType', () => {
        const placeholder1 = 'Test Input1';
        render(
            <TextInput
                id={'blah'}
                onChange={console.log}
                placeholder={placeholder1}
                type={''}
                form={''}
                borderVariant={BorderVariant.UNDERLINE}
            />
        );
        const component1 = screen.getByPlaceholderText(placeholder1);
        const styles1 = window.getComputedStyle(component1);
        expect(styles1.borderBottom).toEqual(
            `${getGlobalTheme().sizes.common.borderWidth} ${getGlobalTheme().common.borderStyle} ${
                getGlobalTheme().typography.textColor
            }`
        );

        const placeholder2 = 'Test Input2';
        render(
            <TextInput
                id={'blah2'}
                onChange={console.log}
                placeholder={placeholder2}
                type={''}
                form={''}
                borderVariant={BorderVariant.NONE}
            />
        );
        const component2 = screen.getByPlaceholderText(placeholder2);
        const styles2 = window.getComputedStyle(component2);
        expect(styles2.borderBottom).toEqual('');
        expect(styles2.border).toEqual('');

        const placeholder3 = 'Test Input3';
        render(
            <TextInput
                id={'blah3'}
                onChange={console.log}
                placeholder={placeholder3}
                type={''}
                form={''}
                borderVariant={BorderVariant.OUTLINE}
            />
        );
        const component3 = screen.getByPlaceholderText(placeholder3);
        const styles3 = window.getComputedStyle(component3);
        expect(styles3.borderBottom).toEqual(
            `${getGlobalTheme().sizes.common.borderWidth} ${getGlobalTheme().common.borderStyle} ${
                getGlobalTheme().typography.textColor
            }`
        );
        expect(styles3.border).toEqual(
            `${getGlobalTheme().sizes.common.borderWidth} ${getGlobalTheme().common.borderStyle} ${
                getGlobalTheme().typography.textColor
            }`
        );
    });
});
