import React, { FC } from 'react';
import styled from 'styled-components';

import { TextButtonProps } from './base/Button.types';
import { TextButton } from './base/TextButton.component';
import {
    resolveBackgroundColor,
    getInitialBorderColor,
    resolveTextColor,
} from './utils/ButtonStyle.utils';
import { Colors } from '../../config';

const StyledButton = styled(TextButton)<TextButtonProps>(
    (props) => `
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
