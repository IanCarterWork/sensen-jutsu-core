

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

    $SensenRouter: ISensenRouter

}