import * as ButtonStyleUtils from './ButtonStyle.utils';
import {
    ButtonVariant,
    ButtonShapes,
    StyledTextButtonProps,
    StyledButtonProps,
} from '../types';
import { Colors, getGlobalTheme } from '../../../core';

const {
    getInitialBackgroundColor,
    getBorderRadius,
    getInitialBorderColor,
    getInitialTextColor,
} = ButtonStyleUtils;

describe('Running tests for ButtonStyle utils', () => {
    test('Given variant of outline, when getInitialBackgroundColor is called, background color is transparent', () => {
        expect(
            getInitialBackgroundColor({ buttonVariant: ButtonVariant.OUTLINE })
        ).toBe(Colors.TRANSPARENT);
    });

    describe('Running tests for background color of solid buttons', () => {
        const props: StyledButtonProps = {
            buttonVariant: ButtonVariant.SOLID,
            theme: getGlobalTheme(),
        };

        test('Given no defaultTheme, when getInitialBackgroundColor is called, background color is the default one', () => {
            expect(getInitialBackgroundColor(props)).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.PRIMARY
                    ?.backgroundColor
            );
        });

        test('Given a defaultTheme, when getInitialBackgroundColor is called, background color is the default color for that defaultTheme', () => {
            expect(
                getInitialBackgroundColor({
                    ...props,
                    buttonTheme:
                        getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY
                    ?.backgroundColor
            );
        });

        test('Given disabled prop, when getInitialBackgroundColor is called, background color is the default disabled color', () => {
            expect(
                getInitialBackgroundColor({ ...props, disabled: true })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.PRIMARY
                    ?.disabledBackgroundColor
            );
        });

        test('Given disabled prop and a defaultTheme, when getInitialBackgroundColor is called, background color is the disabled color for that defaultTheme', () => {
            expect(
                getInitialBackgroundColor({
                    ...props,
                    disabled: true,
                    buttonTheme:
                        getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY
                    ?.disabledBackgroundColor
            );
        });
    });

    describe('Running tests for border color', () => {
        test('Given defaultTheme, when getInitialBorderColor is called, border color is the default one', () => {
            expect(
                getInitialBorderColor({ children: '', theme: getGlobalTheme() })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.PRIMARY
                    ?.borderColor
            );
        });

        test('Given a defaultTheme, when getInitialBorderColor is called, border color is the default color for that defaultTheme', () => {
            expect(
                getInitialBorderColor({
                    children: '',
                    buttonTheme:
                        getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY
                    ?.borderColor
            );
        });

        test('Given disabled prop and defaultTheme, when getInitialBorderColor is called, border color is the default disabled color', () => {
            expect(
                getInitialBorderColor({
                    children: '',
                    theme: getGlobalTheme(),
                    disabled: true,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.PRIMARY
                    ?.disabledBorderColor
            );
        });

        test('Given disabled prop and a defaultTheme, when getInitialBorderColor is called, border color is the disabled color for that defaultTheme', () => {
            expect(
                getInitialBorderColor({
                    children: '',
                    disabled: true,
                    buttonTheme:
                        getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY
                    ?.disabledBorderColor
            );
        });
    });

    test('Given variant of outline, when getInitialTextColor is called, getInitialBorderColor is called', () => {
        const props: StyledTextButtonProps = {
            children: '',
            buttonVariant: ButtonVariant.OUTLINE,
            theme: getGlobalTheme(),
        };
        const spy = jest.spyOn(ButtonStyleUtils, 'getInitialBorderColor');

        getInitialTextColor(props);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(props);

        spy.mockRestore();
    });

    describe('Running tests for text color of solid buttons', () => {
        const props: StyledTextButtonProps = {
            children: '',
            buttonVariant: ButtonVariant.SOLID,
            theme: getGlobalTheme(),
        };

        test('Given defaultTheme, when getInitialTextColor is called, text color is the default content color', () => {
            expect(getInitialTextColor(props)).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.PRIMARY
                    ?.contentColor
            );
        });

        test('Given a defaultTheme, when getInitialTextColor is called, text color is the default content color for that defaultTheme', () => {
            expect(
                getInitialTextColor({
                    ...props,
                    buttonTheme:
                        getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY
                    ?.contentColor
            );
        });

        test('Given disabled prop and defaultTheme, when getInitialTextColor is called, text color is the default disabled content color', () => {
            expect(getInitialTextColor({ ...props, disabled: true })).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.PRIMARY
                    ?.disabledContentColor
            );
        });

        test('Given disabled prop and defaultTheme, when getInitialTextColor is called, text color is the default disabled content color for that defaultTheme', () => {
            expect(
                getInitialTextColor({
                    ...props,
                    disabled: true,
                    buttonTheme:
                        getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
                })
            ).toBe(
                getGlobalTheme()?.buttonTheme?.buttonThemes?.SECONDARY
                    ?.disabledContentColor
            );
        });
    });

    describe('Running tests for border radius', () => {
        test('Given border radius prop, when getBorderRadius is called, border radius value is that of the prop', () => {
            expect(
                getBorderRadius({ children: '', borderRadius: '.3rem' })
            ).toBe('.3rem');
        });

        test('Given shape of pill, when getBorderRadius is called, border radius value is the appropriate one', () => {
            expect(
                getBorderRadius({
                    children: '',
                    buttonShape: ButtonShapes.PILL,
                })
            ).toBe('100rem');
        });

        test('Given shape of rectangle, when getBorderRadius is called, border radius value is the appropriate one', () => {
            expect(
                getBorderRadius({
                    children: '',
                    buttonShape: ButtonShapes.RECTANGLE,
                })
            ).toBe('0');
        });

        test('Given shape of rounded, when getBorderRadius is called, border radius is the appropriate one', () => {
            expect(
                getBorderRadius({
                    children: '',
                    buttonShape: ButtonShapes.ROUNDED,
                })
            ).toBe('.5rem');
        });
    });
});
