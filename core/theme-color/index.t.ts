


export type THexRaw = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type TiHex = `${THexRaw}${THexRaw}${THexRaw}`;


export type SensenTHexColor = `#${ TiHex }` | `#${ string | number }`

export type SensenTRGBColor = `rgb(${ number },${ number },${ number })`

export type SensenTRGBAColor = `rgba(${ number },${ number },${ number },${ number })`

export type SensenTColor = SensenTHexColor | SensenTRGBColor | SensenTRGBAColor;





export interface SensenColorVariation{

    color: SensenTColor;

    rgb: SensenTColor;

    rgbSmaller: SensenTColor;

    rgbSmall: SensenTColor;

    rgbMedium: SensenTColor;

    rgbBig: SensenTColor;

    rgbBigger: SensenTColor;
    
};


export interface SensenColorVariations{

    [K: string]: SensenColorVariation
    
};


export interface SensenColorVariation{

    color: SensenTColor;

    rgb: SensenTColor;

    rgbSmaller: SensenTColor;

    rgbSmall: SensenTColor;

    rgbMedium: SensenTColor;

    rgbBig: SensenTColor;

    rgbBigger: SensenTColor;
    
};
