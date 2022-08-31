import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core';
import { ButtonProps } from '../types';

const BaseButtonStyledComponent = themed(
    styled.button.attrs<ButtonProps>((props) => ({
        type: props.type || 'button',
        form: props.form,
    }))`
        ${(props: ButtonProps) => props.styles}
    `
);

export const BaseButton: FC<ButtonProps> = (props) => {
    return <BaseButtonStyledComponent {...props}>{props.children}</BaseButtonStyledComponent>;
};
