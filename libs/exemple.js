import Sensen from "./index.js.js";
import { SceneActivity } from "./activity.js.js";
import { FxSlideHorizontal } from "./fx/preset.js.js";
import { Jutsu } from "./jutsu.js.js";
import { SensenRouter } from "./router.js.js";
import SensenThemeColor from "./theme-color/index.js.js";
import { SensenDefaultPalette } from "./theme-color/palette/default.js.js";
import { SensenDarkTone } from "./theme-color/tone/dark.js.js";
import { SensenLightTone } from "./theme-color/tone/light.js.js";
import { SensenNightTone } from "./theme-color/tone/night.js.js";
import { SensenSnowTone } from "./theme-color/tone/snow.js.js";
;
const themeColor = (new SensenThemeColor())
    .add(SensenDefaultPalette)
    .add(SensenNightTone)
    .add(SensenLightTone)
    .add(SensenDarkTone)
    .add(SensenSnowTone)
    .render(true)
    .usePalette("default", true)
    .useTone("dark", true);
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
const AppHeader = new Sensen.Component({
    name: 'AppHeader',
    template: true,
    emit: {
        // expressionRecorded: (record)=>{
        // },
        connected: (e) => {
            // if(e.emit.$options.state && 'activityTitle' in e.emit.$options.state){
            //     e.emit.$options.state.activityTitle = e.emit.$options.props?.activityTitle||''
            // }
            // console.log('Component Construct ///', )
        }
    },
    props: {
        title: 'Component title',
        activityTitle: 'Component activityTitle'
        // ...UseVariable('activityTitle', 'Component activityTitle')
    },
    state: {},
    methods: {
        toggleTone({ self, event }) {
            // console.log('Self', self, themeColor)
            themeColor.toggleTone();
            // router.navigate('')
        },
    },
    appearance: {
    // $self:[
    //     {
    //         backgroundColor:'red'
    //     }
    // ]
    },
});
AppHeader.use();
const TextInput = new Sensen.Component({
    name: 'TextInput',
    template: true,
    emit: {
        // expressionRecorded: (record)=>{
        // },
        connected: (e) => {
            // if(e.emit.$options.state && 'activityTitle' in e.emit.$options.state){
            //     e.emit.$options.state.activityTitle = e.emit.$options.props?.activityTitle||''
            // }
            // console.log('Component Construct ///', )
        }
    },
    props: {
        title: 'Component title',
        activityTitle: 'Component activityTitle'
        // ...UseVariable('activityTitle', 'Component activityTitle')
    },
    state: {},
    methods: {
        toggleTone({ self, event }) {
            console.log('Self', self, themeColor);
            themeColor.toggleTone();
        },
    },
    appearance: {
    // $self:[
    //     {
    //         backgroundColor:'red'
    //     }
    // ]
    },
});
TextInput.use();
const HomeActivity = new SceneActivity({
    name: 'home',
    route: 'home',
    arguments: ['sdsd'],
    props: {
        title: 'Activity Prop Title',
        icon: 'home',
        message: 'Salut Mes guys'
    },
    state: {
        test: 'Hello'
    },
    options: {
        wireframe: 'basic',
        transition: {
            entry: new FxSlideHorizontal,
            exit: new FxSlideHorizontal,
        }
    },
    methods: {
        toggleTone({ self, event, router }) {
            self.state.test = "World";
            themeColor.toggleTone();
            // router.navigate('')
            router.navigate('homesdc');
        }
    },
    emit: {
        ready(activity) {
            // console.warn('Activity is Ready', activity)
        }
    },
    appearance: {},
});
const AboutActivity = new SceneActivity({
    name: 'about',
    route: 'about/default',
    template: 'about.html',
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
    emit: {
        ready(activity) {
            // console.warn('Activity is Ready', activity)
        }
    },
    appearance: {},
});
Sensen.Main(Jutsu.Kuchiyose({
    name: 'exemple',
    main(canvas) {
        const router = (new SensenRouter({
            default: 'home',
            canvas,
            baseURL: ''
        }))
            .get(HomeActivity)
            .get(AboutActivity)
            .render();
    }
}));
// router.navigate('about/default')
// const ro = document.createElement('sn-root')
// document.body.appendChild(ro)
// setTimeout(()=>{
//     ro.setAttribute('hello', 'world')
//     ro.setAttribute('title', 'world')
// }, 1000)
