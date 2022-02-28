import { SceneActivity, SensenSceneActivities } from "./activity";
import { SensenFxEngine } from "./fx/index";
import { FxPresenter } from "./fx/preset";
import { SceneActivityProps, SceneActivityRouteName, TSceneActivityOptions, TSensenWindow } from "./index.t";


const SensenWindow = {} as TSensenWindow


export type RouterConfig = IRouterConfig & {

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




export class SensenRouter<B extends SensenRouterScheme> implements ISensenRouter{


    $options: RouterConfig;

    routes: { [x in keyof B ] : SceneActivity<B[x]> } = {} as { [x in keyof B] : SceneActivity<B[x]> };
    
    activity: SceneActivity<B[ keyof B]> = {} as SceneActivity<B[ keyof B]>
    
    root: HTMLElement = {} as HTMLElement;
    
    canvas?: HTMLElement;



    constructor($options: RouterConfig){

        this.$options = $options;
        
        this.initialize()

        SensenWindow.$SensenRouter = this;
        
    }



    get<K extends keyof B>(activity :  SceneActivity<B[K]> ){

        if(typeof activity.$options?.route == 'string'){

            const key = activity.$options.route as K
            
            this.routes[ key ] = activity as SceneActivity<B[K]>

        }

        return this;
        
    }
    



    initialize(){

        this.canvas = (this.$options.canvas instanceof HTMLElement)

            ? this.$options.canvas

            : document.querySelector(this.$options.canvas) as HTMLElement

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

        else if(this.$options.default){

            // console.warn('Go to default view', this.$options.default)

            this.navigate(this.$options.default)
            
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
    
    

    async navigate(slug: (keyof B), props?: B[ typeof slug ] ){

        const parsed = this.parseSlug(slug || this.$options.default)

        
        
        return new Promise<typeof SceneActivity>(async (resolve: Function, reject: Function)=>{
    
           const activity : SceneActivity<B[typeof slug]> = this.routes[ parsed.name as keyof B ];


            if(activity){
                
                const firstTime = !activity.isReady ? true : false;

                const oldActivity = SensenWindow.$SceneActivity;
                

                activity.render(props)
                
                if(activity.$element instanceof HTMLElement && this.canvas instanceof HTMLElement){



                    // console.warn('Set EXIT Animation on', SensenWindow.$SceneActivity )

                    // if(SensenWindow.$SceneActivity){

                    //     if(SensenWindow.$SceneActivity.$options?.options?.transition){

                    //         console.log('Fx Transition', SensenWindow.$SceneActivity.$options?.options?.transition)
                            
                    //     }

                        
                    // }
                    
                    
                    this.activity = activity;

                    if(this.activity.$element instanceof HTMLElement){
                    
                        this.canvas?.appendChild(this.activity.$element);

                        // @ts-ignore
                        SensenWindow.$SceneActivity = activity as SceneActivity<SceneActivityProps>;

                    }



                    /**
                     * Exit Reverse Transition
                     */
                    if(oldActivity && oldActivity.$options?.options?.transition && firstTime){

                        if(oldActivity.$options.options.transition.exit instanceof FxPresenter){

                            oldActivity.$options?.options?.transition.exit.exitReverse(

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
                    if(oldActivity && oldActivity.$options?.options?.transition && !firstTime){

                        if(oldActivity.$options.options.transition.exit instanceof FxPresenter){

                            oldActivity.$options?.options?.transition.exit.exit(

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
                    if(activity.$options?.options?.transition && !firstTime){

                        if(activity.$options.options.transition.entry instanceof FxPresenter){

                            activity.$options?.options?.transition.entry.entryReverse(

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
                    if(activity.$options?.options?.transition && firstTime){

                        if(activity.$options.options.transition.entry instanceof FxPresenter){

                            activity.$options?.options?.transition.entry.entry(

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

