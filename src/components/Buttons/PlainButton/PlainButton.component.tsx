import React, { FC } from 'react';
import styled from 'styled-components';
import { themed, Colors } from '../../../core';
import { BaseButton } from '../BaseButton/BaseButton.component';
import { getInitialBorderColor, textButtonStyles } from '../styles';
import { StyledTextButtonProps } from '../types';

const StyledButton = themed(
    styled(BaseButton)<StyledTextButtonProps>(
        (props) => `
  ${textButtonStyles(props)}
  
  position: relative;
  transition: all 0.2s;
  
  &:hover {
    border: solid 0.125rem ${getInitialBorderColor(props)};
    box-shadow: 0px 0px 5px ${Colors.GRAY['80']}
  }`
    )
);

export const PlainButton: FC<StyledTextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
