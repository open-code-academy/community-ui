import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button.types';

const BaseButtonStyledComponent = styled.button<ButtonProps>(
    ({ styles }) => `${styles}`
);

const buildBaseButton = <T extends ButtonProps>(props: T) => {
    const { ariaSettings } = props;
    return styled(BaseButtonStyledComponent).attrs({ ...ariaSettings })``;
};

export const BaseButton: FC<ButtonProps> = (props) => {
    const BaseButton = buildBaseButton(props);
    return <BaseButton {...props} />;
};
