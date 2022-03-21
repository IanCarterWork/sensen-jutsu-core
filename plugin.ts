import { SensenElement } from "./index";




export function CreatePluginChild(instance : InstanceType<typeof SensenElement>, identifier: string, tag: string = 'div'){

    const $child = document.createElement(tag || 'div')

    $child.setAttribute('plugin-child', `@${ identifier }`)

    instance.append($child);
    
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
