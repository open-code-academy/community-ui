import React, { FC } from 'react';
import styled from 'styled-components';

import { TextButtonProps } from './base/Button.types';
import { ButtonPadding } from './base/Button.constants';
import { FontSize } from '../../config';
import { BaseButton } from './base/BaseButton.component';
import {
    getInitialBackgroundColor,
    getInitialTextColor,
    getInitialBorderColor,
    getBorderRadius,
} from './utils/ButtonStyle.utils';

const StyledButton = styled(BaseButton)<TextButtonProps>(
    (props) => `
    padding: ${props.buttonPadding || ButtonPadding.default};
    width: fit-content;
    font-size: ${props.fontSize || FontSize.default};
    color: ${getInitialTextColor(props)};
    background-color: ${getInitialBackgroundColor(props)};
    border: solid 0.125rem ${getInitialBorderColor(props)};
    cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
    box-sizing: content-box;
    border-radius: ${getBorderRadius(props)};
`
);

export const TextButton: FC<TextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
