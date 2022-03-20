import * as ButtonStyleUtils from './ButtonStyle.utils';
import { TextButtonProps, ButtonVariant, ButtonShapes } from './../types';
import { DefaultButtonThemes } from '../constants';
import { Colors } from '../../../../core';

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
        const props: TextButtonProps = {
            buttonVariant: ButtonVariant.SOLID,
        };

        test('Given no config-resolver, when getInitialBackgroundColor is called, background color is the default one', () => {
            expect(getInitialBackgroundColor(props)).toBe(
                DefaultButtonThemes.PRIMARY.backgroundColor
            );
        });

        test('Given a config-resolver, when getInitialBackgroundColor is called, background color is the default color for that config-resolver', () => {
            expect(
                getInitialBackgroundColor({
                    ...props,
                    buttonTheme: DefaultButtonThemes.SECONDARY,
                })
            ).toBe(DefaultButtonThemes.SECONDARY.backgroundColor);
        });

        test('Given disabled prop and no config-resolver, when getInitialBackgroundColor is called, background color is the default disabled color', () => {
            expect(
                getInitialBackgroundColor({ ...props, disabled: true })
            ).toBe(DefaultButtonThemes.PRIMARY.disabledBackgroundColor);
        });

        test('Given disabled prop and a config-resolver, when getInitialBackgroundColor is called, background color is the disabled color for that config-resolver', () => {
            expect(
                getInitialBackgroundColor({
                    ...props,
                    disabled: true,
                    buttonTheme: DefaultButtonThemes.SECONDARY,
                })
            ).toBe(DefaultButtonThemes.SECONDARY.disabledBackgroundColor);
        });
    });

    describe('Running tests for border color', () => {
        test('Given no config-resolver, when getInitialBorderColor is called, border color is the default one', () => {
            expect(getInitialBorderColor({})).toBe(
                DefaultButtonThemes.PRIMARY.borderColor
            );
        });

        test('Given a config-resolver, when getInitialBorderColor is called, border color is the default color for that config-resolver', () => {
            expect(
                getInitialBorderColor({
                    buttonTheme: DefaultButtonThemes.SECONDARY,
                })
            ).toBe(DefaultButtonThemes.SECONDARY.borderColor);
        });

        test('Given disabled prop and no config-resolver, when getInitialBorderColor is called, border color is the default disabled color', () => {
            expect(getInitialBorderColor({ disabled: true })).toBe(
                DefaultButtonThemes.PRIMARY.disabledBorderColor
            );
        });

        test('Given disabled prop and a config-resolver, when getInitialBorderColor is called, border color is the disabled color for that config-resolver', () => {
            expect(
                getInitialBorderColor({
                    disabled: true,
                    buttonTheme: DefaultButtonThemes.SECONDARY,
                })
            ).toBe(DefaultButtonThemes.SECONDARY.disabledBorderColor);
        });
    });

    test('Given variant of outline, when getInitialTextColor is called, getInitialBorderColor is called', () => {
        const props: TextButtonProps = {
            buttonVariant: ButtonVariant.OUTLINE,
        };
        const spy = jest.spyOn(ButtonStyleUtils, 'getInitialBorderColor');

        getInitialTextColor(props);

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(props);

        spy.mockRestore();
    });

    describe('Running tests for text color of solid buttons', () => {
        const props: TextButtonProps = {
            buttonVariant: ButtonVariant.SOLID,
        };

        test('Given no config-resolver, when getInitialTextColor is called, text color is the default content color', () => {
            expect(getInitialTextColor(props)).toBe(
                DefaultButtonThemes.PRIMARY.contentColor
            );
        });

        test('Given a config-resolver, when getInitialTextColor is called, text color is the default content color for that config-resolver', () => {
            expect(
                getInitialTextColor({
                    ...props,
                    buttonTheme: DefaultButtonThemes.SECONDARY,
                })
            ).toBe(DefaultButtonThemes.SECONDARY.contentColor);
        });

        test('Given disabled prop and no config-resolver, when getInitialTextColor is called, text color is the default disabled content color', () => {
            expect(getInitialTextColor({ ...props, disabled: true })).toBe(
                DefaultButtonThemes.PRIMARY.disabledContentColor
            );
        });

        test('Given disabled prop and a config-resolver, when getInitialTextColor is called, text color is the default disabled content color for that config-resolver', () => {
            expect(
                getInitialTextColor({
                    ...props,
                    disabled: true,
                    buttonTheme: DefaultButtonThemes.SECONDARY,
                })
            ).toBe(DefaultButtonThemes.SECONDARY.disabledContentColor);
        });
    });

    describe('Running tests for border radius', () => {
        test('Given border radius prop, when getBorderRadius is called, border radius value is that of the prop', () => {
            expect(getBorderRadius({ borderRadius: '.3rem' })).toBe('.3rem');
        });

        test('Given shape of pill, when getBorderRadius is called, border radius value is the appropriate one', () => {
            expect(getBorderRadius({ buttonShape: ButtonShapes.PILL })).toBe(
                '100rem'
            );
        });

        test('Given shape of rectangle, when getBorderRadius is called, border radius value is the appropriate one', () => {
            expect(
                getBorderRadius({ buttonShape: ButtonShapes.RECTANGLE })
            ).toBe('0');
        });

        test('Given shape of rounded, when getBorderRadius is called, border radius is the appropriate one', () => {
            expect(getBorderRadius({ buttonShape: ButtonShapes.ROUNDED })).toBe(
                '.5rem'
            );
        });
    });
});
