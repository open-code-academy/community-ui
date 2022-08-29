import { Theme, Themeable } from './types';
import React from 'react';
import { Subtract } from 'utility-types';
export declare const getGlobalTheme: () => Theme;
export declare function themed<T extends Themeable>(
    Component: React.ComponentType<T>
): {
    new (props: T): {
        state: Themeable;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(
            state:
                | {}
                | ((prevState: Readonly<{}>, props: Readonly<Subtract<T, Themeable>>) => {} | Pick<{}, K> | null)
                | Pick<{}, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Subtract<T, Themeable>> &
            Readonly<{
                children?: React.ReactNode;
            }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<Subtract<T, Themeable>>,
            nextState: Readonly<{}>,
            nextContext: any
        ): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Subtract<T, Themeable>>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Subtract<T, Themeable>>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Subtract<T, Themeable>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Subtract<T, Themeable>>, nextContext: any): void;
        componentWillUpdate?(
            nextProps: Readonly<Subtract<T, Themeable>>,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<Subtract<T, Themeable>>,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
    };
    contextType?: React.Context<any> | undefined;
};
export declare const applyCustomTheme: (customTheme: Theme | {}) => Theme | {};
