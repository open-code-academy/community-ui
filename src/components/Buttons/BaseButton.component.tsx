import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.types';

const BaseButtonStyledComponent = styled.button<ButtonProps>(
    ({ styles }) => `
    padding: 20rem 20rem;
    ${styles}
    `
);

export const BaseButton: FC<ButtonProps> = (props) => {
    const { children } = props;
    return (
        <BaseButtonStyledComponent type="button" {...props}>
            {children}
        </BaseButtonStyledComponent>
    );
};
