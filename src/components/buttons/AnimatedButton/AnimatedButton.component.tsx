import React, { FC } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton';
import { themed, resolvePalette, CssSize } from '../../../core';
import { textButtonStyles } from '../styles';
import { ButtonVariant, StyledTextButtonProps } from '../types';

const StyledButton = themed(
    styled(BaseButton)<StyledTextButtonProps>(
        (props: StyledTextButtonProps) => `
  ${textButtonStyles(props)}

  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  ${props.theme ? `z-index: ${props.theme.common.baseZIndex + 1};` : ''}


  &::after {
    content: '';
    position: absolute;
    will-change: transform;
    top: -3%;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 0;
    opacity: 1;
    transition: all 0.15s ease;
  }

  &:hover::after {
    position: absolute;
    top: -3%;
    left: 50%;
    transform: translateX(-50%) scaleX(1.1) scaleY(1.1);
    background-color: ${
        props.buttonVariant == ButtonVariant.OUTLINE ? resolvePalette(props).primary : resolvePalette(props).dark
    };
    height: 110%;
    width: 110%;
    opacity: 1;

  }
  &::before {
    transition: all .4s ease;
    position: absolute;
    content: '${props.children}';
    color: ${resolvePalette(props).primary};
    ${props.theme ? `z-index: ${props.theme.common.baseZIndex + 1};` : ''}
    opacity: 0;
  }
  
  &:hover::before {
    position: absolute;
    content: '${props.children}';
    color: ${resolvePalette(props).contrast};
    ${props.theme ? `z-index: ${props.theme.common.baseZIndex + 1};` : ''}
    transition: all .4s ease; //TODO: add transitions to theme;
    opacity: 1;
  }

  &:hover {
    outline-color: ${
        props.buttonVariant == ButtonVariant.OUTLINE ? resolvePalette(props).primary : resolvePalette(props).dark
    }; 
    color: ${resolvePalette(props).contrast};
  }`
    )
);

export const AnimatedButton: FC<StyledTextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
