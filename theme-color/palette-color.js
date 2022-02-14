import SensenColor from "./color.js";
export class SensenPaletteColor extends SensenColor {
    constructor(name, scheme) {
        super();
        this.name = name;
        this.scheme = scheme;
        this.nature = '@palette';
        this.mixed = {};
    }
}
