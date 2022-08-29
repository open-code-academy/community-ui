import { CuiColors, themed } from '../../../../core';
import styled from 'styled-components';

import React, { ChangeEvent, FC, useState } from 'react';
import { BorderVariant, StyleableInputGroupProps, StyleableInputProps, StyleableLabelProps } from '../../types';
import { BaseInput, BaseLabel } from '../../base';
import { CssSize, resolveSize, resolvePalette } from '../../../../core';

const StyledInput = themed(
    styled(BaseInput)<StyleableInputProps>(
        (props: StyleableInputProps) => `
        position: relative;
        z-index: ${props.theme?.common.baseZIndex};
        width: ${resolveSize(props.width || props.size, props.theme?.sizes.forms.inputWidth)};
        height: ${resolveSize(props.height || props.size, props.theme?.sizes.forms.inputHeight)};
        border-radius: ${props.borderRadius || props.theme?.sizes.common.borderRadius};
        padding: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(0.1)
            .get()} ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)} 0;
        background-color: ${
            props.backgroundColor
                ? props.backgroundColor
                : props.borderVariant === BorderVariant.NONE
                ? CuiColors.GRAY['20']
                : props.theme?.colors.common.whitespaceColor
        };
        font-size: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
        color: ${props.textColor ? props.textColor : props.theme?.typography.textColor}; 
        outline: none;
        ${resolveBorderType(props)}
        font-family: ${props.fontFamily ? props.fontFamily : props.theme?.typography.fontFamily};

        &::placeholder {
            font-size: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
            color: ${props.placeholderColor ? props.placeholderColor : props.theme?.typography.textColor}; 
            font-family: ${props.fontFamily ? props.fontFamily : props.theme?.typography.fontFamily};
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
        return `border:  ${props.theme?.common.borderStyle} ${props.theme?.sizes.common.borderWidth} ${
            props.borderColor ? props.borderColor : props.theme?.typography.textColor
        };
        `;
    }
    if (props.borderVariant === BorderVariant.UNDERLINE) {
        return `
        border: none;
        border-bottom: ${props.theme?.common.borderStyle} ${props.theme?.sizes.common.borderWidth} ${
            props.borderColor ? props.borderColor : props.theme?.typography.textColor
        };
        `;
    }
    if (props.borderVariant === BorderVariant.NONE) {
        return `border: none;`;
    }
    return '';
};

const StyledLabel = themed(
    styled(BaseLabel)<StyleableLabelProps>(
        (props: StyleableLabelProps) => `
        position: absolute;
        font-size: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(props.active ? 0.6 : 1)
            .get()};
        font-family: ${props.fontFamily || props.theme?.typography.fontFamily};
        color: ${props.labelColor || props.theme?.typography.textColor};
        align-self: start;
        top: ${new CssSize(resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize))
            .multiply(props.active ? 0.2 : 0.9)
            .get()};
        left: ${resolveSize(props.fontSize || props.size, props.theme?.typography.fontSize)};
        opacity: ${props.active ? '1' : '0'};
        transition: all 0.2s ease-in;
        z-index: ${props.theme ? props.theme.common.baseZIndex - 1 : ''};
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
        if (!props.noPreventDefault) {
            e.preventDefault();
        }
        if (e.target.value.length > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
        if (inputProps.onChange !== undefined) inputProps.onChange(e);
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
