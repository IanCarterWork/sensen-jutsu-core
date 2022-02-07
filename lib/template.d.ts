declare function loadTemplate(source: string): Promise<string | Response | undefined>;
declare function resolveTemplateResponse(res: string | Response | undefined): string | Promise<string> | undefined;
export declare class SensenTemplate {
    static Load: typeof loadTemplate;
    static ResolveResponse: typeof resolveTemplateResponse;
}
export {};
//# sourceMappingURL=template.d.ts.map