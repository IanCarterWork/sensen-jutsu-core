var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SensenElement_instances, _SensenElement_connectedProtocol;
import { SensenAppearance } from "./appearance.js.js.js";
import { CommonDirectives } from "./directive.js.js.js";
import { SensenEmitter } from "./emitter.js.js.js";
import { FindDirectives, FindGlobalExpressions, FindStateData } from "./expression.js.js.js";
import { SensenDataRender, SensenNodeRender, SensenRender, SyntaxDelimiter } from "./render.js.js.js";
import { SensenRouter } from "./router.js.js.js";
import { SensenState } from "./state.js.js.js";
import { CloneObject, decodeHTMLEntities, FindParental, isEmptyObject } from "./utilities.js.js.js";
window.$SensenComponents = window.$SensenComponents || {};
window.$SensenRouter = window.$SensenRouter || {};
/**
 * Sensen Component
 */
export function RawComponent($, config) {
    const $initial = { ...($ || {}) };
    $initial.state = { ...$initial.state };
    return class extends SensenElement {
        constructor($state = {}) {
            super($state);
            this.$observations = {};
            this.$state = {};
            this.$emitter = new SensenEmitter();
            this.$tnamespace = config?.namespace?.prefix || "sense";
            this.$anamespace = config?.namespace?.attribute || "state";
            this.$controller = CloneObject($initial, true);
            this.$methods = this.$controller.methods || {};
            this.$state = Object.assign({}, { ...(this.$controller.state || {}), ...($state || {}) });
            this.$stateMirrors = this.$stateMirrors || {};
            this.$stateHydrates = new SensenState(this.$state);
            this.$state = this.$stateHydrates.state;
            this.$appearance = new SensenAppearance(this.$controller.appearance);
            this.$appearance.mount().bind(this);
            this.$hydrators();
            this.$construct();
        }
        static $using($state) {
            return new this($state);
        }
        $construct() {
            this.$emitter.listen('begin', ({ emit, type }) => {
                // emit.style.display = 'none';
            });
            this.$emitter.listen('done', ({ emit, type }) => {
                // emit.style.removeProperty('display');
            });
            if (this.$controller?.construct) {
                this.$controller?.construct({
                    element: this,
                    router: this.$application?.$router,
                    children: this.children,
                    state: this.$state || {},
                });
            }
            return this;
        }
        $hydrators() {
            this.$stateHydrates = new SensenState(this.$state);
            this.$stateHydrates.$emitter
                .listen('hydrates', ({ emit }) => {
                if (this.$stateMirrors && this.$stateMirrors[emit.slot]) {
                    if (this.$controller?.state) {
                        this.$controller.state[emit.slot] = this.$state[emit.slot];
                        const records = this.$stateMirrors[emit.slot];
                        if (records.length) {
                            this.$emitter.dispatch('hydrates', records);
                            records.map(record => {
                                this.$compilateRecord(record);
                                this.$emitter.dispatch('hydrate', record);
                            });
                        }
                    }
                }
            });
            return this;
        }
        $willMount(args) {
            this.$emitter.dispatch('connected', this);
            return this.$controller?.mount ? this.$controller?.mount({
                element: this,
                router: this.$application?.$router,
                children: this.children,
                state: this.$state || {},
            }) : undefined;
        }
        $willUnMount(args) {
            this.$emitter.dispatch('disconnected', this);
            return this.$controller?.unmount ? this.$controller?.unmount({
                element: this,
                router: this.$application?.$router,
                children: this.children,
                state: this.$state || {},
            }) : undefined;
        }
        $willAdopted(args) {
            this.$emitter.dispatch('adopted', this);
            return this.$controller?.adopted ? this.$controller?.adopted({
                element: this,
                router: this.$application?.$router,
                // router: window.$SensenRouter,
                children: this.children,
                state: this.$state || {},
            }) : undefined;
        }
        $render(state) {
            const _state = (state || this.$state);
            const render = this.$controller?.render({
                element: this,
                router: this.$application?.$router,
                // router: window.$SensenRouter,
                children: this.children,
                state: _state || {},
            });
            this.$setStates(_state);
            if (typeof render == 'string') {
                this.innerHTML = `${render}`;
            }
            else if (!render) {
                if (this.innerHTML) {
                    this.innerHTML = `${this.innerHTML}`;
                }
            }
            else {
                if (render instanceof HTMLElement) {
                    this.appendChild(render);
                }
            }
            this.$emitter.dispatch('done', this);
            return render;
        }
    };
}
export function Component($) {
    const config = {
        namespace: {
            prefix: 'sense',
            attribute: 'state'
        }
    };
    const index = `sense-${$.name}`;
    window.$SensenComponents[index] = RawComponent($, config);
    SensenElement.$use('sense', $.name, window.$SensenComponents[index]);
    return window.$SensenComponents[index];
}
/**
 * Sensen Element
 */
