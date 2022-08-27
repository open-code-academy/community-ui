import { themed } from '../../../core';
import styled from 'styled-components';
import { BaseLabel, StyleableLabelProps } from '../../forms';
import { CssSize } from '../../../core/theme-resolver/util/CssSize.util';
import { resolveSize } from '../../../core/theme-resolver/util/resolveSize.util';
import { BaseGrid } from '../base/BaseGrid.component';
import { GridProps } from '../types/Grid.types';

const StyledGrid = themed(
    styled(BaseGrid)<GridProps>(
        (props) => `
        position: absolute;
        font-size: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(props.active ? 0.6 : 1)
            .get()};
        font-family: ${props.fontFamily ? props.fontFamily : props.theme?.typography.fontFamily};
        color: ${props.labelColor ? props.labelColor : props.theme?.typography.textColor};
        align-self: start;
        top: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(props.active ? 0.2 : 0.9)
            .get()};
        left: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
        opacity: ${props.active ? '1' : '0'};
        transition: all 0.2s ease-in;
        ${props.styles}
    `
    )
);

export default StyledGrid;
