



/**
 * UseProperty
 */

import { Component, ComponentController } from "./index";
import { ComponentMethodRaw, ComponentProps, ComponentState } from "./index.t";

export function UseVariable(name:string, initial: any){
    
    const build:{ [x: typeof name] : typeof initial } = {}

        build[ name ] = (new ComponentVariable(name, initial))

    return build;

}







export class ComponentVariable{



    // component?: object

    exchange: any;
    

    constructor(
        
        public name:string,

        public value: any
        
    ){

        this.exchange = this.value

    }




    setHydrates(value: typeof this.value){

        return this;
        
    }




    setObjectProxy(value: object){

        const $ = this;

        this.value = new Proxy<typeof this.value>(value, {

            get: function(target, prop){
                
                return target[prop];
                
            },
            
            set: function(target, prop, value, prox){

                target[prop] = value

                $.setHydrates(value)

                return true;
                
            }

        })

        return this;
        
    }









    setDataProxy(){

        const $ = this;

        Object.defineProperty(this, 'value', {

            get(){ return $.exchange; },

            set(value){

                // console.warn('Variable Change', value)

                $.exchange = value
                
                $.setHydrates(value)
                
                return true;

            },

        })

        return this;
        
    }





    
    
    
    


    /**
     * Build State Proxies
     * @description Use this to activate the dynamic state. For default the construct call this
     */
    proxy(){

        if(typeof this.value == 'function'){ return ; }


        /**
         * Array Proxy
         */
        if(Array.isArray(this.value)){

            this.setObjectProxy([...this.value])

        }


        /**
         * Object Proxy
         */
        else if(typeof this.value == 'object'){

            this.setObjectProxy({...this.value} )
            
        }
        

        /**
         * Normal Data Proxy
         */

        else{

            this.setDataProxy()

        }

        return this;
        
    }



    trigger(){

        // this.component = component

        this.proxy();

        return this;
        
    }



}
