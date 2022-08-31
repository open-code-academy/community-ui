import React, { FC } from 'react';
import { CuiColors, themed } from '../../../core';
import styled from 'styled-components';
import { BaseGrid } from '../base';
import { GridProps } from '../types';

const StyledGrid = themed(
    styled(BaseGrid)<GridProps>(
        (props: GridProps) => `
        display: grid;
        width: ${props.width || '100%'};
        height: ${props.height || '100%'};
        margin: ${props.margin || '0'};
        padding: ${
            props.padding || '0'
        }; // TODO: look into whether I should really be setting this 0 or some global value
        background-color: ${props.backgroundColor || CuiColors.TRANSPARENT};  
        ${props.gridTemplateAreas ? `grid-template-areas: ${props.gridTemplateAreas};` : ''};
        ${props.gridTemplateColumns ? `grid-template-columns: ${props.gridTemplateColumns};` : ''};
        ${props.gridTemplateRows ? `grid-template-rows: ${props.gridTemplateRows};` : ''};
        ${props.gridAutoRows ? `grid-auto-columns: ${props.gridAutoRows};` : ''};
        ${props.gridAutoRows ? `grid-auto-columns: ${props.gridAutoRows};` : ''};
        gap: ${props.gap || props.theme?.sizes.common.gridGap};
        ${props.columnGap ? `column-gap: ${props.columnGap};` : ''};
        ${props.rowGap ? `row-gap: ${props.rowGap};` : ''};
        ${props.gridAutoColumns ? `grid-auto-rows: ${props.gridAutoColumns};` : ''};
        ${props.gridAutoRows ? `grid-auto-columns: ${props.gridAutoRows};` : ''};
        ${props.alignItems ? `align-items: ${props.alignItems};` : ''};
        ${props.justifyItems ? `justify-items: ${props.justifyItems};` : ''};
        
        ${props.styles}
        `
    )
);

export const CSSGrid: FC<GridProps> = (props) => {
    return <StyledGrid {...props}>{props.children}</StyledGrid>;
};
