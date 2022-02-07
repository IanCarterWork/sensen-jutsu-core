import ProtorianColor from "./Color";
import { ProtorianColorNature } from "./Color.type";
import { ProtorianPaletteColor } from "./PaletteColor";
import { ThemeColorProps } from "./ThemeColor.type";
import { ProtorianToneColor } from "./ToneColor";
export declare class ThemeColor {
    /**
     * ThemeColor Variable Name
     */
    static $(varname: ThemeColorProps): string;
}
export default class ProtorianThemeColor {
    input: ProtorianColor[];
    palette: ProtorianPaletteColor;
    tone: ProtorianToneColor;
    DOM: HTMLStyleElement | null;
    injectionRefs: string[];
    constructor();
    add(input: ProtorianColor): this;
    render(): this;
    init(): this;
    build(input: ProtorianColor): this;
    webInject(nature: ProtorianColorNature, name: string, code: string | string[]): this;
    usePalette(name: string): this;
    useTone(name: string): this;
}
//# sourceMappingURL=ThemeColor.d.ts.map