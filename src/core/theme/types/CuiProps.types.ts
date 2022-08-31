import { Size } from './Sizes.types';
import { Palette, PartialTheme, Theme } from './Theme.types';

export interface Themeable {
    theme?: Theme;
    localTheme?: PartialTheme;
    palette?: Palette;
    disabled?: boolean;
}

export interface Styleable {
    styles?: string;
}

export interface Disableable {
    disabled?: boolean;
}

export interface Sizeable {
    size?: Size;
}

export interface TextComponent {
    fontSize?: string;
    textColor?: string;
    fontFamily?: string;
}

export interface BoxComponent {
    children: string;
    height?: string;
    width?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
}
