import { CompilateEcho, CompilateEchoAttributes, CompilateSnapCode, CompilateSnapCodeAttributes } from "./compilate";
import { SensenEmitter } from "./emitter";
import { FindExpressions } from "./expression";
import type { ComponentMethodEvent, ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord, SceneActivityProps, SceneActivityEmitter, TComponentOptions, TScreenConfig, TComponentObserversParams } from "./index.t";
import { ComponentHydrates } from "./hydrates";
import { SensenAppearance, TAppearanceProps } from "./appearance/index";
import { SensenTemplate } from "./template";
import { SensenMetricRandom } from "./metric-random";
import { ComponentVariable } from "./hook";




/**
 * Metric
 */

 export type MetricTAlphaNum = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';

 export type MetricTAlphaNumL = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
 
 export type MetricTAlphaNumU = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
 
 export type MetricTAlphaU = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
 
 export type MetricTAlphaL = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
 
 export type MetricTNum = '0 1 2 3 4 5 6 7 8 9';
 
 export type MetricTHex = 'a b c d e f A B C D E F';
 






export type TObjectEmbed<T> = { 
    [K in keyof T]?: T[K] | number
}

 
 



/**
 * 
 */
export function SetDataLikeType(data: any){

    /**
     * Object
     */
    try{ return JSON.parse(data); } catch(e){ }
    

    /**
     * Boolean
     */
    

    return data;
    
}







/**
 * Create Component Method Event
 */

export function CreateComponentMethodEvent<
    
    S extends ComponentState, 
        
    P extends ComponentProps,
    
    M extends ComponentMethodRaw<S, P>
    
>(component: ComponentController<S, P, M>, ev: Event){

    const _ : ComponentMethodEvent<S, P, M> = {} as ComponentMethodEvent<S, P, M>
    
    _.self = component;

    _.event = ev
    
    return _;

}





/**
 * Sensen HTML Element
 */
export class SensenHTMLElement<P> extends HTMLElement{

    $EUiD: string = '';

    isReady: boolean = false;


    $controller?: object


    $initializeEUiD(){

        this.$EUiD = this.$EUiD || `${ SensenMetricRandom.CreateAplpha(16).join('') }`;

        return this.$EUiD;

    }



    /**
     * Properties name
     */
    static get observedAttributes() {return []; }


    /**
     * Dynamic var
     */
    props : P = {} as P;
    
    
    /**
     * New Construct
     */
    constructor(props : P){

        super();

        // this.props = props;
        
    }


    /**
     * When Element is connected
     */
    connectedCallback(){}


    /**
     * When Element is Adopted by other DOM
     */
    adoptedCallback(){}


    /**
     * Whene Element is Disconnected to the current DOM
     */
    disconnectedCallback(){

        this.classList.forEach(cl=>{

            const refs = document.querySelectorAll(`[sensen-appearance="${ cl }"]`)

            if(refs){

                refs.forEach(ref=> ref.parentElement?.removeChild(ref) )
                
            }

            
        })

    }
    


    /**
     * Whene Element change properties
     */
    attributeChangedCallback(name: string, value: string, oldValue: string){

    }
    


    /**
     * Utilities
     */

    // $initializeProps(){

    //     if(this.props){

    //         Object.entries(this.props).map(prop=>{

    //             if(
    //                 typeof prop[1] == 'string' || typeof prop[1] == 'number' || typeof prop[1] == 'boolean'
    //             ){

    //                 this.setAttribute(prop[0], `${ prop[1] }`)

    //             }

    //             else if(typeof prop[1] == 'object'){

    //                 this.setAttribute(prop[0], JSON.stringify(prop[1]))

    //             }
                
    //         })

    //     }

    //     return this;
        
    // }


    // $fromAttributesProps(props?: P){

    //     this.props = props || this.props;

    //     if(this.props){

    //         Object.entries(this.props).map(prop=>{

    //             const get = prop[1] || this.getAttribute(`${ prop[0] }`);

    //             const name = prop[0] as keyof P

    //             this.props[ name ] = get as typeof prop[1];

    //             this.setAttribute(`${ prop[0] }`, get || '')
    
    //         })
            
    //     }

    //     return this.props;

    // }


    // $toAttributesProps(props?: P){

    //     if(props){

    //         Object.entries(props).map(prop=>{

    //             if(!(prop[0] in this.props)){ return; }

    //             const name = prop[0] as keyof P

    //             if(
    //                 typeof prop[1] == 'string' || typeof prop[1] == 'number' || typeof prop[1] == 'boolean'
    //             ){

