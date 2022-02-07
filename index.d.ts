import { SensenEmitter } from "./emitter";
import type { ComponentMethodEvent, ComponentMethodRaw, ComponentProps, ComponentState, TComponentOptions } from "./index.t";
import { SensenAppearance } from "./appearance";
/**
 * Metric
 */
export declare type MetricTAlphaNum = 'a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
export declare type MetricTAlphaNumL = 'a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9';
export declare type MetricTAlphaNumU = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9';
export declare type MetricTAlphaU = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
export declare type MetricTAlphaL = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
export declare type MetricTNum = '0 1 2 3 4 5 6 7 8 9';
export declare type MetricTHex = 'a b c d e f A B C D E F';
export declare type TObjectEmbed<T> = {
    [K in keyof T]?: T[K] | number;
};
/**
 *
 */
export declare function SetDataLikeType(data: any): any;
/**
 * Create Component Method Event
 */
export declare function CreateComponentMethodEvent<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(component: ComponentController<S, P, M>, ev: Event): ComponentMethodEvent<S, P, M>;
/**
 * Sensen HTML Element
 */
export declare class SensenHTMLElement<P> extends HTMLElement {
    $EUiD: string;
    isReady: boolean;
    $initializeEUiD(): string;
    /**
     * Properties name
     */
    static get observedAttributes(): never[];
    /**
     * Dynamic var
     */
    props: P;
    /**
     * New Construct
     */
    constructor(props: P);
    /**
     * When Element is connected
     */
    connectedCallback(): void;
    /**
     * When Element is Adopted by other DOM
     */
    adoptedCallback(): void;
    /**
     * Whene Element is Disconnected to the current DOM
     */
    disconnectedCallback(): void;
    /**
     * Whene Element change properties
     */
    attributeChangedCallback(name: string, value: string, oldValue: string): void;
    /**
     * Utilities
     */
    $initializeProps(): this;
    $fromAttributesProps(props?: P): P;
    $toAttributesProps(props?: P): P | undefined;
    /**
     * Abstracts
     */
    render(props?: P): this;
    show(): this;
    hide(): this;
}
/**
 * Sensen Component Controller
 */
export declare class ComponentController<State extends ComponentState, Props extends ComponentProps, Methods extends ComponentMethodRaw<State, Props>> {
    #private;
    $tagName: string;
    state: {
        [S in keyof State]: State[S];
    };
    props: {
        [P in keyof Props]: Props[P];
    };
    methods: {
        [M in keyof Methods]: Methods[M];
    };
    $options: TComponentOptions<State, Props, Methods>;
    $emitter?: SensenEmitter;
    isReady: boolean;
    template?: string;
    /**
     * New Construct
     */
    constructor(options: TComponentOptions<State, Props, Methods>);
    $make(): this;
    /**
     * set Template
     */
    $makeTemplate(): Promise<string | undefined>;
    /**
     * Initialize
     */
    $initialize(): this;
    $initializeElement(props?: TComponentOptions<State, Props, Methods>): this;
    /**
     * DOM Observer
     */
    $observers(): this;
    hydratesState(slot: keyof State): this;
    /**
     * Compilate transactions
     */
    $compilate(): this;
    /**
     * Emitting
     */
    $emitting(): this;
}
/**
 * Sensen Component
 */
export declare class Component<State extends ComponentState, Props extends ComponentProps, Methods extends ComponentMethodRaw<State, Props>> {
    $tagName: string;
    $options: TComponentOptions<State, Props, Methods>;
    $klass?: CustomElementConstructor;
    $appearance: SensenAppearance;
    /**
     * New Construct
     */
    constructor(options: TComponentOptions<State, Props, Methods>);
    $create(): this;
}
/**
 * Exportations
 */
export default class Sensen {
    static Component: typeof Component;
    static Main(data: any): typeof Sensen;
}
//# sourceMappingURL=index.d.ts.map