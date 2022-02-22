import { TObjectEmbed } from "../index";
import { SensenAppearance, TAppearanceDeclarations, TAppearanceProps } from "./index";
import { ThemeColor } from "../theme-color/index";



export type TAppearanceSceneActivity = {

    [selector: string] : TAppearanceProps
    
}



export function AppearanceSceneActivity(){

    const bundle = (new SensenAppearance());
    
    const features : TAppearanceSceneActivity = {


        /**
         * Window
         */
        window: {

            $self: {    
                
                backgroundColor: ThemeColor.$('layer'),
                
                color: ThemeColor.$('text'),
                
                // display: 'flex',
                
                // flexDirection:'column',
                
                height: '100vh',
                
                width: '100vw',
                
                overflowX: 'hidden',
                
                overflowY: 'auto',
                
                position: 'absolute',
                
                top: '0',
                
                left: '0',
                
                boxShadow: '0 0 2rem rgba(0,0,0,.3)'

            } ,
            
        },


        
    }
    
    bundle

        .selectors(features.window)
        
    ;
    

    
    return { bundle, features };
    
}

