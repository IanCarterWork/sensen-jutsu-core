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
    persist: boolean;
    constructor();
    add(input: SensenColor): this;
    render(persist?: boolean): this;
    init(): this;
    build(input: SensenColor): this;
    Inject(nature: SensenColorNature, name: string, code: string | string[]): this;
    usePalette(name: string, letPersist?: boolean): this;
    useTone(name: string, letPersist?: boolean): this;
}
//# sourceMappingURL=index.d.ts.map