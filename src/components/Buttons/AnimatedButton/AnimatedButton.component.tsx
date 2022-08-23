import React, { FC } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton';
import { themed } from '../../../core';
import { textButtonStyles } from '../styles';
import { ButtonVariant, StyledTextButtonProps } from '../types';
import { resolvePalette } from '../../../core/theme-resolver/util/resolvePalette.util';

const StyledButton = themed(
    styled(BaseButton)<StyledTextButtonProps>(
        (props) => `
  ${textButtonStyles(props)}

  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  

  &:focus,
  &:active {
    outline: ${resolvePalette(props).primary};
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
    background-color: ${
        props.buttonVariant == ButtonVariant.OUTLINE ? resolvePalette(props).primary : resolvePalette(props).dark
    };
    height: 110%;
    width: 110%;
    opacity: 1;
  }

  &:hover {
    border: solid 0.125rem ${resolvePalette(props).primary};
    color: ${resolvePalette(props).contrast};
  }`
    )
);

export const AnimatedButton: FC<StyledTextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
