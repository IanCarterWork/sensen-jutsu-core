import { SensenEmitter } from "./emitter";
import { SensenElement } from "./index";




export function CreatePluginChild(instance : InstanceType<typeof SensenElement>, identifier: string, tag: string = 'div'){

    const $child = document.createElement(tag || 'div')

    $child.setAttribute('plugin-child', `@${ identifier }`)

    instance.appendChild($child);
    
    return $child;
    
}


export function GetPluginChild(instance : InstanceType<typeof SensenElement>, identifier: string, tag: string = 'div'){

    return instance.querySelector(`${ tag }[plugin-child="@${ identifier }"]`) as (HTMLElement | null)
    
}


export function PluginChild(instance : InstanceType<typeof SensenElement>, identifier: string, tag: string = 'div'){

    const $get = GetPluginChild(instance, identifier, tag);

    if($get instanceof HTMLElement){ return $get; }

    else{ return CreatePluginChild(instance, identifier, tag); }
    
}










export class SensenPluginExtended<Props extends SensenPluginExtendedProps> extends HTMLElement implements ISensenPluginExtended<Props>{


    $plugin?: SensenPluginExtended<Props>;

    $identity: string = '';

    $props? : Props;

    $propsObserver : MutationObserver = {} as MutationObserver

    $contentObserver : MutationObserver = {} as MutationObserver


    $emitter : SensenEmitter = new SensenEmitter()


    $pluginExpression = /^plugin\:/

    



    constructor(props?: Props){

        super();

        this.$props = props || {} as Props;

        this.$watchContent();

    }




    $bewitchment(){

        const children = this.querySelectorAll<ISensenPlugin<Props>>(`[plug\\:bind="${ this.$identity }"]`)
        
        if(children.length){

            children.forEach((child : ISensenPlugin<Props>)=>{

                child.$plugin = this
                
            })
            
        }

        return this;

    }
    




    $watchContent(){

        this.$contentObserver = new MutationObserver((records)=>{

            if(records){
 
                this.$emitter.dispatch('contentChange', [records])
 
            }
            
        })
        
        
        this.$contentObserver.observe(this,{
            
            subtree: true,

            childList: true,

            characterData: true,

        })

        return this;

    }
    
    


    $render(){
        
        throw (`SensenPluginExtended Error definition : missign "$render" method`)
        
        return this; 
    
    } 
    


    connectedCallback(){ this.$render(); }
    


    adoptedCallback(){ }
    


    disconnectedCallback(){ }
    






    $setProp<T extends keyof Props>(name: keyof Props, value: Props[T] ){

        this.setAttribute(`plugin:${ name }`, `${ (typeof value == 'object') ? JSON.stringify(value) : value }`)
        
        return this;
        
    }



    $watchProps(){

        this.$propsObserver = new MutationObserver((records)=>{

            if(records){

                records.map(record=>{

                    if(record.type == 'attributes'){

                        this.$syncProps(record.attributeName || undefined, this.getAttribute(record.attributeName||'') || undefined)
    
                        this.$emitter.dispatch('propChange', [record])
 
                    }
                    
                })

            }
            
        })
        
        
        this.$propsObserver.observe(this,{
            
            attributes: true

        })

        return this;

    }
    
    $syncProps(name?: string, value?: any){

        const k = (name||'').replace(this.$pluginExpression, '') as keyof Props

        if(k && (name||'').match(this.$pluginExpression) ){

            let $value = value;

            try{

                $value = JSON.parse(value||'');

                if(typeof $value != 'object'){ $value = value; }

            }catch(e){ $value = value; }

            // @ts-ignore
            this.$props[ k ] = $value as Props[keyof Props]
                    
        }
        
        return this;

    }


    $initializeProps(props?: Props){

        this.$props = props || this.$props || {} as Props
        
        Object.values(this.attributes).map(attribute=>{

            if(attribute.name.match(this.$pluginExpression)){

                this.$syncProps(attribute.name, attribute.value)

            }
            
        })
        
        this.$watchProps();

        props = this.$props;

        return this;

    }







    static $use(){

        
        
    }



}





const SensenPlugin = {

    Child : PluginChild,

    FindChild : GetPluginChild,

    CreateChild : CreatePluginChild,

    Extended: SensenPluginExtended

}


export default SensenPlugin