import { SensenAppearance } from "./appearance";
import { Component, KuchiyoceElement, SensenElement } from "./index";
import { isClass, isEmptyObject, URIParams, URIParamsQuery } from "./utilities";







export class SensenRouterHistory implements ISensenRouterHistory{

    entries: SensenRouterRoute[] = [];

    current: number = 0;


    push(uri: string, route: SensenRouterRoute): this {
        
        return this;
        
    }


    get(key: number): SensenRouterRoute | undefined {
        
        return undefined
    }

    replace(uri: string, route: SensenRouterRoute): this {
        

        return this;
        
    }
    
}






export class SensenRouterEntry implements SensenRouterEntry{

    query?: SensenRouterRouteQuery;
        
    constructor(

        public settings : SensenRouterRoute
        
    ){


        
    }

    match?(slug : string) : boolean{

        const match = slug.match(this.settings.pattern)


        if(match){

            console.log('Match Entry', slug, match )

            return true
            
        }

        return false
        
    }

    
}







export class SensenRouter implements SensenRouter{


    routes: SensenRouterRoutes = {} as SensenRouterRoutes;

    currentComponent?: InstanceType<typeof SensenElement>;

    currentRoute?: SensenRouterEntry;

    history?: SensenRouterHistory;

    appearance: SensenAppearance = new SensenAppearance


    constructor(
        
        public options : SensenRouterOptions
        
    ){

        this.options.syncWithLocation = typeof this.options.syncWithLocation == 'boolean' ? this.options.syncWithLocation : true;

        this.initialize()

    }
    
    

    add(route : SensenRouterEntry) : this{

        const key = route.settings.pattern as keyof SensenRouterScheme
        
        this.routes[ key ] = route 

        return this
        
    }




    findQueryExpression(pattern: string, expression: string, slug: string) : SensenRouterRouteQuery | undefined{

        const matches = [...slug.matchAll(new RegExp(expression, 'gi'))];


        if(matches.length){

            let query : SensenRouterRouteQuery = {}

            matches.forEach((match)=>{

                if(match[1]){

                    match.forEach((value, k)=>{

                        if(k > 0){ query[ k - 1] = value }
                        
                    })

                }

                else{

                    const star = pattern.substring(pattern.length - 1)                                 


                    if(star == '*'){

                        const mixRex = pattern.replace(/\*/gi, `(.*)`);

                        const mixQuery = this.findQueryExpression(pattern, mixRex, slug)

                        query = {...mixQuery}


                        // query[0] = match.input?.substring( pattern.length - 1 ) || ''

                        
                    }

                    else{

                        // console.log('$>', star, match.input, query )

                    }                  


                }
                
            })

            return query
            
        }

        return undefined
        
    }
    
    
    

    find(slug : keyof SensenRouterScheme) : SensenRouterEntry | undefined{

        const $uri = this.concateURI(slug)

        const routes = Object.values( this.routes );

        let found = undefined;


        for (let pattern = 0; pattern < routes.length; pattern++) {

            const route = routes[ pattern ] || undefined;

            if(route){

                if(route instanceof SensenRouterEntry){
    

                    if($uri.name == route.settings.pattern){

                        found = route;

                        break;
                        
                    }

                    else{

                        const rex = `${ route.settings.pattern }`;

                        route.query = this.findQueryExpression(route.settings.pattern, rex, $uri.name)

                        if(!isEmptyObject(route.query||{})){

                            found = route

                            break;

                        }
                        
                        
                    }
                    
                }

            }
                

            
            
        }
        
        
        return found;
        
    }
     


    run(state?: SensenElementState) : this{

        const uri = this.getCurrentURI() || this.options.default || Object.keys( this.routes )[0] || undefined


        if(uri){

            const $uri = this.concateURI(uri as keyof SensenRouterScheme);

            // const route = this.routes[ $uri.name ] || undefined

            const route = this.find(uri as keyof SensenRouterScheme)

            if(route instanceof SensenRouterEntry){
                
                this.navigate( route.settings.method, uri as keyof SensenRouterScheme , $uri.params )

            }

            else{

                throw (`SensenRouter : Default route nod found"`)
                
            }
            
        }

        else{

            throw (`SensenRouter : No default route in "option"`)
            
        }
        

        return this
        
    }
    

