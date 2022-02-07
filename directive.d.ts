import { ComponentController } from ".";
import { ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord } from "./index.t";
/**
 * Directives
 */
export declare type TDirectiveAttribute = {
    name: string;
    expression: string | null;
    main: <S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>>(component: ComponentController<S, P, M>, record: ExpressionRecord) => void;
};
export declare type TDirectiveAttributes = {
    [K: string]: TDirectiveAttribute;
};
export declare class DirectiveAttributes {
    static Availables: TDirectiveAttributes;
    static Define(state: TDirectiveAttribute): typeof DirectiveAttributes;
    static Merge(...directives: TDirectiveAttribute[]): typeof DirectiveAttributes;
    static Retrive(key: string): TDirectiveAttribute;
    static Retrives(directive: TDirectiveAttribute & TDirectiveAttribute & typeof DirectiveAttributes.Availables): TDirectiveAttributes;
}
//# sourceMappingURL=directive.d.ts.map