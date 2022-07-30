import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core/theme-resolver/theme.module';
import { ButtonProps } from '../types';

const BaseButtonStyledComponent = themed(
    styled.button<ButtonProps>(({ styles }) => `${styles}`)
);

export const BaseButton: FC<ButtonProps> = (props) => {
    return <BaseButtonStyledComponent {...props} />;
};
