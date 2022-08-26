import { CuiColors, themed } from '../../../../core';
import styled from 'styled-components';

import React, { ChangeEvent, FC, useState } from 'react';
import {
    BorderVariant,
    StyleableInputGroupProps,
    StyleableInputProps,
    StyleableLabelProps,
} from '../../types/Input.types';
import { BaseInput } from '../../base/BaseInput.component';
import { BaseLabel } from '../../base/BaseLabel.component';
import { CssSize } from '../../../../core/theme-resolver/util/CssSize.util';
import { resolveSize } from '../../../../core/theme-resolver/util/resolveSize.util';
import { resolvePalette } from '../../../../core/theme-resolver/util/resolvePalette.util';

const StyledInput = themed(
    styled(BaseInput)<StyleableInputProps>(
        (props: StyleableInputProps) => `
        background-color: ${
            props.backgroundColor
                ? props.backgroundColor
                : props.borderVariant === BorderVariant.NONE
                ? CuiColors.GRAY['20']
                : props.theme?.colors.global.whitespaceColor
        };
        font-size: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
        color: ${props.textColor ? props.textColor : props.theme?.typography.textColor}; 
        width: ${resolveSize(props.width || props.size, props.theme?.sizes.forms.inputWidth)};
        max-width: 100%;
        height: ${resolveSize(props.height || props.size, props.theme?.sizes.forms.inputHeight)};        
        outline: none;
        ${resolveBorderType(props)}
        border-radius: ${props.borderRadius || props.theme?.sizes.global.borderRadius};
        padding: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(0.1)
            .get()} ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)} 0;
        font-family: ${props.fontFamily ? props.fontFamily : props.theme?.typography.fontFamily || 'sans-serif'};

        &::placeholder {
            font-size: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
            color: ${props.placeholderColor ? props.placeholderColor : props.theme?.typography.textColor}; 
        }
        &:focus {
            border-color: ${props.borderColor ? props.borderColor : resolvePalette(props).primary};
            ${props.borderVariant === BorderVariant.UNDERLINE ? 'border-bottom: 2px' : 'outline: 1px'} solid ${
            props.borderColor ? props.borderColor : resolvePalette(props).primary
        }; 
            ${props.borderVariant === BorderVariant.UNDERLINE ? 'margin-bottom: -1px' : ''}
        }
        ${props.styles}
    `
    )
);

const resolveBorderType = (props: StyleableInputProps): string => {
    if (props.borderVariant === BorderVariant.OUTLINE || props.borderVariant == undefined) {
        return `border:  1px solid ${props.borderColor ? props.borderColor : props.theme?.typography.textColor};`;
    }
    if (props.borderVariant === BorderVariant.UNDERLINE) {
        return `
        border: none;
        border-bottom: 1px solid ${props.borderColor ? props.borderColor : props.theme?.typography.textColor};
        `;
    }
    if (props.borderVariant === BorderVariant.NONE) {
        return `border: none;`;
    }
    return '';
};

const StyledLabel = themed(
    styled(BaseLabel)<StyleableLabelProps>(
        (props) => `
        position: absolute;
        font-size: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(props.active ? 0.6 : 1)
            .get()};
        font-family: sans-serif;
        color: ${props.labelColor ? props.labelColor : props.theme?.typography.textColor};
        align-self: start;
        top: ${
            props.active
                ? new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
                      .multiply(0.01)
                      .get()
                : new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
                      .multiply(0.9)
                      .get()
        };
        left: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
        opacity: ${props.active ? '1' : '0'};
        transition: all 0.2s ease-in;
        ${props.styles}
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

export const TextInput: FC<StyleableInputGroupProps> = (props) => {
    const { labelProps, labelText, ...inputProps } = props;
    const [active, setActive] = useState(false);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
        inputProps.onChange(e);
    };

    return (
        <OuterDiv>
            <FullWidthDiv>
                <StyledLabel {...labelProps} htmlFor={props.id} form={props.form} active={active}>
                    {labelText ? labelText : inputProps.placeholder}
                </StyledLabel>
            </FullWidthDiv>
            <FullWidthDiv>
                <StyledInput {...inputProps} onChange={(e) => handleChange(e)} />
            </FullWidthDiv>
        </OuterDiv>
    );
};
