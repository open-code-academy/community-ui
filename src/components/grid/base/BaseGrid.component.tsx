import React, { FC } from 'react';
import styled from 'styled-components';
import { themed } from '../../../core';
import { GridProps } from '../types';

const BaseGridComponent = themed(
    styled.div`
        ${(props: GridProps) => props.styles}
    `
);

export const BaseGrid: FC<GridProps> = (props) => {
    return <BaseGridComponent {...props} />;
};
