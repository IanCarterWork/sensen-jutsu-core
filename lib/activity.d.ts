import { SensenHTMLElement } from ".";
import { SensenAppearance, TAppearanceProps } from "./appearance";
import { SensenEmitter } from "./emitter";
import { SceneActivityOptionsWireframes, SceneActivityProps, TScreenConfig } from "./index.t";
import { ActivityWireframeState } from "./wireframe/activity";
export declare function WireframeTemplateMixer(template: HTMLElement, wireframe: ActivityWireframeState | undefined, slot: keyof ActivityWireframeState, clone: HTMLElement, found?: boolean): typeof WireframeTemplateMixer;
/**
 * Scene Activity Parent
 */
export interface SensenSceneActivities {
    config?: object;
    props?: SceneActivityProps;
    isReady: boolean;
    $tagName: string;
    $appearance?: SensenAppearance;
    $element?: SensenHTMLElement<SceneActivityProps>;
    $emitter?: SensenEmitter;
    $klass?: CustomElementConstructor;
    $makeAppearance: (selectors: TAppearanceProps) => this;
    $makeTemplate: Function;
    $getWireframe: Function;
}
/**
 * Sensen Screen
 */
export declare class SceneActivity<Props extends SceneActivityProps> implements SensenSceneActivities {
    #private;
    config?: TScreenConfig<Props>;
    props?: Props;
    isReady: boolean;
    $tagName: string;
    $appearance?: SensenAppearance;
    $element?: SensenHTMLElement<Props>;
    $emitter?: SensenEmitter;
    $klass?: CustomElementConstructor;
    constructor(config: TScreenConfig<Props>);
    $makeAppearance(selectors: TAppearanceProps): this;
    $makeTemplate(element: SensenHTMLElement<Props>): this;
    $deepRender(element: SensenHTMLElement<Props>, data: string): Promise<this>;
    $getWireframe(type: SceneActivityOptionsWireframes): ActivityWireframeState | undefined;
    render(props?: Props): this;
    /**
     * DOM Observer
     */
    $makeObserver(element: HTMLElement): MutationObserver | undefined;
    $create(): this;
    $emitting(): this;
}
//# sourceMappingURL=activity.d.ts.map