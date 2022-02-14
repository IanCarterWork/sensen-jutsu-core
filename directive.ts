import { SceneActivity } from "./activity";
import { ComponentController } from "./index";
import { ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord } from "./index.t";

/**
 * Directives
 */


export type TDirectiveAttribute = {
    name: string;
    expression: string | null;
    main: <
        
        S extends ComponentState, 
        
        P extends ComponentProps,
    
        M extends ComponentMethodRaw<S, P>

    >(component: ComponentController<S, P, M>, record: ExpressionRecord) => void;

    // parser?: <V>(args: {}) => string;

}

export type TDirectiveAttributes = {
    [K: string]: TDirectiveAttribute
}



 export class DirectiveAttributes{


    static Availables: TDirectiveAttributes = {} as TDirectiveAttributes;


    static Define(state: TDirectiveAttribute){

        this.Availables[ state.name ] = state

        return this;
        
    }


    static Merge(...directives: TDirectiveAttribute[]){

        directives.map(directive=>{

            if(directive.name in this.Availables){
                
                throw (`WARNING ${ directive.name } : You want to change the behavior of an existing attribute directive`)

            }

            this.Availables[directive.name] = directive

        })

        return this;

    }


    static Retrive(key: string){

        return this.Availables[ key ] || null
        
    }


    static Retrives(directive: TDirectiveAttribute & TDirectiveAttribute & typeof DirectiveAttributes.Availables){

        return this.Merge(directive).Availables
        
    }
    
    
}


