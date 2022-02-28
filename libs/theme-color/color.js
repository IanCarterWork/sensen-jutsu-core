import SensenColoring from "./coloring.js.js";
export default class SensenColor {
    constructor() {
        this.nature = '@palette';
        this.name = '';
        this.scheme = {};
        this.mixed = {};
    }
    Mixture() {
        if (this.scheme) {
            Object.entries(this.scheme).map(i => {
                const rgb = SensenColoring.HexToRGB(i[1]);
                const mixed = {
                    color: i[1],
                    rgb: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
                    rgbSmaller: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .1)`,
                    rgbSmall: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .20)`,
                    rgbMedium: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .50)`,
                    rgbBig: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .80)`,
                    rgbBigger: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .96)`,
                };
                this.mixed[i[0]] = mixed;
            });
        }
        return this;
    }
}
