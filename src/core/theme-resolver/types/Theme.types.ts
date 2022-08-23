import { Sizes } from './index';
import { DeepPartial } from 'utility-types';

export type PartialTheme = DeepPartial<Theme>;

export type Theme = {
    colors: ThemeColors;
    typography: TypographyTheme;
    sizes: ThemeSizes;
};

export enum Palette {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    DISABLED = 'disabled',
}

export type Palettes = {
    PRIMARY: ColorPalette;
    SECONDARY: ColorPalette;
    SUCCESS: ColorPalette;
    ERROR: ColorPalette;
    WARNING: ColorPalette;
    INFO: ColorPalette;
    DISABLED: ColorPalette;
};

export type ColorPalette = {
    primary: string;
    light: string;
    dark: string;
    contrast: string;
};

export type TypographyTheme = {
    fontSize: Sizes;
    fontFamily: string;
    textColor: string;
};

export type ThemeSizes = {
    global: GlobalSizes;
    buttons: ButtonSizes;
    forms: FormSizes;
};

export type ThemeColors = {
    palettes: Palettes;
    global: {
        whitespaceColor: string;
    };
};

export type GlobalSizes = {
    borderRadius: string;
};

export type ButtonSizes = {
    buttonPadding: Sizes;
};

export type FormSizes = {
    inputHeight: Sizes;
    inputWidth: Sizes;
};
