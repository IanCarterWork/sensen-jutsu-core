import { SensenEmitter } from "./emitter.js.js.js";
export class SensenState {
    constructor(state) {
        this.state = state;
        this.store = {};
        this.$emitter = new SensenEmitter();
        this.store = { ...(this.state || {}) };
        // this.store = Object.assign({}, {...(this.state||{})} )    
        this.proxies();
    }
    make(key, value) {
        const slot = key;
        this.state[slot] = this.state[slot] || value;
        if (Array.isArray(value)) {
            // this.store[ slot ] = [...value];
            this.setObjectProxy(slot, [...value]);
        }
        else if (typeof value == 'object') {
            // this.store[ slot ] = {...value};
            this.setObjectProxy(slot, { ...value });
        }
        else {
            this.store[slot] = value;
            this.setDataProxy(slot);
        }
        return this.state[slot];
    }
    proxies() {
        if (typeof this.state == 'object') {
            Object.entries(this.state).map($ => {
                const slot = $[0];
                this.make(slot, $[1]);
            });
        }
        return this;
    }
    setObjectProxy(slot, input) {
        const $ = this;
        this.state[slot] = new Proxy(this.state[slot], {
            set: function (target, prop, value) {
                target[prop] = value;
                $.store[slot] = value;
                $.$emitter.dispatch('objectHydrates', { slot, value: target[prop] });
                $.$emitter.dispatch('hydrates', { slot, value: target[prop] });
                return true;
            }
        });
        return this;
    }
    setDataProxy(slot) {
        const $ = this;
        Object.defineProperty(this.state, slot, {
            get() { return $.store[slot]; },
            set(value) {
                $.store[slot] = value;
                // console.log('setDataProxy : ', slot, ' = ', value)
                $.$emitter.dispatch('dataHydrates', { slot, value });
                $.$emitter.dispatch('hydrates', { slot, value });
                return true;
            },
        });
        return this;
    }
}
