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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4ZW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxNQUFNLE1BQU0sR0FBRyxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDM0MsT0FBTyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4QyxPQUFPLGdCQUFnQixNQUFNLGVBQWUsQ0FBQztBQUU3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFLekQsb0NBQW9DO0FBRXBDLG9CQUFvQjtBQUVwQix1QkFBdUI7QUFHdkIsMkNBQTJDO0FBRzNDLGFBQWE7QUFFYiwwQ0FBMEM7QUFFMUMsYUFBYTtBQUViLDRCQUE0QjtBQUU1QiwyREFBMkQ7QUFFM0QsWUFBWTtBQUVaLFNBQVM7QUFJVCxjQUFjO0FBRWQsOEJBQThCO0FBRTlCLFNBQVM7QUFJVCxjQUFjO0FBRWQsMkJBQTJCO0FBRTNCLCtCQUErQjtBQUMvQiw0Q0FBNEM7QUFFNUMsbUNBQW1DO0FBRW5DLDhDQUE4QztBQUU5QyxnREFBZ0Q7QUFFaEQsK0JBQStCO0FBRS9CLHVCQUF1QjtBQUV2QixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCLGFBQWE7QUFF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LENBQUM7SUFJZCxDQUFDO0NBR0osQ0FBQyxDQUVMLENBQUE7QUFRRCxtQ0FBbUM7QUFLbkMsK0NBQStDO0FBRS9DLGdDQUFnQztBQUdoQyxtQkFBbUI7QUFFbkIsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUV4QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbnNlbiBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgU2NlbmVBY3Rpdml0eSB9IGZyb20gXCIuL2FjdGl2aXR5XCI7XG5pbXBvcnQgeyBGeFByZXNlbnRlciwgRnhTbGlkZUhvcml6b250YWwgfSBmcm9tIFwiLi9meC9wcmVzZXRcIjtcbmltcG9ydCB7IFNjZW5lQWN0aXZpdHlQcm9wcyB9IGZyb20gXCIuL2luZGV4LnRcIjtcbmltcG9ydCB7IEp1dHN1IH0gZnJvbSBcIi4vanV0c3VcIjtcbmltcG9ydCB7IFNlbnNlblJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IFNlbnNlblRoZW1lQ29sb3IgZnJvbSBcIi4vdGhlbWUtY29sb3JcIjtcbmltcG9ydCB7IFNlbnNlblBhbGV0dGVDb2xvciB9IGZyb20gXCIuL3RoZW1lLWNvbG9yL3BhbGV0dGUtY29sb3JcIjtcbmltcG9ydCB7IFNlbnNlbkRlZmF1bHRQYWxldHRlIH0gZnJvbSBcIi4vdGhlbWUtY29sb3IvcGFsZXR0ZS9kZWZhdWx0XCI7XG5pbXBvcnQgeyBTZW5zZW5Ub25lQ29sb3IgfSBmcm9tIFwiLi90aGVtZS1jb2xvci90b25lLWNvbG9yXCI7XG5pbXBvcnQgeyBTZW5zZW5EYXJrVG9uZSB9IGZyb20gXCIuL3RoZW1lLWNvbG9yL3RvbmUvZGFya1wiO1xuaW1wb3J0IHsgU2Vuc2VuTGlnaHRUb25lIH0gZnJvbSBcIi4vdGhlbWUtY29sb3IvdG9uZS9saWdodFwiO1xuaW1wb3J0IHsgU2Vuc2VuTmlnaHRUb25lIH0gZnJvbSBcIi4vdGhlbWUtY29sb3IvdG9uZS9uaWdodFwiO1xuaW1wb3J0IHsgU2Vuc2VuU25vd1RvbmUgfSBmcm9tIFwiLi90aGVtZS1jb2xvci90b25lL3Nub3dcIjtcblxuXG5cbiAgICBcbi8vIGNvbnN0IHZtID0gbmV3IFNlbnNlbi5Db21wb25lbnQoe1xuXG4vLyAgICAgbmFtZTogJ3Jvb3QnLFxuXG4vLyAgICAgZWxlbWVudDogJyNhcHAnLFxuXG5cbi8vICAgICB0ZW1wbGF0ZTogJ2NvbXBvbmVudHMvcm9vdC5zbi5odG1sJyxcbiAgICBcblxuLy8gICAgIGVtaXQ6e1xuXG4vLyAgICAgICAgIGV4cHJlc3Npb25SZWNvcmRlZDogKHJlY29yZCk9PntcblxuLy8gICAgICAgICB9LFxuXG4vLyAgICAgICAgIGNvbm5lY3RlZDogKGUpPT57XG5cbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignQ29tcG9uZW50IGlzIENvbm5lY3RlZCcsIGUpXG5cbi8vICAgICAgICAgfVxuXG4vLyAgICAgfSxcblxuXG5cbi8vICAgICBwcm9wczp7XG5cbi8vICAgICAgICAgdGl0bGU6ICdsb2FkaW5nLi4uJ1xuXG4vLyAgICAgfSxcblxuXG5cbi8vICAgICBzdGF0ZTp7XG5cbi8vICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxuXG4vLyAgICAgICAgIGZ1bGxuYW1lOiAnbm8gZGF0YScsXG4vLyAgICAgICAgIC8vIGZ1bGxuYW1lOiAneyU9KG5ldyBEYXRlKCkpJX0nLFxuXG4vLyAgICAgICAgIHRpdGxlOiAnSGVsbG8gbGVzIGdlbnMnLFxuXG4vLyAgICAgICAgIHdlbGNvbWU6ICdXZWxjb21lIHRvIHRoZSBoYXJkbGVzcycsXG5cbi8vICAgICAgICAgbWVzc2FnZTogJ0xvcmVtIGlwc3VtIHt7IGNvdW50ZXIgfX0nLFxuXG4vLyAgICAgICAgIHJvdXRlOiAnY29taW5nc29vbicsXG5cbi8vICAgICAgICAgY291bnRlcjogMTAsXG5cbi8vICAgICAgICAgcGVyc29uczogW1xuLy8gICAgICAgICAgICAgJ1lhbm4nLFxuLy8gICAgICAgICAgICAgJ0NocmlzdGluYScsXG4vLyAgICAgICAgICAgICAnTXlhbmEnLFxuLy8gICAgICAgICAgICAgJ1N5YW5hJ1xuLy8gICAgICAgICBdLFxuXG4vLyAgICAgICAgIGNoaW1lOntcbi8vICAgICAgICAgICAgIGNhcmJvbmU6IGZhbHNlLFxuLy8gICAgICAgICAgICAgb3h5Z2VuOiBmYWxzZSxcbi8vICAgICAgICAgICAgIGF6b3RlOiBmYWxzZSxcbi8vICAgICAgICAgfVxuXG4vLyAgICAgfSxcblxuXG5cbi8vICAgICBtZXRob2RzOntcblxuLy8gICAgICAgICB1cGRhdGVGdWxsbmFtZSh7IHNlbGYsIGV2ZW50fSl7XG5cbi8vICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbi8vICAgICAgICAgICAgIHNlbGYuc3RhdGUuZnVsbG5hbWUgPSBldmVudC50YXJnZXQ/LnZhbHVlfHwnJ1xuXG4vLyAgICAgICAgIH0sXG4gICAgICAgIFxuLy8gICAgICAgICBhZGRQZXJzb24oeyBzZWxmLCBldmVudH0pe1xuXG4vLyAgICAgICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcblxuLy8gICAgICAgICAgICAgaWYoZm9ybS5mdWxsbmFtZS52YWx1ZSl7XG5cbi8vICAgICAgICAgICAgICAgICAvLyBmb3JtLmZ1bGxuYW1lLnZhbHVlID0gKCBmb3JtLmZ1bGxuYW1lLnZhbHVlIClcblxuLy8gICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUucGVyc29ucy5wdXNoKGZvcm0uZnVsbG5hbWUudmFsdWUpXG5cbi8vICAgICAgICAgICAgICAgICBmb3JtLmZ1bGxuYW1lLnZhbHVlID0gJydcblxuLy8gICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuZnVsbG5hbWUgPSAnJ1xuICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkUGVyc29uJylcblxuLy8gICAgICAgICAgICAgLy8gc2VsZi5zdGF0ZS5wZXJzb25zLnB1c2goYCR7IChuZXcgRGF0ZSgpKSB9YClcblxuLy8gICAgICAgICB9LFxuICAgICAgICBcbi8vICAgICAgICAgaW5jcmVtZW50KHsgc2VsZiB9KXtcblxuLy8gICAgICAgICAgICAgc2VsZi5zdGF0ZS5jaGltZS5jYXJib25lID0gIXNlbGYuc3RhdGUuY2hpbWUuY2FyYm9uZVxuXG4vLyAgICAgICAgICAgICBzZWxmLnN0YXRlLnBlcnNvbnNbMV0gPSBgSWFuQ2FydGVyIE5vdyAkeyBzZWxmLnN0YXRlLmNvdW50ZXIgfSAvIHt7IGNvdW50ZXIgfX1gXG5cbi8vICAgICAgICAgICAgIHNlbGYuc3RhdGUuY291bnRlcisrO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICBzZWxmLnN0YXRlLmVkaXRhYmxlID0gIXNlbGYuc3RhdGUuZWRpdGFibGUgO1xuXG4vLyAgICAgICAgICAgICBzZWxmLnN0YXRlLm1lc3NhZ2UgPSBgV2UgY291bnQgdG8gJHsgc2VsZi5zdGF0ZS5jb3VudGVyIH1gXG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmNyZW1lbnQnLCBzZWxmLnN0YXRlLmNvdW50ZXIsIHNlbGYuc3RhdGUucGVyc29ucyApXG4gICAgICAgICAgICBcbi8vICAgICAgICAgfVxuICAgICAgICBcbi8vICAgICB9XG5cblxuLy8gfSlcblxuXG5cblxuY29uc3QgdGhlbWVDb2xvciA9IChuZXcgU2Vuc2VuVGhlbWVDb2xvcigpKVxuXG5cbiAgICAuYWRkKFNlbnNlbkRlZmF1bHRQYWxldHRlKVxuXG4gICAgLmFkZChTZW5zZW5OaWdodFRvbmUpXG5cbiAgICAuYWRkKFNlbnNlbkxpZ2h0VG9uZSlcblxuICAgIC5hZGQoU2Vuc2VuRGFya1RvbmUpXG5cbiAgICAuYWRkKFNlbnNlblNub3dUb25lKVxuXG5cbiAgICAucmVuZGVyKHRydWUpXG5cbiAgICAudXNlUGFsZXR0ZShcImRlZmF1bHRcIiwgdHJ1ZSlcblxuICAgIC51c2VUb25lKFwiZGFya1wiLCB0cnVlKVxuXG47XG5cblxuXG5pbnRlcmZhY2UgSG9tZUFjdGl2aXR5UHJvcHMgZXh0ZW5kcyBTY2VuZUFjdGl2aXR5UHJvcHN7XG5cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG5cbn1cblxuXG5pbnRlcmZhY2UgQWJvdXRBY3Rpdml0eVByb3BzIGV4dGVuZHMgU2NlbmVBY3Rpdml0eVByb3Bze1xuXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIHNoYXJpbmc6IGJvb2xlYW47XG5cbn1cblxuXG5cblxuY29uc3QgSG9tZUFjdGl2aXR5ID0gbmV3IFNjZW5lQWN0aXZpdHk8SG9tZUFjdGl2aXR5UHJvcHM+KHtcblxuICAgIG5hbWU6ICdob21lJyxcblxuICAgIHJvdXRlOiAnaG9tZScsXG5cbiAgICB0ZW1wbGF0ZTogJy4vc2NyZWVucy9ob21lLmh0bWwnLFxuICAgIFxuICAgIGFyZ3VtZW50czogWydzZHNkJ10sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIHRpdGxlOiAnSGVsbG8gTXkgU2NyZWVuJyxcbiAgICBcbiAgICAgICAgaWNvbjogJ2hvbWUnLFxuXG4gICAgICAgIG1lc3NhZ2U6ICdTYWx1dCBNZXMgZ3V5cydcbiAgICAgICAgXG4gICAgfSxcbiAgICBcbiAgICBvcHRpb25zOiB7XG5cbiAgICAgICAgd2lyZWZyYW1lOiAnYmFzaWMnLFxuXG4gICAgICAgIHRyYW5zaXRpb246IHtcblxuICAgICAgICAgICAgZW50cnk6IG5ldyBGeFNsaWRlSG9yaXpvbnRhbCxcblxuICAgICAgICAgICAgZXhpdDogbmV3IEZ4U2xpZGVIb3Jpem9udGFsLFxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBlbWl0OnsgXG4gICAgICAgIHJlYWR5KGFjdGl2aXR5KXtcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdBY3Rpdml0eSBpcyBSZWFkeScsIGFjdGl2aXR5KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYXBwZWFyYW5jZTp7fSxcblxuXG59KVxuXG5cblxuXG5cbmNvbnN0IEFib3V0QWN0aXZpdHkgPSBuZXcgU2NlbmVBY3Rpdml0eTxBYm91dEFjdGl2aXR5UHJvcHM+KHtcblxuICAgIG5hbWU6ICdhYm91dCcsXG5cbiAgICByb3V0ZTogJ2Fib3V0L2RlZmF1bHQnLFxuXG4gICAgdGVtcGxhdGU6ICcuL3NjcmVlbnMvYWJvdXQuaHRtbCcsXG4gICAgXG4gICAgLy8gYXJndW1lbnRzOiBbJ3Nkc2QnXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgXG4gICAgICAgIGljb246ICdpbmZvLWNpcmNsZScsXG5cbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bScsXG5cbiAgICAgICAgc2hhcmluZzogZmFsc2UsXG4gICAgICAgIFxuICAgIH0sXG4gICAgXG4gICAgb3B0aW9uczoge1xuXG4gICAgICAgIHdpcmVmcmFtZTogJ2Jhc2ljJyxcblxuICAgICAgICB0cmFuc2l0aW9uOiB7XG5cbiAgICAgICAgICAgIGVudHJ5OiBuZXcgRnhTbGlkZUhvcml6b250YWwsXG5cbiAgICAgICAgICAgIGV4aXQ6IG5ldyBGeFNsaWRlSG9yaXpvbnRhbCxcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZW1pdDp7IFxuICAgICAgICBcbiAgICAgICAgcmVhZHkoYWN0aXZpdHkpe1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0FjdGl2aXR5IGlzIFJlYWR5JywgYWN0aXZpdHkpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhcHBlYXJhbmNlOnsgfSxcblxuXG59KVxuXG5cblxuXG5TZW5zZW4uTWFpbihcblxuICAgIEp1dHN1Lkt1Y2hpeW9zZSh7XG5cbiAgICAgICAgbmFtZTogJ2V4ZW1wbGUnLFxuICAgIFxuICAgICAgICBtYWluKGNhbnZhcyl7XG4gICAgXG4gICAgICAgICAgICB0eXBlIHJvdXRlclNjaGVtZSA9IHtcbiAgICBcbiAgICAgICAgICAgICAgICAnaG9tZSc6IEhvbWVBY3Rpdml0eVByb3BzLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJ2Fib3V0L2RlZmF1bHQnOiBBYm91dEFjdGl2aXR5UHJvcHMsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gKG5ldyBTZW5zZW5Sb3V0ZXI8cm91dGVyU2NoZW1lPih7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0Oidob21lJyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJhc2VVUkw6ICcnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5nZXQ8SG9tZUFjdGl2aXR5UHJvcHM+KEhvbWVBY3Rpdml0eSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuZ2V0PEFib3V0QWN0aXZpdHlQcm9wcz4oQWJvdXRBY3Rpdml0eSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC5yZW5kZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBcbiAgICB9KVxuXG4pXG5cblxuXG5cblxuXG5cbi8vIHJvdXRlci5uYXZpZ2F0ZSgnYWJvdXQvZGVmYXVsdCcpXG5cblxuXG5cbi8vIGNvbnN0IHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc24tcm9vdCcpXG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm8pXG5cblxuLy8gc2V0VGltZW91dCgoKT0+e1xuXG4vLyAgICAgcm8uc2V0QXR0cmlidXRlKCdoZWxsbycsICd3b3JsZCcpXG4vLyAgICAgcm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICd3b3JsZCcpXG5cbi8vIH0sIDEwMDApXG5cbiJdfQ==