import { SensenPaletteColor } from "./palette-color";
import { SensenToneColor } from "./tone-color";
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBTS9DLE1BQU0sT0FBTyxVQUFVO0lBR25COztPQUVHO0lBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUF3QjtRQUU3QixPQUFPLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRyxHQUFHLENBQUMsQ0FBQztJQUVwRyxDQUFDO0NBTUo7QUFPRCxNQUFNLENBQUMsT0FBTyxPQUFPLGdCQUFnQjtJQWtCakM7UUFmQSxVQUFLLEdBQWtCLEVBQUUsQ0FBQztRQUUxQixZQUFPLEdBQXVCLEVBQXdCLENBQUM7UUFFdkQsU0FBSSxHQUFvQixFQUFxQixDQUFDO1FBRTlDLFFBQUcsR0FBNEIsSUFBSSxDQUFDO1FBRXBDLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRzdCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFNckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFJRCxHQUFHLENBQUMsS0FBa0I7UUFFbEIsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRSxHQUFHLEtBQUssQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBUUQsTUFBTSxDQUFDLE9BQWlCO1FBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRTtRQUU3RCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8s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T0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBTZW5zZW5Db2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IHsgU2Vuc2VuQ29sb3JOYXR1cmUgfSBmcm9tIFwiLi9jb2xvci50XCI7XG5pbXBvcnQgeyBTZW5zZW5QYWxldHRlQ29sb3IgfSBmcm9tIFwiLi9wYWxldHRlLWNvbG9yXCI7XG5pbXBvcnQgeyBUaGVtZUNvbG9yUHJvcHMgfSBmcm9tIFwiLi90aGVtZS1jb2xvci50XCI7XG5pbXBvcnQgeyBTZW5zZW5Ub25lQ29sb3IgfSBmcm9tIFwiLi90b25lLWNvbG9yXCI7XG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIFRoZW1lQ29sb3J7XG5cblxuICAgIC8qKlxuICAgICAqIFRoZW1lQ29sb3IgVmFyaWFibGUgTmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyAkKHZhcm5hbWU6IFRoZW1lQ29sb3JQcm9wcykgOiBzdHJpbmd7XG5cbiAgICAgICAgcmV0dXJuIChgdmFyKC0tY29sb3ItJHsgKHZhcm5hbWUpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihbQS1aXSlcIiwgXCJnXCIpLCAnLSQmJykudG9Mb3dlckNhc2UoKSB9KWApO1xuXG4gICAgfVxuXG5cbiAgICBcbiAgICBcbiAgICBcbn1cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbnNlblRoZW1lQ29sb3J7XG5cblxuICAgIGlucHV0OiBTZW5zZW5Db2xvcltdID0gW107XG5cbiAgICBwYWxldHRlOiBTZW5zZW5QYWxldHRlQ29sb3IgPSB7fSBhcyBTZW5zZW5QYWxldHRlQ29sb3I7XG5cbiAgICB0b25lOiBTZW5zZW5Ub25lQ29sb3IgPSB7fSBhcyBTZW5zZW5Ub25lQ29sb3I7XG5cbiAgICBET006IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIGluamVjdGlvblJlZnM6IHN0cmluZ1tdID0gW107XG4gICAgXG5cbiAgICBwZXJzaXN0OiBib29sZWFuID0gZmFsc2U7XG4gICAgXG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICBhZGQoaW5wdXQ6IFNlbnNlbkNvbG9yKXtcblxuICAgICAgICB0aGlzLmlucHV0WyB0aGlzLmlucHV0Lmxlbmd0aCBdID0gaW5wdXQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuXG5cbiAgICByZW5kZXIocGVyc2lzdD86IGJvb2xlYW4pe1xuXG4gICAgICAgIHRoaXMucGVyc2lzdCA9IHR5cGVvZiBwZXJzaXN0ID09ICdib29sZWFuJyA/IHBlcnNpc3QgOiB0cnVlIDtcblxuICAgICAgICB0aGlzLmlucHV0LmZvckVhY2goaW5wdXQ9PntcblxuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5wdXQgaW5zdGFuY2VvZiBTZW5zZW5QYWxldHRlQ29sb3IgfHxcblxuICAgICAgICAgICAgICAgIGlucHV0IGluc3RhbmNlb2YgU2Vuc2VuVG9uZUNvbG9yXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICApe1xuXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZChpbnB1dC5NaXh0dXJlKCkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyAoYFRoaXMgVGhlbWVDb2xvciBpcyBub3Qgc3VwcG9ydGVkIDwgJHsgaW5wdXQubmFtZSB8fCAndW5kZWZpbmVkJyB9ID5gKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG5cblxuICAgIFxuXG4gICAgXG5cbiAgICAvKiBXZWIgQWJpbGl0aWVzIC0gQmVnaW4gKi9cblxuICAgIGluaXQoKXtcblxuICAgICAgICB0aGlzLkRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlW3RoZW1lXFxcXDpjb2xvclxcXFw6cmVmXScpO1xuXG4gICAgICAgIGlmKCF0aGlzLkRPTSl7XG5cbiAgICAgICAgICAgIHRoaXMuRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICAgICAgdGhpcy5ET00uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJylcblxuICAgICAgICAgICAgdGhpcy5ET00uc2V0QXR0cmlidXRlKCd0aGVtZVxcOmNvbG9yXFw6cmVmJywgJ0B0cmFuc2FjdGlvbicpXG5cbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuRE9NICk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuXG4gICAgYnVpbGQoaW5wdXQ6IFNlbnNlbkNvbG9yKXtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZignbWl4ZWQnIGluIGlucHV0KXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFsgXTsgXG5cbiAgICAgICAgICAgIGNvbnN0IG1halJleCA9IG5ldyBSZWdFeHAoXCIoW0EtWl0pXCIsIFwiZ1wiKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhpbnB1dC5taXhlZCkuZm9yRWFjaChjb2xvcj0+e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBpbnB1dC5taXhlZFtjb2xvcl0gYXMge1tLOiBzdHJpbmddOmFueX1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGlucHV0Lm1peGVkW2NvbG9yXSkuZm9yRWFjaCh2YXJpYW50ZT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzWyBsaW5lcy5sZW5ndGggXSA9IGAke1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAoYC0tY29sb3ItJHsgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9JHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50ZSA9PSAnY29sb3InID8gJycgOiBgLSR7dmFyaWFudGV9YCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfWApLnJlcGxhY2UobWFqUmV4LCAnLSQmJykudG9Mb3dlckNhc2UoKVxuXG4gICAgICAgICAgICAgICAgICAgIH0gOiAkeyBjbG9uZVt2YXJpYW50ZV0gfWA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuSW5qZWN0KGlucHV0Lm5hdHVyZSwgaW5wdXQubmFtZSwgbGluZXMpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIEluamVjdChuYXR1cmU6IFNlbnNlbkNvbG9yTmF0dXJlLCBuYW1lOiBzdHJpbmcsIGNvZGU6IHN0cmluZyB8IHN0cmluZ1tdKXtcblxuICAgICAgICBsZXQgZW1iZWQ6IHN0cmluZztcblxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGNvZGUpKXsgY29kZSA9IGNvZGUuam9pbignOycpOyB9XG5cbiAgICAgICAgc3dpdGNoKG5hdHVyZSl7XG5cblxuICAgICAgICAgICAgY2FzZSAnQHBhbGV0dGUnOlxuXG4gICAgICAgICAgICAgICAgZW1iZWQgPSBgXFxuOnJvb3RbdGhlbWUtY29sb3ItcGFsZXR0ZT1cIiR7IG5hbWUgfVwiXXsgJHsgY29kZSB9IH1gO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjYXNlICdAdG9uZSc6XG5cbiAgICAgICAgICAgICAgICBlbWJlZCA9IGBcXG46cm9vdFt0aGVtZS1jb2xvci10b25lPVwiJHsgbmFtZSB9XCJdeyAkeyBjb2RlIH0gfWA7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgcmVmID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZW1iZWQpO1xuXG4gICAgICAgIHRoaXMuRE9NPy5hcHBlbmRDaGlsZChyZWYpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG5cblxuICAgIHVzZVBhbGV0dGUobmFtZTogc3RyaW5nLCBsZXRQZXJzaXN0OiBib29sZWFuID0gZmFsc2Upe1xuXG4gICAgICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBpZihsZXRQZXJzaXN0ID09PSB0cnVlICYmIHRoaXMucGVyc2lzdCA9PT0gdHJ1ZSl7XG5cbiAgICAgICAgICAgIG5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQHNlbnNlbi10aGVtZS1wYWxldHRlJykgfHwgbmFtZTtcblxuICAgICAgICAgICAgZG9jLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAndGhlbWUtY29sb3ItcGFsZXR0ZScsIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGRvYy5zZXRBdHRyaWJ1dGUoJ3RoZW1lLWNvbG9yLXBhbGV0dGUnLCBuYW1lKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQHNlbnNlbi10aGVtZS1wYWxldHRlJywgbmFtZSk7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgdXNlVG9uZShuYW1lOiBzdHJpbmcsIGxldFBlcnNpc3Q6IGJvb2xlYW4gPSBmYWxzZSl7XG5cbiAgICAgICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIGlmKGxldFBlcnNpc3QgPT09IHRydWUgJiYgdGhpcy5wZXJzaXN0ID09PSB0cnVlKXtcblxuICAgICAgICAgICAgbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdAc2Vuc2VuLXRoZW1lLXRvbmUnKSB8fCBuYW1lO1xuXG4gICAgICAgICAgICBkb2Muc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICd0aGVtZS1jb2xvci10b25lJywgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZG9jLnNldEF0dHJpYnV0ZSgndGhlbWUtY29sb3ItdG9uZScsIG5hbWUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdAc2Vuc2VuLXRoZW1lLXRvbmUnLCBuYW1lKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKiBXZWIgQWJpbGl0aWVzIC0gRmluICovXG5cblxuICAgIFxufSJdfQ==