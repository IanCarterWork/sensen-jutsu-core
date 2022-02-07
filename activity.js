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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFFdEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUxQyxPQUFPLEVBQXFCLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLDJCQUEyQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUdoRSxpQkFBaUIsRUFBRSxDQUFBO0FBSW5CLE1BQU0sVUFBVSxzQkFBc0IsQ0FFbEMsUUFBcUIsRUFFckIsU0FBNkMsRUFFN0MsSUFBa0MsRUFFbEMsS0FBa0IsRUFFbEIsUUFBaUIsS0FBSztJQUl0Qjs7T0FFRztJQUNILElBQUcsS0FBSyxJQUFJLEtBQUssRUFBQztRQUVkLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRTtZQUV4QyxJQUFHLFNBQVMsRUFBQztnQkFFVCxJQUFHLFNBQVMsQ0FBRSxJQUFJLENBQUUsRUFBQztvQkFFakIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFFLElBQUksQ0FBaUIsQ0FBQTtvQkFFaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFdEIsT0FBTyxLQUFLLENBQUM7aUJBRWhCO2FBRUo7UUFFTCxDQUFDLENBQUMsQ0FBQTtLQUVMO0lBRUQsSUFBRyxDQUFDLEtBQUssRUFBQztRQUVOLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUM7WUFFeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUUvQixNQUFNLENBQUMsS0FBSyxDQUFBLEVBQUU7Z0JBRVgsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLFNBQVUsSUFBSyxFQUFFLENBQUE7WUFFM0QsQ0FBQyxDQUFDO2lCQUVELEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRTtnQkFFUixTQUFTLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBRSxLQUFLLENBQUUsQ0FBQTtnQkFFdkMsT0FBTyxLQUFvQixDQUFDO1lBRWhDLENBQUMsQ0FBQyxDQUFBO1NBRUw7S0FFSjtJQUVELE9BQU8sc0JBQXNCLENBQUM7QUFFbEMsQ0FBQztBQXVDRDs7R0FFRztBQUVILE1BQU0sT0FBTyxhQUFhO0lBNEJ0QixZQUFZLE1BQTRCO1FBeEJ4QyxXQUFNLEdBQTBCLEVBQTBCLENBQUM7UUFFM0QsVUFBSyxHQUFXLEVBQVcsQ0FBQTtRQUUzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBS3pCLGdCQUFXLEdBQXNCLEVBQXNCLENBQUE7UUFFdkQsYUFBUSxHQUE4QixFQUE4QixDQUFDO1FBRXJFLGFBQVEsR0FBbUIsRUFBbUIsQ0FBQTtRQUU5QyxXQUFNLEdBQThCLEVBQThCLENBQUM7UUFJbkUsZ0NBQWtCLEVBQUUsRUFBQztRQU9qQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUE7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFXLENBQUE7UUFFN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBc0IsQ0FBQTtRQUV6RSxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFLLEVBQUUsQ0FBQTtRQUVoRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQTtRQUl6QixJQUFJLENBQUMsV0FBVyxHQUFHLHVCQUF1QixFQUFFLENBQUMsTUFBTSxDQUFDO1FBRXBELDZDQUE2QztRQUU3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFHcEMsSUFBSTthQUVDLFNBQVMsRUFBRTthQUVYLE9BQU8sRUFBRTthQUVULGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBRSxFQUFFLENBQUMsQ0FFL0M7SUFFTCxDQUFDO0lBTUQsZUFBZSxDQUFDLFNBQTJCO1FBRXZDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFFLFNBQVMsSUFBRSxFQUFFLENBQUUsQ0FBQztRQUU3QyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFakQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQU1ELGFBQWEsQ0FBQyxPQUFpQztRQUUzQyxjQUFjO2FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxJQUFFLEVBQUUsQ0FBQzthQUUvQixJQUFJLENBQUMsR0FBRyxDQUFBLEVBQUUsQ0FBQSxjQUFjLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBRTlDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxFQUFBLEVBQUU7WUFFZCxJQUFHLElBQUksRUFBQztnQkFFSix1QkFBQSxJQUFJLHlCQUFXLElBQUksTUFBQSxDQUFDO2dCQUVwQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRyx1QkFBQSxJQUFJLDZCQUFRLENBQUMsQ0FBQzthQUU1QztZQUVELE9BQU8sT0FBTyxDQUFBO1FBRWxCLENBQUMsQ0FBQzthQUlELElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFBLEVBQUU7WUFFWixNQUFNLFlBQVksQ0FBQyxHQUFHLENBQVEsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFFM0MsSUFBSSxDQUFDLEtBQUssQ0FBQSxFQUFFO2dCQUVULG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNDLENBQUMsQ0FBQztpQkFFRCxLQUFLLENBQUMsRUFBRSxDQUFBLEVBQUU7Z0JBRVAsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFL0MsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDLENBQUM7YUFHRCxLQUFLLENBQUMsRUFBRSxDQUFBLEVBQUU7WUFFUCxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBRXZDLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV6RCxDQUFDLENBQUMsQ0FBQTtRQUVOLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFLRCxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQWlDLEVBQUUsSUFBWTtRQUU3RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsSUFBRSxPQUFPLENBQUMsQ0FBQTtRQUU5RSxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXRFLElBQUksYUFBYSxHQUFrQixFQUFFLENBQUE7UUFHckM7O1dBRUc7UUFDSCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFdkIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXJCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUdyQixJQUFJLFdBQVcsR0FBZ0IsRUFBaUIsQ0FBQztRQUVqRCxJQUFJLFNBQVMsR0FBZ0IsRUFBaUIsQ0FBQztRQUUvQyxJQUFJLFNBQVMsR0FBZ0IsRUFBaUIsQ0FBQztRQUkvQzs7V0FFRztRQUNILGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBR3JEOztlQUVHO2FBQ0YsR0FBRyxDQUFDLEtBQUssQ0FBQSxFQUFFO1lBRVIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLGNBQWMsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO2dCQUVyRSxXQUFXLEdBQUcsS0FBb0IsQ0FBQztnQkFFbkMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUVyQjtZQUVELE9BQU8sS0FBb0IsQ0FBQztRQUVoQyxDQUFDLENBQUM7WUFHRjs7ZUFFRzthQUNGLEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRTtZQUVSLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtnQkFFbkUsU0FBUyxHQUFHLEtBQW9CLENBQUM7Z0JBRWpDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFFbkI7WUFFRCxPQUFPLEtBQW9CLENBQUM7UUFFaEMsQ0FBQyxDQUFDO1lBSUY7O2VBRUc7YUFDRixHQUFHLENBQUMsS0FBSyxDQUFBLEVBQUU7WUFFUixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksWUFBWSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBRW5FLFNBQVMsR0FBRyxLQUFvQixDQUFDO2dCQUVqQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBRW5CO1lBRUQsT0FBTyxLQUFvQixDQUFDO1FBRWhDLENBQUMsQ0FBQztZQUdGOztlQUVHO2FBQ0YsTUFBTSxDQUFDLEtBQUssQ0FBQSxFQUFFLENBRVgsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxZQUFZLENBQUM7WUFFekQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxjQUFjO1lBRTdDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksWUFBWSxDQUU5QyxDQUFDO1FBSUY7O1dBRUc7UUFFSCxzQkFBc0IsQ0FFbEIsUUFBUSxDQUFDLElBQUksRUFFYixTQUFTLEVBRVQsUUFBUSxFQUVSLFdBQVcsRUFFWCxVQUFVLENBRWIsQ0FFRyxRQUFRLENBQUMsSUFBSSxFQUViLFNBQVMsRUFFVCxNQUFNLEVBRU4sU0FBUyxFQUVULFFBQVEsQ0FFWCxDQUVHLFFBQVEsQ0FBQyxJQUFJLEVBRWIsU0FBUyxFQUVULE1BQU0sRUFFTixTQUFTLEVBRVQsUUFBUSxDQUVYLENBQUE7UUFJRDs7V0FFRztRQUVILElBQUcsU0FBUyxFQUFDO1lBRVQsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFBLEVBQUU7Z0JBRXRELE1BQU0sZ0JBQWdCLENBRWxCLDJCQUEyQixDQUV2Qix1QkFBdUIsQ0FFbkIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBRXpDLEtBQUssQ0FFVixFQUVDLEtBQUssQ0FDVixFQUVDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUUzQjtxQkFFQSxJQUFJLENBQUMsU0FBUyxDQUFBLEVBQUU7b0JBRWIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQTtnQkFFdkQsQ0FBQyxDQUFDO3FCQUVELEtBQUssQ0FBQyxFQUFFLENBQUEsRUFBRTtvQkFFUCxPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO2dCQUV4RCxDQUFDLENBQUMsQ0FBQTtZQUVOLENBQUMsQ0FBQyxDQUFBO1NBR0w7UUFFRCxJQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUM7WUFFcEIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUEsRUFBRTtnQkFFckIsc0NBQXNDO2dCQUV0QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBRXpCLENBQUMsQ0FBQyxDQUFBO1NBRUw7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBTUQsYUFBYSxDQUFDLElBQW9DO1FBRTlDLFFBQU8sSUFBSSxFQUFDO1lBRVIsS0FBSyxPQUFPLENBQUMsQ0FBQyxPQUFPLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBRS9DLEtBQUssWUFBWSxDQUFDLENBQUMsT0FBTyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVwRCxLQUFLLFlBQVksQ0FBQyxDQUFDLE9BQU8saUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7U0FFNUQ7UUFFRCxPQUFPLFNBQVMsQ0FBQTtJQUVwQixDQUFDO0lBTUQsTUFBTSxDQUFDLEtBQWE7UUFFaEIsSUFBRyxJQUFJLENBQUMsUUFBUSxZQUFZLFdBQVcsRUFBQztZQUVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUUzQixtQkFBbUI7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBRXZCO2FBRUc7WUFFQSxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7Z0JBRVgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQTZCLENBQUE7Z0JBRS9FLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUUzQixtQkFBbUI7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFFdkI7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFLRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxPQUFvQjtRQUU5QixJQUFJLFFBQXNDLENBQUM7UUFFM0MsSUFBRyxPQUFPLFlBQVksV0FBVyxFQUFDO1lBRTlCLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLENBQUMsT0FBTyxFQUFDLEVBQUU7Z0JBRXZDLElBQUcsT0FBTyxFQUFDO29CQUVQLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBLEVBQUU7d0JBRXBCLG1CQUFtQjt3QkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRXhELENBQUMsQ0FBQyxDQUFBO29CQUVGLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBRXpEO1lBR0wsQ0FBQyxDQUFDLENBQUE7WUFFRixRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQztnQkFFckIsU0FBUyxFQUFFLElBQUk7Z0JBRWYsT0FBTyxFQUFFLElBQUk7Z0JBRWIsVUFBVSxFQUFFLElBQUk7Z0JBRWhCLGFBQWEsRUFBRSxJQUFJO2dCQUVuQixxQkFBcUIsRUFBRSxJQUFJO2dCQUUzQixpQkFBaUIsRUFBRSxJQUFJO2FBRTFCLENBQUMsQ0FBQTtZQUVGLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxRQUFRLENBQUUsQ0FBQztTQUVsRTtRQUVELE9BQU8sUUFBUSxDQUFDO0lBRXBCLENBQUM7SUFRRCxPQUFPO1FBRUgsSUFBRyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQztZQUVqQyxNQUFNLENBQUMsd0RBQXlELElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSyxVQUFVLENBQUMsQ0FBQTtTQUVoRztRQUVELElBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQztZQUVsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7WUFHbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFNLFNBQVEsaUJBQXdCO2dCQUVoRCxZQUFZLEtBQVk7b0JBRXBCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFBO29CQUVoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtvQkFFcEI7O3VCQUVHO29CQUNILElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFHbkIsbUJBQW1CO29CQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRy9DLENBQUM7Z0JBS0QsT0FBTyxDQUFDLElBQWlCLEVBQUUsS0FBVTtvQkFFakMsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQzt3QkFFbEIsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsR0FBRyxLQUE2QixDQUFBO3FCQUVyRDtvQkFFRCxPQUFPLElBQUksQ0FBQztnQkFFaEIsQ0FBQztnQkFNRCxJQUFJLENBQUMsS0FBYTtvQkFFZCxJQUFHLE9BQU8sS0FBSyxJQUFJLFFBQVEsRUFBQzt3QkFFeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFBO3FCQUV2RTtvQkFFRCxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFdEMsT0FBTyxJQUFJLENBQUM7Z0JBRWhCLENBQUM7Z0JBTUQsSUFBSTtvQkFFQSxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFFdEMsT0FBTyxJQUFJLENBQUM7Z0JBRWhCLENBQUM7Z0JBS0QsTUFBTSxDQUFDLEtBQWE7b0JBRWhCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssSUFBRSxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFBO29CQUVwRSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQzt3QkFFYjs7MkJBRUc7d0JBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7cUJBRXZCO3lCQUVHO3dCQUVBLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO3dCQUVuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRyx1QkFBQSxJQUFJLDZCQUFRLENBQUMsQ0FBQTtxQkFFeEM7b0JBRUQsT0FBTyxJQUFJLENBQUM7Z0JBRWhCLENBQUM7Z0JBS0QsV0FBVztvQkFFUCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtvQkFFdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO29CQUd0QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBRXJDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFLLEVBQUUsQ0FBQyxDQUFBO29CQUdqRCxzREFBc0Q7b0JBRXRELHVCQUF1QjtvQkFDdkIsaUZBQWlGO29CQUNqRixRQUFRO29CQUVSLEtBQUs7b0JBRUwsT0FBTyxJQUFJLENBQUM7Z0JBRWhCLENBQUM7Z0JBR0QsaUJBQWlCO29CQUViLGtDQUFrQztvQkFFbEMsbUJBQW1CO29CQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRS9DLENBQUM7Z0JBR0QsZUFBZTtvQkFFWCxnQ0FBZ0M7b0JBRWhDLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU3QyxDQUFDO2dCQUdELG9CQUFvQjtvQkFFaEIscUNBQXFDO29CQUVyQyxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFbEQsQ0FBQztnQkFHRCx3QkFBd0IsQ0FBQyxJQUFZLEVBQUUsS0FBWSxFQUFFLFFBQWU7b0JBRWhFLHlDQUF5QztvQkFFekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRTFCLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUV2RSxDQUFDO2FBR0osQ0FBQTtZQUVELGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUE7U0FFckQ7UUFHRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlDLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFPRCxTQUFTO1FBR0wsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQWMsUUFBUSxFQUFHLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFFbEQscUNBQXFDO1lBRXJDLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUViLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUE7YUFFNUI7UUFHTCxDQUFDLENBQUMsQ0FBQTtRQUdGOztXQUVHO1FBRUYsSUFBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBQztZQUVsQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxFQUFFO2dCQUVwQyxJQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBQztvQkFFekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUVsQixJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBRXhCLGFBQWE7d0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUVwQyxDQUFDLENBQUMsQ0FBQTtpQkFFTDtZQUVMLENBQUMsQ0FBQyxDQUFBO1NBRUw7UUFFRDs7V0FFRztRQUdILE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7Q0FJSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgU2Vuc2VuSFRNTEVsZW1lbnQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgU2Vuc2VuQXBwZWFyYW5jZSwgVEFwcGVhcmFuY2VQcm9wcyB9IGZyb20gXCIuL2FwcGVhcmFuY2VcIjtcbmltcG9ydCB7IFNlbnNlbkVtaXR0ZXIgfSBmcm9tIFwiLi9lbWl0dGVyXCI7XG5pbXBvcnQgeyBTY2VuZUFjdGl2aXR5T3B0aW9uc1dpcmVmcmFtZXMsIFNjZW5lQWN0aXZpdHlQcm9wcywgVFNjcmVlbkNvbmZpZyB9IGZyb20gXCIuL2luZGV4LnRcIjtcbmltcG9ydCB7IFNjZW5lQWN0aXZpdHlCb2R5LCB1c2VTY3JlZW5FbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzL2FjdGl2aXR5XCI7XG5pbXBvcnQgeyBTZW5zZW5UZW1wbGF0ZSB9IGZyb20gXCIuL3RlbXBsYXRlXCI7XG5pbXBvcnQgeyBBY3Rpdml0eVdpcmVmcmFtZSwgQWN0aXZpdHlXaXJlZnJhbWVTdGF0ZSB9IGZyb20gXCIuL3dpcmVmcmFtZS9hY3Rpdml0eVwiO1xuaW1wb3J0IHsgU2Vuc2VuU2NyaXB0IH0gZnJvbSBcIi4vc2NyaXB0XCI7XG5pbXBvcnQgeyBTb2NrUmVuZGVyRW5naW5lIH0gZnJvbSBcIi4vY29tcGlsYXRlXCI7XG5pbXBvcnQgeyBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbiwgU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuaW1wb3J0IHsgU3RhYmlsaXplQ29udGVudCB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgQXBwZWFyYW5jZVNjZW5lQWN0aXZpdHkgfSBmcm9tIFwiLi9hcHBlYXJhbmNlL2FjdGl2aXR5XCI7XG5cblxudXNlU2NyZWVuRWxlbWVudHMoKVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFdpcmVmcmFtZVRlbXBsYXRlTWl4ZXIoXG5cbiAgICB0ZW1wbGF0ZTogSFRNTEVsZW1lbnQsIFxuICAgIFxuICAgIHdpcmVmcmFtZTogQWN0aXZpdHlXaXJlZnJhbWVTdGF0ZSB8IHVuZGVmaW5lZCwgXG5cbiAgICBzbG90OiBrZXlvZiBBY3Rpdml0eVdpcmVmcmFtZVN0YXRlICxcbiAgICBcbiAgICBjbG9uZTogSFRNTEVsZW1lbnQsIFxuICAgIFxuICAgIGZvdW5kOiBib29sZWFuID0gZmFsc2VcbiAgICBcbil7XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZFxuICAgICAqL1xuICAgIGlmKGZvdW5kICYmIGNsb25lKXtcblxuICAgICAgICBPYmplY3QudmFsdWVzKGNsb25lPy5jaGlsZE5vZGVzKS5tYXAoY2hpbGQ9PntcblxuICAgICAgICAgICAgaWYod2lyZWZyYW1lKXtcblxuICAgICAgICAgICAgICAgIGlmKHdpcmVmcmFtZVsgc2xvdCBdKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gd2lyZWZyYW1lWyBzbG90IF0gYXMgSFRNTEVsZW1lbnRcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoY2hpbGQpOyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBpZighZm91bmQpe1xuXG4gICAgICAgIGlmKHRlbXBsYXRlLmNoaWxkcmVuLmxlbmd0aCl7XG5cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGVtcGxhdGUuY2hpbGRyZW4pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5maWx0ZXIoY2hpbGQ9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gYHNjZW5lLSR7IHNsb3QgfWBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm1hcChjaGlsZD0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZT8uaGVhZGVyPy5hcHBlbmRDaGlsZCggY2hpbGQgKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBXaXJlZnJhbWVUZW1wbGF0ZU1peGVyO1xuICAgIFxufVxuXG5cblxuLyoqXG4gKiBTY2VuZSBBY3Rpdml0eSBQYXJlbnRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTZW5zZW5TY2VuZUFjdGl2aXRpZXN7XG5cblxuICAgIGNvbmZpZz86IG9iamVjdDtcbiAgICBcbiAgICBwcm9wcz86IFNjZW5lQWN0aXZpdHlQcm9wcztcblxuICAgIGlzUmVhZHk6IGJvb2xlYW47XG4gICAgXG4gICAgXG4gICAgJHRhZ05hbWU6IHN0cmluZztcbiAgICBcbiAgICAkYXBwZWFyYW5jZT86IFNlbnNlbkFwcGVhcmFuY2U7XG5cbiAgICAkZWxlbWVudD86IFNlbnNlbkhUTUxFbGVtZW50PFNjZW5lQWN0aXZpdHlQcm9wcz47XG4gICAgXG4gICAgJGVtaXR0ZXI/OiBTZW5zZW5FbWl0dGVyO1xuICAgIFxuICAgICRrbGFzcz86IEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvcjtcblxuXG4gICAgJG1ha2VBcHBlYXJhbmNlIDogKHNlbGVjdG9yczogVEFwcGVhcmFuY2VQcm9wcykgPT4gdGhpc1xuXG4gICAgJG1ha2VUZW1wbGF0ZSA6IEZ1bmN0aW9uO1xuXG4gICAgJGdldFdpcmVmcmFtZSA6IEZ1bmN0aW9uO1xuXG59XG5cblxuXG5cbi8qKlxuICogU2Vuc2VuIFNjcmVlblxuICovXG5cbmV4cG9ydCBjbGFzcyBTY2VuZUFjdGl2aXR5PFByb3BzIGV4dGVuZHMgU2NlbmVBY3Rpdml0eVByb3BzPiBpbXBsZW1lbnRzIFNlbnNlblNjZW5lQWN0aXZpdGllc3tcblxuXG5cbiAgICBjb25maWc/OiBUU2NyZWVuQ29uZmlnPFByb3BzPiA9IHt9IGFzIFRTY3JlZW5Db25maWc8UHJvcHM+O1xuICAgIFxuICAgIHByb3BzPzogUHJvcHMgPSB7fSBhcyBQcm9wc1xuXG4gICAgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIFxuICAgIFxuICAgICR0YWdOYW1lOiBzdHJpbmc7XG4gICAgXG4gICAgJGFwcGVhcmFuY2U/OiBTZW5zZW5BcHBlYXJhbmNlID0ge30gYXMgU2Vuc2VuQXBwZWFyYW5jZVxuXG4gICAgJGVsZW1lbnQ/OiBTZW5zZW5IVE1MRWxlbWVudDxQcm9wcz4gPSB7fSBhcyBTZW5zZW5IVE1MRWxlbWVudDxQcm9wcz47XG4gICAgXG4gICAgJGVtaXR0ZXI/OiBTZW5zZW5FbWl0dGVyID0ge30gYXMgU2Vuc2VuRW1pdHRlclxuICAgIFxuICAgICRrbGFzcz86IEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvciA9IHt9IGFzIEN1c3RvbUVsZW1lbnRDb25zdHJ1Y3RvcjtcblxuXG5cbiAgICAjbW9ja3VwOiBzdHJpbmcgPSAnJztcbiAgICBcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRTY3JlZW5Db25maWc8UHJvcHM+KXtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fVxuXG4gICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLmNvbmZpZy5wcm9wcyB8fCB7fSBhcyBQcm9wc1xuXG4gICAgICAgIHRoaXMuY29uZmlnLmFwcGVhcmFuY2UgPSB0aGlzLmNvbmZpZy5hcHBlYXJhbmNlIHx8IHt9IGFzIFRBcHBlYXJhbmNlUHJvcHNcblxuICAgICAgICB0aGlzLiR0YWdOYW1lID0gYGFjdGl2aXR5LSR7IHRoaXMuY29uZmlnLm5hbWUgfWBcblxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gdW5kZWZpbmVkXG5cblxuXG4gICAgICAgIHRoaXMuJGFwcGVhcmFuY2UgPSBBcHBlYXJhbmNlU2NlbmVBY3Rpdml0eSgpLmJ1bmRsZTtcblxuICAgICAgICAvLyB0aGlzLiRhcHBlYXJhbmNlID0gbmV3IFNlbnNlbkFwcGVhcmFuY2UoKTtcblxuICAgICAgICB0aGlzLiRlbWl0dGVyID0gbmV3IFNlbnNlbkVtaXR0ZXIoKTtcblxuXG4gICAgICAgIHRoaXNcbiAgICAgICAgXG4gICAgICAgICAgICAuJGVtaXR0aW5nKClcbiAgICAgICAgXG4gICAgICAgICAgICAuJGNyZWF0ZSgpXG4gICAgICAgIFxuICAgICAgICAgICAgLiRtYWtlQXBwZWFyYW5jZSh0aGlzLmNvbmZpZy5hcHBlYXJhbmNlfHx7fSlcblxuICAgICAgICA7XG5cbiAgICB9XG4gICAgXG5cblxuXG5cbiAgICAkbWFrZUFwcGVhcmFuY2Uoc2VsZWN0b3JzOiBUQXBwZWFyYW5jZVByb3BzKXtcblxuICAgICAgICB0aGlzLiRhcHBlYXJhbmNlPy5zZWxlY3RvcnMoIHNlbGVjdG9yc3x8e30gKTtcblxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdhcHBlYXJhbmNlUmVhZHknLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG5cbiAgICAkbWFrZVRlbXBsYXRlKGVsZW1lbnQ6IFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPil7XG5cbiAgICAgICAgU2Vuc2VuVGVtcGxhdGVcbiAgICAgICAgXG4gICAgICAgICAgICAuTG9hZCh0aGlzLmNvbmZpZz8udGVtcGxhdGV8fCcnKVxuXG4gICAgICAgICAgICAudGhlbihyZXM9PlNlbnNlblRlbXBsYXRlLlJlc29sdmVSZXNwb25zZShyZXMpKVxuXG4gICAgICAgICAgICAudGhlbihhc3luYyBkYXRhPT57XG5cbiAgICAgICAgICAgICAgICBpZihkYXRhKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNtb2NrdXAgPSBkYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGRlZXBSZW5kZXIoZWxlbWVudCwgIHRoaXMuI21vY2t1cCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG5cblxuXG4gICAgICAgICAgICAudGhlbihhc3luYyBlbD0+e1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgU2Vuc2VuU2NyaXB0LlJ1bjxQcm9wcz4oZWxlbWVudCwgdGhpcylcblxuICAgICAgICAgICAgICAgIC50aGVuKHNjZW5lPT57XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncmVhZHknLCB0aGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAuY2F0Y2goZXI9PntcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncmVhZHlGYWlsZWQnLCBlcik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAuY2F0Y2goZXI9PntcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW55IHRlbXBsYXRlIGxvYWRlZCcsIGVyKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgndGVtcGxhdGVMb2FkaW5nRmFpbGVkJywgZXIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuXG5cblxuICAgIGFzeW5jICRkZWVwUmVuZGVyKGVsZW1lbnQ6IFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPiwgZGF0YTogc3RyaW5nKXtcblxuICAgICAgICBjb25zdCB3aXJlZnJhbWUgPSB0aGlzLiRnZXRXaXJlZnJhbWUodGhpcy5jb25maWc/Lm9wdGlvbnM/LndpcmVmcmFtZXx8J2Jhc2ljJylcblxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhkYXRhLCAndGV4dC9odG1sJyk7XG5cbiAgICAgICAgbGV0IG90aGVyRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmQgcHJlc2V0IEVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGxldCBmaW5kSGVhZGVyID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGZpbmRNZW51ID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGZpbmRCb2R5ID0gZmFsc2U7XG5cblxuICAgICAgICBsZXQgaGVhZGVyRm91bmQ6IEhUTUxFbGVtZW50ID0ge30gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgbGV0IG1lbnVGb3VuZDogSFRNTEVsZW1lbnQgPSB7fSBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgICBsZXQgYm9keUZvdW5kOiBIVE1MRWxlbWVudCA9IHt9IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgbm90IHByZXNldCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBvdGhlckVsZW1lbnRzID0gT2JqZWN0LnZhbHVlcyh0ZW1wbGF0ZS5ib2R5LmNoaWxkcmVuKVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmQgSGVhZGVyXG4gICAgICAgICAqL1xuICAgICAgICAubWFwKGNoaWxkPT57XG5cbiAgICAgICAgICAgIGlmKCBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3NjZW5lLWhlYWRlcicgJiYgZmluZEJvZHkgPT09IGZhbHNlICl7IFxuXG4gICAgICAgICAgICAgICAgaGVhZGVyRm91bmQgPSBjaGlsZCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmaW5kSGVhZGVyID0gdHJ1ZTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZCBNZW51XG4gICAgICAgICAqL1xuICAgICAgICAubWFwKGNoaWxkPT57XG5cbiAgICAgICAgICAgIGlmKCBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3NjZW5lLW1lbnUnICYmIGZpbmRCb2R5ID09PSBmYWxzZSApeyBcblxuICAgICAgICAgICAgICAgIG1lbnVGb3VuZCA9IGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZpbmRNZW51ID0gdHJ1ZTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpbmQgQm9keVxuICAgICAgICAgKi9cbiAgICAgICAgLm1hcChjaGlsZD0+e1xuXG4gICAgICAgICAgICBpZiggY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09ICdzY2VuZS1ib2R5JyAmJiBmaW5kQm9keSA9PT0gZmFsc2UgKXsgXG5cbiAgICAgICAgICAgICAgICBib2R5Rm91bmQgPSBjaGlsZCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmaW5kQm9keSA9IHRydWU7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHVzaCBvdGhlciBFbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICAuZmlsdGVyKGNoaWxkPT4gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIChmaW5kQm9keSAmJiBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ3NjZW5lLWJvZHknKSAmJlxuXG4gICAgICAgICAgICBjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ3NjZW5lLWhlYWRlcicgJiZcblxuICAgICAgICAgICAgY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdzY2VuZS1tZW51J1xuICAgICAgICAgICAgXG4gICAgICAgICk7XG5cblxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1ha2UgaGVhZGVyIGluIHdpcmVmcmFtZSBpZiBub3QgZXhpc3RzXG4gICAgICAgICAqL1xuXG4gICAgICAgIFdpcmVmcmFtZVRlbXBsYXRlTWl4ZXIoXG4gICAgICAgIFxuICAgICAgICAgICAgdGVtcGxhdGUuYm9keSxcbiAgICAgICAgXG4gICAgICAgICAgICB3aXJlZnJhbWUsXG4gICAgICAgIFxuICAgICAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgIFxuICAgICAgICAgICAgaGVhZGVyRm91bmQsXG4gICAgICAgIFxuICAgICAgICAgICAgZmluZEhlYWRlclxuICAgICAgICBcbiAgICAgICAgKShcbiAgICAgICAgXG4gICAgICAgICAgICB0ZW1wbGF0ZS5ib2R5LFxuICAgICAgICBcbiAgICAgICAgICAgIHdpcmVmcmFtZSxcbiAgICAgICAgXG4gICAgICAgICAgICAnbWVudScsXG4gICAgICAgIFxuICAgICAgICAgICAgbWVudUZvdW5kLFxuICAgICAgICBcbiAgICAgICAgICAgIGZpbmRNZW51XG4gICAgICAgIFxuICAgICAgICApKFxuICAgICAgICBcbiAgICAgICAgICAgIHRlbXBsYXRlLmJvZHksXG4gICAgICAgIFxuICAgICAgICAgICAgd2lyZWZyYW1lLFxuICAgICAgICBcbiAgICAgICAgICAgICdib2R5JyxcbiAgICAgICAgXG4gICAgICAgICAgICBib2R5Rm91bmQsXG4gICAgICAgIFxuICAgICAgICAgICAgZmluZEJvZHlcbiAgICAgICAgXG4gICAgICAgIClcblxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdpcmVmcmFtZSBpbmplY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgaWYod2lyZWZyYW1lKXsgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgYXdhaXQgT2JqZWN0LnZhbHVlcyh3aXJlZnJhbWUpLnJldmVyc2UoKS5tYXAoYXN5bmMgY2hpbGQ9PntcblxuICAgICAgICAgICAgICAgIGF3YWl0IFNvY2tSZW5kZXJFbmdpbmUoXG5cbiAgICAgICAgICAgICAgICAgICAgU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YWJpbGl6ZUNvbnRlbnQoY2hpbGQub3V0ZXJIVE1MfHwnJykgfHwgJydcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsIGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICwgZWxlbWVudCwgZWxlbWVudC5wcm9wc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIC50aGVuKGNvbXBpbGF0ZT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgY29tcGlsYXRlKVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAuY2F0Y2goZXI9PntcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTZW5zZW4gU2NlbmUgQWN0aXZpdHkgZmFpbGVkOlxcbicsIGVyKVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYob3RoZXJFbGVtZW50cy5sZW5ndGgpe1xuXG4gICAgICAgICAgICBvdGhlckVsZW1lbnRzLm1hcChjaGlsZD0+e1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ090aGVyIEVsZW1lbnQnLCBjaGlsZClcblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGNoaWxkKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuXG5cblxuICAgICRnZXRXaXJlZnJhbWUodHlwZTogU2NlbmVBY3Rpdml0eU9wdGlvbnNXaXJlZnJhbWVzKXtcblxuICAgICAgICBzd2l0Y2godHlwZSl7XG5cbiAgICAgICAgICAgIGNhc2UgJ2Jhc2ljJzogcmV0dXJuIEFjdGl2aXR5V2lyZWZyYW1lLkJhc2ljKCk7XG5cbiAgICAgICAgICAgIGNhc2UgJ25hdi1ib3R0b20nOiByZXR1cm4gQWN0aXZpdHlXaXJlZnJhbWUuQmFzaWMoKTtcblxuICAgICAgICAgICAgY2FzZSAnZnVsbHNjcmVlbic6IHJldHVybiBBY3Rpdml0eVdpcmVmcmFtZS5GdWxsc2NyZWVuKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcblxuICAgIH1cbiAgICBcbiAgICBcblxuXG5cbiAgICByZW5kZXIocHJvcHM/OiBQcm9wcyl7XG5cbiAgICAgICAgaWYodGhpcy4kZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcbiAgICBcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVuZGVyKHByb3BzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncmVuZGVyJywgdGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuJGtsYXNzKXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQgPSBuZXcgdGhpcy4ka2xhc3ModGhpcy5jb25maWc/LnByb3BzKSBhcyBTZW5zZW5IVE1MRWxlbWVudDxQcm9wcz5cbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnJlbmRlcihwcm9wcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncmVuZGVyJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICogRE9NIE9ic2VydmVyXG4gICAgICovXG4gICAgJG1ha2VPYnNlcnZlcihlbGVtZW50OiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgbGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpPT57XG5cbiAgICAgICAgICAgICAgICBpZihyZWNvcmRzKXtcblxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzLmZvckVhY2gocmVjb3JkPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbk9ic2VydmVkJywgcmVjb3JkKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25zT2JzZXJ2ZWQnLCByZWNvcmRzKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQse1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbk9ic2VydmF0aW9uUmVhZHknLCBvYnNlcnZlciApO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuXG5cblxuXG5cbiAgICAkY3JlYXRlKCl7XG5cbiAgICAgICAgaWYoY3VzdG9tRWxlbWVudHMuZ2V0KHRoaXMuJHRhZ05hbWUpKXtcblxuICAgICAgICAgICAgdGhyb3cgKGBJdCBub3QgcG9zc2libGUgdG8gY3JlYXRlIGEgYWN0aXZpdHkgd2l0aCB0aGlzIG5hbWUgXCIkeyB0aGlzLmNvbmZpZz8ubmFtZSB9XCIgYWdhaW4gYClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWN1c3RvbUVsZW1lbnRzLmdldCh0aGlzLiR0YWdOYW1lKSl7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgICAgIHRoaXMuJGtsYXNzID0gY2xhc3MgZXh0ZW5kcyBTZW5zZW5IVE1MRWxlbWVudDxQcm9wcz57XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKXtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCBzZWxmLnByb3BzXG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudCA9IHRoaXNcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogSW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGluaXRpYWxpemUoKTtcbiAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29uc3RydWN0Jywgc2VsZik7XG5cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgXG5cbiAgICAgICAgICAgICAgICBzZXRQcm9wKG5hbWU6IGtleW9mIFByb3BzLCB2YWx1ZTogYW55KXtcblxuICAgICAgICAgICAgICAgICAgICBpZihuYW1lIGluIHRoaXMucHJvcHMpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzWyBuYW1lIF0gPSB2YWx1ZSBhcyBQcm9wc1sgdHlwZW9mIG5hbWUgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgc2hvdyhwcm9wcz86IFByb3BzKXtcblxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgcHJvcHMgPT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhwcm9wcykubWFwKGVudHJ5PT4gdGhpcy5zZXRQcm9wKGVudHJ5WzBdLCBlbnRyeVsxXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ3Nob3cnLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGhpZGUoKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdoaWRlJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuXG5cblxuICAgICAgICAgICAgICAgIHJlbmRlcihwcm9wcz86IFByb3BzKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzID0gdGhpcy4kdG9BdHRyaWJ1dGVzUHJvcHMocHJvcHN8fHVuZGVmaW5lZCkgfHwgdGhpcy5wcm9wc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmlzUmVhZHkpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIExvYWQgVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kbWFrZVRlbXBsYXRlKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRtYWtlT2JzZXJ2ZXIodGhpcyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kZGVlcFJlbmRlcih0aGlzLCAgc2VsZi4jbW9ja3VwKVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJGluaXRpYWxpemUoKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpbml0aWFsaXplUHJvcHMoKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaW5pdGlhbGl6ZUVVaUQoKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2V1aWQnLCB0aGlzLiRFVWlEKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChgJHsgc2VsZi4kYXBwZWFyYW5jZT8uJFVpRCB9YClcbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdvYnNlcnZlZEF0dHJpYnV0ZXMnLCB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuICh0eXBlb2Ygc2VsZi5wcm9wcyA9PSAnb2JqZWN0JykgPyBPYmplY3Qua2V5cyhzZWxmLnByb3BzKSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgIFxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdjb25uZWN0ZWQnLCB0aGlzKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29ubmVjdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGFkb3B0ZWRDYWxsYmFjaygpe1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdhZG9wdGVkJywgdGhpcylcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdhZG9wdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2Rpc2Nvbm5lY3RlZCcsIHRoaXMpXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnZGlzY29ubmVjdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHZhbHVlOnN0cmluZywgb2xkVmFsdWU6c3RyaW5nKXtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2F0dHJpYnV0ZUNoYW5nZWQnLCB0aGlzKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcChuYW1lLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgncHJvcHNDaGFuZ2VkJywgeyBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGhpcy4kdGFnTmFtZSwgdGhpcy4ka2xhc3MgKVxuICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2VsZW1lbnRSZWFkeScsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG5cblxuXG5cblxuICAgICRlbWl0dGluZygpe1xuXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPHR5cGVvZiB0aGlzPigncmVuZGVyJywgIChzZWxmKT0+e1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUmVuZGVyaW5nIG5vdycsIHNlbGYpXG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmlzUmVhZHkpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwZWFyYW5jZT8ubW91bnQoKVxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VzdG9tIEVtaXR0ZXIgTGlzdGVuZXIgOiBCZWdpblxuICAgICAgICAgKi9cblxuICAgICAgICAgaWYodGhpcy5jb25maWc/LmVtaXQpe1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLmNvbmZpZy5lbWl0KS5tYXAoZT0+e1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGVbMV0gPT0gJ2Z1bmN0aW9uJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKGVbMF0sIGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBlWzFdLmFwcGx5KHRoaXMsIFthcmd1bWVudHNbMF1dKSBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gRW1pdHRlciBMaXN0ZW5lciA6IEVuZFxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuICAgIFxuICAgIFxuXG59XG5cblxuXG4iXX0=