import { SensenHTMLElement } from ".";
import { SensenAppearance, TAppearanceProps } from "./appearance";
export declare type KuchiyoceProps = {
    name: string;
    appearance?: TAppearanceProps;
    main: (canvas: HTMLElement) => void;
};
export declare class KuchiyoceElement extends SensenHTMLElement<KuchiyoceProps> {
    props: KuchiyoceProps;
    $appearance: SensenAppearance;
    constructor(props: KuchiyoceProps);
    $initialize(): this;
    $setAppearance(): this;
}
export declare class Jutsu {
    static Kuchiyose(props: KuchiyoceProps): KuchiyoceElement;
}
//# sourceMappingURL=jutsu.d.ts.map