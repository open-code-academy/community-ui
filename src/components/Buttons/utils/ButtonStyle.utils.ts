import { ButtonShapes, ButtonVariant, TextButtonProps } from '../base';
import { Colors } from '../../../config';
import { DefaultButtonThemes } from '../base';

export const getInitialBackgroundColor = (props: TextButtonProps) => {
    switch (props.buttonVariant) {
        case ButtonVariant.OUTLINE:
            return Colors.TRANSPARENT;
        case ButtonVariant.SOLID:
            return resolveBackgroundColor(props);
    }
};

export const resolveBackgroundColor = ({
    buttonTheme,
    disabled,
}: TextButtonProps) => {
    let color =
        buttonTheme?.backgroundColor ||
        DefaultButtonThemes.PRIMARY.backgroundColor;
    return disabled
        ? buttonTheme?.disabledBackgroundColor ||
              DefaultButtonThemes.PRIMARY.disabledBackgroundColor
        : color;
};

export const getInitialBorderColor = ({
    buttonTheme,
    disabled,
}: TextButtonProps) => {
    let color =
        buttonTheme?.borderColor || DefaultButtonThemes.PRIMARY.borderColor;
    return disabled
        ? buttonTheme?.disabledBorderColor ||
              DefaultButtonThemes.PRIMARY.disabledBorderColor
        : color;
};

export const getInitialTextColor = (props: TextButtonProps) => {
    switch (props.buttonVariant) {
        case ButtonVariant.OUTLINE:
            return getInitialBorderColor(props);
        case ButtonVariant.SOLID:
            return resolveTextColor(props);
    }
};

export const resolveTextColor = ({
    disabled,
    buttonTheme,
}: TextButtonProps) => {
    let color =
        buttonTheme?.contentColor || DefaultButtonThemes.PRIMARY.contentColor;
    return disabled
        ? buttonTheme?.disabledContentColor ||
              DefaultButtonThemes.PRIMARY.disabledContentColor
        : color;
};

export const getBorderRadius = (props: TextButtonProps) => {
    const { buttonShape, borderRadius, buttonPadding } = props;
    if (borderRadius) return borderRadius;

    switch (buttonShape) {
        case ButtonShapes.PILL:
            return '100rem';
        case ButtonShapes.RECTANGLE:
            return '0';
        case ButtonShapes.ROUNDED:
            return '.5rem';
        default:
            return '0';
    }
};
