import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps, ButtonVariant, TextButtonProps } from './Button.types';
import { ButtonPadding, DefaultButtonThemes } from './Button.constants';
import { FontSize } from '../../config';
import { Colors } from '../../config';

const BaseButtonStyledComponent = styled.button<ButtonProps>(
    ({ styles }) => `${styles}`
);

export const BaseButton: FC<ButtonProps> = ({
    buttonPadding,
    children,
    styles,
    onClick,
    ...props
}) => {
    return (
        <BaseButtonStyledComponent
            type="button"
            buttonPadding={buttonPadding}
            onClick={onClick}
            styles={styles}
            {...props}
        >
            {children}
        </BaseButtonStyledComponent>
    );
};
