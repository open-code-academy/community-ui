import { DefaultTheme, Theme } from './theme.types';

let theme : Theme;


export const getTheme = () : Theme => {
    return theme;
}

const merge = (...args : any[]) => {

    let target: any = {};

    const merger = (obj : any) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    target[prop] = merge(target[prop], obj[prop]);
                } else {
                    target[prop] = obj[prop];
                }
            }
        }
    };

    for (let i = 0; i < args.length; i++) {
        merger(args[i]);
    }

    return target;
};


const mergeAndSetGlobalTheme = (customTheme: Theme) => {
    theme = merge(customTheme);
}

const resolveCustomTheme = () : Theme => {
    // This is just a proof-of-concept, so this method would need to be refactored to
    // resolve to the root (/) of the project. Research will need to be done to figure out the best way to do this properly.
    return require('../../../community-ui.config.ts').default
}

const resolveDefaultTheme = () : DefaultTheme => {
    return require('./default.theme').default
}


(function init(){
    theme = resolveDefaultTheme();
    theme = merge(theme, resolveCustomTheme());
})()




