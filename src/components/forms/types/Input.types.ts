import { Disableable, Styleable, Themeable, TextComponent, Sizeable } from '../../../core';
import { ChangeEvent } from 'react';
import { Subtract } from 'utility-types';

export interface LabelProps extends Themeable, Styleable {
    htmlFor: string;
    form: string;
}

export interface InputProps extends Themeable, Styleable {
    id: string;
    form: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
    required?: boolean;
}

export interface StyleableLabelProps extends LabelProps, TextComponent, Sizeable {
    labelVariant?: LabelVariant;
    labelColor?: string;
    active?: boolean;
}

export interface StyleableInputProps extends InputProps, TextComponent, Sizeable, Disableable {
    backgroundColor?: string;
    placeholderColor?: string;
    borderVariant?: BorderVariant;
    borderColor?: string;
    borderRadius?: string;
    width?: string;
    height?: string;
}

export interface StyleableInputGroupProps extends StyleableInputProps {
    labelText?: string;
    labelProps?: Subtract<StyleableLabelProps, { htmlFor: string; form: string }>;
}

export enum LabelVariant {
    FLOATING = 'floating',
    STATIC = 'static',
}

export enum BorderVariant {
    OUTLINE = 'outline',
    UNDERLINE = 'underline',
    NONE = 'none',
}
