
import { ComponentController, SensenHTMLElement } from "./index";
import { SensenAppearance, TAppearanceProps } from "./appearance/index";
import { SensenEmitter } from "./emitter";
import { ComponentMethodRaw, ComponentMethods, ComponentProps, ComponentState, SceneActivityOptionsWireframes, SceneActivityProps, TSceneActivityOptions } from "./index.t";
import { SceneActivityBody, useScreenElements } from "./elements/activity";
import { SensenTemplate } from "./template";
import { ActivityWireframe, ActivityWireframeState } from "./wireframe/activity";
import { SensenScript } from "./script";
import { CompilateEcho, CompilateEchoAttributes, CompilateSnapCode, CompilateSnapCodeAttributes, SockRenderEngine } from "./compilate";
import { FindExpressions, StabilizeEchoExpression, StabilizeSnapCodeExpression } from "./expression";
import { StabilizeContent } from "./utilities";
import { AppearanceSceneActivity } from "./appearance/activity";
import { SensenRouter } from "./router";


useScreenElements()



export function WireframeTemplateMixer(

    template: HTMLElement, 
    
    wireframe: ActivityWireframeState | undefined, 

    slot: keyof ActivityWireframeState ,
    
    clone?: HTMLElement, 
    
    found: boolean = false
    
){

    /**
     * Build
     */
    if(found && clone){

        Object.values(clone?.childNodes).map(child=>{

            if(wireframe){

                if(wireframe[ slot ]){

                    const element = wireframe[ slot ] as HTMLElement
    
                    element.append(child); 
                    
                    return child;
                    
                }
                
            }
            
        })

    }

    if(!found){

        if(template.children.length){

            Object.values(template.children)
            
            .filter(child=>{
            
                return child.tagName.toLowerCase() == `scene-${ slot }`
            
            })
            
            .map(child=>{

                if(wireframe?.header instanceof HTMLElement){

                    wireframe?.header?.appendChild( child )

                }
                

                return child as HTMLElement;

            })

        }

    }

    return WireframeTemplateMixer;
    
}



/**
 * Scene Activity Parent
 */

export interface SensenSceneActivities extends ISensenSceneActivities{


    $options?: object;
    
    props?: SceneActivityProps;

    isReady: boolean;
    
    
    $tagName: string;
    
    $appearance?: SensenAppearance;

    $element?: SensenHTMLElement<SceneActivityProps>;
    
    $emitter?: SensenEmitter;
    
    $klass?: CustomElementConstructor;


    $makeAppearance : (selectors: TAppearanceProps) => this

    $makeTemplate : Function;

    $getWireframe : Function;

    $controller?: ComponentController<ComponentState, ComponentProps, ComponentMethodRaw<ComponentState, ComponentProps>>

}




/**
 * Sensen Screen
 */

export class SceneActivity<Props extends SceneActivityProps> implements SensenSceneActivities{



    $options?: TSceneActivityOptions<Props> = {} as TSceneActivityOptions<Props>;
    
    props?: Props = {} as Props

    state?: ComponentState = {} as ComponentState

    isReady: boolean = false;
    
    
    $tagName: string;
    
    $appearance?: SensenAppearance = {} as SensenAppearance

    $element?: SensenHTMLElement<Props> = {} as SensenHTMLElement<Props>;
    
    $emitter?: SensenEmitter = {} as SensenEmitter
    
    $klass?: CustomElementConstructor = {} as CustomElementConstructor;


    methods: ComponentMethods<
        
        ComponentState, Props, ComponentMethodRaw<ComponentState, Props>
        
    > = {} as ComponentMethods<
        
        ComponentState, Props, ComponentMethodRaw<ComponentState, Props>
    
    >;

    #mockup: string = '';
    

    // router?: SensenRouter<SceneActivityProps>


    constructor($options: TSceneActivityOptions<Props>){

        this.$options = $options || {}

        this.props = this.$options.props || {} as Props

        // this.state = {} as ComponentState
        this.state = this.$options.state || {} as ComponentState

        this.$options.appearance = this.$options.appearance || {} as TAppearanceProps

        this.$tagName = (`activity-${ this.$options.name }`).toLowerCase()

        this.$element = undefined

        this.methods = this.$options.methods ||  {} as ComponentMethods<
        
            ComponentState, Props, ComponentMethodRaw<ComponentState, Props>
        
        >



        this.$appearance = AppearanceSceneActivity().bundle;

        // this.$appearance = new SensenAppearance();

        this.$emitter = new SensenEmitter();


        this
        
            .$emitting()
        
            .$create()
        
            .$makeAppearance(this.$options.appearance||{})

        ;

    }
    




    $makeAppearance(selectors: TAppearanceProps){

        this.$appearance?.selectors( selectors||{} );

        /** * Emit Event */
        this.$emitter?.dispatch('appearanceReady', this);

        return this;
        
    }





