import { StabilizeEchoExpression, StabilizeSnapCodeExpression, SyDetr, SyntaxEcho, SyntaxEchoReverse } from "./expression";
import { render } from "ejs";
import { decodeHTMLEntities, StabilizeContent } from "./utilities";
export function PropsMachine(input, props) {
    if (typeof props == 'object') {
        const output = {};
        const arr = Object.entries(props);
        if (arr.length) {
            arr.map($ => {
                const echos = [...($[1] || '').matchAll(SyntaxEcho)];
                if (!echos.length) {
                    output[$[0]] = $[1];
                }
                else {
                    input = input.replace(`${StabilizeEchoExpression($[1])}`, $[1]);
                }
            });
            return { input, props: output };
        }
        else {
            const echos = [...(input || '').matchAll(SyntaxEchoReverse)];
            if (echos.length) {
                echos.map($ => {
                    const ech = $[1].trim();
                    if (ech.match(new RegExp(`this.props.`))) {
                        input = input.replace(`${StabilizeEchoExpression($[0])}`, `{{${$[1]}}}`);
                    }
                });
            }
        }
    }
    return { input, props };
}
/**
 * Fragment rendering from String
 */
export async function RenderEngine(input, context, dictionary) {
    const refactory = PropsMachine(input, context.props);
    context.props = refactory.props;
    // context.props = refactory.props
    input = refactory.input;
    // console.log('>$ Render', context.props, dictionary, input)
    return render(`${input}`, dictionary, {
        delimiter: `${SyDetr}`,
        // client: true,
        context: context,
        async: true,
        // includer: (original, parsed)=>{
        //     return {
        //         filename:'',
        //     }
        // }
    });
}
export async function SockRenderEngine(input, context, dictionary) {
    if (typeof context == 'object') {
        if ('props' in context) {
            const refactory = PropsMachine(input || '', context.props);
            context.props = refactory.props;
            input = refactory.input;
        }
    }
    return render(`${input}`, dictionary, {
        delimiter: `${SyDetr}`,
        context: context,
        async: true,
    });
}
export function CompilateErrorException(err) {
    console.error('Compilate Error////', err);
}
export function CompilateEcho(component, record) {
    if (!record.echo) {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        const raw = (record.match) ? record.match[0] : '';
        const expression = ((record.match) ? record.match[1] : '').trim();
        let mockup = record.mockup?.textContent || '';
        /**
         * Prepares
         */
        const matches = [...mockup.matchAll(SyntaxEcho)];
        if (matches.length) {
            matches.map(m => {
                mockup = mockup.replace(new RegExp((m[0]).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}=${m[1]} ${SyDetr}>`);
            });
        }
        /**
         * Rendering
         */
        RenderEngine((
        // mockup.replace(new RegExp(raw, 'g'), `<${SyDetr}=${ expression } ${SyDetr}>` )
        StabilizeEchoExpression(mockup.replace(new RegExp((raw).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}=${expression} ${SyDetr}>`)) || ''), component, component.state).then(result => {
            if (record.node instanceof HTMLElement) {
                record.node.innerHTML = result;
            }
            else if (record.node instanceof Node) {
                record.node.textContent = decodeHTMLEntities(result);
            }
            resolve(record);
        }).catch(er => {
            CompilateErrorException(er);
            reject(er);
        });
    });
}
export function CompilateSnapCode(component, record) {
    if (!record.snapcode) {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        // @ts-ignore
        let mockup = (record.mockup?.innerHTML || record.mockup?.textContent || '');
        mockup = StabilizeContent(mockup);
        record.snapcode?.map(snap => {
            snap.matches.map(match => {
                mockup = mockup.replace(new RegExp((match[0]).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}${match[1]} ${SyDetr}>`);
            });
        });
        RenderEngine(StabilizeSnapCodeExpression(mockup) || '', component, component.state).then(result => {
            if (record.node instanceof HTMLElement) {
                record.node.innerHTML = result;
            }
            else if (record.node instanceof Node) {
                record.node.textContent = decodeHTMLEntities(result);
            }
            resolve(record);
        }).catch(er => {
            CompilateErrorException(er);
            reject(er);
        });
    });
}
export function CompilateSnapCodeAttributes(component, record) {
    if (!record.attribute && record.type == 'attribute.snapcode') {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        const name = record.attribute?.name;
        let mockup = (record.mockup?.textContent || '');
        if (record.match) {
            mockup = mockup.replace(new RegExp((record.match[0] || '').replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}${record.match[1]} ${SyDetr}>`);
        }
        RenderEngine(mockup, component, component.state).then(result => {
            if ('attributes' in record.node) {
                record.node.setAttribute(name, result);
            }
            resolve(record);
        }).catch(er => {
            CompilateErrorException(er);
            reject(er);
        });
    });
}
export function CompilateEchoAttributes(component, record) {
    if (!record.attribute && record.type == 'attribute.echo') {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        const name = record.attribute?.name;
        let mockup = (record.mockup?.textContent || '');
        if (record.match) {
            mockup = mockup.replace(new RegExp((record.match[0] || '').replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}=${record.match[1]} ${SyDetr}>`);
        }
        RenderEngine(mockup, component, component.state).then(result => {
            if ('attributes' in record.node) {
                record.node.setAttribute(name, result);
            }
            resolve(record);
        }).catch(er => {
            CompilateErrorException(er);
            reject(er);
        });
    });
}
