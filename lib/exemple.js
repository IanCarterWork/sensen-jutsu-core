import Sensen from ".";
import { SceneActivity } from "./activity";
import { FxSlideHorizontal } from "./fx/preset";
import { Jutsu } from "./jutsu";
import { SensenRouter } from "./router";
import SensenThemeColor from "./theme-color";
import { SensenDefaultPalette } from "./theme-color/palette/default";
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
    .useTone("dark", true);
const HomeActivity = new SceneActivity({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvZXhlbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMzQyxPQUFPLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFN0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hDLE9BQU8sZ0JBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRTdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUt6RCxvQ0FBb0M7QUFFcEMsb0JBQW9CO0FBRXBCLHVCQUF1QjtBQUd2QiwyQ0FBMkM7QUFHM0MsYUFBYTtBQUViLDBDQUEwQztBQUUxQyxhQUFhO0FBRWIsNEJBQTRCO0FBRTVCLDJEQUEyRDtBQUUzRCxZQUFZO0FBRVosU0FBUztBQUlULGNBQWM7QUFFZCw4QkFBOEI7QUFFOUIsU0FBUztBQUlULGNBQWM7QUFFZCwyQkFBMkI7QUFFM0IsK0JBQStCO0FBQy9CLDRDQUE0QztBQUU1QyxtQ0FBbUM7QUFFbkMsOENBQThDO0FBRTlDLGdEQUFnRDtBQUVoRCwrQkFBK0I7QUFFL0IsdUJBQXVCO0FBRXZCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIs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QUFNLEVBQUUsQ0FBQztJQUlkLENBQUM7Q0FHSixDQUFDLENBRUwsQ0FBQTtBQVFELG1DQUFtQztBQUtuQywrQ0FBK0M7QUFFL0MsZ0NBQWdDO0FBR2hDLG1CQUFtQjtBQUVuQix3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBRXhDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2Vuc2VuIGZyb20gXCIuXCI7XG5pbXBvcnQgeyBTY2VuZUFjdGl2aXR5IH0gZnJvbSBcIi4vYWN0aXZpdHlcIjtcbmltcG9ydCB7IEZ4UHJlc2VudGVyLCBGeFNsaWRlSG9yaXpvbnRhbCB9IGZyb20gXCIuL2Z4L3ByZXNldFwiO1xuaW1wb3J0IHsgU2NlbmVBY3Rpdml0eVByb3BzIH0gZnJvbSBcIi4vaW5kZXgudFwiO1xuaW1wb3J0IHsgSnV0c3UgfSBmcm9tIFwiLi9qdXRzdVwiO1xuaW1wb3J0IHsgU2Vuc2VuUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCI7XG5pbXBvcnQgU2Vuc2VuVGhlbWVDb2xvciBmcm9tIFwiLi90aGVtZS1jb2xvclwiO1xuaW1wb3J0IHsgU2Vuc2VuUGFsZXR0ZUNvbG9yIH0gZnJvbSBcIi4vdGhlbWUtY29sb3IvcGFsZXR0ZS1jb2xvclwiO1xuaW1wb3J0IHsgU2Vuc2VuRGVmYXVsdFBhbGV0dGUgfSBmcm9tIFwiLi90aGVtZS1jb2xvci9wYWxldHRlL2RlZmF1bHRcIjtcbmltcG9ydCB7IFNlbnNlblRvbmVDb2xvciB9IGZyb20gXCIuL3RoZW1lLWNvbG9yL3RvbmUtY29sb3JcIjtcbmltcG9ydCB7IFNlbnNlbkRhcmtUb25lIH0gZnJvbSBcIi4vdGhlbWUtY29sb3IvdG9uZS9kYXJrXCI7XG5pbXBvcnQgeyBTZW5zZW5MaWdodFRvbmUgfSBmcm9tIFwiLi90aGVtZS1jb2xvci90b25lL2xpZ2h0XCI7XG5pbXBvcnQgeyBTZW5zZW5OaWdodFRvbmUgfSBmcm9tIFwiLi90aGVtZS1jb2xvci90b25lL25pZ2h0XCI7XG5pbXBvcnQgeyBTZW5zZW5Tbm93VG9uZSB9IGZyb20gXCIuL3RoZW1lLWNvbG9yL3RvbmUvc25vd1wiO1xuXG5cblxuICAgIFxuLy8gY29uc3Qgdm0gPSBuZXcgU2Vuc2VuLkNvbXBvbmVudCh7XG5cbi8vICAgICBuYW1lOiAncm9vdCcsXG5cbi8vICAgICBlbGVtZW50OiAnI2FwcCcsXG5cblxuLy8gICAgIHRlbXBsYXRlOiAnY29tcG9uZW50cy9yb290LnNuLmh0bWwnLFxuICAgIFxuXG4vLyAgICAgZW1pdDp7XG5cbi8vICAgICAgICAgZXhwcmVzc2lvblJlY29yZGVkOiAocmVjb3JkKT0+e1xuXG4vLyAgICAgICAgIH0sXG5cbi8vICAgICAgICAgY29ubmVjdGVkOiAoZSk9PntcblxuLy8gICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDb21wb25lbnQgaXMgQ29ubmVjdGVkJywgZSlcblxuLy8gICAgICAgICB9XG5cbi8vICAgICB9LFxuXG5cblxuLy8gICAgIHByb3BzOntcblxuLy8gICAgICAgICB0aXRsZTogJ2xvYWRpbmcuLi4nXG5cbi8vICAgICB9LFxuXG5cblxuLy8gICAgIHN0YXRlOntcblxuLy8gICAgICAgICBlZGl0YWJsZTogZmFsc2UsXG5cbi8vICAgICAgICAgZnVsbG5hbWU6ICdubyBkYXRhJyxcbi8vICAgICAgICAgLy8gZnVsbG5hbWU6ICd7JT0obmV3IERhdGUoKSklfScsXG5cbi8vICAgICAgICAgdGl0bGU6ICdIZWxsbyBsZXMgZ2VucycsXG5cbi8vICAgICAgICAgd2VsY29tZTogJ1dlbGNvbWUgdG8gdGhlIGhhcmRsZXNzJyxcblxuLy8gICAgICAgICBtZXNzYWdlOiAnTG9yZW0gaXBzdW0ge3sgY291bnRlciB9fScsXG5cbi8vICAgICAgICAgcm91dGU6ICdjb21pbmdzb29uJyxcblxuLy8gICAgICAgICBjb3VudGVyOiAxMCxcblxuLy8gICAgICAgICBwZXJzb25zOiBbXG4vLyAgICAgICAgICAgICAnWWFubicsXG4vLyAgICAgICAgICAgICAnQ2hyaXN0aW5hJyxcbi8vICAgICAgICAgICAgICdNeWFuYScsXG4vLyAgICAgICAgICAgICAnU3lhbmEnXG4vLyAgICAgICAgIF0sXG5cbi8vICAgICAgICAgY2hpbWU6e1xuLy8gICAgICAgICAgICAgY2FyYm9uZTogZmFsc2UsXG4vLyAgICAgICAgICAgICBveHlnZW46IGZhbHNlLFxuLy8gICAgICAgICAgICAgYXpvdGU6IGZhbHNlLFxuLy8gICAgICAgICB9XG5cbi8vICAgICB9LFxuXG5cblxuLy8gICAgIG1ldGhvZHM6e1xuXG4vLyAgICAgICAgIHVwZGF0ZUZ1bGxuYW1lKHsgc2VsZiwgZXZlbnR9KXtcblxuLy8gICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuLy8gICAgICAgICAgICAgc2VsZi5zdGF0ZS5mdWxsbmFtZSA9IGV2ZW50LnRhcmdldD8udmFsdWV8fCcnXG5cbi8vICAgICAgICAgfSxcbiAgICAgICAgXG4vLyAgICAgICAgIGFkZFBlcnNvbih7IHNlbGYsIGV2ZW50fSl7XG5cbi8vICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG4vLyAgICAgICAgICAgICBpZihmb3JtLmZ1bGxuYW1lLnZhbHVlKXtcblxuLy8gICAgICAgICAgICAgICAgIC8vIGZvcm0uZnVsbG5hbWUudmFsdWUgPSAoIGZvcm0uZnVsbG5hbWUudmFsdWUgKVxuXG4vLyAgICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5wZXJzb25zLnB1c2goZm9ybS5mdWxsbmFtZS52YWx1ZSlcblxuLy8gICAgICAgICAgICAgICAgIGZvcm0uZnVsbG5hbWUudmFsdWUgPSAnJ1xuXG4vLyAgICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5mdWxsbmFtZSA9ICcnXG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRQZXJzb24nKVxuXG4vLyAgICAgICAgICAgICAvLyBzZWxmLnN0YXRlLnBlcnNvbnMucHVzaChgJHsgKG5ldyBEYXRlKCkpIH1gKVxuXG4vLyAgICAgICAgIH0sXG4gICAgICAgIFxuLy8gICAgICAgICBpbmNyZW1lbnQoeyBzZWxmIH0pe1xuXG4vLyAgICAgICAgICAgICBzZWxmLnN0YXRlLmNoaW1lLmNhcmJvbmUgPSAhc2VsZi5zdGF0ZS5jaGltZS5jYXJib25lXG5cbi8vICAgICAgICAgICAgIHNlbGYuc3RhdGUucGVyc29uc1sxXSA9IGBJYW5DYXJ0ZXIgTm93ICR7IHNlbGYuc3RhdGUuY291bnRlciB9IC8ge3sgY291bnRlciB9fWBcblxuLy8gICAgICAgICAgICAgc2VsZi5zdGF0ZS5jb3VudGVyKys7XG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIHNlbGYuc3RhdGUuZWRpdGFibGUgPSAhc2VsZi5zdGF0ZS5lZGl0YWJsZSA7XG5cbi8vICAgICAgICAgICAgIHNlbGYuc3RhdGUubWVzc2FnZSA9IGBXZSBjb3VudCB0byAkeyBzZWxmLnN0YXRlLmNvdW50ZXIgfWBcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ0luY3JlbWVudCcsIHNlbGYuc3RhdGUuY291bnRlciwgc2VsZi5zdGF0ZS5wZXJzb25zIClcbiAgICAgICAgICAgIFxuLy8gICAgICAgICB9XG4gICAgICAgIFxuLy8gICAgIH1cblxuXG4vLyB9KVxuXG5cblxuXG5jb25zdCB0aGVtZUNvbG9yID0gKG5ldyBTZW5zZW5UaGVtZUNvbG9yKCkpXG5cblxuICAgIC5hZGQoU2Vuc2VuRGVmYXVsdFBhbGV0dGUpXG5cbiAgICAuYWRkKFNlbnNlbk5pZ2h0VG9uZSlcblxuICAgIC5hZGQoU2Vuc2VuTGlnaHRUb25lKVxuXG4gICAgLmFkZChTZW5zZW5EYXJrVG9uZSlcblxuICAgIC5hZGQoU2Vuc2VuU25vd1RvbmUpXG5cblxuICAgIC5yZW5kZXIodHJ1ZSlcblxuICAgIC51c2VQYWxldHRlKFwiZGVmYXVsdFwiLCB0cnVlKVxuXG4gICAgLnVzZVRvbmUoXCJkYXJrXCIsIHRydWUpXG5cbjtcblxuXG5cbmludGVyZmFjZSBIb21lQWN0aXZpdHlQcm9wcyBleHRlbmRzIFNjZW5lQWN0aXZpdHlQcm9wc3tcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcblxufVxuXG5cbmludGVyZmFjZSBBYm91dEFjdGl2aXR5UHJvcHMgZXh0ZW5kcyBTY2VuZUFjdGl2aXR5UHJvcHN7XG5cbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgc2hhcmluZzogYm9vbGVhbjtcblxufVxuXG5cblxuXG5jb25zdCBIb21lQWN0aXZpdHkgPSBuZXcgU2NlbmVBY3Rpdml0eTxIb21lQWN0aXZpdHlQcm9wcz4oe1xuXG4gICAgbmFtZTogJ2hvbWUnLFxuXG4gICAgcm91dGU6ICdob21lJyxcblxuICAgIHRlbXBsYXRlOiAnLi9zY3JlZW5zL2hvbWUuaHRtbCcsXG4gICAgXG4gICAgYXJndW1lbnRzOiBbJ3Nkc2QnXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgdGl0bGU6ICdIZWxsbyBNeSBTY3JlZW4nLFxuICAgIFxuICAgICAgICBpY29uOiAnaG9tZScsXG5cbiAgICAgICAgbWVzc2FnZTogJ1NhbHV0IE1lcyBndXlzJ1xuICAgICAgICBcbiAgICB9LFxuICAgIFxuICAgIG9wdGlvbnM6IHtcblxuICAgICAgICB3aXJlZnJhbWU6ICdiYXNpYycsXG5cbiAgICAgICAgdHJhbnNpdGlvbjoge1xuXG4gICAgICAgICAgICBlbnRyeTogbmV3IEZ4U2xpZGVIb3Jpem9udGFsLFxuXG4gICAgICAgICAgICBleGl0OiBuZXcgRnhTbGlkZUhvcml6b250YWwsXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGVtaXQ6eyBcbiAgICAgICAgcmVhZHkoYWN0aXZpdHkpe1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0FjdGl2aXR5IGlzIFJlYWR5JywgYWN0aXZpdHkpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhcHBlYXJhbmNlOnt9LFxuXG5cbn0pXG5cblxuXG5cblxuY29uc3QgQWJvdXRBY3Rpdml0eSA9IG5ldyBTY2VuZUFjdGl2aXR5PEFib3V0QWN0aXZpdHlQcm9wcz4oe1xuXG4gICAgbmFtZTogJ2Fib3V0JyxcblxuICAgIHJvdXRlOiAnYWJvdXQvZGVmYXVsdCcsXG5cbiAgICB0ZW1wbGF0ZTogJy4vc2NyZWVucy9hYm91dC5odG1sJyxcbiAgICBcbiAgICAvLyBhcmd1bWVudHM6IFsnc2RzZCddLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICBcbiAgICAgICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcblxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtJyxcblxuICAgICAgICBzaGFyaW5nOiBmYWxzZSxcbiAgICAgICAgXG4gICAgfSxcbiAgICBcbiAgICBvcHRpb25zOiB7XG5cbiAgICAgICAgd2lyZWZyYW1lOiAnYmFzaWMnLFxuXG4gICAgICAgIHRyYW5zaXRpb246IHtcblxuICAgICAgICAgICAgZW50cnk6IG5ldyBGeFNsaWRlSG9yaXpvbnRhbCxcblxuICAgICAgICAgICAgZXhpdDogbmV3IEZ4U2xpZGVIb3Jpem9udGFsLFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBlbWl0OnsgXG4gICAgICAgIFxuICAgICAgICByZWFkeShhY3Rpdml0eSl7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignQWN0aXZpdHkgaXMgUmVhZHknLCBhY3Rpdml0eSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGFwcGVhcmFuY2U6eyB9LFxuXG5cbn0pXG5cblxuXG5cblNlbnNlbi5NYWluKFxuXG4gICAgSnV0c3UuS3VjaGl5b3NlKHtcblxuICAgICAgICBuYW1lOiAnZXhlbXBsZScsXG4gICAgXG4gICAgICAgIG1haW4oY2FudmFzKXtcbiAgICBcbiAgICAgICAgICAgIHR5cGUgcm91dGVyU2NoZW1lID0ge1xuICAgIFxuICAgICAgICAgICAgICAgICdob21lJzogSG9tZUFjdGl2aXR5UHJvcHMsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAnYWJvdXQvZGVmYXVsdCc6IEFib3V0QWN0aXZpdHlQcm9wcyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSAobmV3IFNlbnNlblJvdXRlcjxyb3V0ZXJTY2hlbWU+KHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6J2hvbWUnLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYmFzZVVSTDogJydcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmdldDxIb21lQWN0aXZpdHlQcm9wcz4oSG9tZUFjdGl2aXR5KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5nZXQ8QWJvdXRBY3Rpdml0eVByb3BzPihBYm91dEFjdGl2aXR5KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLnJlbmRlcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgXG4gICAgICAgIFxuICAgIH0pXG5cbilcblxuXG5cblxuXG5cblxuLy8gcm91dGVyLm5hdmlnYXRlKCdhYm91dC9kZWZhdWx0JylcblxuXG5cblxuLy8gY29uc3Qgcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbi1yb290JylcblxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChybylcblxuXG4vLyBzZXRUaW1lb3V0KCgpPT57XG5cbi8vICAgICByby5zZXRBdHRyaWJ1dGUoJ2hlbGxvJywgJ3dvcmxkJylcbi8vICAgICByby5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ3dvcmxkJylcblxuLy8gfSwgMTAwMClcblxuIl19