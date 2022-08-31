import { CuiColors, themed } from '../../../core';
import styled from 'styled-components';
import { GridItemProps } from '../types';
import { BaseGridItem } from '../base';
import React, { FC } from 'react';

const StyledGridItem = themed(
    styled(BaseGridItem)<GridItemProps>(
        (props: GridItemProps) => `
        width: ${props.width || 'fit-content'};
        height: ${props.height || 'fit-content'};
        margin: ${props.margin || '0'};
        padding: ${props.padding || '0'};
        background-color: ${props.backgroundColor || CuiColors.TRANSPARENT};
        ${props.gridArea ? `grid-area: ${props.gridArea};` : ''};
        ${props.alignSelf ? `align-self: ${props.alignSelf};` : ''};
        ${props.justifySelf ? `justify-self: ${props.justifySelf};` : ''};
        ${props.gridColumnStart ? `grid-column-start: ${props.gridColumnStart};` : ''}
        ${props.gridColumnEnd ? `grid-column-end: ${props.gridColumnEnd};` : ''}
        ${props.gridRowStart ? `grid-row-start: ${props.gridRowStart};` : ''}
        ${props.gridRowEnd ? `grid-row-end: ${props.gridRowEnd};` : ''}
        
        ${props.styles}
        `
    )
);

export const GridItem: FC<GridItemProps> = (props) => {
    return <StyledGridItem {...props}>{props.children}</StyledGridItem>;
};
