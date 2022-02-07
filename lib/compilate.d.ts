import { ComponentController } from ".";
import type { ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord } from "./index.t";
/**
 * Fragment rendering from String
 */
export declare function RenderEngine<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(input: string, context: ComponentController<S, P, M>, dictionary: {
    [K: string]: any;
}): Promise<string>;
export declare function SockRenderEngine(input: string | null, context: {}, dictionary: {
    [K: string]: any;
}): Promise<string>;
export declare function CompilateErrorException(err: any): void;
export declare function CompilateEcho<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(component: ComponentController<S, P, M>, record: ExpressionRecord): Promise<ExpressionRecord> | undefined;
export declare function CompilateSnapCode<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(component: ComponentController<S, P, M>, record: ExpressionRecord): Promise<ExpressionRecord> | undefined;
export declare function CompilateSnapCodeAttributes<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(component: ComponentController<S, P, M>, record: ExpressionRecord): Promise<ExpressionRecord> | undefined;
export declare function CompilateEchoAttributes<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(component: ComponentController<S, P, M>, record: ExpressionRecord): Promise<ExpressionRecord> | undefined;
//# sourceMappingURL=compilate.d.ts.map