import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { ModernButton as Button } from './ModernButton.component';
import { ButtonVariant, TextButtonProps } from '../index';
import { ButtonPadding, DefaultButtonThemes } from './Button.constants';
import { FontSize } from '../../config';

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {},
} as Meta<typeof Button>;

const Template: Story<TextButtonProps> = (args) => <Button {...args} />;

export const ModernButton = Template.bind({});
ModernButton.args = {
    buttonVariant: ButtonVariant.OUTLINE,
    disabled: false,
    children: 'Modern Button',
    buttonTheme: DefaultButtonThemes.PRIMARY,
    buttonPadding: ButtonPadding.default,
    fontSize: FontSize.default,
};

ModernButton.argTypes = {
    buttonVariant: {
        options: [0, 1],
        mapping: [ButtonVariant.SOLID, ButtonVariant.OUTLINE],
        control: {
            type: 'select',
            labels: ['solid', 'outline'],
        },
    },
    buttonTheme: {
        options: [0, 1, 2, 3, 4, 5],
        mapping: [
            DefaultButtonThemes.PRIMARY,
            DefaultButtonThemes.SECONDARY,
            DefaultButtonThemes.ERROR,
            DefaultButtonThemes.INFO,
            DefaultButtonThemes.SUCCESS,
            DefaultButtonThemes.WARNING,
        ],
        control: {
            type: 'select',
            labels: [
                'Primary',
                'Secondary',
                'Error',
                'Info',
                'Success',
                'Warning',
            ],
        },
    },
    buttonPadding: {
        options: [0, 1, 2, 3, 4, 5, 6],
        mapping: [
            ButtonPadding.default,
            ButtonPadding.xs,
            ButtonPadding.sm,
            ButtonPadding.md,
            ButtonPadding.lg,
            ButtonPadding.xl,
            ButtonPadding.xxl,
            ButtonPadding['3xl'],
        ],
        control: {
            type: 'select',
            labels: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
    fontSize: {
        options: [0, 1, 2, 3, 4, 5, 6],
        mapping: [
            FontSize.default,
            FontSize.xs,
            FontSize.sm,
            FontSize.md,
            FontSize.lg,
            FontSize.xl,
            FontSize.xxl,
            FontSize['3xl'],
        ],
        control: {
            type: 'select',
            labels: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
};
