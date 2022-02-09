function loadTemplate(source) {
    const errorResponses = {
        code: 0,
        message: 'unknown'
    };
    return new Promise((resolve, reject) => {
        if (typeof source != 'string' || !source) {
            errorResponses.code = 1;
            errorResponses.message = `string is not a path`;
            reject(errorResponses);
            return undefined;
        }
        else {
            /**
             * Check
             *  */
            const check = source.match(/<\/?[^>]+>/gi);
            /**
             * If Template is String HTML code
             * */
            if (check) {
                resolve(source);
                return undefined;
            }
            /**
             * Else, it's file path
             * */
            const url = new URL(location.href);
            /**
             * File Path
             */
            const path = `${url.origin}${(url.pathname == '/') ? '' : url.pathname}/${source}`;
            /**
             * Fetch
             */
            fetch(path)
                .then(d => { if (d.status == 404) {
                return undefined;
            } return d; })
                .then(response => {
                resolve(response);
            })
                .catch(er => {
                console.error('Template Loader : not found\n', er);
                errorResponses.code = 3;
                errorResponses.message = `not found`;
                reject(errorResponses);
            });
        }
    });
}
function resolveTemplateResponse(res) {
    if (res instanceof Response) {
        if (res?.status == 0 || res?.status == 200) {
            // console.log('Template Builder', res)
            return res.text();
        }
        else if (res?.status == 403) {
            console.warn(`Sensen Template Loading failed`, res);
        }
        else if (res?.status == 404) {
            console.warn(`Sensen Template : ${res?.url} not found`, res);
        }
    }
    else {
        return res;
    }
    return undefined;
}
export class SensenTemplate {
}
SensenTemplate.Load = loadTemplate;
SensenTemplate.ResolveResponse = resolveTemplateResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxTQUFTLFlBQVksQ0FBQyxNQUFjO0lBRWhDLE1BQU0sY0FBYyxHQUFHO1FBRW5CLElBQUksRUFBRSxDQUFDO1FBRVAsT0FBTyxFQUFFLFNBQVM7S0FFckIsQ0FBQTtJQUVELE9BQU8sSUFBSSxPQUFPLENBQWdDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxFQUFFO1FBR2pFLElBQUcsT0FBTyxNQUFNLElBQUksUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFDO1lBRXBDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO1lBRXZCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUE7WUFFL0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRXZCLE9BQU8sU0FBUyxDQUFDO1NBRXBCO2FBRUc7WUFFQTs7a0JBRU07WUFDTixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRzNDOztpQkFFSztZQUNMLElBQUcsS0FBSyxFQUFDO2dCQUVMLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFaEIsT0FBTyxTQUFTLENBQUM7YUFFcEI7WUFHRDs7aUJBRUs7WUFDTCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFHbEM7O2VBRUc7WUFDSCxNQUFNLElBQUksR0FBRyxHQUFJLEdBQUcsQ0FBQyxNQUFPLEdBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFTLElBQUssTUFBTyxFQUFFLENBQUE7WUFHeEY7O2VBRUc7WUFDSCxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUVWLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUM7Z0JBQUUsT0FBTyxTQUFTLENBQUE7YUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO2lCQUU3RCxJQUFJLENBQUMsUUFBUSxDQUFBLEVBQUU7Z0JBRVosT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRXJCLENBQUMsQ0FBQztpQkFFRCxLQUFLLENBQUMsRUFBRSxDQUFBLEVBQUU7Z0JBRVAsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFFbkQsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7Z0JBRXZCLGNBQWMsQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFBO2dCQUVwQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFM0IsQ0FBQyxDQUFDLENBQUE7U0FHTDtJQUVMLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQztBQU1ELFNBQVMsdUJBQXVCLENBQUMsR0FBa0M7SUFFL0QsSUFBRyxHQUFHLFlBQVksUUFBUSxFQUFDO1FBRXZCLElBQUcsR0FBRyxFQUFFLE1BQU0sSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLE1BQU0sSUFBSSxHQUFHLEVBQUM7WUFFdEMsdUNBQXVDO1lBRXZDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBRXJCO2FBR0ksSUFBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLEdBQUcsRUFBQztZQUV2QixPQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBRXREO2FBR0ksSUFBRyxHQUFHLEVBQUUsTUFBTSxJQUFJLEdBQUcsRUFBQztZQUV2QixPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFzQixHQUFHLEVBQUUsR0FBSSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FFakU7S0FFSjtTQUVHO1FBRUEsT0FBTyxHQUFHLENBQUM7S0FFZDtJQUVELE9BQU8sU0FBUyxDQUFBO0FBRXBCLENBQUM7QUFPRCxNQUFNLE9BQU8sY0FBYzs7QUFFaEIsbUJBQUksR0FBRyxZQUFZLENBQUE7QUFFbkIsOEJBQWUsR0FBRyx1QkFBdUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5cblxuZnVuY3Rpb24gbG9hZFRlbXBsYXRlKHNvdXJjZTogc3RyaW5nKXtcblxuICAgIGNvbnN0IGVycm9yUmVzcG9uc2VzID0ge1xuXG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIFxuICAgICAgICBtZXNzYWdlOiAndW5rbm93bidcblxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVzcG9uc2UgfCBzdHJpbmcgfCB1bmRlZmluZWQ+KChyZXNvbHZlLCByZWplY3QpPT57XG5cblxuICAgICAgICBpZih0eXBlb2Ygc291cmNlICE9ICdzdHJpbmcnIHx8ICFzb3VyY2Upe1xuXG4gICAgICAgICAgICBlcnJvclJlc3BvbnNlcy5jb2RlID0gMVxuXG4gICAgICAgICAgICBlcnJvclJlc3BvbnNlcy5tZXNzYWdlID0gYHN0cmluZyBpcyBub3QgYSBwYXRoYFxuXG4gICAgICAgICAgICByZWplY3QoZXJyb3JSZXNwb25zZXMpOyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgLyoqIFxuICAgICAgICAgICAgICogQ2hlY2tcbiAgICAgICAgICAgICAqICAqL1xuICAgICAgICAgICAgY29uc3QgY2hlY2sgPSBzb3VyY2UubWF0Y2goLzxcXC8/W14+XSs+L2dpKTtcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIElmIFRlbXBsYXRlIGlzIFN0cmluZyBIVE1MIGNvZGUgXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgaWYoY2hlY2speyBcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoc291cmNlKTsgXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkOyBcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWxzZSwgaXQncyBmaWxlIHBhdGggXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKVxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmlsZSBQYXRoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBgJHsgdXJsLm9yaWdpbiB9JHsgKHVybC5wYXRobmFtZSA9PSAnLycpID8gJycgOiB1cmwucGF0aG5hbWUgfS8keyBzb3VyY2UgfWBcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZldGNoXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZldGNoKHBhdGgpXG4gICAgICAgIFxuICAgICAgICAgICAgLnRoZW4oZD0+eyBpZihkLnN0YXR1cyA9PSA0MDQpeyByZXR1cm4gdW5kZWZpbmVkIH0gcmV0dXJuIGQgfSlcblxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC5jYXRjaChlcj0+eyBcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RlbXBsYXRlIExvYWRlciA6IG5vdCBmb3VuZFxcbicsIGVyKTtcblxuICAgICAgICAgICAgICAgIGVycm9yUmVzcG9uc2VzLmNvZGUgPSAzXG5cbiAgICAgICAgICAgICAgICBlcnJvclJlc3BvbnNlcy5tZXNzYWdlID0gYG5vdCBmb3VuZGBcblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvclJlc3BvbnNlcyk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBcbn1cblxuXG5cblxuXG5mdW5jdGlvbiByZXNvbHZlVGVtcGxhdGVSZXNwb25zZShyZXM6IHN0cmluZyB8IFJlc3BvbnNlIHwgdW5kZWZpbmVkKXtcblxuICAgIGlmKHJlcyBpbnN0YW5jZW9mIFJlc3BvbnNlKXtcblxuICAgICAgICBpZihyZXM/LnN0YXR1cyA9PSAwIHx8IHJlcz8uc3RhdHVzID09IDIwMCl7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUZW1wbGF0ZSBCdWlsZGVyJywgcmVzKVxuXG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cblxuICAgICAgICBlbHNlIGlmKHJlcz8uc3RhdHVzID09IDQwMyl7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgU2Vuc2VuIFRlbXBsYXRlIExvYWRpbmcgZmFpbGVkYCwgcmVzKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIGVsc2UgaWYocmVzPy5zdGF0dXMgPT0gNDA0KXtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBTZW5zZW4gVGVtcGxhdGUgOiAkeyByZXM/LnVybCB9IG5vdCBmb3VuZGAsIHJlcylcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBlbHNle1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIHJldHVybiB1bmRlZmluZWRcblxufVxuXG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIFNlbnNlblRlbXBsYXRle1xuXG4gICAgc3RhdGljIExvYWQgPSBsb2FkVGVtcGxhdGVcblxuICAgIHN0YXRpYyBSZXNvbHZlUmVzcG9uc2UgPSByZXNvbHZlVGVtcGxhdGVSZXNwb25zZVxuICAgIFxufSJdfQ==