import { ProtorianColorVariations } from "./index.t";
import { ProtorianPaletteScheme } from "./PaletteColor.type";
import { ProtorianToneScheme } from "./ToneColor.type";
export declare type ThemeColorPaletteScheme = {
    [K in keyof ProtorianPaletteScheme]?: ProtorianPaletteScheme[K];
};
export declare type ThemeColorToneScheme = {
    [K in keyof ProtorianToneScheme]?: ProtorianToneScheme[K];
};
export declare type ThemeColorScheme = ThemeColorPaletteScheme | ThemeColorToneScheme;
export declare type ThemeColorPaletteProps = keyof ProtorianPaletteScheme;
export declare type ThemeColorToneProps = keyof ProtorianToneScheme;
export declare type ThemeColorProps = ThemeColorPaletteProps | ThemeColorToneProps | `${ThemeColorPaletteProps | ThemeColorToneProps}-${(keyof ProtorianColorVariations)}`;
//# sourceMappingURL=ThemeColor.type.d.ts.map