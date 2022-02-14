var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ComponentController_instances, _ComponentController_hydrates, _ComponentController_mutationObserver, _ComponentController_mutationObserved, _ComponentController_pending, _ComponentController_completed, _ComponentController_camouflage, _ComponentController_checkCompilatedDone;
import { CompilateEcho, CompilateEchoAttributes, CompilateSnapCode, CompilateSnapCodeAttributes } from "./compilate.js";
import { SensenEmitter } from "./emitter.js";
import { FindExpressions } from "./expression.js";
import { ComponentHydrates } from "./hydrates.js";
import { SensenAppearance } from "./appearance/index.js";
import { SensenMetricRandom } from "./metric-random.js";
import { ComponentVariable } from "./hook.js";
/**
 *
 */
export function SetDataLikeType(data) {
    /**
     * Object
     */
    try {
        return JSON.parse(data);
    }
    catch (e) { }
    /**
     * Boolean
     */
    return data;
}
/**
 * Create Component Method Event
 */
export function CreateComponentMethodEvent(component, ev) {
    const _ = {};
    _.self = component;
    _.event = ev;
    return _;
}
/**
 * Sensen HTML Element
 */
export class SensenHTMLElement extends HTMLElement {
    /**
     * New Construct
     */
    constructor(props) {
        super();
        this.$EUiD = '';
        this.isReady = false;
        /**
         * Dynamic var
         */
        this.props = {};
        // this.props = props;
    }
    $initializeEUiD() {
        this.$EUiD = this.$EUiD || `${SensenMetricRandom.CreateAplpha(16).join('')}`;
        return this.$EUiD;
    }
    /**
     * Properties name
     */
    static get observedAttributes() { return []; }
    /**
     * When Element is connected
     */
    connectedCallback() { }
    /**
     * When Element is Adopted by other DOM
     */
    adoptedCallback() { }
    /**
     * Whene Element is Disconnected to the current DOM
     */
    disconnectedCallback() {
        this.classList.forEach(cl => {
            const refs = document.querySelectorAll(`[sensen-appearance="${cl}"]`);
            if (refs) {
                refs.forEach(ref => ref.parentElement?.removeChild(ref));
            }
        });
    }
    /**
     * Whene Element change properties
     */
    attributeChangedCallback(name, value, oldValue) {
    }
    /**
     * Utilities
     */
    // $initializeProps(){
    //     if(this.props){
    //         Object.entries(this.props).map(prop=>{
    //             if(
    //                 typeof prop[1] == 'string' || typeof prop[1] == 'number' || typeof prop[1] == 'boolean'
    //             ){
    //                 this.setAttribute(prop[0], `${ prop[1] }`)
    //             }
    //             else if(typeof prop[1] == 'object'){
    //                 this.setAttribute(prop[0], JSON.stringify(prop[1]))
    //             }
    //         })
    //     }
    //     return this;
    // }
    // $fromAttributesProps(props?: P){
    //     this.props = props || this.props;
    //     if(this.props){
    //         Object.entries(this.props).map(prop=>{
    //             const get = prop[1] || this.getAttribute(`${ prop[0] }`);
    //             const name = prop[0] as keyof P
    //             this.props[ name ] = get as typeof prop[1];
    //             this.setAttribute(`${ prop[0] }`, get || '')
    //         })
    //     }
    //     return this.props;
    // }
    // $toAttributesProps(props?: P){
    //     if(props){
    //         Object.entries(props).map(prop=>{
    //             if(!(prop[0] in this.props)){ return; }
    //             const name = prop[0] as keyof P
    //             if(
    //                 typeof prop[1] == 'string' || typeof prop[1] == 'number' || typeof prop[1] == 'boolean'
    //             ){
    //                 this.setAttribute(`${ name }`, `${ prop[1] }`)
    //             }
    //             else if(typeof prop[1] == 'object'){
    //                 this.setAttribute(`${ name }`, JSON.stringify(prop[1]))
    //             }
    //             this.props[ name ] = prop[1]
    //         })
    //     }
    //     return props;
    // }
    /**
     * Abstracts
     */
    render(props) { return this; }
    show() { return this; }
    hide() { return this; }
}
/**
 * Sensen Component Controller
 */
