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
import { CompilateEcho, CompilateEchoAttributes, CompilateSnapCode, CompilateSnapCodeAttributes } from "./compilate";
import { SensenEmitter } from "./emitter";
import { FindExpressions } from "./expression";
import { ComponentHydrates } from "./hydrates";
import { SensenAppearance } from "./appearance";
import { SensenMetricRandom } from "./metric-random";
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
        this.props = props;
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
    $initializeProps() {
        if (this.props) {
            Object.entries(this.props).map(prop => {
                if (typeof prop[1] == 'string' || typeof prop[1] == 'number' || typeof prop[1] == 'boolean') {
                    this.setAttribute(prop[0], `${prop[1]}`);
                }
                else if (typeof prop[1] == 'object') {
                    this.setAttribute(prop[0], JSON.stringify(prop[1]));
                }
            });
        }
        return this;
    }
    $fromAttributesProps(props) {
        this.props = props || this.props;
        if (this.props) {
            Object.entries(this.props).map(prop => {
                const get = this.getAttribute(`${prop[0]}`);
                const name = prop[0];
                this.props[name] = get;
            });
        }
        return this.props;
    }
    $toAttributesProps(props) {
        if (props) {
            Object.entries(props).map(prop => {
                if (!(prop[0] in this.props)) {
                    return;
                }
                const name = prop[0];
                if (typeof prop[1] == 'string' || typeof prop[1] == 'number' || typeof prop[1] == 'boolean') {
                    this.setAttribute(`${name}`, `${prop[1]}`);
                }
                else if (typeof prop[1] == 'object') {
                    this.setAttribute(`${name}`, JSON.stringify(prop[1]));
                }
                this.props[name] = prop[1];
            });
        }
        return props;
    }
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
export class ComponentController {
    /**
     * New Construct
     */
    constructor(options) {
        _ComponentController_instances.add(this);
        this.$tagName = '';
        this.methods = {};
        this.$options = {};
        // $klass? : CustomElementConstructor;
        this.isReady = false;
        _ComponentController_hydrates.set(this, void 0);
        _ComponentController_mutationObserver.set(this, void 0);
        _ComponentController_mutationObserved.set(this, void 0);
        _ComponentController_pending.set(this, 0);
        _ComponentController_completed.set(this, 0);
        this.$options = options;
        this.state = Object.assign({}, this.$options.state || {});
        this.props = Object.assign({}, this.$options.props || {});
        this.methods = Object.assign({}, this.$options.methods || {});
        this.$tagName = `sn-${this.$options.name}`;
        this.$emitter = new SensenEmitter();
        __classPrivateFieldSet(this, _ComponentController_hydrates, new ComponentHydrates(this), "f");
        // console.warn('Controller Props', this.props )
        this.$make();
    }
    $make() {
        __classPrivateFieldGet(this, _ComponentController_instances, "m", _ComponentController_camouflage).call(this)
            .$emitting()
            .$makeTemplate()
            .then(tpl => {
            if (tpl) {
                this.template = tpl;
                if (this.$options.element instanceof HTMLElement) {
                    this.$options.element.innerHTML = tpl;
                }
            }
            this
                .$observers()
                .$compilate();
        });
        return this;
    }
    /**
     * set Template
     */
    $makeTemplate() {
        return new Promise((resolve, reject) => {
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
                const path = `${url.origin}${(url.pathname == '/') ? '' : url.pathname}/${this.$options.template}`;
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
            this.$tagName = `sn-${$props.name}`;
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
    $observers() {
        if (this.$options.element instanceof HTMLElement) {
            __classPrivateFieldSet(this, _ComponentController_mutationObserver, new MutationObserver((records) => {
                if (records) {
                    __classPrivateFieldSet(this, _ComponentController_mutationObserved, records, "f");
                    records.forEach(record => {
                        if (record.type == 'attributes') {
                            if (record.attributeName && this.$options.element instanceof HTMLElement) {
                                if (record.attributeName in this.props) {
                                    const key = record.attributeName;
                                    const value = this.$options.element.getAttribute(record.attributeName);
                                    // @ts-ignore
                                    this.props[key] = value;
                                    this.$options.element.props[key] = SetDataLikeType(value);
                                    /** * Emit Event */
                                    this.$emitter?.dispatch('propsChanged', {
                                        name: record.attributeName,
                                        value,
                                        oldValue: record.oldValue
                                    });
                                }
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
            // console.warn('Create Element Model', args)
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
            // console.warn('Mutation Observed', args)
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
                    this.$fromAttributesProps(props || self.$options.props);
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
            customElements.define(this.$tagName.toLowerCase(), this.$klass);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLDJCQUEyQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLGNBQWMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQXNDckQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLElBQVM7SUFFckM7O09BRUc7SUFDSCxJQUFHO1FBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7SUFBQyxPQUFNLENBQUMsRUFBQyxHQUFHO0lBRzNDOztPQUVHO0lBR0gsT0FBTyxJQUFJLENBQUM7QUFFaEIsQ0FBQztBQVFEOztHQUVHO0FBRUgsTUFBTSxVQUFVLDBCQUEwQixDQVF4QyxTQUF1QyxFQUFFLEVBQVM7SUFFaEQsTUFBTSxDQUFDLEdBQW1DLEVBQW1DLENBQUE7SUFFN0UsQ0FBQyxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFFbkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7SUFFWixPQUFPLENBQUMsQ0FBQztBQUViLENBQUM7QUFNRDs7R0FFRztBQUNILE1BQU0sT0FBTyxpQkFBcUIsU0FBUSxXQUFXO0lBNkJqRDs7T0FFRztJQUNILFlBQVksS0FBUztRQUVqQixLQUFLLEVBQUUsQ0FBQztRQWhDWixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLFlBQU8sR0FB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LFlBQVksQ0FBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUUsQ0FBQztpQkFFaEU7Z0JBRUwsTUFBTTtTQUVUO1FBR0QsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQzs7QUF4Qk0sZ0JBQVMsR0FBRyxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21waWxhdGVFY2hvLCBDb21waWxhdGVFY2hvQXR0cmlidXRlcywgQ29tcGlsYXRlU25hcENvZGUsIENvbXBpbGF0ZVNuYXBDb2RlQXR0cmlidXRlcyB9IGZyb20gXCIuL2NvbXBpbGF0ZVwiO1xuaW1wb3J0IHsgU2Vuc2VuRW1pdHRlciB9IGZyb20gXCIuL2VtaXR0ZXJcIjtcbmltcG9ydCB7IEZpbmRFeHByZXNzaW9ucyB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50TWV0aG9kRXZlbnQsIENvbXBvbmVudE1ldGhvZFJhdywgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlLCBFeHByZXNzaW9uUmVjb3JkLCBTY2VuZUFjdGl2aXR5UHJvcHMsIFNjZW5lQWN0aXZpdHlFbWl0dGVyLCBUQ29tcG9uZW50T3B0aW9ucywgVFNjcmVlbkNvbmZpZyB9IGZyb20gXCIuL2luZGV4LnRcIjtcbmltcG9ydCB7IENvbXBvbmVudEh5ZHJhdGVzIH0gZnJvbSBcIi4vaHlkcmF0ZXNcIjtcbmltcG9ydCB7IFNlbnNlbkFwcGVhcmFuY2UsIFRBcHBlYXJhbmNlUHJvcHMgfSBmcm9tIFwiLi9hcHBlYXJhbmNlXCI7XG5pbXBvcnQgeyBTZW5zZW5UZW1wbGF0ZSB9IGZyb20gXCIuL3RlbXBsYXRlXCI7XG5pbXBvcnQgeyBTZW5zZW5NZXRyaWNSYW5kb20gfSBmcm9tIFwiLi9tZXRyaWMtcmFuZG9tXCI7XG5cblxuXG5cbi8qKlxuICogTWV0cmljXG4gKi9cblxuIGV4cG9ydCB0eXBlIE1ldHJpY1RBbHBoYU51bSA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHogQSBCIEMgRCBFIEYgRyBIIEkgSiBLIEwgTSBOIE8gUCBRIFIgUyBUIFUgViBXIFggWSBaIDAgMSAyIDMgNCA1IDYgNyA4IDknO1xuXG4gZXhwb3J0IHR5cGUgTWV0cmljVEFscGhhTnVtTCA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG4gXG4gZXhwb3J0IHR5cGUgTWV0cmljVEFscGhhTnVtVSA9ICdBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG4gXG4gZXhwb3J0IHR5cGUgTWV0cmljVEFscGhhVSA9ICdBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFonO1xuIFxuIGV4cG9ydCB0eXBlIE1ldHJpY1RBbHBoYUwgPSAnYSBiIGMgZCBlIGYgZyBoIGkgaiBrIGwgbSBuIG8gcCBxIHIgcyB0IHUgdiB3IHggeSB6JztcbiBcbiBleHBvcnQgdHlwZSBNZXRyaWNUTnVtID0gJzAgMSAyIDMgNCA1IDYgNyA4IDknO1xuIFxuIGV4cG9ydCB0eXBlIE1ldHJpY1RIZXggPSAnYSBiIGMgZCBlIGYgQSBCIEMgRCBFIEYnO1xuIFxuXG5cblxuXG5cblxuZXhwb3J0IHR5cGUgVE9iamVjdEVtYmVkPFQ+ID0geyBcbiAgICBbSyBpbiBrZXlvZiBUXT86IFRbS10gfCBudW1iZXJcbn1cblxuIFxuIFxuXG5cblxuLyoqXG4gKiBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFNldERhdGFMaWtlVHlwZShkYXRhOiBhbnkpe1xuXG4gICAgLyoqXG4gICAgICogT2JqZWN0XG4gICAgICovXG4gICAgdHJ5eyByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTsgfSBjYXRjaChlKXsgfVxuICAgIFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhblxuICAgICAqL1xuICAgIFxuXG4gICAgcmV0dXJuIGRhdGE7XG4gICAgXG59XG5cblxuXG5cblxuXG5cbi8qKlxuICogQ3JlYXRlIENvbXBvbmVudCBNZXRob2QgRXZlbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlQ29tcG9uZW50TWV0aG9kRXZlbnQ8XG4gICAgXG4gICAgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICAgICAgXG4gICAgUCBleHRlbmRzIENvbXBvbmVudFByb3BzLFxuICAgIFxuICAgIE0gZXh0ZW5kcyBDb21wb25lbnRNZXRob2RSYXc8UywgUD5cbiAgICBcbj4oY29tcG9uZW50OiBDb21wb25lbnRDb250cm9sbGVyPFMsIFAsIE0+LCBldjogRXZlbnQpe1xuXG4gICAgY29uc3QgXyA6IENvbXBvbmVudE1ldGhvZEV2ZW50PFMsIFAsIE0+ID0ge30gYXMgQ29tcG9uZW50TWV0aG9kRXZlbnQ8UywgUCwgTT5cbiAgICBcbiAgICBfLnNlbGYgPSBjb21wb25lbnQ7XG5cbiAgICBfLmV2ZW50ID0gZXZcbiAgICBcbiAgICByZXR1cm4gXztcblxufVxuXG5cblxuXG5cbi8qKlxuICogU2Vuc2VuIEhUTUwgRWxlbWVudFxuICovXG5leHBvcnQgY2xhc3MgU2Vuc2VuSFRNTEVsZW1lbnQ8UD4gZXh0ZW5kcyBIVE1MRWxlbWVudHtcblxuICAgICRFVWlEOiBzdHJpbmcgPSAnJztcblxuICAgIGlzUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgJGluaXRpYWxpemVFVWlEKCl7XG5cbiAgICAgICAgdGhpcy4kRVVpRCA9IHRoaXMuJEVVaUQgfHwgYCR7IFNlbnNlbk1ldHJpY1JhbmRvbS5DcmVhdGVBcGxwaGEoMTYpLmpvaW4oJycpIH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLiRFVWlEO1xuXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge3JldHVybiBbXTsgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEeW5hbWljIHZhclxuICAgICAqL1xuICAgIHByb3BzIDogUCA9IHt9IGFzIFA7XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogTmV3IENvbnN0cnVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogUCl7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogV2hlbiBFbGVtZW50IGlzIGNvbm5lY3RlZFxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7fVxuXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIEVsZW1lbnQgaXMgQWRvcHRlZCBieSBvdGhlciBET01cbiAgICAgKi9cbiAgICBhZG9wdGVkQ2FsbGJhY2soKXt9XG5cblxuICAgIC8qKlxuICAgICAqIFdoZW5lIEVsZW1lbnQgaXMgRGlzY29ubmVjdGVkIHRvIHRoZSBjdXJyZW50IERPTVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7XG5cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuZm9yRWFjaChjbD0+e1xuXG4gICAgICAgICAgICBjb25zdCByZWZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3NlbnNlbi1hcHBlYXJhbmNlPVwiJHsgY2wgfVwiXWApXG5cbiAgICAgICAgICAgIGlmKHJlZnMpe1xuXG4gICAgICAgICAgICAgICAgcmVmcy5mb3JFYWNoKHJlZj0+IHJlZi5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChyZWYpIClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgXG5cblxuICAgIC8qKlxuICAgICAqIFdoZW5lIEVsZW1lbnQgY2hhbmdlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvbGRWYWx1ZTogc3RyaW5nKXtcblxuICAgIH1cbiAgICBcblxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0aWVzXG4gICAgICovXG5cbiAgICAkaW5pdGlhbGl6ZVByb3BzKCl7XG5cbiAgICAgICAgaWYodGhpcy5wcm9wcyl7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucHJvcHMpLm1hcChwcm9wPT57XG5cbiAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHByb3BbMV0gPT0gJ3N0cmluZycgfHwgdHlwZW9mIHByb3BbMV0gPT0gJ251bWJlcicgfHwgdHlwZW9mIHByb3BbMV0gPT0gJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShwcm9wWzBdLCBgJHsgcHJvcFsxXSB9YClcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYodHlwZW9mIHByb3BbMV0gPT0gJ29iamVjdCcpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb3BbMF0sIEpTT04uc3RyaW5naWZ5KHByb3BbMV0pKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgJGZyb21BdHRyaWJ1dGVzUHJvcHMocHJvcHM/OiBQKXtcblxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwgdGhpcy5wcm9wcztcblxuICAgICAgICBpZih0aGlzLnByb3BzKXtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcykubWFwKHByb3A9PntcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdldCA9IHRoaXMuZ2V0QXR0cmlidXRlKGAkeyBwcm9wWzBdIH1gKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcm9wWzBdIGFzIGtleW9mIFBcblxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbIG5hbWUgXSA9IGdldCBhcyB0eXBlb2YgcHJvcFsxXVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcztcblxuICAgIH1cblxuXG4gICAgJHRvQXR0cmlidXRlc1Byb3BzKHByb3BzPzogUCl7XG5cbiAgICAgICAgaWYocHJvcHMpe1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwcm9wcykubWFwKHByb3A9PntcblxuICAgICAgICAgICAgICAgIGlmKCEocHJvcFswXSBpbiB0aGlzLnByb3BzKSl7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHByb3BbMF0gYXMga2V5b2YgUFxuXG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwcm9wWzFdID09ICdzdHJpbmcnIHx8IHR5cGVvZiBwcm9wWzFdID09ICdudW1iZXInIHx8IHR5cGVvZiBwcm9wWzFdID09ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICl7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYCR7IG5hbWUgfWAsIGAkeyBwcm9wWzFdIH1gKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgcHJvcFsxXSA9PSAnb2JqZWN0Jyl7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYCR7IG5hbWUgfWAsIEpTT04uc3RyaW5naWZ5KHByb3BbMV0pKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbIG5hbWUgXSA9IHByb3BbMV1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcblxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIFxuXG5cbiAgICAvKipcbiAgICAgKiBBYnN0cmFjdHNcbiAgICAgKi9cbiAgICByZW5kZXIocHJvcHM/OiBQKXtyZXR1cm4gdGhpczt9XG5cbiAgICBcbiAgICBzaG93KCl7cmV0dXJuIHRoaXM7fVxuXG4gICAgXG4gICAgaGlkZSgpe3JldHVybiB0aGlzO31cbiAgICBcbiAgICBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gQ29tcG9uZW50IENvbnRyb2xsZXJcbiAqL1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q29udHJvbGxlcjxcblxuICAgIFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgIFxuICAgIFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTWV0aG9kcyBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTdGF0ZSwgUHJvcHM+XG5cbj57XG5cblxuICAgICR0YWdOYW1lIDogc3RyaW5nID0gJyc7XG5cbiAgICBzdGF0ZSA6IHsgW1MgaW4ga2V5b2YgU3RhdGVdIDogU3RhdGVbU10gfTtcblxuICAgIHByb3BzIDogeyBbUCBpbiBrZXlvZiBQcm9wc10gOiBQcm9wc1tQXSB9O1xuXG4gICAgbWV0aG9kcyA6IHsgW00gaW4ga2V5b2YgTWV0aG9kc10gOiBNZXRob2RzW01dIH0gPSB7fSBhcyB7IFtNIGluIGtleW9mIE1ldGhvZHNdIDogTWV0aG9kc1tNXSB9O1xuXG4gICAgJG9wdGlvbnMgOiBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+ID0ge30gYXMgVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPlxuICAgIFxuICAgICRlbWl0dGVyPyA6IFNlbnNlbkVtaXR0ZXI7XG5cbiAgICAvLyAka2xhc3M/IDogQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yO1xuICAgIFxuICAgIGlzUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgI2h5ZHJhdGVzPyA6IENvbXBvbmVudEh5ZHJhdGVzPFN0YXRlLCBQcm9wcywgTWV0aG9kcz47XG4gICAgXG4gICAgI211dGF0aW9uT2JzZXJ2ZXI/IDogTXV0YXRpb25PYnNlcnZlcjtcblxuICAgICNtdXRhdGlvbk9ic2VydmVkPyA6IE11dGF0aW9uUmVjb3JkW107XG5cblxuICAgIHRlbXBsYXRlPzogc3RyaW5nO1xuXG5cbiAgICAjcGVuZGluZzogbnVtYmVyID0gMDtcblxuICAgICNjb21wbGV0ZWQ6IG51bWJlciA9IDA7XG4gICAgXG5cbiAgICAvKipcbiAgICAgKiBOZXcgQ29uc3RydWN0XG4gICAgICovXG4gICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz4pe1xuXG4gICAgICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLiRvcHRpb25zLnN0YXRlfHx7fSkgYXMgU3RhdGVcblxuICAgICAgICB0aGlzLnByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy4kb3B0aW9ucy5wcm9wc3x8e30pIGFzIFByb3BzXG5cbiAgICAgICAgdGhpcy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy4kb3B0aW9ucy5tZXRob2RzfHx7fSkgYXMgTWV0aG9kc1xuXG4gICAgICAgIHRoaXMuJHRhZ05hbWUgPSBgc24tJHsgdGhpcy4kb3B0aW9ucy5uYW1lIH1gXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlciA9IG5ldyBTZW5zZW5FbWl0dGVyKCk7XG5cbiAgICAgICAgdGhpcy4jaHlkcmF0ZXMgPSBuZXcgQ29tcG9uZW50SHlkcmF0ZXM8U3RhdGUsIFByb3BzLCBNZXRob2RzPih0aGlzKVxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdDb250cm9sbGVyIFByb3BzJywgdGhpcy5wcm9wcyApXG5cblxuICAgICAgICB0aGlzLiRtYWtlKCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG4gICAgJG1ha2UoKXtcblxuICAgICAgICB0aGlzXG4gICAgICAgICBcbiAgICAgICAgICAgIC4jY2Ftb3VmbGFnZSgpXG4gICAgICAgIFxuICAgICAgICAgICAgLiRlbWl0dGluZygpXG5cbiAgICAgICAgICAgIC4kbWFrZVRlbXBsYXRlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudGhlbih0cGw9PntcblxuICAgICAgICAgICAgICAgICAgICBpZih0cGwpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRwbDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuaW5uZXJIVE1MID0gdHBsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC4kb2JzZXJ2ZXJzKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLiRjb21waWxhdGUoKVxuICAgIFxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgO1xuICAgICAgICBcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuXG5cblxuICAgIC8qKlxuICAgICAqIHNldCBUZW1wbGF0ZVxuICAgICAqL1xuICAgICRtYWtlVGVtcGxhdGUoKXtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPigocmVzb2x2ZSwgcmVqZWN0KT0+e1xuIFxuICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuJG9wdGlvbnMudGVtcGxhdGUgIT0gJ3N0cmluZycpe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCdpbm5lckhUTUwnIGluIHRoaXMuJG9wdGlvbnMuZWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy4kb3B0aW9ucy5lbGVtZW50LmlubmVySFRNTClcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIENoZWNrIFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZS5tYXRjaCgvPFxcLz9bXj5dKz4vZ2kpO1xuXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiBUZW1wbGF0ZSBpcyBTdHJpbmcgSFRNTCBjb2RlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYoY2hlY2speyByZXNvbHZlKHRoaXMuJG9wdGlvbnMudGVtcGxhdGUpOyByZXR1cm47IH1cblxuXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbHNlLCBpdCdzIGZpbGUgcGF0aFxuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IGAkeyB1cmwub3JpZ2luIH0keyAodXJsLnBhdGhuYW1lID09ICcvJykgPyAnJyA6IHVybC5wYXRobmFtZSB9LyR7IHRoaXMuJG9wdGlvbnMudGVtcGxhdGUgfWBcblxuXG4gICAgICAgICAgICAgICAgZmV0Y2gocGF0aCkudGhlbihkPT57IGlmKGQuc3RhdHVzID09IDQwNCl7IHJldHVybiB1bmRlZmluZWQgfSByZXR1cm4gZC50ZXh0KCkgfSlcblxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJlc29sdmUodW5kZWZpbmVkKTsgfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyPT57IHJlc29sdmUodW5kZWZpbmVkKTsgfSlcblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuXG5cblxuICAgIC8qKlxuICAgICAqIENhbW91ZmxhZ2VcbiAgICAgKi9cbiAgICAjY2Ftb3VmbGFnZSgpe1xuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3Rlbjx0eXBlb2YgdGhpcz4oJ3N0YXJ0JywgKCk9PntcblxuICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3Rlbjx0eXBlb2YgdGhpcz4oJ3JlYWR5JywgKCk9PntcblxuICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG5cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVcbiAgICAgKi9cblxuICAgICRpbml0aWFsaXplKCl7XG5cbiAgICAgICAgdGhpcy4kaW5pdGlhbGl6ZUVsZW1lbnQoKTtcblxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdzdGFydCcsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgJGluaXRpYWxpemVFbGVtZW50KHByb3BzPzogVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPil7XG5cbiAgICAgICAgY29uc3QgJHByb3BzID0gcHJvcHMgfHwgdGhpcy4kb3B0aW9ucyB8fCBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgaWYoJHByb3BzKXtcblxuICAgICAgICAgICAgdGhpcy4kdGFnTmFtZSA9IGBzbi0keyAkcHJvcHMubmFtZSB9YFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmluZCBjdXJyZW50IEVsZW1lbnQgc2VudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuJG9wdGlvbnMuZWxlbWVudCA9PSAnc3RyaW5nJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHsgdGhpcy4kb3B0aW9ucy5lbGVtZW50IH1gKSBhcyBTZW5zZW5IVE1MRWxlbWVudDxQcm9wcz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVmaW5lIGN1c3RvbSBFbGVtZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudD8uc2V0QXR0cmlidXRlKCdpcycsIGAkeyB0aGlzLiR0YWdOYW1lIH1gKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCEodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7IHRoaXMuJHRhZ05hbWUgfWApIGFzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPlxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2VsZW1lbnRSZWFkeScsIHRoaXMpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBET00gT2JzZXJ2ZXJcbiAgICAgKi9cbiAgICAkb2JzZXJ2ZXJzKCl7XG5cblxuICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI211dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3Jkcyk9PntcblxuICAgICAgICAgICAgICAgIGlmKHJlY29yZHMpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI211dGF0aW9uT2JzZXJ2ZWQgPSByZWNvcmRzXG5cbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKHJlY29yZD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWNvcmQudHlwZSA9PSAnYXR0cmlidXRlcycpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVjb3JkLmF0dHJpYnV0ZU5hbWUgJiYgdGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlY29yZC5hdHRyaWJ1dGVOYW1lIGluIHRoaXMucHJvcHMpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByZWNvcmQuYXR0cmlidXRlTmFtZSBhcyBrZXlvZiB0eXBlb2YgdGhpcy5wcm9wc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuJG9wdGlvbnMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocmVjb3JkLmF0dHJpYnV0ZU5hbWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbIGtleSBdID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudC5wcm9wc1sga2V5IF0gPSBTZXREYXRhTGlrZVR5cGUodmFsdWUpIGFzIFByb3BzWyB0eXBlb2Yga2V5IF07ICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncHJvcHNDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5hdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiByZWNvcmQub2xkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbk9ic2VydmVkJywgcmVjb3JkKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25zT2JzZXJ2ZWQnLCByZWNvcmRzKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG5cbiAgICBcbiAgICAgICAgICAgIHRoaXMuI211dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRvcHRpb25zLmVsZW1lbnQse1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ211dGF0aW9uT2JzZXJ2YXRpb25SZWFkeScsIHRoaXMuI211dGF0aW9uT2JzZXJ2ZXIpO1xuXG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG5cblxuXG5cblxuICAgIGh5ZHJhdGVzU3RhdGUoc2xvdDoga2V5b2YgU3RhdGUpe1xuXG4gICAgICAgIGNvbnN0IHN0b3JlID0gdGhpcy4jaHlkcmF0ZXM/LiRzdGF0ZS5yZXRyaWV2ZSggc2xvdCApXG5cbiAgICAgICAgXG4gICAgICAgIGlmKHN0b3JlPy5sZW5ndGgpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdG9yZS5tYXAocmVjb3JkPT57XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4jaHlkcmF0ZXM/Lmh5ZHJhdGVzUmVjb3JkKHJlY29yZClcblxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSk9PntcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnc3RhdGVIeWRyYXRlZCcsIHtyZWNvcmQsIGRhdGF9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBDb21waWxhdGUgdHJhbnNhY3Rpb25zXG4gICAgICovXG4gICAgJGNvbXBpbGF0ZSgpe1xuXG4gICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAgICAgY29uc3QgZm91bmQgPSBGaW5kRXhwcmVzc2lvbnModGhpcy4kb3B0aW9ucy5lbGVtZW50LCAocmVjb3JkKT0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuI3BlbmRpbmcrKztcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEZpbmQgU3RhdGUgdG8gYXV0by1jb21waWxhdGVcbiAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnN0YXRlID09ICdvYmplY3QnKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlY29yZC5tb2NrdXA/LnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzTWF0Y2hlcyA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHZhbHVlfHwnJykubWF0Y2hBbGwobmV3IFJlZ0V4cChgKCR7IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmpvaW4oJ3wnKSB9KWAsICdnJykpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGB0aGlzXFxcXC5zdGF0ZVxcXFwuKCR7IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmpvaW4oJyl8dGhpc1xcXFwuc3RhdGVcXFxcLignKSB9KWAsICdnJykpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGB0aGlzXFxcXC5wcm9wc1xcXFwuJHsgT2JqZWN0LmtleXModGhpcy5wcm9wcykuam9pbignfHRoaXNcXFxcLnByb3BzXFxcXC4nKSB9YCwgJ2cnKSksXG4gICAgICAgICAgICAgICAgICAgIF1cblxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHNNYXRjaGVzLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNNYXRjaGVzLm1hcChtYXRjaD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCByZWNvcmQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwdXJnZSA9IG1hdGNoLmZpbHRlcih2PT52IT11bmRlZmluZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gcHVyZ2VbMV0gYXMga2V5b2YgU3RhdGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJnZS5pbnB1dCA9IG1hdGNoLmlucHV0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRDbG9uZS5tYXRjaCA9IHB1cmdlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jaHlkcmF0ZXM/LiRzdGF0ZS5wdXNoKHNsb3QsIHJlY29yZENsb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnZXhwcmVzc2lvbkRldGVjdGVkJywgcmVjb3JkKTtcblxuICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTm8gRXhwcmVzc2lvbiBkZXRlY3RlZFxuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGlmKCFmb3VuZC5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY2hlY2tDb21waWxhdGVkRG9uZShbXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29tcGlsYXRpb25SZWFkeScsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuXG4gICAgI2NoZWNrQ29tcGlsYXRlZERvbmUobG90OiAoRXhwcmVzc2lvblJlY29yZCB8IHVuZGVmaW5lZClbXSl7XG5cbiAgICAgICAgaWYodGhpcy4jcGVuZGluZyA9PSB0aGlzLiNjb21wbGV0ZWQpe1xuICAgIFxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2NvbXBpbGF0ZWQnLCBsb3QpO1xuXG4gICAgICAgICAgICBpZighdGhpcy5pc1JlYWR5KXsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZWFkeScsIHRoaXMpO1xuICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEVtaXR0aW5nXG4gICAgICovXG4gICAgJGVtaXR0aW5nKCl7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwgOiBCZWdpblxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdlbGVtZW50UmVhZHknLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDcmVhdGUgRWxlbWVudCBNb2RlbCcsIGFyZ3MpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwgOiBFbmRcbiAgICAgICAgICovXG5cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXRhdGlvbnMgT2JzZXJ2ZXJzIDogQmVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPE11dGF0aW9uT2JzZXJ2ZXI+KCdtdXRhdGlvbk9ic2VydmF0aW9uUmVhZHknLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbiBPYnNlcnZlZCcsIGFyZ3MpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48TXV0YXRpb25SZWNvcmQ+KCdtdXRhdGlvbk9ic2VydmVkJywgKGFyZ3MpPT57XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTXV0YXRpb24gT2JzZXJ2ZWQnLCBhcmdzKVxuXG4gICAgICAgICAgICBpZihhcmdzLmVtaXQudGFyZ2V0KXtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2h5ZHJhdGVzPy5oeWRyYXRlc05vZGUoYXJncy5lbWl0LnRhcmdldClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oJ211dGF0aW9uc09ic2VydmVkJywgKGFyZ3MpPT57XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTXV0YXRpb25zIE9ic2VydmVkJywgYXJncylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXRhdGlvbnMgT2JzZXJ2ZXJzIDogRW5kXG4gICAgICAgICAqL1xuXG5cblxuXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlIFJlY29yZCA6IEJlZ2luXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbjxFeHByZXNzaW9uUmVjb3JkPignZXhwcmVzc2lvbkRldGVjdGVkJywgKCQpPT57XG5cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VkOiAoUHJvbWlzZTxFeHByZXNzaW9uUmVjb3JkPiB8IHVuZGVmaW5lZClbXSA9IFtdXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZigkLmVtaXQpe1xuXG4gICAgICAgICAgICAgICAgaWYoJC5lbWl0LnR5cGUgPT0gJ2VjaG8nKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZUVjaG8odGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdzbmFwY29kZScpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlU25hcENvZGUodGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdhdHRyaWJ1dGUuZWNobycpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlRWNob0F0dHJpYnV0ZXModGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdhdHRyaWJ1dGUuc25hcGNvZGUnKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZVNuYXBDb2RlQXR0cmlidXRlcyh0aGlzLCAkLmVtaXQpKVxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYoJC5lbWl0LnR5cGUgPT0gJ2RpcmVjdGl2ZScpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPEV4cHJlc3Npb25SZWNvcmQ+KChyLGopPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighKCdkaXJlY3RpdmUnIGluICQuZW1pdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoYENvcnJ1cHRlZCBkaXJlY3RpdmUgOiBub3QgZm91bmRgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgJC5lbWl0LmRpcmVjdGl2ZT8ubWFpbiAhPSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBDb3JydXB0ZWQgZGlyZWN0aXZlIDogPCAkeyAkLmVtaXQuZGlyZWN0aXZlPy5uYW1lIH0gPmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVtaXQuZGlyZWN0aXZlLm1haW4odGhpcywgJC5lbWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcigkLmVtaXQpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKHByb21pc2VkLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlZClcblxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb3Q9PntcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNjb21wbGV0ZWQrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDb21waWxhdGVkJywgbG90KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNjaGVja0NvbXBpbGF0ZWREb25lKGxvdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFwcm9taXNlZC5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jY2hlY2tDb21waWxhdGVkRG9uZShbXSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdjb21waWxhdGUnLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdFeHByZXNzaW9uIFJlY29yZGVkJywgYXJncy5lbWl0KVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlIFJlY29yZCA6IEVuZFxuICAgICAgICAgKi9cblxuXG5cblxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBFbWl0dGVyIExpc3RlbmVyIDogQmVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbWl0KXtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy4kb3B0aW9ucy5lbWl0KS5tYXAoZT0+e1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGVbMV0gPT0gJ2Z1bmN0aW9uJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKGVbMF0sIGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBlWzFdLmFwcGx5KHRoaXMsIFthcmd1bWVudHNbMF1dKSBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gRW1pdHRlciBMaXN0ZW5lciA6IEVuZFxuICAgICAgICAgKi9cblxuXG5cblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQ8XG5cbiAgICBTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICBcbiAgICBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzLFxuICAgIFxuICAgIE1ldGhvZHMgZXh0ZW5kcyBDb21wb25lbnRNZXRob2RSYXc8U3RhdGUsIFByb3BzPlxuICAgIFxuPntcblxuICAgICR0YWdOYW1lIDogc3RyaW5nID0gJyc7XG5cbiAgICAkb3B0aW9ucyA6IFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz4gPSB7fSBhcyBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+XG5cbiAgICAka2xhc3M/IDogQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yO1xuICAgIFxuXG4gICAgJGFwcGVhcmFuY2UgOiBTZW5zZW5BcHBlYXJhbmNlO1xuXG5cbiAgICAvKipcbiAgICAgKiBOZXcgQ29uc3RydWN0XG4gICAgICovXG4gICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz4pe1xuXG4gICAgICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAgIHRoaXMuJG9wdGlvbnMuYXBwZWFyYW5jZSA9IHRoaXMuJG9wdGlvbnMuYXBwZWFyYW5jZSB8fCB7fSBhcyBUQXBwZWFyYW5jZVByb3BzXG4gICAgICAgIFxuICAgICAgICB0aGlzLiRhcHBlYXJhbmNlID0gbmV3IFNlbnNlbkFwcGVhcmFuY2UodGhpcy4kb3B0aW9ucy5hcHBlYXJhbmNlKVxuICAgICAgICBcbiAgICAgICAgdGhpcy4kdGFnTmFtZSA9IGBzLSR7IHRoaXMuJG9wdGlvbnMubmFtZSB9YDtcblxuICAgICAgICBcbiAgICAgICAgdGhpcy4kYXBwZWFyYW5jZS5tb3VudCgpXG5cbiAgICAgICAgdGhpcy4kY3JlYXRlKClcbiAgICAgICAgXG5cbiAgICB9XG5cblxuXG5cbiAgICAkY3JlYXRlKCl7XG5cblxuICAgICAgICBpZighY3VzdG9tRWxlbWVudHMuZ2V0KHRoaXMuJHRhZ05hbWUpKXtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgICAgICAgdGhpcy4ka2xhc3MgPSBjbGFzcyBleHRlbmRzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPntcblxuXG4gICAgICAgICAgICAgICAgJGNvbnRyb2xsZXI6IENvbXBvbmVudENvbnRyb2xsZXI8U3RhdGUsIFByb3BzLCBNZXRob2RzPiA9IHt9IGFzIENvbXBvbmVudENvbnRyb2xsZXI8U3RhdGUsIFByb3BzLCBNZXRob2RzPlxuXG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKXtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGZyb21BdHRyaWJ1dGVzUHJvcHMocHJvcHN8fHNlbGYuJG9wdGlvbnMucHJvcHMpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbml0aWFsaXplKClcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRyb2xsZXIuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25zdHJ1Y3QnLCB0aGlzLiRjb250cm9sbGVyKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgJGluaXRpYWxpemUoKXtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHNlbGYuJG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucy5lbGVtZW50ID0gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb250cm9sbGVyID0gbmV3IENvbXBvbmVudENvbnRyb2xsZXI8U3RhdGUsIFByb3BzLCBNZXRob2RzPigkb3B0aW9ucylcblxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRyb2xsZXIuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25uZWN0ZWQnLCB0aGlzLiRjb250cm9sbGVyKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBTZXQgQXBwZWFyYW5jZVxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKHNlbGYuJGFwcGVhcmFuY2UuJFVpRClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgIFxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRyb2xsZXIuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25uZWN0ZWQnLCB0aGlzLiRjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYWRvcHRlZENhbGxiYWNrKCl7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRyb2xsZXIuJGVtaXR0ZXI/LmRpc3BhdGNoKCdhZG9wdGVkJywgdGhpcy4kY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb250cm9sbGVyLiRlbWl0dGVyPy5kaXNwYXRjaCgnZGlzY29ubmVjdGVkJywgdGhpcy4kY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHZhbHVlOnN0cmluZywgb2xkVmFsdWU6c3RyaW5nKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvcHMgY2hhbmdlZCcsIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udHJvbGxlci4kZW1pdHRlcj8uZGlzcGF0Y2goJ25Qcm9wc0NoYW5nZWQnLCB7IG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRoaXMuJHRhZ05hbWUudG9Mb3dlckNhc2UoKSwgdGhpcy4ka2xhc3MgKVxuICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG5cblxufVxuXG5cblxuXG5cbi8qKlxuICogRXhwb3J0YXRpb25zXG4gKi9cblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbnNlbiB7XG5cbiAgICBzdGF0aWMgQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuXG5cblxuXG4gICAgc3RhdGljIE1haW4oZGF0YTogYW55KXtcblxuICAgICAgICBzd2l0Y2goIHR5cGVvZiBkYXRhICl7XG5cbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG5cbiAgICAgICAgICAgICAgICBpZihkYXRhIGluc3RhbmNlb2YgU2Vuc2VuSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKCBkYXRhLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQgKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG5cbiJdfQ==