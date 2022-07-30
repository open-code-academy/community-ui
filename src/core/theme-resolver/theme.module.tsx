import { Theme, Themeable } from './types/Theme.types';
import { merge } from '../util';
import React, { Component } from 'react';
import { Subtract } from 'utility-types';

let theme: Theme;

export const getTheme = (): Theme => {
    return theme;
};

export function themed<T>(Component: React.ComponentType<T>) {
    return class extends React.Component<Subtract<T, Themeable>> {
        state = { theme: {} as Theme };
        async componentDidMount() {
            const theme = await getTheme();
            this.setState({ theme });
        }
        render() {
            return (
                <Component {...(this.props as T)} theme={this.state.theme} />
            );
        }
    };
}

const resolveCustomTheme = (): Theme => {
    // fixme: need a better way to do this
    try {
        return require('/community-ui.config.ts')?.default;
    } catch (e) {
        return require('../../../community-ui.config').default;
    }
};

const resolveDefaultTheme = (): Theme => {
    return require('./defaultTheme').default;
};

(function init() {
    theme = merge(resolveDefaultTheme(), resolveCustomTheme());
})();
