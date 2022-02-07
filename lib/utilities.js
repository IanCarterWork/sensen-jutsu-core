/**
 * Utilities
 */
/**
 * Content Statibilzation
 */
export function StabilizeContent(content) {
    return (content || '').replace(/&gt;/g, `>`).replace(/&lt;/g, `<`);
}
/**
 * Array Refactor from key to key
 */
export function ArrayRange(args, from, to) {
    const out = [];
    from = from || 0;
    to = to || args.length;
    from = from < 0 ? 0 : from;
    to = to > args.length ? args.length : to;
    for (let x = (from); x < args.length; x++) {
        out.push(args[x]);
    }
    return out;
}
export function decodeHTMLEntities(input) {
    const tmp = document.createElement('textarea');
    tmp.innerHTML = input;
    return tmp.value;
}
export function encodeHTMLEntities(input) {
    const tmp = document.createElement('textarea');
    tmp.innerText = input;
    return tmp.innerHTML;
}
/**
 * Clone Object
 */
export function CloneObject(input, deep = true) {
    if (deep == false) {
        return { ...input };
    }
    else {
        const o = { ...input };
        Object.entries(input).map($ => {
            const name = $[0];
            const value = $[1];
            if (typeof $[1] == 'object') {
                o[name] = CloneObject(value, true);
            }
            else {
                o[name] = value;
            }
        });
        return o;
    }
}
/**
 * Fix JSON
 */
