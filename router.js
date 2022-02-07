import { FxPresenter } from "./fx/preset";
const SensenWindow = {};
// export type RouterStates = {
//     [K : SceneActivityRouteName] : SensenSceneActivities
// }
export class SensenRouter {
    constructor(config) {
        this.routes = {};
        this.activity = {};
        this.root = {};
        this.config = config;
        this.initialize();
    }
    get(activity) {
        if (typeof activity.config?.route == 'string') {
            const key = activity.config.route;
            this.routes[key] = activity;
        }
        return this;
    }
    initialize() {
        this.canvas = (this.config.canvas instanceof HTMLElement)
            ? this.config.canvas
            : document.querySelector(this.config.canvas);
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
        else if (this.config.default) {
            // console.warn('Go to default view', this.config.default)
            this.navigate(this.config.default);
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
        const parsed = this.parseSlug(slug || this.config.default);
        return new Promise(async (resolve, reject) => {
            const activity = this.routes[parsed.name] || undefined;
            if (activity) {
                const firstTime = !activity.isReady ? true : false;
                const oldActivity = SensenWindow.$SceneActivity;
                activity.render(props);
                if (activity.$element instanceof HTMLElement && this.canvas instanceof HTMLElement) {
                    // console.warn('Set EXIT Animation on', SensenWindow.$SceneActivity )
                    // if(SensenWindow.$SceneActivity){
                    //     if(SensenWindow.$SceneActivity.config?.options?.transition){
                    //         console.log('Fx Transition', SensenWindow.$SceneActivity.config?.options?.transition)
                    //     }
                    // }
                    this.activity = activity;
                    if (this.activity.$element instanceof HTMLElement) {
                        this.canvas?.appendChild(this.activity.$element);
                        SensenWindow.$SceneActivity = activity;
                    }
                    /**
                     * Exit Reverse Transition
                     */
                    if (oldActivity && oldActivity.config?.options?.transition && firstTime) {
                        if (oldActivity.config.options.transition.exit instanceof FxPresenter) {
                            oldActivity.config?.options?.transition.exit.exitReverse(oldActivity.$element).then(r => {
                            }).catch(er => {
                                console.error('Transition Error', er);
                            });
                        }
                    }
                    /**
                     * Exit Reverse Transition
                     */
                    if (oldActivity && oldActivity.config?.options?.transition && !firstTime) {
                        if (oldActivity.config.options.transition.exit instanceof FxPresenter) {
                            oldActivity.config?.options?.transition.exit.exit(oldActivity.$element).then(r => {
                            }).catch(er => {
                                console.error('Transition Error', er);
                            });
                        }
                    }
                    /**
                     * Entry Reverse Transition
                     */
                    if (activity.config?.options?.transition && !firstTime) {
                        if (activity.config.options.transition.entry instanceof FxPresenter) {
                            activity.config?.options?.transition.entry.entryReverse(activity.$element).then(r => {
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
                    if (activity.config?.options?.transition && firstTime) {
                        if (activity.config.options.transition.entry instanceof FxPresenter) {
                            activity.config?.options?.transition.entry.entry(activity.$element).then(r => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJMUMsTUFBTSxZQUFZLEdBQUcsRUFBbUIsQ0FBQTtBQXFCeEMsK0JBQStCO0FBRS9CLDJEQUEyRDtBQUUzRCxJQUFJO0FBS0osTUFBTSxPQUFPLFlBQVk7SUFtQnJCLFlBQVksTUFBb0I7UUFkaEMsV0FBTSxHQUlGLEVBQThDLENBQUM7UUFFbkQsYUFBUSxHQUErQixFQUFnQyxDQUFBO1FBRXZFLFNBQUksR0FBZ0IsRUFBaUIsQ0FBQztRQVFsQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFFckIsQ0FBQztJQUlELEdBQUcsQ0FBK0IsUUFBNEI7UUFFMUQsSUFBRyxPQUFPLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxJQUFJLFFBQVEsRUFBQztZQUV6QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQWdCLENBQUE7WUFFNUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxHQUFHLENBQUUsR0FBRyxRQUFzQyxDQUFBO1NBRTlEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUtELFVBQVU7UUFFTixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLFlBQVksV0FBVyxDQUFDO1lBRXJELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07WUFFcEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FFL0M7UUFHRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBSUQsS0FBSztRQUVELElBQUcsSUFBSSxDQUFDLE1BQU0sWUFBWSxXQUFXLEVBQUM7WUFF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Q0FBQyxDQUFBO2FBRTlEO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBSUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2VuZUFjdGl2aXR5LCBTZW5zZW5TY2VuZUFjdGl2aXRpZXMgfSBmcm9tIFwiLi9hY3Rpdml0eVwiO1xuaW1wb3J0IHsgU2Vuc2VuRnhFbmdpbmUgfSBmcm9tIFwiLi9meFwiO1xuaW1wb3J0IHsgRnhQcmVzZW50ZXIgfSBmcm9tIFwiLi9meC9wcmVzZXRcIjtcbmltcG9ydCB7IFNjZW5lQWN0aXZpdHlQcm9wcywgU2NlbmVBY3Rpdml0eVJvdXRlTmFtZSwgVFNlbnNlbldpbmRvdyB9IGZyb20gXCIuL2luZGV4LnRcIjtcblxuXG5jb25zdCBTZW5zZW5XaW5kb3cgPSB7fSBhcyBUU2Vuc2VuV2luZG93XG5cblxuZXhwb3J0IHR5cGUgUm91dGVyQ29uZmlnID0ge1xuXG4gICAgZGVmYXVsdDogc3RyaW5nO1xuXG4gICAgY2FudmFzOiBzdHJpbmcgfCBIVE1MRWxlbWVudDtcblxuICAgIGJhc2VVUkw/OiBzdHJpbmc7XG4gICAgXG59XG5cblxuaW50ZXJmYWNlIFdpbmRvd3tcblxuICAgIFNjZW5lQWN0aXZpdHk6IHR5cGVvZiBTY2VuZUFjdGl2aXR5O1xuICAgIFxufVxuXG5cbi8vIGV4cG9ydCB0eXBlIFJvdXRlclN0YXRlcyA9IHtcblxuLy8gICAgIFtLIDogU2NlbmVBY3Rpdml0eVJvdXRlTmFtZV0gOiBTZW5zZW5TY2VuZUFjdGl2aXRpZXNcblxuLy8gfVxuXG5cblxuXG5leHBvcnQgY2xhc3MgU2Vuc2VuUm91dGVyPEIgZXh0ZW5kcyBTY2VuZUFjdGl2aXR5UHJvcHM+e1xuXG5cbiAgICBjb25maWc6IFJvdXRlckNvbmZpZztcblxuICAgIHJvdXRlczogeyBcbiAgICAgICAgXG4gICAgICAgIFt4IGluIGtleW9mIEJdIDogU2NlbmVBY3Rpdml0eTxCW3hdPiBcbiAgICBcbiAgICB9ID0ge30gYXMgeyBbeCBpbiBrZXlvZiBCXSA6IFNjZW5lQWN0aXZpdHk8Qlt4XT4gfTtcbiAgICBcbiAgICBhY3Rpdml0eTogU2NlbmVBY3Rpdml0eTxCWyBzdHJpbmcgXT4gPSB7fSBhcyBTY2VuZUFjdGl2aXR5PEJbIHN0cmluZyBdPlxuICAgIFxuICAgIHJvb3Q6IEhUTUxFbGVtZW50ID0ge30gYXMgSFRNTEVsZW1lbnQ7XG4gICAgXG4gICAgY2FudmFzPzogSFRNTEVsZW1lbnQgfCBudWxsO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogUm91dGVyQ29uZmlnKXtcblxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICBnZXQ8UCBleHRlbmRzIFNjZW5lQWN0aXZpdHlQcm9wcz4oYWN0aXZpdHkgOiAgU2NlbmVBY3Rpdml0eTxQPiApe1xuXG4gICAgICAgIGlmKHR5cGVvZiBhY3Rpdml0eS5jb25maWc/LnJvdXRlID09ICdzdHJpbmcnKXtcblxuICAgICAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkuY29uZmlnLnJvdXRlIGFzIGtleW9mIEJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXNbIGtleSBdID0gYWN0aXZpdHkgYXMgU2NlbmVBY3Rpdml0eTxCWyBrZXlvZiBCXT5cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuXG5cbiAgICBpbml0aWFsaXplKCl7XG5cbiAgICAgICAgdGhpcy5jYW52YXMgPSAodGhpcy5jb25maWcuY2FudmFzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG5cbiAgICAgICAgICAgID8gdGhpcy5jb25maWcuY2FudmFzXG5cbiAgICAgICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbmZpZy5jYW52YXMpXG5cbiAgICAgICAgO1xuXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG5cbiAgICBjbGVhbigpe1xuXG4gICAgICAgIGlmKHRoaXMuY2FudmFzIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cblxuICAgIHJlbmRlcigpe1xuXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcbiAgICAgICAgXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCk9PntcblxuICAgICAgICAgICAgY29uc3Qgc2x1ZyA9IChsb2NhdGlvbi5oYXNoIHx8ICcnKS5zdWJzdHJpbmcoMSk7XG5cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoc2x1ZylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICBpZihsb2NhdGlvbi5oYXNoKXtcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdHbyB0byB2aWV3JywgbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpXG5cbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUobG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYodGhpcy5jb25maWcuZGVmYXVsdCl7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignR28gdG8gZGVmYXVsdCB2aWV3JywgdGhpcy5jb25maWcuZGVmYXVsdClcblxuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZSh0aGlzLmNvbmZpZy5kZWZhdWx0KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICBhbGVydCgnUm91dGVyIFVuQm9vdCwgXFxuQWpvdXRlciB1bmUgcm91dGUgcGFyIGRlZmF1bHQgJylcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuXG5cbiAgICBwYXJzZVNsdWcoc2x1Zzoga2V5b2YgQil7XG5cbiAgICAgICAgY29uc3QgZXggPSAoYCR7IHNsdWcgfWApLnNwbGl0KCc/JylcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBuYW1lOiBleFswXSxcblxuICAgICAgICAgICAgc2VhcmNoOiBleFsxXXx8JydcblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgXG5cbiAgICBhc3luYyBuYXZpZ2F0ZShzbHVnOiBrZXlvZiBCLCBwcm9wcz86IHtcbiAgICAgICAgW0sgaW4ga2V5b2YgQl0gPzogYW55XG4gICAgfSl7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVNsdWcoc2x1ZyB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0KVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHR5cGVvZiBTY2VuZUFjdGl2aXR5Pihhc3luYyAocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pPT57XG4gICAgXG4gICAgICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5yb3V0ZXNbIHBhcnNlZC5uYW1lIF0gfHwgdW5kZWZpbmVkO1xuXG5cbiAgICAgICAgICAgIGlmKGFjdGl2aXR5KXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFRpbWUgPSAhYWN0aXZpdHkuaXNSZWFkeSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZEFjdGl2aXR5ID0gU2Vuc2VuV2luZG93LiRTY2VuZUFjdGl2aXR5O1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgYWN0aXZpdHkucmVuZGVyKHByb3BzIGFzIEJbIGtleW9mIEJdKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGFjdGl2aXR5LiRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGhpcy5jYW52YXMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignU2V0IEVYSVQgQW5pbWF0aW9uIG9uJywgU2Vuc2VuV2luZG93LiRTY2VuZUFjdGl2aXR5IClcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZihTZW5zZW5XaW5kb3cuJFNjZW5lQWN0aXZpdHkpe1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihTZW5zZW5XaW5kb3cuJFNjZW5lQWN0aXZpdHkuY29uZmlnPy5vcHRpb25zPy50cmFuc2l0aW9uKXtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdGeCBUcmFuc2l0aW9uJywgU2Vuc2VuV2luZG93LiRTY2VuZUFjdGl2aXR5LmNvbmZpZz8ub3B0aW9ucz8udHJhbnNpdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHkgPSBhY3Rpdml0eTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2aXR5LiRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzPy5hcHBlbmRDaGlsZCh0aGlzLmFjdGl2aXR5LiRlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgU2Vuc2VuV2luZG93LiRTY2VuZUFjdGl2aXR5ID0gYWN0aXZpdHkgYXMgU2NlbmVBY3Rpdml0eTxTY2VuZUFjdGl2aXR5UHJvcHM+O1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIEV4aXQgUmV2ZXJzZSBUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBpZihvbGRBY3Rpdml0eSAmJiBvbGRBY3Rpdml0eS5jb25maWc/Lm9wdGlvbnM/LnRyYW5zaXRpb24gJiYgZmlyc3RUaW1lKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2xkQWN0aXZpdHkuY29uZmlnLm9wdGlvbnMudHJhbnNpdGlvbi5leGl0IGluc3RhbmNlb2YgRnhQcmVzZW50ZXIpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkQWN0aXZpdHkuY29uZmlnPy5vcHRpb25zPy50cmFuc2l0aW9uLmV4aXQuZXhpdFJldmVyc2UoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkQWN0aXZpdHkuJGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50aGVuKHI9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVHJhbnNpdGlvbiBFcnJvcicsIGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBFeGl0IFJldmVyc2UgVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYob2xkQWN0aXZpdHkgJiYgb2xkQWN0aXZpdHkuY29uZmlnPy5vcHRpb25zPy50cmFuc2l0aW9uICYmICFmaXJzdFRpbWUpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvbGRBY3Rpdml0eS5jb25maWcub3B0aW9ucy50cmFuc2l0aW9uLmV4aXQgaW5zdGFuY2VvZiBGeFByZXNlbnRlcil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRBY3Rpdml0eS5jb25maWc/Lm9wdGlvbnM/LnRyYW5zaXRpb24uZXhpdC5leGl0KFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZEFjdGl2aXR5LiRlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbihyPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcj0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zaXRpb24gRXJyb3InLCBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogRW50cnkgUmV2ZXJzZSBUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBpZihhY3Rpdml0eS5jb25maWc/Lm9wdGlvbnM/LnRyYW5zaXRpb24gJiYgIWZpcnN0VGltZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2aXR5LmNvbmZpZy5vcHRpb25zLnRyYW5zaXRpb24uZW50cnkgaW5zdGFuY2VvZiBGeFByZXNlbnRlcil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eS5jb25maWc/Lm9wdGlvbnM/LnRyYW5zaXRpb24uZW50cnkuZW50cnlSZXZlcnNlKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LiRlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbihyPT57XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvbGRBY3Rpdml0eSAmJiBvbGRBY3Rpdml0eS4kZWxlbWVudCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRBY3Rpdml0eS4kZWxlbWVudC5pbm5lckhUTUwgPSAnJyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkQWN0aXZpdHkuaXNSZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcj0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RyYW5zaXRpb24gRXJyb3InLCBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogRW50cnkgVHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZpdHkuY29uZmlnPy5vcHRpb25zPy50cmFuc2l0aW9uICYmIGZpcnN0VGltZSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFjdGl2aXR5LmNvbmZpZy5vcHRpb25zLnRyYW5zaXRpb24uZW50cnkgaW5zdGFuY2VvZiBGeFByZXNlbnRlcil7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eS5jb25maWc/Lm9wdGlvbnM/LnRyYW5zaXRpb24uZW50cnkuZW50cnkoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkuJGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50aGVuKHI9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvbGRBY3Rpdml0eSAmJiBvbGRBY3Rpdml0eS4kZWxlbWVudCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRBY3Rpdml0eS4kZWxlbWVudC5pbm5lckhUTUwgPSAnJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXI9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUcmFuc2l0aW9uIEVycm9yJywgZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IChgVGhpcyBhY3Rpdml0eSBoYXMgbm90IGF2YWlsYWJsZSBcIiRlbGVtZW50XCIgYClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyAoYFNlbnNlbiBSb3V0ZXIgc2F5IHJvdXRlIDwgXFxuJHsgc2x1ZyB9ID4gbm90IGZvdW5kYClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuICAgIFxufVxuXG4iXX0=