import { ComponentController } from ".";
import { StabilizeEchoExpression, StabilizeSnapCodeExpression, SyDetr, SyntaxEcho } from "./expression";
import type { ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord } from "./index.t";
import { render } from 'ejs';
import { StabilizeContent } from "./utilities";



/**
 * Fragment rendering from String
 */

export async function RenderEngine<

    S extends ComponentState, 
    
    P extends ComponentProps,
    
    M extends ComponentMethodRaw<S, P>
    
>(input: string, context: ComponentController<S, P, M>, dictionary: { [K: string] : any  } ){
     
    return render(`${ input }`, dictionary, {
        
        delimiter: `${ SyDetr }`,
        
        // client: true,

        context: context,

        async: true,

        // includer: (original, parsed)=>{

        //     return {
        //         filename:'',
        //     }

        // }
        
    })

}



export async function SockRenderEngine(input: string | null, context: {}, dictionary: { [K: string] : any  } ){
     
    return render(`${ input }`, dictionary, {
        
        delimiter: `${ SyDetr }`,

        context: context,

        async: true,

    })

}



export function CompilateErrorException(err: any){

    console.error('Compilate Error////', err )

}





export function CompilateEcho<

    S extends ComponentState, 
    
    P extends ComponentProps,
    
    M extends ComponentMethodRaw<S, P>
    
>(component: ComponentController<S, P, M>, record: ExpressionRecord){

    if(!record.echo){ return undefined;}
    
    return new Promise<typeof record>((resolve, reject)=>{

        const raw = (record.match) ? record.match[0] : '';
        
        const expression = ((record.match) ? record.match[1] : '').trim();
        
        let mockup = record.mockup?.textContent || '';


        /**
         * Prepares
         */

        const matches = [...mockup.matchAll(SyntaxEcho)]

        if(matches.length){

            matches.map(m=>{

                mockup = mockup.replace(
                    new RegExp( (m[0]).replace(/[^\w\s]/gi, '\\$&') , 'g' ), 
                    `<${SyDetr}=${ m[1] } ${SyDetr}>` 
                )
                
            })
            
        }


        /**
         * Rendering
         */
        RenderEngine<S, P, M>((

            // mockup.replace(new RegExp(raw, 'g'), `<${SyDetr}=${ expression } ${SyDetr}>` )

            StabilizeEchoExpression( mockup.replace( 
                new RegExp( (raw).replace(/[^\w\s]/gi, '\\$&') , 'g' ), 
                `<${SyDetr}=${ expression } ${SyDetr}>` 
            ) ) ||''

        ), component, component.state).then(result=>{

            if(record.node instanceof HTMLElement){

                record.node.innerHTML = result;

            }

            else if(record.node instanceof Node){

                record.node.textContent = result

            }


            resolve(record)

        }).catch(er=>{

            CompilateErrorException(er)

            reject(er)
            
        })
        
    })
    
    
}





export function CompilateSnapCode<

    S extends ComponentState, 
    
    P extends ComponentProps,
    
    M extends ComponentMethodRaw<S, P>
    
>(component: ComponentController<S, P, M>, record: ExpressionRecord){


    if(!record.snapcode){ return undefined;}
    
    return new Promise<typeof record>((resolve, reject)=>{

        // @ts-ignore
        let mockup = (record.mockup?.innerHTML || record.mockup?.textContent || '') as string;


        mockup = StabilizeContent(mockup)

        record.snapcode?.map(snap=>{

            snap.matches.map(match=>{

                mockup = mockup.replace( new RegExp( (match[0]).replace(/[^\w\s]/gi, '\\$&') , 'g' ), `<${SyDetr}${ match[1] } ${SyDetr}>` ) 

            })
            
        })

        
        RenderEngine(StabilizeSnapCodeExpression(mockup)||'', component, component.state).then(result=>{

            if(record.node instanceof HTMLElement){

                record.node.innerHTML = result;

            }

            else if(record.node instanceof Node){

                record.node.textContent = result;

            }

            resolve(record)

        }).catch(er=>{

            CompilateErrorException(er)

            reject(er)
            
        })
        
    })
    
    
}





export function CompilateSnapCodeAttributes<

    S extends ComponentState, 
    
    P extends ComponentProps,
    
    M extends ComponentMethodRaw<S, P>
    
>(component: ComponentController<S, P, M>, record: ExpressionRecord){


    if(!record.attribute && record.type == 'attribute.snapcode'){ return undefined;}
    
    return new Promise<typeof record>((resolve, reject)=>{

        const name = record.attribute?.name as string

        let mockup = (record.mockup?.textContent || '') as string;
        
        if(record.match){

            mockup = mockup.replace( new RegExp( (record.match[0]||'').replace(/[^\w\s]/gi, '\\$&') , 'g' ), `<${SyDetr}${ record.match[1] } ${SyDetr}>` ) 

        }

        RenderEngine(mockup, component, component.state).then(result=>{

            if('attributes' in record.node){

                record.node.setAttribute(name, result);

            }

            resolve(record)

        }).catch(er=>{

            CompilateErrorException(er)

            reject(er)
            
        })
        
    })
    
    
}





export function CompilateEchoAttributes<

    S extends ComponentState, 
    
    P extends ComponentProps,
    
    M extends ComponentMethodRaw<S, P>
    
>(component: ComponentController<S, P, M>, record: ExpressionRecord){


    if(!record.attribute && record.type == 'attribute.echo'){ return undefined;}
    
    return new Promise<typeof record>((resolve, reject)=>{

        const name = record.attribute?.name as string

        let mockup = (record.mockup?.textContent || '') as string;
        
        if(record.match){

            mockup = mockup.replace( new RegExp( (record.match[0]||'').replace(/[^\w\s]/gi, '\\$&') , 'g' ), `<${SyDetr}=${ record.match[1] } ${SyDetr}>` ) 

        }

        RenderEngine(mockup, component, component.state).then(result=>{

            if('attributes' in record.node){

                record.node.setAttribute(name, result);

            }

            resolve(record)

        }).catch(er=>{

            CompilateErrorException(er)

            reject(er)
            
        })
        
    })
    
    
}






