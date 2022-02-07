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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQW9CLE1BQU0sY0FBYyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBc0NyRDs7R0FFRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBUztJQUVyQzs7T0FFRztJQUNILElBQUc7UUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU0sQ0FBQyxFQUFDLEdBQUc7SUFHM0M7O09BRUc7SUFHSCxPQUFPLElBQUksQ0FBQztBQUVoQixDQUFDO0FBUUQ7O0dBRUc7QUFFSCxNQUFNLFVBQVUsMEJBQTBCLENBUXhDLFNBQXVDLEVBQUUsRUFBUztJQUVoRCxNQUFNLENBQUMsR0FBbUMsRUFBbUMsQ0FBQTtJQUU3RSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUVuQixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUVaLE9BQU8sQ0FBQyxDQUFDO0FBRWIsQ0FBQztBQU1EOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGlCQUFxQixTQUFRLFdBQVc7SUE2QmpEOztPQUVHO0lBQ0gsWUFBWSxLQUFTO1FBRWpCLEtBQUssRUFBRSxDQUFDO1FBaENaLFVBQUssR0FBVyxFQUFFLENBQUM7UUFFbkIs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QUFJLENBQUMsWUFBWSxDQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDO2lCQUVoRTtnQkFFTCxNQUFNO1NBRVQ7UUFHRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDOztBQXhCTSxnQkFBUyxHQUFHLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBpbGF0ZUVjaG8sIENvbXBpbGF0ZUVjaG9BdHRyaWJ1dGVzLCBDb21waWxhdGVTbmFwQ29kZSwgQ29tcGlsYXRlU25hcENvZGVBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vY29tcGlsYXRlXCI7XG5pbXBvcnQgeyBTZW5zZW5FbWl0dGVyIH0gZnJvbSBcIi4vZW1pdHRlclwiO1xuaW1wb3J0IHsgRmluZEV4cHJlc3Npb25zIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRNZXRob2RFdmVudCwgQ29tcG9uZW50TWV0aG9kUmF3LCBDb21wb25lbnRQcm9wcywgQ29tcG9uZW50U3RhdGUsIEV4cHJlc3Npb25SZWNvcmQsIFNjZW5lQWN0aXZpdHlQcm9wcywgU2NlbmVBY3Rpdml0eUVtaXR0ZXIsIFRDb21wb25lbnRPcHRpb25zLCBUU2NyZWVuQ29uZmlnIH0gZnJvbSBcIi4vaW5kZXgudFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50SHlkcmF0ZXMgfSBmcm9tIFwiLi9oeWRyYXRlc1wiO1xuaW1wb3J0IHsgU2Vuc2VuQXBwZWFyYW5jZSwgVEFwcGVhcmFuY2VQcm9wcyB9IGZyb20gXCIuL2FwcGVhcmFuY2VcIjtcbmltcG9ydCB7IFNlbnNlblRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcbmltcG9ydCB7IFNlbnNlbk1ldHJpY1JhbmRvbSB9IGZyb20gXCIuL21ldHJpYy1yYW5kb21cIjtcblxuXG5cblxuLyoqXG4gKiBNZXRyaWNcbiAqL1xuXG4gZXhwb3J0IHR5cGUgTWV0cmljVEFscGhhTnVtID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeiBBIEIgQyBEIEUgRiBHIEggSSBKIEsgTCBNIE4gTyBQIFEgUiBTIFQgVSBWIFcgWCBZIFogMCAxIDIgMyA0IDUgNiA3IDggOSc7XG5cbiBleHBvcnQgdHlwZSBNZXRyaWNUQWxwaGFOdW1MID0gJ2EgYiBjIGQgZSBmIGcgaCBpIGogayBsIG0gbiBvIHAgcSByIHMgdCB1IHYgdyB4IHkgeiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcbiBcbiBleHBvcnQgdHlwZSBNZXRyaWNUQWxwaGFOdW1VID0gJ0EgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWiAwIDEgMiAzIDQgNSA2IDcgOCA5JztcbiBcbiBleHBvcnQgdHlwZSBNZXRyaWNUQWxwaGFVID0gJ0EgQiBDIEQgRSBGIEcgSCBJIEogSyBMIE0gTiBPIFAgUSBSIFMgVCBVIFYgVyBYIFkgWic7XG4gXG4gZXhwb3J0IHR5cGUgTWV0cmljVEFscGhhTCA9ICdhIGIgYyBkIGUgZiBnIGggaSBqIGsgbCBtIG4gbyBwIHEgciBzIHQgdSB2IHcgeCB5IHonO1xuIFxuIGV4cG9ydCB0eXBlIE1ldHJpY1ROdW0gPSAnMCAxIDIgMyA0IDUgNiA3IDggOSc7XG4gXG4gZXhwb3J0IHR5cGUgTWV0cmljVEhleCA9ICdhIGIgYyBkIGUgZiBBIEIgQyBEIEUgRic7XG4gXG5cblxuXG5cblxuXG5leHBvcnQgdHlwZSBUT2JqZWN0RW1iZWQ8VD4gPSB7IFxuICAgIFtLIGluIGtleW9mIFRdPzogVFtLXSB8IG51bWJlclxufVxuXG4gXG4gXG5cblxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgZnVuY3Rpb24gU2V0RGF0YUxpa2VUeXBlKGRhdGE6IGFueSl7XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3RcbiAgICAgKi9cbiAgICB0cnl7IHJldHVybiBKU09OLnBhcnNlKGRhdGEpOyB9IGNhdGNoKGUpeyB9XG4gICAgXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuXG4gICAgICovXG4gICAgXG5cbiAgICByZXR1cm4gZGF0YTtcbiAgICBcbn1cblxuXG5cblxuXG5cblxuLyoqXG4gKiBDcmVhdGUgQ29tcG9uZW50IE1ldGhvZCBFdmVudFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDb21wb25lbnRNZXRob2RFdmVudDxcbiAgICBcbiAgICBTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgICAgICBcbiAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTSBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTLCBQPlxuICAgIFxuPihjb21wb25lbnQ6IENvbXBvbmVudENvbnRyb2xsZXI8UywgUCwgTT4sIGV2OiBFdmVudCl7XG5cbiAgICBjb25zdCBfIDogQ29tcG9uZW50TWV0aG9kRXZlbnQ8UywgUCwgTT4gPSB7fSBhcyBDb21wb25lbnRNZXRob2RFdmVudDxTLCBQLCBNPlxuICAgIFxuICAgIF8uc2VsZiA9IGNvbXBvbmVudDtcblxuICAgIF8uZXZlbnQgPSBldlxuICAgIFxuICAgIHJldHVybiBfO1xuXG59XG5cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gSFRNTCBFbGVtZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5zZW5IVE1MRWxlbWVudDxQPiBleHRlbmRzIEhUTUxFbGVtZW50e1xuXG4gICAgJEVVaUQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAkaW5pdGlhbGl6ZUVVaUQoKXtcblxuICAgICAgICB0aGlzLiRFVWlEID0gdGhpcy4kRVVpRCB8fCBgJHsgU2Vuc2VuTWV0cmljUmFuZG9tLkNyZWF0ZUFwbHBoYSgxNikuam9pbignJykgfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJEVVaUQ7XG5cbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7cmV0dXJuIFtdOyB9XG5cblxuICAgIC8qKlxuICAgICAqIER5bmFtaWMgdmFyXG4gICAgICovXG4gICAgcHJvcHMgOiBQID0ge30gYXMgUDtcbiAgICBcbiAgICBcbiAgICAvKipcbiAgICAgKiBOZXcgQ29uc3RydWN0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMgOiBQKXtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIEVsZW1lbnQgaXMgY29ubmVjdGVkXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKXt9XG5cblxuICAgIC8qKlxuICAgICAqIFdoZW4gRWxlbWVudCBpcyBBZG9wdGVkIGJ5IG90aGVyIERPTVxuICAgICAqL1xuICAgIGFkb3B0ZWRDYWxsYmFjaygpe31cblxuXG4gICAgLyoqXG4gICAgICogV2hlbmUgRWxlbWVudCBpcyBEaXNjb25uZWN0ZWQgdG8gdGhlIGN1cnJlbnQgRE9NXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKXtcblxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5mb3JFYWNoKGNsPT57XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbc2Vuc2VuLWFwcGVhcmFuY2U9XCIkeyBjbCB9XCJdYClcblxuICAgICAgICAgICAgaWYocmVmcyl7XG5cbiAgICAgICAgICAgICAgICByZWZzLmZvckVhY2gocmVmPT4gcmVmLnBhcmVudEVsZW1lbnQ/LnJlbW92ZUNoaWxkKHJlZikgKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgIH1cbiAgICBcblxuXG4gICAgLyoqXG4gICAgICogV2hlbmUgRWxlbWVudCBjaGFuZ2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9sZFZhbHVlOiBzdHJpbmcpe1xuXG4gICAgfVxuICAgIFxuXG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXRpZXNcbiAgICAgKi9cblxuICAgICRpbml0aWFsaXplUHJvcHMoKXtcblxuICAgICAgICBpZih0aGlzLnByb3BzKXtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wcm9wcykubWFwKHByb3A9PntcblxuICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcHJvcFsxXSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgcHJvcFsxXSA9PSAnbnVtYmVyJyB8fCB0eXBlb2YgcHJvcFsxXSA9PSAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICApe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHByb3BbMF0sIGAkeyBwcm9wWzFdIH1gKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0eXBlb2YgcHJvcFsxXSA9PSAnb2JqZWN0Jyl7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUocHJvcFswXSwgSlNPTi5zdHJpbmdpZnkocHJvcFsxXSkpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICAkZnJvbUF0dHJpYnV0ZXNQcm9wcyhwcm9wcz86IFApe1xuXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmKHRoaXMucHJvcHMpe1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnByb3BzKS5tYXAocHJvcD0+e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoYCR7IHByb3BbMF0gfWApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHByb3BbMF0gYXMga2V5b2YgUFxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc1sgbmFtZSBdID0gZ2V0IGFzIHR5cGVvZiBwcm9wWzFdXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xuXG4gICAgfVxuXG5cbiAgICAkdG9BdHRyaWJ1dGVzUHJvcHMocHJvcHM/OiBQKXtcblxuICAgICAgICBpZihwcm9wcyl7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5tYXAocHJvcD0+e1xuXG4gICAgICAgICAgICAgICAgaWYoIShwcm9wWzBdIGluIHRoaXMucHJvcHMpKXsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcHJvcFswXSBhcyBrZXlvZiBQXG5cbiAgICAgICAgICAgICAgICBpZihcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHByb3BbMV0gPT0gJ3N0cmluZycgfHwgdHlwZW9mIHByb3BbMV0gPT0gJ251bWJlcicgfHwgdHlwZW9mIHByb3BbMV0gPT0gJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShgJHsgbmFtZSB9YCwgYCR7IHByb3BbMV0gfWApXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHR5cGVvZiBwcm9wWzFdID09ICdvYmplY3QnKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShgJHsgbmFtZSB9YCwgSlNPTi5zdHJpbmdpZnkocHJvcFsxXSkpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wc1sgbmFtZSBdID0gcHJvcFsxXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgXG5cblxuICAgIC8qKlxuICAgICAqIEFic3RyYWN0c1xuICAgICAqL1xuICAgIHJlbmRlcihwcm9wcz86IFApe3JldHVybiB0aGlzO31cblxuICAgIFxuICAgIHNob3coKXtyZXR1cm4gdGhpczt9XG5cbiAgICBcbiAgICBoaWRlKCl7cmV0dXJuIHRoaXM7fVxuICAgIFxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG4vKipcbiAqIFNlbnNlbiBDb21wb25lbnQgQ29udHJvbGxlclxuICovXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDb250cm9sbGVyPFxuXG4gICAgU3RhdGUgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZSwgXG4gICAgXG4gICAgUHJvcHMgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyxcbiAgICBcbiAgICBNZXRob2RzIGV4dGVuZHMgQ29tcG9uZW50TWV0aG9kUmF3PFN0YXRlLCBQcm9wcz5cblxuPntcblxuXG4gICAgJHRhZ05hbWUgOiBzdHJpbmcgPSAnJztcblxuICAgIHN0YXRlIDogeyBbUyBpbiBrZXlvZiBTdGF0ZV0gOiBTdGF0ZVtTXSB9O1xuXG4gICAgcHJvcHMgOiB7IFtQIGluIGtleW9mIFByb3BzXSA6IFByb3BzW1BdIH07XG5cbiAgICBtZXRob2RzIDogeyBbTSBpbiBrZXlvZiBNZXRob2RzXSA6IE1ldGhvZHNbTV0gfSA9IHt9IGFzIHsgW00gaW4ga2V5b2YgTWV0aG9kc10gOiBNZXRob2RzW01dIH07XG5cbiAgICAkb3B0aW9ucyA6IFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz4gPSB7fSBhcyBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+XG4gICAgXG4gICAgJGVtaXR0ZXI/IDogU2Vuc2VuRW1pdHRlcjtcblxuICAgIC8vICRrbGFzcz8gOiBDdXN0b21FbGVtZW50Q29uc3RydWN0b3I7XG4gICAgXG4gICAgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAjaHlkcmF0ZXM/IDogQ29tcG9uZW50SHlkcmF0ZXM8U3RhdGUsIFByb3BzLCBNZXRob2RzPjtcbiAgICBcbiAgICAjbXV0YXRpb25PYnNlcnZlcj8gOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gICAgI211dGF0aW9uT2JzZXJ2ZWQ/IDogTXV0YXRpb25SZWNvcmRbXTtcblxuXG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG5cblxuICAgICNwZW5kaW5nOiBudW1iZXIgPSAwO1xuXG4gICAgI2NvbXBsZXRlZDogbnVtYmVyID0gMDtcbiAgICBcblxuICAgIC8qKlxuICAgICAqIE5ldyBDb25zdHJ1Y3RcbiAgICAgKi9cbiAgICAgY29uc3RydWN0b3Iob3B0aW9uczogVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPil7XG5cbiAgICAgICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuJG9wdGlvbnMuc3RhdGV8fHt9KSBhcyBTdGF0ZVxuXG4gICAgICAgIHRoaXMucHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLiRvcHRpb25zLnByb3BzfHx7fSkgYXMgUHJvcHNcblxuICAgICAgICB0aGlzLm1ldGhvZHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLiRvcHRpb25zLm1ldGhvZHN8fHt9KSBhcyBNZXRob2RzXG5cbiAgICAgICAgdGhpcy4kdGFnTmFtZSA9IGBzbi0keyB0aGlzLiRvcHRpb25zLm5hbWUgfWBcblxuICAgICAgICB0aGlzLiRlbWl0dGVyID0gbmV3IFNlbnNlbkVtaXR0ZXIoKTtcblxuICAgICAgICB0aGlzLiNoeWRyYXRlcyA9IG5ldyBDb21wb25lbnRIeWRyYXRlczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+KHRoaXMpXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0NvbnRyb2xsZXIgUHJvcHMnLCB0aGlzLnByb3BzIClcblxuXG4gICAgICAgIHRoaXMuJG1ha2UoKTtcblxuICAgICAgICBcbiAgICB9XG5cblxuXG5cbiAgICAkbWFrZSgpe1xuXG4gICAgICAgIHRoaXNcbiAgICAgICAgIFxuICAgICAgICAgICAgLiNjYW1vdWZsYWdlKClcbiAgICAgICAgXG4gICAgICAgICAgICAuJGVtaXR0aW5nKClcblxuICAgICAgICAgICAgLiRtYWtlVGVtcGxhdGUoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC50aGVuKHRwbD0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRwbCl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdHBsO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudC5pbm5lckhUTUwgPSB0cGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLiRvYnNlcnZlcnMoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuJGNvbXBpbGF0ZSgpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICA7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG5cblxuXG4gICAgLyoqXG4gICAgICogc2V0IFRlbXBsYXRlXG4gICAgICovXG4gICAgJG1ha2VUZW1wbGF0ZSgpe1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+KChyZXNvbHZlLCByZWplY3QpPT57XG4gXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSAhPSAnc3RyaW5nJyl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJ2lubmVySFRNTCcgaW4gdGhpcy4kb3B0aW9ucy5lbGVtZW50KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLiRvcHRpb25zLmVsZW1lbnQuaW5uZXJIVE1MKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQ2hlY2sgXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLiRvcHRpb25zLnRlbXBsYXRlLm1hdGNoKC88XFwvP1tePl0rPi9naSk7XG5cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIFRlbXBsYXRlIGlzIFN0cmluZyBIVE1MIGNvZGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZihjaGVjayl7IHJlc29sdmUodGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSk7IHJldHVybjsgfVxuXG5cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEVsc2UsIGl0J3MgZmlsZSBwYXRoXG4gICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gYCR7IHVybC5vcmlnaW4gfSR7ICh1cmwucGF0aG5hbWUgPT0gJy8nKSA/ICcnIDogdXJsLnBhdGhuYW1lIH0vJHsgdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSB9YFxuXG5cbiAgICAgICAgICAgICAgICBmZXRjaChwYXRoKS50aGVuKGQ9PnsgaWYoZC5zdGF0dXMgPT0gNDA0KXsgcmV0dXJuIHVuZGVmaW5lZCB9IHJldHVybiBkLnRleHQoKSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGE9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgcmVzb2x2ZSh1bmRlZmluZWQpOyB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXI9PnsgcmVzb2x2ZSh1bmRlZmluZWQpOyB9KVxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2Ftb3VmbGFnZVxuICAgICAqL1xuICAgICNjYW1vdWZsYWdlKCl7XG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPHR5cGVvZiB0aGlzPignc3RhcnQnLCAoKT0+e1xuXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPHR5cGVvZiB0aGlzPigncmVhZHknLCAoKT0+e1xuXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cblxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZVxuICAgICAqL1xuXG4gICAgJGluaXRpYWxpemUoKXtcblxuICAgICAgICB0aGlzLiRpbml0aWFsaXplRWxlbWVudCgpO1xuXG4gICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3N0YXJ0JywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAkaW5pdGlhbGl6ZUVsZW1lbnQocHJvcHM/OiBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+KXtcblxuICAgICAgICBjb25zdCAkcHJvcHMgPSBwcm9wcyB8fCB0aGlzLiRvcHRpb25zIHx8IG51bGw7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgICBpZigkcHJvcHMpe1xuXG4gICAgICAgICAgICB0aGlzLiR0YWdOYW1lID0gYHNuLSR7ICRwcm9wcy5uYW1lIH1gXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaW5kIGN1cnJlbnQgRWxlbWVudCBzZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID09ICdzdHJpbmcnKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAkeyB0aGlzLiRvcHRpb25zLmVsZW1lbnQgfWApIGFzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWZpbmUgY3VzdG9tIEVsZW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2lzJywgYCR7IHRoaXMuJHRhZ05hbWUgfWApXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoISh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHsgdGhpcy4kdGFnTmFtZSB9YCkgYXMgU2Vuc2VuSFRNTEVsZW1lbnQ8UHJvcHM+XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnZWxlbWVudFJlYWR5JywgdGhpcyk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIERPTSBPYnNlcnZlclxuICAgICAqL1xuICAgICRvYnNlcnZlcnMoKXtcblxuXG4gICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy4jbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKT0+e1xuXG4gICAgICAgICAgICAgICAgaWYocmVjb3Jkcyl7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbXV0YXRpb25PYnNlcnZlZCA9IHJlY29yZHNcblxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2gocmVjb3JkPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlY29yZC50eXBlID09ICdhdHRyaWJ1dGVzJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZWNvcmQuYXR0cmlidXRlTmFtZSAmJiB0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVjb3JkLmF0dHJpYnV0ZU5hbWUgaW4gdGhpcy5wcm9wcyl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJlY29yZC5hdHRyaWJ1dGVOYW1lIGFzIGtleW9mIHR5cGVvZiB0aGlzLnByb3BzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy4kb3B0aW9ucy5lbGVtZW50LmdldEF0dHJpYnV0ZShyZWNvcmQuYXR0cmlidXRlTmFtZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1sga2V5IF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnByb3BzWyBrZXkgXSA9IFNldERhdGFMaWtlVHlwZSh2YWx1ZSkgYXMgUHJvcHNbIHR5cGVvZiBrZXkgXTsgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdwcm9wc0NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHJlY29yZC5vbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ211dGF0aW9uT2JzZXJ2ZWQnLCByZWNvcmQpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbnNPYnNlcnZlZCcsIHJlY29yZHMpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgIFxuICAgICAgICAgICAgdGhpcy4jbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuJG9wdGlvbnMuZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogT2JqZWN0LmtleXModGhpcy5wcm9wcylcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25PYnNlcnZhdGlvblJlYWR5JywgdGhpcy4jbXV0YXRpb25PYnNlcnZlcik7XG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cblxuXG5cblxuXG4gICAgaHlkcmF0ZXNTdGF0ZShzbG90OiBrZXlvZiBTdGF0ZSl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLiNoeWRyYXRlcz8uJHN0YXRlLnJldHJpZXZlKCBzbG90IClcblxuICAgICAgICBcbiAgICAgICAgaWYoc3RvcmU/Lmxlbmd0aCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0b3JlLm1hcChyZWNvcmQ9PntcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiNoeWRyYXRlcz8uaHlkcmF0ZXNSZWNvcmQocmVjb3JkKVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKT0+e1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdzdGF0ZUh5ZHJhdGVkJywge3JlY29yZCwgZGF0YX0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIENvbXBpbGF0ZSB0cmFuc2FjdGlvbnNcbiAgICAgKi9cbiAgICAkY29tcGlsYXRlKCl7XG5cbiAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICBjb25zdCBmb3VuZCA9IEZpbmRFeHByZXNzaW9ucyh0aGlzLiRvcHRpb25zLmVsZW1lbnQsIChyZWNvcmQpPT57XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4jcGVuZGluZysrO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBTdGF0ZSB0byBhdXRvLWNvbXBpbGF0ZVxuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuc3RhdGUgPT0gJ29iamVjdCcpe1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNNYXRjaGVzID0gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGAoJHsgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuam9pbignfCcpIH0pYCwgJ2cnKSksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLih2YWx1ZXx8JycpLm1hdGNoQWxsKG5ldyBSZWdFeHAoYHRoaXNcXFxcLnN0YXRlXFxcXC4oJHsgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuam9pbignKXx0aGlzXFxcXC5zdGF0ZVxcXFwuKCcpIH0pYCwgJ2cnKSksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLih2YWx1ZXx8JycpLm1hdGNoQWxsKG5ldyBSZWdFeHAoYHRoaXNcXFxcLnByb3BzXFxcXC4keyBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5qb2luKCd8dGhpc1xcXFwucHJvcHNcXFxcLicpIH1gLCAnZycpKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoc01hdGNoZXMubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc01hdGNoZXMubWFwKG1hdGNoPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlY29yZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1cmdlID0gbWF0Y2guZmlsdGVyKHY9PnYhPXVuZGVmaW5lZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBwdXJnZVsxXSBhcyBrZXlvZiBTdGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmdlLmlucHV0ID0gbWF0Y2guaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZENsb25lLm1hdGNoID0gcHVyZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNoeWRyYXRlcz8uJHN0YXRlLnB1c2goc2xvdCwgcmVjb3JkQ2xvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdleHByZXNzaW9uRGV0ZWN0ZWQnLCByZWNvcmQpO1xuXG4gICAgICAgICAgICB9KVxuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBObyBFeHByZXNzaW9uIGRldGVjdGVkXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgaWYoIWZvdW5kLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjaGVja0NvbXBpbGF0ZWREb25lKFtdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb21waWxhdGlvblJlYWR5JywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuXG5cbiAgICAjY2hlY2tDb21waWxhdGVkRG9uZShsb3Q6IChFeHByZXNzaW9uUmVjb3JkIHwgdW5kZWZpbmVkKVtdKXtcblxuICAgICAgICBpZih0aGlzLiNwZW5kaW5nID09IHRoaXMuI2NvbXBsZXRlZCl7XG4gICAgXG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29tcGlsYXRlZCcsIGxvdCk7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmlzUmVhZHkpeyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3JlYWR5JywgdGhpcyk7XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICogRW1pdHRpbmdcbiAgICAgKi9cbiAgICAkZW1pdHRpbmcoKXtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbCA6IEJlZ2luXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3Rlbjx0eXBlb2YgdGhpcz4oJ2VsZW1lbnRSZWFkeScsIChhcmdzKT0+e1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0NyZWF0ZSBFbGVtZW50IE1vZGVsJywgYXJncylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbCA6IEVuZFxuICAgICAgICAgKi9cblxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11dGF0aW9ucyBPYnNlcnZlcnMgOiBCZWdpblxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48TXV0YXRpb25PYnNlcnZlcj4oJ211dGF0aW9uT2JzZXJ2YXRpb25SZWFkeScsIChhcmdzKT0+e1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ011dGF0aW9uIE9ic2VydmVkJywgYXJncylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbjxNdXRhdGlvblJlY29yZD4oJ211dGF0aW9uT2JzZXJ2ZWQnLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbiBPYnNlcnZlZCcsIGFyZ3MpXG5cbiAgICAgICAgICAgIGlmKGFyZ3MuZW1pdC50YXJnZXQpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaHlkcmF0ZXM/Lmh5ZHJhdGVzTm9kZShhcmdzLmVtaXQudGFyZ2V0KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignbXV0YXRpb25zT2JzZXJ2ZWQnLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbnMgT2JzZXJ2ZWQnLCBhcmdzKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11dGF0aW9ucyBPYnNlcnZlcnMgOiBFbmRcbiAgICAgICAgICovXG5cblxuXG5cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxhdGUgUmVjb3JkIDogQmVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPEV4cHJlc3Npb25SZWNvcmQ+KCdleHByZXNzaW9uRGV0ZWN0ZWQnLCAoJCk9PntcblxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZWQ6IChQcm9taXNlPEV4cHJlc3Npb25SZWNvcmQ+IHwgdW5kZWZpbmVkKVtdID0gW11cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmKCQuZW1pdCl7XG5cbiAgICAgICAgICAgICAgICBpZigkLmVtaXQudHlwZSA9PSAnZWNobycpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlRWNobyh0aGlzLCAkLmVtaXQpKVxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYoJC5lbWl0LnR5cGUgPT0gJ3NuYXBjb2RlJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChDb21waWxhdGVTbmFwQ29kZSh0aGlzLCAkLmVtaXQpKVxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYoJC5lbWl0LnR5cGUgPT0gJ2F0dHJpYnV0ZS5lY2hvJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChDb21waWxhdGVFY2hvQXR0cmlidXRlcyh0aGlzLCAkLmVtaXQpKVxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYoJC5lbWl0LnR5cGUgPT0gJ2F0dHJpYnV0ZS5zbmFwY29kZScpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlU25hcENvZGVBdHRyaWJ1dGVzKHRoaXMsICQuZW1pdCkpXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZigkLmVtaXQudHlwZSA9PSAnZGlyZWN0aXZlJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2U8RXhwcmVzc2lvblJlY29yZD4oKHIsaik9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCEoJ2RpcmVjdGl2ZScgaW4gJC5lbWl0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChgQ29ycnVwdGVkIGRpcmVjdGl2ZSA6IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAkLmVtaXQuZGlyZWN0aXZlPy5tYWluICE9ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoYENvcnJ1cHRlZCBkaXJlY3RpdmUgOiA8ICR7ICQuZW1pdC5kaXJlY3RpdmU/Lm5hbWUgfSA+YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZW1pdC5kaXJlY3RpdmUubWFpbih0aGlzLCAkLmVtaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByKCQuZW1pdClcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgaWYocHJvbWlzZWQubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VkKVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxvdD0+e1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI2NvbXBsZXRlZCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0NvbXBpbGF0ZWQnLCBsb3QpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI2NoZWNrQ29tcGlsYXRlZERvbmUobG90KTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXByb21pc2VkLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNjaGVja0NvbXBpbGF0ZWREb25lKFtdKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3Rlbjx0eXBlb2YgdGhpcz4oJ2NvbXBpbGF0ZScsIChhcmdzKT0+e1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0V4cHJlc3Npb24gUmVjb3JkZWQnLCBhcmdzLmVtaXQpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxhdGUgUmVjb3JkIDogRW5kXG4gICAgICAgICAqL1xuXG5cblxuXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VzdG9tIEVtaXR0ZXIgTGlzdGVuZXIgOiBCZWdpblxuICAgICAgICAgKi9cblxuICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVtaXQpe1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLiRvcHRpb25zLmVtaXQpLm1hcChlPT57XG5cbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgZVsxXSA9PSAnZnVuY3Rpb24nKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oZVswXSwgZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbMV0uYXBwbHkodGhpcywgW2FyZ3VtZW50c1swXV0pIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBFbWl0dGVyIExpc3RlbmVyIDogRW5kXG4gICAgICAgICAqL1xuXG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgXG59XG5cblxuXG5cblxuXG5cblxuXG4vKipcbiAqIFNlbnNlbiBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxcblxuICAgIFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgIFxuICAgIFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTWV0aG9kcyBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTdGF0ZSwgUHJvcHM+XG4gICAgXG4+e1xuXG4gICAgJHRhZ05hbWUgOiBzdHJpbmcgPSAnJztcblxuICAgICRvcHRpb25zIDogVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPiA9IHt9IGFzIFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz5cblxuICAgICRrbGFzcz8gOiBDdXN0b21FbGVtZW50Q29uc3RydWN0b3I7XG4gICAgXG5cbiAgICAkYXBwZWFyYW5jZSA6IFNlbnNlbkFwcGVhcmFuY2U7XG5cblxuICAgIC8qKlxuICAgICAqIE5ldyBDb25zdHJ1Y3RcbiAgICAgKi9cbiAgICAgY29uc3RydWN0b3Iob3B0aW9uczogVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPil7XG5cbiAgICAgICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy4kb3B0aW9ucy5hcHBlYXJhbmNlID0gdGhpcy4kb3B0aW9ucy5hcHBlYXJhbmNlIHx8IHt9IGFzIFRBcHBlYXJhbmNlUHJvcHNcbiAgICAgICAgXG4gICAgICAgIHRoaXMuJGFwcGVhcmFuY2UgPSBuZXcgU2Vuc2VuQXBwZWFyYW5jZSh0aGlzLiRvcHRpb25zLmFwcGVhcmFuY2UpXG4gICAgICAgIFxuICAgICAgICB0aGlzLiR0YWdOYW1lID0gYHMtJHsgdGhpcy4kb3B0aW9ucy5uYW1lIH1gO1xuXG4gICAgICAgIFxuICAgICAgICB0aGlzLiRhcHBlYXJhbmNlLm1vdW50KClcblxuICAgICAgICB0aGlzLiRjcmVhdGUoKVxuICAgICAgICBcblxuICAgIH1cblxuXG5cblxuICAgICRjcmVhdGUoKXtcblxuXG4gICAgICAgIGlmKCFjdXN0b21FbGVtZW50cy5nZXQodGhpcy4kdGFnTmFtZSkpe1xuXG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuXG4gICAgICAgICAgICB0aGlzLiRrbGFzcyA9IGNsYXNzIGV4dGVuZHMgU2Vuc2VuSFRNTEVsZW1lbnQ8UHJvcHM+e1xuXG5cbiAgICAgICAgICAgICAgICAkY29udHJvbGxlcjogQ29tcG9uZW50Q29udHJvbGxlcjxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+ID0ge30gYXMgQ29tcG9uZW50Q29udHJvbGxlcjxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+XG5cbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZnJvbUF0dHJpYnV0ZXNQcm9wcyhwcm9wc3x8c2VsZi4kb3B0aW9ucy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluaXRpYWxpemUoKVxuXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udHJvbGxlci4kZW1pdHRlcj8uZGlzcGF0Y2goJ2NvbnN0cnVjdCcsIHRoaXMuJGNvbnRyb2xsZXIpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAkaW5pdGlhbGl6ZSgpe1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgc2VsZi4kb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb25zLmVsZW1lbnQgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRyb2xsZXIgPSBuZXcgQ29tcG9uZW50Q29udHJvbGxlcjxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+KCRvcHRpb25zKVxuXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udHJvbGxlci4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Nvbm5lY3RlZCcsIHRoaXMuJGNvbnRyb2xsZXIpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIFNldCBBcHBlYXJhbmNlXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoc2VsZi4kYXBwZWFyYW5jZS4kVWlEKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udHJvbGxlci4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Nvbm5lY3RlZCcsIHRoaXMuJGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgICAgICBhZG9wdGVkQ2FsbGJhY2soKXtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY29udHJvbGxlci4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Fkb3B0ZWQnLCB0aGlzLiRjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKXtcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGNvbnRyb2xsZXIuJGVtaXR0ZXI/LmRpc3BhdGNoKCdkaXNjb25uZWN0ZWQnLCB0aGlzLiRjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgdmFsdWU6c3RyaW5nLCBvbGRWYWx1ZTpzdHJpbmcpe1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9wcyBjaGFuZ2VkJywgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjb250cm9sbGVyLiRlbWl0dGVyPy5kaXNwYXRjaCgnblByb3BzQ2hhbmdlZCcsIHsgbmFtZSwgdmFsdWUsIG9sZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGhpcy4kdGFnTmFtZS50b0xvd2VyQ2FzZSgpLCB0aGlzLiRrbGFzcyApXG4gICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcblxuXG59XG5cblxuXG5cblxuLyoqXG4gKiBFeHBvcnRhdGlvbnNcbiAqL1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vuc2VuIHtcblxuICAgIHN0YXRpYyBDb21wb25lbnQgPSBDb21wb25lbnQ7XG5cblxuXG5cbiAgICBzdGF0aWMgTWFpbihkYXRhOiBhbnkpe1xuXG4gICAgICAgIHN3aXRjaCggdHlwZW9mIGRhdGEgKXtcblxuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcblxuICAgICAgICAgICAgICAgIGlmKGRhdGEgaW5zdGFuY2VvZiBTZW5zZW5IVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoIGRhdGEsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cblxuIl19