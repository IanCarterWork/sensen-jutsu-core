import { SensenHTMLElement } from ".";
/**
 * Detect and run script in element in context with variables dictionary
 */
export declare function Run<Props>(element: SensenHTMLElement<Props>, context?: {}, dictionary?: {}): Promise<SensenHTMLElement<Props>[]>;
/**
 * Exports
 */
export declare class SensenScript {
    static Run: typeof Run;
}
//# sourceMappingURL=script.d.ts.map