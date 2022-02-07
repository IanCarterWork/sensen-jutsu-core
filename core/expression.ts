import { NativeDirectiveAttributes } from "./directive.native";
import { ExpressionRecord, ParseSnapCodeBlock } from "./index.t";
import { ArrayRange } from "./utilities";


/**
 * Expressions
 */




export const SyntaxEcho = new RegExp('{{(.*?)}}', 'g')

export const SyntaxSnapCode = new RegExp('{%(.*?)%}', 'g')

export const SyDetr = '%sn'


export const DirectiveAttributes = NativeDirectiveAttributes




/**
 * Stabilize Echo Expression
 */
export function StabilizeEchoExpression(content: string | null, stop?: boolean){

    const echos = [...(content||'').matchAll(SyntaxEcho)]
     
    if(echos.length){
        
        echos.map(m=>{
            
            content = (content||'').replace(
                new RegExp( (m[0]).replace(/[^\w\s]/gi, '\\$&') , 'g' ), 
                `<${SyDetr}=${ m[1] } ${SyDetr}>` 
            )
                
        })
            
    }

    else{

        if(stop){ return null; }

    }

    return content;

}




/**
 * Stabilize SnapCode Expression
 */
export function StabilizeSnapCodeExpression(content: string | null, stop?: boolean){

    const echos = [...(content||'').matchAll(SyntaxSnapCode)]
     
    if(echos.length){
        
        echos.map(m=>{
            
            content = (content||'').replace(
                new RegExp( (m[0]).replace(/[^\w\s]/gi, '\\$&') , 'g' ), 
                `<${SyDetr}${ m[1] } ${SyDetr}>` 
            )
                
        })
            
    }

    else{

        if(stop){ return null; }

    }

    return content;

}





export function CreateExpressionRecord(state: ExpressionRecord) : ExpressionRecord{

    if((state.node instanceof HTMLElement || state.node instanceof Node) && !state.mockup){

        state.mockup = state.node.cloneNode(true)

    }

    return state

}



/**
 * Parse Attributes
 */
export function ParseAttributesExpression(node: HTMLElement, callback: (record: ExpressionRecord) => void ){


    callback = typeof callback == 'function' ? callback : (()=>{});


    if(node.attributes){
            
        if(node.attributes.length){
    
            Object.values(node.attributes).map(attribute=>{
    

                /**
                 * Find Directive
                 */
                
                Object.values(NativeDirectiveAttributes.Availables||{})
            
                .map(directive=>{ 

                    const matches = [...attribute.name.matchAll(new RegExp(`^${ directive.expression }`, 'gi'))]

                    if(matches.length){

                        matches.forEach(match=>{

                            const split = attribute.name?.substring((directive.expression||'')?.length).split('.')

                            const name = split[0]


                            const record = CreateExpressionRecord({
                                node,
                                directive,
                                match,
                                name,
                                type: 'directive',
                                mockup: attribute,
                                arguments: ArrayRange<string>(split, 1)
                            })
    
                            callback(record)
                            
                        })
                        
                    }
                    
                })



                /**
                 * Find Echo
                 */
                const matchesEcho = [...attribute.value.matchAll(SyntaxEcho)];

                if(matchesEcho.length){

                    matchesEcho.forEach(match=>{

                        const record = CreateExpressionRecord({
                            node,
                            attribute,
                            match,
                            type: 'attribute.echo',
                            mockup: attribute
                        })

                        callback(record)

                    })
                    
                }
                



                /**
                 * Find SnapCode
                 */
                const matchesSnapCode = [...attribute.value.matchAll(SyntaxSnapCode)];

                if(matchesSnapCode.length){

                    matchesSnapCode.forEach(match=>{

                        const record = CreateExpressionRecord({
                            node,
                            attribute,
                            match,
                            type: 'attribute.snapcode',
                            mockup: attribute
                        })

                        callback(record)

                    })
                    
                }


                
            })
    
    
        }

    }
    
    
    return ParseAttributesExpression;
    
}



/**
 * Parse Echo Expression
 */
export function ParseEchoExpression(node: HTMLElement, callback: (record: ExpressionRecord) => void ){

    callback = typeof callback == 'function' ? callback : (()=>{});

    const content = (node instanceof Text) 
        ? node.textContent 
        : (node instanceof HTMLElement ? node.innerHTML : null);

    
    let found = false


    if(content){

        const matches = [...content?.matchAll(SyntaxEcho)]

        if(matches.length){

            found = true;

            matches.forEach(match=>{

                const record = CreateExpressionRecord({
                    node,
                    name: (match[1]||'').trim(),
                    type: 'echo',
                    echo: content,
                    match
                })
    
                callback(record)
                
            })

            // console.log('Parse Echo', record)

        }
        
    }

    return found;

}




/**
 * Parse SnapCode Expression
 */
export function ParseSnapCodeExpression(node: HTMLElement, callback: (record: ExpressionRecord) => void ){

    callback = typeof callback == 'function' ? callback : (()=>{});

    let found = false;


    if(node.childNodes.length){

        const record = CreateExpressionRecord({
            node,
            type: 'snapcode',
            snapcode: []
        })

        node.childNodes.forEach(child=>{

            const m: ParseSnapCodeBlock[] = []

            if(child instanceof Text){

                if(child.textContent){
    
                    const matches = [...child.textContent.matchAll(SyntaxSnapCode)];
    
                    if(matches.length){
    
                        m.push( { node: child, matches } )

                        // record.snapcode?.push( { node: child, matches } )
    
                    }
    
                }

            }



            if(m.length){

                record.snapcode = m;

                callback(record)
                
            }
        
        })
        

        if(record.snapcode){

            if(record.snapcode.length){
    
                found = true;
    
                
            }
            
        }


        
    }
    

    return found;

}


export function FindExpressions(
    
    node: HTMLElement, 
    
    callback: (record: ExpressionRecord) => void, 
    
    // errorCallback?: (reason: any) => void
    
){

    const nodes = node.childNodes;

    const recorder: ExpressionRecord[] = []
    

    /**
     * Parse Node Attributes
     */
    ParseAttributesExpression(node, callback)
    


    /**
     * ReCallBack
     */

    const reCallback = (record: ExpressionRecord)=>{

        recorder.push(record)

        callback(record)
        
    }
    
    

    /**
     * Find
     */
    if(nodes.length){
        
        nodes.forEach(child=>{
            
            /** * Find SnapCode */
            const snapcode = ParseSnapCodeExpression(child as HTMLElement, reCallback);


            /** * Find Deep */
            if(!snapcode){

                FindExpressions(child as HTMLElement, reCallback)
    
            }

            else{

                // console.warn('Stop Find on', child)
                
            }
            
        })
        
    }


    if(!nodes.length){

        /**
         * Find Echo
         */
        ParseEchoExpression(node, reCallback)
        
    }
    
    return recorder;
    
}