export class SensenElement extends HTMLElement {
    constructor($state) {
        super();
        this.$state = $state;
        _SensenElement_instances.add(this);
        this.$showing = false;
        this.$inTransition = false;
        // new( $props : Props ) : this
        this.$observations = {};
        // $appearance ?: SensenAppearance
        this.$methods = {};
        // this.$appearance = new SensenAppearance();
        this.$emitter = new SensenEmitter();
        this.$tnamespace = `${this.$tnamespace || 'sense'}-`;
        this.$anamespace = `${this.$anamespace || 'state'}:`;
        this.$stateMirrors = {};
    }
    $willMount(args) { }
    $willUnMount(args) { }
    $willAdopted(args) { }
    $mountManipulation(method, callback) {
        this.mountResponseResolved = undefined;
        this.mountResponseRejected = undefined;
        if (method in this && typeof this[method] == 'function') {
            this.mountResponseResolved = (this[method] || (() => { })).apply(this, [null]);
            if (this.mountResponseResolved instanceof Promise) {
                this.mountResponseResolved
                    .then(r => this.mountResponseResolved = r)
                    .catch(er => {
                    this.mountResponseRejected = er;
                    console.error(`Sensen Component mount failed\n`, er);
                })
                    .finally(() => callback());
            }
            else {
                callback();
            }
        }
        else {
            callback();
        }
        return this;
    }
    connectedCallback() {
        // console.warn('Props', `${ JSON.stringify(this.$props) }`)
        // console.warn('Props->', `${ JSON.stringify(this.getAttribute('prop:world')) }`)
        // this.$router = this.$application?.$router || undefined;
        this.$mountManipulation('$willMount', () => { __classPrivateFieldGet(this, _SensenElement_instances, "m", _SensenElement_connectedProtocol).call(this); });
    }
    adoptedCallback() {
        this.$mountManipulation('$willAdopted', () => { });
    }
    disconnectedCallback() {
        this.$mountManipulation('$willUnMount', () => { });
        // this.$showing = false
    }
    $setSafeProps(value) {
        let $value = value;
        switch (typeof value) {
            case 'object':
                if (Array.isArray(value)) {
                    $value = `[ ${value.map(i => `"${i}"`).join(',')} ]`;
                }
                $value = JSON.stringify(value);
                break;
            default:
                $value = `${value}`;
                break;
        }
        // if(typeof $value == 'string'){
        //     if($value.match(SyntaxSnapCode) || $value.match(SyntaxEcho)){
        //         try{
        //             SensenRawRender(
        //                 $value, 
        //                 this.$parentComponent instanceof SensenElement ? this.$parentComponent.$state : this.$state, 
        //                 this.$parentComponent  instanceof SensenElement ? this.$parentComponent : this
        //             ).then(compilate=>{
        //                 console.log('Compilated', compilate )
        //             })
        //         }catch(e){
        //         }
        //     }
        // }
        // console.log('Change Attribute', value, );
        return $value;
    }
    $unsetSafeProps(value) {
        let output = value;
        try {
            const obj = JSON.parse(value);
            if (typeof obj == 'object') {
                output = obj;
            }
        }
        catch (e) { }
        return output;
    }
    $destroy(moment = true) {
        return new Promise((resolved) => {
            const callback = () => {
                // this.style.display = 'none';
                // this.innerHTML = ''
                resolved(this);
                this.$emitter.dispatch('destroy', this);
                this.$inTransition = false;
                // this.$showing = false
            };
            if (!this.$inTransition && this.$controller?.transition && 'ondestroy' in this.$controller.transition) {
                this.$inTransition = true;
                if (this.$controller.transition.ondestroy &&
                    ('exit' in this.$controller.transition.ondestroy || 'exitReverse' in this.$controller.transition.ondestroy)) {
                    if (moment === true && typeof this.$controller.transition.ondestroy.exit == 'function') {
                        const $display = getComputedStyle(this).display || 'inline';
                        if ($display.match(/inline/)) {
                            this.style.display = 'block';
                        }
                        this.$controller.transition.ondestroy.exit(this)
                            .then(done => callback());
                    }
                    else if (moment === false && typeof this.$controller.transition.ondestroy.exitReverse == 'function') {
                        const $display = getComputedStyle(this).display || 'inline';
                        if ($display.match(/inline/)) {
                            this.style.display = 'block';
                        }
                        this.$controller.transition.ondestroy.exitReverse(this)
                            .then(done => callback());
                    }
                    else {
                        callback();
                    }
                }
                else {
                    callback();
                }
            }
            else {
                this.$inTransition = true;
                callback();
            }
        });
    }
    $build(moment = true, host) {
        return new Promise((resolved) => {
            const hosted = (host instanceof HTMLElement) ? host.appendChild(this) : false;
            const callback = () => {
                // this.style.removeProperty('display');
                resolved(this);
                this.$emitter.dispatch('build', this);
                this.$inTransition = false;
                // this.$showing = true
            };
            if (!this.$inTransition && this.$controller?.transition && 'onbuild' in this.$controller.transition) {
                this.$inTransition = true;
                if (this.$controller.transition.onbuild &&
                    ('entry' in this.$controller.transition.onbuild || 'entryReverse' in this.$controller.transition.onbuild)) {
                    // const $display = getComputedStyle(this).display || 'inline'; 
                    // if($display.match(/inline/)){ this.style.display = 'block'; }
                    if (moment === true && typeof this.$controller.transition.onbuild.entry == 'function') {
                        this.$controller.transition.onbuild.entry(this)
                            .then(done => callback());
                    }
                    else if (moment === false && typeof this.$controller.transition.onbuild.entryReverse == 'function') {
                        this.$controller.transition.onbuild.entryReverse(this)
                            .then(done => callback());
                    }
                    else {
                        callback();
                    }
                }
                else {
                    callback();
                }
            }
            else {
                this.$inTransition = true;
                callback();
            }
        });
    }
    $initialize(state) {
        return this;
    }
    $render(state) {
        throw (`Sensen Element : Any "$render" method detected`);
    }
    $listeners() {
        if (this instanceof KuchiyoceElement) {
            this.$emitter.listen('contentChanges', ({ emit }) => {
                if (emit.target instanceof SensenElement &&
                    this instanceof KuchiyoceElement) {
                    // emit.target.$syncProps()
                    emit.target.$compilate();
                    this.$bewitchment(emit.target);
                }
            });
        }
        if (!(this instanceof KuchiyoceElement)) {
            this.$emitter.listen('contentChanges', ({ emit }) => {
                if (!(emit.target instanceof KuchiyoceElement)) {
                    if (emit.target instanceof SensenElement) {
                        // emit.target.$syncProps()
                        emit.target.$compilate();
                    }
                }
            });
        }
        return this;
    }
    $compilateDirectives(node) {
        FindDirectives(node, (record) => {
            // // @ts-ignore
            // record.node.$parentComponent = this;
            FindStateData(this, record);
            // console.log('Build Directive', record.node )
            this.$compilateRecord(record);
        });
        return this;
    }
    $compilateRecord(record) {
        if (record.type == 'attribute') {
            if (record.node instanceof SensenElement) {
                record.node.$setStates();
                return this;
            }
            SensenDataRender((record.attribute ? record.attribute.value || ''
                : (record.mockup ? record.mockup.nodeValue || '' : '')), (record.node instanceof SensenElement && record.node.$parentComponent instanceof SensenElement)
                ? record.node.$parentComponent
                : this, (record.node instanceof SensenElement && record.node.$parentComponent instanceof SensenElement)
                ? (record.node.$parentComponent.$controller || {})
                : (this.$controller || {}), record).then(compilate => {
                if (record.node instanceof HTMLElement) {
                    record.node.setAttribute(`${record.attribute?.name}`, `${compilate}`);
                }
            });
        }
        else if (record.type == 'echo' || record.type == 'snapcode') {
            // console.warn('$Props', `${ this.$props.world }`, record.node, this.$controller?.props?.world )
            SensenNodeRender(record.mockup || record.node, this, this.$controller || {}, record).then(compilate => {
                if (record.node instanceof Text) {
                    record.node.textContent = `${decodeHTMLEntities(compilate)}`;
                }
                else if (record.node instanceof HTMLElement) {
                    record.node.innerHTML = `${(compilate)}`;
                }
            });
        }
        else if (record.type == 'directive') {
            if (!('directive' in record)) {
                throw (`Corrupted directive : not found`);
            }
            if (typeof record.directive?.main != 'function') {
                throw (`Corrupted directive : < ${record.directive?.name} >`);
            }
            record.directive.main({
                component: FindParental(record.node, c => c instanceof SensenElement) || this,
                record
            });
        }
        return this;
    }
    $compilate() {
        const expressions = FindGlobalExpressions(this, (record) => {
            /** * Find State var */
            FindStateData(this, record);
            this.$compilateRecord(record);
        });
        // if(expressions.length){
        //     expressions.map(child=>{
        //     })
        // }
        this.$setStates();
        if (this.childNodes) {
            Object.values(this.childNodes).map(child => {
                if (!(child instanceof SensenElement)) {
                    this.$compilateDirectives(child);
                }
            });
        }
        return this;
    }
    $observers() {
        if (this.$observations instanceof MutationObserver) {
            this.$observations.disconnect();
        }
        this.$observations = new MutationObserver((records) => {
            if (records) {
                this.$emitter.dispatch('changes', [records]);
                if (records.length) {
                    records.map(record => {
                        switch (record.type) {
                            case 'attributes':
                                if (record.attributeName) {
                                    const check = record.attributeName.match(new RegExp(`${this.$anamespace}:`, 'g'));
                                    const value = this.getAttribute(record.attributeName);
                                    if (check && this.$anamespace) {
                                        const slot = record.attributeName.toLowerCase().substring(this.$anamespace.length + 1);
                                        if (slot) {
                                            const $ = {};
                                            $[slot] = value;
                                            this.$setStates($);
                                        }
                                    }
                                    this.$emitter.dispatch('propChange', {
                                        old: record.oldValue,
                                        value: this.getAttribute(record.attributeName),
                                        name: record.attributeName,
                                    });
                                }
                                break;
                            case 'characterData':
                            case 'childList':
                                // console.log('target Observed', record.target )
                                if (record.target instanceof SensenElement) {
                                    record.target.$application = this.$application;
                                }
                                record.addedNodes.forEach(child => {
                                    if (child instanceof SensenElement) {
                                        child.$application = this.$application;
                                        child.$parentComponent = this;
                                    }
                                    else if (child instanceof HTMLElement && !(child instanceof SensenElement)) {
                                        this.$compilateDirectives(child);
                                    }
                                    this.$emitter.dispatch('addedChild', child);
                                });
                                record.removedNodes.forEach(child => {
                                    this.$emitter.dispatch('removedChild', child);
                                });
                                this.$emitter.dispatch('contentChanges', record);
                                break;
                        }
                        if (record.target instanceof HTMLElement) {
                            record.target.querySelectorAll('*').forEach(target => {
                                if (target instanceof HTMLElement) {
                                    target.$parentComponent = FindParental(record.target, c => c instanceof SensenElement) || this;
                                }
                            });
                        }
                    });
                    this.$emitter.dispatch('changesDone', records);
                }
            }
        });
        this.$observations.observe(this, {
            subtree: true,
            childList: true,
            characterData: true,
            attributes: true,
            // attributeFilter: Object.entries(this.$state || {})
            //     .map($=>`${ this.$anamespace }${ $[0] }`)
        });
        return this;
    }
    $setStates(state) {
        // const $state = (state || {}) as State;
        return new Promise((resolved) => {
            const promises = [];
            const defaultState = { ...this.$controller?.state, /* ...(state||{})  */ };
            const fn = ($) => {
                return promises.push(new Promise((next) => {
                    const rawname = $[0];
                    const name = `state:${rawname}`;
                    if (defaultState[$[0]] !== undefined) {
                        const currentValue = (this.getAttribute(`${name}`) || this.$state[rawname]);
                        if (currentValue !== this.$state[rawname]) {
                            const found = this.$setSafeProps(currentValue);
                            this.$state[rawname] = this.$stateHydrates?.make(rawname, this.$unsetSafeProps(found));
                            // this.setAttribute(name, found);
                        }
                    }
                    // else{
                    //     if(currentValue === null){
                    //         // console.warn('$> SET ///',name, $[1], defaultState[$[0]])
                    //     }
                    //     else{
                    //         // console.log('$>',name, currentValue, defaultState[$[0]])
                    //     }
                    //     // this.$state[ rawname ] = defaultState[$[0]] as State[ keyof State]
                    // }
                    // if($state[ rawname ] != undefined && !currentValue){
                    //     found = this.$setSafeProps($state[ rawname ]) as State[keyof State];
                    //     // this.$state[ rawname ] = this.$unsetSafeProps(found);
                    //      this.$state[ rawname ] = this.$stateHydrates?.make(
                    //         rawname, 
                    //         this.$unsetSafeProps(found)
                    //     ) as State[ keyof State]
                    //     // this.setAttribute(name, this.$setSafeProps($state[ rawname ]))
                    // }
                    // if($state[ rawname ] != undefined && currentValue){
                    //     // this.setAttribute(name, this.$setSafeProps($state[ rawname ]))
                    // }
                    next(this.$state[rawname]);
                }));
            };
            if (state) {
                if (!isEmptyObject(state)) {
                    Object.entries(state).map($ => fn($));
                }
            }
            else {
                Object.entries(defaultState).map($ => fn($));
            }
            Promise.allSettled(promises)
                .then(results => {
                resolved(this.$state);
            });
        });
    }
    $assign(prop, value) {
        this[prop] = value;
        return this;
    }
    static $use($namspace, $name, $klass) {
        const _name = `${$namspace}-${$name}`;
        if (!customElements.get(_name) && $klass) {
            customElements.define(_name, $klass);
        }
        return this;
    }
}
_SensenElement_instances = new WeakSet(), _SensenElement_connectedProtocol = function _SensenElement_connectedProtocol() {
    this
        .$initialize()
        .$observers()
        .$listeners()
        .$render();
    this.$emitter.dispatch('build', this);
    // this.$showing = true
    return this;
};
/**
 * Sensen Kuchiyoce Element
 */
