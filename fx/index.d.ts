/// <reference types="node" />
export declare type SensenFxOptions = {
    from: number[];
    to: number[];
    duration: number;
    frame?: number;
    hit: (interpolarity: number[], engine: SensenFxEngine, percent: number) => void;
    done?: (engine: SensenFxEngine) => void;
};
export interface SensenFxTransition {
    entry: (W?: HTMLElement) => Promise<HTMLElement | undefined>;
    entryReverse: (W?: HTMLElement) => Promise<HTMLElement | undefined>;
    exit: (W?: HTMLElement) => Promise<HTMLElement | undefined>;
    exitReverse: (W?: HTMLElement) => Promise<HTMLElement | undefined>;
}
export declare class SensenFxEngine {
    options: SensenFxOptions;
    defaultFrame: number;
    timer?: NodeJS.Timeout;
    constructor(options: SensenFxOptions);
    Start(): this;
}
//# sourceMappingURL=index.d.ts.map