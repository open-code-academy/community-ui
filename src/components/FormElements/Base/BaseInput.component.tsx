import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core';
import { StyleableInputProps } from '../types/Input.types';

const BaseInputStyledComponent = themed(
    styled.input.attrs<StyleableInputProps>((props) => ({
        type: props.type,
        form: props.form,
    }))`
        ${(props: StyleableInputProps) => props.styles}
    `
);

export const BaseInput: FC<StyleableInputProps> = (props) => {
    const { size, ...rest } = props; // size is incompatible, it can't be passed down
    return <BaseInputStyledComponent {...rest} />;
};
