import { SensenFxTransition } from ".";
export declare class FxPresenter implements SensenFxTransition {
    entry(widget?: HTMLElement): Promise<HTMLElement | undefined>;
    entryReverse(widget?: HTMLElement): Promise<HTMLElement | undefined>;
    exit(widget?: HTMLElement): Promise<HTMLElement | undefined>;
    exitReverse(widget?: HTMLElement): Promise<HTMLElement | undefined>;
}
export declare class FxSlideHorizontal extends FxPresenter {
    entry(widget?: HTMLElement): Promise<HTMLElement | undefined>;
    entryReverse(widget?: HTMLElement): Promise<HTMLElement | undefined>;
    exit(widget?: HTMLElement): Promise<HTMLElement | undefined>;
    exitReverse(widget?: HTMLElement): Promise<HTMLElement | undefined>;
}
//# sourceMappingURL=preset.d.ts.map