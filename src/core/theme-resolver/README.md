# Theme Resolver

## About

This package is intended to be a one-stop-shop for global theming needs.

## Usage

The nuts and bolts of this package consist of a few particular methods:
- `getGlobalTheme()`: A method which returns the current global `Theme` singleton object.
- `applyCustomTheme()` which merges the whole or partial `Theme` object you pass in with the global singleton object
- `themed()`: this method is used for applying adding the properly layered theme prop (+more) to the component.

### themed()
If using typescript, extend the `Themeable` interface, and use the resulting type as your props type when writing your component.
Example: 
```ts
export interface ButtonProps extends Themeable {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    ariaSettings?: object;
    styles?: string;
    children?: any;
}
```
Then use it in your component:

```tsx
const BaseButton: FC<ButtonProps> = (props) => {
    // props will have the theme object for you to use
    return (
        <div>
            <p style={{color: props.theme?.buttonTheme.buttonThemes.PRIMARY.contentColor}}>props.children</p>
        </div>
    );
};

export default themed(BaseButton) // this is where you get your theme injected into the component
```

### applyCustomTheme()
This is the method that you will use to apply a custom theme when implementing this library. 
Extend the `PartialTheme` type, and provide the values that you are interested in overriding, then pass that object to 
the `applyCustomTheme()` method. This will trigger a state update across all themed components. ( great for "dark mode" toggles)

Example:

```ts
applyCustomTheme({
    buttonTheme: {
        buttonThemes: {
            PRIMARY: {
                backgroundColor: 'blue',
            },
        },
    },
});
```

Call this at the root of your project (typically App.js) to apply your custom theme before the project loads up. 
If you want to override ALL aspects of the theme, implement the `Theme` interface instead of `PartialTheme` interface.


### getGlobalTheme()

Anywhere in the app you can call the `getGlobalTheme()` and retrieve the global theme object for use, though within components
you should opt to use the `theme` prop instead. The `theme` prop will always represent the merged global and local theme. 





## Roadmap

### v1
- ~~basic global theming~~
- cascade theming and ~~local theming~~ handled by the HOC
- performance testing 

