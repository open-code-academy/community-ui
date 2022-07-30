import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { AnimatedButton as Button } from './AnimatedButton.component';
import { ButtonShapes, ButtonVariant, StyledTextButtonProps } from '../types';
import { getTheme } from '../../../core/theme-resolver/theme.module';

export default {
    title: 'Components/Buttons',
    component: Button,
    argTypes: {},
} as Meta<typeof Button>;

const Template: Story<StyledTextButtonProps> = (args) => (
    <Button {...args} children={args.children} />
);

export const AnimatedButton = Template.bind({});
AnimatedButton.args = {
    buttonVariant: ButtonVariant.OUTLINE,
    disabled: false,
    children: 'Animated Button',
    buttonTheme: getTheme()?.buttonTheme?.buttonThemes?.PRIMARY,
    buttonPadding: getTheme()?.buttonTheme?.buttonPadding?.default,
    buttonShape: ButtonShapes.RECTANGLE,
    fontSize: getTheme()?.buttonTheme?.fontSize?.default,
};

AnimatedButton.argTypes = {
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
            getTheme()?.buttonTheme?.buttonThemes?.PRIMARY,
            getTheme()?.buttonTheme?.buttonThemes?.SECONDARY,
            getTheme()?.buttonTheme?.buttonThemes?.ERROR,
            getTheme()?.buttonTheme?.buttonThemes?.INFO,
            getTheme()?.buttonTheme?.buttonThemes?.SUCCESS,
            getTheme()?.buttonTheme?.buttonThemes?.WARNING,
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
        options: [0, 1, 2, 3, 4, 5, 6, 7],
        mapping: [
            getTheme()?.buttonTheme?.buttonPadding?.default,
            getTheme()?.buttonTheme?.buttonPadding?.xs,
            getTheme()?.buttonTheme?.buttonPadding?.sm,
            getTheme()?.buttonTheme?.buttonPadding?.md,
            getTheme()?.buttonTheme?.buttonPadding?.lg,
            getTheme()?.buttonTheme?.buttonPadding?.xl,
            getTheme()?.buttonTheme?.buttonPadding?.xxl,
            getTheme()?.buttonTheme?.buttonPadding?.['3xl'],
        ],
        control: {
            type: 'select',
            labels: ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
    buttonShape: {
        options: [0, 1, 2],
        mapping: [
            ButtonShapes.ROUNDED,
            ButtonShapes.RECTANGLE,
            ButtonShapes.PILL,
        ],
        control: {
            type: 'select',
            labels: ['rounded', 'rectangle', 'pill'],
        },
    },
    fontSize: {
        options: [0, 1, 2, 3, 4, 5, 6, 7],
        mapping: [
            getTheme()?.buttonTheme?.fontSize?.default,
            getTheme()?.buttonTheme?.fontSize?.xs,
            getTheme()?.buttonTheme?.fontSize?.sm,
            getTheme()?.buttonTheme?.fontSize?.md,
            getTheme()?.buttonTheme?.fontSize?.lg,
            getTheme()?.buttonTheme?.fontSize?.xl,
            getTheme()?.buttonTheme?.fontSize?.xxl,
            getTheme()?.buttonTheme?.fontSize?.['3xl'],
        ],
        control: {
            type: 'select',
            labels: ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
};
