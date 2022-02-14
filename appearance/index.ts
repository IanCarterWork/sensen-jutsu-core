import { TObjectEmbed } from "../index";
import { SensenEmitter } from "../emitter";
import { SensenMetricRandom } from "../metric-random";





export interface TAppearanceDeclarations extends Omit<CSSStyleDeclaration, 'width' | 'height' | 'margin' | 'padding'>{
    
    width?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    height?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    
    
    paddingVertical?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    paddingHorizontal?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    
    marginVertical?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    marginHorizontal?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    
    padding?: 'auto' | 'initial' | 'inherit' | 'unset' | (string | number)[] | number | string;
    margin?: 'auto' | 'initial' | 'inherit' | 'unset' | (string | number)[] | number | string;

    backdropFilter?: 'auto' | 'initial' | 'inherit' | 'unset' | string;

    scrollbarWidth?: 'auto' | 'initial' | 'inherit' | 'unset' | string;

}




export type TAppearanceEntry = {
    selector: string, 
    value: TObjectEmbed<TAppearanceDeclarations>,
    rank: number
}




export type TAppearanceProps = {

    [selector: string] : TObjectEmbed<TAppearanceDeclarations>[]
    
}



export type TAppearanceEmitter = {

    construct: (component: SensenAppearance) => void;

    initialized: (component: SensenAppearance) => void;

    mounted: (component: SensenAppearance) => void;

    selectorAdded: (entry: TAppearanceEntry) => void;
    
}




export class SensenAppearance{


    $dom: HTMLStyleElement = {} as HTMLStyleElement

    $UiD: string = '';

    $emitter: SensenEmitter = {} as SensenEmitter
    
    props: TAppearanceProps = {} as TAppearanceProps
    
    emit: TAppearanceEmitter = {} as TAppearanceEmitter


    $refs : { [K:string] : Text } = {}
    
    
    
    constructor(props?: TAppearanceProps){


        this.$dom = document.createElement('style');

        this.$UiD = this.$generateUiD()

        this.$emitter = new SensenEmitter();

        this.props = props || {} as TAppearanceProps



        /** * Emit Event */
        this.$emitter?.dispatch('construct', this);

        this.$emitting()
        
    }



    $generateUiD(){

        return `${ SensenMetricRandom.CreateAplpha(12).join('') }${ SensenMetricRandom.Create(20).join('') }`;

    }


    

    $initialize(){

        this.$dom.setAttribute('rel', 'StyleSheet')

        this.$dom.setAttribute('type', 'text/css')

        this.$dom.setAttribute('sensen-appearance', `${ this.$UiD }`)

        document.head.appendChild(this.$dom)


        /** * Emit Event */
        this.$emitter?.dispatch('initialized', this);


        return this;
        
    }
    



    selector(selector: string, value: TObjectEmbed<TAppearanceDeclarations>){

        this.props[ selector ] = this.props[ selector ] || [];

        const rank = this.props[ selector ].length

        this.props[ selector ][ rank ] = value
        
        /** * Emit Event */
        this.$emitter?.dispatch('selectorAdded', { selector, value, rank } as TAppearanceEntry);

        return this;
        
    }



    selectors(appearance: TAppearanceProps){

        const entries = Object.entries(appearance||{})

        if(entries.length){

            entries.map($=> ($[1]||[]).map(selector=>this.selector($[0], selector)) )
            
        }
        
        return this;
        
    }



    $emitting(){



        /**
         * Custom Emitter Listener : Begin
         */

         if(this.emit){

            Object.entries(this.emit).map(e=>{

                if(typeof e[1] == 'function'){

                    const self = this;

                    this.$emitter?.listen(e[0], function(){ 
                        
                        // @ts-ignore
                        e[1].apply(this, [arguments[0]]) 
                    
                    })
                    
                }
                
            })
            
        }

        /**
         * Custom Emitter Listener : End
         */



        return this;
        
    }




    render(slot: string){

        const e = document.createTextNode(slot);

        e.textContent = slot

        this.$dom.appendChild(e)
        
        return e;
        
    }
    



    mount(){

        this.$initialize();

        /**
         * Building
         */

        if(this.props){

            const slot = OIAppearance(this.props)

            slot.selectors.forEach((selector, k)=>{

                this.$refs[selector] = this.render(`.${this.$UiD}${
                
                    (selector).trim().toLocaleLowerCase() == '$self'
                
                    ? `` : ` ${ selector }`
                
                }{${ slot.rows[k] }}`)
                
            })

        }
        
        /** * Emit Event */
        this.$emitter?.dispatch('mounted', this);

        return this;
        
    }
    
    
    
}







export function OIAppearanceProp(prop : string) : string[]{

    const mv = prop.indexOf('-vertical')

    const mh = prop.indexOf('-horizontal')

    if(mv > -1){ const p = prop.substr(0, mv); return [`${p}-top`, `${p}-bottom`]; }

    else if(mh > -1){ const p = prop.substr(0, mh); return [`${p}-left`, `${p}-right`]; }

    return [prop];
    
}




export function OIAppearanceValue(value : any) : string{

    switch(typeof value){

        case 'number': 
            return (`${value}px`)

        case 'object':

            if(Array.isArray(value)){ return value.map(i=>`${i}px`).join(' '); }

            else{ return Object.keys(value).map(k=>`${k}{ ${value[k]} }`).join(' ') }

        case 'string':
            return value
        
    }
    

    return ''
    
}



export function OIAppearance(entries : TAppearanceProps){

    const rows: string[] = [];

    const selectors: string[] = [];

    const majRex = new RegExp("([A-Z])", "g")

    Object.entries( entries ).forEach(entry =>{

        Object.values( entry[0].trim().split(',') ).forEach(selector=>{

            selectors[ selectors.length ] = selector

            const rw: string[] = []
            
            entry[1].reverse().map(value=>{
                
                Object.entries(value).map($=>{

                    Object.values($[0].trim().split(',')).map(prop=>{

                        OIAppearanceProp((`${ prop }`).replace(majRex, '-$&').toLowerCase()).forEach(p=>{

                            rw[ rw.length ] = `${ p }:${ OIAppearanceValue($[1]||'') }`

                        })

                    })

                })

            })

            rows[ rows.length ] = rw.join(';')

        })

    })
    
    return {selectors, rows}
    
}
