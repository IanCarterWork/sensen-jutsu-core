import { SensenElement } from "./index.js.js.js";
import { isClass, isEmptyObject, URIParams, URIParamsQuery } from "./utilities.js.js.js";
export class SensenRouterHistory {
    constructor() {
        this.entries = [];
        this.current = 0;
    }
    push(uri, route) {
        return this;
    }
    get(key) {
        return undefined;
    }
    replace(uri, route) {
        return this;
    }
}
export class SensenRouterEntry {
    constructor(settings) {
        this.settings = settings;
    }
    match(slug) {
        const match = slug.match(this.settings.pattern);
        if (match) {
            console.log('Match Entry', slug, match);
            return true;
        }
        return false;
    }
}
export class SensenRouter {
    constructor(options) {
        this.options = options;
        this.routes = {};
        this.options.syncWithLocation = typeof this.options.syncWithLocation == 'boolean' ? this.options.syncWithLocation : true;
        this.initialize();
    }
    add(route) {
        const key = route.settings.pattern;
        this.routes[key] = route;
        return this;
    }
    findQueryExpression(pattern, expression, slug) {
        const matches = [...slug.matchAll(new RegExp(expression, 'gi'))];
        if (matches.length) {
            let query = {};
            matches.forEach((match) => {
                if (match[1]) {
                    match.forEach((value, k) => {
                        if (k > 0) {
                            query[k - 1] = value;
                        }
                    });
                }
                else {
                    const star = pattern.substring(pattern.length - 1);
                    if (star == '*') {
                        const mixRex = pattern.replace(/\*/gi, `(.*)`);
                        const mixQuery = this.findQueryExpression(pattern, mixRex, slug);
                        query = { ...mixQuery };
                        // query[0] = match.input?.substring( pattern.length - 1 ) || ''
                    }
                    else {
                        // console.log('$>', star, match.input, query )
                    }
                }
            });
            return query;
        }
        return undefined;
    }
    find(slug) {
        const $uri = this.concateURI(slug);
        const routes = Object.values(this.routes);
        let found = undefined;
        for (let pattern = 0; pattern < routes.length; pattern++) {
            const route = routes[pattern] || undefined;
            if (route) {
                if (route instanceof SensenRouterEntry) {
                    if ($uri.name == route.settings.pattern) {
                        found = route;
                        break;
                    }
                    else {
                        const rex = `${route.settings.pattern}`;
                        route.query = this.findQueryExpression(route.settings.pattern, rex, $uri.name);
                        if (!isEmptyObject(route.query || {})) {
                            found = route;
                            break;
                        }
                    }
                }
            }
        }
        return found;
    }
    run(state) {
        const uri = this.getCurrentURI() || this.options.default || Object.keys(this.routes)[0] || undefined;
        if (uri) {
            const $uri = this.concateURI(uri);
            // const route = this.routes[ $uri.name ] || undefined
            const route = this.find(uri);
            if (route instanceof SensenRouterEntry) {
                this.navigate(route.settings.method, uri, $uri.params);
            }
            else {
                throw (`SensenRouter : Default route nod found"`);
            }
        }
        else {
            throw (`SensenRouter : No default route in "option"`);
        }
        return this;
    }
    initialize() {
        this.history = new SensenRouterHistory();
        if (!(this.options.canvas instanceof SensenElement)) {
            throw (`SensenRouter : The canvas is not a SensenElement`);
        }
        window.addEventListener('hashchange', (ev) => {
            const uri = (location.hash ? location.hash.substring(1) : this.options.default);
            const $uri = this.concateURI(uri);
            const route = this.find(uri);
            // const params = URIParams(location.search)
            // console.log('HashChange',location.search,  params)
            if (route instanceof SensenRouterEntry) {
                const $canvas = route.settings.canvas || this.options.canvas;
                this.navigate(route.settings.method, uri, $uri.params, $canvas instanceof SensenElement ? $canvas : undefined);
            }
            else {
                history.go(-1);
                history.replaceState({}, document.title, location.href);
                console.error(route);
                throw ('SensenRouter : Route not found');
            }
            this.navigate(route.settings.method, uri, {});
        });
        return this;
    }
    clean() {
        return this;
    }
    concateURI(slug) {
        const ex = (`${slug}`).split('?');
        return {
            name: (ex[0]),
            query: decodeURIComponent(ex[1] || ''),
            params: URIParams(ex[1] || '') || {}
        };
    }
    isDeployed(instance) {
        if (instance instanceof SensenElement && instance.$application instanceof SensenElement) {
            const query = `${instance.$application?.tagName} > ${instance.tagName}`;
            return instance.$application?.querySelector(query) ? true : false;
        }
        return false;
    }
    stabilizeUI() {
        const $canvas = this.options.canvas;
        if ($canvas instanceof HTMLElement) {
            if ($canvas.children.length) {
                Object.values($canvas.children).forEach(child => {
                    if (child instanceof HTMLElement) {
                        child.style.display = 'block';
                    }
                });
            }
        }
        return this;
    }
    navigate(method, uri, state, canvas) {
        const $uri = this.concateURI(uri);
        const $canvas = canvas || this.options.canvas || undefined;
        const $method = method || 'get';
        state = !isEmptyObject($uri.params || {}) ? $uri.params : state;
        $uri.params = state;
        return new Promise((resolved, rejected) => {
            const route = this.find(uri);
            if (route) {
                // const route = this.routes[ $uri.name as keyof SensenRouterScheme ] || undefined
                if (route && this.currentRoute && route.settings.pattern == this.currentRoute.settings.pattern) {
                    if (route.settings.component instanceof SensenElement) {
                        this.switchDone({ uri, state, route, current: route.settings.component, canvas: $canvas });
                        route.settings.component.$render(state);
                    }
                    resolved(route);
                }
                else if (route) {
                    if (route.settings.component instanceof SensenElement && $canvas instanceof SensenElement) {
                        this.switch($canvas, route.settings.component, this.currentComponent, state).then(current => {
                            this.switchDone({ uri, state, route, current, canvas: $canvas });
                        });
                    }
                    else if (route.settings.component && isClass(route.settings.component)) {
                        // @ts-ignore
                        const $instance = (new route.settings.component(state));
                        if ($instance instanceof SensenElement && $canvas instanceof SensenElement) {
                            route.settings.component = $instance;
                            this.switch($canvas, $instance, this.currentComponent, state).then(current => {
                                this.switchDone({ uri, state, route, current, canvas: $canvas });
                            });
                        }
                        else {
                            throw (`SensenRouter : Route component is not a SensenElement Class instance"`);
                        }
                    }
                    else {
                        throw (`SensenRouter : Route component not found"`);
                    }
                }
                else {
                    console.error('Route', route);
                    throw (`SensenRouter : Route not found (${uri}) `);
                }
            }
        });
    }
    switchDone({ uri, state, route, current, canvas }) {
        const currentURI = this.getCurrentURI();
        if (current instanceof SensenElement && route) {
            const $uri = this.concateURI(uri);
            const query = URIParamsQuery(state || {}) || '';
            // @ts-ignore
            const _uri = (`#${$uri.name}${query ? `?${query}` : ``}`);
            this.currentComponent = current;
            this.currentRoute = route;
            route.settings.canvas = canvas;
            // console.warn('Method', _uri, route.settings.method, state, query )
            if (currentURI && currentURI == _uri) {
                console.error('Stop', _uri, currentURI);
                return this;
            }
            else {
                if (route.settings.method == 'get') {
                    location.href = `${_uri}`;
                    // history.pushState(state||{}, document.title, _uri)
                }
                else if (route.settings.method == 'post') {
                    location.href = `#${$uri.name}`;
                    // history.pushState(state||{}, document.title, `#${ $uri.name }` )
                    // console.warn('Post Method', route, _uri)
                }
            }
        }
        return this;
    }
    switch(canvas, entry, exit, state) {
        return new Promise((resolved, rejected) => {
            if (canvas instanceof SensenElement) {
                if (entry instanceof SensenElement) {
                    const deployed = this.isDeployed(entry);
                    const firstTime = !entry.$showing;
                    entry.style.position = 'absolute';
                    entry.style.top = '0';
                    entry.style.left = '0';
                    if (exit instanceof SensenElement) {
                        exit.style.position = 'absolute';
                        exit.style.top = '0';
                        exit.style.left = '0';
                        exit.$destroy(firstTime ? false : true).then(element => {
                            if (!firstTime) {
                                exit.$showing = false;
                            }
                        });
                    }
                    if (deployed) {
                        entry.style.removeProperty('display');
                        window.requestAnimationFrame(() => {
                            entry.$build(deployed).then(el => entry.$render(state));
                        });
                    }
                    if (!deployed) {
                        canvas.appendChild(entry);
                    }
                    entry.$showing = true;
                    entry.$build(firstTime ? true : false)
                        .then(element => {
                        resolved(entry);
                    });
                }
                else {
                    rejected(entry);
                    throw (`SensenRouter : The entry component is not a SensenElement`);
                }
            }
            else {
                rejected(entry);
                throw (`SensenRouter : The canvas is not a SensenElement`);
            }
        });
    }
    getCurrentURI() {
        return location.hash ? location.hash.substring(1) : undefined;
    }
    get(slug, state, canvas) {
        return this.navigate.apply(this, [
            'get', slug, state, canvas instanceof SensenElement ? canvas : undefined
        ]);
    }
    post(slug, state, canvas) {
        return this.navigate.apply(this, [
            'post', slug, state, canvas instanceof SensenElement ? canvas : undefined
        ]);
    }
    put(slug, state, canvas) {
        return this.navigate.apply(this, [
            'put', slug, state, canvas instanceof SensenElement ? canvas : undefined
        ]);
    }
}
// CommonDirectives.Define({
//     name:'action',
//     type:'-attribute',
//     expression:'@',
//     main: (component: SensenElement<SensenElementProps, SensenElementState>, record: ExpressionRecord)=>{
//         /**
//          * HTMLElement Only
//          */
//         if(record.node instanceof HTMLElement && component instanceof SensenElement){
//             const alreadyKey = `directiveState${ record.directive?.expression }` as keyof HTMLElement;
//             const args = Array.isArray(record.arguments) ? record.arguments : [];
//             /**
//              * Evité les abus de définition
//              */
//             if(record.node[ alreadyKey ]){ return ; }
//             /**
//              * Definition de l'évènement 
//              */
//             record.node.addEventListener(`${ record.name }`, (ev: Event)=>{
//                 record.matches?.map(match=>{
//                     const attrib = (
//                         ('attributes' in record.node) 
//                         ? record.node.getAttribute(match?.input||'')
//                         : ''
//                     )?.trim();
//                     if(args.indexOf('prevent') > -1){ ev.preventDefault() }
//                     if(args.indexOf('stop') > -1){ ev.stopPropagation() }
//                     // const attrib = value as keyof typeof component.state;
//                     /**
//                      * Check Component methods
//                      */
//                     const isMethod = attrib?.indexOf(`this.methods.`) == 0;
//                     const _event = CreateComponentMethodEvent<
//                         typeof component.$props,
//                         typeof component.$state
//                     >(component, ev)
//                     if(isMethod && component.$methods){
//                         const method = component.$methods[ 
//                             attrib.substring((`this.methods.`).length) 
//                         ];
//                         /** * Check is transaction function */
//                         if(typeof method == 'function'){
//                             method.apply(component.$state, [_event])
//                         }
//                     }
//                     else{
//                         if(typeof attrib == 'string' && attrib in window){
//                             const fn = (window[attrib as keyof Window] || (()=>{})) as Function
//                             if(typeof fn == 'function'){
//                                 fn.apply(window, [_event])
//                             }
//                         }
//                     }
//                 })
//             }, args.indexOf('capture') > -1 ? true : false)
//             // @ts-ignore
//             record.node[ alreadyKey ] = true;
//         }
//     },
// })
