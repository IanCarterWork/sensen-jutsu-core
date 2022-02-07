import { SensenColorVariations } from "./index.t";
import { SensenPaletteScheme } from "./palette-color.t";
import { SensenToneScheme } from "./tone-color.t";






export type ThemeColorPaletteScheme = { [K in keyof SensenPaletteScheme ]?: SensenPaletteScheme[K] }

export type ThemeColorToneScheme = { [K in keyof SensenToneScheme ]?: SensenToneScheme[K] }

export type ThemeColorScheme = ThemeColorPaletteScheme | ThemeColorToneScheme


export type ThemeColorPaletteProps = keyof SensenPaletteScheme

export type ThemeColorToneProps = keyof SensenToneScheme

export type ThemeColorProps = ThemeColorPaletteProps | ThemeColorToneProps | `${ThemeColorPaletteProps | ThemeColorToneProps}-${ (keyof SensenColorVariations) }`

