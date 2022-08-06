import React, { FC } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton';
import { themed } from '../../../core';
import {
    getInitialBorderColor,
    resolveBackgroundColor,
    resolveTextColor,
    textButtonStyles,
} from '../styles';
import { StyledTextButtonProps } from '../types';

const StyledButton = themed(
    styled(BaseButton)<StyledTextButtonProps>(
        (props) => `
  ${textButtonStyles(props)}

  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  

  &:focus,
  &:active {
    outline: ${getInitialBorderColor(props)};
  }

  &::after {
    content: '';
    position: absolute;
    top: -3%;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 0;
    opacity: 1;
    z-index: -1;
    transition: all 0.15s ease;
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: -3%;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${resolveBackgroundColor(props)};
    height: 110%;
    width: 110%;
    opacity: 1;
    z-index: -1;
  }

  &:hover {
    border: solid 0.125rem ${getInitialBorderColor(props)};
    color: ${resolveTextColor(props)};
  }`
    )
);

export const AnimatedButton: FC<StyledTextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
