import { SensenColorVariations } from "./index.t";
import { SensenPaletteScheme } from "./palette-color.t";
import { SensenToneScheme } from "./tone-color.t";
export declare type ThemeColorPaletteScheme = {
    [K in keyof SensenPaletteScheme]?: SensenPaletteScheme[K];
};
export declare type ThemeColorToneScheme = {
    [K in keyof SensenToneScheme]?: SensenToneScheme[K];
};
export declare type ThemeColorScheme = ThemeColorPaletteScheme | ThemeColorToneScheme;
export declare type ThemeColorPaletteProps = keyof SensenPaletteScheme;
export declare type ThemeColorToneProps = keyof SensenToneScheme;
export declare type ThemeColorProps = ThemeColorPaletteProps | ThemeColorToneProps | `${ThemeColorPaletteProps | ThemeColorToneProps}-${(keyof SensenColorVariations)}`;
//# sourceMappingURL=theme-color.t.d.ts.map