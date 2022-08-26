import React, { FC } from 'react';
import styled from 'styled-components';

import { themed } from '../../../core';
import { LabelProps } from '../types/Input.types';

const BaseLabelStyledComponent = themed(styled.label<LabelProps>(({ styles }) => `${styles}`));

export const BaseLabel: FC<LabelProps> = (props) => {
    return <BaseLabelStyledComponent {...props} />;
};
