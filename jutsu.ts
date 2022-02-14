import { SensenHTMLElement } from "./index";
import { SensenAppearance, TAppearanceProps } from "./appearance/index";
import { ThemeColor } from "./theme-color/index";


export type KuchiyoceProps = {

    name: string;

    appearance?: TAppearanceProps;

    main: (canvas: HTMLElement) => void
    
}




export class KuchiyoceElement extends SensenHTMLElement<KuchiyoceProps>{

    
    $appearance: SensenAppearance;

    constructor (

        public props: KuchiyoceProps

    ){

        super(props);

        this.$appearance = new SensenAppearance;


        this.$initialize();

        if(typeof props.main == 'function'){

            props.main(this)
            
        }
        
    }




    $initialize(){

        this.$setAppearance();

        return this;
        
    }



    $setAppearance(){

        this.$appearance.selectors(

            this.props.appearance || {}
            
        ).selectors({

            $self:[

                {
                    width: '100vw',

                    height: '100vh',

                    overflow: 'hidden',

                    position: 'relative',

                    display: 'flex',

                    justifyContent: 'center',

                    alignItems: 'center',

                    backgroundColor: ThemeColor.$('layer'),
                    
                }
                
            ]
            
        }).mount();

        this.classList.add( this.$appearance.$UiD )

        return this;
        
    }
    
    
    
    
    
}




export class Jutsu{


    static Kuchiyose(props: KuchiyoceProps){

        const tagName = `sensen-${ props.name }`;

        /**
         * Initialisation du DOM
         */
        if(!customElements.get(tagName)){

            customElements.define(tagName, KuchiyoceElement)
            
        }
        

        return new KuchiyoceElement(props);
        
    }

    
    
    
    
}

