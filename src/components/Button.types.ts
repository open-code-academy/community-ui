import {  MouseEventHandler } from 'react';
import {ButtonSizes} from "./Button.constants";


export interface ButtonProps {
    text?: string,
    primary?:boolean,
    disabled?: boolean,
    primaryColor?: string,
    secondaryColor?: string,
    size?: ButtonSizes.SMALL | ButtonSizes.MEDIUM | ButtonSizes.LARGE,
    onClick?: MouseEventHandler<HTMLButtonElement>
}