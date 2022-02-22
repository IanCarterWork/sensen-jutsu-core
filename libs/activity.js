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
var _SceneActivity_mockup;
import { ComponentController, SensenHTMLElement } from "./index";
import { SensenEmitter } from "./emitter";
import { useScreenElements } from "./elements/activity";
import { SensenTemplate } from "./template";
import { ActivityWireframe } from "./wireframe/activity";
import { SensenScript } from "./script";
import { AppearanceSceneActivity } from "./appearance/activity";
useScreenElements();
export function WireframeTemplateMixer(template, wireframe, slot, clone, found = false) {
    /**
     * Build
     */
    if (found && clone) {
        Object.values(clone?.childNodes).map(child => {
            if (wireframe) {
                if (wireframe[slot]) {
                    const element = wireframe[slot];
                    element.append(child);
                    return child;
                }
            }
        });
    }
    if (!found) {
        if (template.children.length) {
            Object.values(template.children)
                .filter(child => {
                return child.tagName.toLowerCase() == `scene-${slot}`;
            })
                .map(child => {
                if (wireframe?.header instanceof HTMLElement) {
                    wireframe?.header?.appendChild(child);
                }
                return child;
            });
        }
    }
    return WireframeTemplateMixer;
}
/**
 * Sensen Screen
 */
