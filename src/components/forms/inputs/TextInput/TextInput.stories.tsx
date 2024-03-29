import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { BorderVariant, StyleableInputGroupProps } from '../../types/Input.types';
import { TextInput as Input } from './TextInput.component';
import { Palette } from '../../../../core';

export default {
    title: 'Components/forms',
    component: Input,
    argTypes: {},
} as Meta<typeof TextInput>;

const Template: Story<StyleableInputGroupProps> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
    placeholder: 'Example Placeholder',
    labelText: 'Example',
};

TextInput.argTypes = {
    borderVariant: {
        options: [0, 1, 2],
        mapping: [BorderVariant.OUTLINE, BorderVariant.UNDERLINE, BorderVariant.NONE],
        control: {
            type: 'select',
            labels: ['outline', 'underline', 'none'],
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
    disabled: {
        options: [0, 1],
        mapping: [true, false],
        control: {
            type: 'select',
            labels: ['true', 'false'],
        },
    },
};
