import { ExpressionRecord } from "./index.t";
/**
 * Expressions
 */
export declare const SyntaxEcho: RegExp;
export declare const SyntaxSnapCode: RegExp;
export declare const SyDetr = "%sn";
export declare const DirectiveAttributes: typeof import("./directive").DirectiveAttributes;
/**
 * Stabilize Echo Expression
 */
export declare function StabilizeEchoExpression(content: string | null, stop?: boolean): string | null;
/**
 * Stabilize SnapCode Expression
 */
export declare function StabilizeSnapCodeExpression(content: string | null, stop?: boolean): string | null;
export declare function CreateExpressionRecord(state: ExpressionRecord): ExpressionRecord;
/**
 * Parse Attributes
 */
export declare function ParseAttributesExpression(node: HTMLElement, callback: (record: ExpressionRecord) => void): typeof ParseAttributesExpression;
/**
 * Parse Echo Expression
 */
export declare function ParseEchoExpression(node: HTMLElement, callback: (record: ExpressionRecord) => void): boolean;
/**
 * Parse SnapCode Expression
 */
export declare function ParseSnapCodeExpression(node: HTMLElement, callback: (record: ExpressionRecord) => void): boolean;
export declare function FindExpressions(node: HTMLElement, callback: (record: ExpressionRecord) => void): ExpressionRecord[];
//# sourceMappingURL=expression.d.ts.map