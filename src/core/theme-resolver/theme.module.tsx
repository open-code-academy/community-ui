import { PartialTheme, Theme, Themeable } from './types';
import { merge } from '../util';
import React, { Component } from 'react';
import * as defaultConfig from './defaultTheme';

let theme: Theme;
const themeSubscribers: Map<
    React.Component<Themeable>,
    React.Component<Themeable>
> = new Map();

export const getGlobalTheme = (): Theme => {
    return theme;
};

export function themed<T extends object>(Component: React.ComponentType<T>) {
    return class extends React.Component<Themeable> {
        constructor(props: Themeable) {
            super(props);
            themeSubscribers.set(this, this);
            this.state = {
                theme: merge(theme, props.localTheme),
                localTheme: props.localTheme || {},
            };
        }
        state: Themeable = {
            theme: {} as Theme,
            localTheme: {} as PartialTheme,
        };

        componentWillUnmount() {
            themeSubscribers.delete(this);
        }

        render() {
            return (
                <Component
                    {...(this.props as T)}
                    theme={this.state.theme}
                    localTheme={this.state.localTheme}
                />
            );
        }
    };
}

export const applyCustomTheme = (customTheme: Theme | {}): Theme | {} => {
    theme = merge(theme, customTheme);
    if (themeSubscribers) {
        themeSubscribers.forEach((elem) => {
            const currentState = elem.state as Themeable;
            elem.setState({
                theme: merge(theme, currentState.localTheme),
                ...elem.state,
            });
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
