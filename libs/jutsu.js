import { SensenHTMLElement } from "./index.js.js";
import { SensenAppearance } from "./appearance/index.js.js";
import { ThemeColor } from "./theme-color/index.js.js";
export class KuchiyoceElement extends SensenHTMLElement {
    constructor(props) {
        super(props);
        this.props = props;
        this.$appearance = new SensenAppearance;
        this.$initialize();
        if (typeof props.main == 'function') {
            props.main(this);
        }
    }
    $initialize() {
        this.$setAppearance();
        return this;
    }
    $setAppearance() {
        this.$appearance.selectors(this.props.appearance || {}).selectors({
            $self: [
                {
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: ThemeColor.$('layer'),
                }
            ]
        }).mount();
        this.classList.add(this.$appearance.$UiD);
        return this;
    }
}
export class Jutsu {
    static Kuchiyose(props) {
        const tagName = `sensen-${props.name}`;
        /**
         * Initialisation du DOM
         */
        if (!customElements.get(tagName)) {
            customElements.define(tagName, KuchiyoceElement);
        }
        return new KuchiyoceElement(props);
    }
}
