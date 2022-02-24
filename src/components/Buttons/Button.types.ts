import {  MouseEventHandler } from 'react';
import {ButtonSizes} from "./Button.constants";


export interface ButtonProps {
    children?: string,
    primary?: boolean,
    disabled?: boolean,
    buttonColor?: string,
    textColor?: string,
    size?: ButtonSizes.SMALL | ButtonSizes.MEDIUM | ButtonSizes.LARGE,
    sizeOverride?: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}