export class KuchiyoceElement extends SensenElement {
    constructor($params) {
        super($params.state || {});
        this.$params = $params;
        this.$tnamespace = 'sensen';
        this.$anamespace = 'state';
        if (!this.parentNode) {
            document.body.insertBefore(this, document.body.firstChild);
        }
    }
    $bewitchment(element) {
        if (element) {
            element.$application = this;
        }
        else {
            const children = this.querySelectorAll('*');
            if (children.length) {
                children.forEach(child => {
                    if (child instanceof SensenElement) {
                        child.$application = this;
                    }
                });
            }
        }
        return this;
    }
    $render(state) {
        const render = this.$params.main(state || this.$params.state || { children: '' }, this);
        if (typeof render == 'string') {
            this.innerHTML = render;
        }
        if (render instanceof SensenRouter) {
            this.$router = render;
        }
        else {
            if (render instanceof HTMLElement) {
                this.appendChild(render);
            }
        }
        this.$bewitchment();
        return null;
    }
}
export class Jutsu {
    static Kuchiyoce(name, params) {
        // params.props = params.props || {} as T
        KuchiyoceElement.$use('sensen', name, KuchiyoceElement);
        return new KuchiyoceElement(params);
    }
}
/**
 * Create Component Method Event
 */
export function CreateComponentMethodEvent(component, event) {
    const _ = {
        event,
        element: component,
        router: component.$application?.$router,
        children: component.children,
        state: component.$state,
    };
    return _;
}
CommonDirectives.Define({
    name: 'action',
    type: '-attribute',
    expression: '@',
    main: ({ component, record }) => {
        if (component instanceof SensenElement && record) {
            /**
             * HTMLElement Only
             */
            if (record.node instanceof HTMLElement && component instanceof SensenElement) {
                const alreadyKey = `directiveState${record.directive?.expression}`;
                const args = Array.isArray(record.arguments) ? record.arguments : [];
                /**
                 * Evité les abus de définition
                 */
                if (record.node[alreadyKey]) {
                    return;
                }
                /**
                 * Definition de l'évènement
                 */
                record.node.addEventListener(`${record.name}`, (ev) => {
                    record.matches?.map(match => {
                        const attrib = (('attributes' in record.node)
                            ? record.node.getAttribute(match?.input || '')
                            : '')?.trim();
                        CommonDirectives.parseArguments({
                            args,
                            component,
                            record,
                            event: ev,
                        });
                        // if(args.indexOf('prevent') > -1){ ev.preventDefault() }
                        // if(args.indexOf('stop') > -1){ ev.stopPropagation() }
                        /**
                         * Check Component methods
                         */
                        const isMethod = attrib?.indexOf(`this.methods.`) == 0;
                        // const isRouter = attrib?.indexOf(`$router.`) == 0;
                        const _event = CreateComponentMethodEvent(component, ev);
                        if (isMethod && component.$methods) {
                            const methodName = attrib.substring((`this.methods.`).length);
                            const method = component.$methods[methodName];
                            // console.warn('Directive Event', method, methodName, attrib, component )
                            /** * Check is transaction function */
                            if (typeof method == 'function') {
                                method.apply(component.$state, [_event]);
                            }
                        }
                        else {
                            SensenRender(`<${SyntaxDelimiter} ${attrib} ${SyntaxDelimiter}>`, component, component);
                        }
                        // else{
                        //     if(typeof attrib == 'string' && attrib in window){
                        //         const fn = (window[attrib as keyof Window] || (()=>{})) as Function
                        //         if(typeof fn == 'function'){
                        //             fn.apply(window, [_event])
                        //         }
                        //     }
                        // }
                    });
                }, args.indexOf('capture') > -1 ? true : false);
                // @ts-ignore
                record.node[alreadyKey] = true;
            }
        }
    },
});
/**
 * Sensen Functional Commands
 */
