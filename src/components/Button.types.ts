import {  MouseEventHandler } from "react"

export interface ButtonProps {
    text?: string,
    primary?:boolean,
    disabled?: boolean,
    primaryColor?: string,
    secondaryColor?: string,
    size?: "small" | "medium" | "large",
    onClick?: MouseEventHandler<HTMLButtonElement>
}