    $makeTemplate(element: SensenHTMLElement<Props>){

        SensenTemplate
        
            .Load(`sensen/activities/${ this.$options?.template || `${ this.$options?.name||'' }.html` }`)

            .then(res=>SensenTemplate.ResolveResponse(res))

            .then(async data=>{

                if(data){

                    this.#mockup = data;

                    this.$deepRender(element,  this.#mockup);
                    
                }

                return element
                  
            })



            .then(async el=>{

                await SensenScript.Run<Props>(element, this)

                .then(scene=>{

                    /** * Emit Event */
                    this.$emitter?.dispatch('ready', this);
            
                })

                .catch(er=>{
    
                    /** * Emit Event */
                    this.$emitter?.dispatch('readyFailed', er);
                    
                })
                    
            })


            .catch(er=>{

                console.warn('Any template loaded', er)
                
                /** * Emit Event */
                this.$emitter?.dispatch('templateLoadingFailed', er);
                
            })

        return this;

    }




    async $deepRender(element: SensenHTMLElement<Props>, data: string){

        const wireframe = this.$getWireframe(this.$options?.options?.wireframe||'basic') || {}

        // const template = (new DOMParser()).parseFromString(data, 'text/html');

        let otherElements: HTMLElement[] = []


        /**
         * Find preset Element
         */
        let findHeader = false;

        let findMenu = false;

        let findBody = false;


        let headerFound: HTMLElement | undefined;

        let menuFound: HTMLElement | undefined;

        let bodyFound: HTMLElement | undefined;
        

        
        
        /**
         * Insertion
         */
        element.insertAdjacentHTML('beforeend', data)


        /**
         * Wireframe Cleaner
         */

        const $header = element.querySelector('scene-header')

        const $body = element.querySelector('scene-body')

        const $menu = element.querySelector('scene-menu')
        
        
        if(!('header' in wireframe)){ $header?.parentNode?.removeChild($header); }

        if(!('body' in wireframe)){ $body?.parentNode?.removeChild($body); }

        if(!('menu' in wireframe)){ $menu?.parentNode?.removeChild($menu); }
        
        
        
        

        // /**
        //  * Get not preset element
        //  */
        // otherElements = Object.values(template.body.children)


        // /**
        //  * Find Header
        //  */
        // .map(child=>{

        //     if( child.tagName.toLowerCase() == 'scene-header' && findBody === false ){ 

        //         headerFound = child as HTMLElement;
                
        //         findHeader = true; 
            
        //     }

        //     return child as HTMLElement;
            
        // })


        // /**
        //  * Find Menu
        //  */
        // .map(child=>{

        //     if( child.tagName.toLowerCase() == 'scene-menu' && findBody === false ){ 

        //         menuFound = child as HTMLElement;
                
        //         findMenu = true; 
            
        //     }

        //     return child as HTMLElement;
            
        // })
        


        // /**
        //  * Find Body
        //  */
        // .map(child=>{

        //     if( child.tagName.toLowerCase() == 'scene-body' && findBody === false ){ 

        //         bodyFound = child as HTMLElement;
                
        //         findBody = true; 
            
        //     }

        //     return child as HTMLElement;
            
        // })
        

        // /**
        //  * Push other Element
        //  */
        // .filter(child=> 
            
        //     (findBody && child.tagName.toLowerCase() != 'scene-body') &&

        //     child.tagName.toLowerCase() != 'scene-header' &&

        //     child.tagName.toLowerCase() != 'scene-menu'
            
        // );


        
        /**
         * Make header in wireframe if not exists
         */

        // WireframeTemplateMixer(
        
        //     template.body,
        
        //     wireframe,
        
        //     'header',
        
        //     headerFound,
        
        //     findHeader
        
        // )(
        
        //     template.body,
        
        //     wireframe,
        
        //     'menu',
        
        //     menuFound,
        
        //     findMenu
        
        // )(
        
        //     template.body,
        
        //     wireframe,
        
        //     'body',
        
        //     bodyFound,
        
        //     findBody
        
        // )



        /**
         * Wireframe injection
         */

        // if(wireframe){                        

        //     await Object.values(wireframe).map(async child=>{

        //         console.warn('Move', child)
                
        //         element.appendChild(child)
                    
        //     })


        // }

        // if(otherElements.length){

        //     otherElements.map(child=>{

        //         element.append(child)
                
        //     })
            
        // }


        if('$controller' in element){

            if(element.$controller instanceof ComponentController){

                element.$controller
                    
                    .$observers({
                        
                        excludeTags: Object.keys(window.SensenAvailableComponents).map(k=>k.toLowerCase())
                        
                    })

                    .$makeProps()
                    
                    // .$compilate()

                ;

            }
            
        }

        
        return this;
        
    }
    
    



    $getWireframe(type: SceneActivityOptionsWireframes){

        switch(type){

            case 'basic': return ActivityWireframe.Basic();

            case 'nav-bottom': return ActivityWireframe.Basic();

            case 'fullscreen': return ActivityWireframe.Fullscreen();

        }

        return undefined

    }
    
    



    render(props?: Props){

        if(this.$element instanceof HTMLElement){
    
            this.$element.render(props)
            
            /** * Emit Event */
            this.$emitter?.dispatch('render', this);

            this.isReady = true;

        }

        else{

            if(this.$klass){

                this.$element = new this.$klass(this.$options?.props) as SensenHTMLElement<Props>
    
                this.$element.render(props)
            
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
    $makeObserver(element: HTMLElement){

        let observer: MutationObserver | undefined;

        if(element instanceof HTMLElement){
               
            observer = new MutationObserver((records)=>{

                if(records){

                    records.forEach(record=>{

                        /** * Emit Event */
                        this.$emitter?.dispatch('mutationObserved', record);

                    })
                    
                    /** * Emit Event */
                    this.$emitter?.dispatch('mutationsObserved', records);

                }
    
                
            })
    
            observer.observe(element,{
                
                childList: true,
                
                subtree: true,
                
                attributes: true,

                characterData: true,

                characterDataOldValue: true,

                attributeOldValue: true,

            })
            
            /** * Emit Event */
            this.$emitter?.dispatch('mutationObservationReady', observer );

        }

        return observer;
        
    }
    






    $create(){

        if(customElements.get(this.$tagName)){

            throw (`It not possible to create a activity with this name "${ this.$options?.name }" again `)
            
        }

        if(!customElements.get(this.$tagName)){

            const self = this;


            this.$klass = class extends SensenHTMLElement<Props>{

                state: ComponentState = {} as ComponentState
    
                $controller: ComponentController<
    
                ComponentState, Props, ComponentMethodRaw<ComponentState, Props>
                    
                > = {} as ComponentController<
                
                    ComponentState, Props, ComponentMethodRaw<ComponentState, Props>
                
                >;


                
                constructor(props: Props){
    
                    super(props);

                    
                    this.props = props || self.props
                    
                    this.state = self.state || {}
                    
                    self.$element = this

                    // this.$fromAttributesProps(props||self.$options?.props)


                    if(self.$options){

                        self.$options.element = this;

                    }
                

                    /**
                     * Initialization
                     */
                    this.$initialize();
        

                    /** * Emit Event */
                    self.$emitter?.dispatch('construct', self);


                }


    

                setProp(name: keyof Props, value: any){

                    if(name in this.props){
            
                        this.props[ name ] = value as Props[ typeof name ]
                        
                    }
            
                    return this;
            
                }





                show(props?: Props){

                    if(typeof props == 'object'){
            
                        Object.entries(props).map(entry=> this.setProp(entry[0], entry[1]) )
                        
                    }
                    
                    /** * Emit Event */
                    self.$emitter?.dispatch('show', this);
                    
                    return this;
                    
                }
            
            
            
            
            
                hide(){
            
                    /** * Emit Event */
                    self.$emitter?.dispatch('hide', this);
                    
                    return this;
            
                }




                render(props?: Props){

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
                
                

                
                $initialize(){

                    // this.$initializeProps()

                    // this.$fromAttributesProps(self.props)
                    
                    
                    this.$initializeEUiD()


                    this.$controller = new ComponentController<
                
                        ComponentState, Props, ComponentMethodRaw<ComponentState, Props>
                
                    >((self.$options || {} as TSceneActivityOptions<Props>), {

                        prefix: 'activity',

                        templating: false,
                        
                    })
                
                

                    this.setAttribute('euid', this.$EUiD)

                    this.classList.add(`${ self.$appearance?.$UiD }`)
                    

                    // Object.defineProperty(this, 'observedAttributes', {
    
                    //     get: function(){
                    //         return (typeof self.props == 'object') ? Object.keys(self.props) : [];
                    //     }
                        
                    // })

                    return this;
                    
                }

    
                connectedCallback(){

                    // console.warn('connected', this)
                    
                    /** * Emit Event */
                    self.$emitter?.dispatch('connected', self);
                    
                }
        
        
                adoptedCallback(){
        
                    // console.warn('adopted', this)

                    /** * Emit Event */
                    self.$emitter?.dispatch('adopted', self);
                    
                }
        
        
                disconnectedCallback(){
        
                    // console.warn('disconnected', this)

                    /** * Emit Event */
                    self.$emitter?.dispatch('disconnected', self);
                    
                }
        
        
                attributeChangedCallback(name: string, value:string, oldValue:string){

                    // console.warn('attributeChanged', this)

                    this.setProp(name, value);

                    /** * Emit Event */
                    self.$emitter?.dispatch('propsChanged', { name, value, oldValue });
                    
                }
        
                
            }
    
            window.SensenAvailableComponents[ this.$tagName ] = this.$klass;
    
            customElements.define(this.$tagName, this.$klass )
    
        }



        
        /** * Emit Event */
        this.$emitter?.dispatch('elementReady', this);

        return this;

    }






    $emitting(){


        this.$emitter?.listen<typeof this>('render',  (self)=>{

            // console.log('Rendering now', self)

            if(!this.isReady){

                this.$appearance?.mount()

            }


        })
        

        /**
         * Custom Emitter Listener : Begin
         */

         if(this.$options?.emit){

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



