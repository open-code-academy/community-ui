import { MouseEventHandler } from 'react';
import { Themeable, Disableable, Sizeable, Styleable } from '../../../core';
export declare enum ButtonVariant {
    SOLID = 'solid',
    OUTLINE = 'outline',
}
export interface ButtonProps extends Disableable, Styleable, Themeable {
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
    borderRadius?: string;
    fontSize?: string;
}
export interface StyledTextButtonProps extends TextButtonProps, StyledButtonProps {
    children: string;
}
