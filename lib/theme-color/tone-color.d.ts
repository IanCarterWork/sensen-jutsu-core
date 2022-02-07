import SensenColor from './color';
import { SensenColorNature } from './color.t';
import { SensenColorVariations } from './index.t';
import { SensenToneScheme, SensenToneSchemeIs } from './tone-color.t';
export declare class SensenToneColor extends SensenColor {
    name: string;
    scheme: SensenToneScheme;
    readonly is: SensenToneSchemeIs;
    nature: SensenColorNature;
    mixed: SensenColorVariations;
    constructor(name: string, scheme: SensenToneScheme, is?: SensenToneSchemeIs);
}
//# sourceMappingURL=tone-color.d.ts.map