/** * Sensen Element Caller */
export function Sensen(command, state) {
    if (typeof command == 'string') {
        if (command in window.$SensenComponents) {
            const $ref = customElements.get(command);
            if ($ref instanceof Function) {
                const $instance = (new $ref(state || {}));
                if ($instance instanceof SensenElement) {
                    return $instance;
                }
            }
        }
        else {
            const element = document.querySelector(command);
            if (element instanceof HTMLElement) {
                return element;
            }
        }
    }
    return undefined;
}
/** * Sensen Plugin Element Caller */
export function SensenPlugin(name, state) {
    return Sensen(`plugin-${name}`, state);
}
/** * Sensen Activity Element Caller */
export function SensenActivity(name, state) {
    return Sensen(`activity-${name}`, state);
}
/** * Sensen Component Element Caller */
export function SensenComponent(name, state) {
    return Sensen(`sense-${name}`, state);
}
/** * Utilities : $ReadObjectEntries */
export function $ReadObjectEntries(input) {
    return Object.entries(input);
}
/** * Utilities : $ParseObjectEntries */
export function $ParseObjectEntries(input, callback) {
    return Object.entries(input).map(callback || (() => { }));
}
/** * Utilities : $ReadObjectValues */
export function $ReadObjectValues(input) {
    return Object.values(input);
}
/** * Utilities : $ParseObjectValues */
export function $ParseObjectValues(input, callback) {
    return Object.values(input).map(callback || (() => { }));
}
export function $Until(input, callback) {
    return Object.values(input).map(callback || (() => { }));
}
/** * Utilities : $ReadObjectKeys */
export function $ReadObjectKeys(input) {
    return Object.keys(input);
}
/** * Utilities : $ParseObjectKeys */
export function $ParseObjectKeys(input, callback) {
    return Object.keys(input).map(callback || (() => { }));
}
window.$ReadObjectEntries = $ReadObjectEntries;
window.$ParseObjectEntries = $ParseObjectEntries;
window.$ReadObjectValues = $ReadObjectValues;
window.$ParseObjectValues = $ParseObjectValues;
window.$Until = $Until;
window.$ReadObjectKeys = $ReadObjectKeys;
window.$ParseObjectKeys = $ParseObjectKeys;
