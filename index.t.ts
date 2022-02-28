import { ComponentController, SensenHTMLElement, TObjectEmbed } from "./index"
import { SceneActivity, SensenSceneActivities } from "./activity"
import { TAppearanceDeclarations, TAppearanceProps } from "./appearance/index"
import { TDirectiveAttribute } from "./directive"
import { SensenEmitterArguments } from "./emitter"
import { SensenFxTransition } from "./fx/index"
import { ComponentVariable } from "./hook"
import { SensenRouter } from "./router"





/**
 * Window & GlobalThis
 */
export type TSensenWindow = Window & {
    
    $SceneActivity: SceneActivity<SceneActivityProps>;

}




/**
 * Components
 */
export type TComponent = { [K: string] : any, $context?: {[K: string] : any} }



export type ComponentState = {

    [K: string]: any

}


export type ComponentProps = {

    [K: string]: ComponentVariable | string | number | boolean | null | undefined

}




export type TComponentHydratesEntries<
    
    S extends ComponentState, 
    
    P extends ComponentProps
    
> = { 
    
    [K in keyof (S | P)]: ExpressionRecord[]

}


export type TComponentHydratesEntry<

    T extends (ComponentState | ComponentProps)
    
> = { 
    
    [K in keyof T]: ExpressionRecord[]

}




export type TComponentHydratesStore<S, P> = {
    
    state?: { [K in keyof S]: S[K] },
    
    props?: { [K in keyof P]: P[K] },

}




export type TComponentObserversParams = {
        
    excludeTags?: string[]

}




export type ComponentMethodEvent<

    S extends ComponentState, 

    P extends ComponentProps,

    M extends ComponentMethodRaw<S, P>
    
> = {

    self: ComponentController<S, P, M>;

    event: Event;

    router: SensenRouter<SensenRouterScheme>;

        
        
        // [X in keyof P['route'] ] : P
    
}




export type ComponentMethodRaw<
    
    S extends ComponentState, 
    
    P extends ComponentProps
    
> = {

    [K: string] : ComponentMethod<S, P, {
        [K: string] : (ev: ComponentMethodEvent<S, P, {}>) => void
    }>
    
}



export type ComponentMethod<

    S extends ComponentState, 

    P extends ComponentProps,

    M extends ComponentMethodRaw<S,P>

>  = (ev: ComponentMethodEvent<S, P, M>) => void






export type ComponentMethods<

    S extends ComponentState, 

    P extends ComponentProps, 

    M extends ComponentMethodRaw<S,P>

> = {

    [K in keyof M] : ComponentMethod<S, P, M>
    
}






export type TComponentOptions<

    State extends ComponentState, 

    Props extends ComponentProps,

    Methods extends ComponentMethodRaw<State, Props>

> = {

    name: string;

    element?: SensenHTMLElement<Props> | string | null;

    state?: { [S in keyof State] : State[S] };

    props?: { [P in keyof Props] : Props[P] };

    appearance?: TAppearanceProps;

    methods?: {

        [M in keyof Methods] : (ev: ComponentMethodEvent<State, Props, Methods> ) => void
        
    }

    // methods?: ComponentMethods<State, Props, Methods>

    template?: string | true;

    emit?: {

        [K in keyof ComponentEmitterTypes<State, Props, Methods>]
        
        : ComponentEmitterTypes<State, Props, Methods>[K]
        
    };

    templateFromString?: string;
    
}




export interface ComponentEmitterTypes<
    
    State extends ComponentState, 
    
    Props extends ComponentProps,

    Methods extends ComponentMethodRaw<State, Props>
    
>{

    construct?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    connected?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    adopted?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    disconnected?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    nPropsChanged?: (entry: SensenEmitterArguments<{ name?: string; value?: string; oldValue?: string; }>) => void;



    start?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    elementReady?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    compilationReady?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    ready?: (component: SensenEmitterArguments<ComponentController<State, Props, Methods>>) => void;

    mutationObservationReady?: (observer: SensenEmitterArguments<MutationObserver>) => void;

    mutationObserved?: (mutation: SensenEmitterArguments<MutationRecord>) => void;

    mutationsObserved?: (mutations: SensenEmitterArguments<MutationRecord[]>) => void;

    expressionRecorded?: (record: SensenEmitterArguments<ExpressionRecord>) => void;

    expressionDetected?: (record: SensenEmitterArguments<ExpressionRecord>) => void;

    compilated?: (recordLot: SensenEmitterArguments<(ExpressionRecord | undefined)[]>) => void;

    stateHydrated?: (hydratesResult: SensenEmitterArguments<ComponentHydratesResult> ) => void;

    propsChanged?: (entry: SensenEmitterArguments<{ name?: string; value?: string; oldValue?: string; }>) => void;



    
}





export type ComponentHydratesResult = {

    record: ExpressionRecord;

    data: string;
    
}






/**
 * Expression
 */

export type ExpressionRecord = {

    node: Node | HTMLElement;

    type: 'echo' | 'snapcode' | 'attribute.echo' | 'attribute.snapcode' | 'directive';

    name?: string;

    
    mockup?: Node | HTMLElement;

    match?: RegExpMatchArray | null;

    arguments?: string[] | null;


    snapcode?: ParseSnapCodeBlock[];

    echo?: string;

    attribute?: Attr;

    directive?: TDirectiveAttribute;
    
}





export type ParseSnapCodeBlock = {
    
    node: Node | HTMLElement,

    matches: RegExpMatchArray[]

}








/**
 * Screen
 */

export interface SceneActivityProps extends ISceneActivityProps{

    [K: string]: any,

    title?: string;

    icon?: string;

}


export type SceneActivityOptionsWireframes = 'basic' | 'nav-bottom' | 'nav-drawer' | 'modal' | 'fullscreen' | 'detail-flow' |  'settings' | 'scrolling' | 'nav-tab' | 'fragment'


export type SceneActivityEmitter<P> = {

    construct?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    connected?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    adopted?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    disconnected?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    show?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    hide?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    render?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;

    
    elementReady?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;
    
    appearanceReady?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;
    
    propsChanged?: (state: SensenEmitterArguments<{name: string, value: string, oldValue: string}>) => void;


    ready?: (activity: SensenEmitterArguments<SceneActivity<P>>) => void;



    templateLoadingFailed?: (activity: SensenEmitterArguments<any>) => void;

    readyFailed?: (activity: SensenEmitterArguments<any>) => void;
    
}




export type SceneActivityRouteName = string;



export type TSceneActivityOptions<P extends SceneActivityProps> = TComponentOptions<{}, P, {}> & {

    name: string;

    route?: SceneActivityRouteName,

    arguments?: (string | boolean | null | undefined)[];

    props?: { [K in keyof P]: P[K] }

    options?: {

        wireframe: SceneActivityOptionsWireframes,

        transition?: {
            
            entry?: SensenFxTransition,
            
            exit?: SensenFxTransition,
            
        }
        
    }

    methods?: ComponentMethods<
        
        ComponentState, P, ComponentMethodRaw<ComponentState, P>

    >

    template?: string;
    
    appearance?: TAppearanceProps;

    emit?: SceneActivityEmitter<P>;

}




 
 
 
 