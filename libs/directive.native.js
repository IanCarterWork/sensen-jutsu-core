import { CreateComponentMethodEvent } from "./index";
import { DirectiveAttributes } from "./directive";
/**
 * Directive Configurations
 */
DirectiveAttributes.Define({
    name: 'action',
    expression: '@',
    main: (component, record) => {
        const args = Array.isArray(record.arguments) ? record.arguments : [];
        record.node.addEventListener(`${record.name}`, (ev) => {
            const attrib = (('attributes' in record.node)
                ? record.node.getAttribute(record.match?.input || '')
                : '')?.trim();
            if (args.indexOf('prevent') > -1) {
                ev.preventDefault();
            }
            if (args.indexOf('stop') > -1) {
                ev.stopPropagation();
            }
            // const attrib = value as keyof typeof component.state;
            /**
             * Check Component methods
             */
            const isMethod = attrib?.indexOf(`this.methods.`) == 0;
            const _event = CreateComponentMethodEvent(component, ev);
            if (isMethod) {
                const method = component.methods[attrib.substring((`this.methods.`).length)];
                /** * Check is transaction function */
                if (typeof method == 'function') {
                    method.apply(component.state, [_event]);
                }
            }
            else {
                if (typeof attrib == 'string' && attrib in window) {
                    // @ts-ignore
                    const fn = (window[attrib] || (() => { }));
                    if (typeof fn == 'function') {
                        fn.apply(window, [_event]);
                    }
                }
            }
        }, args.indexOf('capture') > -1 ? true : false);
    },
    // parser: (record)=>{},
});
export const NativeDirectiveAttributes = DirectiveAttributes;
