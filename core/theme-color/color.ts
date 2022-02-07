import { SensenColorNature, SensenColorSchemeBase } from "./color.t";
import SensenColoring from "./coloring";
import { SensenColorVariation, SensenColorVariations } from "./index.t";





export default class SensenColor{

    nature: SensenColorNature = '@palette';

    name: string = '';
    
    scheme: SensenColorSchemeBase = {} as SensenColorSchemeBase;

    mixed: SensenColorVariations = {};

    Mixture(){

        if(this.scheme){

            Object.entries(this.scheme).map(i=>{

                const rgb = SensenColoring.HexToRGB(i[1]);

                const mixed: SensenColorVariation = {
                
                    color: i[1],
                
                    rgb: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
                
                    rgbSmaller: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .1)`,
                
                    rgbSmall: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .20)`,
                
                    rgbMedium: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .50)`,
                
                    rgbBig: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .80)`,
                
                    rgbBigger: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .96)`,
                    
                }

                this.mixed[i[0]] = mixed

            });
            
        }

        return this;
        
    }
    
}