window.SensenAvailableComponents = {};
export class ComponentController {
    /**
     * New Construct
     */
    constructor(options, params) {
        _ComponentController_instances.add(this);
        this.$prefix = 's';
        this.$templating = true;
        this.$tagName = '';
        this.props = {};
        this.methods = {};
        this.$options = {};
        // $klass? : CustomElementConstructor;
        this.isReady = false;
        _ComponentController_hydrates.set(this, void 0);
        _ComponentController_mutationObserver.set(this, void 0);
        _ComponentController_mutationObserved.set(this, void 0);
        _ComponentController_pending.set(this, 0);
        _ComponentController_completed.set(this, 0);
        params = (params && typeof params == 'object') ? params : {};
        this.$prefix = params.prefix || this.$prefix;
        this.$templating = (params.templating === false) ? false : this.$templating;
        this.$options = options;
        this.state = Object.assign({}, this.$options.state || {});
        this.methods = Object.assign({}, this.$options.methods || {});
        this.$tagName = `${this.$prefix}-${this.$options.name}`;
        this.$emitter = new SensenEmitter();
        __classPrivateFieldSet(this, _ComponentController_hydrates, new ComponentHydrates(this), "f");
        this.$make();
    }
    $makeProps() {
        const props = {};
        /**
         * Merge Element Atributes
         */
        Object.entries(this.$options.props || {}).map($ => {
            if (this.$options.element instanceof SensenHTMLElement) {
                let get = this.$options.element.getAttribute(`prop:${$[0]}`);
                if ($[1] instanceof ComponentVariable) {
                    $[1].trigger();
                    $[1].value = get || $[1].value;
                    props[$[0]] = $[1].value;
                }
                else {
                    props[$[0]] = (get || $[1]);
                }
                this.$options.element.setAttribute(`prop:${$[0]}`, `${props[$[0]]}`);
            }
        });
        this.props = props;
        return this;
    }
    $make() {
        __classPrivateFieldGet(this, _ComponentController_instances, "m", _ComponentController_camouflage).call(this)
            .$emitting()
            .$makeTemplate()
            .then(tpl => {
            if (this.$templating === true) {
                if (tpl) {
                    this.template = tpl;
                    if (this.$options.element instanceof HTMLElement) {
                        this.$options.element.innerHTML = tpl;
                    }
                }
                this
                    .$observers()
                    .$makeProps()
                    .$compilate();
            }
        });
        return this;
    }
    /**
     * set Template
     */
    $makeTemplate() {
        return new Promise((resolve, reject) => {
            if (this.$templating === true) {
                this.$options.template = (this.$options.template === true)
                    ? `${this.$options.name}.html` : this.$options.template;
                if (typeof this.$options.template != 'string') {
                    if (this.$options.element instanceof HTMLElement) {
                        if ('innerHTML' in this.$options.element) {
                            resolve(this.$options.element.innerHTML);
                            return;
                        }
                    }
                    resolve(undefined);
                    return;
                }
                else {
                    /**
                     * Check
                     */
                    const check = this.$options.template.match(/<\/?[^>]+>/gi);
                    /**
                     * If Template is String HTML code
                     */
                    if (check) {
                        resolve(this.$options.template);
                        return;
                    }
                    /**
                     * Else, it's file path
                     */
                    const url = new URL(location.href);
                    const path = `${url.origin}${(url.pathname == '/') ? '' : url.pathname}/sensen/components/${this.$options.template}`;
                    fetch(path).then(d => { if (d.status == 404) {
                        return undefined;
                    } return d.text(); })
                        .then(data => {
                        if (data) {
                            resolve(data);
                        }
                        else {
                            resolve(undefined);
                        }
                    })
                        .catch(er => { resolve(undefined); });
                    return;
                }
            }
            else {
                resolve(0);
            }
        });
    }
    /**
     * Initialize
     */
    $initialize() {
        this.$initializeElement();
        /** * Emit Event */
        this.$emitter?.dispatch('start', this);
        return this;
    }
    $initializeElement(props) {
        const $props = props || this.$options || null;
        const self = this;
        if ($props) {
            // this.$tagName = `s-${ $props.name }`
            /**
             * Find current Element sent
             */
            if (this.$options.element) {
                if (typeof this.$options.element == 'string') {
                    this.$options.element = document.querySelector(`${this.$options.element}`);
                }
            }
            /**
             * Define custom Element
             */
            if (this.$options.element instanceof HTMLElement) {
                this.$options.element?.setAttribute('is', `${this.$tagName}`);
            }
            if (!(this.$options.element instanceof HTMLElement)) {
                this.$options.element = document.createElement(`${this.$tagName}`);
            }
            /** * Emit Event */
            this.$emitter?.dispatch('elementReady', this);
        }
        return this;
    }
    /**
     * DOM Observer
     */
    $observers(params) {
        const $params = params || {};
        $params.excludeTags = params?.excludeTags || [];
        // console.warn('Self Props', this.props)
        if (this.$options.element instanceof HTMLElement) {
            __classPrivateFieldSet(this, _ComponentController_mutationObserver, new MutationObserver((records) => {
                if (records) {
                    __classPrivateFieldSet(this, _ComponentController_mutationObserved, records, "f");
                    const excludeTags = $params.excludeTags;
                    // const excludeTags = Object.keys(window.SensenAvailableComponents).map(k=>k.toLowerCase())
                    records.forEach(record => {
                        if (excludeTags?.length) {
                            if (record.target instanceof SensenHTMLElement) {
                                if (excludeTags.indexOf(record.target.tagName.toLowerCase()) > -1) {
                                    // console.warn('Exclude tag', record.target)
                                    return;
                                }
                            }
                        }
                        if (record.type == 'attributes') {
                            if (record.attributeName && this.$options.element instanceof HTMLElement) {
                                // if(record.attributeName in this.props){
                                //     const key = record.attributeName as keyof Props
                                //     const value = this.$options.element.getAttribute(record.attributeName)
                                //     // @ts-ignore
                                //     this.props[ key ] = value;
                                //     if(this.$options.element instanceof SensenHTMLElement){
                                //         this.$options.element.props[ key ] = SetDataLikeType(value) as Props[ typeof key ];
                                //     }
                                //     /** * Emit Event */
                                //     this.$emitter?.dispatch('propsChanged', {
                                //         name: record.attributeName,
                                //         value,
                                //         oldValue: record.oldValue
                                //     });
                                // }
                            }
                        }
                        /** * Emit Event */
                        this.$emitter?.dispatch('mutationObserved', record);
                    });
                    /** * Emit Event */
                    this.$emitter?.dispatch('mutationsObserved', records);
                }
            }), "f");
            __classPrivateFieldGet(this, _ComponentController_mutationObserver, "f").observe(this.$options.element, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                characterDataOldValue: true,
                attributeOldValue: true,
                attributeFilter: Object.keys(this.props)
            });
            /** * Emit Event */
            this.$emitter?.dispatch('mutationObservationReady', __classPrivateFieldGet(this, _ComponentController_mutationObserver, "f"));
        }
        return this;
    }
    hydratesState(slot) {
        const store = __classPrivateFieldGet(this, _ComponentController_hydrates, "f")?.$state.retrieve(slot);
        if (store?.length) {
            store.map(record => {
                __classPrivateFieldGet(this, _ComponentController_hydrates, "f")?.hydratesRecord(record)
                    .then((data) => {
                    /** * Emit Event */
                    this.$emitter?.dispatch('stateHydrated', { record, data });
                });
            });
        }
        return this;
    }
    /**
     * Compilate transactions
     */
    $compilate() {
        if (this.$options.element instanceof HTMLElement) {
            const found = FindExpressions(this.$options.element, (record) => {
                var _a;
                __classPrivateFieldSet(this, _ComponentController_pending, (_a = __classPrivateFieldGet(this, _ComponentController_pending, "f"), _a++, _a), "f");
                /**
                 * Find State to auto-compilate
                 */
                if (typeof this.state == 'object') {
                    const value = record.mockup?.textContent;
                    const sMatches = [
                        ...(value || '').matchAll(new RegExp(`(${Object.keys(this.state).join('|')})`, 'g')),
                        ...(value || '').matchAll(new RegExp(`this\\.state\\.(${Object.keys(this.state).join(')|this\\.state\\.(')})`, 'g')),
                        // ...(value||'').matchAll(new RegExp(`this\\.props\\.${ Object.keys(this.props).join('|this\\.props\\.') }`, 'g')),
                    ];
                    if (sMatches.length) {
                        sMatches.map(match => {
                            const recordClone = Object.assign({}, record);
                            const purge = match.filter(v => v != undefined);
                            const slot = purge[1];
                            // @ts-ignore
                            purge.input = match.input;
                            recordClone.match = purge;
                            __classPrivateFieldGet(this, _ComponentController_hydrates, "f")?.$state.push(slot, recordClone);
                        });
                    }
                }
                /** * Emit Event */
                this.$emitter?.dispatch('expressionDetected', record);
            });
            /**
             * No Expression detected
             */
            if (!found.length) {
                __classPrivateFieldGet(this, _ComponentController_instances, "m", _ComponentController_checkCompilatedDone).call(this, []);
            }
        }
        /** * Emit Event */
        this.$emitter?.dispatch('compilationReady', this);
        return this;
    }
    /**
     * Emitting
     */
    $emitting() {
        /**
         * Model : Begin
         */
        this.$emitter?.listen('elementReady', (args) => {
        });
        /**
         * Model : End
         */
        /**
         * Mutations Observers : Begin
         */
        this.$emitter?.listen('mutationObservationReady', (args) => {
            // console.warn('Mutation Observed', args)
        });
        this.$emitter?.listen('mutationObserved', (args) => {
            if (args.emit.target) {
                __classPrivateFieldGet(this, _ComponentController_hydrates, "f")?.hydratesNode(args.emit.target);
            }
        });
        this.$emitter?.listen('mutationsObserved', (args) => {
            // console.warn('Mutations Observed', args)
        });
        /**
         * Mutations Observers : End
         */
        /**
         * Compilate Record : Begin
         */
        this.$emitter?.listen('expressionDetected', ($) => {
            const promised = [];
            if ($.emit) {
                if ($.emit.type == 'echo') {
                    promised.push(CompilateEcho(this, $.emit));
                }
                else if ($.emit.type == 'snapcode') {
                    promised.push(CompilateSnapCode(this, $.emit));
                }
                else if ($.emit.type == 'attribute.echo') {
                    // if($.emit.node === this.$options.element){
                    //     console.warn('Record Attribute echo ', $.emit.node === this.$options.element, $.emit.attribute)
                    //     return false;
                    // }
                    promised.push(CompilateEchoAttributes(this, $.emit));
                }
                else if ($.emit.type == 'attribute.snapcode') {
                    promised.push(CompilateSnapCodeAttributes(this, $.emit));
                }
                else if ($.emit.type == 'directive') {
                    promised.push(new Promise((r, j) => {
                        if (!('directive' in $.emit)) {
                            throw (`Corrupted directive : not found`);
                        }
                        if (typeof $.emit.directive?.main != 'function') {
                            throw (`Corrupted directive : < ${$.emit.directive?.name} >`);
                        }
                        $.emit.directive.main(this, $.emit);
                        r($.emit);
                    }));
                }
            }
            if (promised.length) {
                Promise.all(promised)
                    .then(lot => {
                    var _a;
                    __classPrivateFieldSet(this, _ComponentController_completed, (_a = __classPrivateFieldGet(this, _ComponentController_completed, "f"), _a++, _a), "f");
                    // console.warn('Compilated', lot)
                    __classPrivateFieldGet(this, _ComponentController_instances, "m", _ComponentController_checkCompilatedDone).call(this, lot);
                });
            }
            if (!promised.length) {
                __classPrivateFieldGet(this, _ComponentController_instances, "m", _ComponentController_checkCompilatedDone).call(this, []);
            }
        });
        this.$emitter?.listen('compilate', (args) => {
            // console.warn('Expression Recorded', args.emit)
        });
        /**
         * Compilate Record : End
         */
        /**
         * Custom Emitter Listener : Begin
         */
        if (this.$options.emit) {
            Object.entries(this.$options.emit).map(e => {
                if (typeof e[1] == 'function') {
                    const self = this;
                    this.$emitter?.listen(e[0], function () {
                        // @ts-ignore
                        e[1].apply(this, [arguments[0]]);
                    });
                }
            });
        }
        /**
         * Custom Emitter Listener : End
         */
        return this;
    }
}
_ComponentController_hydrates = new WeakMap(), _ComponentController_mutationObserver = new WeakMap(), _ComponentController_mutationObserved = new WeakMap(), _ComponentController_pending = new WeakMap(), _ComponentController_completed = new WeakMap(), _ComponentController_instances = new WeakSet(), _ComponentController_camouflage = function _ComponentController_camouflage() {
    this.$emitter?.listen('start', () => {
        if (this.$options.element instanceof HTMLElement) {
            this.$options.element.style.display = 'none';
        }
    });
    this.$emitter?.listen('ready', () => {
        if (this.$options.element instanceof HTMLElement) {
            // @ts-ignore
            this.$options.element.style.display = null;
        }
    });
    return this;
}, _ComponentController_checkCompilatedDone = function _ComponentController_checkCompilatedDone(lot) {
    if (__classPrivateFieldGet(this, _ComponentController_pending, "f") == __classPrivateFieldGet(this, _ComponentController_completed, "f")) {
        /** * Emit Event */
        this.$emitter?.dispatch('compilated', lot);
        if (!this.isReady) {
            this.isReady = true;
            /** * Emit Event */
            this.$emitter?.dispatch('ready', this);
        }
    }
    return this;
};
/**
 * Sensen Component
 */
