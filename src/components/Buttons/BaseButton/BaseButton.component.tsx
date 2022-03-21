import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../common';

const BaseButtonStyledComponent = styled.button<ButtonProps>(
    ({ styles }) => `${styles}`
);

export const BaseButton: FC<ButtonProps> = (props) => {
    return <BaseButtonStyledComponent {...props} />;
};
