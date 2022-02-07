export default class SensenColoring {
    static HexToRGB(hex: string): number[];
    static HexToCMYK(hex: string): number[] | undefined;
    static RGBtoHex({ red, green, blue }: {
        red: number;
        green: number;
        blue: number;
    }): string;
    static RGBToHSL(r: number, g: number, b: number): string;
}
//# sourceMappingURL=coloring.d.ts.map