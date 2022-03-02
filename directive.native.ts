import { ComponentController, CreateComponentMethodEvent } from "./index";
import { DirectiveAttributes } from "./directive"
import { ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord } from "./index.t";



/**
 * Directive Configurations
 */

window.GlobalDirectiveAttributes.Define({

    name:'action',
    
    expression:'@',
    
    main: < S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P> >(component: ComponentController<S, P, M>, record: ExpressionRecord)=>{
    
        /**
         * HTMLElement Only
         */
        if(record.node instanceof HTMLElement){
            
            const alreadyKey = `directiveState${ record.directive?.expression }` as keyof HTMLElement;

            const args = Array.isArray(record.arguments) ? record.arguments : [];


            /**
             * Evité les abus de définition
             */
            if(record.node[ alreadyKey ]){ return ; }
            

            /**
             * Definition de l'évènement 
             */
            record.node.addEventListener(`${ record.name }`, (ev: Event)=>{
    
                const attrib = (
                    
                    ('attributes' in record.node) 
                    
                    ? record.node.getAttribute(record.match?.input||'')
    
                    : ''
    
                )?.trim();
    
                if(args.indexOf('prevent') > -1){ ev.preventDefault() }
    
                if(args.indexOf('stop') > -1){ ev.stopPropagation() }
    
                // const attrib = value as keyof typeof component.state;
    
    
                /**
                 * Check Component methods
                 */
                const isMethod = attrib?.indexOf(`this.methods.`) == 0;
                
                const _event = CreateComponentMethodEvent(component, ev)
    
    
    
                if(isMethod){
    
                    const method = component.methods[ attrib.substring((`this.methods.`).length) ];
                    
                    /** * Check is transaction function */
                    if(typeof method == 'function'){
                        
                        method.apply(component.state, [_event])
                        
                    }
                    
                }
    
                else{
    
                    if(typeof attrib == 'string' && attrib in window){
    
                        // @ts-ignore
                        const fn = (window[attrib] || (()=>{})) as Function
    
                        if(typeof fn == 'function'){
                            
                            fn.apply(window, [_event])
    
                        }
                        
                    }
                    
                }
                
                    
                
    
    
            }, args.indexOf('capture') > -1 ? true : false)
    


            // @ts-ignore
            record.node[ alreadyKey ] = true;


        }
        
    
    },
    

})



export const NativeDirectiveAttributes = DirectiveAttributes

