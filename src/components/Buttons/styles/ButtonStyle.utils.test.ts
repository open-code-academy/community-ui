import * as ButtonStyleUtils from './ButtonStyle.utils';
import { ButtonShapes } from '../types';
import { getGlobalTheme } from '../../../core';

const { getBorderRadius } = ButtonStyleUtils;

describe('Running tests for ButtonStyle utils', () => {
    describe('Running tests for border radius', () => {
        test('Given border radius prop, when getBorderRadius is called, border radius value is that of the prop', () => {
            expect(getBorderRadius({ children: '', borderRadius: '.3rem' })).toBe('.3rem');
        });

        test('Given shape of pill, when getBorderRadius is called, border radius value is the appropriate one', () => {
            expect(
                getBorderRadius({
                    children: '',
                    buttonShape: ButtonShapes.PILL,
                })
            ).toBe('100rem');
        });

        test('Given shape of rectangle, when getBorderRadius is called, border radius value is the appropriate one', () => {
            expect(
                getBorderRadius({
                    children: '',
                    buttonShape: ButtonShapes.RECTANGLE,
                })
            ).toBe('0');
        });

        test('Given shape of default, when getBorderRadius is called, border radius is the appropriate one', () => {
            expect(
                getBorderRadius({
                    children: '',
                    buttonShape: ButtonShapes.DEFAULT,
                })
            ).toBe(getGlobalTheme().sizes.global.borderRadius);
        });
    });
});
