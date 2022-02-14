/**
 * UseProperty
 */
export function UseVariable(name, initial) {
    const build = {};
    build[name] = (new ComponentVariable(name, initial));
    return build;
}
export class ComponentVariable {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.exchange = this.value;
    }
    setHydrates(value) {
        return this;
    }
    setObjectProxy(value) {
        const $ = this;
        this.value = new Proxy(value, {
            get: function (target, prop) {
                return target[prop];
            },
            set: function (target, prop, value, prox) {
                target[prop] = value;
                $.setHydrates(value);
                return true;
            }
        });
        return this;
    }
    setDataProxy() {
        const $ = this;
        Object.defineProperty(this, 'value', {
            get() { return $.exchange; },
            set(value) {
                // console.warn('Variable Change', value)
                $.exchange = value;
                $.setHydrates(value);
                return true;
            },
        });
        return this;
    }
    /**
     * Build State Proxies
     * @description Use this to activate the dynamic state. For default the construct call this
     */
    proxy() {
        if (typeof this.value == 'function') {
            return;
        }
        /**
         * Array Proxy
         */
        if (Array.isArray(this.value)) {
            this.setObjectProxy([...this.value]);
        }
        /**
         * Object Proxy
         */
        else if (typeof this.value == 'object') {
            this.setObjectProxy({ ...this.value });
        }
        /**
         * Normal Data Proxy
         */
        else {
            this.setDataProxy();
        }
        return this;
    }
    trigger() {
        // this.component = component
        this.proxy();
        return this;
    }
}
