import { ButtonShapes, StyledTextButtonProps } from '../types';

export const getBorderRadius = (props: StyledTextButtonProps) => {
    const { buttonShape, borderRadius } = props;
    if (borderRadius) return borderRadius;

    switch (buttonShape) {
        case ButtonShapes.PILL:
            return '100rem';
        case ButtonShapes.RECTANGLE:
            return '0';
        case ButtonShapes.DEFAULT:
        default:
            return props.theme?.sizes.global.borderRadius;
    }
};
