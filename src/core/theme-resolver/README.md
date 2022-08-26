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
export interface SomeProps extends Themeable {
    anyProps?: any
}
```
Then use it in your component:

```tsx
const SomeComponent: FC<SomeProps> = (props) => {
    // props will have the theme object for you to use
    return (
        <div>
            <p style={{color: props.theme?.typography.textColor}}>props.children</p>
        </div>
    );
};

export default themed(SomeComponent) // this is where you get your theme injected into the component
```

### applyCustomTheme()
This is the method that you will use to apply a custom theme when implementing this library. 
Extend the `PartialTheme` type, and provide the values that you are interested in overriding, then pass that object to 
the `applyCustomTheme()` method. This will trigger a state update across all themed components. ( great for "dark mode" toggles)

Example:

```ts
import {applyCustomTheme} from "./index";
applyCustomTheme({
    colors : {
        
    }
});
```

Call this at the root of your project (typically App.js) to apply your custom theme before the project loads up. 
If you want to override ALL aspects of the theme, implement the `Theme` interface instead of `PartialTheme` interface.


### getGlobalTheme()


Anywhere in the app you can call the `getGlobalTheme()` and retrieve the global theme object for use, though within components
you should opt to use the `theme` prop instead. The `theme` prop will always represent the merged global and local theme. 

### Default Theme

```json
{
    "typography": {
        "fontSize": {
            "default": ".75rem",
            "xs": ".5rem",
            "sm": ".625rem",
            "md": ".75rem",
            "lg": "1rem",
            "xl": "1.25rem",
            "xxl": "1.5rem",
            "3xl": "2rem"
        },
        "fontFamily": "Roboto",
        "textColor": "#1f2937"
    },
    "colors": {
        "global": {
            "whitespaceColor": "#f9fafb"
        },
        "palettes": {
            "PRIMARY": {
                "primary": "#06b6d4",
                "light": "#22d3ee",
                "dark": "#0891b2",
                "contrast": "#fff"
            },
            "SECONDARY": {
                "primary": "#ec4899",
                "light": "#f472b6",
                "dark": "#db2777",
                "contrast": "#fff"
            },
            "ERROR": {
                "primary": "#ef4444",
                "light": "#f87171",
                "dark": "#dc2626",
                "contrast": "#fff"
            },
            "INFO": {
                "primary": "#2563eb",
                "light": "#3b82f6",
                "dark": "#1d4ed8",
                "contrast": "#fff"
            },
            "SUCCESS": {
                "primary": "#16a34a",
                "light": "#22c55e",
                "dark": "#15803d",
                "contrast": "#fff"
            },
            "WARNING": {
                "primary": "#facc15",
                "light": "#fde047",
                "dark": "#eab308",
                "contrast": "#fff"
            },
            "DISABLED": {
                "primary": "#6b7280",
                "light": "#d1d5db",
                "dark": "#374151",
                "contrast": "#e5e7eb"
            }
        }
    },
    "sizes": {
        "global": {
            "borderRadius": "0.5rem"
        },
        "buttons": {
            "buttonPadding": {
                "default": ".75rem 1.5rem",
                "xs": ".5rem 1rem",
                "sm": ".625rem 1.25rem",
                "md": ".75rem 1.5rem",
                "lg": "1rem 2rem",
                "xl": "1.25rem 2.5rem",
                "xxl": "1.5rem 3rem",
                "3xl": "2rem 4rem"
            }
        },
        "forms": {
            "inputHeight": {
                "default": "1.6rem",
                "xs": "1.1rem",
                "sm": "1.35rem",
                "md": "1.6rem",
                "lg": "2.1rem",
                "xl": "2.6rem",
                "xxl": "3.1rem",
                "3xl": "4.1rem"
            },
            "inputWidth": {
                "default": "36.875rem",
                "xs": "20.47rem",
                "sm": "25.59rem",
                "md": "30.72rem",
                "lg": "36.875rem",
                "xl": "49.05rem",
                "xxl": "61.30rem",
                "3xl": "73.56rem"
            }
        }
    }
}
```


## Roadmap
- ~~basic global theming~~
- cascade theming and ~~local theming~~ handled by the HOC
- performance testing
- ~~buttons~~
- forms