// export function JSONSafeParse<T extends object>(json: string) : T | null{
//     let fixed : T = {} as T
//     /**
//      * @Solution from https://stackoverflow.com/a/59329495/18059411
//      */
//     function bulkRegex(str: string, callback: Function | Array<Function>){
//         if(callback && typeof callback === 'function'){
//             return callback(str);
//         }else if(callback && Array.isArray(callback)){
//             for(let i = 0; i < callback.length; i++){
//                 if(callback[i] && typeof callback[i] === 'function'){
//                     str = callback[i](str);
//                 }else{break;}
//             }
//             return str;
//         }
//         return str;
//     }
//     if(json && json !== ''){
//         if(typeof json !== 'string'){
//             try{
//                 json = JSON.stringify(json);
//             }catch(e){return null;}
//         }
//         if(typeof json === 'string'){
//             json = bulkRegex(json, [
//                 (str:string) => str.replace(/[\n\t]/gm, ''),
//                 (str:string) => str.replace(/,\}/gm, '}'),
//                 (str:string) => str.replace(/,\]/gm, ']'),
//                 (str:string) => {
//                     let astr = str.split(/(?=[,\}\]])/g);
//                     astr = astr.map(s => {
//                         if(s.includes(':') && s){
//                             let strP = s.split(/:(.+)/, 2);
//                             strP[0] = strP[0].trim();
//                             if(strP[0]){
//                                 let firstP = strP[0].split(/([,\{\[])/g);
//                                 firstP[firstP.length-1] = bulkRegex(firstP[firstP.length-1], (p:string) => p.replace(/[^A-Za-z0-9\-_]/, ''));
//                                 strP[0] = firstP.join('');
//                             }
//                             let part = strP[1].trim();
//                             if((part.startsWith('"') && part.endsWith('"')) || (part.startsWith('\'') && part.endsWith('\'')) || (part.startsWith('`') && part.endsWith('`'))){
//                                 part = part.substr(1, part.length - 2);
//                             }
//                             part = bulkRegex(part, [
//                                 (p:string) => p.replace(/(["])/gm, '\\$1'),
//                                 (p:string) => p.replace(/\\'/gm, '\''),
//                                 (p:string) => p.replace(/\\`/gm, '`'),
//                             ]);
//                             strP[1] = ('"'+part+'"').trim();
//                             s = strP.join(':');
//                         }
//                         return s;
//                     });
//                     return astr.join('');
//                 },
//                 (str:string) => str.replace(/(['"])?([a-zA-Z0-9\-_]+)(['"])?:/g, '"$2":'),
//                 (str:string) => {
//                     let astr = str.split(/(?=[,\}\]])/gi);
//                     astr = astr.map(s => {
//                         if(s.includes(':') && s){
//                             let strP = s.split(/:(.+)/, 2);
//                             strP[0] = strP[0].trim();
//                             if(strP[1].includes('"') && strP[1].includes(':')){
//                                 let part = strP[1].trim();
//                                 if(part.startsWith('"') && part.endsWith('"')){
//                                     part = part.substring(1, part.length - 2);
//                                     part = bulkRegex(part, (p:string) => p.replace(/(?<!\\)"/gm, ''));
//                                 }
//                                 strP[1] = ('"'+part+'"').trim();
//                             }
//                             s = strP.join(':');
//                         }
//                         return s;
//                     });
//                     return astr.join('');
//                 },
//             ]);
//             try{
//                 fixed = JSON.parse(json);
//             }catch(e){return null;}
//         }
//         return fixed;
//     }
//     return null;
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29yZS91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0dBRUc7QUFRSDs7R0FFRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxPQUFzQjtJQUVuRCxPQUFPLENBQUMsT0FBTyxJQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVyRSxDQUFDO0FBTUQ7O0dBRUc7QUFDRixNQUFNLFVBQVUsVUFBVSxDQUFJLElBQVEsRUFBRSxJQUFhLEVBQUUsRUFBVztJQUUvRCxNQUFNLEdBQUcsR0FBUyxFQUFFLENBQUE7SUFFcEIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7SUFFakIsRUFBRSxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBR3ZCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUUzQixFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUd6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFBRSxHQUFHLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO0tBQUU7SUFFbkUsT0FBTyxHQUFHLENBQUM7QUFFZixDQUFDO0FBT0QsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWE7SUFFNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FB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QUM1QyxxQkFBcUI7QUFDckIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQiw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsUUFBUTtBQUVSLG1CQUFtQjtBQUVuQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFV0aWxpdGllc1xuICovXG5cblxuXG5cblxuXG5cbi8qKlxuICogQ29udGVudCBTdGF0aWJpbHphdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gU3RhYmlsaXplQ29udGVudChjb250ZW50OiBzdHJpbmcgfCBudWxsKSA6IHN0cmluZ3tcblxuICAgIHJldHVybiAoY29udGVudHx8JycpLnJlcGxhY2UoLyZndDsvZywgYD5gKS5yZXBsYWNlKC8mbHQ7L2csIGA8YCk7XG5cbn1cblxuXG5cblxuXG4vKipcbiAqIEFycmF5IFJlZmFjdG9yIGZyb20ga2V5IHRvIGtleVxuICovXG4gZXhwb3J0IGZ1bmN0aW9uIEFycmF5UmFuZ2U8VD4oYXJnczpUW10sIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKXtcblxuICAgIGNvbnN0IG91dCA6IFRbXSA9IFtdXG5cbiAgICBmcm9tID0gZnJvbSB8fCAwO1xuICAgIFxuICAgIHRvID0gdG8gfHwgYXJncy5sZW5ndGg7XG5cblxuICAgIGZyb20gPSBmcm9tIDwgMCA/IDAgOiBmcm9tO1xuXG4gICAgdG8gPSB0byA+IGFyZ3MubGVuZ3RoID8gYXJncy5sZW5ndGggOiB0bztcblxuXG4gICAgZm9yIChsZXQgeCA9IChmcm9tKTsgeCA8IGFyZ3MubGVuZ3RoOyB4KyspIHsgb3V0LnB1c2goIGFyZ3NbeF0gKTsgfVxuICAgIFxuICAgIHJldHVybiBvdXQ7XG4gICAgXG59XG5cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSFRNTEVudGl0aWVzKGlucHV0OiBzdHJpbmcpe1xuXG4gICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuXG4gICAgdG1wLmlubmVySFRNTCA9IGlucHV0O1xuICAgIFxuICAgIHJldHVybiB0bXAudmFsdWVcbiAgICBcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUxFbnRpdGllcyhpbnB1dDogc3RyaW5nKXtcblxuICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcblxuICAgIHRtcC5pbm5lclRleHQgPSBpbnB1dDtcbiAgICBcbiAgICByZXR1cm4gdG1wLmlubmVySFRNTFxuXG59XG5cblxuXG5cblxuXG4vKipcbiAqIENsb25lIE9iamVjdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBDbG9uZU9iamVjdDxUPihpbnB1dDogVCwgZGVlcDogYm9vbGVhbiA9IHRydWUpe1xuXG4gICAgaWYoZGVlcCA9PSBmYWxzZSl7XG5cbiAgICAgICAgcmV0dXJuIHsuLi5pbnB1dH1cbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBlbHNle1xuXG4gICAgICAgIGNvbnN0IG8gPSB7Li4uaW5wdXR9IGFzIFRcbiAgICAgICAgXG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXQpLm1hcCgkPT57XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAkWzBdIGFzIGtleW9mIFRcblxuICAgICAgICAgICAgY29uc3QgdmFsdWU6IHR5cGVvZiAkWzFdID0gJFsxXVxuXG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiAkWzFdID09ICdvYmplY3QnKXtcblxuICAgICAgICAgICAgICAgIG9bIG5hbWUgXSA9IENsb25lT2JqZWN0KHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIG9bIG5hbWUgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiBvO1xuICAgICAgICBcbiAgICB9XG4gICAgXG59XG5cblxuXG5cblxuXG4vKipcbiAqIEZpeCBKU09OXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBKU09OU2FmZVBhcnNlPFQgZXh0ZW5kcyBvYmplY3Q+KGpzb246IHN0cmluZykgOiBUIHwgbnVsbHtcblxuLy8gICAgIGxldCBmaXhlZCA6IFQgPSB7fSBhcyBUXG5cbi8vICAgICAvKipcbi8vICAgICAgKiBAU29sdXRpb24gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTkzMjk0OTUvMTgwNTk0MTFcbi8vICAgICAgKi9cblxuLy8gICAgIGZ1bmN0aW9uIGJ1bGtSZWdleChzdHI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uIHwgQXJyYXk8RnVuY3Rpb24+KXtcbi8vICAgICAgICAgaWYoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKXtcbi8vICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhzdHIpO1xuLy8gICAgICAgICB9ZWxzZSBpZihjYWxsYmFjayAmJiBBcnJheS5pc0FycmF5KGNhbGxiYWNrKSl7XG4vLyAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2subGVuZ3RoOyBpKyspe1xuLy8gICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrW2ldICYmIHR5cGVvZiBjYWxsYmFja1tpXSA9PT0gJ2Z1bmN0aW9uJyl7XG4vLyAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGNhbGxiYWNrW2ldKHN0cik7XG4vLyAgICAgICAgICAgICAgICAgfWVsc2V7YnJlYWs7fVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0cjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gc3RyO1xuLy8gICAgIH1cblxuXG4vLyAgICAgaWYoanNvbiAmJiBqc29uICE9PSAnJyl7XG4vLyAgICAgICAgIGlmKHR5cGVvZiBqc29uICE9PSAnc3RyaW5nJyl7XG4vLyAgICAgICAgICAgICB0cnl7XG4vLyAgICAgICAgICAgICAgICAganNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe3JldHVybiBudWxsO31cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZih0eXBlb2YganNvbiA9PT0gJ3N0cmluZycpe1xuLy8gICAgICAgICAgICAganNvbiA9IGJ1bGtSZWdleChqc29uLCBbXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9bXFxuXFx0XS9nbSwgJycpLFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvLFxcfS9nbSwgJ30nKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyxcXF0vZ20sICddJyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGFzdHIgPSBzdHIuc3BsaXQoLyg/PVssXFx9XFxdXSkvZyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFzdHIgPSBhc3RyLm1hcChzID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuaW5jbHVkZXMoJzonKSAmJiBzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyUCA9IHMuc3BsaXQoLzooLispLywgMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFswXSA9IHN0clBbMF0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0clBbMF0pe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RQID0gc3RyUFswXS5zcGxpdCgvKFssXFx7XFxbXSkvZyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UFtmaXJzdFAubGVuZ3RoLTFdID0gYnVsa1JlZ2V4KGZpcnN0UFtmaXJzdFAubGVuZ3RoLTFdLCAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvW15BLVphLXowLTlcXC1fXS8sICcnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBmaXJzdFAuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gc3RyUFsxXS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoKHBhcnQuc3RhcnRzV2l0aCgnXCInKSAmJiBwYXJ0LmVuZHNXaXRoKCdcIicpKSB8fCAocGFydC5zdGFydHNXaXRoKCdcXCcnKSAmJiBwYXJ0LmVuZHNXaXRoKCdcXCcnKSkgfHwgKHBhcnQuc3RhcnRzV2l0aCgnYCcpICYmIHBhcnQuZW5kc1dpdGgoJ2AnKSkpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydC5zdWJzdHIoMSwgcGFydC5sZW5ndGggLSAyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IGJ1bGtSZWdleChwYXJ0LCBbXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC8oW1wiXSkvZ20sICdcXFxcJDEnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHA6c3RyaW5nKSA9PiBwLnJlcGxhY2UoL1xcXFwnL2dtLCAnXFwnJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC9cXFxcYC9nbSwgJ2AnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzFdID0gKCdcIicrcGFydCsnXCInKS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHN0clAuam9pbignOicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXN0ci5qb2luKCcnKTtcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvKFsnXCJdKT8oW2EtekEtWjAtOVxcLV9dKykoWydcIl0pPzovZywgJ1wiJDJcIjonKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgYXN0ciA9IHN0ci5zcGxpdCgvKD89WyxcXH1cXF1dKS9naSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFzdHIgPSBhc3RyLm1hcChzID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuaW5jbHVkZXMoJzonKSAmJiBzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyUCA9IHMuc3BsaXQoLzooLispLywgMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFswXSA9IHN0clBbMF0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0clBbMV0uaW5jbHVkZXMoJ1wiJykgJiYgc3RyUFsxXS5pbmNsdWRlcygnOicpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnQgPSBzdHJQWzFdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFydC5zdGFydHNXaXRoKCdcIicpICYmIHBhcnQuZW5kc1dpdGgoJ1wiJykpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3Vic3RyaW5nKDEsIHBhcnQubGVuZ3RoIC0gMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gYnVsa1JlZ2V4KHBhcnQsIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC8oPzwhXFxcXClcIi9nbSwgJycpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzFdID0gKCdcIicrcGFydCsnXCInKS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzdHJQLmpvaW4oJzonKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzdHIuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIF0pO1xuLy8gICAgICAgICAgICAgdHJ5e1xuLy8gICAgICAgICAgICAgICAgIGZpeGVkID0gSlNPTi5wYXJzZShqc29uKTtcbi8vICAgICAgICAgICAgIH1jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGZpeGVkO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBudWxsO1xuXG4vLyB9Il19