import SensenColor from "./color";
import { SensenColorNature } from "./color.t";
import { SensenPaletteColor } from "./palette-color";
import { ThemeColorProps } from "./theme-color.t";
import { SensenToneColor } from "./tone-color";
export declare class ThemeColor {
    /**
     * ThemeColor Variable Name
     */
    static $(varname: ThemeColorProps): string;
}
export default class SensenThemeColor {
    input: SensenColor[];
    palette: SensenPaletteColor;
    tone: SensenToneColor;
    DOM: HTMLStyleElement | null;
    injectionRefs: string[];
    constructor();
    add(input: SensenColor): this;
    render(): this;
    init(): this;
    build(input: SensenColor): this;
    webInject(nature: SensenColorNature, name: string, code: string | string[]): this;
    usePalette(name: string): this;
    useTone(name: string): this;
}
//# sourceMappingURL=theme-color.d.ts.map