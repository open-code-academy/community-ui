import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core';
import { FormProps } from '../types/Form.types';

const BaseFormComponent = themed(
    styled.form`
        ${(props: FormProps) => props.styles}
    `
);

export const BaseForm: FC<FormProps> = (props) => {
    return <BaseFormComponent {...props} />;
};
