import {
    ButtonShapes,
    ButtonVariant,
    StyledButtonProps,
    StyledTextButtonProps,
} from '../types';
import { Colors } from '../../../core';

export const getInitialBackgroundColor = (props: StyledButtonProps) => {
    switch (props.buttonVariant) {
        case ButtonVariant.OUTLINE:
            return Colors.TRANSPARENT;
        case ButtonVariant.SOLID:
            return resolveBackgroundColor(props);
        default:
            return resolveBackgroundColor(props);
    }
};

export const resolveBackgroundColor = (props: StyledButtonProps) => {
    const { buttonTheme, disabled, theme } = props;
    let color =
        buttonTheme?.backgroundColor ||
        theme?.buttonTheme.buttonThemes.PRIMARY.backgroundColor;
    return disabled
        ? buttonTheme?.disabledBackgroundColor ||
              theme?.buttonTheme.buttonThemes.PRIMARY.disabledBackgroundColor
        : color;
};

export const getInitialBorderColor = ({
    buttonTheme,
    disabled,
    theme,
}: StyledTextButtonProps) => {
    let color =
        buttonTheme?.borderColor ||
        theme?.buttonTheme.buttonThemes.PRIMARY.borderColor;
    return disabled
        ? buttonTheme?.disabledBorderColor ||
              theme?.buttonTheme.buttonThemes.PRIMARY.disabledBorderColor
        : color;
};

export const getInitialTextColor = (props: StyledTextButtonProps) => {
    switch (props.buttonVariant) {
        case ButtonVariant.OUTLINE:
            return getInitialBorderColor(props);
        case ButtonVariant.SOLID:
            return resolveTextColor(props);
        default:
            return resolveTextColor(props);
    }
};

export const resolveTextColor = ({
    disabled,
    buttonTheme,
    theme,
}: StyledTextButtonProps) => {
    let color =
        buttonTheme?.contentColor ||
        theme?.buttonTheme.buttonThemes.PRIMARY.contentColor;
    return disabled
        ? buttonTheme?.disabledContentColor ||
              theme?.buttonTheme.buttonThemes.PRIMARY.disabledContentColor
        : color;
};

export const getBorderRadius = (props: StyledTextButtonProps) => {
    const { buttonShape, borderRadius } = props;
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
