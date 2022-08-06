import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { AnimatedButton as Button } from './AnimatedButton.component';
import { ButtonShapes, ButtonVariant, StyledTextButtonProps } from '../types';
import { getGlobalTheme } from '../../../core';

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
    buttonTheme: getGlobalTheme().buttonTheme.buttonThemes.PRIMARY,
    buttonPadding: getGlobalTheme().buttonTheme.buttonPadding.default,
    buttonShape: ButtonShapes.RECTANGLE,
    fontSize: getGlobalTheme().buttonTheme.fontSize.default,
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
            getGlobalTheme().buttonTheme.buttonThemes.PRIMARY,
            getGlobalTheme().buttonTheme.buttonThemes.SECONDARY,
            getGlobalTheme().buttonTheme.buttonThemes.ERROR,
            getGlobalTheme().buttonTheme.buttonThemes.INFO,
            getGlobalTheme().buttonTheme.buttonThemes.SUCCESS,
            getGlobalTheme().buttonTheme.buttonThemes.WARNING,
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
            getGlobalTheme().buttonTheme.buttonPadding.default,
            getGlobalTheme().buttonTheme.buttonPadding.xs,
            getGlobalTheme().buttonTheme.buttonPadding.sm,
            getGlobalTheme().buttonTheme.buttonPadding.md,
            getGlobalTheme().buttonTheme.buttonPadding.lg,
            getGlobalTheme().buttonTheme.buttonPadding.xl,
            getGlobalTheme().buttonTheme.buttonPadding.xxl,
            getGlobalTheme().buttonTheme.buttonPadding['3xl'],
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
            getGlobalTheme().buttonTheme.fontSize.default,
            getGlobalTheme().buttonTheme.fontSize.xs,
            getGlobalTheme().buttonTheme.fontSize.sm,
            getGlobalTheme().buttonTheme.fontSize.md,
            getGlobalTheme().buttonTheme.fontSize.lg,
            getGlobalTheme().buttonTheme.fontSize.xl,
            getGlobalTheme().buttonTheme.fontSize.xxl,
            getGlobalTheme().buttonTheme.fontSize['3xl'],
        ],
        control: {
            type: 'select',
            labels: ['default', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '3xl'],
        },
    },
};
