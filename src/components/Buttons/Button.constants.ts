import { ButtonThemes } from './Button.types';
import { Colors } from '../../config';

export const DefaultButtonThemes: ButtonThemes = {
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
