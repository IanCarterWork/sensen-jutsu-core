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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztHQUVHO0FBUUg7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBc0I7SUFFbkQsT0FBTyxDQUFDLE9BQU8sSUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFckUsQ0FBQztBQU1EOztHQUVHO0FBQ0YsTUFBTSxVQUFVLFVBQVUsQ0FBSSxJQUFRLEVBQUUsSUFBYSxFQUFFLEVBQVc7SUFFL0QsTUFBTSxHQUFHLEdBQVMsRUFBRSxDQUFBO0lBRXBCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBRWpCLEVBQUUsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUd2QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFM0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFHekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQUUsR0FBRyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQztLQUFFO0lBRW5FLE9BQU8sR0FBRyxDQUFDO0FBRWYsQ0FBQztBQU9ELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxLQUFhO0lBRTVDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7SUFFOUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFFdEIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFBO0FBRXBCLENBQUM7QUFLRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYTtJQUU1QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBRTlDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXRCLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQTtBQUV4QixDQUFDO0FBT0Q7O0dBRUc7QUFFSCxNQUFNLFVBQVUsV0FBVyxDQUFJLEtBQVEsRUFBRSxPQUFnQixJQUFJO0lBRXpELElBQUcsSUFBSSxJQUFJLEtBQUssRUFBQztRQUViLE9BQU8sRUFBQyxHQUFHLEtBQUssRUFBQyxDQUFBO0tBRXBCO1NBR0c7UUFFQSxNQUFNLENBQUMsR0FBRyxFQUFDLEdBQUcsS0FBSyxFQUFNLENBQUE7UUFHekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUU7WUFFekIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBWSxDQUFBO1lBRTVCLE1BQU0sS0FBSyxHQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFHL0IsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUM7Z0JBRXZCLENBQUMsQ0FBRSxJQUFJLENBQUUsR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBRXhDO2lCQUVHO2dCQUVBLENBQUMsQ0FBRSxJQUFJLENBQUUsR0FBRyxLQUFLLENBQUM7YUFFckI7UUFFTCxDQUFDLENBQUMsQ0FBQTtRQUdGLE9BQU8sQ0FBQyxDQUFDO0tBRVo7QUFFTCxDQUFDO0FBT0Q7O0dBRUc7QUFDSCw0RUFBNEU7QUFFNUUsOEJBQThCO0FBRTlCLFVBQVU7QUFDVixzRUFBc0U7QUFDdEUsVUFBVTtBQUVWLDZFQUE2RTtBQUM3RSwwREFBMEQ7QUFDMUQsb0NBQW9DO0FBQ3BDLHlEQUF5RDtBQUN6RCx3REFBd0Q7QUFDeEQsd0VBQXdFO0FBQ3hFLDhDQUE4QztBQUM5QyxnQ0FBZ0M7QUFDaEMsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLFFBQVE7QUFHUiwrQkFBK0I7QUFDL0Isd0NBQXdDO0FBQ3hDLG1CQUFtQjtBQUNuQiwrQ0FBK0M7QUFDL0Msc0NBQXNDO0FBQ3RDLFlBQVk7QUFDWix3Q0FBd0M7QUFDeEMsdUNBQXVDO0FBQ3ZDLCtEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELG9DQUFvQztBQUNwQyw0REFBNEQ7QUFDNUQsNkNBQTZDO0FBQzdDLG9EQUFvRDtBQUNwRCw4REFBOEQ7QUFDOUQsd0RBQXdEO0FBQ3hELDJDQUEyQztBQUMzQyw0RUFBNEU7QUFDNUUsZ0pBQWdKO0FBQ2hKLDZEQUE2RDtBQUM3RCxnQ0FBZ0M7QUFDaEMseURBQXlEO0FBQ3pELGtMQUFrTDtBQUNsTCwwRUFBMEU7QUFDMUUsZ0NBQWdDO0FBQ2hDLHVEQUF1RDtBQUN2RCw4RUFBOEU7QUFDOUUsMEVBQTBFO0FBQzFFLHlFQUF5RTtBQUN6RSxrQ0FBa0M7QUFDbEMsK0RBQStEO0FBQy9ELGtEQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsb0NBQW9DO0FBQ3BDLDBCQUEwQjtBQUMxQiw0Q0FBNEM7QUFDNUMscUJBQXFCO0FBQ3JCLDZGQUE2RjtBQUM3RixvQ0FBb0M7QUFDcEMsNkRBQTZEO0FBQzdELDZDQUE2QztBQUM3QyxvREFBb0Q7QUFDcEQsOERBQThEO0FBQzlELHdEQUF3RDtBQUN4RCxrRkFBa0Y7QUFDbEYsNkRBQTZEO0FBQzdELGtGQUFrRjtBQUNsRixpRkFBaUY7QUFDakYseUdBQXlHO0FBQ3pHLG9DQUFvQztBQUNwQyxtRUFBbUU7QUFDbkUsZ0NBQWdDO0FBQ2hDLGtEQUFrRDtBQUNsRCw0QkFBNEI7QUFDNUIsb0NBQW9DO0FBQ3BDLDBCQUEwQjtBQUMxQiw0Q0FBNEM7QUFDNUMscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QyxZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLFFBQVE7QUFFUixtQkFBbUI7QUFFbkIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBVdGlsaXRpZXNcbiAqL1xuXG5cblxuXG5cblxuXG4vKipcbiAqIENvbnRlbnQgU3RhdGliaWx6YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YWJpbGl6ZUNvbnRlbnQoY29udGVudDogc3RyaW5nIHwgbnVsbCkgOiBzdHJpbmd7XG5cbiAgICByZXR1cm4gKGNvbnRlbnR8fCcnKS5yZXBsYWNlKC8mZ3Q7L2csIGA+YCkucmVwbGFjZSgvJmx0Oy9nLCBgPGApO1xuXG59XG5cblxuXG5cblxuLyoqXG4gKiBBcnJheSBSZWZhY3RvciBmcm9tIGtleSB0byBrZXlcbiAqL1xuIGV4cG9ydCBmdW5jdGlvbiBBcnJheVJhbmdlPFQ+KGFyZ3M6VFtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcil7XG5cbiAgICBjb25zdCBvdXQgOiBUW10gPSBbXVxuXG4gICAgZnJvbSA9IGZyb20gfHwgMDtcbiAgICBcbiAgICB0byA9IHRvIHx8IGFyZ3MubGVuZ3RoO1xuXG5cbiAgICBmcm9tID0gZnJvbSA8IDAgPyAwIDogZnJvbTtcblxuICAgIHRvID0gdG8gPiBhcmdzLmxlbmd0aCA/IGFyZ3MubGVuZ3RoIDogdG87XG5cblxuICAgIGZvciAobGV0IHggPSAoZnJvbSk7IHggPCBhcmdzLmxlbmd0aDsgeCsrKSB7IG91dC5wdXNoKCBhcmdzW3hdICk7IH1cbiAgICBcbiAgICByZXR1cm4gb3V0O1xuICAgIFxufVxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUhUTUxFbnRpdGllcyhpbnB1dDogc3RyaW5nKXtcblxuICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcblxuICAgIHRtcC5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICBcbiAgICByZXR1cm4gdG1wLnZhbHVlXG4gICAgXG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MRW50aXRpZXMoaW5wdXQ6IHN0cmluZyl7XG5cbiAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG5cbiAgICB0bXAuaW5uZXJUZXh0ID0gaW5wdXQ7XG4gICAgXG4gICAgcmV0dXJuIHRtcC5pbm5lckhUTUxcblxufVxuXG5cblxuXG5cblxuLyoqXG4gKiBDbG9uZSBPYmplY3RcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gQ2xvbmVPYmplY3Q8VD4oaW5wdXQ6IFQsIGRlZXA6IGJvb2xlYW4gPSB0cnVlKXtcblxuICAgIGlmKGRlZXAgPT0gZmFsc2Upe1xuXG4gICAgICAgIHJldHVybiB7Li4uaW5wdXR9XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgZWxzZXtcblxuICAgICAgICBjb25zdCBvID0gey4uLmlucHV0fSBhcyBUXG4gICAgICAgIFxuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0KS5tYXAoJD0+e1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gJFswXSBhcyBrZXlvZiBUXG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlOiB0eXBlb2YgJFsxXSA9ICRbMV1cblxuXG4gICAgICAgICAgICBpZih0eXBlb2YgJFsxXSA9PSAnb2JqZWN0Jyl7XG5cbiAgICAgICAgICAgICAgICBvWyBuYW1lIF0gPSBDbG9uZU9iamVjdCh2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICBvWyBuYW1lIF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICByZXR1cm4gbztcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG5cblxuXG5cblxuLyoqXG4gKiBGaXggSlNPTlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gSlNPTlNhZmVQYXJzZTxUIGV4dGVuZHMgb2JqZWN0Pihqc29uOiBzdHJpbmcpIDogVCB8IG51bGx7XG5cbi8vICAgICBsZXQgZml4ZWQgOiBUID0ge30gYXMgVFxuXG4vLyAgICAgLyoqXG4vLyAgICAgICogQFNvbHV0aW9uIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU5MzI5NDk1LzE4MDU5NDExXG4vLyAgICAgICovXG5cbi8vICAgICBmdW5jdGlvbiBidWxrUmVnZXgoc3RyOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiB8IEFycmF5PEZ1bmN0aW9uPil7XG4vLyAgICAgICAgIGlmKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyl7XG4vLyAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soc3RyKTtcbi8vICAgICAgICAgfWVsc2UgaWYoY2FsbGJhY2sgJiYgQXJyYXkuaXNBcnJheShjYWxsYmFjaykpe1xuLy8gICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrLmxlbmd0aDsgaSsrKXtcbi8vICAgICAgICAgICAgICAgICBpZihjYWxsYmFja1tpXSAmJiB0eXBlb2YgY2FsbGJhY2tbaV0gPT09ICdmdW5jdGlvbicpe1xuLy8gICAgICAgICAgICAgICAgICAgICBzdHIgPSBjYWxsYmFja1tpXShzdHIpO1xuLy8gICAgICAgICAgICAgICAgIH1lbHNle2JyZWFrO31cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJldHVybiBzdHI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHN0cjtcbi8vICAgICB9XG5cblxuLy8gICAgIGlmKGpzb24gJiYganNvbiAhPT0gJycpe1xuLy8gICAgICAgICBpZih0eXBlb2YganNvbiAhPT0gJ3N0cmluZycpe1xuLy8gICAgICAgICAgICAgdHJ5e1xuLy8gICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnN0cmluZ2lmeShqc29uKTtcbi8vICAgICAgICAgICAgIH1jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYodHlwZW9mIGpzb24gPT09ICdzdHJpbmcnKXtcbi8vICAgICAgICAgICAgIGpzb24gPSBidWxrUmVnZXgoanNvbiwgW1xuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvW1xcblxcdF0vZ20sICcnKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyxcXH0vZ20sICd9JyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC8sXFxdL2dtLCAnXScpLFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBhc3RyID0gc3RyLnNwbGl0KC8oPz1bLFxcfVxcXV0pL2cpO1xuLy8gICAgICAgICAgICAgICAgICAgICBhc3RyID0gYXN0ci5tYXAocyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihzLmluY2x1ZGVzKCc6JykgJiYgcyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0clAgPSBzLnNwbGl0KC86KC4rKS8sIDIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBzdHJQWzBdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdHJQWzBdKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0UCA9IHN0clBbMF0uc3BsaXQoLyhbLFxce1xcW10pL2cpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFBbZmlyc3RQLmxlbmd0aC0xXSA9IGJ1bGtSZWdleChmaXJzdFBbZmlyc3RQLmxlbmd0aC0xXSwgKHA6c3RyaW5nKSA9PiBwLnJlcGxhY2UoL1teQS1aYS16MC05XFwtX10vLCAnJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzBdID0gZmlyc3RQLmpvaW4oJycpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFydCA9IHN0clBbMV0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKChwYXJ0LnN0YXJ0c1dpdGgoJ1wiJykgJiYgcGFydC5lbmRzV2l0aCgnXCInKSkgfHwgKHBhcnQuc3RhcnRzV2l0aCgnXFwnJykgJiYgcGFydC5lbmRzV2l0aCgnXFwnJykpIHx8IChwYXJ0LnN0YXJ0c1dpdGgoJ2AnKSAmJiBwYXJ0LmVuZHNXaXRoKCdgJykpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3Vic3RyKDEsIHBhcnQubGVuZ3RoIC0gMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQgPSBidWxrUmVnZXgocGFydCwgW1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvKFtcIl0pL2dtLCAnXFxcXCQxJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC9cXFxcJy9nbSwgJ1xcJycpLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvXFxcXGAvZ20sICdgJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFsxXSA9ICgnXCInK3BhcnQrJ1wiJykudHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzdHJQLmpvaW4oJzonKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzdHIuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyhbJ1wiXSk/KFthLXpBLVowLTlcXC1fXSspKFsnXCJdKT86L2csICdcIiQyXCI6JyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGFzdHIgPSBzdHIuc3BsaXQoLyg/PVssXFx9XFxdXSkvZ2kpO1xuLy8gICAgICAgICAgICAgICAgICAgICBhc3RyID0gYXN0ci5tYXAocyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihzLmluY2x1ZGVzKCc6JykgJiYgcyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0clAgPSBzLnNwbGl0KC86KC4rKS8sIDIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBzdHJQWzBdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdHJQWzFdLmluY2x1ZGVzKCdcIicpICYmIHN0clBbMV0uaW5jbHVkZXMoJzonKSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gc3RyUFsxXS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnQuc3RhcnRzV2l0aCgnXCInKSAmJiBwYXJ0LmVuZHNXaXRoKCdcIicpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnN1YnN0cmluZygxLCBwYXJ0Lmxlbmd0aCAtIDIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IGJ1bGtSZWdleChwYXJ0LCAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvKD88IVxcXFwpXCIvZ20sICcnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFsxXSA9ICgnXCInK3BhcnQrJ1wiJykudHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gc3RyUC5qb2luKCc6Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbi8vICAgICAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3RyLmpvaW4oJycpO1xuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICBdKTtcbi8vICAgICAgICAgICAgIHRyeXtcbi8vICAgICAgICAgICAgICAgICBmaXhlZCA9IEpTT04ucGFyc2UoanNvbik7XG4vLyAgICAgICAgICAgICB9Y2F0Y2goZSl7cmV0dXJuIG51bGw7fVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBmaXhlZDtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gbnVsbDtcblxuLy8gfSJdfQ==