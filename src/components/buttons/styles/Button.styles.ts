import { ButtonVariant, StyledTextButtonProps } from '../types';
import { resolveSize } from '../../../core/theme/util/resolveSize.util';
import { resolvePalette } from '../../../core/theme/util/resolvePalette.util';
import { CuiColors } from '../../../core';

// using outline instead of border because of weird bug with whitespace
export const textButtonStyles = (props: StyledTextButtonProps) => `
    box-sizing: content-box;
    padding: ${
        props.buttonPadding
            ? resolveSize(props.buttonPadding, props.theme?.sizes.buttons.buttonPadding)
            : resolveSize(props.size, props.theme?.sizes.buttons.buttonPadding)
    };
    width: fit-content;
    font-size: ${
        props.fontSize
            ? resolveSize(props.fontSize, props.theme?.typography.fontSize)
            : resolveSize(props.size, props.theme?.typography.fontSize)
    };
    color: ${
        props.buttonVariant === ButtonVariant.OUTLINE ? resolvePalette(props).primary : resolvePalette(props).contrast
    };
    background-color: ${
        props.buttonVariant === ButtonVariant.OUTLINE ? CuiColors.TRANSPARENT : resolvePalette(props).primary
    };
    outline: ${resolvePalette(props).primary}   ${props.theme?.sizes.common.borderWidth}  ${
    props.theme?.common.borderStyle
};

    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    border: none;
    border-radius: ${props.borderRadius || props.theme?.sizes.common.borderRadius};
    
    &:focus,
    &:active {
        // the pseudo-border disappears without this
        outline: ${resolvePalette(props).primary}   ${props.theme?.sizes.common.borderWidth}  ${
    props.theme?.common.borderStyle
};
    }
`;
