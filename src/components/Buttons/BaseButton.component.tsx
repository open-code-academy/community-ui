import React, { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps, ButtonVariant, TextButtonProps } from './Button.types';
import { ButtonPadding, DefaultButtonThemes } from './Button.constants';
import { FontSize } from '../../config';
import { Colors } from '../../config';

export const BaseButtonStyledComponent = <T extends ButtonProps>(props: T) => {
    const UnstyledButton = styled.button<ButtonProps>(
        ({ styles }) => `
    padding: 20rem 20rem;
    ${styles}
    `
    );
    return <UnstyledButton {...props} />;
};

// export const BaseButton: FC<> = (props) => {
//     const {children} = props;
//     return (
//         <BaseButtonStyledComponent
//             type="button"
//             {...props}
//         >
//             {children}
//         </BaseButtonStyledComponent>
//     );
// };
