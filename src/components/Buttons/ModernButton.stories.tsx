import React from "react";
import { Story, Meta } from '@storybook/react';

import Button  from './ModernButton.component';
import {ButtonProps, ButtonSizes} from "../index"

export default {
    title: 'Components/Buttons/ModernButton',
    component: Button,
    argTypes: {
    },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    disabled: false,
    children: 'Primary',
    sizeOverride: ""
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    disabled: false,
    children: "Secondary",
    sizeOverride: ""
};

export const Disabled = Template.bind({});
Disabled.args = {
    primary: false,
    disabled: true,
    children: 'Disabled',
    sizeOverride: ""
};

export const Small = Template.bind({});
Small.args = {
    primary: true,
    disabled: false,
    size: ButtonSizes.LARGE,
    children: 'Small',
    sizeOverride: ""
};

export const Medium = Template.bind({});
Medium.args = {
    primary: true,
    disabled: false,
    size: ButtonSizes.MEDIUM,
    children: 'Medium',
    sizeOverride: ""
};

export const Large = Template.bind({});
Large.args = {
    primary: true,
    disabled: false,
    size: ButtonSizes.LARGE,
    children: 'Large',
    sizeOverride: ""
};