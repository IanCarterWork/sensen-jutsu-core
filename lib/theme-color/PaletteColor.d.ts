import ProtorianColor from './Color';
import { ProtorianColorNature } from './Color.type';
import { ProtorianPaletteScheme, ProtorianPaletteVariations } from './PaletteColor.type';
export declare class ProtorianPaletteColor extends ProtorianColor {
    nature: ProtorianColorNature;
    name: string;
    scheme: ProtorianPaletteScheme;
    mixed: ProtorianPaletteVariations;
    constructor(name: string, scheme: ProtorianPaletteScheme);
}
//# sourceMappingURL=PaletteColor.d.ts.map