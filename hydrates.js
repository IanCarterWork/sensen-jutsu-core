import { SensenHTMLElement } from "./index.js";
import { CompilateErrorException, RenderEngine } from "./compilate.js";
import { StabilizeEchoExpression, StabilizeSnapCodeExpression } from "./expression.js";
import { decodeHTMLEntities, StabilizeContent } from "./utilities.js";
export class ComponentHydratesStore {
    constructor() {
        this.entries = {};
    }
    /**
     * Add
     */
    push(name, record) {
        this.entries[name] = this.entries[name] || [];
        this.entries[name][this.entries[name].length] = record;
        return this;
    }
    /**
     * Add
     */
    update(name, key, record) {
        if (this.entries[name]) {
            if (this.entries[name][key]) {
                this.entries[name][key] = record;
            }
        }
        return this;
    }
    /**
     * Remove entry's slot by Property or State name
     */
    remove(name, key) {
        if (this.entries[name]) {
            this.entries[name] = this.entries[name].filter((record, index) => {
                return index != key;
            });
        }
        return this;
    }
    /**
     * Clean entry by Property or State name
     */
    clean(name) {
        this.entries[name] = [];
        return this;
    }
    /**
     * Clean entry by Property or State name
     */
    reset() {
        this.entries = {};
        return this;
    }
    /**
     * Find by Property or State name
     */
    retrieve(name) {
        return this.entries[name] || undefined;
    }
    /**
     * Find All
     */
    retrieves() {
        return this.entries;
    }
}
export class ComponentHydrates {
    // $props: ComponentHydratesStore<P> = {} as ComponentHydratesStore<P>
    constructor(component, state) {
        // entries: TComponentHydratesEntries<S, P> = {} as  TComponentHydratesEntries<S, P>
        // store: TComponentHydratesStore<S, P> = {
        //     state: {} as S,
        //     props: {} as P,
        // } as TComponentHydratesStore<S, P>
        this.component = {};
        this.state = {};
        // props: P = {} as P
        this.$state = {};
        this.component = component;
        this.state = Object.assign({}, state || component.state);
        // this.props = props || component.props;
        this.$state = new ComponentHydratesStore();
        // this.$props = new ComponentHydratesStore();
        this.proxies();
        // this.component.state = this.state;
        // this.component.props = this.props;
    }
    setObjectProxy(slot, input) {
        const self = this.component;
        self.state[slot] = new Proxy(input, {
            get: function (target, prop) {
                return target[prop];
            },
            set: function (target, prop, value, prox) {
                target[prop] = value;
                self.hydratesState(slot);
                return true;
            }
        });
        return this;
    }
    setDataProxy(slot) {
        const $ = this;
        const self = this.component;
        Object.defineProperty(self.state, slot, {
            get() { return $.state[slot]; },
            set(value) {
                $.state[slot] = value;
                self.hydratesState(slot);
                return true;
            },
        });
        return this;
    }
    /**
     * Build State Proxies
     * @description Use this to activate the dynamic state. For default the construct call this
     */
    proxies() {
        if (typeof this.state == 'object') {
            const self = this.component;
            const $ = this;
            Object.entries({ ...this.state }).map(e => {
                if (typeof e[1] == 'function') {
                    return;
                }
                const name = e[0];
                /**
                 * Array Proxy
                 */
                if (Array.isArray(e[1])) {
                    this.setObjectProxy(name, [...e[1]]);
                }
                /**
                 * Object Proxy
                 */
                else if (typeof e[1] == 'object') {
                    this.setObjectProxy(name, { ...e[1] });
                }
                /**
                 * Normal Data Proxy
                 */
                else {
                    this.setDataProxy(name);
                }
            });
        }
        return this;
    }
    /**
     * Hydrate Specific Node
     * @description Use this to ReRender state and props in Node
     */
    hydratesNode(node) {
        return new Promise((resolve, reject) => {
            /**
             * Init
             */
            let mockup = StabilizeContent((('innerHTML' in node) ? node.innerHTML : node.textContent) || '');
            /**
             * Echo
             */
            const echoMockup = StabilizeEchoExpression(mockup, true) || '';
            /**
             * SnapCode
             */
            const snapMockup = StabilizeSnapCodeExpression(echoMockup || mockup, true) || '';
            /**
             * Verifications
             */
            if (!echoMockup.length && !snapMockup.length) {
                resolve(null);
                return;
            }
            let $parentComponent = (this.component.$options.element instanceof SensenHTMLElement)
                ? ('$parentComponent' in this.component.$options.element
                    ? this.component.$options.element.$parentComponent
                    : undefined)
                : undefined;
            // console.warn('Compilate SnapCode Exp', snapMockup || echoMockup || mockup);
            // console.warn('Compilate Component', node );
            // console.log('Parent Component', $parentComponent );
            // return;
            /**
             * Rendering
             */
            RenderEngine(snapMockup || echoMockup || mockup, this.component, this.component.state).then(result => {
                if ('innerHTML' in node) {
                    node.innerHTML = result;
                }
                else if ('textContent' in node) {
                    node.textContent = (result);
                }
                resolve(result);
            }).catch(er => {
                // CompilateErrorException(er)
                reject(er);
            });
        });
    }
    /**
     * Hydrate Specific Recorde
     * @description Use this to ReRender state and props of Record
     */
    hydratesRecord(record) {
        return new Promise((resolve, reject) => {
            const node = record.node;
            /**
             * Init
             */
            let mockup = StabilizeContent(((record.mockup && 'innerHTML' in record.mockup) ? record.mockup.innerHTML : record.mockup?.textContent) || '');
            /**
             * Echo
             */
            const echoMockup = StabilizeEchoExpression(mockup, true) || '';
            /**
             * SnapCode
             */
            const snapMockup = StabilizeSnapCodeExpression(echoMockup || mockup, true) || '';
            /**
             * Verifications
             */
            if (!echoMockup.length && !snapMockup.length) {
                resolve(null);
                return;
            }
            // console.warn('Compilate SnapCode Exp 2', snapMockup || echoMockup || mockup)
            /**
             * Rendering
             */
            RenderEngine(snapMockup || echoMockup || mockup, this.component, this.component.state).then(result => {
                if ('innerHTML' in node) {
                    node.innerHTML = result;
                }
                else if ('textContent' in node) {
                    result = decodeHTMLEntities(result);
                    node.textContent = `${result}`;
                }
                resolve(result);
            }).catch(er => {
                CompilateErrorException(er);
                reject(er);
            });
        });
    }
}
