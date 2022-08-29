import { Sizes } from './index';
import { DeepPartial } from 'utility-types';
export declare type PartialTheme = DeepPartial<Theme>;
export declare type Theme = {
    common: Common;
    colors: ThemeColors;
    typography: TypographyTheme;
    sizes: ThemeSizes;
};
export declare enum Palette {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
    DISABLED = 'disabled',
}
export declare type Palettes = {
    PRIMARY: ColorPalette;
    SECONDARY: ColorPalette;
    SUCCESS: ColorPalette;
    ERROR: ColorPalette;
    WARNING: ColorPalette;
    INFO: ColorPalette;
    DISABLED: ColorPalette;
};
export declare type ColorPalette = {
    primary: string;
    light: string;
    dark: string;
    contrast: string;
};
export declare type TypographyTheme = {
    fontSize: Sizes;
    fontFamily: string;
    textColor: string;
};
export declare type ThemeSizes = {
    common: CommonSizes;
    buttons: ButtonSizes;
    forms: FormSizes;
};
export declare type ThemeColors = {
    palettes: Palettes;
    common: {
        whitespaceColor: string;
    };
};
export declare type CommonSizes = {
    borderRadius: string;
    borderWidth: string;
    gridGap: string;
    margin: string;
};
export declare type Common = {
    borderStyle: 'solid' | 'inset' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge' | 'outset';
};
export declare type ButtonSizes = {
    buttonPadding: Sizes;
};
export declare type FormSizes = {
    inputHeight: Sizes;
    inputWidth: Sizes;
};
