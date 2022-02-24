import React,{FC} from 'react'
import styled from 'styled-components';

import {ButtonProps} from './Button.types'
import {ButtonColor, ButtonSizes} from "./Button.constants";

const StyledButton = styled.button<ButtonProps>`
  
    position: relative;
	padding: .7em 1.4em;
	width: fit-content;
	font-size: ${props => props.size == ButtonSizes.SMALL ? '10px' : (props.size == ButtonSizes.MEDIUM ? '15px' : '20px' )  };
	color: ${props => props.primary ? props.textColor : props.buttonColor};
	background-color: ${props => props.primary ? props.buttonColor : 'transparent'};
	border: solid 2px  ${props => props.primary ?  props.textColor :  props.buttonColor};
	transition: all 0.4s;
	cursor: pointer;
	box-sizing: content-box;

	&:focus,
	&:active {
		outline: ${props => props.buttonColor};
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 0%;
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
		background-color: ${props => props.disabled ? 'none' : props.buttonColor};
		border: none;
		height: 104%;
		width: 101%;
		opacity: 1;
		z-index: -1;
	}
	&:hover {
        border: solid 2px ${props => props.disabled ? 'none' :  props.buttonColor};
        color:  ${props => props.textColor};
	}
`;

const Button: FC<ButtonProps> = ({size, primary, disabled, text, onClick, buttonColor,textColor, ...props}) => {

    let bColor = buttonColor ? buttonColor : ButtonColor.PRIMARY;
    let tColor = textColor ? textColor : ButtonColor.TEXT_COLOR;
    if (disabled) {
        bColor += 'bb';
        primary = true;
    }

    return (
        <StyledButton
            type='button'
            onClick={onClick}
            primary={primary}
            disabled={disabled}
            size={size}
            buttonColor={bColor}
            textColor={tColor}
            {...props}
        >
            {text}
        </StyledButton>
    )
}

export default Button;