    initialize() : this{

        this.history = new SensenRouterHistory()            

        if(!(this.options.canvas instanceof SensenElement)){

            throw (`SensenRouter : The canvas is not a SensenElement`)
            
        }

        this.appearance.selectors({
           
            $self:{
           
                position: 'relative',
           
                display: 'block',
           
                width: '100%',
           
                height: '100%',
           
                maxWidth: '100vw',
           
                maxHeight: '100vh',
           
                overflowX: 'hidden',
           
                overflowY: 'auto',
           
            },

            '> *':{

                display: 'block',
           
                position: 'absolute',
           
                top: '0',
           
                left: '0',
                
            }
            
        }).mount().bind(this.options.canvas)
        

        // this.options.canvas.style.position = `relative`;
        // this.options.canvas.style.display = `block`;
        

        window.addEventListener('hashchange', (ev)=>{

            const uri = (location.hash ? location.hash.substring(1) : this.options.default) as keyof SensenRouterScheme
            
            const $uri = this.concateURI(uri);
            
            const route = this.find(uri);

            // const params = URIParams(location.search)

            // console.log('HashChange',location.search,  params)


            if(route instanceof SensenRouterEntry){

                const $canvas = route.settings.canvas || this.options.canvas
                
                this.navigate( 
                    
                    route.settings.method, 
                    
                    uri as keyof SensenRouterScheme, 
                    
                    $uri.params, 
                    
                    $canvas instanceof SensenElement ? $canvas : undefined  
                    
                )
            
            }

            else{

                history.go(-1)

                history.replaceState({}, document.title, location.href )

                console.error(route)

                throw ('SensenRouter : Route not found')
                
            }
            
            this.navigate( route.settings.method, uri, {} )

        })
        

        return this
        
    }

    clean() : this{

        return this
        
    }

    concateURI(slug : keyof SensenRouterScheme) : SensenRouterURI{

        const ex = (`${ slug }`).split('?')

        return {

            name: (ex[0]) as keyof SensenRouterScheme,

            query: decodeURIComponent(ex[1]||''),

            params: URIParams<SensenRouterScheme>( ex[1]||'' ) || {}

        }
        
    }


    isDeployed(instance : InstanceType<typeof SensenElement>) : boolean{

        if(instance instanceof SensenElement && instance.$application instanceof SensenElement){

            const query = `${ instance.$application?.tagName } > ${ instance.tagName }`;

            return instance.$application?.querySelector( query ) ? true : false;
    
        }

        return false;
        
    }
    


    stabilizeUI(){

        const $canvas = this.options.canvas

        // if($canvas instanceof HTMLElement){

        //     if($canvas.children.length){
    
        //         Object.values($canvas.children).forEach(child=>{

        //             if(child instanceof HTMLElement){

        //                 child.style.display = 'block';
                        
        //             }
                    
        //         })
                
        //     }
    
        // }
        
        return this;

    }
    
    

    navigate(

        method: SensenRouterMethod,
        
        uri : keyof SensenRouterScheme, 
        
        state : SensenRouterScheme[ keyof SensenRouterScheme ],

        canvas?: InstanceType<typeof SensenElement>
        
    ) : Promise< SensenRouterEntry >{

        const $uri = this.concateURI(uri);

        const $canvas = canvas || this.options.canvas || undefined;

        const $method = method || 'get';


        state = !isEmptyObject($uri.params || {}) ? $uri.params : state; $uri.params = state


        return new Promise< SensenRouterEntry  >((resolved, rejected) => {

            const route = this.find(uri)



            if(route){

                
                // const route = this.routes[ $uri.name as keyof SensenRouterScheme ] || undefined
    
    
                if(route && this.currentRoute && route.settings.pattern == this.currentRoute.settings.pattern){
    
                    if(route.settings.component instanceof SensenElement){
    
                        this.switchDone({ uri, state, route, current : route.settings.component, canvas: $canvas });
                        
                        route.settings.component.$render(state);
                            
                    }
    
                    resolved(route)
    
                }
                
                
                else if(route ){
    
    
                    if(route.settings.component instanceof SensenElement && $canvas instanceof SensenElement){
    
                        this.switch(
        
                            $canvas,
                                
                            route.settings.component,
        
                            this.currentComponent,
    
                            state
        
                        ).then(current=>{
        
                            this.switchDone({ uri, state, route, current, canvas: $canvas });
                            
                        })
        
        
                    }
        
                    else if(route.settings.component && isClass(route.settings.component)){
        
                        // @ts-ignore
                        const $instance = (new route.settings.component(state))
                        
                        if($instance instanceof SensenElement && $canvas instanceof SensenElement){
    
                            route.settings.component = $instance
        
                            this.switch(
        
                                $canvas,
                                
                                $instance,
        
                                this.currentComponent,
    
                                state
        
                            ).then(current=>{
    
                                this.switchDone({ uri, state, route, current, canvas: $canvas });
                            
                            })
                            
                        }
        
                        else{
        
                            throw (`SensenRouter : Route component is not a SensenElement Class instance"`)
                         
                        }
        
                    }
        
                    else{
                       
                        throw (`SensenRouter : Route component not found"`)
                         
                    }
                    
                }
    
                else{ 
    
                    console.error('Route', route)
                    
                    throw (`SensenRouter : Route not found (${ uri }) `); 
                
                }
    

            }
            
            

        });
        
    }



