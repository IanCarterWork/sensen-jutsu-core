/**
 * Type
 */
export declare type SensenEmitterType = string;
export declare type SensenEmitterArguments<T> = {
    emit: T;
    type: string;
};
export declare type SensenEmitterCallback<T> = ((arg: SensenEmitterArguments<T>) => Promise<T | SensenEmitterArguments<T>> | boolean | void);
export declare type SensenEmitterError = {
    code: number;
    message: string;
};
export declare type SensenEmitterErrorCallback = ((arg: SensenEmitterError) => void);
export declare type SensenEmitterEntries = {
    [K: SensenEmitterType]: SensenEmitterCallback<any>[];
};
export declare type EmitterDispatcherProps<T> = {
    instance: SensenEmitter;
    type: SensenEmitterType;
    args: any;
    callback: SensenEmitterCallback<T>;
    resolve?: SensenEmitterCallback<T>;
    reject?: (err: SensenEmitterErrorCallback) => void;
};
/**
 * Sensen Event Emitter Response
 */
export declare function EmitterResponse<T>(type: string, emit: any): SensenEmitterArguments<T>;
/**
 * Sensen Event Emitter
 */
export declare class SensenEmitter {
    entries: SensenEmitterEntries;
    listener: SensenEmitterType[];
    dispatcher: SensenEmitterType[];
    returned?: any;
    constructor();
    /**
     * Listener
     */
    listen<T>(type: SensenEmitterType, callback: SensenEmitterCallback<T>): this;
    /**
     * Dispatcher
     */
    dispatch<T>(type: SensenEmitterType, args: {}, resolve?: SensenEmitterCallback<T>, reject?: (err: SensenEmitterErrorCallback) => void): this;
    static resolveDispatcher<T>({ instance, type, args, callback, resolve, reject, }: EmitterDispatcherProps<T>): boolean | Promise<void> | typeof SensenEmitter;
}
//# sourceMappingURL=emitter.d.ts.map