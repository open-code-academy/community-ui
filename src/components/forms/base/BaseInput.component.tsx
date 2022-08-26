import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core';
import { InputProps } from '../types/Input.types';

const BaseInputStyledComponent = themed(
    styled.input.attrs<InputProps>((props) => ({
        type: props.type,
        form: props.form,
    }))`
        ${(props: InputProps) => props.styles}
    `
);

export const BaseInput: FC<InputProps> = (props) => {
    return <BaseInputStyledComponent {...props} />;
};
