import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core';
import { StyleableLabelProps } from '../types/Input.types';

const BaseLabelStyledComponent = themed(styled.label<StyleableLabelProps>(({ styles }) => `${styles}`));

export const BaseLabel: FC<StyleableLabelProps> = (props) => {
    return <BaseLabelStyledComponent {...props} />;
};
