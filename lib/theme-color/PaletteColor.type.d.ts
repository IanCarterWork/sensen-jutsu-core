import { ProtorianColorSchemeBase } from "./Color.type";
import { ProtorianColorVariation, ProtorianTColor } from "./index.t";
export interface ProtorianPaletteScheme extends ProtorianColorSchemeBase {
    one: ProtorianTColor;
    two: ProtorianTColor;
    three: ProtorianTColor;
    four: ProtorianTColor;
    five: ProtorianTColor;
    success: ProtorianTColor;
    successText: ProtorianTColor;
    warning: ProtorianTColor;
    warningText: ProtorianTColor;
    error: ProtorianTColor;
    errorText: ProtorianTColor;
}
export declare type ProtorianPaletteVariations = {
    [K in keyof ProtorianPaletteScheme]: ProtorianColorVariation;
};
//# sourceMappingURL=PaletteColor.type.d.ts.map