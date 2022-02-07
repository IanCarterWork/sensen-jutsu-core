import ProtorianColor from './Color';
import { ProtorianColorNature } from './Color.type';
import { ProtorianColorVariations } from './index.t';
import { ProtorianToneScheme } from './ToneColor.type';
export declare class ProtorianToneColor extends ProtorianColor {
    nature: ProtorianColorNature;
    name: string;
    scheme: ProtorianToneScheme;
    mixed: ProtorianColorVariations;
    constructor(name: string, scheme: ProtorianToneScheme);
    Create(name: string, scheme: ProtorianToneScheme): void;
}
//# sourceMappingURL=ToneColor.d.ts.map