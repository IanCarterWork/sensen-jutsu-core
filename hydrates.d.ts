import { ComponentController } from ".";
import { ComponentMethodRaw, ComponentProps, ComponentState, ExpressionRecord, TComponentHydratesEntry } from "./index.t";
export declare class ComponentHydratesStore<T extends (ComponentState | ComponentProps)> {
    entries: TComponentHydratesEntry<T>;
    /**
     * Add
     */
    push(name: keyof T, record: ExpressionRecord): this;
    /**
     * Add
     */
    update(name: keyof T, key: number, record: ExpressionRecord): this;
    /**
     * Remove entry's slot by Property or State name
     */
    remove(name: keyof T, key: number): this;
    /**
     * Clean entry by Property or State name
     */
    clean(name: keyof T): this;
    /**
     * Clean entry by Property or State name
     */
    reset(): this;
    /**
     * Find by Property or State name
     */
    retrieve(name: keyof T): ExpressionRecord[];
    /**
     * Find All
     */
    retrieves(): TComponentHydratesEntry<T>;
}
export declare class ComponentHydrates<S extends ComponentState, P extends ComponentProps, M extends ComponentMethodRaw<S, P>> {
    component: ComponentController<S, P, M>;
    state: S;
    props: P;
    $state: ComponentHydratesStore<S>;
    $props: ComponentHydratesStore<P>;
    constructor(component: ComponentController<S, P, M>, state?: S, props?: P);
    setObjectProxy(slot: keyof S, input: S[keyof S]): this;
    setDataProxy(slot: keyof S): this;
    /**
     * Build State Proxies
     * @description Use this to activate the dynamic state. For default the construct call this
     */
    proxies(): this;
    /**
     * Hydrate Specific Node
     * @description Use this to ReRender state and props in Node
     */
    hydratesNode(node: Node | HTMLElement): Promise<string | null>;
    /**
     * Hydrate Specific Recorde
     * @description Use this to ReRender state and props of Record
     */
    hydratesRecord(record: ExpressionRecord): Promise<string | null>;
}
//# sourceMappingURL=hydrates.d.ts.map