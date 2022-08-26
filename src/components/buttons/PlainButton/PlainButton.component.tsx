import React, { FC } from 'react';
import styled from 'styled-components';
import { themed, CuiColors } from '../../../core';
import { BaseButton } from '../BaseButton';
import { textButtonStyles } from '../styles';
import { StyledTextButtonProps } from '../types';
import { resolvePalette } from '../../../core/theme-resolver/util/resolvePalette.util';

const StyledButton = themed(
    styled(BaseButton)<StyledTextButtonProps>(
        (props) => `
  ${textButtonStyles(props)}
  
  position: relative;
  transition: all 0.2s;
  
  &:hover {
    border: solid 0.125rem ${resolvePalette(props).primary};
    box-shadow: 0px 0px 5px ${CuiColors.GRAY['80']}
  }`
    )
);

export const PlainButton: FC<StyledTextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
