import { Size, Sizes } from '../types';

export const resolveSize = (choice: keyof Sizes | string | undefined, sizes: Sizes | undefined) => {
    if (!sizes) {
        return choice;
    }

    if (!choice) {
        return sizes.default;
    }

    switch (choice) {
        case Size.default:
            return sizes.default;
        case Size.xs:
            return sizes.xs;
        case Size.sm:
            return sizes.sm;
        case Size.md:
            return sizes.md;
        case Size.lg:
            return sizes.lg;
        case Size.xl:
            return sizes.xl;
        case Size.xxl:
            return sizes.xxl;
        case Size['3xl']:
            return sizes['3xl'];
        default:
            return choice;
    }
};
