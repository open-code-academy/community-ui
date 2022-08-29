import { BoxComponent, Styleable, Themeable } from '../../../core';

export interface FormProps extends Themeable, Styleable {
    acceptCharset?: string | undefined;
    action?: string | undefined;
    autoComplete?: string | undefined;
    encType?: string | undefined;
    method?: string | undefined;
    name?: string | undefined;
    noValidate?: boolean | undefined;
    target?: string | undefined;
}

export interface StyledFormProps extends FormProps, BoxComponent {}
