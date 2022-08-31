import { Sizes } from './index';
import { DeepPartial } from 'utility-types';

export type PartialTheme = DeepPartial<Theme>;

export type Theme = {
    common: Common;
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
    common: CommonSizes;
    buttons: ButtonSizes;
    forms: FormSizes;
};

export type ThemeColors = {
    palettes: Palettes;
    common: {
        whitespaceColor: string;
    };
};

export type CommonSizes = {
    borderRadius: string;
    borderWidth: string;
    gridGap: string;
};

export type Common = {
    borderStyle: 'solid' | 'inset' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'outset';
    baseZIndex: number;
    minZIndex: number;
    maxZIndex: number;
};

export type ButtonSizes = {
    buttonPadding: Sizes;
};

export type FormSizes = {
    inputHeight: Sizes;
    inputWidth: Sizes;
};