export class Component {
    /**
     * New Construct
     */
    constructor(options) {
        this.$tagName = '';
        this.$options = {};
        this.$options = options;
        this.$options.appearance = this.$options.appearance || {};
        this.$appearance = new SensenAppearance(this.$options.appearance);
        this.$tagName = `s-${this.$options.name}`;
        this.$appearance.mount();
        this.$create();
    }
    $create() {
        if (!customElements.get(this.$tagName)) {
            const self = this;
            this.$klass = class extends SensenHTMLElement {
                constructor(props) {
                    super(props);
                    this.$controller = {};
                    this.props = {};
                    this.$initialize();
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('construct', this.$controller);
                }
                $initialize() {
                    const $options = Object.assign({}, self.$options);
                    $options.element = this;
                    this.$controller = new ComponentController($options);
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('connected', this.$controller);
                    /**
                     * Set Appearance
                     */
                    this.classList.add(self.$appearance.$UiD);
                    return this;
                }
                connectedCallback() {
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('connected', this.$controller);
                }
                adoptedCallback() {
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('adopted', this.$controller);
                }
                disconnectedCallback() {
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('disconnected', this.$controller);
                }
                attributeChangedCallback(name, value, oldValue) {
                    console.log('Props changed', name, value, oldValue);
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('nPropsChanged', { name, value, oldValue });
                }
            };
            window.SensenAvailableComponents[this.$tagName] = this.$klass;
            customElements.define(this.$tagName.toLowerCase(), this.$klass);
        }
        return this;
    }
    use() {
        return this;
    }
}
/**
 * Exportations
 */
export default class Sensen {
    static Main(data) {
        switch (typeof data) {
            case 'object':
                if (data instanceof SensenHTMLElement) {
                    document.body.insertBefore(data, document.body.firstChild);
                }
                break;
        }
        return this;
    }
}
Sensen.Component = Component;
