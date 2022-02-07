import { MetricTAlphaL, MetricTAlphaNum, MetricTAlphaNumL, MetricTAlphaNumU, MetricTAlphaU, MetricTNum } from ".";
export declare class SensenMetricRandom {
    static ALPHA_NUMERIC: MetricTAlphaNum;
    static ALPHA_NUMERIC_LOWER: MetricTAlphaNumL;
    static ALPHA_NUMERIC_UPPER: MetricTAlphaNumU;
    static ALPHA_UPPER: MetricTAlphaU;
    static ALPHA_LOWER: MetricTAlphaL;
    static NUMERIC: MetricTNum;
    static CreateRandom(min: number, max: number): number;
    static CreateBlock(base: string, length: number): string[];
    static CreateAplpha(length: number): string[];
    static CreateNumeric(length: number): string[];
    static Create(length: number): string[];
}
//# sourceMappingURL=metric-random.d.ts.map