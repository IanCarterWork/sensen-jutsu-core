import { SceneActivity } from "./activity";
import { SceneActivityProps } from "./index.t";
export declare type RouterConfig = {
    default: string;
    canvas: string | HTMLElement;
    baseURL?: string;
};
export declare class SensenRouter<B extends SceneActivityProps> {
    config: RouterConfig;
    routes: {
        [x in keyof B]: SceneActivity<B[x]>;
    };
    activity: SceneActivity<B[string]>;
    root: HTMLElement;
    canvas?: HTMLElement | null;
    constructor(config: RouterConfig);
    get<P extends SceneActivityProps>(activity: SceneActivity<P>): this;
    initialize(): this;
    clean(): this;
    render(): this;
    parseSlug(slug: keyof B): {
        name: string;
        search: string;
    };
    navigate(slug: keyof B, props?: {
        [K in keyof B]?: any;
    }): Promise<typeof SceneActivity>;
}
//# sourceMappingURL=router.d.ts.map