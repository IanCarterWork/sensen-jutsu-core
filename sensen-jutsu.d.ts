

declare interface ISensenSceneActivities{


    $options?: object;
    
    props?: {};

    isReady: boolean;
    
    
    $tagName: string;
    
    $appearance?: {};

    $element?: object;
    
    $emitter?: object;
    
    $klass?: CustomElementConstructor;


    $makeTemplate : Function;

    $getWireframe : Function;

}


declare type ISceneActivityProps = {

    [K: string]: any,

    title?: string;

    icon?: string;

}

declare interface ISceneActivity{

}




declare interface SensenRouterScheme{

    [K : string] : ISceneActivityProps
    
}


declare type IRouterConfig = {

    default: string;

    canvas: string | HTMLElement;

    baseURL?: string;
    
}

declare interface ISensenRouter{

    // new (...args: any) => void


    $options: IRouterConfig;

    routes: { [x: string] : ISceneActivity };

    activity: ISceneActivity;

    root: HTMLElement;

    canvas?: HTMLElement;
    
}



declare interface Window {

    SensenAvailableComponents: {

        [K: string] : object
        
    };

    // $SceneActivity : ISceneActivity

    $SensenRouter: ISensenRouter;

    $SensenComponentsTemplateCaches : {

        [Name : string] : string | 0 | undefined
        
    };

    $SensenComponentsTemplateLoader : {

        [Name : string] : Promise<Response>
        
    };

    GlobalDirectiveAttributes: IGlobalDirectiveAttributes;


}





declare interface HTMLElement{

    directiveStateNone: boolean;

}


declare interface  Node{

    directiveStateNone: boolean;

}








declare type IDirectiveAttributes = {

    name: string;

    expression: string | null;

    main: Function;
    
}


declare type IDirectiveAttributesAvailable = {

    [K: string]: IDirectiveAttributes

}



declare interface IGlobalDirectiveAttributes{

    Availables: IDirectiveAttributesAvailable

    Define: Function;

    Merge: Function;

    Retrive: (key: string) => void;

    Retrives: Function;
    
}

