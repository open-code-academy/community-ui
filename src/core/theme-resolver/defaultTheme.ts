import { ButtonThemes, Theme } from './theme.types';
import { Sizes } from '../types';
import { Colors } from '../constants';

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

const DefaultTheme: Theme = {
    buttonTheme: {
        fontSize: DefaultFontSizes,
        buttonPadding: DefaultButtonPadding,
        buttonThemes: DefaultButtonThemes,
    },
};

export default DefaultTheme;
