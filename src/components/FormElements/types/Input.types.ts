import { Disableable, Styleable, CuiComponent, TextComponent, Sizeable } from '../../../core';
import { ChangeEvent } from 'react';

export interface LabelProps extends Disableable, Sizeable, CuiComponent, TextComponent {
    htmlFor: string;
    form: string;
    labelText: string;
    labelVariant?: LabelVariant;
    labelColor?: string;
    active?: boolean;
}

export interface InputProps extends Disableable, Sizeable, CuiComponent, TextComponent {
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    required: boolean;
    placeholder: string;
    borderVariant?: BorderVariant;
    backgroundColor?: string;
    placeholderColor?: string;
    borderColor?: string;
    width?: string;
    height?: string;
}

export interface StyleableLabelProps extends LabelProps, Styleable {}

export interface StyleableInputProps extends InputProps, Styleable {}

export interface StyleableInputGroupProps extends InputProps, LabelProps {
    labelStyles?: string;
    inputStyles?: string;
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
