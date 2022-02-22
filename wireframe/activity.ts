import { SensenAppearance } from "../appearance/index";
import { SceneActivityBody, SceneActivityHeader, SceneActivityMenu } from "../elements/activity";
import { ThemeColor } from "../theme-color/index";



export type ActivityWireframeState = {

    header? : SceneActivityHeader;

    body? : SceneActivityBody;

    menu? : SceneActivityMenu;
    
}





export function Fullscreen() : ActivityWireframeState{

    return {
        
        body: new SceneActivityBody(),
        
    }

}





export function Basic() : ActivityWireframeState{

    const header = new SceneActivityHeader();

    const body = new SceneActivityBody();
    

    const HAppearance = new SensenAppearance()

    const BAppearance = new SensenAppearance()
    

    
    HAppearance.selectors({

        $self: {
            
            // backgroundColor: ThemeColor.$('layer'),
            
            color: ThemeColor.$('text'),
            
            minHeight:'48px',
            
            display: 'flex',
            
            flexDirection: 'row',
            
            alignItems: 'center',

            justifyContent: 'center',
            
            position: 'sticky',
            
            top:'0',
            
            left:'0',

            zIndex: '999',
            
            width:'100vw',
            
            maxWidth:'100vw',

        } ,



        '[activity\\:header-center]': {
            
            flex: '1 1 auto'
            
        }
            
        



    }).mount()
    
    // @ts-ignore
    header.classList.add(HAppearance.$UiD)


    // console.warn('WireFrame Header', HAppearance )


    BAppearance.selectors({

        $self: {
            
            padding:'48px 0',

        } ,

    }).mount()
    

    // @ts-ignore
    body.classList.add(BAppearance.$UiD)





    return {
        
        header: header,

        body: body,
        
    }

}





export function NavBottom() : ActivityWireframeState{

    return {
        
        header: new SceneActivityHeader(),

        body: new SceneActivityBody(),

        menu: new SceneActivityMenu(),
        
    }

}











export class ActivityWireframe{

    static Basic = Basic;

    static NavBottom = NavBottom;

    static Fullscreen = Fullscreen;
    
}

