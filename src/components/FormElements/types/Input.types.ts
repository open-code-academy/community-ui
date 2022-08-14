import {
    Accessible,
    StyleableCUIComponent,
    Disableable,
    Styleable,
    Themeable,
    Sizes,
    Size,
} from '../../../core';
import React, { ChangeEvent } from 'react';

export interface LabelProps extends Disableable, StyleableCUIComponent {
    htmlFor: string;
    form: string;
}

export interface StyledLabelProps extends LabelProps {
    fontSize?: string;
    padding?: string;
    active: boolean;
}

export interface InputProps extends Disableable, StyleableCUIComponent {
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    required: boolean;
    form: string;
    placeholder: string;
}

export interface StyledInputProps extends InputProps {
    padding?: string;
    width?: string;
    height?: string;
    placeholderColor?: string;
    backgroundColor?: string;
    labelStyle?: keyof LabelStyle;
    borderStyle?: keyof BorderStyle;
    fontSize?: string;
}

export enum LabelStyle {
    FLOATING = 'floating',
    STATIC = 'static',
}

export enum BorderStyle {
    OUTLINE = 'outline',
    UNDERLINE = 'underline',
    NONE = 'none',
}
