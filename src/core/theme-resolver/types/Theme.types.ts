import { ColorPalette, Sizes } from './index';

export interface Themeable {
    theme?: Theme;
}

export type Theme = {
    buttonTheme?: ButtonTheme;
};

export type ButtonTheme = {
    buttonThemes?: ButtonThemes;
    buttonPadding?: Sizes;
    fontSize?: Sizes;
};

export type ButtonThemes = {
    PRIMARY?: ButtonColor;
    SECONDARY?: ButtonColor;
    SUCCESS?: ButtonColor;
    ERROR?: ButtonColor;
    WARNING?: ButtonColor;
    INFO?: ButtonColor;
};

export type ButtonColor = {
    backgroundColor?: keyof ColorPalette | string;
    borderColor?: keyof ColorPalette | string;
    contentColor?: keyof ColorPalette | string;
    disabledBorderColor?: keyof ColorPalette | string;
    disabledBackgroundColor?: keyof ColorPalette | string;
    disabledContentColor?: keyof ColorPalette | string;
};
