import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.types';

const BaseButtonStyledComponent = styled.button<ButtonProps>(
    ({ styles }) => `${styles}`
);

export const ButtonBase: FC<ButtonProps> = (props) => {
    return <BaseButtonStyledComponent {...props} />;
};
