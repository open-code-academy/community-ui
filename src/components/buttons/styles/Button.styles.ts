import { ButtonVariant, StyledTextButtonProps } from '../types';
import { resolveSize } from '../../../core/theme-resolver/util/resolveSize.util';
import { resolvePalette } from '../../../core/theme-resolver/util/resolvePalette.util';
import { CuiColors } from '../../../core';

export const textButtonStyles = (props: StyledTextButtonProps) => `
    box-sizing: border-box;
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
    border:  ${props.theme?.common.borderStyle} ${props.theme?.sizes.common.borderWidth} ${
    resolvePalette(props).primary
};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    border-radius: ${props.borderRadius || props.theme?.sizes.common.borderRadius};
`;
