import Sensen from ".";
import { SceneActivity } from "./activity";
import { FxPresenter, FxSlideHorizontal } from "./fx/preset";
import { SceneActivityProps } from "./index.t";
import { Jutsu } from "./jutsu";
import { SensenRouter } from "./router";
import SensenThemeColor from "./theme-color";
import { SensenPaletteColor } from "./theme-color/palette-color";
import { SensenDefaultPalette } from "./theme-color/palette/default";
import { SensenToneColor } from "./theme-color/tone-color";
import { SensenDarkTone } from "./theme-color/tone/dark";
import { SensenLightTone } from "./theme-color/tone/light";
import { SensenNightTone } from "./theme-color/tone/night";
import { SensenSnowTone } from "./theme-color/tone/snow";



    
// const vm = new Sensen.Component({

//     name: 'root',

//     element: '#app',


//     template: 'components/root.sn.html',
    

//     emit:{

//         expressionRecorded: (record)=>{

//         },

//         connected: (e)=>{

//             // console.warn('Component is Connected', e)

//         }

//     },



//     props:{

//         title: 'loading...'

//     },



//     state:{

//         editable: false,

//         fullname: 'no data',
//         // fullname: '{%=(new Date())%}',

//         title: 'Hello les gens',

//         welcome: 'Welcome to the hardless',

//         message: 'Lorem ipsum {{ counter }}',

//         route: 'comingsoon',

//         counter: 10,

//         persons: [
//             'Yann',
//             'Christina',
//             'Myana',
//             'Syana'
//         ],

//         chime:{
//             carbone: false,
//             oxygen: false,
//             azote: false,
//         }

//     },



//     methods:{

//         updateFullname({ self, event}){

//             // @ts-ignore
//             self.state.fullname = event.target?.value||''

//         },
        
//         addPerson({ self, event}){

//             const form = event.target as HTMLFormElement;

//             if(form.fullname.value){

//                 // form.fullname.value = ( form.fullname.value )

//                 self.state.persons.push(form.fullname.value)

//                 form.fullname.value = ''

//                 self.state.fullname = ''
                
//             }

//             console.log('AddPerson')

//             // self.state.persons.push(`${ (new Date()) }`)

//         },
        
//         increment({ self }){

//             self.state.chime.carbone = !self.state.chime.carbone

//             self.state.persons[1] = `IanCarter Now ${ self.state.counter } / {{ counter }}`

//             self.state.counter++;
            
//             self.state.editable = !self.state.editable ;

//             self.state.message = `We count to ${ self.state.counter }`
            
//             console.log('Increment', self.state.counter, self.state.persons )
            
//         }
        
//     }


// })




const themeColor = (new SensenThemeColor())


    .add(SensenDefaultPalette)

    .add(SensenNightTone)

    .add(SensenLightTone)

    .add(SensenDarkTone)

    .add(SensenSnowTone)


    .render(true)

    .usePalette("default", true)

    .useTone("dark", true)

;



interface HomeActivityProps extends SceneActivityProps{

    message: string;

}


interface AboutActivityProps extends SceneActivityProps{

    description: string;

    sharing: boolean;

}




const HomeActivity = new SceneActivity<HomeActivityProps>({

    name: 'home',

    route: 'home',

    template: './screens/home.html',
    
    arguments: ['sdsd'],

    props: {

        title: 'Hello My Screen',
    
        icon: 'home',

        message: 'Salut Mes guys'
        
    },
    
    options: {

        wireframe: 'basic',

        transition: {

            entry: new FxSlideHorizontal,

            exit: new FxSlideHorizontal,
            
        }

    },

    emit:{ 
        ready(activity){

            // console.warn('Activity is Ready', activity)
            
        }
    },

    appearance:{},


})





const AboutActivity = new SceneActivity<AboutActivityProps>({

    name: 'about',

    route: 'about/default',

    template: './screens/about.html',
    
    // arguments: ['sdsd'],

    props: {

        title: 'About',
    
        icon: 'info-circle',

        description: 'Lorem ipsum',

        sharing: false,
        
    },
    
    options: {

        wireframe: 'basic',

        transition: {

            entry: new FxSlideHorizontal,

            exit: new FxSlideHorizontal,
            
        }

    },

    emit:{ 
        
        ready(activity){

            // console.warn('Activity is Ready', activity)
            
        }
    },

    appearance:{ },


})




Sensen.Main(

    Jutsu.Kuchiyose({

        name: 'exemple',
    
        main(canvas){
    
            type routerScheme = {
    
                'home': HomeActivityProps,
            
                'about/default': AboutActivityProps,
            
            }
            
            const router = (new SensenRouter<routerScheme>({
            
                default:'home',
            
                canvas,
            
                baseURL: ''
            
            }))
                
                .get<HomeActivityProps>(HomeActivity)
                
                .get<AboutActivityProps>(AboutActivity)
                
            .render();
            
            
            
        }
    
        
    })

)







// router.navigate('about/default')




// const ro = document.createElement('sn-root')

// document.body.appendChild(ro)


// setTimeout(()=>{

//     ro.setAttribute('hello', 'world')
//     ro.setAttribute('title', 'world')

// }, 1000)
