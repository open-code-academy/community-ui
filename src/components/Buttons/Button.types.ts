import { MouseEventHandler } from 'react';
import { Size, FontSize } from '../../config';
import { ColorPalette } from '../../config';
import { ButtonPadding, DefaultButtonThemes } from './Button.constants';

export interface ButtonProps {
    buttonPadding?:
        | typeof ButtonPadding.default
        | typeof ButtonPadding.xs
        | typeof ButtonPadding.sm
        | typeof ButtonPadding.md
        | typeof ButtonPadding.lg
        | typeof ButtonPadding.xl
        | typeof ButtonPadding.xxl
        | typeof ButtonPadding['3xl'];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    styles: string;
}

export interface ThemedButtonProps extends ButtonProps {
    buttonVariant?: typeof ButtonVariant.OUTLINE | typeof ButtonVariant.SOLID;
    buttonTheme?:
        | typeof DefaultButtonThemes.PRIMARY
        | typeof DefaultButtonThemes.INFO
        | typeof DefaultButtonThemes.ERROR
        | typeof DefaultButtonThemes.SUCCESS
        | typeof DefaultButtonThemes.SECONDARY
        | typeof DefaultButtonThemes.WARNING
        | ButtonTheme;
}

export enum ButtonVariant {
    SOLID = 'solid',
    OUTLINE = 'outline',
}

export interface TextButtonProps extends ThemedButtonProps {
    fontSize?:
        | typeof FontSize.default
        | typeof FontSize.xs
        | typeof FontSize.sm
        | typeof FontSize.md
        | typeof FontSize.lg
        | typeof FontSize.xl
        | typeof FontSize.xxl
        | typeof FontSize['3xl']
        | Size;
    children?: string;
}

export type ButtonThemes = {
    PRIMARY: ButtonTheme;
    SECONDARY: ButtonTheme;
    SUCCESS: ButtonTheme;
    ERROR: ButtonTheme;
    WARNING: ButtonTheme;
    INFO: ButtonTheme;
};

export type ButtonTheme = {
    backgroundColor: keyof ColorPalette | string;
    borderColor: keyof ColorPalette | string;
    contentColor?: keyof ColorPalette | string;
    disabledBorderColor?: keyof ColorPalette | string;
    disabledBackgroundColor?: keyof ColorPalette | string;
    disabledContentColor?: keyof ColorPalette | string;
};
