import SensenColor from "./color";
export class SensenToneColor extends SensenColor {
    constructor(name, scheme, is = 'light') {
        super();
        this.name = name;
        this.scheme = scheme;
        this.is = is;
        this.nature = '@tone';
        this.mixed = {};
    }
}
