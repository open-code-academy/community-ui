import {Sizes} from "../../config/Sizes.types";
import {ButtonThemes} from "./Button.types";
import {Colors} from "../../config/Colors.constants";

export const ButtonPadding: Sizes = {
    default: '.7rem 1.4rem',
    xs : '.25rem .5rem',
    sm : '.5rem 1.0rem',
    md : '.7rem 1.4rem',
    lg : '1rem 2rem',
    xl : '1.2rem 2.4rem',
    xxl: '1.5rem 3rem',
    '3xl': '2rem 4rem'
}

export const DefaultButtonThemes : ButtonThemes = {
    PRIMARY:  {
        backgroundColor: Colors.CYAN["60"],
        borderColor: Colors.CYAN["60"],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY["60"],
        disabledBorderColor: Colors.GRAY["60"],
        disabledBackgroundColor: Colors.GRAY["30"]
    },
    SECONDARY: {
        backgroundColor:  Colors.PINK["60"],
        borderColor: Colors.PINK["60"],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY["60"],
        disabledBorderColor: Colors.GRAY["60"],
        disabledBackgroundColor: Colors.GRAY["30"]
    },
    ERROR: {
        backgroundColor: Colors.RED["60"],
        borderColor: Colors.RED["60"],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY["60"],
        disabledBorderColor: Colors.GRAY["60"],
        disabledBackgroundColor: Colors.GRAY["30"]
    },
    INFO: {
        backgroundColor: Colors.BLUE["70"],
        borderColor: Colors.BLUE["70"],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY["60"],
        disabledBorderColor: Colors.GRAY["60"],
        disabledBackgroundColor: Colors.GRAY["30"]
    },
    SUCCESS: {
        backgroundColor: Colors.GREEN["70"],
        borderColor: Colors.GREEN["70"],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY["60"],
        disabledBorderColor: Colors.GRAY["60"],
        disabledBackgroundColor: Colors.GRAY["30"]
    },
    WARNING: {
        backgroundColor: Colors.YELLOW["50"],
        borderColor: Colors.YELLOW["50"],
        contentColor: Colors.WHITE,
        disabledContentColor: Colors.GRAY["60"],
        disabledBorderColor: Colors.GRAY["60"],
        disabledBackgroundColor: Colors.GRAY["30"]
    }
}