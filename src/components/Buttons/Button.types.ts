import {  MouseEventHandler } from 'react';
import {ButtonSizes} from "./Button.constants";


export interface ButtonProps {
    text?: string,
    primary?: boolean,
    disabled?: boolean,
    buttonColor?: string,
    textColor?: string,
    size?: ButtonSizes.SMALL | ButtonSizes.MEDIUM | ButtonSizes.LARGE,
    textSizeOverride?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}