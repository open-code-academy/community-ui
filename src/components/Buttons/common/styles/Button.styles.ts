import { TextButtonProps } from './../types';
import { FontSize } from '../../../../core';
import { ButtonPadding } from '../constants';
import {
    getInitialBackgroundColor,
    getInitialTextColor,
    getInitialBorderColor,
    getBorderRadius,
} from '../utils';

export const textButtonStyles = (props: TextButtonProps) => `
    padding: ${props.buttonPadding || ButtonPadding.default};
    width: fit-content;
    font-size: ${props.fontSize || FontSize.default};
    color: ${getInitialTextColor(props)};
    background-color: ${getInitialBackgroundColor(props)};
    border: solid 0.125rem ${getInitialBorderColor(props)};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    box-sizing: content-box;
    border-radius: ${getBorderRadius(props)};
`;
