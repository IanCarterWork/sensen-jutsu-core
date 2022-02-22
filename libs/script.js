import { SockRenderEngine } from "./compilate";
import { StabilizeEchoExpression, StabilizeSnapCodeExpression } from "./expression";
import { StabilizeContent } from "./utilities";
/**
 * Detect and run script in element in context with variables dictionary
 */
export async function Run(element, context, dictionary) {
    const scripts = element.querySelectorAll('script');
    const promised = [];
    if (scripts.length) {
        scripts.forEach(script => {
            const type = (script.getAttribute('type') || '').toLowerCase();
            const exec = document.createElement('script');
            promised.push(new Promise((resolve, reject) => {
                if (type == 'module/sensen') {
                    exec.setAttribute('type', 'module');
                    SockRenderEngine(StabilizeSnapCodeExpression(StabilizeEchoExpression(StabilizeContent(script.textContent || '') || '', false), false), context || element, dictionary || element.props)
                        .then(compilate => {
                        exec.innerHTML = `const $this=document.querySelector('[euid="${element.$EUiD}"]');\n${compilate}`;
                        element.insertBefore(exec, element.lastChild);
                        script.parentElement?.removeChild(script);
                        resolve(element);
                    })
                        .catch(e => console.error('Sensen Script Failed', e));
                }
                else {
                    exec.setAttribute('type', `${type || 'module'}`);
                    exec.textContent = script.textContent;
                    element.insertBefore(exec, element.lastChild);
                    script.parentElement?.removeChild(script);
                    resolve(element);
                }
            }));
        });
    }
    return Promise.all(promised);
}
/**
 * Exports
 */
export class SensenScript {
}
SensenScript.Run = Run;
