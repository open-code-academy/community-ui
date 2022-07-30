import { MouseEventHandler } from 'react';
import { ButtonColor, Themeable } from '../../../core';

export enum ButtonVariant {
    SOLID = 'solid',
    OUTLINE = 'outline',
}

export enum ButtonShapes {
    PILL = 'pill',
    ROUNDED = 'rounded',
    RECTANGLE = 'rectangle',
}

export interface ButtonProps extends Themeable {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ariaSettings?: object;
    styles?: string;
    children?: any;
}

export interface TextButtonProps extends ButtonProps {
    children: string;
}

export interface StyledButtonProps extends ButtonProps {
    buttonPadding?: string;
    buttonVariant?: typeof ButtonVariant.OUTLINE | typeof ButtonVariant.SOLID;
    buttonTheme?: ButtonColor;
    buttonShape?: ButtonShapes;
    borderRadius?: string;
    fontSize?: string;
}

export interface StyledTextButtonProps
    extends TextButtonProps,
        StyledButtonProps {
    children: string;
}
