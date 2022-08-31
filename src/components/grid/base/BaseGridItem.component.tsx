import React, { FC } from 'react';
import styled from 'styled-components';
import { themed } from '../../../core';
import { GridItemProps } from '../types/Grid.types';

const StyledGridItem = themed(
    styled.div`
        ${(props: GridItemProps) => props.styles}
    `
);

export const BaseGridItem: FC<GridItemProps> = (props) => {
    return <StyledGridItem {...props}>{props.children}</StyledGridItem>;
};
