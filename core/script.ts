import { SensenHTMLElement } from "."
import { SockRenderEngine } from "./compilate"
import { StabilizeEchoExpression, StabilizeSnapCodeExpression } from "./expression"
import { StabilizeContent } from "./utilities"









/**
 * Detect and run script in element in context with variables dictionary
 */
export async function Run<Props>(element: SensenHTMLElement<Props>, context?: {}, dictionary?: {}){

    const scripts = element.querySelectorAll('script')

    const promised: Promise<typeof element>[] = []
    

    if(scripts.length){

        scripts.forEach(script=>{

            const type = (script.getAttribute('type')||'').toLowerCase()
            
            const exec = document.createElement('script')


            promised.push(

                new Promise<typeof element>((resolve, reject)=>{

                    if(type == 'module/sensen'){

                        exec.setAttribute('type', 'module');

                        SockRenderEngine(
        
                            StabilizeSnapCodeExpression(
                                
                                StabilizeEchoExpression(
                                
                                    StabilizeContent(script.textContent||'') || ''
            
                                , false)
                            
                            , false)
                            
                        , context||element, dictionary||element.props)
        
                        .then(compilate=>{
        
                            exec.innerHTML = `const $this=document.querySelector('[euid="${ element.$EUiD }"]');\n${compilate}`
                            
                            element.insertBefore(exec, element.lastChild)
        
                            script.parentElement?.removeChild(script);
        
                            resolve(element)

                        })
        
                        .catch(e=>console.error('Sensen Script Failed', e))
        
                    }
                    
                    else{
        
                        exec.setAttribute('type', `${ type||'module' }`);

                        exec.textContent = script.textContent
                        
                        element.insertBefore(exec, element.lastChild)
        
                        script.parentElement?.removeChild(script);
        
                        resolve(element)

                    }
                    
                })
                
            )

        })
        
    }


    return Promise.all(promised)
    
}



/**
 * Exports
 */
export class SensenScript{

    static Run = Run;
    
}









