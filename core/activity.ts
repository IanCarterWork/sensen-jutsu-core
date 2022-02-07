
import { SensenHTMLElement } from ".";
import { SensenAppearance, TAppearanceProps } from "./appearance";
import { SensenEmitter } from "./emitter";
import { SceneActivityOptionsWireframes, SceneActivityProps, TScreenConfig } from "./index.t";
import { SceneActivityBody, useScreenElements } from "./elements/activity";
import { SensenTemplate } from "./template";
import { ActivityWireframe, ActivityWireframeState } from "./wireframe/activity";
import { SensenScript } from "./script";
import { SockRenderEngine } from "./compilate";
import { StabilizeEchoExpression, StabilizeSnapCodeExpression } from "./expression";
import { StabilizeContent } from "./utilities";
import { AppearanceSceneActivity } from "./appearance/activity";


useScreenElements()



export function WireframeTemplateMixer(

    template: HTMLElement, 
    
    wireframe: ActivityWireframeState | undefined, 

    slot: keyof ActivityWireframeState ,
    
    clone: HTMLElement, 
    
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
                
                wireframe?.header?.appendChild( child )

                return child as HTMLElement;

            })

        }

    }

    return WireframeTemplateMixer;
    
}



/**
 * Scene Activity Parent
 */
export interface SensenSceneActivities{


    config?: object;
    
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

}




/**
 * Sensen Screen
 */

export class SceneActivity<Props extends SceneActivityProps> implements SensenSceneActivities{



    config?: TScreenConfig<Props> = {} as TScreenConfig<Props>;
    
    props?: Props = {} as Props

    isReady: boolean = false;
    
    
    $tagName: string;
    
    $appearance?: SensenAppearance = {} as SensenAppearance

    $element?: SensenHTMLElement<Props> = {} as SensenHTMLElement<Props>;
    
    $emitter?: SensenEmitter = {} as SensenEmitter
    
    $klass?: CustomElementConstructor = {} as CustomElementConstructor;



    #mockup: string = '';
    



    constructor(config: TScreenConfig<Props>){

        this.config = config || {}

        this.props = this.config.props || {} as Props

        this.config.appearance = this.config.appearance || {} as TAppearanceProps

        this.$tagName = `activity-${ this.config.name }`

        this.$element = undefined



        this.$appearance = AppearanceSceneActivity().bundle;

        // this.$appearance = new SensenAppearance();

        this.$emitter = new SensenEmitter();


        this
        
            .$emitting()
        
            .$create()
        
            .$makeAppearance(this.config.appearance||{})

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
        
            .Load(this.config?.template||'')

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

        const wireframe = this.$getWireframe(this.config?.options?.wireframe||'basic')

        const template = (new DOMParser()).parseFromString(data, 'text/html');

        let otherElements: HTMLElement[] = []


        /**
         * Find preset Element
         */
        let findHeader = false;

        let findMenu = false;

        let findBody = false;


        let headerFound: HTMLElement = {} as HTMLElement;

        let menuFound: HTMLElement = {} as HTMLElement;

        let bodyFound: HTMLElement = {} as HTMLElement;
        


        /**
         * Get not preset element
         */
        otherElements = Object.values(template.body.children)


        /**
         * Find Header
         */
        .map(child=>{

            if( child.tagName.toLowerCase() == 'scene-header' && findBody === false ){ 

                headerFound = child as HTMLElement;
                
                findHeader = true; 
            
            }

            return child as HTMLElement;
            
        })


        /**
         * Find Menu
         */
        .map(child=>{

            if( child.tagName.toLowerCase() == 'scene-menu' && findBody === false ){ 

                menuFound = child as HTMLElement;
                
                findMenu = true; 
            
            }

            return child as HTMLElement;
            
        })
        


        /**
         * Find Body
         */
        .map(child=>{

            if( child.tagName.toLowerCase() == 'scene-body' && findBody === false ){ 

                bodyFound = child as HTMLElement;
                
                findBody = true; 
            
            }

            return child as HTMLElement;
            
        })
        

        /**
         * Push other Element
         */
        .filter(child=> 
            
            (findBody && child.tagName.toLowerCase() != 'scene-body') &&

            child.tagName.toLowerCase() != 'scene-header' &&

            child.tagName.toLowerCase() != 'scene-menu'
            
        );


        
        /**
         * Make header in wireframe if not exists
         */

        WireframeTemplateMixer(
        
            template.body,
        
            wireframe,
        
            'header',
        
            headerFound,
        
            findHeader
        
        )(
        
            template.body,
        
            wireframe,
        
            'menu',
        
            menuFound,
        
            findMenu
        
        )(
        
            template.body,
        
            wireframe,
        
            'body',
        
            bodyFound,
        
            findBody
        
        )



        /**
         * Wireframe injection
         */

        if(wireframe){                        

            await Object.values(wireframe).reverse().map(async child=>{

                await SockRenderEngine(

                    StabilizeSnapCodeExpression(
                        
                        StabilizeEchoExpression(
                        
                            StabilizeContent(child.outerHTML||'') || ''
    
                            , false

                        )
                    
                        , false
                    )
                    
                    , element, element.props
                
                )

                .then(compilate=>{

                    element.insertAdjacentHTML('afterbegin', compilate)
                      
                })

                .catch(er=>{

                    console.error('Sensen Scene Activity failed:\n', er)

                })
                
            })


        }

        if(otherElements.length){

            otherElements.map(child=>{

                // console.log('Other Element', child)

                element.append(child)
                
            })
            
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

                this.$element = new this.$klass(this.config?.props) as SensenHTMLElement<Props>
    
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

            throw (`It not possible to create a activity with this name "${ this.config?.name }" again `)
            
        }

        if(!customElements.get(this.$tagName)){

            const self = this;


            this.$klass = class extends SensenHTMLElement<Props>{
    
                constructor(props: Props){
    
                    super(props);

                    this.props = props || self.props

                    self.$element = this

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

                    this.props = this.$toAttributesProps(props||undefined) || this.props

                    if(!this.isReady){

                        /**
                         * Load Template
                         */
                        self.$makeTemplate(this);

                        self.$makeObserver(this);
    
                        this.isReady = true;
     
                    }

                    else{

                        this.innerHTML = ''
                        
                        self.$deepRender(this,  self.#mockup)

                    }
    
                    return this;
 
                }
                
                

                
                $initialize(){

                    this.$initializeProps()
                    
                    this.$initializeEUiD()


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

         if(this.config?.emit){

            Object.entries(this.config.emit).map(e=>{

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



