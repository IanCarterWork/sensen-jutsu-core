import { SensenPaletteColor } from "./palette-color.js";
import { SensenToneColor } from "./tone-color.js";
export class ThemeColor {
    /**
     * ThemeColor Variable Name
     */
    static $(varname) {
        return (`var(--color-${(varname).replace(new RegExp("([A-Z])", "g"), '-$&').toLowerCase()})`);
    }
}
export default class SensenThemeColor {
    constructor() {
        this.input = [];
        this.palette = {};
        this.tone = {};
        this.DOM = null;
        this.injectionRefs = [];
        this.persist = false;
        this.init();
    }
    add(input) {
        this.input[this.input.length] = input;
        return this;
    }
    render(persist) {
        this.persist = typeof persist == 'boolean' ? persist : true;
        this.input.forEach(input => {
            if (input instanceof SensenPaletteColor ||
                input instanceof SensenToneColor) {
                this.build(input.Mixture());
            }
            else {
                throw (`This ThemeColor is not supported < ${input.name || 'undefined'} >`);
            }
        });
        return this;
    }
    /* Web Abilities - Begin */
    init() {
        this.DOM = document.querySelector('style[theme\\:color\\:ref]');
        if (!this.DOM) {
            this.DOM = document.createElement('style');
            this.DOM.setAttribute('type', 'text/css');
            this.DOM.setAttribute('theme\:color\:ref', '@transaction');
            document.head.appendChild(this.DOM);
        }
        return this;
    }
    build(input) {
        if ('mixed' in input) {
            const lines = [];
            const majRex = new RegExp("([A-Z])", "g");
            Object.keys(input.mixed).forEach(color => {
                const clone = input.mixed[color];
                Object.keys(input.mixed[color]).forEach(variante => {
                    lines[lines.length] = `${(`--color-${color}${variante == 'color' ? '' : `-${variante}`}`).replace(majRex, '-$&').toLowerCase()} : ${clone[variante]}`;
                });
            });
            this.Inject(input.nature, input.name, lines);
        }
        return this;
    }
    Inject(nature, name, code) {
        let embed;
        if (Array.isArray(code)) {
            code = code.join(';');
        }
        switch (nature) {
            case '@palette':
                embed = `\n:root[theme-color-palette="${name}"]{ ${code} }`;
                break;
            case '@tone':
                embed = `\n:root[theme-color-tone="${name}"]{ ${code} }`;
                break;
        }
        const ref = document.createTextNode(embed);
        this.DOM?.appendChild(ref);
        return this;
    }
    usePalette(name, letPersist = false) {
        const doc = document.documentElement;
        if (letPersist === true && this.persist === true) {
            name = localStorage.getItem('@sensen-theme-palette') || name;
            doc.setAttribute('theme-color-palette', name);
        }
        doc.setAttribute('theme-color-palette', name);
        localStorage.setItem('@sensen-theme-palette', name);
        return this;
    }
    useTone(name, letPersist = false) {
        const doc = document.documentElement;
        if (letPersist === true && this.persist === true) {
            name = localStorage.getItem('@sensen-theme-tone') || name;
            doc.setAttribute('theme-color-tone', name);
        }
        doc.setAttribute('theme-color-tone', name);
        localStorage.setItem('@sensen-theme-tone', name);
        return this;
    }
    toggleTone() {
        const doc = document.documentElement;
        const current = doc.getAttribute('theme-color-tone');
        let key = undefined;
        let toneKeys = [];
        this.input.map((input, k) => {
            if (input.nature == '@tone') {
                toneKeys.push(k);
            }
            if (key !== undefined) {
                return false;
            }
            if (input.nature == '@tone') {
                if (input.name == current) {
                    key = k;
                }
            }
        });
        if (key) {
            const next = this.input[key + 1] || this.input[toneKeys[0]];
            if (next.nature == '@tone') {
                this.useTone(next.name);
            }
        }
        return this;
    }
    togglePalette() {
        const doc = document.documentElement;
        const current = doc.getAttribute('theme-color-palette');
        let key = undefined;
        let paletteKeys = [];
        this.input.map((input, k) => {
            if (input.nature == '@palette') {
                paletteKeys.push(k);
            }
            if (key !== undefined) {
                return false;
            }
            if (input.nature == '@palette') {
                if (input.name == current) {
                    key = k;
                }
            }
        });
        if (key) {
            const next = this.input[key + 1] || this.input[paletteKeys[0]];
            if (next.nature == '@palette') {
                this.usePalette(next.name);
            }
        }
        return this;
    }
}
