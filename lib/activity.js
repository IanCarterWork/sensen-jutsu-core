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
import { SensenHTMLElement } from ".";
import { SensenEmitter } from "./emitter";
import { useScreenElements } from "./elements/activity";
import { SensenTemplate } from "./template";
import { ActivityWireframe } from "./wireframe/activity";
import { SensenScript } from "./script";
import { SockRenderEngine } from "./compilate";
import { StabilizeEchoExpression, StabilizeSnapCodeExpression } from "./expression";
import { StabilizeContent } from "./utilities";
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
                wireframe?.header?.appendChild(child);
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
    constructor(config) {
        this.config = {};
        this.props = {};
        this.isReady = false;
        this.$appearance = {};
        this.$element = {};
        this.$emitter = {};
        this.$klass = {};
        _SceneActivity_mockup.set(this, '');
        this.config = config || {};
        this.props = this.config.props || {};
        this.config.appearance = this.config.appearance || {};
        this.$tagName = `activity-${this.config.name}`;
        this.$element = undefined;
        this.$appearance = AppearanceSceneActivity().bundle;
        // this.$appearance = new SensenAppearance();
        this.$emitter = new SensenEmitter();
        this
            .$emitting()
            .$create()
            .$makeAppearance(this.config.appearance || {});
    }
    $makeAppearance(selectors) {
        this.$appearance?.selectors(selectors || {});
        /** * Emit Event */
        this.$emitter?.dispatch('appearanceReady', this);
        return this;
    }
    $makeTemplate(element) {
        SensenTemplate
            .Load(this.config?.template || '')
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
        const wireframe = this.$getWireframe(this.config?.options?.wireframe || 'basic');
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
            await Object.values(wireframe).reverse().map(async (child) => {
                await SockRenderEngine(StabilizeSnapCodeExpression(StabilizeEchoExpression(StabilizeContent(child.outerHTML || '') || '', false), false), element, element.props)
                    .then(compilate => {
                    element.insertAdjacentHTML('afterbegin', compilate);
                })
                    .catch(er => {
                    console.error('Sensen Scene Activity failed:\n', er);
                });
            });
        }
        if (otherElements.length) {
            otherElements.map(child => {
                // console.log('Other Element', child)
                element.append(child);
            });
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
                this.$element = new this.$klass(this.config?.props);
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
            throw (`It not possible to create a activity with this name "${this.config?.name}" again `);
        }
        if (!customElements.get(this.$tagName)) {
            const self = this;
            this.$klass = class extends SensenHTMLElement {
                constructor(props) {
                    super(props);
                    this.props = props || self.props;
                    self.$element = this;
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
                    this.props = this.$toAttributesProps(props || undefined) || this.props;
                    if (!this.isReady) {
                        /**
                         * Load Template
                         */
                        self.$makeTemplate(this);
                        self.$makeObserver(this);
                        this.isReady = true;
                    }
                    else {
                        this.innerHTML = '';
                        self.$deepRender(this, __classPrivateFieldGet(self, _SceneActivity_mockup, "f"));
                    }
                    return this;
                }
                $initialize() {
                    this.$initializeProps();
                    this.$initializeEUiD();
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
        if (this.config?.emit) {
            Object.entries(this.config.emit).map(e => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2FjdGl2aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUV0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE9BQU8sRUFBcUIsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBMEIsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hFLGlCQUFpQixFQUFFLENBQUE7QUFJbkIsTUFBTSxVQUFVLHNCQUFzQixDQUVsQyxRQUFxQixFQUVyQixTQUE2QyxFQUU3QyxJQUFrQyxFQUVsQyxLQUFrQixFQUVsQixRQUFpQixLQUFLO0lBSXRCOztPQUVHO0lBQ0gsSUFBRyxLQUFLLElBQUksS0FBSyxFQUFDO1FBRWQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQSxFQUFFO1lBRXhDLElBQUcsU0FBUyxFQUFDO2dCQUVULElBQUcsU0FBUyxDQUFFLElBQUksQ0FBRSxFQUFDO29CQUVqQixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUUsSUFBSSxDQUFpQixDQUFBO29CQUVoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV0QixPQUFPLEtBQUssQ0FBQztpQkFFaEI7YUFFSjtRQUVMLENBQUMsQ0FBQyxDQUFBO0tBRUw7SUFFRCxJQUFHLENBQUMsS0FBSyxFQUFDO1FBRU4sSUFBRyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBQztZQUV4QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7aUJBRS9CLE1BQU0sQ0FBQyxLQUFLLENBQUEsRUFBRTtnQkFFWCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksU0FBVSxJQUFLLEVBQUUsQ0FBQTtZQUUzRCxDQUFDLENBQUM7aUJBRUQsR0FBRyxDQUFDLEtBQUssQ0FBQSxFQUFFO2dCQUVSLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFFLEtBQUssQ0FBRSxDQUFBO2dCQUV2QyxPQUFPLEtBQW9CLENBQUM7WUFFaEMsQ0FBQyxDQUFDLENBQUE7U0FFTDtLQUVKO0lBRUQsT0FBTyxzQkFBc0IsQ0FBQztBQUVsQyxDQUFDO0FBdUNEOztHQUVHO0FBRUgsTUFBTSxPQUFPLGFBQWE7SUE0QnRCLFlBQVksTUFBNEI7UUF4QnhDLFdBQU0sR0FBMEIsRUFBMEIsQ0FBQztRQUUzRCxVQUFLLEdBQVcsRUFBVyxDQUFBO1FBRTNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFLekIsZ0JBQVcsR0FBc0IsRUFBc0IsQ0FBQTtRQUV2RCxhQUFRLEdBQThCLEVBQThCLENBQUM7UUFFckUsYUFBUSxHQUFtQixFQUFtQixDQUFBO1FBRTlDLFdBQU0sR0FBOEIsRUFBOEIsQ0FBQztRQUluRSxnQ0FBa0IsRUFBRSxFQUFDO1FBT2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUUxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQVcsQ0FBQTtRQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxFQUFzQixDQUFBO1FBRXpFLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBYSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUssRUFBRSxDQUFBO1FBRWhELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFBO1FBSXpCLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQXVCLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFcEQsNkNBQTZDO1FBRTdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUdwQyxJQUFJO2FBRUMsU0FBUyxFQUFFO2FBRVgsT0FBTyxFQUFFO2FBRVQsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFFLEVBQUUsQ0FBQyxDQUUvQztJQUVMLENBQUM7SUFNRCxlQUFlLENBQUMsU0FBMkI7UUFFdkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUUsU0FBUyxJQUFFLEVBQUUsQ0FBRSxDQUFDO1FBRTdDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVqRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBTUQsYUFBYSxDQUFDLE9BQWlDO1FBRTNDLGNBQWM7YUFFVCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLElBQUUsRUFBRSxDQUFDO2FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRSxDQUFBLGNBQWMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFOUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLEVBQUEsRUFBRTtZQUVkLElBQUcsSUFBSSxFQUFDO2dCQUVKLHVCQUFBLElBQUkseUJBQVcsSUFBSSxNQUFBLENBQUM7Z0JBRXBCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFHLHVCQUFBLElBQUksNkJBQVEsQ0FBQyxDQUFDO2FBRTVDO1lBRUQsT0FBTyxPQUFPLENBQUE7UUFFbEIsQ0FBQyxDQUFDO2FBSUQsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUEsRUFBRTtZQUVaLE1BQU0sWUFBWSxDQUFDLEdBQUcsQ0FBUSxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUUzQyxJQUFJLENBQUMsS0FBSyxDQUFBLEVBQUU7Z0JBRVQsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFM0MsQ0FBQyxDQUFDO2lCQUVELEtBQUssQ0FBQyxFQUFFLENBQUEsRUFBRTtnQkFFUCxtQkFBbUI7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUvQyxDQUFDLENBQUMsQ0FBQTtRQUVOLENBQUMsQ0FBQzthQUdELEtBQUssQ0FBQyxFQUFFLENBQUEsRUFBRTtZQUVQLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFFdkMsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpELENBQUMsQ0FBQyxDQUFBO1FBRU4sT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUtELEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBaUMsRUFBRSxJQUFZO1FBRTdELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxJQUFFLE9BQU8sQ0FBQyxDQUFBO1FBRTlFLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFdEUsSUFBSSxhQUFhLEdBQWtCLEVBQUUsQ0FBQTtRQUdyQzs7V0FFRztRQUNILElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUV2QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBR3JCLElBQUksV0FBVyxHQUFnQixFQUFpQixDQUFDO1FBRWpELElBQUksU0FBUyxHQUFnQixFQUFpQixDQUFDO1FBRS9DLElBQUksU0FBUyxHQUFnQixFQUFpQixDQUFDO1FBSS9DOztXQUVHO1FBQ0gsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFHckQ7O2VBRUc7YUFDRixHQUFHLENBQUMsS0FBSyxDQUFBLEVBQUU7WUFFUixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksY0FBYyxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBRXJFLFdBQVcsR0FBRyxLQUFvQixDQUFDO2dCQUVuQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBRXJCO1lBRUQsT0FBTyxLQUFvQixDQUFDO1FBRWhDLENBQUMsQ0FBQztZQUdGOztlQUVHO2FBQ0YsR0FBRyxDQUFDLEtBQUssQ0FBQSxFQUFFO1lBRVIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLFlBQVksSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO2dCQUVuRSxTQUFTLEdBQUcsS0FBb0IsQ0FBQztnQkFFakMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUVuQjtZQUVELE9BQU8sS0FBb0IsQ0FBQztRQUVoQyxDQUFDLENBQUM7WUFJRjs7ZUFFRzthQUNGLEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRTtZQUVSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtnQkFFbkUsU0FBUyxHQUFHLEtBQW9CLENBQUM7Z0JBRWpDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFFbkI7WUFFRCxPQUFPLEtBQW9CLENBQUM7UUFFaEMsQ0FBQyxDQUFDO1lBR0Y7O2VBRUc7YUFDRixNQUFNLENBQUMsS0FBSyxDQUFBLEVBQUUsQ0FFWCxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLFlBQVksQ0FBQztZQUV6RCxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLGNBQWM7WUFFN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLENBRTlDLENBQUM7UUFJRjs7V0FFRztRQUVILHNCQUFzQixDQUVsQixRQUFRLENBQUMsSUFBSSxFQUViLFNBQVMsRUFFVCxRQUFRLEVBRVIsV0FBVyxFQUVYLFVBQVUsQ0FFYixDQUVHLFFBQVEsQ0FBQyxJQUFJLEVBRWIsU0FBUyxFQUVULE1BQU0sRUFFTixTQUFTLEVBRVQsUUFBUSxDQUVYLENBRUcsUUFBUSxDQUFDLElBQUksRUFFYixTQUFTLEVBRVQsTUFBTSxFQUVOLFNBQVMsRUFFVCxRQUFRLENBRVgsQ0FBQTtRQUlEOztXQUVHO1FBRUgsSUFBRyxTQUFTLEVBQUM7WUFFVCxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUEsRUFBRTtnQkFFdEQsTUFBTSxnQkFBZ0IsQ0FFbEIsMkJBQTJCLENBRXZCLHVCQUF1QixDQUVuQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFFekMsS0FBSyxDQUVWLEVBRUMsS0FBSyxDQUNWLEVBRUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBRTNCO3FCQUVBLElBQUksQ0FBQyxTQUFTLENBQUEsRUFBRTtvQkFFYixPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFBO2dCQUV2RCxDQUFDLENBQUM7cUJBRUQsS0FBSyxDQUFDLEVBQUUsQ0FBQSxFQUFFO29CQUVQLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsRUFBRSxDQUFDLENBQUE7Z0JBRXhELENBQUMsQ0FBQyxDQUFBO1lBRU4sQ0FBQyxDQUFDLENBQUE7U0FHTDtRQUVELElBQUcsYUFBYSxDQUFDLE1BQU0sRUFBQztZQUVwQixhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQSxFQUFFO2dCQUVyQixzQ0FBc0M7Z0JBRXRDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFFekIsQ0FBQyxDQUFDLENBQUE7U0FFTDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFNRCxhQUFhLENBQUMsSUFBb0M7UUFFOUMsUUFBTyxJQUFJLEVBQUM7WUFFUixLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8saUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFL0MsS0FBSyxZQUFZLENBQUMsQ0FBQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXBELEtBQUssWUFBWSxDQUFDLENBQUMsT0FBTyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUU1RDtRQUVELE9BQU8sU0FBUyxDQUFBO0lBRXBCLENBQUM7SUFNRCxNQUFNLENBQUMsS0FBYTtRQUVoQixJQUFHLElBQUksQ0FBQyxRQUFRLFlBQVksV0FBVyxFQUFDO1lBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBRTNCLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FFdkI7YUFFRztZQUVBLElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztnQkFFWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBNkIsQ0FBQTtnQkFFL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBRTNCLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUV4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUV2QjtTQUVKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUtEOztPQUVHO0lBQ0gsYUFBYSxDQUFDLE9BQW9CO1FBRTlCLElBQUksUUFBc0MsQ0FBQztRQUUzQyxJQUFHLE9BQU8sWUFBWSxXQUFXLEVBQUM7WUFFOUIsUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTtnQkFFdkMsSUFBRyxPQUFPLEVBQUM7b0JBRVAsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUEsRUFBRTt3QkFFcEIsbUJBQW1CO3dCQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFFeEQsQ0FBQyxDQUFDLENBQUE7b0JBRUYsbUJBQW1CO29CQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztpQkFFekQ7WUFHTCxDQUFDLENBQUMsQ0FBQTtZQUVGLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFDO2dCQUVyQixTQUFTLEVBQUUsSUFBSTtnQkFFZixPQUFPLEVBQUUsSUFBSTtnQkFFYixVQUFVLEVBQUUsSUFBSTtnQkFFaEIsYUFBYSxFQUFFLElBQUk7Z0JBRW5CLHFCQUFxQixFQUFFLElBQUk7Z0JBRTNCLGlCQUFpQixFQUFFLElBQUk7YUFFMUIsQ0FBQyxDQUFBO1lBRUYsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLDBCQUEwQixFQUFFLFFBQVEsQ0FBRSxDQUFDO1NBRWxFO1FBRUQsT0FBTyxRQUFRLENBQUM7SUFFcEIsQ0FBQztJQVFELE9BQU87UUFFSCxJQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBRWpDLE1BQU0sQ0FBQyx3REFBeUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFLLFVBQVUsQ0FBQyxDQUFBO1NBRWhHO1FBRUQsSUFBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO1lBRWxDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztZQUdsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQU0sU0FBUSxpQkFBd0I7Z0JBRWhELFlBQVksS0FBWTtvQkFFcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUE7b0JBRWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO29CQUVwQjs7dUJBRUc7b0JBQ0gsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUduQixtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFHL0MsQ0FBQztnQkFLRCxPQUFPLENBQUMsSUFBaUIsRUFBRSxLQUFVO29CQUVqQyxJQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO3dCQUVsQixJQUFJLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxHQUFHLEtBQTZCLENBQUE7cUJBRXJEO29CQUVELE9BQU8sSUFBSSxDQUFDO2dCQUVoQixDQUFDO2dCQU1ELElBQUksQ0FBQyxLQUFhO29CQUVkLElBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxFQUFDO3dCQUV4QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUE7cUJBRXZFO29CQUVELG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUV0QyxPQUFPLElBQUksQ0FBQztnQkFFaEIsQ0FBQztnQkFNRCxJQUFJO29CQUVBLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUV0QyxPQUFPLElBQUksQ0FBQztnQkFFaEIsQ0FBQztnQkFLRCxNQUFNLENBQUMsS0FBYTtvQkFFaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxJQUFFLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUE7b0JBRXBFLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO3dCQUViOzsyQkFFRzt3QkFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztxQkFFdkI7eUJBRUc7d0JBRUEsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7d0JBRW5CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFHLHVCQUFBLElBQUksNkJBQVEsQ0FBQyxDQUFBO3FCQUV4QztvQkFFRCxPQUFPLElBQUksQ0FBQztnQkFFaEIsQ0FBQztnQkFLRCxXQUFXO29CQUVQLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO29CQUV2QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7b0JBR3RCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFFckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUssRUFBRSxDQUFDLENBQUE7b0JBR2pELHNEQUFzRDtvQkFFdEQsdUJBQXVCO29CQUN2QixpRkFBaUY7b0JBQ2pGLFFBQVE7b0JBRVIsS0FBSztvQkFFTCxPQUFPLElBQUksQ0FBQztnQkFFaEIsQ0FBQztnQkFHRCxpQkFBaUI7b0JBRWIsa0NBQWtDO29CQUVsQyxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkFHRCxlQUFlO29CQUVYLGdDQUFnQztvQkFFaEMsbUJBQW1CO29CQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTdDLENBQUM7Z0JBR0Qsb0JBQW9CO29CQUVoQixxQ0FBcUM7b0JBRXJDLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUVsRCxDQUFDO2dCQUdELHdCQUF3QixDQUFDLElBQVksRUFBRSxLQUFZLEVBQUUsUUFBZTtvQkFFaEUseUNBQXlDO29CQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFMUIsbUJBQW1CO29CQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBRXZFLENBQUM7YUFHSixDQUFBO1lBRUQsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQTtTQUVyRDtRQUdELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQU9ELFNBQVM7UUFHTCxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBYyxRQUFRLEVBQUcsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUVsRCxxQ0FBcUM7WUFFckMsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7Z0JBRWIsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQTthQUU1QjtRQUdMLENBQUMsQ0FBQyxDQUFBO1FBR0Y7O1dBRUc7UUFFRixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBRWxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUU7Z0JBRXBDLElBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFDO29CQUV6QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRWxCLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFFeEIsYUFBYTt3QkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBRXBDLENBQUMsQ0FBQyxDQUFBO2lCQUVMO1lBRUwsQ0FBQyxDQUFDLENBQUE7U0FFTDtRQUVEOztXQUVHO1FBR0gsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztDQUlKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBTZW5zZW5IVE1MRWxlbWVudCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBTZW5zZW5BcHBlYXJhbmNlLCBUQXBwZWFyYW5jZVByb3BzIH0gZnJvbSBcIi4vYXBwZWFyYW5jZVwiO1xuaW1wb3J0IHsgU2Vuc2VuRW1pdHRlciB9IGZyb20gXCIuL2VtaXR0ZXJcIjtcbmltcG9ydCB7IFNjZW5lQWN0aXZpdHlPcHRpb25zV2lyZWZyYW1lcywgU2NlbmVBY3Rpdml0eVByb3BzLCBUU2NyZWVuQ29uZmlnIH0gZnJvbSBcIi4vaW5kZXgudFwiO1xuaW1wb3J0IHsgU2NlbmVBY3Rpdml0eUJvZHksIHVzZVNjcmVlbkVsZW1lbnRzIH0gZnJvbSBcIi4vZWxlbWVudHMvYWN0aXZpdHlcIjtcbmltcG9ydCB7IFNlbnNlblRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcbmltcG9ydCB7IEFjdGl2aXR5V2lyZWZyYW1lLCBBY3Rpdml0eVdpcmVmcmFtZVN0YXRlIH0gZnJvbSBcIi4vd2lyZWZyYW1lL2FjdGl2aXR5XCI7XG5pbXBvcnQgeyBTZW5zZW5TY3JpcHQgfSBmcm9tIFwiLi9zY3JpcHRcIjtcbmltcG9ydCB7IFNvY2tSZW5kZXJFbmdpbmUgfSBmcm9tIFwiLi9jb21waWxhdGVcIjtcbmltcG9ydCB7IFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uLCBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24gfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5pbXBvcnQgeyBTdGFiaWxpemVDb250ZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBBcHBlYXJhbmNlU2NlbmVBY3Rpdml0eSB9IGZyb20gXCIuL2FwcGVhcmFuY2UvYWN0aXZpdHlcIjtcblxuXG51c2VTY3JlZW5FbGVtZW50cygpXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gV2lyZWZyYW1lVGVtcGxhdGVNaXhlcihcblxuICAgIHRlbXBsYXRlOiBIVE1MRWxlbWVudCwgXG4gICAgXG4gICAgd2lyZWZyYW1lOiBBY3Rpdml0eVdpcmVmcmFtZVN0YXRlIHwgdW5kZWZpbmVkLCBcblxuICAgIHNsb3Q6IGtleW9mIEFjdGl2aXR5V2lyZWZyYW1lU3RhdGUgLFxuICAgIFxuICAgIGNsb25lOiBIVE1MRWxlbWVudCwgXG4gICAgXG4gICAgZm91bmQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIFxuKXtcblxuICAgIC8qKlxuICAgICAqIEJ1aWxkXG4gICAgICovXG4gICAgaWYoZm91bmQgJiYgY2xvbmUpe1xuXG4gICAgICAgIE9iamVjdC52YWx1ZXMoY2xvbmU/LmNoaWxkTm9kZXMpLm1hcChjaGlsZD0+e1xuXG4gICAgICAgICAgICBpZih3aXJlZnJhbWUpe1xuXG4gICAgICAgICAgICAgICAgaWYod2lyZWZyYW1lWyBzbG90IF0pe1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB3aXJlZnJhbWVbIHNsb3QgXSBhcyBIVE1MRWxlbWVudFxuICAgIFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChjaGlsZCk7IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGlmKCFmb3VuZCl7XG5cbiAgICAgICAgaWYodGVtcGxhdGUuY2hpbGRyZW4ubGVuZ3RoKXtcblxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0ZW1wbGF0ZS5jaGlsZHJlbilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmZpbHRlcihjaGlsZD0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSBgc2NlbmUtJHsgc2xvdCB9YFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubWFwKGNoaWxkPT57XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lPy5oZWFkZXI/LmFwcGVuZENoaWxkKCBjaGlsZCApXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIFdpcmVmcmFtZVRlbXBsYXRlTWl4ZXI7XG4gICAgXG59XG5cblxuXG4vKipcbiAqIFNjZW5lIEFjdGl2aXR5IFBhcmVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlbnNlblNjZW5lQWN0aXZpdGllc3tcblxuXG4gICAgY29uZmlnPzogb2JqZWN0O1xuICAgIFxuICAgIHByb3BzPzogU2NlbmVBY3Rpdml0eVByb3BzO1xuXG4gICAgaXNSZWFkeTogYm9vbGVhbjtcbiAgICBcbiAgICBcbiAgICAkdGFnTmFtZTogc3RyaW5nO1xuICAgIFxuICAgICRhcHBlYXJhbmNlPzogU2Vuc2VuQXBwZWFyYW5jZTtcblxuICAgICRlbGVtZW50PzogU2Vuc2VuSFRNTEVsZW1lbnQ8U2NlbmVBY3Rpdml0eVByb3BzPjtcbiAgICBcbiAgICAkZW1pdHRlcj86IFNlbnNlbkVtaXR0ZXI7XG4gICAgXG4gICAgJGtsYXNzPzogQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yO1xuXG5cbiAgICAkbWFrZUFwcGVhcmFuY2UgOiAoc2VsZWN0b3JzOiBUQXBwZWFyYW5jZVByb3BzKSA9PiB0aGlzXG5cbiAgICAkbWFrZVRlbXBsYXRlIDogRnVuY3Rpb247XG5cbiAgICAkZ2V0V2lyZWZyYW1lIDogRnVuY3Rpb247XG5cbn1cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gU2NyZWVuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFNjZW5lQWN0aXZpdHk8UHJvcHMgZXh0ZW5kcyBTY2VuZUFjdGl2aXR5UHJvcHM+IGltcGxlbWVudHMgU2Vuc2VuU2NlbmVBY3Rpdml0aWVze1xuXG5cblxuICAgIGNvbmZpZz86IFRTY3JlZW5Db25maWc8UHJvcHM+ID0ge30gYXMgVFNjcmVlbkNvbmZpZzxQcm9wcz47XG4gICAgXG4gICAgcHJvcHM/OiBQcm9wcyA9IHt9IGFzIFByb3BzXG5cbiAgICBpc1JlYWR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgXG4gICAgXG4gICAgJHRhZ05hbWU6IHN0cmluZztcbiAgICBcbiAgICAkYXBwZWFyYW5jZT86IFNlbnNlbkFwcGVhcmFuY2UgPSB7fSBhcyBTZW5zZW5BcHBlYXJhbmNlXG5cbiAgICAkZWxlbWVudD86IFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPiA9IHt9IGFzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPjtcbiAgICBcbiAgICAkZW1pdHRlcj86IFNlbnNlbkVtaXR0ZXIgPSB7fSBhcyBTZW5zZW5FbWl0dGVyXG4gICAgXG4gICAgJGtsYXNzPzogQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yID0ge30gYXMgQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yO1xuXG5cblxuICAgICNtb2NrdXA6IHN0cmluZyA9ICcnO1xuICAgIFxuXG5cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVFNjcmVlbkNvbmZpZzxQcm9wcz4pe1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMuY29uZmlnLnByb3BzIHx8IHt9IGFzIFByb3BzXG5cbiAgICAgICAgdGhpcy5jb25maWcuYXBwZWFyYW5jZSA9IHRoaXMuY29uZmlnLmFwcGVhcmFuY2UgfHwge30gYXMgVEFwcGVhcmFuY2VQcm9wc1xuXG4gICAgICAgIHRoaXMuJHRhZ05hbWUgPSBgYWN0aXZpdHktJHsgdGhpcy5jb25maWcubmFtZSB9YFxuXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSB1bmRlZmluZWRcblxuXG5cbiAgICAgICAgdGhpcy4kYXBwZWFyYW5jZSA9IEFwcGVhcmFuY2VTY2VuZUFjdGl2aXR5KCkuYnVuZGxlO1xuXG4gICAgICAgIC8vIHRoaXMuJGFwcGVhcmFuY2UgPSBuZXcgU2Vuc2VuQXBwZWFyYW5jZSgpO1xuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXIgPSBuZXcgU2Vuc2VuRW1pdHRlcigpO1xuXG5cbiAgICAgICAgdGhpc1xuICAgICAgICBcbiAgICAgICAgICAgIC4kZW1pdHRpbmcoKVxuICAgICAgICBcbiAgICAgICAgICAgIC4kY3JlYXRlKClcbiAgICAgICAgXG4gICAgICAgICAgICAuJG1ha2VBcHBlYXJhbmNlKHRoaXMuY29uZmlnLmFwcGVhcmFuY2V8fHt9KVxuXG4gICAgICAgIDtcblxuICAgIH1cbiAgICBcblxuXG5cblxuICAgICRtYWtlQXBwZWFyYW5jZShzZWxlY3RvcnM6IFRBcHBlYXJhbmNlUHJvcHMpe1xuXG4gICAgICAgIHRoaXMuJGFwcGVhcmFuY2U/LnNlbGVjdG9ycyggc2VsZWN0b3JzfHx7fSApO1xuXG4gICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2FwcGVhcmFuY2VSZWFkeScsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuICAgICRtYWtlVGVtcGxhdGUoZWxlbWVudDogU2Vuc2VuSFRNTEVsZW1lbnQ8UHJvcHM+KXtcblxuICAgICAgICBTZW5zZW5UZW1wbGF0ZVxuICAgICAgICBcbiAgICAgICAgICAgIC5Mb2FkKHRoaXMuY29uZmlnPy50ZW1wbGF0ZXx8JycpXG5cbiAgICAgICAgICAgIC50aGVuKHJlcz0+U2Vuc2VuVGVtcGxhdGUuUmVzb2x2ZVJlc3BvbnNlKHJlcykpXG5cbiAgICAgICAgICAgIC50aGVuKGFzeW5jIGRhdGE9PntcblxuICAgICAgICAgICAgICAgIGlmKGRhdGEpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI21vY2t1cCA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZGVlcFJlbmRlcihlbGVtZW50LCAgdGhpcy4jbW9ja3VwKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgICAgIC50aGVuKGFzeW5jIGVsPT57XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBTZW5zZW5TY3JpcHQuUnVuPFByb3BzPihlbGVtZW50LCB0aGlzKVxuXG4gICAgICAgICAgICAgICAgLnRoZW4oc2NlbmU9PntcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZWFkeScsIHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC5jYXRjaChlcj0+e1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZWFkeUZhaWxlZCcsIGVyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIC5jYXRjaChlcj0+e1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbnkgdGVtcGxhdGUgbG9hZGVkJywgZXIpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCd0ZW1wbGF0ZUxvYWRpbmdGYWlsZWQnLCBlcik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG5cblxuXG4gICAgYXN5bmMgJGRlZXBSZW5kZXIoZWxlbWVudDogU2Vuc2VuSFRNTEVsZW1lbnQ8UHJvcHM+LCBkYXRhOiBzdHJpbmcpe1xuXG4gICAgICAgIGNvbnN0IHdpcmVmcmFtZSA9IHRoaXMuJGdldFdpcmVmcmFtZSh0aGlzLmNvbmZpZz8ub3B0aW9ucz8ud2lyZWZyYW1lfHwnYmFzaWMnKVxuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKGRhdGEsICd0ZXh0L2h0bWwnKTtcblxuICAgICAgICBsZXQgb3RoZXJFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZCBwcmVzZXQgRWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGZpbmRIZWFkZXIgPSBmYWxzZTtcblxuICAgICAgICBsZXQgZmluZE1lbnUgPSBmYWxzZTtcblxuICAgICAgICBsZXQgZmluZEJvZHkgPSBmYWxzZTtcblxuXG4gICAgICAgIGxldCBoZWFkZXJGb3VuZDogSFRNTEVsZW1lbnQgPSB7fSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBsZXQgbWVudUZvdW5kOiBIVE1MRWxlbWVudCA9IHt9IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIGxldCBib2R5Rm91bmQ6IEhUTUxFbGVtZW50ID0ge30gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBub3QgcHJlc2V0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIG90aGVyRWxlbWVudHMgPSBPYmplY3QudmFsdWVzKHRlbXBsYXRlLmJvZHkuY2hpbGRyZW4pXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZCBIZWFkZXJcbiAgICAgICAgICovXG4gICAgICAgIC5tYXAoY2hpbGQ9PntcblxuICAgICAgICAgICAgaWYoIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnc2NlbmUtaGVhZGVyJyAmJiBmaW5kQm9keSA9PT0gZmFsc2UgKXsgXG5cbiAgICAgICAgICAgICAgICBoZWFkZXJGb3VuZCA9IGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZpbmRIZWFkZXIgPSB0cnVlOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kIE1lbnVcbiAgICAgICAgICovXG4gICAgICAgIC5tYXAoY2hpbGQ9PntcblxuICAgICAgICAgICAgaWYoIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnc2NlbmUtbWVudScgJiYgZmluZEJvZHkgPT09IGZhbHNlICl7IFxuXG4gICAgICAgICAgICAgICAgbWVudUZvdW5kID0gY2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmluZE1lbnUgPSB0cnVlOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZCBCb2R5XG4gICAgICAgICAqL1xuICAgICAgICAubWFwKGNoaWxkPT57XG5cbiAgICAgICAgICAgIGlmKCBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3NjZW5lLWJvZHknICYmIGZpbmRCb2R5ID09PSBmYWxzZSApeyBcblxuICAgICAgICAgICAgICAgIGJvZHlGb3VuZCA9IGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZpbmRCb2R5ID0gdHJ1ZTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQdXNoIG90aGVyIEVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIC5maWx0ZXIoY2hpbGQ9PiBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgKGZpbmRCb2R5ICYmIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPSAnc2NlbmUtYm9keScpICYmXG5cbiAgICAgICAgICAgIGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPSAnc2NlbmUtaGVhZGVyJyAmJlxuXG4gICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ3NjZW5lLW1lbnUnXG4gICAgICAgICAgICBcbiAgICAgICAgKTtcblxuXG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSBoZWFkZXIgaW4gd2lyZWZyYW1lIGlmIG5vdCBleGlzdHNcbiAgICAgICAgICovXG5cbiAgICAgICAgV2lyZWZyYW1lVGVtcGxhdGVNaXhlcihcbiAgICAgICAgXG4gICAgICAgICAgICB0ZW1wbGF0ZS5ib2R5LFxuICAgICAgICBcbiAgICAgICAgICAgIHdpcmVmcmFtZSxcbiAgICAgICAgXG4gICAgICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgXG4gICAgICAgICAgICBoZWFkZXJGb3VuZCxcbiAgICAgICAgXG4gICAgICAgICAgICBmaW5kSGVhZGVyXG4gICAgICAgIFxuICAgICAgICApKFxuICAgICAgICBcbiAgICAgICAgICAgIHRlbXBsYXRlLmJvZHksXG4gICAgICAgIFxuICAgICAgICAgICAgd2lyZWZyYW1lLFxuICAgICAgICBcbiAgICAgICAgICAgICdtZW51JyxcbiAgICAgICAgXG4gICAgICAgICAgICBtZW51Rm91bmQsXG4gICAgICAgIFxuICAgICAgICAgICAgZmluZE1lbnVcbiAgICAgICAgXG4gICAgICAgICkoXG4gICAgICAgIFxuICAgICAgICAgICAgdGVtcGxhdGUuYm9keSxcbiAgICAgICAgXG4gICAgICAgICAgICB3aXJlZnJhbWUsXG4gICAgICAgIFxuICAgICAgICAgICAgJ2JvZHknLFxuICAgICAgICBcbiAgICAgICAgICAgIGJvZHlGb3VuZCxcbiAgICAgICAgXG4gICAgICAgICAgICBmaW5kQm9keVxuICAgICAgICBcbiAgICAgICAgKVxuXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogV2lyZWZyYW1lIGluamVjdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICBpZih3aXJlZnJhbWUpeyAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBhd2FpdCBPYmplY3QudmFsdWVzKHdpcmVmcmFtZSkucmV2ZXJzZSgpLm1hcChhc3luYyBjaGlsZD0+e1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgU29ja1JlbmRlckVuZ2luZShcblxuICAgICAgICAgICAgICAgICAgICBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhYmlsaXplQ29udGVudChjaGlsZC5vdXRlckhUTUx8fCcnKSB8fCAnJ1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICwgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLCBlbGVtZW50LCBlbGVtZW50LnByb3BzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgLnRoZW4oY29tcGlsYXRlPT57XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBjb21waWxhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC5jYXRjaChlcj0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlbnNlbiBTY2VuZSBBY3Rpdml0eSBmYWlsZWQ6XFxuJywgZXIpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH1cblxuICAgICAgICBpZihvdGhlckVsZW1lbnRzLmxlbmd0aCl7XG5cbiAgICAgICAgICAgIG90aGVyRWxlbWVudHMubWFwKGNoaWxkPT57XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT3RoZXIgRWxlbWVudCcsIGNoaWxkKVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoY2hpbGQpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG5cblxuXG4gICAgJGdldFdpcmVmcmFtZSh0eXBlOiBTY2VuZUFjdGl2aXR5T3B0aW9uc1dpcmVmcmFtZXMpe1xuXG4gICAgICAgIHN3aXRjaCh0eXBlKXtcblxuICAgICAgICAgICAgY2FzZSAnYmFzaWMnOiByZXR1cm4gQWN0aXZpdHlXaXJlZnJhbWUuQmFzaWMoKTtcblxuICAgICAgICAgICAgY2FzZSAnbmF2LWJvdHRvbSc6IHJldHVybiBBY3Rpdml0eVdpcmVmcmFtZS5CYXNpYygpO1xuXG4gICAgICAgICAgICBjYXNlICdmdWxsc2NyZWVuJzogcmV0dXJuIEFjdGl2aXR5V2lyZWZyYW1lLkZ1bGxzY3JlZW4oKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuXG4gICAgfVxuICAgIFxuICAgIFxuXG5cblxuICAgIHJlbmRlcihwcm9wcz86IFByb3BzKXtcblxuICAgICAgICBpZih0aGlzLiRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuICAgIFxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5yZW5kZXIocHJvcHMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZW5kZXInLCB0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgaWYodGhpcy4ka2xhc3Mpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudCA9IG5ldyB0aGlzLiRrbGFzcyh0aGlzLmNvbmZpZz8ucHJvcHMpIGFzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPlxuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVuZGVyKHByb3BzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZW5kZXInLCB0aGlzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBET00gT2JzZXJ2ZXJcbiAgICAgKi9cbiAgICAkbWFrZU9ic2VydmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcblxuICAgICAgICBsZXQgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3Jkcyk9PntcblxuICAgICAgICAgICAgICAgIGlmKHJlY29yZHMpe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChyZWNvcmQ9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ211dGF0aW9uT2JzZXJ2ZWQnLCByZWNvcmQpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbnNPYnNlcnZlZCcsIHJlY29yZHMpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ211dGF0aW9uT2JzZXJ2YXRpb25SZWFkeScsIG9ic2VydmVyICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYnNlcnZlcjtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG5cblxuXG5cblxuICAgICRjcmVhdGUoKXtcblxuICAgICAgICBpZihjdXN0b21FbGVtZW50cy5nZXQodGhpcy4kdGFnTmFtZSkpe1xuXG4gICAgICAgICAgICB0aHJvdyAoYEl0IG5vdCBwb3NzaWJsZSB0byBjcmVhdGUgYSBhY3Rpdml0eSB3aXRoIHRoaXMgbmFtZSBcIiR7IHRoaXMuY29uZmlnPy5uYW1lIH1cIiBhZ2FpbiBgKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBpZighY3VzdG9tRWxlbWVudHMuZ2V0KHRoaXMuJHRhZ05hbWUpKXtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgICAgICAgdGhpcy4ka2xhc3MgPSBjbGFzcyBleHRlbmRzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPntcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHNlbGYucHJvcHNcblxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50ID0gdGhpc1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5pdGlhbGl6ZSgpO1xuICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25zdHJ1Y3QnLCBzZWxmKTtcblxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICBcblxuICAgICAgICAgICAgICAgIHNldFByb3AobmFtZToga2V5b2YgUHJvcHMsIHZhbHVlOiBhbnkpe1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKG5hbWUgaW4gdGhpcy5wcm9wcyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbIG5hbWUgXSA9IHZhbHVlIGFzIFByb3BzWyB0eXBlb2YgbmFtZSBdXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICBzaG93KHByb3BzPzogUHJvcHMpe1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwcm9wcyA9PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5tYXAoZW50cnk9PiB0aGlzLnNldFByb3AoZW50cnlbMF0sIGVudHJ5WzFdKSApXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnc2hvdycsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaGlkZSgpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2hpZGUnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cblxuXG4gICAgICAgICAgICAgICAgcmVuZGVyKHByb3BzPzogUHJvcHMpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLiR0b0F0dHJpYnV0ZXNQcm9wcyhwcm9wc3x8dW5kZWZpbmVkKSB8fCB0aGlzLnByb3BzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNSZWFkeSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICogTG9hZCBUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRtYWtlVGVtcGxhdGUodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJG1ha2VPYnNlcnZlcih0aGlzKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRkZWVwUmVuZGVyKHRoaXMsICBzZWxmLiNtb2NrdXApXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAkaW5pdGlhbGl6ZSgpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluaXRpYWxpemVQcm9wcygpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbml0aWFsaXplRVVpRCgpXG5cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZXVpZCcsIHRoaXMuJEVVaUQpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGAkeyBzZWxmLiRhcHBlYXJhbmNlPy4kVWlEIH1gKVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvLyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ29ic2VydmVkQXR0cmlidXRlcycsIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gKHR5cGVvZiBzZWxmLnByb3BzID09ICdvYmplY3QnKSA/IE9iamVjdC5rZXlzKHNlbGYucHJvcHMpIDogW107XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKXtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2Nvbm5lY3RlZCcsIHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25uZWN0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYWRvcHRlZENhbGxiYWNrKCl7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2Fkb3B0ZWQnLCB0aGlzKVxuXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Fkb3B0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKXtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignZGlzY29ubmVjdGVkJywgdGhpcylcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdkaXNjb25uZWN0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWU6IHN0cmluZywgdmFsdWU6c3RyaW5nLCBvbGRWYWx1ZTpzdHJpbmcpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignYXR0cmlidXRlQ2hhbmdlZCcsIHRoaXMpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcm9wKG5hbWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdwcm9wc0NoYW5nZWQnLCB7IG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0aGlzLiR0YWdOYW1lLCB0aGlzLiRrbGFzcyApXG4gICAgXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnZWxlbWVudFJlYWR5JywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cblxuXG5cblxuXG4gICAgJGVtaXR0aW5nKCl7XG5cblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdyZW5kZXInLCAgKHNlbGYpPT57XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgbm93Jywgc2VsZilcblxuICAgICAgICAgICAgaWYoIXRoaXMuaXNSZWFkeSl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBlYXJhbmNlPy5tb3VudCgpXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gRW1pdHRlciBMaXN0ZW5lciA6IEJlZ2luXG4gICAgICAgICAqL1xuXG4gICAgICAgICBpZih0aGlzLmNvbmZpZz8uZW1pdCl7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uZmlnLmVtaXQpLm1hcChlPT57XG5cbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgZVsxXSA9PSAnZnVuY3Rpb24nKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oZVswXSwgZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVbMV0uYXBwbHkodGhpcywgW2FyZ3VtZW50c1swXV0pIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBFbWl0dGVyIExpc3RlbmVyIDogRW5kXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG4gICAgXG4gICAgXG5cbn1cblxuXG5cbiJdfQ==