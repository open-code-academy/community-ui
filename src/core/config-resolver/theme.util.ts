let theme = {}


export const getTheme = () => {
    return theme;
}

export const mergeTheme = (customTheme: Object) => {
    return {...theme, ...customTheme};
}


const mergeAndSetGlobalTheme = (customTheme: Object) => {
    theme = mergeTheme(customTheme);
}

const resolveCustomTheme = () => {
    // This is just a proof-of-concept, so this method would need to be refactored to
    return require('../../../community-ui.config')
}

const resolveDefaultTheme = () => {
    return require('./default.theme').theme
}

const init = () => {
    theme = resolveDefaultTheme();
    mergeAndSetGlobalTheme(resolveCustomTheme());
};

init();



