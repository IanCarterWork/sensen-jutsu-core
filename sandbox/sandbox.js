import { FxScalingIn, FxSlideHorizontal } from "./animation/preset";
import { Component, Jutsu } from "./index";
import RouterNavigationAbilities, { SensenRouter, SensenRouterEntry } from "./router";
const HelloComponent = Component({
    name: 'hello',
    state: {
        my: 'SubTitle',
        counter: 0,
        aboutlink: 'about',
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
        ...RouterNavigationAbilities(),
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

            <a href="javascript:void(0)" @click="this.$application.$router.get('home/state/update',{world:'Pink me'})">Home</a>
            
            <a href="javascript:void(0)" @click="this.$application.$router.get('about')">About</a>

            <br>
            <br>

                <button 
                    @click="this.methods.navigate" 
                    navigate-method="post"
                    navigate-uri="about?counter=200"
                >Navigate to About</button>
            
            <br>
            <br>


            <div>

                <navigate-link uri="{{ this.$state.aboutlink }}"   >
    
                    <div 
                        ui-flex="row align-center-v"
                    >
                        <div navigation-icon="">
                            <i class="fal fa-circle"></i>
                        </div>
                        <div navigation-label="">Link Navigate to about</div>
    
                    </div>
                    
                </navigate-link>

            </div>
            
            
            <div>
    
                <button type="button" @click="this.methods.addCounter">Incrementer</button>
                <button type="button" @click.stop="this.methods.minusCounter">Decrementer</button>
    
                <sense-kit-input state:icon="thumbs-up" state:label="Username!" state:type="username" state:name="username" ></sense-kit-input>

    
            </div>
            

            <div>

            {% $Until(this.$state.toolsavailables, tool=>{ %}
        
            <div 

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

                    <sense-kit-input state:label="{%= tool.route %}" > </sense-kit-input>

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


        `;
        return null;
    }
});
// HelloComponent.$using()
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
const KitInput = Component({
    name: 'kit-input',
    state: {
        icon: 'user',
        label: 'no label',
        cleaner: true,
        secureText: false,
        name: 'test',
        type: 'text',
        value: 'sdclhbsd',
        rounded: 'medium',
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
        return `

        <label ui-fx="transition" fx-global ui-textinput ui-rounded="{{ this.$state.rounded || 'larger' }}" >

            <div input-icon ui-flex="row align-center-v align-center-h"> <i class="fa-thin fa-{{ this.$state.icon || 'circle-dashed' }}"></i> </div>
        
            <div input-stack >
        
                {% if(this.$state.type == "textarea"){ %}
        
                    <textarea 
        
                    @blur="this.methods.leaved" 
                    
                    type="{%= this.$state.type || 'text' %}" 
                    
                    name="{%= this.$state.name || '' %}" 
        
                    placeholder="{%= this.$state.label || '' %}" 
                    
                    input-field >{%= this.$state.value || '' %}</textarea>
        
                {% } else{ %}
                    
                    <input 
                        
                        @blur="this.methods.leaved" 
                        
                        type="{%= this.$state.type || 'text' %}" 
                        
                        name="{%= this.$state.name || '' %}" 
        
                        placeholder="{%= this.$state.label || '' %}" 
                        
                        input-field 
                        
                    />
                
                {% } %}
        
                <div input-label >{%= this.$state.label %}</div>
        
            </div>
        
        
            <div input-tools ui-flex="align-center-v align-center-h">
        
                <div ui-tools >
        
                    {% if(this.$state.label){ %}
        
                    <div tool-item @click="this.methods.cleaner" > <i class="fa-thin fa-times"></i> </div>
                    
                    {% } %}
                    
                </div>
                
            </div>
        
        
        
        </label>
        
        
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
        // console.warn('$>', $Component<HelloState>('hello') )
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
