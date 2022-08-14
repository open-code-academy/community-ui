import { CSSDirection, themed } from '../../../core';
import styled from 'styled-components';

import React, { ChangeEvent, FC, useState } from 'react';
import { StyledInputProps, StyledLabelProps } from '../types/Input.types';
import { BaseInput } from '../Base/BaseInput.component';
import { BaseLabel } from '../Base/BaseLabel.component';
import {
    resolveSize,
    SizeUtil,
} from '../../../core/theme-resolver/util/size.util';

const StyledInput = themed(
    styled(BaseInput)<StyledInputProps>(
        (props) => `
        background-color: ${
            props.theme?.formTheme.formThemes.PRIMARY.backgroundColor
        };
        font-size: ${resolveSize(
            props.fontSize,
            props.theme?.typography.fontSize
        )};
        color: ${props.theme?.formTheme.formThemes.PRIMARY.contentColor};
        width: ${props.width ? props.width : '100%'};
        height: ${resolveSize(
            props.height,
            props.theme?.formTheme.inputHeight
        )};
        border: 1px solid ${
            props.theme?.formTheme.formThemes.PRIMARY.borderColor
        };
        padding: ${resolveSize(
            props.padding,
            props.theme?.formTheme.inputPadding
        )};
        font-family: sans-serif;

        &::placeholder {
            font-size: ${resolveSize(
                props.fontSize,
                props.theme?.typography.fontSize
            )};
            color: ${props.theme?.formTheme.formThemes.PRIMARY.contentColor};
        }
        &:focus {
            outline: none;
            border: 2px solid ${
                props.theme?.formTheme.formThemes.PRIMARY.borderColor
            }; 
        }
    `
    )
);

const StyledLabel = themed(
    styled(BaseLabel)<StyledLabelProps>(
        (props) => `
        position: absolute;
        font-size: ${new SizeUtil(
            resolveSize(props.fontSize, props.theme?.typography.fontSize)
        )
            .multiply(props.active ? 0.6 : 1)
            .get()};
        font-family: sans-serif;
        color: ${props.theme?.formTheme.formThemes.PRIMARY.contentColor};
        align-self: start;
        padding: ${new SizeUtil(
            resolveSize(props.padding, props.theme?.formTheme.inputPadding)
        )
            .left(0.5)
            .get(CSSDirection.LEFT)};
        top: ${
            props.active
                ? new SizeUtil(
                      resolveSize(
                          props.fontSize,
                          props.theme?.typography.fontSize
                      )
                  )
                      .multiply(0.25)
                      .get()
                : resolveSize(props.fontSize, props.theme?.typography.fontSize)
        };
        left: ${resolveSize(
            props.padding,
            props.theme?.formTheme.inputPadding
        )};
        opacity: ${props.active ? '1' : '0'};
        transition: all 0.2s ease;
    `
    )
);

const FullWidthDiv = styled.div`
    display: flex;
    width: 100%;
`;

const OuterDiv = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;
`;

export const StyledTextInput: FC<StyledInputProps> = (props) => {
    const [active, setActive] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
        props.onChange(e);
    };

    return (
        <OuterDiv>
            <FullWidthDiv>
                <StyledLabel {...props} htmlFor={props.id} active={active}>
                    {props.placeholder}
                </StyledLabel>
            </FullWidthDiv>
            <FullWidthDiv>
                <StyledInput {...props} onChange={(e) => handleChange(e)} />
            </FullWidthDiv>
        </OuterDiv>
    );
};
