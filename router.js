import { FxPresenter } from "./fx/preset.js";
const SensenWindow = {};
// export type RouterStates = {
//     [K : SceneActivityRouteName] : SensenSceneActivities
// }
export class SensenRouter {
    constructor($options) {
        this.routes = {};
        this.activity = {};
        this.root = {};
        this.$options = $options;
        this.initialize();
    }
    get(activity) {
        if (typeof activity.$options?.route == 'string') {
            const key = activity.$options.route;
            this.routes[key] = activity;
        }
        return this;
    }
    initialize() {
        this.canvas = (this.$options.canvas instanceof HTMLElement)
            ? this.$options.canvas
            : document.querySelector(this.$options.canvas);
        return this;
    }
    clean() {
        if (this.canvas instanceof HTMLElement) {
            this.canvas.innerHTML = '';
        }
        return this;
    }
    render() {
        this.clean();
        window.addEventListener('hashchange', () => {
            const slug = (location.hash || '').substring(1);
            this.navigate(slug);
        });
        if (location.hash) {
            // console.warn('Go to view', location.hash.substring(1))
            this.navigate(location.hash.substring(1));
        }
        else if (this.$options.default) {
            // console.warn('Go to default view', this.$options.default)
            this.navigate(this.$options.default);
        }
        else {
            alert('Router UnBoot, \nAjouter une route par default ');
        }
        return this;
    }
    parseSlug(slug) {
        const ex = (`${slug}`).split('?');
        return {
            name: ex[0],
            search: ex[1] || ''
        };
    }
    async navigate(slug, props) {
        const parsed = this.parseSlug(slug || this.$options.default);
        return new Promise(async (resolve, reject) => {
            const activity = this.routes[parsed.name] || undefined;
            if (activity) {
                const firstTime = !activity.isReady ? true : false;
                const oldActivity = SensenWindow.$SceneActivity;
                activity.render(props);
                if (activity.$element instanceof HTMLElement && this.canvas instanceof HTMLElement) {
                    // console.warn('Set EXIT Animation on', SensenWindow.$SceneActivity )
                    // if(SensenWindow.$SceneActivity){
                    //     if(SensenWindow.$SceneActivity.$options?.options?.transition){
                    //         console.log('Fx Transition', SensenWindow.$SceneActivity.$options?.options?.transition)
                    //     }
                    // }
                    this.activity = activity;
                    if (this.activity.$element instanceof HTMLElement) {
                        this.canvas?.appendChild(this.activity.$element);
                        // @ts-ignore
                        SensenWindow.$SceneActivity = activity;
                    }
                    /**
                     * Exit Reverse Transition
                     */
                    if (oldActivity && oldActivity.$options?.options?.transition && firstTime) {
                        if (oldActivity.$options.options.transition.exit instanceof FxPresenter) {
                            oldActivity.$options?.options?.transition.exit.exitReverse(oldActivity.$element).then(r => {
                            }).catch(er => {
                                console.error('Transition Error', er);
                            });
                        }
                    }
                    /**
                     * Exit Reverse Transition
                     */
                    if (oldActivity && oldActivity.$options?.options?.transition && !firstTime) {
                        if (oldActivity.$options.options.transition.exit instanceof FxPresenter) {
                            oldActivity.$options?.options?.transition.exit.exit(oldActivity.$element).then(r => {
                            }).catch(er => {
                                console.error('Transition Error', er);
                            });
                        }
                    }
                    /**
                     * Entry Reverse Transition
                     */
                    if (activity.$options?.options?.transition && !firstTime) {
                        if (activity.$options.options.transition.entry instanceof FxPresenter) {
                            activity.$options?.options?.transition.entry.entryReverse(activity.$element).then(r => {
                                if (oldActivity && oldActivity.$element) {
                                    oldActivity.$element.innerHTML = '';
                                    oldActivity.isReady = false;
                                }
                            }).catch(er => {
                                console.error('Transition Error', er);
                            });
                        }
                    }
                    /**
                     * Entry Transition
                     */
                    if (activity.$options?.options?.transition && firstTime) {
                        if (activity.$options.options.transition.entry instanceof FxPresenter) {
                            activity.$options?.options?.transition.entry.entry(activity.$element).then(r => {
                                if (oldActivity && oldActivity.$element) {
                                    oldActivity.$element.innerHTML = '';
                                }
                            }).catch(er => {
                                console.error('Transition Error', er);
                            });
                        }
                    }
                }
                else {
                    throw (`This activity has not available "$element" `);
                }
            }
            else {
                throw (`Sensen Router say route < \n${slug} > not found`);
            }
        });
    }
}
