import { BoxComponent, Styleable, Themeable } from '../../../core';

export interface GridProps extends Themeable, Styleable, BoxComponent {
    gridTemplateAreas?: string;
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

export enum Align {
    stretch = 'stretch',
    start = 'start',
    center = 'center',
    end = 'end',
}

export enum Justify {
    start = 'start',
    end = 'end',
    center = 'center',
    flexStart = 'flex-start',
    flexEnd = 'flex-end',
    spaceBetween = 'space-between',
    spaceAround = 'space-around',
    spaceEvenly = 'space-evenly',
}
