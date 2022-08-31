import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { PlainButton as Button } from './PlainButton.component';
import { ButtonVariant, StyledTextButtonProps } from '../types';
import { Palette, Size } from '../../../core';

export default {
    title: 'Components/buttons',
    component: Button,
    argTypes: {},
} as Meta<typeof Button>;

const Template: Story<StyledTextButtonProps> = (args) => <Button {...args} children={args.children} />;

export const PlainButton = Template.bind({});
PlainButton.args = {
    buttonVariant: ButtonVariant.SOLID,
    disabled: false,
    children: 'Plain Button',
};

PlainButton.argTypes = {
    buttonVariant: {
        options: [0, 1],
        mapping: [ButtonVariant.SOLID, ButtonVariant.OUTLINE],
        control: {
            type: 'select',
            labels: ['solid', 'outline'],
        },
    },
    palette: {
        options: [0, 1, 2, 3, 4, 5, 6],
        mapping: [
            Palette.PRIMARY,
            Palette.SECONDARY,
            Palette.ERROR,
            Palette.INFO,
            Palette.SUCCESS,
            Palette.WARNING,
            Palette.DISABLED,
        ],
        control: {
            type: 'select',
            labels: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'disabled'],
        },
    },
    buttonPadding: {
        options: [0, 1, 2, 3, 4, 5, 6, 7],
        mapping: [Size.default, Size.xs, Size.sm, Size.md, Size.lg, Size.xl, Size.xxl, Size['3xl']],
        control: {
            type: 'select',
            labels: ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
    fontSize: {
        options: [0, 1, 2, 3, 4, 5, 6, 7],
        mapping: [Size.default, Size.xs, Size.sm, Size.md, Size.lg, Size.xl, Size.xxl, Size['3xl']],
        control: {
            type: 'select',
            labels: ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
};
