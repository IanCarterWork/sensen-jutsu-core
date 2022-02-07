import { TObjectEmbed } from ".";
import { SensenEmitter } from "./emitter";
export interface TAppearanceDeclarations extends Omit<CSSStyleDeclaration, 'width' | 'height' | 'margin' | 'padding'> {
    width?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    height?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    paddingVertical?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    paddingHorizontal?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    marginVertical?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    marginHorizontal?: 'auto' | 'initial' | 'inherit' | 'unset' | number | string;
    padding?: 'auto' | 'initial' | 'inherit' | 'unset' | (string | number)[] | number | string;
    margin?: 'auto' | 'initial' | 'inherit' | 'unset' | (string | number)[] | number | string;
    backdropFilter?: 'auto' | 'initial' | 'inherit' | 'unset' | string;
    scrollbarWidth?: 'auto' | 'initial' | 'inherit' | 'unset' | string;
}
export declare type TAppearanceEntry = {
    selector: string;
    value: TObjectEmbed<TAppearanceDeclarations>;
    rank: number;
};
export declare type TAppearanceProps = {
    [selector: string]: TObjectEmbed<TAppearanceDeclarations>[];
};
export declare type TAppearanceEmitter = {
    construct: (component: SensenAppearance) => void;
    initialized: (component: SensenAppearance) => void;
    mounted: (component: SensenAppearance) => void;
    selectorAdded: (entry: TAppearanceEntry) => void;
};
export declare class SensenAppearance {
    $dom: HTMLStyleElement;
    $UiD: string;
    $emitter: SensenEmitter;
    props: TAppearanceProps;
    emit: TAppearanceEmitter;
    $refs: {
        [K: string]: Text;
    };
    constructor(props?: TAppearanceProps);
    $generateUiD(): string;
    $initialize(): this;
    selector(selector: string, value: TObjectEmbed<TAppearanceDeclarations>): this;
    selectors(appearance: TAppearanceProps): this;
    $emitting(): this;
    render(slot: string): Text;
    mount(): this;
}
export declare function OIAppearanceProp(prop: string): string[];
export declare function OIAppearanceValue(value: any): string;
export declare function OIAppearance(entries: TAppearanceProps): {
    selectors: string[];
    rows: string[];
};
//# sourceMappingURL=appearance.d.ts.map