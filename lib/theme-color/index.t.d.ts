export declare type THexRaw = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export declare type TiHex = `${THexRaw}${THexRaw}${THexRaw}`;
export declare type SensenTHexColor = `#${TiHex}` | `#${string | number}`;
export declare type SensenTRGBColor = `rgb(${number},${number},${number})`;
export declare type SensenTRGBAColor = `rgba(${number},${number},${number},${number})`;
export declare type SensenTColor = SensenTHexColor | SensenTRGBColor | SensenTRGBAColor;
export interface SensenColorVariation {
    color: SensenTColor;
    rgb: SensenTColor;
    rgbSmaller: SensenTColor;
    rgbSmall: SensenTColor;
    rgbMedium: SensenTColor;
    rgbBig: SensenTColor;
    rgbBigger: SensenTColor;
}
export interface SensenColorVariations {
    [K: string]: SensenColorVariation;
}
export interface SensenColorVariation {
    color: SensenTColor;
    rgb: SensenTColor;
    rgbSmaller: SensenTColor;
    rgbSmall: SensenTColor;
    rgbMedium: SensenTColor;
    rgbBig: SensenTColor;
    rgbBigger: SensenTColor;
}
//# sourceMappingURL=index.t.d.ts.map