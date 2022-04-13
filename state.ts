import { SensenEmitter } from "./emitter";



type TSensenStateDynamicObject = {
    
    [K : string | number] : any

}




export class SensenState{


    store : SensenStateProps = {}

    $emitter: SensenEmitter = new SensenEmitter()


    constructor(public state : SensenStateProps){

        this.store = {...(this.state||{})}
        
        // this.store = Object.assign({}, {...(this.state||{})} )    

        this.proxies();
        
    }
    



    make(key : string | number | symbol, value : any){

        const slot = key as keyof typeof this.state

        this.state[slot] = this.state[slot] || value;

    
        if(Array.isArray(value)){

            // this.store[ slot ] = [...value];
            
            this.setObjectProxy(slot, [...value] as typeof this.state[typeof slot] );
        
            
        }
        
        else if(typeof value == 'object'){

            // this.store[ slot ] = {...value};
            
            this.setObjectProxy(slot, {...value} as typeof this.state[typeof slot] );
            
        }
        
        else{

            this.store[ slot ] = value;

            this.setDataProxy(slot);
            
        }
            

        return this.state[ slot ];
        
    }
    


    proxies(){

        if(typeof this.state == 'object'){

            Object.entries( this.state ).map($=>{

                const slot = $[0] as keyof typeof this.state;
                
                this.make(slot, $[1])

            })
            
        }


        return this;
        
    }
    
    




    setObjectProxy(
        
        slot: keyof typeof this.state, 
        
        input:  typeof this.state[keyof typeof this.state]
        
    ){

        const $ = this;

        this.state[ slot ] = new Proxy<typeof input>(this.state[ slot ], {

            set: function(target, prop, value){

                target[prop] = value

                $.store[slot] = value;

                $.$emitter.dispatch('objectHydrates', { slot, value: target[prop] });

                $.$emitter.dispatch('hydrates', { slot, value: target[prop] });
                
                return true;
                
            }

        })

        return this;
        
    }





    setDataProxy(slot: keyof typeof this.state){

        const $ = this;

        Object.defineProperty(this.state, slot, {

            get(){ return $.store[ slot ]; },

            set(value){

                $.store[ slot ] = value;

                // console.log('setDataProxy : ', slot, ' = ', value)

                $.$emitter.dispatch('dataHydrates', { slot, value });

                $.$emitter.dispatch('hydrates', { slot, value });
                
                return true;

            },

        })

        return this;
        
    }

    
    
}