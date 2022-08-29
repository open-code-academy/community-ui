import { Palette, Themeable } from '../types';

export const resolvePalette = (props: Themeable) => {
    const { palette, theme, disabled } = props;
    if (!theme) {
        throw new Error('Theme cannot be undefined');
    }
    if (disabled) {
        return theme.colors.palettes.DISABLED;
    }
    switch (palette) {
        case Palette.PRIMARY:
            return theme.colors.palettes.PRIMARY;
        case Palette.SECONDARY:
            return theme.colors.palettes.SECONDARY;
        case Palette.SUCCESS:
            return theme.colors.palettes.SUCCESS;
        case Palette.ERROR:
            return theme.colors.palettes.ERROR;
        case Palette.WARNING:
            return theme.colors.palettes.WARNING;
        case Palette.INFO:
            return theme.colors.palettes.INFO;
        case Palette.DISABLED:
            return theme.colors.palettes.DISABLED;
        default:
            return theme.colors.palettes.PRIMARY;
    }
};
