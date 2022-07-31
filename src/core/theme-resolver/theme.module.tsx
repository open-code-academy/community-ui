import { Theme, Themeable } from './types';
import { merge } from '../util';
import React, { Component } from 'react';
import { Subtract } from 'utility-types';
import * as defaultConfig from './defaultTheme';

let theme: Theme;

type SubscriberMap = Map<React.Component<any>, React.Component<any>>;
const themeSubscribers: SubscriberMap = new Map();

export const getTheme = (): Theme => {
    return theme;
};

export function themed<T>(Component: React.ComponentType<T>) {
    return class extends React.Component<Subtract<T, Themeable>> {
        constructor(
            props: Subtract<T, Themeable> | Readonly<Subtract<T, Themeable>>
        ) {
            super(props);
            themeSubscribers.set(this, this);
            this.state = {
                theme: theme,
            };
        }
        state = {
            theme: {} as Theme,
        };

        componentWillUnmount() {
            themeSubscribers.delete(this);
        }

        render() {
            return (
                <Component {...(this.props as T)} theme={this.state.theme} />
            );
        }
    };
}

export const applyCustomTheme = (customTheme: Theme | {}): Theme | {} => {
    theme = merge(theme, customTheme);
    if (themeSubscribers) {
        themeSubscribers.forEach((elem) => {
            elem.setState({ theme: theme });
        });
    }
    return theme;
};

const resolveDefaultTheme = (): Theme => {
    return defaultConfig.default;
};

(function init() {
    theme = resolveDefaultTheme();
})();