    //                 this.setAttribute(`${ name }`, `${ prop[1] }`)

    //             }

    //             else if(typeof prop[1] == 'object'){

    //                 this.setAttribute(`${ name }`, JSON.stringify(prop[1]))

    //             }
                
    //             this.props[ name ] = prop[1]
                
    //         })
            
    //     }

    //     return props;

    // }

    
    
    


    /**
     * Abstracts
     */
    render(props?: P){return this;}

    
    show(){return this;}

    
    hide(){return this;}
    
    
}










/**
 * Sensen Component Controller
 */

window.SensenAvailableComponents = {}

export class ComponentController<

    State extends ComponentState, 
    
    Props extends ComponentProps,
    
    Methods extends ComponentMethodRaw<State, Props>

>{

    $prefix : string = 's';
    
    $templating: boolean = true;


    $tagName : string = '';

    state : { [S in keyof State] : State[S] };

    props : { [P in keyof Props] : Props[P] } = {} as { [P in keyof Props] : Props[P] };

    methods : { [M in keyof Methods] : Methods[M] } = {} as { [M in keyof Methods] : Methods[M] };

    $options : TComponentOptions<State, Props, Methods> = {} as TComponentOptions<State, Props, Methods>
    
    $emitter? : SensenEmitter;

    // $klass? : CustomElementConstructor;
    
    isReady: boolean = false;


    #hydrates? : ComponentHydrates<State, Props, Methods>;
    
    #mutationObserver? : MutationObserver;

    #mutationObserved? : MutationRecord[];


    template?: string;


    #pending: number = 0;

    #completed: number = 0;
    

    /**
     * New Construct
     */
     constructor(options: TComponentOptions<State, Props, Methods>, params?:{

        prefix?: string,

        templating?: boolean,
         
     }){

        params = (params && typeof params == 'object') ? params : {}
        

        this.$prefix = params.prefix || this.$prefix;

        this.$templating = (params.templating === false) ? false : this.$templating;

        
        this.$options = options;


        this.state = Object.assign({}, this.$options.state||{}) as State
        
        this.methods = Object.assign({}, this.$options.methods||{}) as Methods
        
        this.$tagName = `${ this.$prefix }-${ this.$options.name }`


        this.$emitter = new SensenEmitter();
        
        this.#hydrates = new ComponentHydrates<typeof this.state, Props, Methods>(this)
        

        this.$make();
        
    }



    $makeProps(){

        const props : Props = {} as Props;

        /**
         * Merge Element Atributes
         */

        Object.entries(this.$options.props||{}).map($=>{

            if(this.$options.element instanceof SensenHTMLElement){
                
                let get = this.$options.element.getAttribute(`prop:${ $[0] }`)

                if($[1] instanceof ComponentVariable){ 
                    
                    $[1].trigger();

                    $[1].value = get || $[1].value;

                    props[ $[0] as keyof Props ] = $[1].value as Props[ keyof Props ]

                }

                else{

                    props[ $[0] as keyof Props ] = (get || $[1]) as Props[ keyof Props ]
                    
                }

                this.$options.element.setAttribute(`prop:${ $[0] }`, `${ props[ $[0] as keyof Props ] }`)

            }
        
            
        })
        
        this.props = props;
        
        return this;

    }



    $make(){

        this
         
            .#camouflage()
        
            .$emitting()

            .$makeTemplate()
                
                .then(tpl=>{

                    if(this.$templating === true){

                        if(tpl){
        
                            this.template = tpl;
        
                            if(this.$options.element instanceof HTMLElement){
        
                                this.$options.element.innerHTML = tpl;
                                
                            }
                            
                        }
            
                        this
                    
                            .$observers()

                            .$makeProps()
                
                            .$compilate()
        
                        ;

                    }

    
        
                })
            
        ;
        

        return this;
        
    }
    
    



    /**
     * set Template
     */
    $makeTemplate(){

        return new Promise<string | 0 | undefined>((resolve, reject)=>{

            if( this.$templating === true ){


                this.$options.template = (this.$options.template === true) 

                    ? `${ this.$options.name }.html` : this.$options.template;
        

                if(typeof this.$options.template != 'string'){

                    if(this.$options.element instanceof HTMLElement){
    
                        if('innerHTML' in this.$options.element){
    
                            resolve(this.$options.element.innerHTML)
    
                            return;
    
                        }
    
                    }
                    
                    resolve(undefined);
    
                    return;
                    
                }
    
                else{
    
                    /**
                     * Check 
                     */
                    const check = this.$options.template.match(/<\/?[^>]+>/gi);
    
    
                    /**
                     * If Template is String HTML code
                     */
                    if(check){ resolve(this.$options.template); return; }
    
    
    
                    /**
                     * Else, it's file path
                     */
    
                    const url = new URL(location.href)
    
                    const path = `${ url.origin }${ (url.pathname == '/') ? '' : url.pathname }/sensen/components/${ this.$options.template }`
    
    
                    fetch(path).then(d=>{ if(d.status == 404){ return undefined } return d.text() })
    
                        .then(data=>{
    
                            if(data){
    
                                resolve(data)
    
                            }
    
                            else{ resolve(undefined); }
    
                    
                        })
    
                        .catch(er=>{ resolve(undefined); })
    
    
                    return;
                    
                }
                
    
            }

            else{

                resolve(0)
                
            }
 

            
            
        })
        
    }
    
    



    /**
     * Camouflage
     */
    #camouflage(){

        this.$emitter?.listen<typeof this>('start', ()=>{

            if(this.$options.element instanceof HTMLElement){

                this.$options.element.style.display = 'none';

            }
            
        })

        this.$emitter?.listen<typeof this>('ready', ()=>{

            if(this.$options.element instanceof HTMLElement){

                // @ts-ignore
                this.$options.element.style.display = null;

            }
            
        })


        return this;
        
    }
    



    /**
     * Initialize
     */

    $initialize(){

        this.$initializeElement();

        /** * Emit Event */
        this.$emitter?.dispatch('start', this);

        return this;
        
    }



    $initializeElement(props?: TComponentOptions<State, Props, Methods>){

        const $props = props || this.$options || null;

        const self = this;


        if($props){

            // this.$tagName = `s-${ $props.name }`


            /**
             * Find current Element sent
             */
            if(this.$options.element){

                if(typeof this.$options.element == 'string'){

                    this.$options.element = document.querySelector(`${ this.$options.element }`) as SensenHTMLElement<Props>
                    
                }
                
            }

            
            /**
             * Define custom Element
             */
            if(this.$options.element instanceof HTMLElement){

                this.$options.element?.setAttribute('is', `${ this.$tagName }`)

            }
            
            if(!(this.$options.element instanceof HTMLElement)){

                this.$options.element = document.createElement(`${ this.$tagName }`) as SensenHTMLElement<Props>

            }


            /** * Emit Event */
            this.$emitter?.dispatch('elementReady', this);

            
        }


        return this;
        
    }









    /**
     * DOM Observer
     */
    $observers(params?: TComponentObserversParams){

        const $params : TComponentObserversParams = params || {} as TComponentObserversParams


        $params.excludeTags = params?.excludeTags || []

        // console.warn('Self Props', this.props)


        if(this.$options.element instanceof HTMLElement){
               
            this.#mutationObserver = new MutationObserver((records)=>{

                if(records){

                    this.#mutationObserved = records

                    const excludeTags = $params.excludeTags

                    // const excludeTags = Object.keys(window.SensenAvailableComponents).map(k=>k.toLowerCase())


                    records.forEach(record=>{


                        if(excludeTags?.length){

                            if(record.target instanceof SensenHTMLElement){

                                if(excludeTags.indexOf( record.target.tagName.toLowerCase() ) > - 1){

                                    // console.warn('Exclude tag', record.target)

                                    return;
                                    
                                }

                            }
                            
                            
                        }


                        if(record.type == 'attributes'){
                                    

                            if(record.attributeName && this.$options.element instanceof HTMLElement){

                                // if(record.attributeName in this.props){

                                //     const key = record.attributeName as keyof Props

                                //     const value = this.$options.element.getAttribute(record.attributeName)

                                //     // @ts-ignore
                                //     this.props[ key ] = value;

                                //     if(this.$options.element instanceof SensenHTMLElement){

                                //         this.$options.element.props[ key ] = SetDataLikeType(value) as Props[ typeof key ];

                                //     }

            
                                //     /** * Emit Event */
                                //     this.$emitter?.dispatch('propsChanged', {
                                //         name: record.attributeName,
                                //         value,
                                //         oldValue: record.oldValue
                                //     });

                                // }
                                
                            }

                            
                        }

                        

                        /** * Emit Event */
                        this.$emitter?.dispatch('mutationObserved', record);

                    })
                    
                    /** * Emit Event */
                    this.$emitter?.dispatch('mutationsObserved', records);

                }
    
                
            })

    
            this.#mutationObserver.observe(this.$options.element,{
                
                childList: true,
                
                subtree: true,
                
                attributes: true,

                characterData: true,

                characterDataOldValue: true,

                attributeOldValue: true,

                attributeFilter: Object.keys(this.props)

            })
            
            
            /** * Emit Event */
            this.$emitter?.dispatch('mutationObservationReady', this.#mutationObserver);

        }




        return this;
        
    }
    






    hydratesState(slot: keyof State){

        const store = this.#hydrates?.$state.retrieve( slot )

        
        if(store?.length){
            
            store.map(record=>{
                
                this.#hydrates?.hydratesRecord(record)

                    .then((data)=>{
        
                        /** * Emit Event */
                        this.$emitter?.dispatch('stateHydrated', {record, data});
        
                    })
                
            })
            
        }


        return this;
        
    }







    /**
     * Compilate transactions
     */
    $compilate(){


        if(this.$options.element instanceof HTMLElement){

            const found = FindExpressions(this.$options.element, (record)=>{

                this.#pending++;
                

                /**
                 * Find State to auto-compilate
                 */

                if(typeof this.state == 'object'){

                    const value = record.mockup?.textContent;

                    
                    const sMatches = [

                        ...(value||'').matchAll(new RegExp(`(${ Object.keys(this.state).join('|') })`, 'g')),

                        ...(value||'').matchAll(new RegExp(`this\\.state\\.(${ Object.keys(this.state).join(')|this\\.state\\.(') })`, 'g')),

                        // ...(value||'').matchAll(new RegExp(`this\\.props\\.${ Object.keys(this.props).join('|this\\.props\\.') }`, 'g')),

                    ]


                    if(sMatches.length){

                        sMatches.map(match=>{

                            const recordClone = Object.assign({}, record)

                            const purge = match.filter(v=>v!=undefined)

                            const slot = purge[1] as keyof State

                            // @ts-ignore
                            purge.input = match.input

                            recordClone.match = purge;

                            this.#hydrates?.$state.push(slot, recordClone)
                            
                        })
                        
                    }

                }


                /** * Emit Event */
                this.$emitter?.dispatch('expressionDetected', record);

            })



            /**
             * No Expression detected
             */

            if(!found.length){

                this.#checkCompilatedDone([]);
                
            }
            
            
        }

        /** * Emit Event */
        this.$emitter?.dispatch('compilationReady', this);

        return this;
        
    }






    #checkCompilatedDone(lot: (ExpressionRecord | undefined)[]){

        if(this.#pending == this.#completed){
    
            /** * Emit Event */
            this.$emitter?.dispatch('compilated', lot);

            if(!this.isReady){ 
                
                this.isReady = true; 
                
                /** * Emit Event */
                this.$emitter?.dispatch('ready', this);
    
            }

            
        }

        return this;

    }






    /**
     * Emitting
     */
    $emitting(){


        /**
         * Model : Begin
         */

        this.$emitter?.listen<typeof this>('elementReady', (args)=>{
            
        })

        /**
         * Model : End
         */



        /**
         * Mutations Observers : Begin
         */

        this.$emitter?.listen<MutationObserver>('mutationObservationReady', (args)=>{

            // console.warn('Mutation Observed', args)
            
        })


        this.$emitter?.listen<MutationRecord>('mutationObserved', (args)=>{

            
            if(args.emit.target){

                this.#hydrates?.hydratesNode(args.emit.target)

            }

            
        })

        this.$emitter?.listen('mutationsObserved', (args)=>{

            // console.warn('Mutations Observed', args)
            
        })

        /**
         * Mutations Observers : End
         */






        /**
         * Compilate Record : Begin
         */

        this.$emitter?.listen<ExpressionRecord>('expressionDetected', ($)=>{

            const promised: (Promise<ExpressionRecord> | undefined)[] = []

            

            if($.emit){

                if($.emit.type == 'echo'){

                    promised.push(CompilateEcho(this, $.emit))
    
                }

                else if($.emit.type == 'snapcode'){

                    promised.push(CompilateSnapCode(this, $.emit))
    
                }

                else if($.emit.type == 'attribute.echo'){

                    
                    // if($.emit.node === this.$options.element){
                        
                    //     console.warn('Record Attribute echo ', $.emit.node === this.$options.element, $.emit.attribute)

                    //     return false;
                        
                    // }

                    promised.push(CompilateEchoAttributes(this, $.emit))
    
                }

                else if($.emit.type == 'attribute.snapcode'){

                    promised.push(CompilateSnapCodeAttributes(this, $.emit))
    
                }

                else if($.emit.type == 'directive'){

                    promised.push(

                        new Promise<ExpressionRecord>((r,j)=>{

                            if(!('directive' in $.emit)){
                                throw (`Corrupted directive : not found`);
                            }

                            if(typeof $.emit.directive?.main != 'function'){
                                throw (`Corrupted directive : < ${ $.emit.directive?.name } >`);
                            }
    
                            $.emit.directive.main(this, $.emit)
                           
                            r($.emit)
        
                        })

                    )
    
                }
    
            }


            if(promised.length){

                Promise.all(promised)

                    .then(lot=>{
        
                        this.#completed++;

                        // console.warn('Compilated', lot)

                        this.#checkCompilatedDone(lot);

                    })
    
                ;
                
    
            }

            if(!promised.length){

                this.#checkCompilatedDone([]);
                
            }
            
        })

        this.$emitter?.listen<typeof this>('compilate', (args)=>{

            // console.warn('Expression Recorded', args.emit)
            
        })


        /**
         * Compilate Record : End
         */






        /**
         * Custom Emitter Listener : Begin
         */

        if(this.$options.emit){

            Object.entries(this.$options.emit).map(e=>{

                if(typeof e[1] == 'function'){

                    const self = this;

                    this.$emitter?.listen(e[0], function(){ 
                        
                        // @ts-ignore
                        e[1].apply(this, [arguments[0]]) 
                    
                    })
                    
                }
                
            })
            
        }

        /**
         * Custom Emitter Listener : End
         */




        return this;

    }

    
    
    
}









