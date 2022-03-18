import { FxScalingIn, FxSlideHorizontal } from "./animation/preset.js.js.js.js";
import { Component, Jutsu } from "./index.js.js.js.js";
import { SensenRouter, SensenRouterEntry } from "./router.js.js.js.js";
const HelloComponent = Component({
    name: 'hello',
    state: {
        my: 'SubTitle',
        counter: 0,
        world: 'Hello Title',
        abs: ['a', 'b', 'c'],
        toolsavailables: [
            {
                icon: 'fa-thin fa-face-dizzy fa-7x',
                label: `J'ai perdu un objet`,
                route: 'feeds/getstarted'
            },
            {
                icon: 'fa-thin fa-face-grin-beam fa-7x',
                label: `J'ai retrouvé un objet`,
                route: 'publish'
            },
        ]
    },
    methods: {
        addCounter({ state, router }) {
            state.counter++;
            state.my = `count to ${state.counter}`;
            state.world = null;
            // if(router instanceof SensenRouter){
            //     router.get('home/com/ing', {})
            // }
            if (state.toolsavailables) {
                state.toolsavailables[state.counter] = {
                    icon: `icon ${state.counter}`,
                    label: `label ${state.counter}`,
                    route: `route ${state.counter}`,
                };
                // state.toolsavailables['1'].label = `new label to ${ state.counter }`
                // console.log('AddCounter', state.toolsAvailables[0] )
            }
        },
        minusCounter({ state }) {
            console.log('MinusCounter', state.counter);
            state.counter--;
        },
    },
    transition: {
        onbuild: FxSlideHorizontal,
        ondestroy: FxSlideHorizontal,
    },
    construct({ element }) {
        // console.warn('Element Construct', element)
        // element.$emitter?.listen<SensenElement<HelloState, HelloState>>('begin', ({ emit, type })=>{
        //     console.warn(type, '=>', emit )
        // })
        // element.$emitter?.listen<SensenElement<HelloState, HelloState>>('done', ({ emit, type })=>{
        //     console.warn(type, '=>', emit )
        // })
    },
    mount({ element }) {
        // console.warn('Mount Component', this.state)
        // return new Promise<string>((done, fail)=>{
        //     setTimeout(()=>{
        //         done("data.done")
        //     }, 3000)
        // })
    },
    unmount() {
        console.log('UnMount Now', this);
    },
    render({ element, children, state }) {
        // let timer = setInterval(()=>{
        //     console.log('Counter', state?.counter, element )          
        //     state.counter = (state?.counter||0) + 1;
        // }, 1000)
        // setTimeout(()=>{
        //     clearInterval(timer)
        // }, 6000)
        // console.warn('Get Children', children)
        // console.warn('Render excuting', state, component)
        return `

            <h1>{{ this.$state.world ? this.$state.world : 'no' }}</h1>
            <h1>{{ this.$state.my }}</h1>
            <h3>{{ this.$state.counter }}</h3>

            <button type="button" @click.prevent="this.methods.addCounter">Incrementer</button>
            <button type="button" @click.stop="this.methods.minusCounter">Decrementer</button>


            <div>

            {% $Until(this.$state.toolsavailables, tool=>{ %}
        
            <div 
            onclick="location.href='#{%=tool.route%}'"
            ui-fx="transition"
            ui-margin="2x"
            ui-rounded
            ui-flex="column align-center"
            ui-text="color-white"
            ui-box="gradient:one-two gradient:two-one::hover square-6" >

                <div 
                ui-flex="row align-center"
                flex="fill"
                >
                    <i class="">{%= tool.icon %}</i>
                    
                    <i class="">{%= tool.label %}</i>

                    <i class="">{%= tool.route %}</i>

                </div>

                <div
                ui-padding="v:3x"
                >{%= tool.label %}</div>

            </div>

            {% }) %}
        
                
            </div>

            <br>
            <br>
            <br>

            <a href="javascript:void(0)" @click="this.$application.$router.get('home/state/update',{world:'Pink me'})">Home</a>
            
            <a href="javascript:void(0)" @click="this.$application.$router.get('about')">About</a>
            
        `;
        return null;
    }
});
const WorldComponent = Component({
    name: 'world',
    state: {
        counter: 0,
        world: 'World Title!'
    },
    appearance: {
        $self: {
            backgroundColor: 'red'
        }
    },
    transition: {
        onbuild: FxScalingIn,
        ondestroy: FxScalingIn,
    },
    render: ({ state }) => {
        // console.log('WorldComponent', state)
        return `

            <h1>{{ this.$state.world }}</h1>

            <h1>{{ this.$state.counter }}</h1>

            <hr>

            <sense-hello state:world="{{ this.$state.world }}" state:counter="{{ this.$state.counter }}"> </sense-hello>
        
        `;
        return null;
    }
});
Jutsu.Kuchiyoce('sandbox', {
    state: {
        appName: 'Hell Guys'
    },
    main(state, canvas) {
        // console.warn('Kuchioyce State', state, this)
        return (new SensenRouter({
            default: 'home/coming/home',
            canvas
        }))
            .add(new SensenRouterEntry({
            pattern: 'home/*/*',
            method: 'get',
            component: HelloComponent
        }))
            .add(new SensenRouterEntry({
            pattern: 'about',
            method: 'get',
            component: WorldComponent
        }))
            .run(state);
        /*
                return `
        
                    <h1>Sensen Jutsu Revolte</h1>
        
                    <sense-hello prop:world="IanCarter is Great">
        
                        <p class="title" title="{{ this.state.world }}" >Lorem ipsum</p>
                        
                        <h1>{{ this.state.world }}</h1>
                        <h3>{{ this.state.my }}</h3>
                        <h3>{{ this.state.counter }}</h3>
                        <p class="foreach">
                        {% if(this.state.world){ %}
                            <span>{%= this.state.world %}</span>
                        {% } %}
                        </p>
                        <div>
                            {% if(this.state.my){ %}
                                <p>{%= this.state.my %}</p>
                            {% } %}
                        </div>
                        <h3>{{ this.state.counter }}</h3>
        
                        <button type="button" @click="this.methods.addCounter">Incrementer</button>
                        <button type="button" @click="this.methods.minusCounter">Decrementer</button>
        
                    </sense-hello>
        
                `
         */
    }
});
