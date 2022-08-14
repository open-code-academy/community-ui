import { MouseEventHandler } from 'react';
import {
    Accessible,
    ColoredComponent,
    CUIComponent,
    Disableable,
    Styleable,
    Themeable,
} from '../../../core';

export enum ButtonVariant {
    SOLID = 'solid',
    OUTLINE = 'outline',
}

export enum ButtonShapes {
    PILL = 'pill',
    ROUNDED = 'rounded',
    RECTANGLE = 'rectangle',
}

export interface ButtonProps
    extends Disableable,
        Styleable,
        Themeable,
        Accessible {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: any;
}

export interface TextButtonProps extends ButtonProps {
    children: string;
}

export interface StyledButtonProps extends ButtonProps {
    buttonPadding?: string;
    buttonVariant?: typeof ButtonVariant.OUTLINE | typeof ButtonVariant.SOLID;
    buttonTheme?: ColoredComponent;
    buttonShape?: ButtonShapes;
    borderRadius?: string;
    fontSize?: string;
}

export interface StyledTextButtonProps
    extends TextButtonProps,
        StyledButtonProps {
    children: string;
}
