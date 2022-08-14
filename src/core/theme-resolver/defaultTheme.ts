import { ButtonThemes, Theme, Sizes, FormThemes } from './types';
import { Colors } from './constants';

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
    default: '.7rem 1.4rem',
    xs: '.25rem .5rem',
    sm: '.5rem 1.0rem',
    md: '.7rem 1.4rem',
    lg: '1rem 2rem',
    xl: '1.2rem 2.4rem',
    xxl: '1.5rem 3rem',
    '3xl': '2rem 4rem',
};

const DefaultButtonThemes: ButtonThemes = {
    PRIMARY: {
        backgroundColor: Colors.CYAN['60'],
        borderColor: Colors.CYAN['60'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    SECONDARY: {
        backgroundColor: Colors.PINK['60'],
        borderColor: Colors.PINK['60'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    ERROR: {
        backgroundColor: Colors.RED['60'],
        borderColor: Colors.RED['60'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    INFO: {
        backgroundColor: Colors.BLUE['70'],
        borderColor: Colors.BLUE['70'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    SUCCESS: {
        backgroundColor: Colors.GREEN['70'],
        borderColor: Colors.GREEN['70'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    WARNING: {
        backgroundColor: Colors.YELLOW['50'],
        borderColor: Colors.YELLOW['50'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
};

const DefaultFormThemes: FormThemes = {
    PRIMARY: {
        backgroundColor: Colors.BLUE['20'],
        borderColor: Colors.BLUE['90'],
        contentColor: Colors.BLACK,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    SECONDARY: {
        backgroundColor: Colors.PINK['20'],
        borderColor: Colors.PINK['90'],
        contentColor: Colors.BLACK,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    ERROR: {
        backgroundColor: Colors.RED['60'],
        borderColor: Colors.RED['60'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
    WARNING: {
        backgroundColor: Colors.YELLOW['50'],
        borderColor: Colors.YELLOW['50'],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY['60'],
        disabledBorderColor: Colors.GRAY['60'],
        disabledBackgroundColor: Colors.GRAY['30'],
    },
};

const DefaultFormInputPadding: Sizes = {
    default: '.7rem',
    xs: '.25rem',
    sm: '.5rem',
    md: '.7rem',
    lg: '1rem',
    xl: '1.2rem',
    xxl: '1.5rem',
    '3xl': '2rem',
};

const DefaultFormInputHeight: Sizes = {
    default: '1.4rem',
    xs: '.8rem',
    sm: '1.0rem',
    md: '1.4rem',
    lg: '2rem',
    xl: '2.4rem',
    xxl: '3rem',
    '3xl': '4rem',
};

const DefaultTheme: Theme = {
    typography: {
        fontSize: DefaultFontSizes,
    },
    buttonTheme: {
        buttonPadding: DefaultButtonPadding,
        buttonThemes: DefaultButtonThemes,
        fontSize: DefaultFontSizes, // fixme
    },
    formTheme: {
        formThemes: DefaultFormThemes,
        inputPadding: DefaultFormInputPadding,
        inputHeight: DefaultFormInputHeight,
    },
};

export default DefaultTheme;
