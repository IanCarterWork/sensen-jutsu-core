import { SensenHTMLElement } from "..";
import { ComponentMethodRaw, ComponentProps, ComponentState } from "../index.t";
/**
 * Scene Header
 */
export declare class SceneActivityHeader extends SensenHTMLElement<{}> {
    constructor();
}
/**
 * Scene Body
 */
export declare class SceneActivityBody extends SensenHTMLElement<{}> {
    constructor();
}
/**
 * Scene Footer
 */
export declare class SceneActivityMenu extends SensenHTMLElement<{}> {
    constructor();
}
export declare type ActivityHeaderComponentState = ComponentState & {
    title: string | boolean;
};
export declare type ActivityHeaderComponentProps = ComponentProps & {
    goBack: boolean;
};
export declare type ActivityHeaderComponentMethods = ComponentMethodRaw<ActivityHeaderComponentState, ActivityHeaderComponentProps> & {
    goBack: () => void;
};
export declare function activityHeaderComponent(): import("..").Component<ActivityHeaderComponentState, ActivityHeaderComponentProps, ActivityHeaderComponentMethods>;
export declare function useScreenElements(): {
    component: {
        hedaer: import("..").Component<ActivityHeaderComponentState, ActivityHeaderComponentProps, ActivityHeaderComponentMethods>;
    };
};
//# sourceMappingURL=activity.d.ts.map