export class SceneActivity {
    constructor($options) {
        this.$options = {};
        this.props = {};
        this.state = {};
        this.isReady = false;
        this.$appearance = {};
        this.$element = {};
        this.$emitter = {};
        this.$klass = {};
        this.methods = {};
        _SceneActivity_mockup.set(this, '');
        this.$options = $options || {};
        this.props = this.$options.props || {};
        // this.state = {} as ComponentState
        this.state = this.$options.state || {};
        this.$options.appearance = this.$options.appearance || {};
        this.$tagName = `activity-${this.$options.name}`;
        this.$element = undefined;
        this.methods = this.$options.methods || {};
        this.$appearance = AppearanceSceneActivity().bundle;
        // this.$appearance = new SensenAppearance();
        this.$emitter = new SensenEmitter();
        this
            .$emitting()
            .$create()
            .$makeAppearance(this.$options.appearance || {});
    }
    $makeAppearance(selectors) {
        this.$appearance?.selectors(selectors || {});
        /** * Emit Event */
        this.$emitter?.dispatch('appearanceReady', this);
        return this;
    }
    $makeTemplate(element) {
        SensenTemplate
            .Load(`sensen/activities/${this.$options?.template || `${this.$options?.name || ''}.html`}`)
            .then(res => SensenTemplate.ResolveResponse(res))
            .then(async (data) => {
            if (data) {
                __classPrivateFieldSet(this, _SceneActivity_mockup, data, "f");
                this.$deepRender(element, __classPrivateFieldGet(this, _SceneActivity_mockup, "f"));
            }
            return element;
        })
            .then(async (el) => {
            await SensenScript.Run(element, this)
                .then(scene => {
                /** * Emit Event */
                this.$emitter?.dispatch('ready', this);
            })
                .catch(er => {
                /** * Emit Event */
                this.$emitter?.dispatch('readyFailed', er);
            });
        })
            .catch(er => {
            console.warn('Any template loaded', er);
            /** * Emit Event */
            this.$emitter?.dispatch('templateLoadingFailed', er);
        });
        return this;
    }
    async $deepRender(element, data) {
        const wireframe = this.$getWireframe(this.$options?.options?.wireframe || 'basic');
        const template = (new DOMParser()).parseFromString(data, 'text/html');
        let otherElements = [];
        /**
         * Find preset Element
         */
        let findHeader = false;
        let findMenu = false;
        let findBody = false;
        let headerFound = {};
        let menuFound = {};
        let bodyFound = {};
        /**
         * Get not preset element
         */
        otherElements = Object.values(template.body.children)
            /**
             * Find Header
             */
            .map(child => {
            if (child.tagName.toLowerCase() == 'scene-header' && findBody === false) {
                headerFound = child;
                findHeader = true;
            }
            return child;
        })
            /**
             * Find Menu
             */
            .map(child => {
            if (child.tagName.toLowerCase() == 'scene-menu' && findBody === false) {
                menuFound = child;
                findMenu = true;
            }
            return child;
        })
            /**
             * Find Body
             */
            .map(child => {
            if (child.tagName.toLowerCase() == 'scene-body' && findBody === false) {
                bodyFound = child;
                findBody = true;
            }
            return child;
        })
            /**
             * Push other Element
             */
            .filter(child => (findBody && child.tagName.toLowerCase() != 'scene-body') &&
            child.tagName.toLowerCase() != 'scene-header' &&
            child.tagName.toLowerCase() != 'scene-menu');
        /**
         * Make header in wireframe if not exists
         */
        WireframeTemplateMixer(template.body, wireframe, 'header', headerFound, findHeader)(template.body, wireframe, 'menu', menuFound, findMenu)(template.body, wireframe, 'body', bodyFound, findBody);
        /**
         * Wireframe injection
         */
        if (wireframe) {
            await Object.values(wireframe).map(async (child) => {
                element.appendChild(child);
            });
        }
        if (otherElements.length) {
            otherElements.map(child => {
                element.append(child);
            });
        }
        if ('$controller' in element) {
            if (element.$controller instanceof ComponentController) {
                element.$controller
                    .$observers({
                    excludeTags: Object.keys(window.SensenAvailableComponents).map(k => k.toLowerCase())
                })
                    .$makeProps()
                    .$compilate();
            }
        }
        return this;
    }
    $getWireframe(type) {
        switch (type) {
            case 'basic': return ActivityWireframe.Basic();
            case 'nav-bottom': return ActivityWireframe.Basic();
            case 'fullscreen': return ActivityWireframe.Fullscreen();
        }
        return undefined;
    }
    render(props) {
        if (this.$element instanceof HTMLElement) {
            this.$element.render(props);
            /** * Emit Event */
            this.$emitter?.dispatch('render', this);
            this.isReady = true;
        }
        else {
            if (this.$klass) {
                this.$element = new this.$klass(this.$options?.props);
                this.$element.render(props);
                /** * Emit Event */
                this.$emitter?.dispatch('render', this);
                this.isReady = true;
            }
        }
        return this;
    }
    /**
     * DOM Observer
     */
    $makeObserver(element) {
        let observer;
        if (element instanceof HTMLElement) {
            observer = new MutationObserver((records) => {
                if (records) {
                    records.forEach(record => {
                        /** * Emit Event */
                        this.$emitter?.dispatch('mutationObserved', record);
                    });
                    /** * Emit Event */
                    this.$emitter?.dispatch('mutationsObserved', records);
                }
            });
            observer.observe(element, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                characterDataOldValue: true,
                attributeOldValue: true,
            });
            /** * Emit Event */
            this.$emitter?.dispatch('mutationObservationReady', observer);
        }
        return observer;
    }
    $create() {
        if (customElements.get(this.$tagName)) {
            throw (`It not possible to create a activity with this name "${this.$options?.name}" again `);
        }
        if (!customElements.get(this.$tagName)) {
            const self = this;
            this.$klass = class extends SensenHTMLElement {
                constructor(props) {
                    super(props);
                    this.state = {};
                    this.$controller = {};
                    this.props = props || self.props;
                    this.state = self.state || {};
                    self.$element = this;
                    // this.$fromAttributesProps(props||self.$options?.props)
                    if (self.$options) {
                        self.$options.element = this;
                    }
                    /**
                     * Initialization
                     */
                    this.$initialize();
                    /** * Emit Event */
                    self.$emitter?.dispatch('construct', self);
                }
                setProp(name, value) {
                    if (name in this.props) {
                        this.props[name] = value;
                    }
                    return this;
                }
                show(props) {
                    if (typeof props == 'object') {
                        Object.entries(props).map(entry => this.setProp(entry[0], entry[1]));
                    }
                    /** * Emit Event */
                    self.$emitter?.dispatch('show', this);
                    return this;
                }
                hide() {
                    /** * Emit Event */
                    self.$emitter?.dispatch('hide', this);
                    return this;
                }
                render(props) {
                    // this.props = this.$toAttributesProps(props||undefined) || this.props
                    // if(!this.isReady){
                    /**
                     * Load Template
                     */
                    self.$makeTemplate(this);
                    self.$makeObserver(this);
                    this.isReady = true;
                    // }
                    // else{
                    //     this.innerHTML = ''
                    //     self.$deepRender(this,  self.#mockup)
                    // }
                    return this;
                }
                $initialize() {
                    // this.$initializeProps()
                    // this.$fromAttributesProps(self.props)
                    this.$initializeEUiD();
                    this.$controller = new ComponentController((self.$options || {}), {
                        prefix: 'activity',
                        templating: false,
                    });
                    this.setAttribute('euid', this.$EUiD);
                    this.classList.add(`${self.$appearance?.$UiD}`);
                    // Object.defineProperty(this, 'observedAttributes', {
                    //     get: function(){
                    //         return (typeof self.props == 'object') ? Object.keys(self.props) : [];
                    //     }
                    // })
                    return this;
                }
                connectedCallback() {
                    // console.warn('connected', this)
                    /** * Emit Event */
                    self.$emitter?.dispatch('connected', self);
                }
                adoptedCallback() {
                    // console.warn('adopted', this)
                    /** * Emit Event */
                    self.$emitter?.dispatch('adopted', self);
                }
                disconnectedCallback() {
                    // console.warn('disconnected', this)
                    /** * Emit Event */
                    self.$emitter?.dispatch('disconnected', self);
                }
                attributeChangedCallback(name, value, oldValue) {
                    // console.warn('attributeChanged', this)
                    this.setProp(name, value);
                    /** * Emit Event */
                    self.$emitter?.dispatch('propsChanged', { name, value, oldValue });
                }
            };
            window.SensenAvailableComponents[this.$tagName] = this.$klass;
            customElements.define(this.$tagName, this.$klass);
        }
        /** * Emit Event */
        this.$emitter?.dispatch('elementReady', this);
        return this;
    }
    $emitting() {
        this.$emitter?.listen('render', (self) => {
            // console.log('Rendering now', self)
            if (!this.isReady) {
                this.$appearance?.mount();
            }
        });
        /**
         * Custom Emitter Listener : Begin
         */
        if (this.$options?.emit) {
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
_SceneActivity_mockup = new WeakMap();
