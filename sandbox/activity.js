import { RawComponent, SensenElement } from "./index.js.js.js";
export function Activity($) {
    const config = {
        namespace: {
            prefix: 'activity',
            attribute: 'state'
        }
    };
    const index = `activity-${$.name}`;
    window.$SensenComponents[index] = RawComponent($, config);
    SensenElement.$use('activity', $.name, window.$SensenComponents[index]);
    return window.$SensenComponents[index];
}
