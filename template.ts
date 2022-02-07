






function loadTemplate(source: string){

    const errorResponses = {

        code: 0,
        
        message: 'unknown'

    }
    
    return new Promise<Response | string | undefined>((resolve, reject)=>{


        if(typeof source != 'string' || !source){

            errorResponses.code = 1

            errorResponses.message = `string is not a path`

            reject(errorResponses); 
            
            return undefined;
            
        }

        else{

            /** 
             * Check
             *  */
            const check = source.match(/<\/?[^>]+>/gi);


            /**
             * If Template is String HTML code 
             * */
            if(check){ 

                resolve(source); 

                return undefined; 

            }


            /**
             * Else, it's file path 
             * */
            const url = new URL(location.href)


            /**
             * File Path
             */
            const path = `${ url.origin }${ (url.pathname == '/') ? '' : url.pathname }/${ source }`


            /**
             * Fetch
             */
            fetch(path)
        
            .then(d=>{ if(d.status == 404){ return undefined } return d })

            .then(response=>{

                resolve(response)

            })

            .catch(er=>{ 

                console.error('Template Loader : not found\n', er);

                errorResponses.code = 3

                errorResponses.message = `not found`

                reject(errorResponses); 
                
            })

            
        }
        
    })
    
}





function resolveTemplateResponse(res: string | Response | undefined){

    if(res instanceof Response){

        if(res?.status == 0 || res?.status == 200){

            // console.log('Template Builder', res)

            return res.text();
            
        }


        else if(res?.status == 403){

            console.warn(`Sensen Template Loading failed`, res)
            
        }


        else if(res?.status == 404){

            console.warn(`Sensen Template : ${ res?.url } not found`, res)
            
        }
        
    }
    
    else{
        
        return res;
        
    }
    
    return undefined

}






export class SensenTemplate{

    static Load = loadTemplate

    static ResolveResponse = resolveTemplateResponse
    
}