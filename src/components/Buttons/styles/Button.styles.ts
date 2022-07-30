import { StyledTextButtonProps } from '../types';
import {
    getBorderRadius,
    getInitialBackgroundColor,
    getInitialBorderColor,
    getInitialTextColor,
} from './ButtonStyle.utils';

export const textButtonStyles = (props: StyledTextButtonProps) => `
    padding: ${
        props.buttonPadding || props.theme?.buttonTheme?.buttonPadding?.default
    };
    width: fit-content;
    font-size: ${props.fontSize || props.theme?.buttonTheme?.fontSize?.default};
    color: ${getInitialTextColor(props)};
    background-color: ${getInitialBackgroundColor(props)};
    border: solid 0.125rem ${getInitialBorderColor(props)};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    box-sizing: content-box;
    border-radius: ${getBorderRadius(props)};
`;
