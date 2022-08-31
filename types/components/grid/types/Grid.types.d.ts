import { BoxComponent, Styleable, Themeable } from '../../../core';
export interface GridProps extends Themeable, Styleable, BoxComponent {
    gridTemplateArea?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gap?: string;
    columnGap?: string;
    rowGap?: string;
    gridAutoRows?: string;
    gridAutoColumns?: string;
    alignItems?: Align;
    justifyItems?: Justify;
}
export interface GridItemProps extends Themeable, Styleable, BoxComponent {
    gridArea?: string;
    alignSelf?: Align;
    justifySelf?: Justify;
    gridColumnStart?: string;
    gridColumnEnd?: string;
    gridRowStart?: string;
    gridRowEnd?: string;
}
export declare enum Align {
    stretch = 'stretch',
    start = 'start',
    center = 'center',
    end = 'end',
}
export declare enum Justify {
    end = 'end',
    center = 'center',
    flexStart = 'flex-start',
    flexEnd = 'flex-end',
    spaceBetween = 'space-between',
    spaceAround = 'space-around',
    spaceEvenly = 'space-evenly',
}