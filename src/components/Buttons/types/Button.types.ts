import { MouseEventHandler } from 'react';
import { CuiComponent, Disableable, Sizeable, Styleable } from '../../../core';

export enum ButtonVariant {
    SOLID = 'solid',
    OUTLINE = 'outline',
}

export enum ButtonShapes {
    PILL = 'pill',
    DEFAULT = 'rounded',
    RECTANGLE = 'rectangle',
}

export interface ButtonProps extends Disableable, Styleable, CuiComponent {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: any;
    form?: string;
    type?: 'submit' | 'reset' | 'button';
}

export interface TextButtonProps extends ButtonProps {
    children: string;
}

export interface StyledButtonProps extends ButtonProps, Sizeable {
    buttonPadding?: string;
    buttonVariant?: typeof ButtonVariant.OUTLINE | typeof ButtonVariant.SOLID;
    buttonShape?: ButtonShapes;
    borderRadius?: string;
    fontSize?: string;
}

export interface StyledTextButtonProps extends TextButtonProps, StyledButtonProps {
    children: string;
}