    switchDone({ uri, state, route, current, canvas } : SensenRouterSwitchRequest){

        const currentURI = this.getCurrentURI()


        if(current instanceof SensenElement && route){

            const $uri = this.concateURI(uri)

            const query = URIParamsQuery(state||{}) || ''
            
            // @ts-ignore
            const _uri = (`#${ $uri.name }${ query ? `?${ query }` : `` }`) as keyof SensenRouterScheme;


            this.currentComponent = current;

            this.currentRoute = route;

            route.settings.canvas = canvas;

            
            // console.warn('Method', _uri, route.settings.method, state, query )



            if(currentURI && currentURI == _uri){ 

                console.error('Stop', _uri, currentURI)
                
                return this; 
                
            }

            else{ 

                if(route.settings.method == 'get'){

                    location.href = `${ _uri }`; 

                    // history.pushState(state||{}, document.title, _uri)

                }

                else if(route.settings.method == 'post'){

                    location.href = `#${ $uri.name }`; 

                    // history.pushState(state||{}, document.title, `#${ $uri.name }` )

                    // console.warn('Post Method', route, _uri)
                    
                }
                
            
            }

            
        }

        return this;

    }
    
    

    switch(

        canvas: InstanceType<typeof SensenElement>,
        
        entry: InstanceType<typeof SensenElement>, 
        
        exit?: InstanceType<typeof SensenElement>,

        state?: SensenElementState

        
    ){

        return new Promise<typeof entry>((resolved, rejected)=>{

            if(canvas instanceof SensenElement){

                if(entry instanceof SensenElement){

                    const deployed = this.isDeployed(entry);

                    const firstTime = !entry.$showing

                    entry.style.zIndex = '2';



                    if(exit instanceof SensenElement){

                        exit.style.zIndex = '1';


                        exit.style.display = 'block';
                        
                        exit.$destroy(firstTime ? false : true ).then(element=>{

                            if(!firstTime){ exit.$showing = false }

                            element.style.display = 'none'

                            element.innerHTML = ''

                            // console.log('Destroy', element)

                        })

                    }
            
                    if(deployed){

                        // entry.style.removeProperty('display');
                        
                        entry.style.display = 'block';
                        
                        window.requestAnimationFrame(()=>{

                            entry.$build(deployed).then(el=> entry.$render(state) )

                        })
                        
                        
                    }
                    
                    if(!deployed){
                        
                        canvas.appendChild( entry )

                    }


                    // console.warn('Entry', firstTime, entry )
    

                    entry.$showing = true

                    entry.$build(firstTime ? true : false)

                    .then(element=>{

                        resolved(entry)

                    })
    
            
                }
    
                else{ 

                    rejected(entry)
                    
                    throw (`SensenRouter : The entry component is not a SensenElement`) 
                    
                }
                
            }
            
            else{ 

                rejected(entry)
                
                throw (`SensenRouter : The canvas is not a SensenElement`) 
            
            }
            
        })

    }



    getCurrentURI() : string | undefined {

        return location.hash ? location.hash.substring(1) : undefined
        
    }
   




    get(
        
        slug : keyof SensenRouterScheme, 
        
        state : SensenRouterScheme[ keyof SensenRouterScheme ],

        canvas?: HTMLElement
        
    ) : Promise< SensenRouterEntry >{

        return this.navigate.apply(this, [
            
            'get', slug, state, canvas instanceof SensenElement ? canvas : undefined

        ])
        
    }


    post(
        
        slug : keyof SensenRouterScheme, 
        
        state : SensenRouterScheme[ keyof SensenRouterScheme ],

        canvas?: HTMLElement
        
    ) : Promise< SensenRouterEntry >{

        return this.navigate.apply(this, [
            
            'post', slug, state, canvas instanceof SensenElement ? canvas : undefined

        ])
        
    }

    
    put(
        
        slug : keyof SensenRouterScheme, 
        
        state : SensenRouterScheme[ keyof SensenRouterScheme ],

        canvas?: HTMLElement
        
    ) : Promise< SensenRouterEntry >{

        return this.navigate.apply(this, [
            
            'put', slug, state, canvas instanceof SensenElement ? canvas : undefined

        ])
        
    }


    
}










export class NavigateLinkComponent extends HTMLElement{

    constructor(){

        super();
        
    }


    $handler(){

        const $uri = this.getAttribute('uri') as keyof SensenRouterScheme;

        const $method = this.getAttribute('method') as SensenRouterMethod;

        const $state = this.getAttribute('state') || '{}';


        let $globalRouter = window.$SensenRouter || undefined;


        if(typeof $uri == "string"){
            
            const $router = ((
    
                this.$parentComponent instanceof SensenElement && 
                
                this.$parentComponent?.$application instanceof KuchiyoceElement &&

                this.$parentComponent?.$application.$router instanceof SensenRouter
                
            ) ? this.$parentComponent?.$application.$router : false ) || $globalRouter;

            
            $router.navigate($method || 'get', $uri, JSON.parse($state) as SensenElementState);
            
        }

    }


    connectedCallback(){

        this.setAttribute('tabindex', '0')
        
        this.removeEventListener('click', this.$handler.bind(this), false )

        this.addEventListener('click', this.$handler.bind(this), false );

        // this.onclick = this.$handler.bind(this)

        
    }
    

    disconnectedCallback(){

        this.removeEventListener('click', this.$handler.bind(this), false )
        
    }
    

}

if(!customElements.get('navigate-link')){

    customElements.define('navigate-link', NavigateLinkComponent );

}