/**
 * Sensen Component
 */

export class Component<

    State extends ComponentState, 
    
    Props extends ComponentProps,
    
    Methods extends ComponentMethodRaw<State, Props>
    
>{

    $tagName : string = '';

    $options : TComponentOptions<State, Props, Methods> = {} as TComponentOptions<State, Props, Methods>

    $klass? : CustomElementConstructor;
    

    $appearance : SensenAppearance;


    /**
     * New Construct
     */
     constructor(options: TComponentOptions<State, Props, Methods>){

        this.$options = options;

        this.$options.appearance = this.$options.appearance || {} as TAppearanceProps
        
        this.$appearance = new SensenAppearance(this.$options.appearance)
        
        this.$tagName = `s-${ this.$options.name }`;

        
        this.$appearance.mount()

        this.$create();

    }




    $create(){


        if(!customElements.get(this.$tagName)){

            const self = this;


            this.$klass = class extends SensenHTMLElement<Props>{


                $controller: ComponentController<State, Props, Methods> = {} as ComponentController<State, Props, Methods>

    
                constructor(props: Props){
    
                    super(props);


                    this.props = {} as Props

                    this.$initialize()

                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('construct', this.$controller);

                }
                
        
                $initialize(){
        
                    const $options = Object.assign({}, self.$options)
                    
                    
                    $options.element = this;


                    this.$controller = new ComponentController<State, Props, Methods>($options)


    
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('connected', this.$controller);


                    /**
                     * Set Appearance
                     */
                    this.classList.add(self.$appearance.$UiD)
                    
                    
                    return this;
                    
                }



    
                connectedCallback(){
        
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('connected', this.$controller);
                    
                }
        
        
                adoptedCallback(){
        
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('adopted', this.$controller);
                    
                }
        
        
                disconnectedCallback(){

                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('disconnected', this.$controller);
                    
                }
        
        
                attributeChangedCallback(name: string, value:string, oldValue:string){

                    console.log('Props changed', name, value, oldValue)
        
                    /** * Emit Event */
                    this.$controller.$emitter?.dispatch('nPropsChanged', { name, value, oldValue });
                    
                }
        
                
            }
    
    

            window.SensenAvailableComponents[ this.$tagName ] = this.$klass;
    
            customElements.define(this.$tagName.toLowerCase(), this.$klass )
    
            
        }


        return this;
        
    }
    
    


    use(){

        return this;
        
    }





}





/**
 * Exportations
 */

 export default class Sensen {

    static Component = Component;




    static Main(data: any){

        switch( typeof data ){

            case 'object':

                if(data instanceof SensenHTMLElement){

                    document.body.insertBefore( data, document.body.firstChild );
                    
                }

            break;
            
        }


        return this;
        
    }
    
}


