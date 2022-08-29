import React, { FC } from 'react';
import styled from 'styled-components';
import { themed, CuiColors } from '../../../core';
import { BaseButton } from '../BaseButton';
import { textButtonStyles } from '../styles';
import { StyledTextButtonProps } from '../types';
import { resolvePalette } from '../../../core';

const StyledButton = themed(
    styled(BaseButton)<StyledTextButtonProps>(
        // using outline instead of border because of weird bug with whitespace
        (props) => `
  ${textButtonStyles(props)}
 
  position: relative;
  transition: all 0.2s;
  
  &:hover {
    outline: ${resolvePalette(props).primary} ${props.theme?.common.borderStyle} ${
            props.theme?.sizes.common.borderWidth
        } ${resolvePalette(props).primary};
    box-shadow: 0px 0px 5px ${CuiColors.GRAY['80']}
  }`
    )
);

export const PlainButton: FC<StyledTextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
