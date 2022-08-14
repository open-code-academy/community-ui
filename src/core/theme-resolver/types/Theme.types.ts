import { Sizes } from './index';
import { DeepPartial } from 'utility-types';

export interface Themeable {
    theme?: Theme;
    localTheme?: PartialTheme;
}

export interface Styleable {
    styles?: string;
}

export interface Disableable {
    disabled?: boolean;
}

export interface Accessible {
    ariaSettings?: object;
}

export interface CUIComponent extends Themeable, Accessible {}
export interface StyleableCUIComponent extends Styleable, CUIComponent {}

export type Theme = {
    typography: TypographyTheme;
    buttonTheme: ButtonTheme;
    formTheme: FormTheme;
};

export type PartialTheme = DeepPartial<Theme>;

export type TypographyTheme = {
    fontSize: Sizes;
};

export type ButtonTheme = {
    buttonThemes: ButtonThemes;
    buttonPadding: Sizes;
    fontSize: Sizes; // fixme
};

export type ButtonThemes = {
    PRIMARY: ColoredComponent;
    SECONDARY: ColoredComponent;
    SUCCESS: ColoredComponent;
    ERROR: ColoredComponent;
    WARNING: ColoredComponent;
    INFO: ColoredComponent;
};

export type ColoredComponent = {
    backgroundColor: string;
    borderColor: string;
    contentColor: string;
    disabledBorderColor: string;
    disabledBackgroundColor: string;
    disabledContentColor: string;
};

export type FormTheme = {
    formThemes: FormThemes;
    inputHeight: Sizes;
    inputPadding: Sizes;
};

export type FormThemes = {
    PRIMARY: ColoredComponent;
    SECONDARY: ColoredComponent;
    ERROR: ColoredComponent;
    WARNING: ColoredComponent;
};
