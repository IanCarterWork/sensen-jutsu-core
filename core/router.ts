import { SceneActivity, SensenSceneActivities } from "./activity";
import { SensenFxEngine } from "./fx";
import { FxPresenter } from "./fx/preset";
import { SceneActivityProps, SceneActivityRouteName, TSensenWindow } from "./index.t";


const SensenWindow = {} as TSensenWindow


export type RouterConfig = {

    default: string;

    canvas: string | HTMLElement;

    baseURL?: string;
    
}


interface Window{

    SceneActivity: typeof SceneActivity;
    
}


// export type RouterStates = {

//     [K : SceneActivityRouteName] : SensenSceneActivities

// }




export class SensenRouter<B extends SceneActivityProps>{


    config: RouterConfig;

    routes: { 
        
        [x in keyof B] : SceneActivity<B[x]> 
    
    } = {} as { [x in keyof B] : SceneActivity<B[x]> };
    
    activity: SceneActivity<B[ string ]> = {} as SceneActivity<B[ string ]>
    
    root: HTMLElement = {} as HTMLElement;
    
    canvas?: HTMLElement | null;



    constructor(config: RouterConfig){

        this.config = config;
        
        this.initialize()
        
    }



    get<P extends SceneActivityProps>(activity :  SceneActivity<P> ){

        if(typeof activity.config?.route == 'string'){

            const key = activity.config.route as keyof B
            
            this.routes[ key ] = activity as SceneActivity<B[ keyof B]>

        }

        return this;
        
    }
    



    initialize(){

        this.canvas = (this.config.canvas instanceof HTMLElement)

            ? this.config.canvas

            : document.querySelector(this.config.canvas)

        ;

        
        return this;
        
    }
    


    clean(){

        if(this.canvas instanceof HTMLElement){

            this.canvas.innerHTML = ''

        }
        
        return this;
        
    }
    


    render(){

        this.clean();
        
        window.addEventListener('hashchange', ()=>{

            const slug = (location.hash || '').substring(1);

            this.navigate(slug)
            
        })

        
        if(location.hash){

            // console.warn('Go to view', location.hash.substring(1))

            this.navigate(location.hash.substring(1))

        }

        else if(this.config.default){

            // console.warn('Go to default view', this.config.default)

            this.navigate(this.config.default)
            
        }

        else{

            alert('Router UnBoot, \nAjouter une route par default ')
            
        }
        
        return this;

    }



    parseSlug(slug: keyof B){

        const ex = (`${ slug }`).split('?')

        return {

            name: ex[0],

            search: ex[1]||''

        }

    }
    
    

    async navigate(slug: keyof B, props?: {
        [K in keyof B] ?: any
    }){

        const parsed = this.parseSlug(slug || this.config.default)

        
        
        return new Promise<typeof SceneActivity>(async (resolve: Function, reject: Function)=>{
    
           const activity = this.routes[ parsed.name ] || undefined;


            if(activity){
                
                const firstTime = !activity.isReady ? true : false;

                const oldActivity = SensenWindow.$SceneActivity;
                

                activity.render(props as B[ keyof B])
                
                if(activity.$element instanceof HTMLElement && this.canvas instanceof HTMLElement){



                    // console.warn('Set EXIT Animation on', SensenWindow.$SceneActivity )

                    // if(SensenWindow.$SceneActivity){

                    //     if(SensenWindow.$SceneActivity.config?.options?.transition){

                    //         console.log('Fx Transition', SensenWindow.$SceneActivity.config?.options?.transition)
                            
                    //     }

                        
                    // }
                    

                    
                    this.activity = activity;

                    if(this.activity.$element instanceof HTMLElement){
                    
                        this.canvas?.appendChild(this.activity.$element);

                        SensenWindow.$SceneActivity = activity as SceneActivity<SceneActivityProps>;

                    }



                    /**
                     * Exit Reverse Transition
                     */
                    if(oldActivity && oldActivity.config?.options?.transition && firstTime){

                        if(oldActivity.config.options.transition.exit instanceof FxPresenter){

                            oldActivity.config?.options?.transition.exit.exitReverse(

                                oldActivity.$element
                                
                            ).then(r=>{

                            }).catch(er=>{

                                console.error('Transition Error', er)
                                
                            })

                        }

                        
                    }

                    
                    /**
                     * Exit Reverse Transition
                     */
                    if(oldActivity && oldActivity.config?.options?.transition && !firstTime){

                        if(oldActivity.config.options.transition.exit instanceof FxPresenter){

                            oldActivity.config?.options?.transition.exit.exit(

                                oldActivity.$element
                                
                            ).then(r=>{

                            }).catch(er=>{

                                console.error('Transition Error', er)
                                
                            })

                        }

                        
                    }


                    
                    
                    

                    /**
                     * Entry Reverse Transition
                     */
                    if(activity.config?.options?.transition && !firstTime){

                        if(activity.config.options.transition.entry instanceof FxPresenter){

                            activity.config?.options?.transition.entry.entryReverse(

                                activity.$element
                                
                            ).then(r=>{


                                if(oldActivity && oldActivity.$element){ 
                                    
                                    oldActivity.$element.innerHTML = '' 

                                    oldActivity.isReady = false;
                                
                                }
                                
                            }).catch(er=>{

                                console.error('Transition Error', er)
                                
                            })

                        }

                        
                    }
                    

                    /**
                     * Entry Transition
                     */
                    if(activity.config?.options?.transition && firstTime){

                        if(activity.config.options.transition.entry instanceof FxPresenter){

                            activity.config?.options?.transition.entry.entry(

                                activity.$element
                                
                            ).then(r=>{

                                if(oldActivity && oldActivity.$element){ 
                                    
                                    oldActivity.$element.innerHTML = '' 
                                
                                }
                                
                            }).catch(er=>{

                                console.error('Transition Error', er)
                                
                            })

                        }

                        
                    }


                    
                    
                }

                else{

                    throw (`This activity has not available "$element" `)
                    
                }

    
            }

            else{

                throw (`Sensen Router say route < \n${ slug } > not found`)
                    
            }
            
        });
        
    }

    
    
}

