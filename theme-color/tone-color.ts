
import SensenColor from './color';
import { SensenColorNature } from './color.t';
import { SensenColorVariations } from './index.t';
import { SensenToneScheme, SensenToneSchemeIs } from './tone-color.t';




export class SensenToneColor extends SensenColor{

    nature: SensenColorNature = '@tone';

    mixed: SensenColorVariations = {} as SensenColorVariations;



    constructor(
        
        public name: string, 
        
        public scheme: SensenToneScheme, 
        
        public readonly is: SensenToneSchemeIs = 'light'
        
    ){

        super();
        
    }
    

    
}