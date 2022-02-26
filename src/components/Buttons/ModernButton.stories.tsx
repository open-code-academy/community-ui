import React from "react";
import {Meta, Story} from '@storybook/react';

import Button from './ModernButton.component';
import {ButtonVariant, TextButtonProps} from "../index"
import {ButtonPadding, DefaultButtonThemes} from "./Button.constants";

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {
    },
} as Meta<typeof Button>;

const Template: Story<TextButtonProps> = (args) => <Button {...args} />;

export const ModernButton = Template.bind({});
ModernButton.args = {
    buttonVariant: ButtonVariant.OUTLINE,
    disabled: false,
    children: 'Modern Button',
    buttonTheme: DefaultButtonThemes.PRIMARY,
    buttonPadding: ButtonPadding["3xl"],
    fontSize: "",
};
ModernButton.argTypes = {
    buttonVariant:  {
        options: [0,1],
        mapping: [ButtonVariant.SOLID, ButtonVariant.OUTLINE],
        control: {
            type: 'select',
            labels: ['solid', 'outline']
        }
    },
    buttonTheme: {
        options: [0,1,2,3,4,5],
        mapping: [
            DefaultButtonThemes.PRIMARY,
            DefaultButtonThemes.SECONDARY,
            DefaultButtonThemes.ERROR,
            DefaultButtonThemes.INFO,
            DefaultButtonThemes.SUCCESS,
            DefaultButtonThemes.WARNING
        ],
        control: {
            type: 'select',
            labels: ['Primary', 'Secondary', 'Error', 'Info', 'Success', 'Warning']
        }
    }
}
