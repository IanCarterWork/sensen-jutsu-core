import { SceneActivityBody, SceneActivityHeader, SceneActivityMenu } from "../elements/activity";
export declare type ActivityWireframeState = {
    header?: SceneActivityHeader;
    body?: SceneActivityBody;
    menu?: SceneActivityMenu;
};
export declare function Fullscreen(): ActivityWireframeState;
export declare function Basic(): ActivityWireframeState;
export declare function NavBottom(): ActivityWireframeState;
export declare class ActivityWireframe {
    static Basic: typeof Basic;
    static NavBottom: typeof NavBottom;
    static Fullscreen: typeof Fullscreen;
}
//# sourceMappingURL=activity.d.ts.map