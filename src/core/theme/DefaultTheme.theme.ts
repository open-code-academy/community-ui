import { Palettes, Theme, Sizes, ThemeSizes, TypographyTheme, ThemeColors, Common } from './types';
import { CuiColors } from './constants';

const DefaultColorPalettes: Palettes = {
    PRIMARY: {
        primary: CuiColors.CYAN['60'],
        light: CuiColors.CYAN['50'],
        dark: CuiColors.CYAN['70'],
        contrast: CuiColors.WHITE,
    },
    SECONDARY: {
        primary: CuiColors.PINK['60'],
        light: CuiColors.PINK['50'],
        dark: CuiColors.PINK['70'],
        contrast: CuiColors.WHITE,
    },
    ERROR: {
        primary: CuiColors.RED['60'],
        light: CuiColors.RED['50'],
        dark: CuiColors.RED['70'],
        contrast: CuiColors.WHITE,
    },
    INFO: {
        primary: CuiColors.BLUE['70'],
        light: CuiColors.BLUE['60'],
        dark: CuiColors.BLUE['80'],
        contrast: CuiColors.WHITE,
    },
    SUCCESS: {
        primary: CuiColors.GREEN['70'],
        light: CuiColors.GREEN['60'],
        dark: CuiColors.GREEN['80'],
        contrast: CuiColors.WHITE,
    },
    WARNING: {
        primary: CuiColors.YELLOW['50'],
        light: CuiColors.YELLOW['40'],
        dark: CuiColors.YELLOW['60'],
        contrast: CuiColors.WHITE,
    },
    DISABLED: {
        primary: CuiColors.GRAY['60'],
        light: CuiColors.GRAY['40'],
        dark: CuiColors.GRAY['80'],
        contrast: CuiColors.GRAY['30'],
    },
};

const DefaultFontSizes: Sizes = {
    default: '.75rem',
    xs: '.5rem',
    sm: '.625rem',
    md: '.75rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    '3xl': '2rem',
};

const DefaultButtonPadding: Sizes = {
    default: '.75rem 1.5rem',
    xs: '.5rem 1rem',
    sm: '.625rem 1.25rem',
    md: '.75rem 1.5rem',
    lg: '1rem 2rem',
    xl: '1.25rem 2.5rem',
    xxl: '1.5rem 3rem',
    '3xl': '2rem 4rem',
};

const DefaultFormInputHeight: Sizes = {
    default: '2.25rem',
    xs: '1.5rem',
    sm: '1.875rem',
    md: '2.25rem',
    lg: '3rem',
    xl: '3.75rem',
    xxl: '4.5rem',
    '3xl': '6rem',
};

const DefaultFormInputWidth: Sizes = {
    default: '100%',
    xs: '20.47rem',
    sm: '25.59rem',
    md: '30.72rem',
    lg: '36.875rem',
    xl: '49.05rem',
    xxl: '61.30rem',
    '3xl': '73.56rem',
};

const DefaultSizes: ThemeSizes = {
    common: {
        borderRadius: '0.5rem',
        borderWidth: '0.1rem',
        gridGap: '.1rem',
        margin: '0.5rem',
    },
    buttons: {
        buttonPadding: DefaultButtonPadding,
    },
    forms: {
        inputHeight: DefaultFormInputHeight,
        inputWidth: DefaultFormInputWidth,
    },
};

const DefaultTypography: TypographyTheme = {
    fontSize: DefaultFontSizes,
    fontFamily: 'sans-serif',
    textColor: CuiColors.GRAY['90'],
};

const Colors: ThemeColors = {
    common: {
        whitespaceColor: CuiColors.GRAY['10'],
    },
    palettes: DefaultColorPalettes,
};

const DefaultCommon: Common = {
    borderStyle: 'solid',
    baseZIndex: 10,
    minZIndex: 0,
    maxZIndex: 20,
};

const DefaultTheme: Theme = {
    common: DefaultCommon,
    typography: DefaultTypography,
    colors: Colors,
    sizes: DefaultSizes,
};

export default DefaultTheme;
