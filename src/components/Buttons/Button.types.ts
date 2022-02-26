import {  MouseEventHandler } from 'react';
import {Sizes} from "../../config";
import {ColorPalette} from "../../config";
import {ButtonPadding} from "./Button.constants";

export interface ButtonProps {
    buttonPadding?:  keyof Sizes | string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

export interface ThemedButtonProps extends ButtonProps {
    buttonVariant?: ButtonVariant,
    buttonTheme?: ButtonTheme,
}

export enum ButtonVariant {
    SOLID = "solid",
    OUTLINE = "outline",
}

export interface TextButtonProps extends ThemedButtonProps {
    fontSize?: keyof Sizes | string,
    children?: string,
}

export interface ButtonThemes {
    PRIMARY:  ButtonTheme,
    SECONDARY: ButtonTheme,
    SUCCESS: ButtonTheme,
    ERROR: ButtonTheme,
    WARNING: ButtonTheme,
    INFO: ButtonTheme,
}

export interface ButtonTheme {
    backgroundColor: keyof ColorPalette | string,
    borderColor: keyof ColorPalette | string,
    contentColor?: keyof ColorPalette | string,
    disabledBorderColor?: keyof ColorPalette | string,
    disabledBackgroundColor?: keyof ColorPalette | string,
    disabledContentColor?: keyof ColorPalette | string,
}