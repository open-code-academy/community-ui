import { Styleable, Themeable } from '../../../core';
import React from 'react';

export interface FormProps extends Themeable, Styleable, React.FormHTMLAttributes<HTMLFormElement> {}
