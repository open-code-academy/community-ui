import React, { FC } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton/BaseButton.component';
import {
    TextButtonProps,
    textButtonStyles,
    getInitialBorderColor,
} from '../common';
import { Colors } from '../../../core';

const StyledButton = styled(BaseButton)<TextButtonProps>(
    (props) => `
  ${textButtonStyles(props)}
  
  position: relative;
  transition: all 0.2s;
  
  &:hover {
    border: solid 0.125rem ${getInitialBorderColor(props)};
    box-shadow: 0px 0px 5px ${Colors.GRAY['80']}
  }`
);

export const PlainButton: FC<TextButtonProps> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};
