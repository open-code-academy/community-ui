/// <reference types="react" />
export declare const CSSGrid: {
    new (
        props: {
            localTheme?:
                | import('utility-types/dist/mapped-types')._DeepPartialObject<import('../../../core').Theme>
                | undefined;
            palette?: import('../../../core').Palette | undefined;
            disabled?: boolean | undefined;
            children?: import('react').ReactNode;
            styles?: string | undefined;
            backgroundColor?: string | undefined;
            width?: string | undefined;
            height?: string | undefined;
            gridTemplateArea?: string | undefined;
            gridTemplateColumns?: string | undefined;
            gridTemplateRows?: string | undefined;
            gap?: string | undefined;
            columnGap?: string | undefined;
            rowGap?: string | undefined;
            gridAutoRows?: string | undefined;
            gridAutoColumns?: string | undefined;
            alignItems?: import('../types/Grid.types').Align | undefined;
            justifyItems?: import('../types/Grid.types').Justify | undefined;
            padding?: string | undefined;
            margin?: string | undefined;
        } & {
            theme?: any;
        }
    ): {
        state: import('../../../core').Themeable;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(
            state:
                | {}
                | ((
                      prevState: Readonly<{}>,
                      props: Readonly<
                          import('utility-types').Subtract<
                              {
                                  localTheme?:
                                      | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                            import('../../../core').Theme
                                        >
                                      | undefined;
                                  palette?: import('../../../core').Palette | undefined;
                                  disabled?: boolean | undefined;
                                  children?: import('react').ReactNode;
                                  styles?: string | undefined;
                                  backgroundColor?: string | undefined;
                                  width?: string | undefined;
                                  height?: string | undefined;
                                  gridTemplateArea?: string | undefined;
                                  gridTemplateColumns?: string | undefined;
                                  gridTemplateRows?: string | undefined;
                                  gap?: string | undefined;
                                  columnGap?: string | undefined;
                                  rowGap?: string | undefined;
                                  gridAutoRows?: string | undefined;
                                  gridAutoColumns?: string | undefined;
                                  alignItems?: import('../types/Grid.types').Align | undefined;
                                  justifyItems?: import('../types/Grid.types').Justify | undefined;
                                  padding?: string | undefined;
                                  margin?: string | undefined;
                              } & {
                                  theme?: any;
                              },
                              import('../../../core').Themeable
                          >
                      >
                  ) => {} | Pick<{}, K> | null)
                | Pick<{}, K>
                | null,
            callback?: (() => void) | undefined
        ): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<
            import('utility-types').Subtract<
                {
                    localTheme?:
                        | import('utility-types/dist/mapped-types')._DeepPartialObject<import('../../../core').Theme>
                        | undefined;
                    palette?: import('../../../core').Palette | undefined;
                    disabled?: boolean | undefined;
                    children?: import('react').ReactNode;
                    styles?: string | undefined;
                    backgroundColor?: string | undefined;
                    width?: string | undefined;
                    height?: string | undefined;
                    gridTemplateArea?: string | undefined;
                    gridTemplateColumns?: string | undefined;
                    gridTemplateRows?: string | undefined;
                    gap?: string | undefined;
                    columnGap?: string | undefined;
                    rowGap?: string | undefined;
                    gridAutoRows?: string | undefined;
                    gridAutoColumns?: string | undefined;
                    alignItems?: import('../types/Grid.types').Align | undefined;
                    justifyItems?: import('../types/Grid.types').Justify | undefined;
                    padding?: string | undefined;
                    margin?: string | undefined;
                } & {
                    theme?: any;
                },
                import('../../../core').Themeable
            >
        > &
            Readonly<{
                children?: import('react').ReactNode;
            }>;
        refs: {
            [key: string]: import('react').ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(
            nextProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            nextState: Readonly<{}>,
            nextContext: any
        ): boolean;
        componentDidCatch?(error: Error, errorInfo: import('react').ErrorInfo): void;
        getSnapshotBeforeUpdate?(
            prevProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            prevState: Readonly<{}>
        ): any;
        componentDidUpdate?(
            prevProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            prevState: Readonly<{}>,
            snapshot?: any
        ): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(
            nextProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            nextContext: any
        ): void;
        UNSAFE_componentWillReceiveProps?(
            nextProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            nextContext: any
        ): void;
        componentWillUpdate?(
            nextProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
        UNSAFE_componentWillUpdate?(
            nextProps: Readonly<
                import('utility-types').Subtract<
                    {
                        localTheme?:
                            | import('utility-types/dist/mapped-types')._DeepPartialObject<
                                  import('../../../core').Theme
                              >
                            | undefined;
                        palette?: import('../../../core').Palette | undefined;
                        disabled?: boolean | undefined;
                        children?: import('react').ReactNode;
                        styles?: string | undefined;
                        backgroundColor?: string | undefined;
                        width?: string | undefined;
                        height?: string | undefined;
                        gridTemplateArea?: string | undefined;
                        gridTemplateColumns?: string | undefined;
                        gridTemplateRows?: string | undefined;
                        gap?: string | undefined;
                        columnGap?: string | undefined;
                        rowGap?: string | undefined;
                        gridAutoRows?: string | undefined;
                        gridAutoColumns?: string | undefined;
                        alignItems?: import('../types/Grid.types').Align | undefined;
                        justifyItems?: import('../types/Grid.types').Justify | undefined;
                        padding?: string | undefined;
                        margin?: string | undefined;
                    } & {
                        theme?: any;
                    },
                    import('../../../core').Themeable
                >
            >,
            nextState: Readonly<{}>,
            nextContext: any
        ): void;
    };
    contextType?: import('react').Context<any> | undefined;
};
