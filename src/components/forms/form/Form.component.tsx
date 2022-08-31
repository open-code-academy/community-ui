import React, { FC } from 'react';
import styled from 'styled-components';

import { CuiColors, themed } from '../../../core';
import { StyledFormProps } from '../types';
import { BaseForm } from '../base';

const StyledForm = themed(
    styled(BaseForm)<StyledFormProps>(
        (props: StyledFormProps) => `
        width: ${props.width || 'fit-content'};
        height: ${props.height || 'fit-content'};
        margin: ${props.margin || '0'};
        padding: ${props.padding || '0'};
        background-color: ${props.backgroundColor || CuiColors.TRANSPARENT}
        ${props.styles}
        `
    )
);

export const Form: FC<StyledFormProps> = (props: StyledFormProps) => {
    return <StyledForm {...props} />;
};
