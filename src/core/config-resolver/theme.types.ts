export type Theme = {
    buttonSize?: string
    somethingElse?: string
}

export interface DefaultTheme extends Theme {
    buttonSize: string,
    somethingElse: string,
}