import { PartialTheme, Theme, Themeable } from './types';
import { merge } from '../util';
import React, { Component } from 'react';
import DefaultTheme from './DefaultTheme.theme';
import { Subtract } from 'utility-types';

let theme: Theme;
const themeSubscribers: Map<React.Component<Themeable>, React.Component<Themeable>> = new Map();

export const getGlobalTheme = (): Theme => {
    return theme;
};

export function themed<T extends Themeable>(Component: React.ComponentType<T>) {
    return class Themed extends React.Component<Subtract<T, Themeable>> {
        constructor(props: T) {
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
            return <Component {...(this.props as T)} theme={this.state.theme} localTheme={this.state.localTheme} />;
        }
    };
}

export const applyCustomTheme = (customTheme: Theme | {}): Theme | {} => {
    theme = merge(theme, customTheme);
    if (themeSubscribers) {
        themeSubscribers.forEach((elem) => {
            const currentState = elem.state as Themeable;
            elem.setState({
                ...elem.state,
                theme: merge(theme, currentState.localTheme),
            });
        });
    }
    return theme;
};

const resolveDefaultTheme = (): Theme => {
    return DefaultTheme;
};

(function init() {
    theme = resolveDefaultTheme();
})();
