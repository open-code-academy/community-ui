import React,{FC} from 'react'
import styled from 'styled-components';

import {ButtonVariant, TextButtonProps} from "./Button.types";
import {ButtonPadding, DefaultButtonThemes} from "./Button.constants";
import {FontSize} from "../../config";
import {Colors} from "../../config";

const StyledButton = styled.button<TextButtonProps>`
    position: relative;
	padding: ${props => props.buttonPadding || ButtonPadding.default} ;
	width: fit-content;
	font-size: ${props => props.fontSize || FontSize.default} ;
	color: ${props => getTextColorForVariant(props)};
	background-color: ${props => getBackgroundColorForVariant(props)};
	border: solid .125em  ${props => resolveBorderColor(props)};
	transition: all 0.4s;
	cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
	box-sizing: content-box;

	&:focus,
	&:active {
		outline:  ${props => resolveBorderColor(props)};
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
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
		top: -2%;
		left: 50%;
		transform: translateX(-50%);
		background-color: ${props => resolveBackgroundColor(props)};
		border: none;
		height: 104%;
		width: 101%;
		opacity: 1;
		z-index: -1;
	}
	&:hover {
        border: solid .125em ${props => resolveBorderColor(props)};
        color:  ${props => resolveTextColor(props)};
	}
`;

const getBackgroundColorForVariant = (props : TextButtonProps) => {
    switch (props.buttonVariant) {
        case ButtonVariant.OUTLINE:
            return Colors.TRANSPARENT;
        case ButtonVariant.SOLID:
            return resolveBackgroundColor(props)
    }
}

const resolveBackgroundColor = ({ buttonTheme, disabled } : TextButtonProps) => {
    let color = buttonTheme?.backgroundColor || DefaultButtonThemes.PRIMARY.backgroundColor;
    return disabled ? (buttonTheme?.disabledBackgroundColor || DefaultButtonThemes.PRIMARY.disabledBackgroundColor): color;
}

const resolveBorderColor = ({buttonTheme, disabled} : TextButtonProps) => {
    let color = buttonTheme?.borderColor || DefaultButtonThemes.PRIMARY.borderColor;
    return disabled ? (buttonTheme?.disabledBorderColor || DefaultButtonThemes.PRIMARY.disabledBorderColor): color;
}

const getTextColorForVariant = (props : TextButtonProps) => {
    switch (props.buttonVariant) {
        case ButtonVariant.OUTLINE:
            return resolveBorderColor(props);
        case ButtonVariant.SOLID:
            return resolveTextColor(props)
    }
}

const resolveTextColor = ({disabled, buttonTheme} : TextButtonProps) => {
    let color =  buttonTheme?.contentColor || DefaultButtonThemes.PRIMARY.contentColor;
    return disabled ? (buttonTheme?.disabledContentColor || DefaultButtonThemes.PRIMARY.disabledContentColor): color;
}

const Button: FC<TextButtonProps> = ({buttonTheme,buttonPadding, buttonVariant,children,fontSize,onClick, ...props}) => {
    return (
        <StyledButton
            type='button'
            buttonVariant={buttonVariant}
            buttonTheme={buttonTheme}
            buttonPadding={buttonPadding}
            fontSize={fontSize}
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledButton>
    )
}

export default Button;