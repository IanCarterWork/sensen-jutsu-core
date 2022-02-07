import { SensenAppearance } from "../appearance";
import { SceneActivityBody, SceneActivityHeader, SceneActivityMenu } from "../elements/activity";
import { ThemeColor } from "../theme-color";



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

    const menu = new SceneActivityMenu();
    

    const HAppearance = new SensenAppearance()

    const BAppearance = new SensenAppearance()

    const MAppearance = new SensenAppearance()
    

    
    HAppearance.selectors({

        $self:[

            {
                
                backgroundColor: ThemeColor.$('layer'),
                
                color: ThemeColor.$('white'),
                
                minHeight:'48px',
                
                display: 'flex',
                
                flexDirection: 'row',
                
                alignItems: 'center',
                
                position: 'sticky',
                
                top:'0',
                
                left:'0',
                
                width:'100vw',
                
                maxWidth:'100vw',

            }

        ],



        '[activity\\:header-center]':[
            
            {
                
                flex: '1 1 auto'
                
            }
            
        ]



    }).mount()
    
    header.classList.add(HAppearance.$UiD)

    

    
    MAppearance.selectors({

        $self:[

            {
            
                backgroundColor: ThemeColor.$('layer'),
            
                color: ThemeColor.$('white'),
            
                minHeight:'48px',
            
                display: 'flex',
            
                flexDirection: 'row',
            
                alignItems: 'center',
            
                position: 'sticky',
            
                bottom:'0',
            
                left:'0',
            
                width:'100vw',
            
                maxWidth:'100vw',
            
            }

        ],

    }).mount()
    
    menu.classList.add(MAppearance.$UiD)

    

    BAppearance.selectors({

        $self:[
            {
                padding:'48px 0',
            }
        ],

    }).mount()
    
    body.classList.add(BAppearance.$UiD)






    return {
        
        header: header,

        body: body,

        menu: menu,
        
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

