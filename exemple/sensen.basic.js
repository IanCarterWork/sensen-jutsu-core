(self["webpackChunksensen_core"] = self["webpackChunksensen_core"] || []).push([["basic"],{

/***/ "./lib/compilate.js":
/*!**************************!*\
  !*** ./lib/compilate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderEngine": () => (/* binding */ RenderEngine),
/* harmony export */   "CompilateErrorException": () => (/* binding */ CompilateErrorException),
/* harmony export */   "CompilateEcho": () => (/* binding */ CompilateEcho),
/* harmony export */   "CompilateSnapCode": () => (/* binding */ CompilateSnapCode),
/* harmony export */   "CompilateSnapCodeAttributes": () => (/* binding */ CompilateSnapCodeAttributes),
/* harmony export */   "CompilateEchoAttributes": () => (/* binding */ CompilateEchoAttributes)
/* harmony export */ });
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression */ "./lib/expression.js");
/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ejs */ "./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/lib/ejs.js");
/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./lib/utilities.js");



/**
 * Fragment rendering from String
 */
function RenderEngine(input, context, dictionary) {
    return (0,ejs__WEBPACK_IMPORTED_MODULE_1__.render)(`${input}`, dictionary, {
        delimiter: `${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}`,
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
function CompilateErrorException(err) {
    console.error('Compilate Error////', err);
}
function CompilateEcho(component, record) {
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
        const matches = [...mockup.matchAll(_expression__WEBPACK_IMPORTED_MODULE_0__.SyntaxEcho)];
        if (matches.length) {
            matches.map(m => {
                mockup = mockup.replace(new RegExp((m[0]).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}=${m[1]} ${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}>`);
            });
        }
        /**
         * Rendering
         */
        RenderEngine((
        // mockup.replace(new RegExp(raw, 'g'), `<${SyDetr}=${ expression } ${SyDetr}>` )
        mockup.replace(new RegExp((raw).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}=${expression} ${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}>`)), component, component.state).then(result => {
            if (record.node instanceof HTMLElement) {
                record.node.innerHTML = result;
            }
            else if (record.node instanceof Node) {
                record.node.textContent = result;
            }
            resolve(record);
        }).catch(er => {
            CompilateErrorException(er);
            reject(er);
        });
    });
}
function CompilateSnapCode(component, record) {
    if (!record.snapcode) {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        // @ts-ignore
        let mockup = (record.mockup?.innerHTML || record.mockup?.textContent || '');
        mockup = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.StabilizeContent)(mockup);
        record.snapcode?.map(snap => {
            snap.matches.map(match => {
                mockup = mockup.replace(new RegExp((match[0]).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}${match[1]} ${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}>`);
            });
        });
        RenderEngine(mockup, component, component.state).then(result => {
            if (record.node instanceof HTMLElement) {
                record.node.innerHTML = result;
            }
            else if (record.node instanceof Node) {
                record.node.textContent = result;
            }
            resolve(record);
        }).catch(er => {
            CompilateErrorException(er);
            reject(er);
        });
    });
}
function CompilateSnapCodeAttributes(component, record) {
    if (!record.attribute && record.type == 'attribute.snapcode') {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        const name = record.attribute?.name;
        let mockup = (record.mockup?.textContent || '');
        if (record.match) {
            mockup = mockup.replace(new RegExp((record.match[0] || '').replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}${record.match[1]} ${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}>`);
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
function CompilateEchoAttributes(component, record) {
    if (!record.attribute && record.type == 'attribute.echo') {
        return undefined;
    }
    return new Promise((resolve, reject) => {
        const name = record.attribute?.name;
        let mockup = (record.mockup?.textContent || '');
        if (record.match) {
            mockup = mockup.replace(new RegExp((record.match[0] || '').replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}=${record.match[1]} ${_expression__WEBPACK_IMPORTED_MODULE_0__.SyDetr}>`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29yZS9jb21waWxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJL0M7O0dBRUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQVExQixLQUFhLEVBQUUsT0FBMkIsRUFBRSxVQUFrQztJQUU1RSxPQUFPLE1BQU0sQ0FBQyxHQUFJLEtBQU0sRUFBRSxFQUFFLFVBQVUsRUFBRTtRQUVwQyxTQUFTLEVBQUUsR0FBSSxNQUFPLEVBQUU7UUFFeEIsZ0JBQWdCO1FBRWhCLE9BQU8sRUFBRSxPQUFPO1FBRWhCLEtBQUssRUFBRSxJQUFJO1FBRVgsa0NBQWtDO1FBRWxDLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsUUFBUTtRQUVSLElBQUk7S0FFUCxDQUFDLENBQUE7QUFFTixDQUFDO0FBSUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLEdBQVE7SUFFNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUUsQ0FBQTtBQUU5QyxDQUFDO0FBTUQsTUFBTSxVQUFVLGFBQWEsQ0FRM0IsU0FBNkIsRUFBRSxNQUF3QjtJQUVyRCxJQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQztRQUFFLE9BQU8sU0FBUyxDQUFDO0tBQUM7SUFFcEMsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUU7UUFFakQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztR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RUFBRSxDQUFXLENBQUM7UUFFMUQsSUFBRyxNQUFNLENBQUMsS0FBSyxFQUFDO1lBRVosTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUUsSUFBSSxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLEVBQUcsR0FBRyxDQUFFLEVBQUUsSUFBSSxNQUFNLElBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBRSxDQUFBO1NBRWxKO1FBRUQsWUFBWSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUEsRUFBRTtZQUUxRCxJQUFHLFlBQVksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFDO2dCQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFFMUM7WUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQSxFQUFFO1lBRVQsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFM0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRWQsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQUMsQ0FBQTtBQUdOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgU3lEZXRyLCBTeW50YXhFY2hvIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRNZXRob2RSYXcsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZSwgRXhwcmVzc2lvblJlY29yZCB9IGZyb20gXCIuL2luZGV4LnRcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ2Vqcyc7XG5pbXBvcnQgeyBTdGFiaWxpemVDb250ZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cblxuXG4vKipcbiAqIEZyYWdtZW50IHJlbmRlcmluZyBmcm9tIFN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyRW5naW5lPFxuXG4gICAgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICBcbiAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTSBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTLCBQPlxuICAgIFxuPihpbnB1dDogc3RyaW5nLCBjb250ZXh0OiBDb21wb25lbnQ8UywgUCwgTT4sIGRpY3Rpb25hcnk6IHsgW0s6IHN0cmluZ10gOiBhbnkgIH0gKXtcbiAgICAgXG4gICAgcmV0dXJuIHJlbmRlcihgJHsgaW5wdXQgfWAsIGRpY3Rpb25hcnksIHtcbiAgICAgICAgXG4gICAgICAgIGRlbGltaXRlcjogYCR7IFN5RGV0ciB9YCxcbiAgICAgICAgXG4gICAgICAgIC8vIGNsaWVudDogdHJ1ZSxcblxuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuXG4gICAgICAgIC8vIGluY2x1ZGVyOiAob3JpZ2luYWwsIHBhcnNlZCk9PntcblxuICAgICAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgICBmaWxlbmFtZTonJyxcbiAgICAgICAgLy8gICAgIH1cblxuICAgICAgICAvLyB9XG4gICAgICAgIFxuICAgIH0pXG5cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVFcnJvckV4Y2VwdGlvbihlcnI6IGFueSl7XG5cbiAgICBjb25zb2xlLmVycm9yKCdDb21waWxhdGUgRXJyb3IvLy8vJywgZXJyIClcblxufVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVFY2hvPFxuXG4gICAgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICBcbiAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTSBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTLCBQPlxuICAgIFxuPihjb21wb25lbnQ6IENvbXBvbmVudDxTLCBQLCBNPiwgcmVjb3JkOiBFeHByZXNzaW9uUmVjb3JkKXtcblxuICAgIGlmKCFyZWNvcmQuZWNobyl7IHJldHVybiB1bmRlZmluZWQ7fVxuICAgIFxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx0eXBlb2YgcmVjb3JkPigocmVzb2x2ZSwgcmVqZWN0KT0+e1xuXG4gICAgICAgIGNvbnN0IHJhdyA9IChyZWNvcmQubWF0Y2gpID8gcmVjb3JkLm1hdGNoWzBdIDogJyc7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gKChyZWNvcmQubWF0Y2gpID8gcmVjb3JkLm1hdGNoWzFdIDogJycpLnRyaW0oKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBtb2NrdXAgPSByZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCB8fCAnJztcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcmVwYXJlc1xuICAgICAgICAgKi9cblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLm1vY2t1cC5tYXRjaEFsbChTeW50YXhFY2hvKV1cblxuICAgICAgICBpZihtYXRjaGVzLmxlbmd0aCl7XG5cbiAgICAgICAgICAgIG1hdGNoZXMubWFwKG09PntcblxuICAgICAgICAgICAgICAgIG1vY2t1cCA9IG1vY2t1cC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKCAobVswXSkucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJykgLCAnZycgKSwgXG4gICAgICAgICAgICAgICAgICAgIGA8JHtTeURldHJ9PSR7IG1bMV0gfSAke1N5RGV0cn0+YCBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIFJlbmRlckVuZ2luZTxTLCBQLCBNPigoXG5cbiAgICAgICAgICAgIC8vIG1vY2t1cC5yZXBsYWNlKG5ldyBSZWdFeHAocmF3LCAnZycpLCBgPCR7U3lEZXRyfT0keyBleHByZXNzaW9uIH0gJHtTeURldHJ9PmAgKVxuXG4gICAgICAgICAgICBtb2NrdXAucmVwbGFjZSggXG4gICAgICAgICAgICAgICAgbmV3IFJlZ0V4cCggKHJhdykucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJykgLCAnZycgKSwgXG4gICAgICAgICAgICAgICAgYDwke1N5RGV0cn09JHsgZXhwcmVzc2lvbiB9ICR7U3lEZXRyfT5gIFxuICAgICAgICAgICAgKSBcblxuICAgICAgICApLCBjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQ9PntcblxuICAgICAgICAgICAgaWYocmVjb3JkLm5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZihyZWNvcmQubm9kZSBpbnN0YW5jZW9mIE5vZGUpe1xuXG4gICAgICAgICAgICAgICAgcmVjb3JkLm5vZGUudGV4dENvbnRlbnQgPSByZXN1bHRcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKVxuXG4gICAgICAgIH0pLmNhdGNoKGVyPT57XG5cbiAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKVxuXG4gICAgICAgICAgICByZWplY3QoZXIpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBcbn1cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlU25hcENvZGU8XG5cbiAgICBTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgIFxuICAgIFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyxcbiAgICBcbiAgICBNIGV4dGVuZHMgQ29tcG9uZW50TWV0aG9kUmF3PFMsIFA+XG4gICAgXG4+KGNvbXBvbmVudDogQ29tcG9uZW50PFMsIFAsIE0+LCByZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpe1xuXG5cbiAgICBpZighcmVjb3JkLnNuYXBjb2RlKXsgcmV0dXJuIHVuZGVmaW5lZDt9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHR5cGVvZiByZWNvcmQ+KChyZXNvbHZlLCByZWplY3QpPT57XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgbW9ja3VwID0gKHJlY29yZC5tb2NrdXA/LmlubmVySFRNTCB8fCByZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCB8fCAnJykgYXMgc3RyaW5nO1xuXG5cbiAgICAgICAgbW9ja3VwID0gU3RhYmlsaXplQ29udGVudChtb2NrdXApXG5cbiAgICAgICAgcmVjb3JkLnNuYXBjb2RlPy5tYXAoc25hcD0+e1xuXG4gICAgICAgICAgICBzbmFwLm1hdGNoZXMubWFwKG1hdGNoPT57XG5cbiAgICAgICAgICAgICAgICBtb2NrdXAgPSBtb2NrdXAucmVwbGFjZSggbmV3IFJlZ0V4cCggKG1hdGNoWzBdKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSAsICdnJyApLCBgPCR7U3lEZXRyfSR7IG1hdGNoWzFdIH0gJHtTeURldHJ9PmAgKSBcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICBSZW5kZXJFbmdpbmUobW9ja3VwLCBjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQ9PntcblxuICAgICAgICAgICAgaWYocmVjb3JkLm5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZihyZWNvcmQubm9kZSBpbnN0YW5jZW9mIE5vZGUpe1xuXG4gICAgICAgICAgICAgICAgcmVjb3JkLm5vZGUudGV4dENvbnRlbnQgPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmQpXG5cbiAgICAgICAgfSkuY2F0Y2goZXI9PntcblxuICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpXG5cbiAgICAgICAgICAgIHJlamVjdChlcilcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9KVxuICAgIFxuICAgIFxufVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVTbmFwQ29kZUF0dHJpYnV0ZXM8XG5cbiAgICBTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgIFxuICAgIFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyxcbiAgICBcbiAgICBNIGV4dGVuZHMgQ29tcG9uZW50TWV0aG9kUmF3PFMsIFA+XG4gICAgXG4+KGNvbXBvbmVudDogQ29tcG9uZW50PFMsIFAsIE0+LCByZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpe1xuXG5cbiAgICBpZighcmVjb3JkLmF0dHJpYnV0ZSAmJiByZWNvcmQudHlwZSA9PSAnYXR0cmlidXRlLnNuYXBjb2RlJyl7IHJldHVybiB1bmRlZmluZWQ7fVxuICAgIFxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx0eXBlb2YgcmVjb3JkPigocmVzb2x2ZSwgcmVqZWN0KT0+e1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSByZWNvcmQuYXR0cmlidXRlPy5uYW1lIGFzIHN0cmluZ1xuXG4gICAgICAgIGxldCBtb2NrdXAgPSAocmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQgfHwgJycpIGFzIHN0cmluZztcbiAgICAgICAgXG4gICAgICAgIGlmKHJlY29yZC5tYXRjaCl7XG5cbiAgICAgICAgICAgIG1vY2t1cCA9IG1vY2t1cC5yZXBsYWNlKCBuZXcgUmVnRXhwKCAocmVjb3JkLm1hdGNoWzBdfHwnJykucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJykgLCAnZycgKSwgYDwke1N5RGV0cn0keyByZWNvcmQubWF0Y2hbMV0gfSAke1N5RGV0cn0+YCApIFxuXG4gICAgICAgIH1cblxuICAgICAgICBSZW5kZXJFbmdpbmUobW9ja3VwLCBjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQ9PntcblxuICAgICAgICAgICAgaWYoJ2F0dHJpYnV0ZXMnIGluIHJlY29yZC5ub2RlKXtcblxuICAgICAgICAgICAgICAgIHJlY29yZC5ub2RlLnNldEF0dHJpYnV0ZShuYW1lLCByZXN1bHQpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKVxuXG4gICAgICAgIH0pLmNhdGNoKGVyPT57XG5cbiAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKVxuXG4gICAgICAgICAgICByZWplY3QoZXIpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBcbn1cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlRWNob0F0dHJpYnV0ZXM8XG5cbiAgICBTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgIFxuICAgIFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyxcbiAgICBcbiAgICBNIGV4dGVuZHMgQ29tcG9uZW50TWV0aG9kUmF3PFMsIFA+XG4gICAgXG4+KGNvbXBvbmVudDogQ29tcG9uZW50PFMsIFAsIE0+LCByZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpe1xuXG5cbiAgICBpZighcmVjb3JkLmF0dHJpYnV0ZSAmJiByZWNvcmQudHlwZSA9PSAnYXR0cmlidXRlLmVjaG8nKXsgcmV0dXJuIHVuZGVmaW5lZDt9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHR5cGVvZiByZWNvcmQ+KChyZXNvbHZlLCByZWplY3QpPT57XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHJlY29yZC5hdHRyaWJ1dGU/Lm5hbWUgYXMgc3RyaW5nXG5cbiAgICAgICAgbGV0IG1vY2t1cCA9IChyZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCB8fCAnJykgYXMgc3RyaW5nO1xuICAgICAgICBcbiAgICAgICAgaWYocmVjb3JkLm1hdGNoKXtcblxuICAgICAgICAgICAgbW9ja3VwID0gbW9ja3VwLnJlcGxhY2UoIG5ldyBSZWdFeHAoIChyZWNvcmQubWF0Y2hbMF18fCcnKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSAsICdnJyApLCBgPCR7U3lEZXRyfT0keyByZWNvcmQubWF0Y2hbMV0gfSAke1N5RGV0cn0+YCApIFxuXG4gICAgICAgIH1cblxuICAgICAgICBSZW5kZXJFbmdpbmUobW9ja3VwLCBjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQ9PntcblxuICAgICAgICAgICAgaWYoJ2F0dHJpYnV0ZXMnIGluIHJlY29yZC5ub2RlKXtcblxuICAgICAgICAgICAgICAgIHJlY29yZC5ub2RlLnNldEF0dHJpYnV0ZShuYW1lLCByZXN1bHQpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKVxuXG4gICAgICAgIH0pLmNhdGNoKGVyPT57XG5cbiAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKVxuXG4gICAgICAgICAgICByZWplY3QoZXIpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBcbn1cblxuXG5cblxuXG5cbiJdfQ==

/***/ }),

/***/ "./lib/directive.js":
/*!**************************!*\
  !*** ./lib/directive.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectiveAttributes": () => (/* binding */ DirectiveAttributes)
/* harmony export */ });
class DirectiveAttributes {
    static Define(state) {
        this.Availables[state.name] = state;
        return this;
    }
    static Merge(...directives) {
        directives.map(directive => {
            if (directive.name in this.Availables) {
                throw (`WARNING ${directive.name} : You want to change the behavior of an existing attribute directive`);
            }
            this.Availables[directive.name] = directive;
        });
        return this;
    }
    static Retrive(key) {
        return this.Availables[key] || null;
    }
    static Retrives(directive) {
        return this.Merge(directive).Availables;
    }
}
DirectiveAttributes.Availables = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29yZS9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JDLE1BQU0sT0FBTyxtQkFBbUI7SUFNN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUEwQjtRQUVwQyxJQUFJLENBQUMsVUFBVSxDQUFFLEtBQUssQ0FBQyxJQUFJLENBQUUsR0FBRyxLQUFLLENBQUE7UUFFckMsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUdELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFpQztRQUU3QyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQSxFQUFFO1lBRXRCLElBQUcsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFDO2dCQUVqQyxNQUFNLENBQUMsV0FBWSxTQUFTLENBQUMsSUFBSyx1RUFBdUUsQ0FBQyxDQUFBO2FBRTdHO1lBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFBO1FBRS9DLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUdELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBVztRQUV0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFFLElBQUksSUFBSSxDQUFBO0lBRXpDLENBQUM7SUFHRCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQTRGO1FBRXhHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUE7SUFFM0MsQ0FBQzs7QUExQ00sOEJBQVUsR0FBeUIsRUFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRob2RSYXcsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZSwgRXhwcmVzc2lvblJlY29yZCB9IGZyb20gXCIuL2luZGV4LnRcIjtcblxuLyoqXG4gKiBEaXJlY3RpdmVzXG4gKi9cblxuXG5leHBvcnQgdHlwZSBURGlyZWN0aXZlQXR0cmlidXRlID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBleHByZXNzaW9uOiBzdHJpbmcgfCBudWxsO1xuICAgIG1haW46IDxcbiAgICAgICAgXG4gICAgICAgIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZSwgXG4gICAgICAgIFxuICAgICAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgICAgIE0gZXh0ZW5kcyBDb21wb25lbnRNZXRob2RSYXc8UywgUD5cblxuICAgID4oY29tcG9uZW50OiBDb21wb25lbnQ8UywgUCwgTT4sIHJlY29yZDogRXhwcmVzc2lvblJlY29yZCkgPT4gdm9pZDtcblxuICAgIC8vIHBhcnNlcj86IDxWPihhcmdzOiB7fSkgPT4gc3RyaW5nO1xuXG59XG5cbmV4cG9ydCB0eXBlIFREaXJlY3RpdmVBdHRyaWJ1dGVzID0ge1xuICAgIFtLOiBzdHJpbmddOiBURGlyZWN0aXZlQXR0cmlidXRlXG59XG5cblxuXG4gZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUF0dHJpYnV0ZXN7XG5cblxuICAgIHN0YXRpYyBBdmFpbGFibGVzOiBURGlyZWN0aXZlQXR0cmlidXRlcyA9IHt9IGFzIFREaXJlY3RpdmVBdHRyaWJ1dGVzO1xuXG5cbiAgICBzdGF0aWMgRGVmaW5lKHN0YXRlOiBURGlyZWN0aXZlQXR0cmlidXRlKXtcblxuICAgICAgICB0aGlzLkF2YWlsYWJsZXNbIHN0YXRlLm5hbWUgXSA9IHN0YXRlXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgc3RhdGljIE1lcmdlKC4uLmRpcmVjdGl2ZXM6IFREaXJlY3RpdmVBdHRyaWJ1dGVbXSl7XG5cbiAgICAgICAgZGlyZWN0aXZlcy5tYXAoZGlyZWN0aXZlPT57XG5cbiAgICAgICAgICAgIGlmKGRpcmVjdGl2ZS5uYW1lIGluIHRoaXMuQXZhaWxhYmxlcyl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhyb3cgKGBXQVJOSU5HICR7IGRpcmVjdGl2ZS5uYW1lIH0gOiBZb3Ugd2FudCB0byBjaGFuZ2UgdGhlIGJlaGF2aW9yIG9mIGFuIGV4aXN0aW5nIGF0dHJpYnV0ZSBkaXJlY3RpdmVgKVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuQXZhaWxhYmxlc1tkaXJlY3RpdmUubmFtZV0gPSBkaXJlY3RpdmVcblxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgUmV0cml2ZShrZXk6IHN0cmluZyl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuQXZhaWxhYmxlc1sga2V5IF0gfHwgbnVsbFxuICAgICAgICBcbiAgICB9XG5cblxuICAgIHN0YXRpYyBSZXRyaXZlcyhkaXJlY3RpdmU6IFREaXJlY3RpdmVBdHRyaWJ1dGUgJiBURGlyZWN0aXZlQXR0cmlidXRlICYgdHlwZW9mIERpcmVjdGl2ZUF0dHJpYnV0ZXMuQXZhaWxhYmxlcyl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuTWVyZ2UoZGlyZWN0aXZlKS5BdmFpbGFibGVzXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcbn1cblxuXG4iXX0=

/***/ }),

/***/ "./lib/directive.native.js":
/*!*********************************!*\
  !*** ./lib/directive.native.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NativeDirectiveAttributes": () => (/* binding */ NativeDirectiveAttributes)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./lib/index.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "./lib/directive.js");


/**
 * Directive Configurations
 */
_directive__WEBPACK_IMPORTED_MODULE_1__.DirectiveAttributes.Define({
    name: 'action',
    expression: '@',
    main: (component, record) => {
        console.log('Call Directive', record);
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
            const _event = (0,___WEBPACK_IMPORTED_MODULE_0__.CreateComponentMethodEvent)(component, ev);
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
const NativeDirectiveAttributes = _directive__WEBPACK_IMPORTED_MODULE_1__.DirectiveAttributes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLm5hdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvZGlyZWN0aXZlLm5hdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFBO0FBSWpEOztHQUVHO0FBRUgsbUJBQW1CLENBQUMsTUFBTSxDQUFDO0lBRXZCLElBQUksRUFBQyxRQUFRO0lBRWIsVUFBVSxFQUFDLEdBQUc7SUFFZCxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLEVBQUU7UUFFdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUVyQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBR3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBSSxNQUFNLENBQUMsSUFBSyxFQUFFLEVBQUUsQ0FBQyxFQUFTLEVBQUMsRUFBRTtZQUUxRCxNQUFNLE1BQU0sR0FBRyxDQUVYLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBRTdCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBRSxFQUFFLENBQUM7Z0JBRW5ELENBQUMsQ0FBQyxFQUFFLENBRVAsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUVWLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztnQkFBRSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUE7YUFBRTtZQUV2RCxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUM7Z0JBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFBO2FBQUU7WUFFckQsd0RBQXdEO1lBR3hEOztlQUVHO1lBQ0gsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdkQsTUFBTSxNQUFNLEdBQUcsMEJBQTBCLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBSXhELElBQUcsUUFBUSxFQUFDO2dCQUVSLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUM7Z0JBRS9FLHNDQUFzQztnQkFDdEMsSUFBRyxPQUFPLE1BQU0sSUFBSSxVQUFVLEVBQUM7b0JBRTNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7aUJBRTFDO2FBRUo7aUJBRUc7Z0JBRUEsSUFBRyxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBQztvQkFFN0MsYUFBYTtvQkFDYixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFhLENBQUE7b0JBRW5ELElBQUcsT0FBTyxFQUFFLElBQUksVUFBVSxFQUFDO3dCQUV2QixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7cUJBRTdCO2lCQUVKO2FBRUo7UUFNTCxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVuRCxDQUFDO0lBRUQsd0JBQXdCO0NBRTNCLENBQUMsQ0FBQTtBQUlGLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLG1CQUFtQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50TWV0aG9kRXZlbnQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgRGlyZWN0aXZlQXR0cmlidXRlcyB9IGZyb20gXCIuL2RpcmVjdGl2ZVwiXG5cblxuXG4vKipcbiAqIERpcmVjdGl2ZSBDb25maWd1cmF0aW9uc1xuICovXG5cbkRpcmVjdGl2ZUF0dHJpYnV0ZXMuRGVmaW5lKHtcblxuICAgIG5hbWU6J2FjdGlvbicsXG4gICAgXG4gICAgZXhwcmVzc2lvbjonQCcsXG4gICAgXG4gICAgbWFpbjogKGNvbXBvbmVudCwgcmVjb3JkKT0+e1xuICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbCBEaXJlY3RpdmUnLCByZWNvcmQpXG5cbiAgICAgICAgY29uc3QgYXJncyA9IEFycmF5LmlzQXJyYXkocmVjb3JkLmFyZ3VtZW50cykgPyByZWNvcmQuYXJndW1lbnRzIDogW107XG5cbiAgICBcbiAgICAgICAgcmVjb3JkLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihgJHsgcmVjb3JkLm5hbWUgfWAsIChldjogRXZlbnQpPT57XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYiA9IChcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAoJ2F0dHJpYnV0ZXMnIGluIHJlY29yZC5ub2RlKSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA/IHJlY29yZC5ub2RlLmdldEF0dHJpYnV0ZShyZWNvcmQubWF0Y2g/LmlucHV0fHwnJylcblxuICAgICAgICAgICAgICAgIDogJydcblxuICAgICAgICAgICAgKT8udHJpbSgpO1xuXG4gICAgICAgICAgICBpZihhcmdzLmluZGV4T2YoJ3ByZXZlbnQnKSA+IC0xKXsgZXYucHJldmVudERlZmF1bHQoKSB9XG5cbiAgICAgICAgICAgIGlmKGFyZ3MuaW5kZXhPZignc3RvcCcpID4gLTEpeyBldi5zdG9wUHJvcGFnYXRpb24oKSB9XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGF0dHJpYiA9IHZhbHVlIGFzIGtleW9mIHR5cGVvZiBjb21wb25lbnQuc3RhdGU7XG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBDb21wb25lbnQgbWV0aG9kc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBpc01ldGhvZCA9IGF0dHJpYj8uaW5kZXhPZihgdGhpcy5tZXRob2RzLmApID09IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IF9ldmVudCA9IENyZWF0ZUNvbXBvbmVudE1ldGhvZEV2ZW50KGNvbXBvbmVudCwgZXYpXG5cblxuXG4gICAgICAgICAgICBpZihpc01ldGhvZCl7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXRob2QgPSBjb21wb25lbnQubWV0aG9kc1sgYXR0cmliLnN1YnN0cmluZygoYHRoaXMubWV0aG9kcy5gKS5sZW5ndGgpIF07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqICogQ2hlY2sgaXMgdHJhbnNhY3Rpb24gZnVuY3Rpb24gKi9cbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgbWV0aG9kID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLmFwcGx5KGNvbXBvbmVudC5zdGF0ZSwgW19ldmVudF0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBhdHRyaWIgPT0gJ3N0cmluZycgJiYgYXR0cmliIGluIHdpbmRvdyl7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9ICh3aW5kb3dbYXR0cmliXSB8fCAoKCk9Pnt9KSkgYXMgRnVuY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KHdpbmRvdywgW19ldmVudF0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgfSwgYXJncy5pbmRleE9mKCdjYXB0dXJlJykgPiAtMSA/IHRydWUgOiBmYWxzZSlcblxuICAgIH0sXG4gICAgXG4gICAgLy8gcGFyc2VyOiAocmVjb3JkKT0+e30sXG5cbn0pXG5cblxuXG5leHBvcnQgY29uc3QgTmF0aXZlRGlyZWN0aXZlQXR0cmlidXRlcyA9IERpcmVjdGl2ZUF0dHJpYnV0ZXNcblxuIl19

/***/ }),

/***/ "./lib/emitter.js":
/*!************************!*\
  !*** ./lib/emitter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmitterResponse": () => (/* binding */ EmitterResponse),
/* harmony export */   "SensenEmitter": () => (/* binding */ SensenEmitter)
/* harmony export */ });
/**
 * Type
 */
/**
 * Sensen Event Emitter Response
 */
function EmitterResponse(type, emit) {
    return { type, emit };
}
/**
 * Sensen Event Emitter
 */
class SensenEmitter {
    constructor() {
        this.entries = {};
        this.listener = [];
        this.dispatcher = [];
    }
    /**
     * Listener
     */
    listen(type, callback) {
        if (this.listener.indexOf(type) == -1) {
            this.listener[this.listener.length] = type;
        }
        if (typeof type == 'string' && typeof callback == 'function') {
            this.entries[type] = this.entries[type] || [];
            this.entries[type].push(callback);
        }
        return this;
    }
    /**
     * Dispatcher
     */
    dispatch(type, args, resolve, reject) {
        if (this.dispatcher.indexOf(type) == -1) {
            this.dispatcher[this.dispatcher.length] = type;
        }
        if (typeof type == 'string') {
            if (type in this.entries) {
                if (this.entries[type] instanceof Array) {
                    this.entries[type].map((entry) => {
                        if (entry instanceof Function) {
                            this.returned = SensenEmitter.resolveDispatcher({
                                instance: this,
                                type,
                                callback: entry,
                                args,
                                resolve,
                                reject,
                            });
                        }
                    });
                }
            }
        }
        return this;
    }
    static resolveDispatcher({ instance, type, args, callback, resolve, reject, }) {
        const $args = {
            emit: args,
            type,
        };
        const applied = callback.apply(instance, [$args]);
        /**
         * Promise
         */
        if (applied instanceof Promise) {
            return applied.then(response => {
                if (typeof resolve == 'function') {
                    resolve(EmitterResponse(type, response));
                }
            }).catch(err => {
                if (typeof reject == 'function') {
                    reject(err);
                }
            });
        }
        else if (typeof applied == 'boolean') {
            return applied;
        }
        else {
            return this;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7R0FFRztBQWdESDs7R0FFRztBQUNILE1BQU0sVUFBVSxlQUFlLENBQUksSUFBWSxFQUFFLElBQVM7SUFFdEQsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQTtBQUV6QixDQUFDO0FBTUQ7O0dBRUc7QUFDRixNQUFNLE9BQU8sYUFBYTtJQWlCdkI7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUV6QixDQUFDO0lBTUQ7O09BRUc7SUFDSCxNQUFNLENBQUksSUFBd0IsRUFBRSxRQUFtQztRQUVuRSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBRWpDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7U0FFOUM7UUFFRCxJQUFHLE9BQU8sSUFBSSxJQUFJLFFBQVEsSUFBSSxPQUFPLFFBQVEsSUFBSSxVQUFVLEVBQUM7WUFFeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFFLEVBQUUsQ0FBQztZQUU1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUVyQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFNRDs7T0FFRztJQUNILFFBQVEsQ0FFSixJQUF3QixFQUV4QixJQUFTLEVBRVQsT0FBbUMsRUFFbkMsTUFBcUQ7UUFLckQsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUVuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBRWxEO1FBR0QsSUFBRyxPQUFPLElBQUksSUFBSSxRQUFRLEVBQUM7WUFFdkIsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBQztnQkFFcEIsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBQztvQkFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUMsRUFBRTt3QkFFNUIsSUFBRyxLQUFLLFlBQVksUUFBUSxFQUFDOzRCQUV6QixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBSTtnQ0FFL0MsUUFBUSxFQUFHLElBQUk7Z0NBRWYsSUFBSTtnQ0FFSixRQUFRLEVBQUUsS0FBSztnQ0FFZixJQUFJO2dDQUVKLE9BQU87Z0NBRVAsTUFBTTs2QkFFVCxDQUFDLENBQUE7eUJBRUw7b0JBRUwsQ0FBQyxDQUFDLENBQUM7aUJBRU47YUFFSjtTQUVKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQU1ELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBSSxFQUV4QixRQUFRLEVBRVIsSUFBSSxFQUVKLElBQUksRUFFSixRQUFRLEVBRVIsT0FBTyxFQUVQLE1BQU0sR0FFbUI7UUFFekIsTUFBTSxLQUFLLEdBQStCO1lBRXRDLElBQUksRUFBRSxJQUFJO1lBRVYsSUFBSTtTQUVQLENBQUE7UUFFRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFHbEQ7O1dBRUc7UUFDSCxJQUFHLE9BQU8sWUFBWSxPQUFPLEVBQUM7WUFFMUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQSxFQUFFO2dCQUUxQixJQUFHLE9BQU8sT0FBTyxJQUFJLFVBQVUsRUFBQztvQkFFNUIsT0FBTyxDQUFFLGVBQWUsQ0FBSSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUUsQ0FBQTtpQkFFaEQ7WUFFTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFBLEVBQUU7Z0JBRVYsSUFBRyxPQUFPLE1BQU0sSUFBSSxVQUFVLEVBQUM7b0JBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUFFO1lBRWxELENBQUMsQ0FBQyxDQUFDO1NBR047YUFFSSxJQUFHLE9BQU8sT0FBTyxJQUFJLFNBQVMsRUFBQztZQUVoQyxPQUFPLE9BQU8sQ0FBQztTQUVsQjthQUVHO1lBRUEsT0FBTyxJQUFJLENBQUM7U0FFZjtJQUVMLENBQUM7Q0FNSiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIFR5cGVcbiAqL1xuXG5leHBvcnQgdHlwZSBTZW5zZW5FbWl0dGVyVHlwZSA9IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBTZW5zZW5FbWl0dGVyQXJndW1lbnRzPFQ+ID0ge1xuICAgIFxuICAgIGVtaXQ6IFQ7XG4gICAgXG4gICAgdHlwZSA6IHN0cmluZztcbiAgICBcbn1cblxuZXhwb3J0IHR5cGUgU2Vuc2VuRW1pdHRlckNhbGxiYWNrPFQ+ID0gKChhcmc6IFNlbnNlbkVtaXR0ZXJBcmd1bWVudHM8VD4pID0+IFByb21pc2U8IFQgfCBTZW5zZW5FbWl0dGVyQXJndW1lbnRzPFQ+ID4gfCBib29sZWFuIHwgdm9pZClcblxuZXhwb3J0IHR5cGUgU2Vuc2VuRW1pdHRlckVycm9yID0ge1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFNlbnNlbkVtaXR0ZXJFcnJvckNhbGxiYWNrID0gKChhcmc6IFNlbnNlbkVtaXR0ZXJFcnJvcikgPT4gdm9pZClcblxuZXhwb3J0IHR5cGUgU2Vuc2VuRW1pdHRlckVudHJpZXMgPSB7XG5cbiAgICBbSzogU2Vuc2VuRW1pdHRlclR5cGVdIDogU2Vuc2VuRW1pdHRlckNhbGxiYWNrPGFueT5bXSBcblxufVxuXG5leHBvcnQgdHlwZSBFbWl0dGVyRGlzcGF0Y2hlclByb3BzPFQ+ID0ge1xuICAgICAgICBcbiAgICBpbnN0YW5jZSA6IFNlbnNlbkVtaXR0ZXIsIFxuICAgIFxuICAgIHR5cGUgOiBTZW5zZW5FbWl0dGVyVHlwZSwgXG4gICAgXG4gICAgYXJnczogYW55LFxuICAgIFxuICAgIGNhbGxiYWNrOiBTZW5zZW5FbWl0dGVyQ2FsbGJhY2s8VD4sXG4gICAgXG4gICAgcmVzb2x2ZT8gOiBTZW5zZW5FbWl0dGVyQ2FsbGJhY2s8VD4sXG4gICAgXG4gICAgcmVqZWN0PyA6IChlcnIgOiBTZW5zZW5FbWl0dGVyRXJyb3JDYWxsYmFjayApID0+IHZvaWQsXG5cbn1cblxuXG5cblxuXG5cbi8qKlxuICogU2Vuc2VuIEV2ZW50IEVtaXR0ZXIgUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEVtaXR0ZXJSZXNwb25zZTxUPih0eXBlOiBzdHJpbmcsIGVtaXQ6IGFueSkgOiBTZW5zZW5FbWl0dGVyQXJndW1lbnRzPFQ+e1xuXG4gICAgcmV0dXJuIHsgdHlwZSwgZW1pdCB9XG4gICAgXG59XG5cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gRXZlbnQgRW1pdHRlclxuICovXG4gZXhwb3J0IGNsYXNzIFNlbnNlbkVtaXR0ZXJ7XG5cblxuICAgIGVudHJpZXM6IFNlbnNlbkVtaXR0ZXJFbnRyaWVzXG5cbiAgICBsaXN0ZW5lcjogU2Vuc2VuRW1pdHRlclR5cGVbXVxuXG4gICAgZGlzcGF0Y2hlcjogU2Vuc2VuRW1pdHRlclR5cGVbXVxuXG5cbiAgICByZXR1cm5lZD86IGFueVxuICAgICBcblxuXG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICAgICAgdGhpcy5lbnRyaWVzID0ge307XG5cbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IFtdO1xuICAgICAgICAgICAgXG4gICAgfVxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lclxuICAgICAqL1xuICAgIGxpc3RlbjxUPih0eXBlIDogU2Vuc2VuRW1pdHRlclR5cGUsIGNhbGxiYWNrIDogU2Vuc2VuRW1pdHRlckNhbGxiYWNrPFQ+KXtcblxuICAgICAgICBpZih0aGlzLmxpc3RlbmVyLmluZGV4T2YodHlwZSkgPT0gLTEpe1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyW3RoaXMubGlzdGVuZXIubGVuZ3RoXSA9IHR5cGU7XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodHlwZW9mIHR5cGUgPT0gJ3N0cmluZycgJiYgdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpe1xuXG4gICAgICAgICAgICB0aGlzLmVudHJpZXNbdHlwZV0gPSB0aGlzLmVudHJpZXNbdHlwZV18fFtdO1xuXG4gICAgICAgICAgICB0aGlzLmVudHJpZXNbdHlwZV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXJcbiAgICAgKi9cbiAgICBkaXNwYXRjaDxUPihcbiAgICAgICAgXG4gICAgICAgIHR5cGUgOiBTZW5zZW5FbWl0dGVyVHlwZSxcbiAgICAgICAgXG4gICAgICAgIGFyZ3MgOiB7fSwgXG4gICAgICAgIFxuICAgICAgICByZXNvbHZlPyA6IFNlbnNlbkVtaXR0ZXJDYWxsYmFjazxUPixcbiAgICAgICAgXG4gICAgICAgIHJlamVjdD8gOiAoZXJyIDogU2Vuc2VuRW1pdHRlckVycm9yQ2FsbGJhY2sgKSA9PiB2b2lkXG5cbiAgICApe1xuICAgICAgICBcblxuICAgICAgICBpZih0aGlzLmRpc3BhdGNoZXIuaW5kZXhPZih0eXBlKSA9PSAtMSl7XG5cbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlclt0aGlzLmRpc3BhdGNoZXIubGVuZ3RoXSA9IHR5cGU7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKHR5cGVvZiB0eXBlID09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodHlwZSBpbiB0aGlzLmVudHJpZXMpe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW3R5cGVdIGluc3RhbmNlb2YgQXJyYXkpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW50cmllc1t0eXBlXS5tYXAoKGVudHJ5KT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbnRyeSBpbnN0YW5jZW9mIEZ1bmN0aW9uKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuZWQgPSBTZW5zZW5FbWl0dGVyLnJlc29sdmVEaXNwYXRjaGVyPFQ+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlIDogdGhpcywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBlbnRyeSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cblxuXG5cblxuICAgIHN0YXRpYyByZXNvbHZlRGlzcGF0Y2hlcjxUPih7XG4gICAgICAgIFxuICAgICAgICBpbnN0YW5jZSwgXG4gICAgICAgIFxuICAgICAgICB0eXBlLCBcbiAgICAgICAgXG4gICAgICAgIGFyZ3MsXG4gICAgICAgIFxuICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgXG4gICAgICAgIHJlc29sdmUsXG4gICAgICAgIFxuICAgICAgICByZWplY3QsXG5cbiAgICB9IDogRW1pdHRlckRpc3BhdGNoZXJQcm9wczxUPil7XG5cbiAgICAgICAgY29uc3QgJGFyZ3MgOiBTZW5zZW5FbWl0dGVyQXJndW1lbnRzPFQ+ID0ge1xuXG4gICAgICAgICAgICBlbWl0OiBhcmdzLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0eXBlLFxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcHBsaWVkID0gY2FsbGJhY2suYXBwbHkoaW5zdGFuY2UsIFskYXJnc10pO1xuXG4gICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm9taXNlXG4gICAgICAgICAqL1xuICAgICAgICBpZihhcHBsaWVkIGluc3RhbmNlb2YgUHJvbWlzZSl7XG5cbiAgICAgICAgICAgIHJldHVybiBhcHBsaWVkLnRoZW4ocmVzcG9uc2U9PntcblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiByZXNvbHZlID09ICdmdW5jdGlvbicpeyBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoIEVtaXR0ZXJSZXNwb25zZTxUPih0eXBlLCByZXNwb25zZSkgKSBcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG5cbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgcmVqZWN0ID09ICdmdW5jdGlvbicpeyByZWplY3QoZXJyKSB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYodHlwZW9mIGFwcGxpZWQgPT0gJ2Jvb2xlYW4nKXtcblxuICAgICAgICAgICAgcmV0dXJuIGFwcGxpZWQ7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG5cbiAgICBcbn1cbiJdfQ==

/***/ }),

/***/ "./lib/exemple.js":
/*!************************!*\
  !*** ./lib/exemple.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./lib/index.js");

const vm = new ___WEBPACK_IMPORTED_MODULE_0__["default"].Component({
    name: 'root',
    element: '#app',
    template: 'components/root.sn.html',
    //     template: `
    //     <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Sensen Jutsu</title>
    //     <style>
    //         form{
    //             display: block;
    //             opacity: 1;
    //             background-color: #eee;
    //             padding: 1rem;
    //         }
    //         /* sn-root,[is="sn-root"]{
    //             opacity: 0
    //         } */
    //     </style>
    // </head>
    // <body>
    //     <div id="app" abc="sdcdsjkb">
    //         <h1>{{ title }}</h1>
    //         <p>{{ editable ? "Oui" : 'Non' }}</p>
    //         <p>{{ editable }}</p>
    //         <p>{{ message }}</p>
    //         {{ this.state.counter }} / {{ counter }}
    //         <p>{%=JSON.stringify(persons) %}</p>
    //         <p data-snapped="{%=this.state.title %}">
    //             <form action="" @submit.prevent="this.methods.addPerson" :style="{display: editable ? null : 'none' , opacity: editable}" >
    //                 >{{ fullname.trim() ? fullname.trim() : 'No name entry' }}<
    //                 <br>
    //                 <input type="text" name="fullname" @input="this.methods.updateFullname"> 
    //                 <button>Enregistrer</button>
    //                 <br>
    //                 <h1 title="{{ this.props.title }}">Mirror</h1>
    //                 <input type="text" disabled :value="message">
    //             </form>
    //         </p>
    //         <ul>
    //             {% persons.forEach((person)=>{ %}
    //                 <li>{%= person %} from {{ counter }}</li>
    //             {% }) %}
    //         </ul>
    //         <button @click="this.methods.increment">Go to Coming Soon</button>
    //         <button @click="testFunction">Test Function</button>
    //     </div>
    //     <script>
    //         window.testFunction = function(ev){
    //             console.warn('Test function work', ev)
    //         }
    //     </script>
    // </body>
    // </html>
    //     `,
    emit: {
        expressionRecorded: (record) => {
        },
        connected: (e) => {
            console.warn('Component is Connected', e);
        }
    },
    props: {
        title: 'loading...'
    },
    state: {
        editable: true,
        fullname: 'no data',
        // fullname: '{%=(new Date())%}',
        title: 'Hello les gens',
        message: 'Lorem ipsum {{ counter }}',
        route: 'comingsoon',
        counter: 10,
        persons: [
            'Yann',
            'Christina',
            'Myana',
            'Syana'
        ],
    },
    methods: {
        updateFullname({ self, event }) {
            // @ts-ignore
            self.state.fullname = event.target?.value || '';
        },
        addPerson({ self, event }) {
            const form = event.target;
            if (form.fullname.value) {
                // form.fullname.value = ( form.fullname.value )
                self.state.persons.push(form.fullname.value);
                form.fullname.value = '';
                self.state.fullname = '';
            }
            console.log('AddPerson');
            // self.state.persons.push(`${ (new Date()) }`)
        },
        increment({ self }) {
            self.state.persons[1] = `IanCarter Now ${self.state.counter} / {{ counter }}`;
            self.state.counter++;
            self.state.editable = !self.state.editable;
            self.state.message = `We count to ${self.state.counter}`;
            console.log('Increment', self.state.counter, self.state.persons);
        }
    }
});
const HomeScreen = new ___WEBPACK_IMPORTED_MODULE_0__.SensenScreen({
    name: 'home',
    options: {},
    template: 'screens/home.html',
});
// console.warn('VM', vm)
// const ro = document.createElement('sn-root')
// document.body.appendChild(ro)
// setTimeout(()=>{
//     ro.setAttribute('hello', 'world')
//     ro.setAttribute('title', 'world')
// }, 1000)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvZXhlbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUt6QyxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFFNUIsSUFBSSxFQUFFLE1BQU07SUFFWixPQUFPLEVBQUUsTUFBTTtJQUdmLFFBQVEsRUFBRSx5QkFBeUI7SUFFdkMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUV0QixtQkFBbUI7SUFFbkIsU0FBUztJQUVULDZCQUE2QjtJQUU3Qiw0REFBNEQ7SUFFNUQsNkVBQTZFO0lBRTdFLGtDQUFrQztJQUdsQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUdmLFVBQVU7SUFFVixTQUFTO0lBR1Qsb0NBQW9DO0lBRXBDLCtCQUErQjtJQUUvQixnREFBZ0Q7SUFDaEQsZ0NBQWdDO0lBRWhDLCtCQUErQjtJQUUvQixtREFBbUQ7SUFFbkQsK0NBQStDO0lBRS9DLG9EQUFvRDtJQUdwRCwwSUFBMEk7SUFFMUksOEVBQThFO0lBRTlFLHVCQUF1QjtJQUV2Qiw0RkFBNEY7SUFFNUYsK0NBQStDO0lBRS9DLHVCQUF1QjtJQUN2QixpRUFBaUU7SUFDakUsZ0VBQWdFO0lBRWhFLHNCQUFzQjtJQUV0QixlQUFlO0lBR2YsZUFBZTtJQUVmLGdEQUFnRDtJQUVoRCw0REFBNEQ7SUFFNUQsdUJBQXVCO0lBRXZCLGdCQUFnQjtJQUVoQiw2RUFBNkU7SUFFN0UsK0RBQStEO0lBRS9ELGFBQWE7SUFJYixlQUFlO0lBRWYsOENBQThDO0lBRTlDLHFEQUFxRDtJQUVyRCxZQUFZO0lBRVosZ0JBQWdCO0lBR2hCLFVBQVU7SUFFVixVQUFVO0lBRVYsU0FBUztJQUdMLElBQUksRUFBQztRQUVELGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFDLEVBQUU7UUFFOUIsQ0FBQztRQUVELFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFO1lBRVosT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUU3QyxDQUFDO0tBRUo7SUFJRCxLQUFLLEVBQUM7UUFFRixLQUFLLEVBQUUsWUFBWTtLQUV0QjtJQUlELEtBQUssRUFBQztRQUVGLFFBQVEsRUFBRSxJQUFJO1FBRWQsUUFBUSxFQUFFLFNBQVM7UUFDbkIsaUNBQWlDO1FBRWpDLEtBQUssRUFBRSxnQkFBZ0I7UUFFdkIsT0FBTyxFQUFFLDJCQUEyQjtRQUVwQyxLQUFLLEVBQUUsWUFBWTtRQUVuQixPQUFPLEVBQUUsRUFBRTtRQUVYLE9BQU8sRUFBRTtZQUNMLE1BQU07WUFDTixXQUFXO1lBQ1gsT0FBTztZQUNQLE9BQU87U0FDVjtLQUVKO0lBSUQsT0FBTyxFQUFDO1FBRUosY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQztZQUV6QixhQUFhO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUUsRUFBRSxDQUFBO1FBRWpELENBQUM7UUFFRCxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDO1lBRXBCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUF5QixDQUFDO1lBRTdDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUM7Z0JBRW5CLGdEQUFnRDtnQkFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtnQkFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO2FBRTNCO1lBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUV4QiwrQ0FBK0M7UUFFbkQsQ0FBQztRQUVELFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRTtZQUVkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLGlCQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVEsa0JBQWtCLENBQUE7WUFFL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFFO1lBRTVDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGVBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBUSxFQUFFLENBQUE7WUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBQTtRQUVyRSxDQUFDO0tBRUo7Q0FHSixDQUFDLENBQUE7QUFNRixNQUFNLFVBQVUsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUVoQyxJQUFJLEVBQUUsTUFBTTtJQUVaLE9BQU8sRUFBQyxFQUVQO0lBRUQsUUFBUSxFQUFFLG1CQUFtQjtDQUVoQyxDQUFDLENBQUE7QUFLRix5QkFBeUI7QUFLekIsK0NBQStDO0FBRS9DLGdDQUFnQztBQUdoQyxtQkFBbUI7QUFFbkIsd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUV4QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlbnNlbiwgeyBTZW5zZW5TY3JlZW4gfSBmcm9tIFwiLlwiO1xuXG5cblxuICAgIFxuY29uc3Qgdm0gPSBuZXcgU2Vuc2VuLkNvbXBvbmVudCh7XG5cbiAgICBuYW1lOiAncm9vdCcsXG5cbiAgICBlbGVtZW50OiAnI2FwcCcsXG5cblxuICAgIHRlbXBsYXRlOiAnY29tcG9uZW50cy9yb290LnNuLmh0bWwnLFxuICAgIFxuLy8gICAgIHRlbXBsYXRlOiBgXG4vLyAgICAgPCFET0NUWVBFIGh0bWw+XG5cbi8vIDxodG1sIGxhbmc9XCJlblwiPlxuXG4vLyA8aGVhZD5cblxuLy8gICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuXG4vLyAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XG5cbi8vICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuXG4vLyAgICAgPHRpdGxlPlNlbnNlbiBKdXRzdTwvdGl0bGU+XG5cblxuLy8gICAgIDxzdHlsZT5cbi8vICAgICAgICAgZm9ybXtcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgb3BhY2l0eTogMTtcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC8qIHNuLXJvb3QsW2lzPVwic24tcm9vdFwiXXtcbi8vICAgICAgICAgICAgIG9wYWNpdHk6IDBcbi8vICAgICAgICAgfSAqL1xuLy8gICAgIDwvc3R5bGU+XG4gICAgXG5cbi8vIDwvaGVhZD5cblxuLy8gPGJvZHk+XG5cblxuLy8gICAgIDxkaXYgaWQ9XCJhcHBcIiBhYmM9XCJzZGNkc2prYlwiPlxuICAgICAgICBcbi8vICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cblxuLy8gICAgICAgICA8cD57eyBlZGl0YWJsZSA/IFwiT3VpXCIgOiAnTm9uJyB9fTwvcD5cbi8vICAgICAgICAgPHA+e3sgZWRpdGFibGUgfX08L3A+XG5cbi8vICAgICAgICAgPHA+e3sgbWVzc2FnZSB9fTwvcD5cblxuLy8gICAgICAgICB7eyB0aGlzLnN0YXRlLmNvdW50ZXIgfX0gLyB7eyBjb3VudGVyIH19XG5cbi8vICAgICAgICAgPHA+eyU9SlNPTi5zdHJpbmdpZnkocGVyc29ucykgJX08L3A+XG5cbi8vICAgICAgICAgPHAgZGF0YS1zbmFwcGVkPVwieyU9dGhpcy5zdGF0ZS50aXRsZSAlfVwiPlxuXG4gICAgICAgICAgICBcbi8vICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIEBzdWJtaXQucHJldmVudD1cInRoaXMubWV0aG9kcy5hZGRQZXJzb25cIiA6c3R5bGU9XCJ7ZGlzcGxheTogZWRpdGFibGUgPyBudWxsIDogJ25vbmUnICwgb3BhY2l0eTogZWRpdGFibGV9XCIgPlxuICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgID57eyBmdWxsbmFtZS50cmltKCkgPyBmdWxsbmFtZS50cmltKCkgOiAnTm8gbmFtZSBlbnRyeScgfX08XG5cbi8vICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1bGxuYW1lXCIgQGlucHV0PVwidGhpcy5tZXRob2RzLnVwZGF0ZUZ1bGxuYW1lXCI+IFxuXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxuXG4vLyAgICAgICAgICAgICAgICAgPGJyPlxuLy8gICAgICAgICAgICAgICAgIDxoMSB0aXRsZT1cInt7IHRoaXMucHJvcHMudGl0bGUgfX1cIj5NaXJyb3I8L2gxPlxuLy8gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRpc2FibGVkIDp2YWx1ZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIFxuLy8gICAgICAgICA8L3A+XG5cblxuLy8gICAgICAgICA8dWw+XG5cbi8vICAgICAgICAgICAgIHslIHBlcnNvbnMuZm9yRWFjaCgocGVyc29uKT0+eyAlfVxuXG4vLyAgICAgICAgICAgICAgICAgPGxpPnslPSBwZXJzb24gJX0gZnJvbSB7eyBjb3VudGVyIH19PC9saT5cbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgeyUgfSkgJX1cbiAgICAgICAgICAgIFxuLy8gICAgICAgICA8L3VsPlxuXG4vLyAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidGhpcy5tZXRob2RzLmluY3JlbWVudFwiPkdvIHRvIENvbWluZyBTb29uPC9idXR0b24+XG5cbi8vICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0ZXN0RnVuY3Rpb25cIj5UZXN0IEZ1bmN0aW9uPC9idXR0b24+XG4gICAgICAgIFxuLy8gICAgIDwvZGl2PlxuXG4gICAgXG5cbi8vICAgICA8c2NyaXB0PlxuXG4vLyAgICAgICAgIHdpbmRvdy50ZXN0RnVuY3Rpb24gPSBmdW5jdGlvbihldil7XG5cbi8vICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGVzdCBmdW5jdGlvbiB3b3JrJywgZXYpXG4gICAgICAgICAgICBcbi8vICAgICAgICAgfVxuICAgICAgICBcbi8vICAgICA8L3NjcmlwdD5cbiAgICBcbiAgICBcbi8vIDwvYm9keT5cblxuLy8gPC9odG1sPlxuICAgIFxuLy8gICAgIGAsXG5cblxuICAgIGVtaXQ6e1xuXG4gICAgICAgIGV4cHJlc3Npb25SZWNvcmRlZDogKHJlY29yZCk9PntcblxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbm5lY3RlZDogKGUpPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IGlzIENvbm5lY3RlZCcsIGUpXG5cbiAgICAgICAgfVxuXG4gICAgfSxcblxuXG5cbiAgICBwcm9wczp7XG5cbiAgICAgICAgdGl0bGU6ICdsb2FkaW5nLi4uJ1xuXG4gICAgfSxcblxuXG5cbiAgICBzdGF0ZTp7XG5cbiAgICAgICAgZWRpdGFibGU6IHRydWUsXG5cbiAgICAgICAgZnVsbG5hbWU6ICdubyBkYXRhJyxcbiAgICAgICAgLy8gZnVsbG5hbWU6ICd7JT0obmV3IERhdGUoKSklfScsXG5cbiAgICAgICAgdGl0bGU6ICdIZWxsbyBsZXMgZ2VucycsXG5cbiAgICAgICAgbWVzc2FnZTogJ0xvcmVtIGlwc3VtIHt7IGNvdW50ZXIgfX0nLFxuXG4gICAgICAgIHJvdXRlOiAnY29taW5nc29vbicsXG5cbiAgICAgICAgY291bnRlcjogMTAsXG5cbiAgICAgICAgcGVyc29uczogW1xuICAgICAgICAgICAgJ1lhbm4nLFxuICAgICAgICAgICAgJ0NocmlzdGluYScsXG4gICAgICAgICAgICAnTXlhbmEnLFxuICAgICAgICAgICAgJ1N5YW5hJ1xuICAgICAgICBdLFxuXG4gICAgfSxcblxuXG5cbiAgICBtZXRob2RzOntcblxuICAgICAgICB1cGRhdGVGdWxsbmFtZSh7IHNlbGYsIGV2ZW50fSl7XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuZnVsbG5hbWUgPSBldmVudC50YXJnZXQ/LnZhbHVlfHwnJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBhZGRQZXJzb24oeyBzZWxmLCBldmVudH0pe1xuXG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudDtcblxuICAgICAgICAgICAgaWYoZm9ybS5mdWxsbmFtZS52YWx1ZSl7XG5cbiAgICAgICAgICAgICAgICAvLyBmb3JtLmZ1bGxuYW1lLnZhbHVlID0gKCBmb3JtLmZ1bGxuYW1lLnZhbHVlIClcblxuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUucGVyc29ucy5wdXNoKGZvcm0uZnVsbG5hbWUudmFsdWUpXG5cbiAgICAgICAgICAgICAgICBmb3JtLmZ1bGxuYW1lLnZhbHVlID0gJydcblxuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuZnVsbG5hbWUgPSAnJ1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkUGVyc29uJylcblxuICAgICAgICAgICAgLy8gc2VsZi5zdGF0ZS5wZXJzb25zLnB1c2goYCR7IChuZXcgRGF0ZSgpKSB9YClcblxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgaW5jcmVtZW50KHsgc2VsZiB9KXtcblxuICAgICAgICAgICAgc2VsZi5zdGF0ZS5wZXJzb25zWzFdID0gYElhbkNhcnRlciBOb3cgJHsgc2VsZi5zdGF0ZS5jb3VudGVyIH0gLyB7eyBjb3VudGVyIH19YFxuXG4gICAgICAgICAgICBzZWxmLnN0YXRlLmNvdW50ZXIrKztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZi5zdGF0ZS5lZGl0YWJsZSA9ICFzZWxmLnN0YXRlLmVkaXRhYmxlIDtcblxuICAgICAgICAgICAgc2VsZi5zdGF0ZS5tZXNzYWdlID0gYFdlIGNvdW50IHRvICR7IHNlbGYuc3RhdGUuY291bnRlciB9YFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSW5jcmVtZW50Jywgc2VsZi5zdGF0ZS5jb3VudGVyLCBzZWxmLnN0YXRlLnBlcnNvbnMgKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG5cbn0pXG5cblxuXG5cblxuY29uc3QgSG9tZVNjcmVlbiA9IG5ldyBTZW5zZW5TY3JlZW4oe1xuXG4gICAgbmFtZTogJ2hvbWUnLFxuICAgIFxuICAgIG9wdGlvbnM6e1xuXG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiAnc2NyZWVucy9ob21lLmh0bWwnLFxuXG59KVxuXG5cblxuXG4vLyBjb25zb2xlLndhcm4oJ1ZNJywgdm0pXG5cblxuXG5cbi8vIGNvbnN0IHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc24tcm9vdCcpXG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm8pXG5cblxuLy8gc2V0VGltZW91dCgoKT0+e1xuXG4vLyAgICAgcm8uc2V0QXR0cmlidXRlKCdoZWxsbycsICd3b3JsZCcpXG4vLyAgICAgcm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICd3b3JsZCcpXG5cbi8vIH0sIDEwMDApXG5cbiJdfQ==

/***/ }),

/***/ "./lib/expression.js":
/*!***************************!*\
  !*** ./lib/expression.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyntaxEcho": () => (/* binding */ SyntaxEcho),
/* harmony export */   "SyntaxSnapCode": () => (/* binding */ SyntaxSnapCode),
/* harmony export */   "SyDetr": () => (/* binding */ SyDetr),
/* harmony export */   "DirectiveAttributes": () => (/* binding */ DirectiveAttributes),
/* harmony export */   "StabilizeEchoExpression": () => (/* binding */ StabilizeEchoExpression),
/* harmony export */   "StabilizeSnapCodeExpression": () => (/* binding */ StabilizeSnapCodeExpression),
/* harmony export */   "CreateExpressionRecord": () => (/* binding */ CreateExpressionRecord),
/* harmony export */   "ParseAttributesExpression": () => (/* binding */ ParseAttributesExpression),
/* harmony export */   "ParseEchoExpression": () => (/* binding */ ParseEchoExpression),
/* harmony export */   "ParseSnapCodeExpression": () => (/* binding */ ParseSnapCodeExpression),
/* harmony export */   "FindExpressions": () => (/* binding */ FindExpressions)
/* harmony export */ });
/* harmony import */ var _directive_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive.native */ "./lib/directive.native.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./lib/utilities.js");


/**
 * Expressions
 */
const SyntaxEcho = new RegExp('{{(.*?)}}', 'g');
const SyntaxSnapCode = new RegExp('{%(.*?)%}', 'g');
const SyDetr = '%sn';
const DirectiveAttributes = _directive_native__WEBPACK_IMPORTED_MODULE_0__.NativeDirectiveAttributes;
/**
 * Stabilize Echo Expression
 */
function StabilizeEchoExpression(content, stop) {
    const echos = [...content.matchAll(SyntaxEcho)];
    if (echos.length) {
        echos.map(m => {
            content = content.replace(new RegExp((m[0]).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}=${m[1]} ${SyDetr}>`);
        });
    }
    else {
        if (stop) {
            return null;
        }
    }
    return content;
}
/**
 * Stabilize SnapCode Expression
 */
function StabilizeSnapCodeExpression(content, stop) {
    const echos = [...content.matchAll(SyntaxSnapCode)];
    if (echos.length) {
        echos.map(m => {
            content = content.replace(new RegExp((m[0]).replace(/[^\w\s]/gi, '\\$&'), 'g'), `<${SyDetr}${m[1]} ${SyDetr}>`);
        });
    }
    else {
        if (stop) {
            return null;
        }
    }
    return content;
}
function CreateExpressionRecord(state) {
    if ((state.node instanceof HTMLElement || state.node instanceof Node) && !state.mockup) {
        state.mockup = state.node.cloneNode(true);
    }
    return state;
}
/**
 * Parse Attributes
 */
function ParseAttributesExpression(node, callback) {
    callback = typeof callback == 'function' ? callback : (() => { });
    if (node.attributes) {
        if (node.attributes.length) {
            Object.values(node.attributes).map(attribute => {
                /**
                 * Find Directive
                 */
                Object.values(_directive_native__WEBPACK_IMPORTED_MODULE_0__.NativeDirectiveAttributes.Availables || {})
                    .map(directive => {
                    const matches = [...attribute.name.matchAll(new RegExp(`^${directive.expression}`, 'gi'))];
                    if (matches.length) {
                        matches.forEach(match => {
                            const split = attribute.name?.substring((directive.expression || '')?.length).split('.');
                            const name = split[0];
                            const record = CreateExpressionRecord({
                                node,
                                directive,
                                match,
                                name,
                                type: 'directive',
                                mockup: attribute,
                                arguments: (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.ArrayRange)(split, 1)
                            });
                            callback(record);
                        });
                    }
                });
                /**
                 * Find Echo
                 */
                const matchesEcho = [...attribute.value.matchAll(SyntaxEcho)];
                if (matchesEcho.length) {
                    matchesEcho.forEach(match => {
                        const record = CreateExpressionRecord({
                            node,
                            attribute,
                            match,
                            type: 'attribute.echo',
                            mockup: attribute
                        });
                        callback(record);
                    });
                }
                /**
                 * Find SnapCode
                 */
                const matchesSnapCode = [...attribute.value.matchAll(SyntaxSnapCode)];
                if (matchesSnapCode.length) {
                    matchesSnapCode.forEach(match => {
                        const record = CreateExpressionRecord({
                            node,
                            attribute,
                            match,
                            type: 'attribute.snapcode',
                            mockup: attribute
                        });
                        callback(record);
                    });
                }
            });
        }
    }
    return ParseAttributesExpression;
}
/**
 * Parse Echo Expression
 */
function ParseEchoExpression(node, callback) {
    callback = typeof callback == 'function' ? callback : (() => { });
    const content = (node instanceof Text)
        ? node.textContent
        : (node instanceof HTMLElement ? node.innerHTML : null);
    let found = false;
    if (content) {
        const matches = [...content?.matchAll(SyntaxEcho)];
        if (matches.length) {
            found = true;
            matches.forEach(match => {
                const record = CreateExpressionRecord({
                    node,
                    name: (match[1] || '').trim(),
                    type: 'echo',
                    echo: content,
                    match
                });
                callback(record);
            });
            // console.log('Parse Echo', record)
        }
    }
    return found;
}
/**
 * Parse SnapCode Expression
 */
function ParseSnapCodeExpression(node, callback) {
    callback = typeof callback == 'function' ? callback : (() => { });
    let found = false;
    if (node.childNodes.length) {
        const record = CreateExpressionRecord({
            node,
            type: 'snapcode',
            snapcode: []
        });
        node.childNodes.forEach(child => {
            if (child.textContent) {
                const matches = [...child.textContent.matchAll(SyntaxSnapCode)];
                if (matches.length) {
                    record.snapcode?.push({ node: child, matches });
                }
            }
        });
        if (record.snapcode) {
            if (record.snapcode.length) {
                found = true;
                callback(record);
            }
        }
    }
    return found;
}
function FindExpressions(node, callback) {
    const nodes = node.childNodes;
    /**
     * Parse Node Attributes
     */
    ParseAttributesExpression(node, callback);
    /**
     * Find
     */
    if (nodes.length) {
        nodes.forEach(child => {
            /** * Find SnapCode */
            const snapcode = ParseSnapCodeExpression(child, callback);
            /** * Find Deep */
            if (!snapcode) {
                FindExpressions(child, callback);
            }
        });
    }
    else {
        /**
         * Find Echo
         */
        ParseEchoExpression(node, callback);
    }
    return FindExpressions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvcmUvZXhwcmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3pDOztHQUVHO0FBS0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUV0RCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBRTFELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUE7QUFHM0IsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcseUJBQXlCLENBQUE7QUFLNUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBZSxFQUFFLElBQWM7SUFFbkUsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUUvQyxJQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUM7UUFFWixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxFQUFFO1lBRVQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQ3JCLElBQUksTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsRUFBRyxHQUFHLENBQUUsRUFDdkQsSUFBSSxNQUFNLElBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxJQUFJLE1BQU0sR0FBRyxDQUNwQyxDQUFBO1FBRUwsQ0FBQyxDQUFDLENBQUE7S0FFTDtTQUVHO1FBRUEsSUFBRyxJQUFJLEVBQUM7WUFBRSxPQUFPLElBQUksQ0FBQztT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LENBQUEsRUFBRTtZQUVqQixzQkFBc0I7WUFDdEIsTUFBTSxRQUFRLEdBQUcsdUJBQXVCLENBQUMsS0FBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUd6RSxrQkFBa0I7WUFDbEIsSUFBRyxDQUFDLFFBQVEsRUFBQztnQkFFVCxlQUFlLENBQUMsS0FBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQTthQUVsRDtRQUVMLENBQUMsQ0FBQyxDQUFBO0tBRUw7U0FFRztRQUVBOztXQUVHO1FBQ0gsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0tBRXRDO0lBRUQsT0FBTyxlQUFlLENBQUM7QUFFM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZURpcmVjdGl2ZUF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9kaXJlY3RpdmUubmF0aXZlXCI7XG5pbXBvcnQgeyBFeHByZXNzaW9uUmVjb3JkIH0gZnJvbSBcIi4vaW5kZXgudFwiO1xuaW1wb3J0IHsgQXJyYXlSYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuXG5cbi8qKlxuICogRXhwcmVzc2lvbnNcbiAqL1xuXG5cblxuXG5leHBvcnQgY29uc3QgU3ludGF4RWNobyA9IG5ldyBSZWdFeHAoJ3t7KC4qPyl9fScsICdnJylcblxuZXhwb3J0IGNvbnN0IFN5bnRheFNuYXBDb2RlID0gbmV3IFJlZ0V4cCgneyUoLio/KSV9JywgJ2cnKVxuXG5leHBvcnQgY29uc3QgU3lEZXRyID0gJyVzbidcblxuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlQXR0cmlidXRlcyA9IE5hdGl2ZURpcmVjdGl2ZUF0dHJpYnV0ZXNcblxuXG5cblxuLyoqXG4gKiBTdGFiaWxpemUgRWNobyBFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihjb250ZW50OiBzdHJpbmcsIHN0b3A/OiBib29sZWFuKXtcblxuICAgIGNvbnN0IGVjaG9zID0gWy4uLmNvbnRlbnQubWF0Y2hBbGwoU3ludGF4RWNobyldXG4gICAgIFxuICAgIGlmKGVjaG9zLmxlbmd0aCl7XG4gICAgICAgIFxuICAgICAgICBlY2hvcy5tYXAobT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoIChtWzBdKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSAsICdnJyApLCBcbiAgICAgICAgICAgICAgICBgPCR7U3lEZXRyfT0keyBtWzFdIH0gJHtTeURldHJ9PmAgXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICB9XG5cbiAgICBlbHNle1xuXG4gICAgICAgIGlmKHN0b3ApeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG5cbn1cblxuXG5cblxuLyoqXG4gKiBTdGFiaWxpemUgU25hcENvZGUgRXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uKGNvbnRlbnQ6IHN0cmluZywgc3RvcD86IGJvb2xlYW4pe1xuXG4gICAgY29uc3QgZWNob3MgPSBbLi4uY29udGVudC5tYXRjaEFsbChTeW50YXhTbmFwQ29kZSldXG4gICAgIFxuICAgIGlmKGVjaG9zLmxlbmd0aCl7XG4gICAgICAgIFxuICAgICAgICBlY2hvcy5tYXAobT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoIChtWzBdKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSAsICdnJyApLCBcbiAgICAgICAgICAgICAgICBgPCR7U3lEZXRyfSR7IG1bMV0gfSAke1N5RGV0cn0+YCBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGVsc2V7XG5cbiAgICAgICAgaWYoc3RvcCl7IHJldHVybiBudWxsOyB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudDtcblxufVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVFeHByZXNzaW9uUmVjb3JkKHN0YXRlOiBFeHByZXNzaW9uUmVjb3JkKSA6IEV4cHJlc3Npb25SZWNvcmR7XG5cbiAgICBpZigoc3RhdGUubm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHN0YXRlLm5vZGUgaW5zdGFuY2VvZiBOb2RlKSAmJiAhc3RhdGUubW9ja3VwKXtcblxuICAgICAgICBzdGF0ZS5tb2NrdXAgPSBzdGF0ZS5ub2RlLmNsb25lTm9kZSh0cnVlKVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG5cbn1cblxuXG5cbi8qKlxuICogUGFyc2UgQXR0cmlidXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VBdHRyaWJ1dGVzRXhwcmVzc2lvbihub2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6IChyZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpID0+IHZvaWQgKXtcblxuXG4gICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKCgpPT57fSk7XG5cblxuICAgIGlmKG5vZGUuYXR0cmlidXRlcyl7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYobm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCl7XG4gICAgXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG5vZGUuYXR0cmlidXRlcykubWFwKGF0dHJpYnV0ZT0+e1xuICAgIFxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBEaXJlY3RpdmVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKE5hdGl2ZURpcmVjdGl2ZUF0dHJpYnV0ZXMuQXZhaWxhYmxlc3x8e30pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAubWFwKGRpcmVjdGl2ZT0+eyBcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLmF0dHJpYnV0ZS5uYW1lLm1hdGNoQWxsKG5ldyBSZWdFeHAoYF4keyBkaXJlY3RpdmUuZXhwcmVzc2lvbiB9YCwgJ2dpJykpXVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKG1hdGNoZXMubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IGF0dHJpYnV0ZS5uYW1lPy5zdWJzdHJpbmcoKGRpcmVjdGl2ZS5leHByZXNzaW9ufHwnJyk/Lmxlbmd0aCkuc3BsaXQoJy4nKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNwbGl0WzBdXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IENyZWF0ZUV4cHJlc3Npb25SZWNvcmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZGlyZWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ja3VwOiBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogQXJyYXlSYW5nZTxzdHJpbmc+KHNwbGl0LCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG5cblxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBFY2hvXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlc0VjaG8gPSBbLi4uYXR0cmlidXRlLnZhbHVlLm1hdGNoQWxsKFN5bnRheEVjaG8pXTtcblxuICAgICAgICAgICAgICAgIGlmKG1hdGNoZXNFY2hvLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc0VjaG8uZm9yRWFjaChtYXRjaD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSBDcmVhdGVFeHByZXNzaW9uUmVjb3JkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlLmVjaG8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vY2t1cDogYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWNvcmQpXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuXG5cblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEZpbmQgU25hcENvZGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzU25hcENvZGUgPSBbLi4uYXR0cmlidXRlLnZhbHVlLm1hdGNoQWxsKFN5bnRheFNuYXBDb2RlKV07XG5cbiAgICAgICAgICAgICAgICBpZihtYXRjaGVzU25hcENvZGUubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzU25hcENvZGUuZm9yRWFjaChtYXRjaD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSBDcmVhdGVFeHByZXNzaW9uUmVjb3JkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlLnNuYXBjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2NrdXA6IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgIFxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIFBhcnNlQXR0cmlidXRlc0V4cHJlc3Npb247XG4gICAgXG59XG5cblxuXG4vKipcbiAqIFBhcnNlIEVjaG8gRXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VFY2hvRXhwcmVzc2lvbihub2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6IChyZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpID0+IHZvaWQgKXtcblxuICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICgoKT0+e30pO1xuXG4gICAgY29uc3QgY29udGVudCA9IChub2RlIGluc3RhbmNlb2YgVGV4dCkgXG4gICAgICAgID8gbm9kZS50ZXh0Q29udGVudCBcbiAgICAgICAgOiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gbm9kZS5pbm5lckhUTUwgOiBudWxsKTtcblxuICAgIFxuICAgIGxldCBmb3VuZCA9IGZhbHNlXG5cblxuICAgIGlmKGNvbnRlbnQpe1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4uY29udGVudD8ubWF0Y2hBbGwoU3ludGF4RWNobyldXG5cbiAgICAgICAgaWYobWF0Y2hlcy5sZW5ndGgpe1xuXG4gICAgICAgICAgICBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaD0+e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gQ3JlYXRlRXhwcmVzc2lvblJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IChtYXRjaFsxXXx8JycpLnRyaW0oKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2VjaG8nLFxuICAgICAgICAgICAgICAgICAgICBlY2hvOiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBtYXRjaFxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1BhcnNlIEVjaG8nLCByZWNvcmQpXG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gZm91bmQ7XG5cbn1cblxuXG5cblxuLyoqXG4gKiBQYXJzZSBTbmFwQ29kZSBFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZVNuYXBDb2RlRXhwcmVzc2lvbihub2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6IChyZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpID0+IHZvaWQgKXtcblxuICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICgoKT0+e30pO1xuXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cblxuICAgIGlmKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpe1xuXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IENyZWF0ZUV4cHJlc3Npb25SZWNvcmQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIHR5cGU6ICdzbmFwY29kZScsXG4gICAgICAgICAgICBzbmFwY29kZTogW11cbiAgICAgICAgfSlcblxuICAgICAgICBub2RlLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZD0+e1xuXG4gICAgICAgICAgICBpZihjaGlsZC50ZXh0Q29udGVudCl7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLmNoaWxkLnRleHRDb250ZW50Lm1hdGNoQWxsKFN5bnRheFNuYXBDb2RlKV07XG5cbiAgICAgICAgICAgICAgICBpZihtYXRjaGVzLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnNuYXBjb2RlPy5wdXNoKCB7IG5vZGU6IGNoaWxkLCBtYXRjaGVzIH0gKVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmKHJlY29yZC5zbmFwY29kZSl7XG5cbiAgICAgICAgICAgIGlmKHJlY29yZC5zbmFwY29kZS5sZW5ndGgpe1xuICAgIFxuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWNvcmQpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIGZvdW5kO1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRFeHByZXNzaW9ucyhub2RlOiBIVE1MRWxlbWVudCwgY2FsbGJhY2s6IChyZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpID0+IHZvaWQgKXtcblxuICAgIGNvbnN0IG5vZGVzID0gbm9kZS5jaGlsZE5vZGVzO1xuXG4gICAgLyoqXG4gICAgICogUGFyc2UgTm9kZSBBdHRyaWJ1dGVzXG4gICAgICovXG4gICAgUGFyc2VBdHRyaWJ1dGVzRXhwcmVzc2lvbihub2RlLCBjYWxsYmFjaylcbiAgICBcbiAgICBcblxuICAgIC8qKlxuICAgICAqIEZpbmRcbiAgICAgKi9cbiAgICBpZihub2Rlcy5sZW5ndGgpe1xuICAgICAgICBcbiAgICAgICAgbm9kZXMuZm9yRWFjaChjaGlsZD0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKiogKiBGaW5kIFNuYXBDb2RlICovXG4gICAgICAgICAgICBjb25zdCBzbmFwY29kZSA9IFBhcnNlU25hcENvZGVFeHByZXNzaW9uKGNoaWxkIGFzIEhUTUxFbGVtZW50LCBjYWxsYmFjayk7XG5cblxuICAgICAgICAgICAgLyoqICogRmluZCBEZWVwICovXG4gICAgICAgICAgICBpZighc25hcGNvZGUpe1xuXG4gICAgICAgICAgICAgICAgRmluZEV4cHJlc3Npb25zKGNoaWxkIGFzIEhUTUxFbGVtZW50LCBjYWxsYmFjaylcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG5cbiAgICBlbHNle1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kIEVjaG9cbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlRWNob0V4cHJlc3Npb24obm9kZSwgY2FsbGJhY2spXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiBGaW5kRXhwcmVzc2lvbnM7XG4gICAgXG59XG5cblxuXG5cbiJdfQ==

/***/ }),

/***/ "./lib/hydrates.js":
/*!*************************!*\
  !*** ./lib/hydrates.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentHydratesStore": () => (/* binding */ ComponentHydratesStore),
/* harmony export */   "ComponentHydrates": () => (/* binding */ ComponentHydrates)
/* harmony export */ });
/* harmony import */ var _compilate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compilate */ "./lib/compilate.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./lib/expression.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./lib/utilities.js");



class ComponentHydratesStore {
    constructor() {
        this.entries = {};
    }
    /**
     * Add
     */
    push(name, record) {
        this.entries[name] = this.entries[name] || [];
        this.entries[name][this.entries[name].length] = record;
        return this;
    }
    /**
     * Add
     */
    update(name, key, record) {
        if (this.entries[name]) {
            if (this.entries[name][key]) {
                this.entries[name][key] = record;
            }
        }
        return this;
    }
    /**
     * Remove entry's slot by Property or State name
     */
    remove(name, key) {
        if (this.entries[name]) {
            this.entries[name] = this.entries[name].filter((record, index) => {
                return index != key;
            });
        }
        return this;
    }
    /**
     * Clean entry by Property or State name
     */
    clean(name) {
        this.entries[name] = [];
        return this;
    }
    /**
     * Clean entry by Property or State name
     */
    reset() {
        this.entries = {};
        return this;
    }
    /**
     * Find by Property or State name
     */
    retrieve(name) {
        return this.entries[name] || undefined;
    }
    /**
     * Find All
     */
    retrieves() {
        return this.entries;
    }
}
class ComponentHydrates {
    // $props: ComponentHydratesStore<P> = {} as ComponentHydratesStore<P>
    constructor(component, state, props) {
        // entries: TComponentHydratesEntries<S, P> = {} as  TComponentHydratesEntries<S, P>
        // store: TComponentHydratesStore<S, P> = {
        //     state: {} as S,
        //     props: {} as P,
        // } as TComponentHydratesStore<S, P>
        this.component = {};
        this.state = {};
        this.props = {};
        this.$state = {};
        this.component = component;
        this.state = Object.assign({}, state || component.state);
        this.props = props || component.props;
        this.$state = new ComponentHydratesStore();
        // this.$props = new ComponentHydratesStore();
        // console.log('Phase Set Proxy and other', this)
        this.proxies();
    }
    /**
     * Build State Proxies
     * @description Use this to activate the dynamic state. For default the construct call this
     */
    proxies() {
        if (typeof this.state == 'object') {
            const self = this.component;
            const $ = this;
            Object.entries(this.state).map(e => {
                if (typeof e[1] == 'function') {
                    return;
                }
                const name = e[0];
                /**
                 * Array Proxy
                 */
                if (Array.isArray(e[1])) {
                    self.state[name] = new Proxy(e[1], {
                        get: function (target, prop) {
                            // console.log('getting', target, prop)
                            return target[prop];
                        },
                        set: function (target, prop, value, prox) {
                            // console.log('setting', target, prop, value, prox)
                            target[prop] = value;
                            $.state[name] = prox;
                            self.hydratesState(name);
                            return true;
                        }
                    });
                }
                /**
                 * Other
                 */
                else {
                    Object.defineProperty(self.state, `${name}`, {
                        get() { return $.state[name]; },
                        set(value) {
                            $.state[name] = value;
                            self.hydratesState(name);
                            return true;
                        },
                    });
                }
            });
        }
        return this;
    }
    /**
     * Hydrate Specific Node
     * @description Use this to ReRender state and props in Node
     */
    hydratesNode(node) {
        return new Promise((resolve, reject) => {
            /**
             * Init
             */
            let mockup = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.StabilizeContent)((('innerHTML' in node) ? node.innerHTML : node.textContent) || '');
            /**
             * Echo
             */
            const echoMockup = (0,_expression__WEBPACK_IMPORTED_MODULE_1__.StabilizeEchoExpression)(mockup, true) || '';
            /**
             * SnapCode
             */
            const snapMockup = (0,_expression__WEBPACK_IMPORTED_MODULE_1__.StabilizeSnapCodeExpression)(echoMockup || mockup, true) || '';
            /**
             * Verifications
             */
            if (!echoMockup.length && !snapMockup.length) {
                resolve(null);
                return;
            }
            /**
             * Rendering
             */
            (0,_compilate__WEBPACK_IMPORTED_MODULE_0__.RenderEngine)(snapMockup || echoMockup || mockup, this.component, this.component.state).then(result => {
                if ('innerHTML' in node) {
                    node.innerHTML = result;
                }
                else if ('textContent' in node) {
                    node.textContent = result;
                }
                resolve(result);
            }).catch(er => {
                (0,_compilate__WEBPACK_IMPORTED_MODULE_0__.CompilateErrorException)(er);
                reject(er);
            });
        });
    }
    /**
     * Hydrate Specific Recorde
     * @description Use this to ReRender state and props of Record
     */
    hydratesRecord(record) {
        return new Promise((resolve, reject) => {
            const node = record.node;
            /**
             * Init
             */
            let mockup = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.StabilizeContent)(((record.mockup && 'innerHTML' in record.mockup) ? record.mockup.innerHTML : record.mockup?.textContent) || '');
            /**
             * Echo
             */
            const echoMockup = (0,_expression__WEBPACK_IMPORTED_MODULE_1__.StabilizeEchoExpression)(mockup, true) || '';
            /**
             * SnapCode
             */
            const snapMockup = (0,_expression__WEBPACK_IMPORTED_MODULE_1__.StabilizeSnapCodeExpression)(echoMockup || mockup, true) || '';
            /**
             * Verifications
             */
            if (!echoMockup.length && !snapMockup.length) {
                resolve(null);
                return;
            }
            /**
             * Rendering
             */
            (0,_compilate__WEBPACK_IMPORTED_MODULE_0__.RenderEngine)(snapMockup || echoMockup || mockup, this.component, this.component.state).then(result => {
                if ('innerHTML' in node) {
                    node.innerHTML = result;
                }
                else if ('textContent' in node) {
                    result = (0,_utilities__WEBPACK_IMPORTED_MODULE_2__.decodeHTMLEntities)(result);
                    node.textContent = `${result}`;
                }
                resolve(result);
            }).catch(er => {
                (0,_compilate__WEBPACK_IMPORTED_MODULE_0__.CompilateErrorException)(er);
                reject(er);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlkcmF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2h5ZHJhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLDJCQUEyQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtuRSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBR0ksWUFBTyxHQUErQixFQUFpQyxDQUFBO0lBK0czRSxDQUFDO0lBM0dHOztPQUVHO0lBQ0YsSUFBSSxDQUFDLElBQWEsRUFBRSxNQUF3QjtRQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLElBQUksRUFBRSxDQUFBO1FBRWpELElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxNQUFNLENBQUE7UUFFNUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUlEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLElBQWEsRUFBRSxHQUFZLEVBQUUsTUFBd0I7UUFFeEQsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxFQUFDO1lBRXBCLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBRSxHQUFHLENBQUUsRUFBQztnQkFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBRSxHQUFHLENBQUUsR0FBRyxNQUFNLENBQUE7YUFFdkM7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFJRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFhLEVB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QixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFZCxDQUFDLENBQUMsQ0FBQTtRQUdOLENBQUMsQ0FBQyxDQUFBO0lBR04sQ0FBQztDQU1KIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uLCBSZW5kZXJFbmdpbmUgfSBmcm9tIFwiLi9jb21waWxhdGVcIjtcbmltcG9ydCB7IFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uLCBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24gfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRob2RSYXcsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZSwgRXhwcmVzc2lvblJlY29yZCwgVENvbXBvbmVudEh5ZHJhdGVzRW50cnkgfSBmcm9tIFwiLi9pbmRleC50XCI7XG5pbXBvcnQgeyBkZWNvZGVIVE1MRW50aXRpZXMsIFN0YWJpbGl6ZUNvbnRlbnQgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuXG5cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8VCBleHRlbmRzIChDb21wb25lbnRTdGF0ZSB8IENvbXBvbmVudFByb3BzKT57XG5cblxuICAgIGVudHJpZXM6IFRDb21wb25lbnRIeWRyYXRlc0VudHJ5PFQ+ID0ge30gYXMgIFRDb21wb25lbnRIeWRyYXRlc0VudHJ5PFQ+XG5cblxuXG4gICAgLyoqXG4gICAgICogQWRkXG4gICAgICovXG4gICAgIHB1c2gobmFtZToga2V5b2YgVCwgcmVjb3JkOiBFeHByZXNzaW9uUmVjb3JkKXtcblxuICAgICAgICB0aGlzLmVudHJpZXNbIG5hbWUgXSA9IHRoaXMuZW50cmllc1sgbmFtZSBdIHx8IFtdXG5cbiAgICAgICAgdGhpcy5lbnRyaWVzWyBuYW1lIF1bIHRoaXMuZW50cmllc1sgbmFtZSBdLmxlbmd0aCBdID0gcmVjb3JkXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRcbiAgICAgKi9cbiAgICB1cGRhdGUobmFtZToga2V5b2YgVCwga2V5IDogbnVtYmVyLCByZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpe1xuXG4gICAgICAgIGlmKHRoaXMuZW50cmllc1sgbmFtZSBdKXtcblxuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzWyBuYW1lIF1bIGtleSBdKXtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXNbIG5hbWUgXVsga2V5IF0gPSByZWNvcmRcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50cnkncyBzbG90IGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmUobmFtZToga2V5b2YgVCwga2V5OiBudW1iZXIpe1xuXG4gICAgICAgIGlmKHRoaXMuZW50cmllc1sgbmFtZSBdKXtcblxuICAgICAgICAgICAgdGhpcy5lbnRyaWVzWyBuYW1lIF0gPSB0aGlzLmVudHJpZXNbIG5hbWUgXS5maWx0ZXIoKHJlY29yZCwgaW5kZXgpPT57XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggIT0ga2V5XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gZW50cnkgYnkgUHJvcGVydHkgb3IgU3RhdGUgbmFtZVxuICAgICAqL1xuICAgIGNsZWFuKG5hbWU6IGtleW9mIFQpe1xuXG4gICAgICAgIHRoaXMuZW50cmllc1sgbmFtZSBdID0gW11cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGVudHJ5IGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZXNldCgpe1xuXG4gICAgICAgIHRoaXMuZW50cmllcyA9IHt9IGFzIFRDb21wb25lbnRIeWRyYXRlc0VudHJ5PFQ+XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZXRyaWV2ZShuYW1lOiBrZXlvZiBUKSA6IEV4cHJlc3Npb25SZWNvcmRbXXtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzWyBuYW1lIF0gfHwgdW5kZWZpbmVkXG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEZpbmQgQWxsXG4gICAgICovXG4gICAgcmV0cmlldmVzKCl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgXG59XG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEh5ZHJhdGVzPFxuXG4gICAgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICBcbiAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTSBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTLCBQPlxuICAgIFxuPntcblxuXG4gICAgLy8gZW50cmllczogVENvbXBvbmVudEh5ZHJhdGVzRW50cmllczxTLCBQPiA9IHt9IGFzICBUQ29tcG9uZW50SHlkcmF0ZXNFbnRyaWVzPFMsIFA+XG5cbiAgICAvLyBzdG9yZTogVENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UywgUD4gPSB7XG5cbiAgICAvLyAgICAgc3RhdGU6IHt9IGFzIFMsXG4gICAgICAgIFxuICAgIC8vICAgICBwcm9wczoge30gYXMgUCxcblxuICAgIC8vIH0gYXMgVENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UywgUD5cbiAgICBcblxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50PFMsIFAsIE0+ID0ge30gYXMgQ29tcG9uZW50PFMsIFAsIE0+XG5cbiAgICBzdGF0ZTogUyA9IHt9IGFzIFNcblxuICAgIHByb3BzOiBQID0ge30gYXMgUFxuXG5cblxuICAgICRzdGF0ZTogQ29tcG9uZW50SHlkcmF0ZXNTdG9yZTxTPiA9IHt9IGFzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8Uz5cblxuICAgIC8vICRwcm9wczogQ29tcG9uZW50SHlkcmF0ZXNTdG9yZTxQPiA9IHt9IGFzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UD5cblxuXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnQ8UywgUCwgTT4sIHN0YXRlPzogUywgcHJvcHM/OiBQKXtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUgfHwgY29tcG9uZW50LnN0YXRlKTtcblxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwgY29tcG9uZW50LnByb3BzO1xuXG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSBuZXcgQ29tcG9uZW50SHlkcmF0ZXNTdG9yZSgpO1xuXG4gICAgICAgIC8vIHRoaXMuJHByb3BzID0gbmV3IENvbXBvbmVudEh5ZHJhdGVzU3RvcmUoKTtcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQaGFzZSBTZXQgUHJveHkgYW5kIG90aGVyJywgdGhpcylcblxuXG4gICAgICAgIHRoaXMucHJveGllcygpXG5cbiAgICB9XG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIFN0YXRlIFByb3hpZXNcbiAgICAgKiBAZGVzY3JpcHRpb24gVXNlIHRoaXMgdG8gYWN0aXZhdGUgdGhlIGR5bmFtaWMgc3RhdGUuIEZvciBkZWZhdWx0IHRoZSBjb25zdHJ1Y3QgY2FsbCB0aGlzXG4gICAgICovXG4gICAgcHJveGllcygpe1xuXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnN0YXRlID09ICdvYmplY3QnKXtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMuY29tcG9uZW50O1xuXG4gICAgICAgICAgICBjb25zdCAkID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZSkubWFwKGU9PntcblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlWzFdID09ICdmdW5jdGlvbicpeyByZXR1cm4gOyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZVswXSBhcyBrZXlvZiBTXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBcnJheSBQcm94eVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZVsxXSkpe1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdGVbIG5hbWUgXSA9IG5ldyBQcm94eTx0eXBlb2YgZVsxXT4oZVsxXSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0dGluZycsIHRhcmdldCwgcHJvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih0YXJnZXQsIHByb3AsIHZhbHVlLCBwcm94KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nJywgdGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcHJveClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnN0YXRlWyBuYW1lIF0gPSBwcm94XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmh5ZHJhdGVzU3RhdGUobmFtZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE90aGVyXG4gICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLnN0YXRlLCBgJHsgbmFtZSB9YCwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQoKXsgcmV0dXJuICQuc3RhdGVbIG5hbWUgXTsgfSxcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5zdGF0ZVsgbmFtZSBdID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmh5ZHJhdGVzU3RhdGUobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEh5ZHJhdGUgU3BlY2lmaWMgTm9kZVxuICAgICAqIEBkZXNjcmlwdGlvbiBVc2UgdGhpcyB0byBSZVJlbmRlciBzdGF0ZSBhbmQgcHJvcHMgaW4gTm9kZVxuICAgICAqL1xuICAgIGh5ZHJhdGVzTm9kZShub2RlOiBOb2RlIHwgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KT0+e1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluaXRcbiAgICAgICAgICAgICAqL1xuICAgIFxuICAgICAgICAgICAgbGV0IG1vY2t1cCA9IFN0YWJpbGl6ZUNvbnRlbnQoKCgnaW5uZXJIVE1MJyBpbiBub2RlKSA/IG5vZGUuaW5uZXJIVE1MIDogbm9kZS50ZXh0Q29udGVudCkgfHwgJycpIGFzIHN0cmluZztcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFY2hvXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGVjaG9Nb2NrdXAgPSBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihtb2NrdXAsIHRydWUpIHx8ICcnXG4gICAgIFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU25hcENvZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBjb25zdCBzbmFwTW9ja3VwID0gU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uKGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0cnVlKSB8fCAnJ1xuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWZXJpZmljYXRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKCFlY2hvTW9ja3VwLmxlbmd0aCAmJiAhc25hcE1vY2t1cC5sZW5ndGgpeyBcblxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7IHJldHVybjsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVuZGVyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJlbmRlckVuZ2luZShzbmFwTW9ja3VwIHx8IGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5jb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICBpZignaW5uZXJIVE1MJyBpbiBub2RlKXsgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZigndGV4dENvbnRlbnQnIGluIG5vZGUpeyBub2RlLnRleHRDb250ZW50ID0gcmVzdWx0IH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyPT57XG4gICAgXG4gICAgICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpXG4gICAgXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgXG5cbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBIeWRyYXRlIFNwZWNpZmljIFJlY29yZGVcbiAgICAgKiBAZGVzY3JpcHRpb24gVXNlIHRoaXMgdG8gUmVSZW5kZXIgc3RhdGUgYW5kIHByb3BzIG9mIFJlY29yZFxuICAgICAqL1xuICAgIGh5ZHJhdGVzUmVjb3JkKHJlY29yZDogRXhwcmVzc2lvblJlY29yZCl7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpPT57XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSByZWNvcmQubm9kZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbml0XG4gICAgICAgICAgICAgKi9cbiAgICBcbiAgICAgICAgICAgIGxldCBtb2NrdXAgPSBTdGFiaWxpemVDb250ZW50KCgocmVjb3JkLm1vY2t1cCAmJiAnaW5uZXJIVE1MJyBpbiByZWNvcmQubW9ja3VwKSA/IHJlY29yZC5tb2NrdXAuaW5uZXJIVE1MIDogcmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQpIHx8ICcnKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWNob1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBlY2hvTW9ja3VwID0gU3RhYmlsaXplRWNob0V4cHJlc3Npb24obW9ja3VwLCB0cnVlKSB8fCAnJ1xuICAgICBcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNuYXBDb2RlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgY29uc3Qgc25hcE1vY2t1cCA9IFN0YWJpbGl6ZVNuYXBDb2RlRXhwcmVzc2lvbihlY2hvTW9ja3VwIHx8IG1vY2t1cCwgdHJ1ZSkgfHwgJydcblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmVyaWZpY2F0aW9uc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZighZWNob01vY2t1cC5sZW5ndGggJiYgIXNuYXBNb2NrdXAubGVuZ3RoKXsgXG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpOyByZXR1cm47IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICBcblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVuZGVyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJlbmRlckVuZ2luZShzbmFwTW9ja3VwIHx8IGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5jb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0PT57XG5cbiAgICAgICAgICAgICAgICBpZignaW5uZXJIVE1MJyBpbiBub2RlKXsgXG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQgXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCd0ZXh0Q29udGVudCcgaW4gbm9kZSl7IFxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRlY29kZUhUTUxFbnRpdGllcyggcmVzdWx0IClcblxuICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gYCR7IHJlc3VsdCB9YCBcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyPT57XG4gICAgXG4gICAgICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpXG4gICAgXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgXG5cbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG59Il19

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponentMethodEvent": () => (/* binding */ CreateComponentMethodEvent),
/* harmony export */   "SensenScreen": () => (/* binding */ SensenScreen),
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "default": () => (/* binding */ Sensen)
/* harmony export */ });
/* harmony import */ var _compilate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compilate */ "./lib/compilate.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./lib/emitter.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression */ "./lib/expression.js");
/* harmony import */ var _hydrates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hydrates */ "./lib/hydrates.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Component_instances, _Component_hydrates, _Component_mutationObserver, _Component_mutationObserved, _Component_pending, _Component_completed, _Component_camouflage, _Component_checkCompilatedDone;




function CreateComponentMethodEvent(component, ev) {
    const _ = {};
    _.self = component;
    _.event = ev;
    return _;
}
/**
 * Sensen HTML Element
 */
class SensenHTMLElement extends HTMLElement {
    /**
     * New Construct
     */
    constructor(props) {
        super();
        /**
         * Dynamic var
         */
        this.props = {};
        this.props = props;
    }
    /**
     * Properties name
     */
    static get observedAttributes() { return []; }
    /**
     * When Element is connected
     */
    connectedCallback() { }
    /**
     * When Element is Adopted by other DOM
     */
    adoptedCallback() { }
    /**
     * Whene Element is Disconnected to the current DOM
     */
    disconnectedCallback() { }
    /**
     * Whene Element change properties
     */
    attributeChangedCallback() {
    }
}
/**
 * Sensen Screen
 */
class SensenScreen {
    constructor(config) {
        console.warn('Sensen Screen', this);
    }
}
/**
 * Sensen Component
 */
class Component {
    /**
     * New Construct
     */
    constructor(options) {
        _Component_instances.add(this);
        this.$tagName = '';
        this.methods = {};
        this.$options = {};
        this.isReady = false;
        _Component_hydrates.set(this, void 0);
        _Component_mutationObserver.set(this, void 0);
        _Component_mutationObserved.set(this, void 0);
        _Component_pending.set(this, 0);
        _Component_completed.set(this, 0);
        this.$options = options;
        this.state = (this.$options.state || {});
        this.props = (this.$options.props || {});
        this.methods = (this.$options.methods || {});
        this.$emitter = new _emitter__WEBPACK_IMPORTED_MODULE_1__.SensenEmitter();
        __classPrivateFieldSet(this, _Component_hydrates, new _hydrates__WEBPACK_IMPORTED_MODULE_3__.ComponentHydrates(this), "f");
        __classPrivateFieldGet(this, _Component_instances, "m", _Component_camouflage).call(this)
            .$emitting()
            .$initialize()
            .$template()
            .then(tpl => {
            if (tpl) {
                this.template = tpl;
                if (this.$options.element instanceof HTMLElement) {
                    this.$options.element.innerHTML = tpl;
                }
            }
            this
                .$observers()
                .$compilate();
        });
    }
    /**
     * set Template
     */
    $template() {
        return new Promise((resolve, reject) => {
            console.warn('Component template', this.$options.template);
            if (typeof this.$options.template != 'string') {
                if (this.$options.element instanceof HTMLElement) {
                    if ('innerHTML' in this.$options.element) {
                        resolve(this.$options.element.innerHTML);
                        return;
                    }
                }
                resolve(undefined);
                return;
            }
            else {
                const check = this.$options.template.match(/<\/?[^>]+>/gi);
                console.log('check', check);
                /**
                 * If Template is String HTML code
                 */
                if (check) {
                    resolve(this.$options.template);
                    return;
                }
                /**
                 * Else, it's file path
                 */
                const url = new URL(location.href);
                const path = `.${(url.pathname == '/') ? '' : url.pathname}/${this.$options.template}`;
                fetch(path).then(d => { if (d.status == 404) {
                    return undefined;
                } return d.text(); })
                    .then(data => {
                    if (data) {
                        console.warn('Checkup', data);
                        resolve(data);
                    }
                    else {
                        resolve(undefined);
                    }
                })
                    .catch(er => { resolve(undefined); });
                return;
            }
        });
    }
    /**
     * Initialize
     */
    $initialize() {
        this.$initializeElement();
        // if(this.$options.element instanceof HTMLElement){
        //     this.$options.element.style.opacity = '0'
        // }
        /** * Emit Event */
        this.$emitter?.dispatch('start', this);
        return this;
    }
    $initializeElement(props) {
        const $props = props || this.$options || null;
        const self = this;
        if ($props) {
            this.$tagName = `sn-${$props.name}`;
            /**
             * Find current Element sent
             */
            if (this.$options.element) {
                if (typeof this.$options.element == 'string') {
                    this.$options.element = document.querySelector(`${this.$options.element}`);
                }
            }
            /**
             * Define custom Element
             */
            if (!customElements.get(this.$tagName)) {
                this.$klass = class extends SensenHTMLElement {
                    constructor(props) {
                        super(props);
                        /** * Emit Event */
                        self.$emitter?.dispatch('construct', self);
                    }
                };
                this.$klass.prototype.connectedCallback = () => {
                    /** * Emit Event */
                    self.$emitter?.dispatch('connected', self);
                };
                this.$klass.prototype.adoptedCallback = () => {
                    /** * Emit Event */
                    self.$emitter?.dispatch('adopted', self);
                };
                this.$klass.prototype.disconnectedCallback = () => {
                    /** * Emit Event */
                    self.$emitter?.dispatch('disconnected', self);
                };
                this.$klass.prototype.attributeChangedCallback = (name, value, oldValue) => {
                    /** * Emit Event */
                    self.$emitter?.dispatch('nPropsChanged', { name, value, oldValue });
                };
                Object.defineProperty(this.$klass, 'observedAttributes', {
                    get: function () {
                        return (typeof self.props == 'object') ? Object.keys(self.props) : [];
                    }
                });
                customElements.define(this.$tagName, this.$klass);
            }
            if (this.$options.element instanceof HTMLElement) {
                this.$options.element?.setAttribute('is', `${this.$tagName}`);
            }
            if (!(this.$options.element instanceof HTMLElement)) {
                this.$options.element = document.createElement(`${this.$tagName}`);
            }
            /** * Emit Event */
            this.$emitter?.dispatch('elementReady', this);
        }
        return this;
    }
    /**
     * DOM Observer
     */
    $observers() {
        if (this.$options.element instanceof HTMLElement) {
            __classPrivateFieldSet(this, _Component_mutationObserver, new MutationObserver((records) => {
                if (records) {
                    __classPrivateFieldSet(this, _Component_mutationObserved, records, "f");
                    records.forEach(record => {
                        if (record.type == 'attributes') {
                            if (record.attributeName && this.$options.element instanceof HTMLElement) {
                                if (record.attributeName in this.props) {
                                    const key = record.attributeName;
                                    const value = this.$options.element.getAttribute(record.attributeName);
                                    // @ts-ignore
                                    this.props[key] = value;
                                    /** * Emit Event */
                                    this.$emitter?.dispatch('propsChanged', {
                                        name: record.attributeName,
                                        value,
                                        oldValue: record.oldValue
                                    });
                                }
                            }
                        }
                        /** * Emit Event */
                        this.$emitter?.dispatch('mutationObserved', record);
                    });
                    /** * Emit Event */
                    this.$emitter?.dispatch('mutationsObserved', records);
                }
            }), "f");
            __classPrivateFieldGet(this, _Component_mutationObserver, "f").observe(this.$options.element, {
                childList: true,
                subtree: true,
                attributes: true,
                characterData: true,
                characterDataOldValue: true,
                attributeOldValue: true,
                attributeFilter: Object.keys(this.props)
            });
            /** * Emit Event */
            this.$emitter?.dispatch('mutationObservationReady', __classPrivateFieldGet(this, _Component_mutationObserver, "f"));
        }
        return this;
    }
    hydratesState(slot) {
        const store = __classPrivateFieldGet(this, _Component_hydrates, "f")?.$state.retrieve(slot);
        if (store?.length) {
            store.map(record => {
                __classPrivateFieldGet(this, _Component_hydrates, "f")?.hydratesRecord(record)
                    .then((data) => {
                    /** * Emit Event */
                    this.$emitter?.dispatch('stateHydrated', { record, data });
                });
            });
        }
        return this;
    }
    /**
     * Compilate transactions
     */
    $compilate() {
        if (this.$options.element instanceof HTMLElement) {
            (0,_expression__WEBPACK_IMPORTED_MODULE_2__.FindExpressions)(this.$options.element, (record) => {
                var _a;
                __classPrivateFieldSet(this, _Component_pending, (_a = __classPrivateFieldGet(this, _Component_pending, "f"), _a++, _a), "f");
                /**
                 * Find State to auto-compilate
                 */
                if (typeof this.state == 'object') {
                    const value = record.mockup?.textContent;
                    const sMatches = [
                        ...(value || '').matchAll(new RegExp(`(${Object.keys(this.state).join('|')})`, 'g')),
                        ...(value || '').matchAll(new RegExp(`this\\.state\\.(${Object.keys(this.state).join(')|this\\.state\\.(')})`, 'g')),
                        // ...(value||'').matchAll(new RegExp(`this\\.props\\.${ Object.keys(this.props).join('|this\\.props\\.') }`, 'g')),
                    ];
                    if (sMatches.length) {
                        sMatches.map(match => {
                            const recordClone = Object.assign({}, record);
                            const purge = match.filter(v => v != undefined);
                            const slot = purge[1];
                            // @ts-ignore
                            purge.input = match.input;
                            recordClone.match = purge;
                            __classPrivateFieldGet(this, _Component_hydrates, "f")?.$state.push(slot, recordClone);
                        });
                    }
                }
                /** * Emit Event */
                this.$emitter?.dispatch('expressionDetected', record);
            });
        }
        /** * Emit Event */
        this.$emitter?.dispatch('compilationReady', this);
        return this;
    }
    /**
     * Emitting
     */
    $emitting() {
        /**
         * Model : Begin
         */
        this.$emitter?.listen('elementReady', (args) => {
            // console.warn('Create Element Model', args)
        });
        /**
         * Model : End
         */
        /**
         * Mutations Observers : Begin
         */
        this.$emitter?.listen('mutationObservationReady', (args) => {
            // console.warn('Mutation Observed', args)
        });
        this.$emitter?.listen('mutationObserved', (args) => {
            // console.warn('Mutation Observed', args)
            if (args.emit.target) {
                __classPrivateFieldGet(this, _Component_hydrates, "f")?.hydratesNode(args.emit.target);
            }
        });
        this.$emitter?.listen('mutationsObserved', (args) => {
            // console.warn('Mutations Observed', args)
        });
        /**
         * Mutations Observers : End
         */
        /**
         * Compilate Record : Begin
         */
        this.$emitter?.listen('expressionDetected', ($) => {
            const promised = [];
            if ($.emit) {
                if ($.emit.type == 'echo') {
                    promised.push((0,_compilate__WEBPACK_IMPORTED_MODULE_0__.CompilateEcho)(this, $.emit));
                }
                else if ($.emit.type == 'snapcode') {
                    promised.push((0,_compilate__WEBPACK_IMPORTED_MODULE_0__.CompilateSnapCode)(this, $.emit));
                }
                else if ($.emit.type == 'attribute.echo') {
                    promised.push((0,_compilate__WEBPACK_IMPORTED_MODULE_0__.CompilateEchoAttributes)(this, $.emit));
                }
                else if ($.emit.type == 'attribute.snapcode') {
                    promised.push((0,_compilate__WEBPACK_IMPORTED_MODULE_0__.CompilateSnapCodeAttributes)(this, $.emit));
                }
                else if ($.emit.type == 'directive') {
                    promised.push(new Promise((r, j) => {
                        if (!('directive' in $.emit)) {
                            throw (`Corrupted directive : not found`);
                        }
                        if (typeof $.emit.directive?.main != 'function') {
                            throw (`Corrupted directive : < ${$.emit.directive?.name} >`);
                        }
                        $.emit.directive.main(this, $.emit);
                        r($.emit);
                    }));
                }
            }
            if (promised.length) {
                Promise.all(promised)
                    .then(lot => {
                    var _a;
                    __classPrivateFieldSet(this, _Component_completed, (_a = __classPrivateFieldGet(this, _Component_completed, "f"), _a++, _a), "f");
                    // console.warn('Compilated', lot)
                    __classPrivateFieldGet(this, _Component_instances, "m", _Component_checkCompilatedDone).call(this, lot);
                });
            }
        });
        this.$emitter?.listen('compilate', (args) => {
            // console.warn('Expression Recorded', args.emit)
        });
        /**
         * Compilate Record : End
         */
        /**
         * Custom Emitter Listener : Begin
         */
        if (this.$options.emit) {
            Object.entries(this.$options.emit).map(e => {
                if (typeof e[1] == 'function') {
                    const self = this;
                    this.$emitter?.listen(e[0], function () {
                        // @ts-ignore
                        e[1].apply(this, [arguments[0]]);
                    });
                }
            });
        }
        /**
         * Custom Emitter Listener : End
         */
        return this;
    }
}
_Component_hydrates = new WeakMap(), _Component_mutationObserver = new WeakMap(), _Component_mutationObserved = new WeakMap(), _Component_pending = new WeakMap(), _Component_completed = new WeakMap(), _Component_instances = new WeakSet(), _Component_camouflage = function _Component_camouflage() {
    this.$emitter?.listen('start', () => {
        if (this.$options.element instanceof HTMLElement) {
            this.$options.element.style.display = 'none';
        }
    });
    this.$emitter?.listen('ready', () => {
        if (this.$options.element instanceof HTMLElement) {
            // @ts-ignore
            this.$options.element.style.display = null;
        }
    });
    return this;
}, _Component_checkCompilatedDone = function _Component_checkCompilatedDone(lot) {
    if (__classPrivateFieldGet(this, _Component_pending, "f") == __classPrivateFieldGet(this, _Component_completed, "f")) {
        /** * Emit Event */
        this.$emitter?.dispatch('compilated', lot);
        if (!this.isReady) {
            this.isReady = true;
            /** * Emit Event */
            this.$emitter?.dispatch('ready', this);
        }
        // console.log('Compilate Done', lot)
    }
    return this;
};
/**
 * Exportations
 */
class Sensen {
}
Sensen.Component = Component;
Sensen.Screen = SensenScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQVEvQyxNQUFNLFVBQVUsMEJBQTBCLENBUXhDLFNBQTZCLEVBQUUsRUFBUztJQUV0QyxNQUFNLENBQUMsR0FBbUMsRUFBbUMsQ0FBQTtJQUc3RSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUVuQixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUVaLE9BQU8sQ0FBQyxDQUFDO0FBRWIsQ0FBQztBQU1EOztHQUVHO0FBQ0gsTUFBTSxpQkFBcUIsU0FBUSxXQUFXO0lBZTFDOztPQUVHO0lBQ0gsWUFBWSxLQUFTO1FBRWpCLEtBQUssRUFBRSxDQUFDO1FBWFo7O1dBRUc7UUFDSCxVQUFLLEdBQU8sRUFBTyxDQUFDO1FBVWhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRXZCLENBQUM7SUFyQkQ7O09BRUc7SUFDSCxNQUFNLEtBQUssa0JBQWtCLEtBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBcUI3Qzs7T0FFRztJQUNILGlCQUFpQixLQUFHLENBQUM7SUFHckI7O09BRUc7SUFDSCxlQUFlLEtBQUcsQ0FBQztJQUduQjs7T0FFRztJQUNILG9CQUFvQixLQUFHLENBQUM7SUFJeEI7O09BRUc7SUFDSCx3QkFBd0I7SUFFeEIsQ0FBQztDQUlKO0FBT0Q7O0dBRUc7QUFFSCxNQUFNLE9BQU8sWUFBWTtJ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QUFBO0lBRUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQWMsT0FBTyxFQUFFLEdBQUUsRUFBRTtRQUU1QyxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBQztZQUU1QyxhQUFhO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FFOUM7SUFFTCxDQUFDLENBQUMsQ0FBQTtJQUdGLE9BQU8sSUFBSSxDQUFDO0FBRWhCLENBQUMsMkVBZ1dvQixHQUFxQztJQUV0RCxJQUFHLHVCQUFBLElBQUksMEJBQVMsSUFBSSx1QkFBQSxJQUFJLDRCQUFXLEVBQUM7UUFFaEMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUUzQyxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUViLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFMUM7UUFFRCxxQ0FBcUM7S0FFeEM7SUFFRCxPQUFPLElBQUksQ0FBQztBQUVoQixDQUFDO0FBcU5MOztHQUVHO0FBRUYsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFNOztBQUVqQixnQkFBUyxHQUFHLFNBQVMsQ0FBQztBQUV0QixhQUFNLEdBQUcsWUFBWSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcGlsYXRlRWNobywgQ29tcGlsYXRlRWNob0F0dHJpYnV0ZXMsIENvbXBpbGF0ZVNuYXBDb2RlLCBDb21waWxhdGVTbmFwQ29kZUF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9jb21waWxhdGVcIjtcbmltcG9ydCB7IFNlbnNlbkVtaXR0ZXIgfSBmcm9tIFwiLi9lbWl0dGVyXCI7XG5pbXBvcnQgeyBGaW5kRXhwcmVzc2lvbnMgfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudE1ldGhvZEV2ZW50LCBDb21wb25lbnRNZXRob2RSYXcsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZSwgRXhwcmVzc2lvblJlY29yZCwgVENvbXBvbmVudE9wdGlvbnMsIFRTY3JlZW5Db25maWcgfSBmcm9tIFwiLi9pbmRleC50XCI7XG5pbXBvcnQgeyBDb21wb25lbnRIeWRyYXRlcyB9IGZyb20gXCIuL2h5ZHJhdGVzXCI7XG5cblxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDb21wb25lbnRNZXRob2RFdmVudDxcbiAgICBcbiAgICBTIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgICAgICBcbiAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTSBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTLCBQPlxuICAgIFxuPihjb21wb25lbnQ6IENvbXBvbmVudDxTLCBQLCBNPiwgZXY6IEV2ZW50KXtcblxuICAgIGNvbnN0IF8gOiBDb21wb25lbnRNZXRob2RFdmVudDxTLCBQLCBNPiA9IHt9IGFzIENvbXBvbmVudE1ldGhvZEV2ZW50PFMsIFAsIE0+XG4gICAgXG5cbiAgICBfLnNlbGYgPSBjb21wb25lbnQ7XG5cbiAgICBfLmV2ZW50ID0gZXZcbiAgICBcbiAgICByZXR1cm4gXztcblxufVxuXG5cblxuXG5cbi8qKlxuICogU2Vuc2VuIEhUTUwgRWxlbWVudFxuICovXG5jbGFzcyBTZW5zZW5IVE1MRWxlbWVudDxQPiBleHRlbmRzIEhUTUxFbGVtZW50e1xuXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIG5hbWVcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtyZXR1cm4gW107IH1cblxuXG4gICAgLyoqXG4gICAgICogRHluYW1pYyB2YXJcbiAgICAgKi9cbiAgICBwcm9wcyA6IFAgPSB7fSBhcyBQO1xuICAgIFxuICAgIFxuICAgIC8qKlxuICAgICAqIE5ldyBDb25zdHJ1Y3RcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA6IFApe1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICBcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFdoZW4gRWxlbWVudCBpcyBjb25uZWN0ZWRcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpe31cblxuXG4gICAgLyoqXG4gICAgICogV2hlbiBFbGVtZW50IGlzIEFkb3B0ZWQgYnkgb3RoZXIgRE9NXG4gICAgICovXG4gICAgYWRvcHRlZENhbGxiYWNrKCl7fVxuXG5cbiAgICAvKipcbiAgICAgKiBXaGVuZSBFbGVtZW50IGlzIERpc2Nvbm5lY3RlZCB0byB0aGUgY3VycmVudCBET01cbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpe31cbiAgICBcblxuXG4gICAgLyoqXG4gICAgICogV2hlbmUgRWxlbWVudCBjaGFuZ2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpe1xuXG4gICAgfVxuICAgIFxuXG4gICAgXG59XG5cblxuXG5cblxuXG4vKipcbiAqIFNlbnNlbiBTY3JlZW5cbiAqL1xuXG5leHBvcnQgY2xhc3MgU2Vuc2VuU2NyZWVue1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFRTY3JlZW5Db25maWcpe1xuXG4gICAgICAgIGNvbnNvbGUud2FybignU2Vuc2VuIFNjcmVlbicsIHRoaXMpXG5cbiAgICB9XG4gICAgXG4gICAgXG5cbn1cblxuXG5cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQ8XG5cbiAgICBTdGF0ZSBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICBcbiAgICBQcm9wcyBleHRlbmRzIENvbXBvbmVudFByb3BzLFxuICAgIFxuICAgIE1ldGhvZHMgZXh0ZW5kcyBDb21wb25lbnRNZXRob2RSYXc8U3RhdGUsIFByb3BzPlxuICAgIFxuPntcblxuICAgICR0YWdOYW1lIDogc3RyaW5nID0gJyc7XG5cbiAgICBzdGF0ZSA6IHsgW1MgaW4ga2V5b2YgU3RhdGVdIDogU3RhdGVbU10gfTtcblxuICAgIHByb3BzIDogeyBbUCBpbiBrZXlvZiBQcm9wc10gOiBQcm9wc1tQXSB9O1xuXG4gICAgbWV0aG9kcyA6IHsgW00gaW4ga2V5b2YgTWV0aG9kc10gOiBNZXRob2RzW01dIH0gPSB7fSBhcyB7IFtNIGluIGtleW9mIE1ldGhvZHNdIDogTWV0aG9kc1tNXSB9O1xuXG4gICAgJG9wdGlvbnMgOiBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+ID0ge30gYXMgVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPlxuICAgIFxuICAgICRlbWl0dGVyPyA6IFNlbnNlbkVtaXR0ZXI7XG5cbiAgICAka2xhc3M/IDogQ3VzdG9tRWxlbWVudENvbnN0cnVjdG9yO1xuICAgIFxuICAgIGlzUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgI2h5ZHJhdGVzPyA6IENvbXBvbmVudEh5ZHJhdGVzPFN0YXRlLCBQcm9wcywgTWV0aG9kcz47XG4gICAgXG4gICAgI211dGF0aW9uT2JzZXJ2ZXI/IDogTXV0YXRpb25PYnNlcnZlcjtcblxuICAgICNtdXRhdGlvbk9ic2VydmVkPyA6IE11dGF0aW9uUmVjb3JkW107XG5cblxuICAgIHRlbXBsYXRlPzogc3RyaW5nO1xuXG5cbiAgICAjcGVuZGluZzogbnVtYmVyID0gMDtcblxuICAgICNjb21wbGV0ZWQ6IG51bWJlciA9IDA7XG4gICAgXG5cblxuICAgIC8qKlxuICAgICAqIE5ldyBDb25zdHJ1Y3RcbiAgICAgKi9cbiAgICAgY29uc3RydWN0b3Iob3B0aW9uczogVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPil7XG5cbiAgICAgICAgdGhpcy4kb3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9ICh0aGlzLiRvcHRpb25zLnN0YXRlfHx7fSkgYXMgU3RhdGVcblxuICAgICAgICB0aGlzLnByb3BzID0gKHRoaXMuJG9wdGlvbnMucHJvcHN8fHt9KSBhcyBQcm9wc1xuXG4gICAgICAgIHRoaXMubWV0aG9kcyA9ICh0aGlzLiRvcHRpb25zLm1ldGhvZHN8fHt9KSBhcyBNZXRob2RzXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlciA9IG5ldyBTZW5zZW5FbWl0dGVyKCk7XG5cbiAgICAgICAgdGhpcy4jaHlkcmF0ZXMgPSBuZXcgQ29tcG9uZW50SHlkcmF0ZXM8U3RhdGUsIFByb3BzLCBNZXRob2RzPih0aGlzKVxuXG5cbiAgICAgICAgdGhpc1xuICAgICAgICAgXG4gICAgICAgICAgICAuI2NhbW91ZmxhZ2UoKVxuXG4gICAgICAgICAgICAuJGVtaXR0aW5nKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLiRpbml0aWFsaXplKClcblxuICAgICAgICAgICAgLiR0ZW1wbGF0ZSgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnRoZW4odHBsPT57XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHRwbCl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdHBsO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudC5pbm5lckhUTUwgPSB0cGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpc1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLiRvYnNlcnZlcnMoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuJGNvbXBpbGF0ZSgpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICA7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIHNldCBUZW1wbGF0ZVxuICAgICAqL1xuICAgICR0ZW1wbGF0ZSgpe1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+KChyZXNvbHZlLCByZWplY3QpPT57XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHRlbXBsYXRlJywgdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSlcblxuXG4gICAgICAgICAgICBpZih0eXBlb2YgdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSAhPSAnc3RyaW5nJyl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoJ2lubmVySFRNTCcgaW4gdGhpcy4kb3B0aW9ucy5lbGVtZW50KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLiRvcHRpb25zLmVsZW1lbnQuaW5uZXJIVE1MKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLiRvcHRpb25zLnRlbXBsYXRlLm1hdGNoKC88XFwvP1tePl0rPi9naSk7XG5cblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycsIGNoZWNrKVxuICAgIFxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgVGVtcGxhdGUgaXMgU3RyaW5nIEhUTUwgY29kZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmKGNoZWNrKXsgcmVzb2x2ZSh0aGlzLiRvcHRpb25zLnRlbXBsYXRlKTsgcmV0dXJuOyB9XG5cblxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRWxzZSwgaXQncyBmaWxlIHBhdGhcbiAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZilcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSBgLiR7ICh1cmwucGF0aG5hbWUgPT0gJy8nKSA/ICcnIDogdXJsLnBhdGhuYW1lIH0vJHsgdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSB9YFxuXG5cbiAgICAgICAgICAgICAgICBmZXRjaChwYXRoKS50aGVuKGQ9PnsgaWYoZC5zdGF0dXMgPT0gNDA0KXsgcmV0dXJuIHVuZGVmaW5lZCB9IHJldHVybiBkLnRleHQoKSB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGE9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NoZWNrdXAnLCBkYXRhIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNleyByZXNvbHZlKHVuZGVmaW5lZCk7IH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcj0+eyByZXNvbHZlKHVuZGVmaW5lZCk7IH0pXG5cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcblxuXG5cbiAgICAvKipcbiAgICAgKiBDYW1vdWZsYWdlXG4gICAgICovXG4gICAgI2NhbW91ZmxhZ2UoKXtcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdzdGFydCcsICgpPT57XG5cbiAgICAgICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdyZWFkeScsICgpPT57XG5cbiAgICAgICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplXG4gICAgICovXG5cbiAgICAkaW5pdGlhbGl6ZSgpe1xuXG4gICAgICAgIHRoaXMuJGluaXRpYWxpemVFbGVtZW50KCk7XG5cbiAgICAgICAgLy8gaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgIC8vICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdzdGFydCcsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgJGluaXRpYWxpemVFbGVtZW50KHByb3BzPzogVENvbXBvbmVudE9wdGlvbnM8U3RhdGUsIFByb3BzLCBNZXRob2RzPil7XG5cbiAgICAgICAgY29uc3QgJHByb3BzID0gcHJvcHMgfHwgdGhpcy4kb3B0aW9ucyB8fCBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgaWYoJHByb3BzKXtcblxuICAgICAgICAgICAgdGhpcy4kdGFnTmFtZSA9IGBzbi0keyAkcHJvcHMubmFtZSB9YFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRmluZCBjdXJyZW50IEVsZW1lbnQgc2VudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuJG9wdGlvbnMuZWxlbWVudCA9PSAnc3RyaW5nJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHsgdGhpcy4kb3B0aW9ucy5lbGVtZW50IH1gKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWZpbmUgY3VzdG9tIEVsZW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYoIWN1c3RvbUVsZW1lbnRzLmdldCh0aGlzLiR0YWdOYW1lKSl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcyA9IGNsYXNzIGV4dGVuZHMgU2Vuc2VuSFRNTEVsZW1lbnQ8UHJvcHM+e1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcyl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2NvbnN0cnVjdCcsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2sgPSAoKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Nvbm5lY3RlZCcsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHRoaXMuJGtsYXNzLnByb3RvdHlwZS5hZG9wdGVkQ2FsbGJhY2sgPSAoKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Fkb3B0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Rpc2Nvbm5lY3RlZCcsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIHRoaXMuJGtsYXNzLnByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSAobmFtZTogc3RyaW5nLCB2YWx1ZTpzdHJpbmcsIG9sZFZhbHVlOnN0cmluZyk9PntcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCduUHJvcHNDaGFuZ2VkJywgeyBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuJGtsYXNzLCAnb2JzZXJ2ZWRBdHRyaWJ1dGVzJywge1xuXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2Ygc2VsZi5wcm9wcyA9PSAnb2JqZWN0JykgPyBPYmplY3Qua2V5cyhzZWxmLnByb3BzKSA6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRoaXMuJHRhZ05hbWUsIHRoaXMuJGtsYXNzIClcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnaXMnLCBgJHsgdGhpcy4kdGFnTmFtZSB9YClcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAkeyB0aGlzLiR0YWdOYW1lIH1gKVxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2VsZW1lbnRSZWFkeScsIHRoaXMpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBET00gT2JzZXJ2ZXJcbiAgICAgKi9cbiAgICAkb2JzZXJ2ZXJzKCl7XG5cblxuICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuI211dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3Jkcyk9PntcblxuICAgICAgICAgICAgICAgIGlmKHJlY29yZHMpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI211dGF0aW9uT2JzZXJ2ZWQgPSByZWNvcmRzXG5cbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKHJlY29yZD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZWNvcmQudHlwZSA9PSAnYXR0cmlidXRlcycpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVjb3JkLmF0dHJpYnV0ZU5hbWUgJiYgdGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlY29yZC5hdHRyaWJ1dGVOYW1lIGluIHRoaXMucHJvcHMpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByZWNvcmQuYXR0cmlidXRlTmFtZSBhcyBrZXlvZiB0eXBlb2YgdGhpcy5wcm9wc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuJG9wdGlvbnMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocmVjb3JkLmF0dHJpYnV0ZU5hbWUpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbIGtleSBdID0gdmFsdWVcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncHJvcHNDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5hdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiByZWNvcmQub2xkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbk9ic2VydmVkJywgcmVjb3JkKTtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25zT2JzZXJ2ZWQnLCByZWNvcmRzKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICB0aGlzLiNtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGhpcy4kb3B0aW9ucy5lbGVtZW50LHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBPYmplY3Qua2V5cyh0aGlzLnByb3BzKVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbk9ic2VydmF0aW9uUmVhZHknLCB0aGlzLiNtdXRhdGlvbk9ic2VydmVyKTtcblxuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuXG5cblxuXG5cbiAgICBoeWRyYXRlc1N0YXRlKHNsb3Q6IGtleW9mIFN0YXRlKXtcblxuICAgICAgICBjb25zdCBzdG9yZSA9IHRoaXMuI2h5ZHJhdGVzPy4kc3RhdGUucmV0cmlldmUoIHNsb3QgKVxuXG4gICAgICAgIFxuICAgICAgICBpZihzdG9yZT8ubGVuZ3RoKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3RvcmUubWFwKHJlY29yZD0+e1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuI2h5ZHJhdGVzPy5oeWRyYXRlc1JlY29yZChyZWNvcmQpXG5cbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpPT57XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3N0YXRlSHlkcmF0ZWQnLCB7cmVjb3JkLCBkYXRhfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICogQ29tcGlsYXRlIHRyYW5zYWN0aW9uc1xuICAgICAqL1xuICAgICRjb21waWxhdGUoKXtcblxuICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgIEZpbmRFeHByZXNzaW9ucyh0aGlzLiRvcHRpb25zLmVsZW1lbnQsIChyZWNvcmQpPT57XG5cbiAgICAgICAgICAgICAgICB0aGlzLiNwZW5kaW5nKys7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBTdGF0ZSB0byBhdXRvLWNvbXBpbGF0ZVxuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHRoaXMuc3RhdGUgPT0gJ29iamVjdCcpe1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNNYXRjaGVzID0gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGAoJHsgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuam9pbignfCcpIH0pYCwgJ2cnKSksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLih2YWx1ZXx8JycpLm1hdGNoQWxsKG5ldyBSZWdFeHAoYHRoaXNcXFxcLnN0YXRlXFxcXC4oJHsgT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuam9pbignKXx0aGlzXFxcXC5zdGF0ZVxcXFwuKCcpIH0pYCwgJ2cnKSksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLih2YWx1ZXx8JycpLm1hdGNoQWxsKG5ldyBSZWdFeHAoYHRoaXNcXFxcLnByb3BzXFxcXC4keyBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5qb2luKCd8dGhpc1xcXFwucHJvcHNcXFxcLicpIH1gLCAnZycpKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoc01hdGNoZXMubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc01hdGNoZXMubWFwKG1hdGNoPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlY29yZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1cmdlID0gbWF0Y2guZmlsdGVyKHY9PnYhPXVuZGVmaW5lZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBwdXJnZVsxXSBhcyBrZXlvZiBTdGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmdlLmlucHV0ID0gbWF0Y2guaW5wdXRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZENsb25lLm1hdGNoID0gcHVyZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNoeWRyYXRlcz8uJHN0YXRlLnB1c2goc2xvdCwgcmVjb3JkQ2xvbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdleHByZXNzaW9uRGV0ZWN0ZWQnLCByZWNvcmQpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH1cblxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb21waWxhdGlvblJlYWR5JywgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuXG5cbiAgICAjY2hlY2tDb21waWxhdGVkRG9uZShsb3Q6IChFeHByZXNzaW9uUmVjb3JkIHwgdW5kZWZpbmVkKVtdKXtcblxuICAgICAgICBpZih0aGlzLiNwZW5kaW5nID09IHRoaXMuI2NvbXBsZXRlZCl7XG4gICAgXG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29tcGlsYXRlZCcsIGxvdCk7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmlzUmVhZHkpeyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3JlYWR5JywgdGhpcyk7XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21waWxhdGUgRG9uZScsIGxvdClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICogRW1pdHRpbmdcbiAgICAgKi9cbiAgICAkZW1pdHRpbmcoKXtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbCA6IEJlZ2luXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3Rlbjx0eXBlb2YgdGhpcz4oJ2VsZW1lbnRSZWFkeScsIChhcmdzKT0+e1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0NyZWF0ZSBFbGVtZW50IE1vZGVsJywgYXJncylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2RlbCA6IEVuZFxuICAgICAgICAgKi9cblxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11dGF0aW9ucyBPYnNlcnZlcnMgOiBCZWdpblxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48TXV0YXRpb25PYnNlcnZlcj4oJ211dGF0aW9uT2JzZXJ2YXRpb25SZWFkeScsIChhcmdzKT0+e1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ011dGF0aW9uIE9ic2VydmVkJywgYXJncylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbjxNdXRhdGlvblJlY29yZD4oJ211dGF0aW9uT2JzZXJ2ZWQnLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbiBPYnNlcnZlZCcsIGFyZ3MpXG5cbiAgICAgICAgICAgIGlmKGFyZ3MuZW1pdC50YXJnZXQpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaHlkcmF0ZXM/Lmh5ZHJhdGVzTm9kZShhcmdzLmVtaXQudGFyZ2V0KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignbXV0YXRpb25zT2JzZXJ2ZWQnLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbnMgT2JzZXJ2ZWQnLCBhcmdzKVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11dGF0aW9ucyBPYnNlcnZlcnMgOiBFbmRcbiAgICAgICAgICovXG5cblxuXG5cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxhdGUgUmVjb3JkIDogQmVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPEV4cHJlc3Npb25SZWNvcmQ+KCdleHByZXNzaW9uRGV0ZWN0ZWQnLCAoJCk9PntcblxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZWQ6IChQcm9taXNlPEV4cHJlc3Npb25SZWNvcmQ+IHwgdW5kZWZpbmVkKVtdID0gW11cblxuXG4gICAgICAgICAgICBpZigkLmVtaXQpe1xuXG4gICAgICAgICAgICAgICAgaWYoJC5lbWl0LnR5cGUgPT0gJ2VjaG8nKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZUVjaG8odGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdzbmFwY29kZScpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlU25hcENvZGUodGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdhdHRyaWJ1dGUuZWNobycpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlRWNob0F0dHJpYnV0ZXModGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdhdHRyaWJ1dGUuc25hcGNvZGUnKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZVNuYXBDb2RlQXR0cmlidXRlcyh0aGlzLCAkLmVtaXQpKVxuICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYoJC5lbWl0LnR5cGUgPT0gJ2RpcmVjdGl2ZScpe1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlPEV4cHJlc3Npb25SZWNvcmQ+KChyLGopPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighKCdkaXJlY3RpdmUnIGluICQuZW1pdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoYENvcnJ1cHRlZCBkaXJlY3RpdmUgOiBub3QgZm91bmRgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgJC5lbWl0LmRpcmVjdGl2ZT8ubWFpbiAhPSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBDb3JydXB0ZWQgZGlyZWN0aXZlIDogPCAkeyAkLmVtaXQuZGlyZWN0aXZlPy5uYW1lIH0gPmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLmVtaXQuZGlyZWN0aXZlLm1haW4odGhpcywgJC5lbWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcigkLmVtaXQpXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmKHByb21pc2VkLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlZClcblxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb3Q9PntcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNjb21wbGV0ZWQrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDb21waWxhdGVkJywgbG90KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNjaGVja0NvbXBpbGF0ZWREb25lKGxvdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdjb21waWxhdGUnLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdFeHByZXNzaW9uIFJlY29yZGVkJywgYXJncy5lbWl0KVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlIFJlY29yZCA6IEVuZFxuICAgICAgICAgKi9cblxuXG5cblxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBFbWl0dGVyIExpc3RlbmVyIDogQmVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbWl0KXtcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy4kb3B0aW9ucy5lbWl0KS5tYXAoZT0+e1xuXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGVbMV0gPT0gJ2Z1bmN0aW9uJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKGVbMF0sIGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBlWzFdLmFwcGx5KHRoaXMsIFthcmd1bWVudHNbMF1dKSBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gRW1pdHRlciBMaXN0ZW5lciA6IEVuZFxuICAgICAgICAgKi9cblxuXG5cblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIFxuICAgIFxuICAgIFxuXG5cbn1cblxuXG5cblxuXG4vKipcbiAqIEV4cG9ydGF0aW9uc1xuICovXG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5zZW4ge1xuXG4gICAgc3RhdGljIENvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICAgIHN0YXRpYyBTY3JlZW4gPSBTZW5zZW5TY3JlZW47XG4gICAgXG59XG5cblxuIl19

/***/ }),

/***/ "./lib/utilities.js":
/*!**************************!*\
  !*** ./lib/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StabilizeContent": () => (/* binding */ StabilizeContent),
/* harmony export */   "ArrayRange": () => (/* binding */ ArrayRange),
/* harmony export */   "decodeHTMLEntities": () => (/* binding */ decodeHTMLEntities),
/* harmony export */   "encodeHTMLEntities": () => (/* binding */ encodeHTMLEntities)
/* harmony export */ });
/**
 * Utilities
 */
/**
 * Content Statibilzation
 */
function StabilizeContent(content) {
    return (content || '').replace(/&gt;/g, `>`).replace(/&lt;/g, `<`);
}
/**
 * Array Refactor from key to key
 */
function ArrayRange(args, from, to) {
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
function decodeHTMLEntities(input) {
    const tmp = document.createElement('textarea');
    tmp.innerHTML = input;
    return tmp.value;
}
function encodeHTMLEntities(input) {
    const tmp = document.createElement('textarea');
    tmp.innerText = input;
    return tmp.innerHTML;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29yZS91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0dBRUc7QUFRSDs7R0FFRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxPQUFlO0lBRTVDLE9BQU8sQ0FBQyxPQUFPLElBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXJFLENBQUM7QUFNRDs7R0FFRztBQUNGLE1BQU0sVUFBVSxVQUFVLENBQUksSUFBUSxFQUFFLElBQWEsRUFBRSxFQUFXO0lBRS9ELE1BQU0sR0FBRyxHQUFTLEVBQUUsQ0FBQTtJQUVwQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUVqQixFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7SUFHdkIsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRTNCLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBR3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUM7S0FBRTtJQUVuRSxPQUFPLEdBQUcsQ0FBQztBQUVmLENBQUM7QUFPRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYTtJQUU1QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBRTlDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBRXRCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQTtBQUVwQixDQUFDO0FBS0QsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWE7SUFFNUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUU5QyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUV0QixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUE7QUFFeEIsQ0FBQztBQUtEOztHQUVHO0FBQ0gsNEVBQTRFO0FBRTVFLDhCQUE4QjtBQUU5QixVQUFVO0FBQ1Ysc0VBQXNFO0FBQ3RFLFVBQVU7QUFFViw2RUFBNkU7QUFDN0UsMERBQTBEO0FBQzFELG9DQUFvQztBQUNwQyx5REFBeUQ7QUFDekQsd0RBQXdEO0FBQ3hELHdFQUF3RTtBQUN4RSw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUIsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixRQUFRO0FBR1IsK0JBQStCO0FBQy9CLHdDQUF3QztBQUN4QyxtQkFBbUI7QUFDbkIsK0NBQStDO0FBQy9DLHNDQUFzQztBQUN0QyxZQUFZO0FBQ1osd0NBQXdDO0FBQ3hDLHVDQUF1QztBQUN2QywrREFBK0Q7QUFDL0QsNkRBQTZEO0FBQzdELDZEQUE2RDtBQUM3RCxvQ0FBb0M7QUFDcEMsNERBQTREO0FBQzVELDZDQUE2QztBQUM3QyxvREFBb0Q7QUFDcEQsOERBQThEO0FBQzlELHdEQUF3RDtBQUN4RCwyQ0FBMkM7QUFDM0MsNEVBQTRFO0FBQzVFLGdKQUFnSjtBQUNoSiw2REFBNkQ7QUFDN0QsZ0NBQWdDO0FBQ2hDLHlEQUF5RDtBQUN6RCxrTEFBa0w7QUFDbEwsMEVBQTBFO0FBQzFFLGdDQUFnQztBQUNoQyx1REFBdUQ7QUFDdkQsOEVBQThFO0FBQzlFLDBFQUEwRTtBQUMxRSx5RUFBeUU7QUFDekUsa0NBQWtDO0FBQ2xDLCtEQUErRDtBQUMvRCxrREFBa0Q7QUFDbEQsNEJBQTRCO0FBQzVCLG9DQUFvQztBQUNwQywwQkFBMEI7QUFDMUIsNENBQTRDO0FBQzVDLHFCQUFxQjtBQUNyQiw2RkFBNkY7QUFDN0Ysb0NBQW9DO0FBQ3BDLDZEQUE2RDtBQUM3RCw2Q0FBNkM7QUFDN0Msb0RBQW9EO0FBQ3BELDhEQUE4RDtBQUM5RCx3REFBd0Q7QUFDeEQsa0ZBQWtGO0FBQ2xGLDZEQUE2RDtBQUM3RCxrRkFBa0Y7QUFDbEYsaUZBQWlGO0FBQ2pGLHlHQUF5RztBQUN6RyxvQ0FBb0M7QUFDcEMsbUVBQW1FO0FBQ25FLGdDQUFnQztBQUNoQyxrREFBa0Q7QUFDbEQsNEJBQTRCO0FBQzVCLG9DQUFvQztBQUNwQywwQkFBMEI7QUFDMUIsNENBQTRDO0FBQzVDLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLDRDQUE0QztBQUM1QyxzQ0FBc0M7QUFDdEMsWUFBWTtBQUNaLHdCQUF3QjtBQUN4QixRQUFRO0FBRVIsbUJBQW1CO0FBRW5CLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogVXRpbGl0aWVzXG4gKi9cblxuXG5cblxuXG5cblxuLyoqXG4gKiBDb250ZW50IFN0YXRpYmlsemF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGFiaWxpemVDb250ZW50KGNvbnRlbnQ6IHN0cmluZykgOiBzdHJpbmd7XG5cbiAgICByZXR1cm4gKGNvbnRlbnR8fCcnKS5yZXBsYWNlKC8mZ3Q7L2csIGA+YCkucmVwbGFjZSgvJmx0Oy9nLCBgPGApO1xuXG59XG5cblxuXG5cblxuLyoqXG4gKiBBcnJheSBSZWZhY3RvciBmcm9tIGtleSB0byBrZXlcbiAqL1xuIGV4cG9ydCBmdW5jdGlvbiBBcnJheVJhbmdlPFQ+KGFyZ3M6VFtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcil7XG5cbiAgICBjb25zdCBvdXQgOiBUW10gPSBbXVxuXG4gICAgZnJvbSA9IGZyb20gfHwgMDtcbiAgICBcbiAgICB0byA9IHRvIHx8IGFyZ3MubGVuZ3RoO1xuXG5cbiAgICBmcm9tID0gZnJvbSA8IDAgPyAwIDogZnJvbTtcblxuICAgIHRvID0gdG8gPiBhcmdzLmxlbmd0aCA/IGFyZ3MubGVuZ3RoIDogdG87XG5cblxuICAgIGZvciAobGV0IHggPSAoZnJvbSk7IHggPCBhcmdzLmxlbmd0aDsgeCsrKSB7IG91dC5wdXNoKCBhcmdzW3hdICk7IH1cbiAgICBcbiAgICByZXR1cm4gb3V0O1xuICAgIFxufVxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUhUTUxFbnRpdGllcyhpbnB1dDogc3RyaW5nKXtcblxuICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcblxuICAgIHRtcC5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICBcbiAgICByZXR1cm4gdG1wLnZhbHVlXG4gICAgXG59XG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MRW50aXRpZXMoaW5wdXQ6IHN0cmluZyl7XG5cbiAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG5cbiAgICB0bXAuaW5uZXJUZXh0ID0gaW5wdXQ7XG4gICAgXG4gICAgcmV0dXJuIHRtcC5pbm5lckhUTUxcblxufVxuXG5cblxuXG4vKipcbiAqIEZpeCBKU09OXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBKU09OU2FmZVBhcnNlPFQgZXh0ZW5kcyBvYmplY3Q+KGpzb246IHN0cmluZykgOiBUIHwgbnVsbHtcblxuLy8gICAgIGxldCBmaXhlZCA6IFQgPSB7fSBhcyBUXG5cbi8vICAgICAvKipcbi8vICAgICAgKiBAU29sdXRpb24gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTkzMjk0OTUvMTgwNTk0MTFcbi8vICAgICAgKi9cblxuLy8gICAgIGZ1bmN0aW9uIGJ1bGtSZWdleChzdHI6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uIHwgQXJyYXk8RnVuY3Rpb24+KXtcbi8vICAgICAgICAgaWYoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKXtcbi8vICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhzdHIpO1xuLy8gICAgICAgICB9ZWxzZSBpZihjYWxsYmFjayAmJiBBcnJheS5pc0FycmF5KGNhbGxiYWNrKSl7XG4vLyAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2subGVuZ3RoOyBpKyspe1xuLy8gICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrW2ldICYmIHR5cGVvZiBjYWxsYmFja1tpXSA9PT0gJ2Z1bmN0aW9uJyl7XG4vLyAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGNhbGxiYWNrW2ldKHN0cik7XG4vLyAgICAgICAgICAgICAgICAgfWVsc2V7YnJlYWs7fVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0cjtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gc3RyO1xuLy8gICAgIH1cblxuXG4vLyAgICAgaWYoanNvbiAmJiBqc29uICE9PSAnJyl7XG4vLyAgICAgICAgIGlmKHR5cGVvZiBqc29uICE9PSAnc3RyaW5nJyl7XG4vLyAgICAgICAgICAgICB0cnl7XG4vLyAgICAgICAgICAgICAgICAganNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe3JldHVybiBudWxsO31cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZih0eXBlb2YganNvbiA9PT0gJ3N0cmluZycpe1xuLy8gICAgICAgICAgICAganNvbiA9IGJ1bGtSZWdleChqc29uLCBbXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9bXFxuXFx0XS9nbSwgJycpLFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvLFxcfS9nbSwgJ30nKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyxcXF0vZ20sICddJyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGFzdHIgPSBzdHIuc3BsaXQoLyg/PVssXFx9XFxdXSkvZyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFzdHIgPSBhc3RyLm1hcChzID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuaW5jbHVkZXMoJzonKSAmJiBzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyUCA9IHMuc3BsaXQoLzooLispLywgMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFswXSA9IHN0clBbMF0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0clBbMF0pe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RQID0gc3RyUFswXS5zcGxpdCgvKFssXFx7XFxbXSkvZyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UFtmaXJzdFAubGVuZ3RoLTFdID0gYnVsa1JlZ2V4KGZpcnN0UFtmaXJzdFAubGVuZ3RoLTFdLCAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvW15BLVphLXowLTlcXC1fXS8sICcnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBmaXJzdFAuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gc3RyUFsxXS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoKHBhcnQuc3RhcnRzV2l0aCgnXCInKSAmJiBwYXJ0LmVuZHNXaXRoKCdcIicpKSB8fCAocGFydC5zdGFydHNXaXRoKCdcXCcnKSAmJiBwYXJ0LmVuZHNXaXRoKCdcXCcnKSkgfHwgKHBhcnQuc3RhcnRzV2l0aCgnYCcpICYmIHBhcnQuZW5kc1dpdGgoJ2AnKSkpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydC5zdWJzdHIoMSwgcGFydC5sZW5ndGggLSAyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IGJ1bGtSZWdleChwYXJ0LCBbXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC8oW1wiXSkvZ20sICdcXFxcJDEnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHA6c3RyaW5nKSA9PiBwLnJlcGxhY2UoL1xcXFwnL2dtLCAnXFwnJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC9cXFxcYC9nbSwgJ2AnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzFdID0gKCdcIicrcGFydCsnXCInKS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHN0clAuam9pbignOicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXN0ci5qb2luKCcnKTtcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvKFsnXCJdKT8oW2EtekEtWjAtOVxcLV9dKykoWydcIl0pPzovZywgJ1wiJDJcIjonKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgYXN0ciA9IHN0ci5zcGxpdCgvKD89WyxcXH1cXF1dKS9naSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFzdHIgPSBhc3RyLm1hcChzID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuaW5jbHVkZXMoJzonKSAmJiBzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyUCA9IHMuc3BsaXQoLzooLispLywgMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFswXSA9IHN0clBbMF0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0clBbMV0uaW5jbHVkZXMoJ1wiJykgJiYgc3RyUFsxXS5pbmNsdWRlcygnOicpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnQgPSBzdHJQWzFdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFydC5zdGFydHNXaXRoKCdcIicpICYmIHBhcnQuZW5kc1dpdGgoJ1wiJykpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3Vic3RyaW5nKDEsIHBhcnQubGVuZ3RoIC0gMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gYnVsa1JlZ2V4KHBhcnQsIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC8oPzwhXFxcXClcIi9nbSwgJycpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzFdID0gKCdcIicrcGFydCsnXCInKS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzdHJQLmpvaW4oJzonKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzdHIuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIF0pO1xuLy8gICAgICAgICAgICAgdHJ5e1xuLy8gICAgICAgICAgICAgICAgIGZpeGVkID0gSlNPTi5wYXJzZShqc29uKTtcbi8vICAgICAgICAgICAgIH1jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGZpeGVkO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBudWxsO1xuXG4vLyB9Il19

/***/ }),

/***/ "./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/lib/ejs.js":
/*!******************************************************************!*\
  !*** ./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/lib/ejs.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/



/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */

/**
 * EJS internal functions.
 *
 * Technically this "module" lies in the same file as {@link module:ejs}, for
 * the sake of organization all the private functions re grouped into this
 * module.
 *
 * @module ejs-internal
 * @private
 */

/**
 * Embedded JavaScript templating engine.
 *
 * @module ejs
 * @public
 */

var fs = __webpack_require__(/*! fs */ "?c581");
var path = __webpack_require__(/*! path */ "?85ac");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/lib/utils.js");

var scopeOptionWarned = false;
/** @type {string} */
var _VERSION_STRING = (__webpack_require__(/*! ../package.json */ "./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/package.json").version);
var _DEFAULT_OPEN_DELIMITER = '<';
var _DEFAULT_CLOSE_DELIMITER = '>';
var _DEFAULT_DELIMITER = '%';
var _DEFAULT_LOCALS_NAME = 'locals';
var _NAME = 'ejs';
var _REGEX_STRING = '(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)';
var _OPTS_PASSABLE_WITH_DATA = ['delimiter', 'scope', 'context', 'debug', 'compileDebug',
  'client', '_with', 'rmWhitespace', 'strict', 'filename', 'async'];
// We don't allow 'cache' option to be passed in the data obj for
// the normal `render` call, but this is where Express 2 & 3 put it
// so we make an exception for `renderFile`
var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat('cache');
var _BOM = /^\uFEFF/;

/**
 * EJS template function cache. This can be a LRU object from lru-cache NPM
 * module. By default, it is {@link module:utils.cache}, a simple in-process
 * cache that grows continuously.
 *
 * @type {Cache}
 */

exports.cache = utils.cache;

/**
 * Custom file loader. Useful for template preprocessing or restricting access
 * to a certain part of the filesystem.
 *
 * @type {fileLoader}
 */

exports.fileLoader = fs.readFileSync;

/**
 * Name of the object containing the locals.
 *
 * This variable is overridden by {@link Options}`.localsName` if it is not
 * `undefined`.
 *
 * @type {String}
 * @public
 */

exports.localsName = _DEFAULT_LOCALS_NAME;

/**
 * Promise implementation -- defaults to the native implementation if available
 * This is mostly just for testability
 *
 * @type {PromiseConstructorLike}
 * @public
 */

exports.promiseImpl = (new Function('return this;'))().Promise;

/**
 * Get the path to the included file from the parent file path and the
 * specified path.
 *
 * @param {String}  name     specified path
 * @param {String}  filename parent file path
 * @param {Boolean} [isDir=false] whether the parent file path is a directory
 * @return {String}
 */
exports.resolveInclude = function(name, filename, isDir) {
  var dirname = path.dirname;
  var extname = path.extname;
  var resolve = path.resolve;
  var includePath = resolve(isDir ? filename : dirname(filename), name);
  var ext = extname(name);
  if (!ext) {
    includePath += '.ejs';
  }
  return includePath;
};

/**
 * Try to resolve file path on multiple directories
 *
 * @param  {String}        name  specified path
 * @param  {Array<String>} paths list of possible parent directory paths
 * @return {String}
 */
function resolvePaths(name, paths) {
  var filePath;
  if (paths.some(function (v) {
    filePath = exports.resolveInclude(name, v, true);
    return fs.existsSync(filePath);
  })) {
    return filePath;
  }
}

/**
 * Get the path to the included file by Options
 *
 * @param  {String}  path    specified path
 * @param  {Options} options compilation options
 * @return {String}
 */
function getIncludePath(path, options) {
  var includePath;
  var filePath;
  var views = options.views;
  var match = /^[A-Za-z]+:\\|^\//.exec(path);

  // Abs path
  if (match && match.length) {
    path = path.replace(/^\/*/, '');
    if (Array.isArray(options.root)) {
      includePath = resolvePaths(path, options.root);
    } else {
      includePath = exports.resolveInclude(path, options.root || '/', true);
    }
  }
  // Relative paths
  else {
    // Look relative to a passed filename first
    if (options.filename) {
      filePath = exports.resolveInclude(path, options.filename);
      if (fs.existsSync(filePath)) {
        includePath = filePath;
      }
    }
    // Then look in any views directories
    if (!includePath && Array.isArray(views)) {
      includePath = resolvePaths(path, views);
    }
    if (!includePath && typeof options.includer !== 'function') {
      throw new Error('Could not find the include file "' +
          options.escapeFunction(path) + '"');
    }
  }
  return includePath;
}

/**
 * Get the template from a string or a file, either compiled on-the-fly or
 * read from cache (if enabled), and cache the template if needed.
 *
 * If `template` is not set, the file specified in `options.filename` will be
 * read.
 *
 * If `options.cache` is true, this function reads the file from
 * `options.filename` so it must be set prior to calling this function.
 *
 * @memberof module:ejs-internal
 * @param {Options} options   compilation options
 * @param {String} [template] template source
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned.
 * @static
 */

function handleCache(options, template) {
  var func;
  var filename = options.filename;
  var hasTemplate = arguments.length > 1;

  if (options.cache) {
    if (!filename) {
      throw new Error('cache option requires a filename');
    }
    func = exports.cache.get(filename);
    if (func) {
      return func;
    }
    if (!hasTemplate) {
      template = fileLoader(filename).toString().replace(_BOM, '');
    }
  }
  else if (!hasTemplate) {
    // istanbul ignore if: should not happen at all
    if (!filename) {
      throw new Error('Internal EJS error: no file name or template '
                    + 'provided');
    }
    template = fileLoader(filename).toString().replace(_BOM, '');
  }
  func = exports.compile(template, options);
  if (options.cache) {
    exports.cache.set(filename, func);
  }
  return func;
}

/**
 * Try calling handleCache with the given options and data and call the
 * callback with the result. If an error occurs, call the callback with
 * the error. Used by renderFile().
 *
 * @memberof module:ejs-internal
 * @param {Options} options    compilation options
 * @param {Object} data        template data
 * @param {RenderFileCallback} cb callback
 * @static
 */

function tryHandleCache(options, data, cb) {
  var result;
  if (!cb) {
    if (typeof exports.promiseImpl == 'function') {
      return new exports.promiseImpl(function (resolve, reject) {
        try {
          result = handleCache(options)(data);
          resolve(result);
        }
        catch (err) {
          reject(err);
        }
      });
    }
    else {
      throw new Error('Please provide a callback function');
    }
  }
  else {
    try {
      result = handleCache(options)(data);
    }
    catch (err) {
      return cb(err);
    }

    cb(null, result);
  }
}

/**
 * fileLoader is independent
 *
 * @param {String} filePath ejs file path.
 * @return {String} The contents of the specified file.
 * @static
 */

function fileLoader(filePath){
  return exports.fileLoader(filePath);
}

/**
 * Get the template function.
 *
 * If `options.cache` is `true`, then the template is cached.
 *
 * @memberof module:ejs-internal
 * @param {String}  path    path for the specified file
 * @param {Options} options compilation options
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `options.client`, either type might be returned
 * @static
 */

function includeFile(path, options) {
  var opts = utils.shallowCopy({}, options);
  opts.filename = getIncludePath(path, opts);
  if (typeof options.includer === 'function') {
    var includerResult = options.includer(path, opts.filename);
    if (includerResult) {
      if (includerResult.filename) {
        opts.filename = includerResult.filename;
      }
      if (includerResult.template) {
        return handleCache(opts, includerResult.template);
      }
    }
  }
  return handleCache(opts);
}

/**
 * Re-throw the given `err` in context to the `str` of ejs, `filename`, and
 * `lineno`.
 *
 * @implements {RethrowCallback}
 * @memberof module:ejs-internal
 * @param {Error}  err      Error object
 * @param {String} str      EJS source
 * @param {String} flnm     file name of the EJS file
 * @param {Number} lineno   line number of the error
 * @param {EscapeCallback} esc
 * @static
 */

function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
}

function stripSemi(str){
  return str.replace(/;(\s*$)/, '$1');
}

/**
 * Compile the given `str` of ejs into a template function.
 *
 * @param {String}  template EJS template
 *
 * @param {Options} [opts] compilation options
 *
 * @return {(TemplateFunction|ClientFunction)}
 * Depending on the value of `opts.client`, either type might be returned.
 * Note that the return type of the function also depends on the value of `opts.async`.
 * @public
 */

exports.compile = function compile(template, opts) {
  var templ;

  // v1 compat
  // 'scope' is 'context'
  // FIXME: Remove this in a future version
  if (opts && opts.scope) {
    if (!scopeOptionWarned){
      console.warn('`scope` option is deprecated and will be removed in EJS 3');
      scopeOptionWarned = true;
    }
    if (!opts.context) {
      opts.context = opts.scope;
    }
    delete opts.scope;
  }
  templ = new Template(template, opts);
  return templ.compile();
};

/**
 * Render the given `template` of ejs.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}   template EJS template
 * @param {Object}  [data={}] template data
 * @param {Options} [opts={}] compilation and rendering options
 * @return {(String|Promise<String>)}
 * Return value type depends on `opts.async`.
 * @public
 */

exports.render = function (template, d, o) {
  var data = d || {};
  var opts = o || {};

  // No options object -- if there are optiony names
  // in the data, copy them to options
  if (arguments.length == 2) {
    utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
  }

  return handleCache(opts, template)(data);
};

/**
 * Render an EJS file at the given `path` and callback `cb(err, str)`.
 *
 * If you would like to include options but not data, you need to explicitly
 * call this function with `data` being an empty object or `null`.
 *
 * @param {String}             path     path to the EJS file
 * @param {Object}            [data={}] template data
 * @param {Options}           [opts={}] compilation and rendering options
 * @param {RenderFileCallback} cb callback
 * @public
 */

exports.renderFile = function () {
  var args = Array.prototype.slice.call(arguments);
  var filename = args.shift();
  var cb;
  var opts = {filename: filename};
  var data;
  var viewOpts;

  // Do we have a callback?
  if (typeof arguments[arguments.length - 1] == 'function') {
    cb = args.pop();
  }
  // Do we have data/opts?
  if (args.length) {
    // Should always have data obj
    data = args.shift();
    // Normal passed opts (data obj + opts obj)
    if (args.length) {
      // Use shallowCopy so we don't pollute passed in opts obj with new vals
      utils.shallowCopy(opts, args.pop());
    }
    // Special casing for Express (settings + opts-in-data)
    else {
      // Express 3 and 4
      if (data.settings) {
        // Pull a few things from known locations
        if (data.settings.views) {
          opts.views = data.settings.views;
        }
        if (data.settings['view cache']) {
          opts.cache = true;
        }
        // Undocumented after Express 2, but still usable, esp. for
        // items that are unsafe to be passed along with data, like `root`
        viewOpts = data.settings['view options'];
        if (viewOpts) {
          utils.shallowCopy(opts, viewOpts);
        }
      }
      // Express 2 and lower, values set in app.locals, or people who just
      // want to pass options in their data. NOTE: These values will override
      // anything previously set in settings  or settings['view options']
      utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
    }
    opts.filename = filename;
  }
  else {
    data = {};
  }

  return tryHandleCache(opts, data, cb);
};

/**
 * Clear intermediate JavaScript cache. Calls {@link Cache#reset}.
 * @public
 */

/**
 * EJS template class
 * @public
 */
exports.Template = Template;

exports.clearCache = function () {
  exports.cache.reset();
};

function Template(text, opts) {
  opts = opts || {};
  var options = {};
  this.templateText = text;
  /** @type {string | null} */
  this.mode = null;
  this.truncate = false;
  this.currentLine = 1;
  this.source = '';
  options.client = opts.client || false;
  options.escapeFunction = opts.escape || opts.escapeFunction || utils.escapeXML;
  options.compileDebug = opts.compileDebug !== false;
  options.debug = !!opts.debug;
  options.filename = opts.filename;
  options.openDelimiter = opts.openDelimiter || exports.openDelimiter || _DEFAULT_OPEN_DELIMITER;
  options.closeDelimiter = opts.closeDelimiter || exports.closeDelimiter || _DEFAULT_CLOSE_DELIMITER;
  options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
  options.strict = opts.strict || false;
  options.context = opts.context;
  options.cache = opts.cache || false;
  options.rmWhitespace = opts.rmWhitespace;
  options.root = opts.root;
  options.includer = opts.includer;
  options.outputFunctionName = opts.outputFunctionName;
  options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
  options.views = opts.views;
  options.async = opts.async;
  options.destructuredLocals = opts.destructuredLocals;
  options.legacyInclude = typeof opts.legacyInclude != 'undefined' ? !!opts.legacyInclude : true;

  if (options.strict) {
    options._with = false;
  }
  else {
    options._with = typeof opts._with != 'undefined' ? opts._with : true;
  }

  this.opts = options;

  this.regex = this.createRegex();
}

Template.modes = {
  EVAL: 'eval',
  ESCAPED: 'escaped',
  RAW: 'raw',
  COMMENT: 'comment',
  LITERAL: 'literal'
};

Template.prototype = {
  createRegex: function () {
    var str = _REGEX_STRING;
    var delim = utils.escapeRegExpChars(this.opts.delimiter);
    var open = utils.escapeRegExpChars(this.opts.openDelimiter);
    var close = utils.escapeRegExpChars(this.opts.closeDelimiter);
    str = str.replace(/%/g, delim)
      .replace(/</g, open)
      .replace(/>/g, close);
    return new RegExp(str);
  },

  compile: function () {
    /** @type {string} */
    var src;
    /** @type {ClientFunction} */
    var fn;
    var opts = this.opts;
    var prepended = '';
    var appended = '';
    /** @type {EscapeCallback} */
    var escapeFn = opts.escapeFunction;
    /** @type {FunctionConstructor} */
    var ctor;
    /** @type {string} */
    var sanitizedFilename = opts.filename ? JSON.stringify(opts.filename) : 'undefined';

    if (!this.source) {
      this.generateSource();
      prepended +=
        '  var __output = "";\n' +
        '  function __append(s) { if (s !== undefined && s !== null) __output += s }\n';
      if (opts.outputFunctionName) {
        prepended += '  var ' + opts.outputFunctionName + ' = __append;' + '\n';
      }
      if (opts.destructuredLocals && opts.destructuredLocals.length) {
        var destructuring = '  var __locals = (' + opts.localsName + ' || {}),\n';
        for (var i = 0; i < opts.destructuredLocals.length; i++) {
          var name = opts.destructuredLocals[i];
          if (i > 0) {
            destructuring += ',\n  ';
          }
          destructuring += name + ' = __locals.' + name;
        }
        prepended += destructuring + ';\n';
      }
      if (opts._with !== false) {
        prepended +=  '  with (' + opts.localsName + ' || {}) {' + '\n';
        appended += '  }' + '\n';
      }
      appended += '  return __output;' + '\n';
      this.source = prepended + this.source + appended;
    }

    if (opts.compileDebug) {
      src = 'var __line = 1' + '\n'
        + '  , __lines = ' + JSON.stringify(this.templateText) + '\n'
        + '  , __filename = ' + sanitizedFilename + ';' + '\n'
        + 'try {' + '\n'
        + this.source
        + '} catch (e) {' + '\n'
        + '  rethrow(e, __lines, __filename, __line, escapeFn);' + '\n'
        + '}' + '\n';
    }
    else {
      src = this.source;
    }

    if (opts.client) {
      src = 'escapeFn = escapeFn || ' + escapeFn.toString() + ';' + '\n' + src;
      if (opts.compileDebug) {
        src = 'rethrow = rethrow || ' + rethrow.toString() + ';' + '\n' + src;
      }
    }

    if (opts.strict) {
      src = '"use strict";\n' + src;
    }
    if (opts.debug) {
      console.log(src);
    }
    if (opts.compileDebug && opts.filename) {
      src = src + '\n'
        + '//# sourceURL=' + sanitizedFilename + '\n';
    }

    try {
      if (opts.async) {
        // Have to use generated function for this, since in envs without support,
        // it breaks in parsing
        try {
          ctor = (new Function('return (async function(){}).constructor;'))();
        }
        catch(e) {
          if (e instanceof SyntaxError) {
            throw new Error('This environment does not support async/await');
          }
          else {
            throw e;
          }
        }
      }
      else {
        ctor = Function;
      }
      fn = new ctor(opts.localsName + ', escapeFn, include, rethrow', src);
    }
    catch(e) {
      // istanbul ignore else
      if (e instanceof SyntaxError) {
        if (opts.filename) {
          e.message += ' in ' + opts.filename;
        }
        e.message += ' while compiling ejs\n\n';
        e.message += 'If the above error is not helpful, you may want to try EJS-Lint:\n';
        e.message += 'https://github.com/RyanZim/EJS-Lint';
        if (!opts.async) {
          e.message += '\n';
          e.message += 'Or, if you meant to create an async function, pass `async: true` as an option.';
        }
      }
      throw e;
    }

    // Return a callable function which will execute the function
    // created by the source-code, with the passed data as locals
    // Adds a local `include` function which allows full recursive include
    var returnedFn = opts.client ? fn : function anonymous(data) {
      var include = function (path, includeData) {
        var d = utils.shallowCopy({}, data);
        if (includeData) {
          d = utils.shallowCopy(d, includeData);
        }
        return includeFile(path, opts)(d);
      };
      return fn.apply(opts.context, [data || {}, escapeFn, include, rethrow]);
    };
    if (opts.filename && typeof Object.defineProperty === 'function') {
      var filename = opts.filename;
      var basename = path.basename(filename, path.extname(filename));
      try {
        Object.defineProperty(returnedFn, 'name', {
          value: basename,
          writable: false,
          enumerable: false,
          configurable: true
        });
      } catch (e) {/* ignore */}
    }
    return returnedFn;
  },

  generateSource: function () {
    var opts = this.opts;

    if (opts.rmWhitespace) {
      // Have to use two separate replace here as `^` and `$` operators don't
      // work well with `\r` and empty lines don't work well with the `m` flag.
      this.templateText =
        this.templateText.replace(/[\r\n]+/g, '\n').replace(/^\s+|\s+$/gm, '');
    }

    // Slurp spaces and tabs before <%_ and after _%>
    this.templateText =
      this.templateText.replace(/[ \t]*<%_/gm, '<%_').replace(/_%>[ \t]*/gm, '_%>');

    var self = this;
    var matches = this.parseTemplateText();
    var d = this.opts.delimiter;
    var o = this.opts.openDelimiter;
    var c = this.opts.closeDelimiter;

    if (matches && matches.length) {
      matches.forEach(function (line, index) {
        var closing;
        // If this is an opening tag, check for closing tags
        // FIXME: May end up with some false positives here
        // Better to store modes as k/v with openDelimiter + delimiter as key
        // Then this can simply check against the map
        if ( line.indexOf(o + d) === 0        // If it is a tag
          && line.indexOf(o + d + d) !== 0) { // and is not escaped
          closing = matches[index + 2];
          if (!(closing == d + c || closing == '-' + d + c || closing == '_' + d + c)) {
            throw new Error('Could not find matching close tag for "' + line + '".');
          }
        }
        self.scanLine(line);
      });
    }

  },

  parseTemplateText: function () {
    var str = this.templateText;
    var pat = this.regex;
    var result = pat.exec(str);
    var arr = [];
    var firstPos;

    while (result) {
      firstPos = result.index;

      if (firstPos !== 0) {
        arr.push(str.substring(0, firstPos));
        str = str.slice(firstPos);
      }

      arr.push(result[0]);
      str = str.slice(result[0].length);
      result = pat.exec(str);
    }

    if (str) {
      arr.push(str);
    }

    return arr;
  },

  _addOutput: function (line) {
    if (this.truncate) {
      // Only replace single leading linebreak in the line after
      // -%> tag -- this is the single, trailing linebreak
      // after the tag that the truncation mode replaces
      // Handle Win / Unix / old Mac linebreaks -- do the \r\n
      // combo first in the regex-or
      line = line.replace(/^(?:\r\n|\r|\n)/, '');
      this.truncate = false;
    }
    if (!line) {
      return line;
    }

    // Preserve literal slashes
    line = line.replace(/\\/g, '\\\\');

    // Convert linebreaks
    line = line.replace(/\n/g, '\\n');
    line = line.replace(/\r/g, '\\r');

    // Escape double-quotes
    // - this will be the delimiter during execution
    line = line.replace(/"/g, '\\"');
    this.source += '    ; __append("' + line + '")' + '\n';
  },

  scanLine: function (line) {
    var self = this;
    var d = this.opts.delimiter;
    var o = this.opts.openDelimiter;
    var c = this.opts.closeDelimiter;
    var newLineCount = 0;

    newLineCount = (line.split('\n').length - 1);

    switch (line) {
    case o + d:
    case o + d + '_':
      this.mode = Template.modes.EVAL;
      break;
    case o + d + '=':
      this.mode = Template.modes.ESCAPED;
      break;
    case o + d + '-':
      this.mode = Template.modes.RAW;
      break;
    case o + d + '#':
      this.mode = Template.modes.COMMENT;
      break;
    case o + d + d:
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace(o + d + d, o + d) + '")' + '\n';
      break;
    case d + d + c:
      this.mode = Template.modes.LITERAL;
      this.source += '    ; __append("' + line.replace(d + d + c, d + c) + '")' + '\n';
      break;
    case d + c:
    case '-' + d + c:
    case '_' + d + c:
      if (this.mode == Template.modes.LITERAL) {
        this._addOutput(line);
      }

      this.mode = null;
      this.truncate = line.indexOf('-') === 0 || line.indexOf('_') === 0;
      break;
    default:
      // In script mode, depends on type of tag
      if (this.mode) {
        // If '//' is found without a line break, add a line break.
        switch (this.mode) {
        case Template.modes.EVAL:
        case Template.modes.ESCAPED:
        case Template.modes.RAW:
          if (line.lastIndexOf('//') > line.lastIndexOf('\n')) {
            line += '\n';
          }
        }
        switch (this.mode) {
        // Just executing code
        case Template.modes.EVAL:
          this.source += '    ; ' + line + '\n';
          break;
          // Exec, esc, and output
        case Template.modes.ESCAPED:
          this.source += '    ; __append(escapeFn(' + stripSemi(line) + '))' + '\n';
          break;
          // Exec and output
        case Template.modes.RAW:
          this.source += '    ; __append(' + stripSemi(line) + ')' + '\n';
          break;
        case Template.modes.COMMENT:
          // Do nothing
          break;
          // Literal <%% mode, append as raw output
        case Template.modes.LITERAL:
          this._addOutput(line);
          break;
        }
      }
      // In string mode, just add the output
      else {
        this._addOutput(line);
      }
    }

    if (self.opts.compileDebug && newLineCount) {
      this.currentLine += newLineCount;
      this.source += '    ; __line = ' + this.currentLine + '\n';
    }
  }
};

/**
 * Escape characters reserved in XML.
 *
 * This is simply an export of {@link module:utils.escapeXML}.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @public
 * @func
 * */
exports.escapeXML = utils.escapeXML;

/**
 * Express.js support.
 *
 * This is an alias for {@link module:ejs.renderFile}, in order to support
 * Express.js out-of-the-box.
 *
 * @func
 */

exports.__express = exports.renderFile;

/**
 * Version of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.VERSION = _VERSION_STRING;

/**
 * Name for detection of EJS.
 *
 * @readonly
 * @type {String}
 * @public
 */

exports.name = _NAME;

/* istanbul ignore if */
if (typeof window != 'undefined') {
  window.ejs = exports;
}


/***/ }),

/***/ "./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/lib/utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/lib/utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * EJS Embedded JavaScript templates
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

/**
 * Private utility functions
 * @module utils
 * @private
 */



var regExpChars = /[|\\{}()[\]^$+*?.]/g;

/**
 * Escape characters reserved in regular expressions.
 *
 * If `string` is `undefined` or `null`, the empty string is returned.
 *
 * @param {String} string Input string
 * @return {String} Escaped string
 * @static
 * @private
 */
exports.escapeRegExpChars = function (string) {
  // istanbul ignore if
  if (!string) {
    return '';
  }
  return String(string).replace(regExpChars, '\\$&');
};

var _ENCODE_HTML_RULES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&#34;',
  "'": '&#39;'
};
var _MATCH_HTML = /[&<>'"]/g;

function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
}

/**
 * Stringified version of constants used by {@link module:utils.escapeXML}.
 *
 * It is used in the process of generating {@link ClientFunction}s.
 *
 * @readonly
 * @type {String}
 */

var escapeFuncStr =
  'var _ENCODE_HTML_RULES = {\n'
+ '      "&": "&amp;"\n'
+ '    , "<": "&lt;"\n'
+ '    , ">": "&gt;"\n'
+ '    , \'"\': "&#34;"\n'
+ '    , "\'": "&#39;"\n'
+ '    }\n'
+ '  , _MATCH_HTML = /[&<>\'"]/g;\n'
+ 'function encode_char(c) {\n'
+ '  return _ENCODE_HTML_RULES[c] || c;\n'
+ '};\n';

/**
 * Escape characters reserved in XML.
 *
 * If `markup` is `undefined` or `null`, the empty string is returned.
 *
 * @implements {EscapeCallback}
 * @param {String} markup Input string
 * @return {String} Escaped string
 * @static
 * @private
 */

exports.escapeXML = function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
exports.escapeXML.toString = function () {
  return Function.prototype.toString.call(this) + ';\n' + escapeFuncStr;
};

/**
 * Naive copy of properties from one object to another.
 * Does not recurse into non-scalar properties
 * Does not check to see if the property has a value before copying
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopy = function (to, from) {
  from = from || {};
  for (var p in from) {
    to[p] = from[p];
  }
  return to;
};

/**
 * Naive copy of a list of key names, from one object to another.
 * Only copies property if it is actually defined
 * Does not recurse into non-scalar properties
 *
 * @param  {Object} to   Destination object
 * @param  {Object} from Source object
 * @param  {Array} list List of properties to copy
 * @return {Object}      Destination object
 * @static
 * @private
 */
exports.shallowCopyFromList = function (to, from, list) {
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    if (typeof from[p] != 'undefined') {
      to[p] = from[p];
    }
  }
  return to;
};

/**
 * Simple in-process cache implementation. Does not implement limits of any
 * sort.
 *
 * @implements {Cache}
 * @static
 * @private
 */
exports.cache = {
  _data: {},
  set: function (key, val) {
    this._data[key] = val;
  },
  get: function (key) {
    return this._data[key];
  },
  remove: function (key) {
    delete this._data[key];
  },
  reset: function () {
    this._data = {};
  }
};

/**
 * Transforms hyphen case variable into camel case.
 *
 * @param {String} string Hyphen case string
 * @return {String} Camel case string
 * @static
 * @private
 */
exports.hyphenToCamel = function (str) {
  return str.replace(/-[a-z]/g, function (match) { return match[1].toUpperCase(); });
};


/***/ }),

/***/ "?c581":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?85ac":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/package.json":
/*!********************************************************************!*\
  !*** ./node_modules/.pnpm/ejs@3.1.6/node_modules/ejs/package.json ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ejs","description":"Embedded JavaScript templates","keywords":["template","engine","ejs"],"version":"3.1.6","author":"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)","license":"Apache-2.0","bin":{"ejs":"./bin/cli.js"},"main":"./lib/ejs.js","jsdelivr":"ejs.min.js","unpkg":"ejs.min.js","repository":{"type":"git","url":"git://github.com/mde/ejs.git"},"bugs":"https://github.com/mde/ejs/issues","homepage":"https://github.com/mde/ejs","dependencies":{"jake":"^10.6.1"},"devDependencies":{"browserify":"^16.5.1","eslint":"^6.8.0","git-directory-deploy":"^1.5.1","jsdoc":"^3.6.4","lru-cache":"^4.0.1","mocha":"^7.1.1","uglify-js":"^3.3.16"},"engines":{"node":">=0.10.0"},"scripts":{"test":"mocha"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./lib/exemple.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsbURBQW1ELGdDQUFnQztBQUNuRjs7Ozs7Ozs7Ozs7QUNsTEE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbnNlbi1jb3JlLy4vbGliL2NvbXBpbGF0ZS5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvZGlyZWN0aXZlLm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi9lbWl0dGVyLmpzIiwid2VicGFjazovL3NlbnNlbi1jb3JlLy4vbGliL2V4ZW1wbGUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi9oeWRyYXRlcy5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9ub2RlX21vZHVsZXMvLnBucG0vZWpzQDMuMS42L25vZGVfbW9kdWxlcy9lanMvbGliL2Vqcy5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9lanNAMy4xLjYvbm9kZV9tb2R1bGVzL2Vqcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvaWdub3JlZHwvVXNlcnMvaWFuY2FydGVyL1dvcmtzL2RldmVsb3BtZW50cy9naXQvbnBtL3NlbnNlbi1qdXRzdS9ub2RlX21vZHVsZXMvLnBucG0vZWpzQDMuMS42L25vZGVfbW9kdWxlcy9lanMvbGlifGZzIiwid2VicGFjazovL3NlbnNlbi1jb3JlL2lnbm9yZWR8L1VzZXJzL2lhbmNhcnRlci9Xb3Jrcy9kZXZlbG9wbWVudHMvZ2l0L25wbS9zZW5zZW4tanV0c3Uvbm9kZV9tb2R1bGVzLy5wbnBtL2Vqc0AzLjEuNi9ub2RlX21vZHVsZXMvZWpzL2xpYnxwYXRoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN5RGV0ciwgU3ludGF4RWNobyB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ2Vqcyc7XG5pbXBvcnQgeyBTdGFiaWxpemVDb250ZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG4vKipcbiAqIEZyYWdtZW50IHJlbmRlcmluZyBmcm9tIFN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyRW5naW5lKGlucHV0LCBjb250ZXh0LCBkaWN0aW9uYXJ5KSB7XG4gICAgcmV0dXJuIHJlbmRlcihgJHtpbnB1dH1gLCBkaWN0aW9uYXJ5LCB7XG4gICAgICAgIGRlbGltaXRlcjogYCR7U3lEZXRyfWAsXG4gICAgICAgIC8vIGNsaWVudDogdHJ1ZSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIC8vIGluY2x1ZGVyOiAob3JpZ2luYWwsIHBhcnNlZCk9PntcbiAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgIC8vICAgICAgICAgZmlsZW5hbWU6JycsXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVFcnJvckV4Y2VwdGlvbihlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDb21waWxhdGUgRXJyb3IvLy8vJywgZXJyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVFY2hvKGNvbXBvbmVudCwgcmVjb3JkKSB7XG4gICAgaWYgKCFyZWNvcmQuZWNobykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByYXcgPSAocmVjb3JkLm1hdGNoKSA/IHJlY29yZC5tYXRjaFswXSA6ICcnO1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gKChyZWNvcmQubWF0Y2gpID8gcmVjb3JkLm1hdGNoWzFdIDogJycpLnRyaW0oKTtcbiAgICAgICAgbGV0IG1vY2t1cCA9IHJlY29yZC5tb2NrdXA/LnRleHRDb250ZW50IHx8ICcnO1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZXNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4ubW9ja3VwLm1hdGNoQWxsKFN5bnRheEVjaG8pXTtcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBtYXRjaGVzLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICBtb2NrdXAgPSBtb2NrdXAucmVwbGFjZShuZXcgUmVnRXhwKChtWzBdKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSwgJ2cnKSwgYDwke1N5RGV0cn09JHttWzFdfSAke1N5RGV0cn0+YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBSZW5kZXJFbmdpbmUoKFxuICAgICAgICAvLyBtb2NrdXAucmVwbGFjZShuZXcgUmVnRXhwKHJhdywgJ2cnKSwgYDwke1N5RGV0cn09JHsgZXhwcmVzc2lvbiB9ICR7U3lEZXRyfT5gIClcbiAgICAgICAgbW9ja3VwLnJlcGxhY2UobmV3IFJlZ0V4cCgocmF3KS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSwgJ2cnKSwgYDwke1N5RGV0cn09JHtleHByZXNzaW9ufSAke1N5RGV0cn0+YCkpLCBjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5ub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWNvcmQubm9kZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS50ZXh0Q29udGVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKTtcbiAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xuICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpO1xuICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlU25hcENvZGUoY29tcG9uZW50LCByZWNvcmQpIHtcbiAgICBpZiAoIXJlY29yZC5zbmFwY29kZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGxldCBtb2NrdXAgPSAocmVjb3JkLm1vY2t1cD8uaW5uZXJIVE1MIHx8IHJlY29yZC5tb2NrdXA/LnRleHRDb250ZW50IHx8ICcnKTtcbiAgICAgICAgbW9ja3VwID0gU3RhYmlsaXplQ29udGVudChtb2NrdXApO1xuICAgICAgICByZWNvcmQuc25hcGNvZGU/Lm1hcChzbmFwID0+IHtcbiAgICAgICAgICAgIHNuYXAubWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xuICAgICAgICAgICAgICAgIG1vY2t1cCA9IG1vY2t1cC5yZXBsYWNlKG5ldyBSZWdFeHAoKG1hdGNoWzBdKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSwgJ2cnKSwgYDwke1N5RGV0cn0ke21hdGNoWzFdfSAke1N5RGV0cn0+YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFJlbmRlckVuZ2luZShtb2NrdXAsIGNvbXBvbmVudCwgY29tcG9uZW50LnN0YXRlKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLm5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJlY29yZC5ub2RlLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlY29yZC5ub2RlIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgICAgIHJlY29yZC5ub2RlLnRleHRDb250ZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShyZWNvcmQpO1xuICAgICAgICB9KS5jYXRjaChlciA9PiB7XG4gICAgICAgICAgICBDb21waWxhdGVFcnJvckV4Y2VwdGlvbihlcik7XG4gICAgICAgICAgICByZWplY3QoZXIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBDb21waWxhdGVTbmFwQ29kZUF0dHJpYnV0ZXMoY29tcG9uZW50LCByZWNvcmQpIHtcbiAgICBpZiAoIXJlY29yZC5hdHRyaWJ1dGUgJiYgcmVjb3JkLnR5cGUgPT0gJ2F0dHJpYnV0ZS5zbmFwY29kZScpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJlY29yZC5hdHRyaWJ1dGU/Lm5hbWU7XG4gICAgICAgIGxldCBtb2NrdXAgPSAocmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQgfHwgJycpO1xuICAgICAgICBpZiAocmVjb3JkLm1hdGNoKSB7XG4gICAgICAgICAgICBtb2NrdXAgPSBtb2NrdXAucmVwbGFjZShuZXcgUmVnRXhwKChyZWNvcmQubWF0Y2hbMF0gfHwgJycpLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJ1xcXFwkJicpLCAnZycpLCBgPCR7U3lEZXRyfSR7cmVjb3JkLm1hdGNoWzFdfSAke1N5RGV0cn0+YCk7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyRW5naW5lKG1vY2t1cCwgY29tcG9uZW50LCBjb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICgnYXR0cmlidXRlcycgaW4gcmVjb3JkLm5vZGUpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKTtcbiAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xuICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpO1xuICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlRWNob0F0dHJpYnV0ZXMoY29tcG9uZW50LCByZWNvcmQpIHtcbiAgICBpZiAoIXJlY29yZC5hdHRyaWJ1dGUgJiYgcmVjb3JkLnR5cGUgPT0gJ2F0dHJpYnV0ZS5lY2hvJykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gcmVjb3JkLmF0dHJpYnV0ZT8ubmFtZTtcbiAgICAgICAgbGV0IG1vY2t1cCA9IChyZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCB8fCAnJyk7XG4gICAgICAgIGlmIChyZWNvcmQubWF0Y2gpIHtcbiAgICAgICAgICAgIG1vY2t1cCA9IG1vY2t1cC5yZXBsYWNlKG5ldyBSZWdFeHAoKHJlY29yZC5tYXRjaFswXSB8fCAnJykucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJyksICdnJyksIGA8JHtTeURldHJ9PSR7cmVjb3JkLm1hdGNoWzFdfSAke1N5RGV0cn0+YCk7XG4gICAgICAgIH1cbiAgICAgICAgUmVuZGVyRW5naW5lKG1vY2t1cCwgY29tcG9uZW50LCBjb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmICgnYXR0cmlidXRlcycgaW4gcmVjb3JkLm5vZGUpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKTtcbiAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xuICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpO1xuICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0dsc1lYUmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZZMjl5WlM5amIyMXdhV3hoZEdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRMEVzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4VlFVRlZMRVZCUVVVc1RVRkJUU3hqUVVGakxFTkJRVU03UVVGRmJFUXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFdEJRVXNzUTBGQlF6dEJRVU0zUWl4UFFVRlBMRVZCUVVVc1owSkJRV2RDTEVWQlFVVXNUVUZCVFN4aFFVRmhMRU5CUVVNN1FVRkpMME03TzBkQlJVYzdRVUZEU0N4TlFVRk5MRlZCUVZVc1dVRkJXU3hEUVZFeFFpeExRVUZoTEVWQlFVVXNUMEZCTWtJc1JVRkJSU3hWUVVGclF6dEpRVVUxUlN4UFFVRlBMRTFCUVUwc1EwRkJReXhIUVVGSkxFdEJRVTBzUlVGQlJTeEZRVUZGTEZWQlFWVXNSVUZCUlR0UlFVVndReXhUUVVGVExFVkJRVVVzUjBGQlNTeE5RVUZQTEVWQlFVVTdVVUZGZUVJc1owSkJRV2RDTzFGQlJXaENMRTlCUVU4c1JVRkJSU3hQUVVGUE8xRkJSV2hDTEV0QlFVc3NSVUZCUlN4SlFVRkpPMUZCUlZnc2EwTkJRV3RETzFGQlJXeERMR1ZCUVdVN1VVRkRaaXgxUWtGQmRVSTdVVUZEZGtJc1VVRkJVVHRSUVVWU0xFbEJRVWs3UzBGRlVDeERRVUZETEVOQlFVRTdRVUZGVGl4RFFVRkRPMEZCU1VRc1RVRkJUU3hWUVVGVkxIVkNRVUYxUWl4RFFVRkRMRWRCUVZFN1NVRkZOVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeEhRVUZITEVOQlFVVXNRMEZCUVR0QlFVVTVReXhEUVVGRE8wRkJUVVFzVFVGQlRTeFZRVUZWTEdGQlFXRXNRMEZSTTBJc1UwRkJOa0lzUlVGQlJTeE5RVUYzUWp0SlFVVnlSQ3hKUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUXp0UlFVRkZMRTlCUVU4c1UwRkJVeXhEUVVGRE8wdEJRVU03U1VGRmNFTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJaMElzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkRMRVZCUVVVN1VVRkZha1FzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0UlFVVnNSQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRSUVVWc1JTeEpRVUZKTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxGZEJRVmNzU1VGQlNTeEZRVUZGTEVOQlFVTTdVVUZIT1VNN08xZEJSVWM3VVVGRlNDeE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkJPMUZCUldoRUxFbEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUXp0WlFVVmtMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTEVWQlFVVTdaMEpCUlZnc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlEyNUNMRWxCUVVrc1RVRkJUU3hEUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeE5RVUZOTEVOQlFVTXNSVUZCUnl4SFFVRkhMRU5CUVVVc1JVRkRka1FzU1VGQlNTeE5RVUZOTEVsQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVU53UXl4RFFVRkJPMWxCUlV3c1EwRkJReXhEUVVGRExFTkJRVUU3VTBGRlREdFJRVWRFT3p0WFFVVkhPMUZCUTBnc1dVRkJXU3hEUVVGVk8xRkJSV3hDTEdsR1FVRnBSanRSUVVWcVJpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVTldMRWxCUVVrc1RVRkJUU3hEUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJ5eEhRVUZITEVOQlFVVXNSVUZEZEVRc1NVRkJTU3hOUVVGTkxFbEJRVXNzVlVGQlZ5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVTXhReXhEUVVWS0xFVkJRVVVzVTBGQlV5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZCTEVWQlFVVTdXVUZGZUVNc1NVRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeFpRVUZaTEZkQlFWY3NSVUZCUXp0blFrRkZiRU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGRE8yRkJSV3hETzJsQ1FVVkpMRWxCUVVjc1RVRkJUU3hEUVVGRExFbEJRVWtzV1VGQldTeEpRVUZKTEVWQlFVTTdaMEpCUldoRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRTFCUVUwc1EwRkJRVHRoUVVWdVF6dFpRVWRFTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHRSUVVWdVFpeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGQkxFVkJRVVU3V1VGRlZDeDFRa0ZCZFVJc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlFUdFpRVVV6UWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVUU3VVVGRlpDeERRVUZETEVOQlFVTXNRMEZCUVR0SlFVVk9MRU5CUVVNc1EwRkJReXhEUVVGQk8wRkJSMDRzUTBGQlF6dEJRVTFFTEUxQlFVMHNWVUZCVlN4cFFrRkJhVUlzUTBGUkwwSXNVMEZCTmtJc1JVRkJSU3hOUVVGM1FqdEpRVWR5UkN4SlFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlF6dFJRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUVVNN1NVRkZlRU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZETEVWQlFVVTdVVUZGYWtRc1lVRkJZVHRSUVVOaUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFbEJRVWtzVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4WFFVRlhMRWxCUVVrc1JVRkJSU3hEUVVGWExFTkJRVU03VVVGSGRFWXNUVUZCVFN4SFFVRkhMR2RDUVVGblFpeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkJPMUZCUldwRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJRU3hGUVVGRk8xbEJSWFpDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlFTeEZRVUZGTzJkQ1FVVndRaXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUlN4SlFVRkpMRTFCUVUwc1EwRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVY3NSMEZCUnl4RFFVRkZMRVZCUVVVc1NVRkJTU3hOUVVGTkxFZEJRVWtzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRkxFTkJRVUU3V1VGRmFFa3NRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkZUaXhEUVVGRExFTkJRVU1zUTBGQlFUdFJRVWRHTEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGQkxFVkJRVVU3V1VGRk1VUXNTVUZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3haUVVGWkxGZEJRVmNzUlVGQlF6dG5Ra0ZGYkVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUld4RE8ybENRVVZKTEVsQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1dVRkJXU3hKUVVGSkxFVkJRVU03WjBKQlJXaERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUXp0aFFVVndRenRaUVVWRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0UlFVVnVRaXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkJMRVZCUVVVN1dVRkZWQ3gxUWtGQmRVSXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRVHRaUVVVelFpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFN1VVRkZaQ3hEUVVGRExFTkJRVU1zUTBGQlFUdEpRVVZPTEVOQlFVTXNRMEZCUXl4RFFVRkJPMEZCUjA0c1EwRkJRenRCUVUxRUxFMUJRVTBzVlVGQlZTd3lRa0ZCTWtJc1EwRlJla01zVTBGQk5rSXNSVUZCUlN4TlFVRjNRanRKUVVkeVJDeEpRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeEpRVUZKTEc5Q1FVRnZRaXhGUVVGRE8xRkJRVVVzVDBGQlR5eFRRVUZUTEVOQlFVTTdTMEZCUXp0SlFVVm9SaXhQUVVGUExFbEJRVWtzVDBGQlR5eERRVUZuUWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVU1zUlVGQlJUdFJRVVZxUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFXTXNRMEZCUVR0UlFVVTNReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1YwRkJWeXhKUVVGSkxFVkJRVVVzUTBGQlZ5eERRVUZETzFGQlJURkVMRWxCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUlVGQlF6dFpRVVZhTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRkxFbEJRVWtzVFVGQlRTeERRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEZRVUZITEVkQlFVY3NRMEZCUlN4RlFVRkZMRWxCUVVrc1RVRkJUU3hIUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkZMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVVVzUTBGQlFUdFRRVVZxU2p0UlFVVkVMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZCTEVWQlFVVTdXVUZGTVVRc1NVRkJSeXhaUVVGWkxFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NSVUZCUXp0blFrRkZNMElzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzJGQlJURkRPMWxCUlVRc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZCTzFGQlJXNUNMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVRXNSVUZCUlR0WlFVVlVMSFZDUVVGMVFpeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkJPMWxCUlROQ0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUVR0UlFVVmtMRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJSVTRzUTBGQlF5eERRVUZETEVOQlFVRTdRVUZIVGl4RFFVRkRPMEZCVFVRc1RVRkJUU3hWUVVGVkxIVkNRVUYxUWl4RFFWRnlReXhUUVVFMlFpeEZRVUZGTEUxQlFYZENPMGxCUjNKRUxFbEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4SlFVRkpMRTFCUVUwc1EwRkJReXhKUVVGSkxFbEJRVWtzWjBKQlFXZENMRVZCUVVNN1VVRkJSU3hQUVVGUExGTkJRVk1zUTBGQlF6dExRVUZETzBsQlJUVkZMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRV2RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJReXhGUVVGRk8xRkJSV3BFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQll5eERRVUZCTzFGQlJUZERMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4WFFVRlhMRWxCUVVrc1JVRkJSU3hEUVVGWExFTkJRVU03VVVGRk1VUXNTVUZCUnl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRE8xbEJSVm9zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVVc1NVRkJTU3hOUVVGTkxFTkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVWNzUjBGQlJ5eERRVUZGTEVWQlFVVXNTVUZCU1N4TlFVRk5MRWxCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVVXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJSU3hEUVVGQk8xTkJSV3hLTzFGQlJVUXNXVUZCV1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hUUVVGVExFVkJRVVVzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVUVzUlVGQlJUdFpRVVV4UkN4SlFVRkhMRmxCUVZrc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZETzJkQ1FVVXpRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03WVVGRk1VTTdXVUZGUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVUU3VVVGRmJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlFTeEZRVUZGTzFsQlJWUXNkVUpCUVhWQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRTdXVUZGTTBJc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZCTzFGQlJXUXNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkZUaXhEUVVGRExFTkJRVU1zUTBGQlFUdEJRVWRPTEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJEYjIxd2IyNWxiblFnZlNCbWNtOXRJRndpTGx3aU8xeHVhVzF3YjNKMElIc2dVM2xFWlhSeUxDQlRlVzUwWVhoRlkyaHZJSDBnWm5KdmJTQmNJaTR2Wlhod2NtVnpjMmx2Ymx3aU8xeHVhVzF3YjNKMElIUjVjR1VnZXlCRGIyMXdiMjVsYm5STlpYUm9iMlJTWVhjc0lFTnZiWEJ2Ym1WdWRGQnliM0J6TENCRGIyMXdiMjVsYm5SVGRHRjBaU3dnUlhod2NtVnpjMmx2YmxKbFkyOXlaQ0I5SUdaeWIyMGdYQ0l1TDJsdVpHVjRMblJjSWp0Y2JtbHRjRzl5ZENCN0lISmxibVJsY2lCOUlHWnliMjBnSjJWcWN5YzdYRzVwYlhCdmNuUWdleUJUZEdGaWFXeHBlbVZEYjI1MFpXNTBJSDBnWm5KdmJTQmNJaTR2ZFhScGJHbDBhV1Z6WENJN1hHNWNibHh1WEc0dktpcGNiaUFxSUVaeVlXZHRaVzUwSUhKbGJtUmxjbWx1WnlCbWNtOXRJRk4wY21sdVoxeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnVW1WdVpHVnlSVzVuYVc1bFBGeHVYRzRnSUNBZ1V5QmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRGTjBZWFJsTENCY2JpQWdJQ0JjYmlBZ0lDQlFJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVSEp2Y0hNc1hHNGdJQ0FnWEc0Z0lDQWdUU0JsZUhSbGJtUnpJRU52YlhCdmJtVnVkRTFsZEdodlpGSmhkenhUTENCUVBseHVJQ0FnSUZ4dVBpaHBibkIxZERvZ2MzUnlhVzVuTENCamIyNTBaWGgwT2lCRGIyMXdiMjVsYm5ROFV5d2dVQ3dnVFQ0c0lHUnBZM1JwYjI1aGNuazZJSHNnVzBzNklITjBjbWx1WjEwZ09pQmhibmtnSUgwZ0tYdGNiaUFnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJSEpsYm1SbGNpaGdKSHNnYVc1d2RYUWdmV0FzSUdScFkzUnBiMjVoY25rc0lIdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR1JsYkdsdGFYUmxjam9nWUNSN0lGTjVSR1YwY2lCOVlDeGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUdOc2FXVnVkRG9nZEhKMVpTeGNibHh1SUNBZ0lDQWdJQ0JqYjI1MFpYaDBPaUJqYjI1MFpYaDBMRnh1WEc0Z0lDQWdJQ0FnSUdGemVXNWpPaUIwY25WbExGeHVYRzRnSUNBZ0lDQWdJQzh2SUdsdVkyeDFaR1Z5T2lBb2IzSnBaMmx1WVd3c0lIQmhjbk5sWkNrOVBudGNibHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lDQWdJQ0JtYVd4bGJtRnRaVG9uSnl4Y2JpQWdJQ0FnSUNBZ0x5OGdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUI5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDBwWEc1Y2JuMWNibHh1WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCRGIyMXdhV3hoZEdWRmNuSnZja1Y0WTJWd2RHbHZiaWhsY25JNklHRnVlU2w3WEc1Y2JpQWdJQ0JqYjI1emIyeGxMbVZ5Y205eUtDZERiMjF3YVd4aGRHVWdSWEp5YjNJdkx5OHZKeXdnWlhKeUlDbGNibHh1ZlZ4dVhHNWNibHh1WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCRGIyMXdhV3hoZEdWRlkyaHZQRnh1WEc0Z0lDQWdVeUJsZUhSbGJtUnpJRU52YlhCdmJtVnVkRk4wWVhSbExDQmNiaUFnSUNCY2JpQWdJQ0JRSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVUhKdmNITXNYRzRnSUNBZ1hHNGdJQ0FnVFNCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZEUxbGRHaHZaRkpoZHp4VExDQlFQbHh1SUNBZ0lGeHVQaWhqYjIxd2IyNWxiblE2SUVOdmJYQnZibVZ1ZER4VExDQlFMQ0JOUGl3Z2NtVmpiM0prT2lCRmVIQnlaWE56YVc5dVVtVmpiM0prS1h0Y2JseHVJQ0FnSUdsbUtDRnlaV052Y21RdVpXTm9ieWw3SUhKbGRIVnliaUIxYm1SbFptbHVaV1E3ZlZ4dUlDQWdJRnh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpUeDBlWEJsYjJZZ2NtVmpiM0prUGlnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1QwK2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElISmhkeUE5SUNoeVpXTnZjbVF1YldGMFkyZ3BJRDhnY21WamIzSmtMbTFoZEdOb1d6QmRJRG9nSnljN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCbGVIQnlaWE56YVc5dUlEMGdLQ2h5WldOdmNtUXViV0YwWTJncElEOGdjbVZqYjNKa0xtMWhkR05vV3pGZElEb2dKeWNwTG5SeWFXMG9LVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUd4bGRDQnRiMk5yZFhBZ1BTQnlaV052Y21RdWJXOWphM1Z3UHk1MFpYaDBRMjl1ZEdWdWRDQjhmQ0FuSnp0Y2JseHVYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQlFjbVZ3WVhKbGMxeHVJQ0FnSUNBZ0lDQWdLaTljYmx4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnV3k0dUxtMXZZMnQxY0M1dFlYUmphRUZzYkNoVGVXNTBZWGhGWTJodktWMWNibHh1SUNBZ0lDQWdJQ0JwWmlodFlYUmphR1Z6TG14bGJtZDBhQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZEdOb1pYTXViV0Z3S0cwOVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzF2WTJ0MWNDQTlJRzF2WTJ0MWNDNXlaWEJzWVdObEtGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1VtVm5SWGh3S0NBb2JWc3dYU2t1Y21Wd2JHRmpaU2d2VzE1Y1hIZGNYSE5kTDJkcExDQW5YRnhjWENRbUp5a2dMQ0FuWnljZ0tTd2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdBOEpIdFRlVVJsZEhKOVBTUjdJRzFiTVYwZ2ZTQWtlMU41UkdWMGNuMCtZQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIMWNibHh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJTWlc1a1pYSnBibWRjYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lGSmxibVJsY2tWdVoybHVaVHhUTENCUUxDQk5QaWdvWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUcxdlkydDFjQzV5WlhCc1lXTmxLRzVsZHlCU1pXZEZlSEFvY21GM0xDQW5aeWNwTENCZ1BDUjdVM2xFWlhSeWZUMGtleUJsZUhCeVpYTnphVzl1SUgwZ0pIdFRlVVJsZEhKOVBtQWdLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRiMk5yZFhBdWNtVndiR0ZqWlNnZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJRkpsWjBWNGNDZ2dLSEpoZHlrdWNtVndiR0ZqWlNndlcxNWNYSGRjWEhOZEwyZHBMQ0FuWEZ4Y1hDUW1KeWtnTENBblp5Y2dLU3dnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWUR3a2UxTjVSR1YwY24wOUpIc2daWGh3Y21WemMybHZiaUI5SUNSN1UzbEVaWFJ5ZlQ1Z0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnS1NCY2JseHVJQ0FnSUNBZ0lDQXBMQ0JqYjIxd2IyNWxiblFzSUdOdmJYQnZibVZ1ZEM1emRHRjBaU2t1ZEdobGJpaHlaWE4xYkhROVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9jbVZqYjNKa0xtNXZaR1VnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUXVibTlrWlM1cGJtNWxja2hVVFV3Z1BTQnlaWE4xYkhRN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQnBaaWh5WldOdmNtUXVibTlrWlNCcGJuTjBZVzVqWlc5bUlFNXZaR1VwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prTG01dlpHVXVkR1Y0ZEVOdmJuUmxiblFnUFNCeVpYTjFiSFJjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9jbVZqYjNKa0tWeHVYRzRnSUNBZ0lDQWdJSDBwTG1OaGRHTm9LR1Z5UFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVOdmJYQnBiR0YwWlVWeWNtOXlSWGhqWlhCMGFXOXVLR1Z5S1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WldwbFkzUW9aWElwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdmU2xjYmlBZ0lDQmNiaUFnSUNCY2JuMWNibHh1WEc1Y2JseHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdRMjl0Y0dsc1lYUmxVMjVoY0VOdlpHVThYRzVjYmlBZ0lDQlRJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVM1JoZEdVc0lGeHVJQ0FnSUZ4dUlDQWdJRkFnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblJRY205d2N5eGNiaUFnSUNCY2JpQWdJQ0JOSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVFdWMGFHOWtVbUYzUEZNc0lGQStYRzRnSUNBZ1hHNCtLR052YlhCdmJtVnVkRG9nUTI5dGNHOXVaVzUwUEZNc0lGQXNJRTArTENCeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwZTF4dVhHNWNiaUFnSUNCcFppZ2hjbVZqYjNKa0xuTnVZWEJqYjJSbEtYc2djbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdDlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sUEhSNWNHVnZaaUJ5WldOdmNtUStLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdRSFJ6TFdsbmJtOXlaVnh1SUNBZ0lDQWdJQ0JzWlhRZ2JXOWphM1Z3SUQwZ0tISmxZMjl5WkM1dGIyTnJkWEEvTG1sdWJtVnlTRlJOVENCOGZDQnlaV052Y21RdWJXOWphM1Z3UHk1MFpYaDBRMjl1ZEdWdWRDQjhmQ0FuSnlrZ1lYTWdjM1J5YVc1bk8xeHVYRzVjYmlBZ0lDQWdJQ0FnYlc5amEzVndJRDBnVTNSaFltbHNhWHBsUTI5dWRHVnVkQ2h0YjJOcmRYQXBYRzVjYmlBZ0lDQWdJQ0FnY21WamIzSmtMbk51WVhCamIyUmxQeTV0WVhBb2MyNWhjRDArZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Ym1Gd0xtMWhkR05vWlhNdWJXRndLRzFoZEdOb1BUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0YjJOcmRYQWdQU0J0YjJOcmRYQXVjbVZ3YkdGalpTZ2dibVYzSUZKbFowVjRjQ2dnS0cxaGRHTm9XekJkS1M1eVpYQnNZV05sS0M5YlhseGNkMXhjYzEwdloya3NJQ2RjWEZ4Y0pDWW5LU0FzSUNkbkp5QXBMQ0JnUENSN1UzbEVaWFJ5ZlNSN0lHMWhkR05vV3pGZElIMGdKSHRUZVVSbGRISjlQbUFnS1NCY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQlNaVzVrWlhKRmJtZHBibVVvYlc5amEzVndMQ0JqYjIxd2IyNWxiblFzSUdOdmJYQnZibVZ1ZEM1emRHRjBaU2t1ZEdobGJpaHlaWE4xYkhROVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9jbVZqYjNKa0xtNXZaR1VnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUXVibTlrWlM1cGJtNWxja2hVVFV3Z1BTQnlaWE4xYkhRN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQnBaaWh5WldOdmNtUXVibTlrWlNCcGJuTjBZVzVqWlc5bUlFNXZaR1VwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prTG01dlpHVXVkR1Y0ZEVOdmJuUmxiblFnUFNCeVpYTjFiSFE3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaHlaV052Y21RcFhHNWNiaUFnSUNBZ0lDQWdmU2t1WTJGMFkyZ29aWEk5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHbHNZWFJsUlhKeWIzSkZlR05sY0hScGIyNG9aWElwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYW1WamRDaGxjaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQjlLVnh1SUNBZ0lGeHVJQ0FnSUZ4dWZWeHVYRzVjYmx4dVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQkRiMjF3YVd4aGRHVlRibUZ3UTI5a1pVRjBkSEpwWW5WMFpYTThYRzVjYmlBZ0lDQlRJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVM1JoZEdVc0lGeHVJQ0FnSUZ4dUlDQWdJRkFnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblJRY205d2N5eGNiaUFnSUNCY2JpQWdJQ0JOSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVFdWMGFHOWtVbUYzUEZNc0lGQStYRzRnSUNBZ1hHNCtLR052YlhCdmJtVnVkRG9nUTI5dGNHOXVaVzUwUEZNc0lGQXNJRTArTENCeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwZTF4dVhHNWNiaUFnSUNCcFppZ2hjbVZqYjNKa0xtRjBkSEpwWW5WMFpTQW1KaUJ5WldOdmNtUXVkSGx3WlNBOVBTQW5ZWFIwY21saWRYUmxMbk51WVhCamIyUmxKeWw3SUhKbGRIVnliaUIxYm1SbFptbHVaV1E3ZlZ4dUlDQWdJRnh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpUeDBlWEJsYjJZZ2NtVmpiM0prUGlnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1QwK2UxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHNWhiV1VnUFNCeVpXTnZjbVF1WVhSMGNtbGlkWFJsUHk1dVlXMWxJR0Z6SUhOMGNtbHVaMXh1WEc0Z0lDQWdJQ0FnSUd4bGRDQnRiMk5yZFhBZ1BTQW9jbVZqYjNKa0xtMXZZMnQxY0Q4dWRHVjRkRU52Ym5SbGJuUWdmSHdnSnljcElHRnpJSE4wY21sdVp6dGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2xtS0hKbFkyOXlaQzV0WVhSamFDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHMXZZMnQxY0NBOUlHMXZZMnQxY0M1eVpYQnNZV05sS0NCdVpYY2dVbVZuUlhod0tDQW9jbVZqYjNKa0xtMWhkR05vV3pCZGZId25KeWt1Y21Wd2JHRmpaU2d2VzE1Y1hIZGNYSE5kTDJkcExDQW5YRnhjWENRbUp5a2dMQ0FuWnljZ0tTd2dZRHdrZTFONVJHVjBjbjBrZXlCeVpXTnZjbVF1YldGMFkyaGJNVjBnZlNBa2UxTjVSR1YwY24wK1lDQXBJRnh1WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQlNaVzVrWlhKRmJtZHBibVVvYlc5amEzVndMQ0JqYjIxd2IyNWxiblFzSUdOdmJYQnZibVZ1ZEM1emRHRjBaU2t1ZEdobGJpaHlaWE4xYkhROVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9KMkYwZEhKcFluVjBaWE1uSUdsdUlISmxZMjl5WkM1dWIyUmxLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaQzV1YjJSbExuTmxkRUYwZEhKcFluVjBaU2h1WVcxbExDQnlaWE4xYkhRcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvY21WamIzSmtLVnh1WEc0Z0lDQWdJQ0FnSUgwcExtTmhkR05vS0dWeVBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lFTnZiWEJwYkdGMFpVVnljbTl5UlhoalpYQjBhVzl1S0dWeUtWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXcGxZM1FvWlhJcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlNsY2JpQWdJQ0JjYmlBZ0lDQmNibjFjYmx4dVhHNWNibHh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnUTI5dGNHbHNZWFJsUldOb2IwRjBkSEpwWW5WMFpYTThYRzVjYmlBZ0lDQlRJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVM1JoZEdVc0lGeHVJQ0FnSUZ4dUlDQWdJRkFnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblJRY205d2N5eGNiaUFnSUNCY2JpQWdJQ0JOSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVFdWMGFHOWtVbUYzUEZNc0lGQStYRzRnSUNBZ1hHNCtLR052YlhCdmJtVnVkRG9nUTI5dGNHOXVaVzUwUEZNc0lGQXNJRTArTENCeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwZTF4dVhHNWNiaUFnSUNCcFppZ2hjbVZqYjNKa0xtRjBkSEpwWW5WMFpTQW1KaUJ5WldOdmNtUXVkSGx3WlNBOVBTQW5ZWFIwY21saWRYUmxMbVZqYUc4bktYc2djbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdDlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sUEhSNWNHVnZaaUJ5WldOdmNtUStLQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBQVDU3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm1GdFpTQTlJSEpsWTI5eVpDNWhkSFJ5YVdKMWRHVS9MbTVoYldVZ1lYTWdjM1J5YVc1blhHNWNiaUFnSUNBZ0lDQWdiR1YwSUcxdlkydDFjQ0E5SUNoeVpXTnZjbVF1Ylc5amEzVndQeTUwWlhoMFEyOXVkR1Z1ZENCOGZDQW5KeWtnWVhNZ2MzUnlhVzVuTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FXWW9jbVZqYjNKa0xtMWhkR05vS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYlc5amEzVndJRDBnYlc5amEzVndMbkpsY0d4aFkyVW9JRzVsZHlCU1pXZEZlSEFvSUNoeVpXTnZjbVF1YldGMFkyaGJNRjE4ZkNjbktTNXlaWEJzWVdObEtDOWJYbHhjZDF4Y2MxMHZaMmtzSUNkY1hGeGNKQ1luS1NBc0lDZG5KeUFwTENCZ1BDUjdVM2xFWlhSeWZUMGtleUJ5WldOdmNtUXViV0YwWTJoYk1WMGdmU0FrZTFONVJHVjBjbjArWUNBcElGeHVYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCU1pXNWtaWEpGYm1kcGJtVW9iVzlqYTNWd0xDQmpiMjF3YjI1bGJuUXNJR052YlhCdmJtVnVkQzV6ZEdGMFpTa3VkR2hsYmloeVpYTjFiSFE5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0oyRjBkSEpwWW5WMFpYTW5JR2x1SUhKbFkyOXlaQzV1YjJSbEtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpDNXViMlJsTG5ObGRFRjBkSEpwWW5WMFpTaHVZVzFsTENCeVpYTjFiSFFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9jbVZqYjNKa0tWeHVYRzRnSUNBZ0lDQWdJSDBwTG1OaGRHTm9LR1Z5UFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVOdmJYQnBiR0YwWlVWeWNtOXlSWGhqWlhCMGFXOXVLR1Z5S1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WldwbFkzUW9aWElwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdmU2xjYmlBZ0lDQmNiaUFnSUNCY2JuMWNibHh1WEc1Y2JseHVYRzVjYmlKZGZRPT0iLCJleHBvcnQgY2xhc3MgRGlyZWN0aXZlQXR0cmlidXRlcyB7XG4gICAgc3RhdGljIERlZmluZShzdGF0ZSkge1xuICAgICAgICB0aGlzLkF2YWlsYWJsZXNbc3RhdGUubmFtZV0gPSBzdGF0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBNZXJnZSguLi5kaXJlY3RpdmVzKSB7XG4gICAgICAgIGRpcmVjdGl2ZXMubWFwKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlLm5hbWUgaW4gdGhpcy5BdmFpbGFibGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgKGBXQVJOSU5HICR7ZGlyZWN0aXZlLm5hbWV9IDogWW91IHdhbnQgdG8gY2hhbmdlIHRoZSBiZWhhdmlvciBvZiBhbiBleGlzdGluZyBhdHRyaWJ1dGUgZGlyZWN0aXZlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLkF2YWlsYWJsZXNbZGlyZWN0aXZlLm5hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN0YXRpYyBSZXRyaXZlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5BdmFpbGFibGVzW2tleV0gfHwgbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIFJldHJpdmVzKGRpcmVjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5NZXJnZShkaXJlY3RpdmUpLkF2YWlsYWJsZXM7XG4gICAgfVxufVxuRGlyZWN0aXZlQXR0cmlidXRlcy5BdmFpbGFibGVzID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x5WldOMGFYWmxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZZMjl5WlM5a2FYSmxZM1JwZG1VdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJLMEpETEUxQlFVMHNUMEZCVHl4dFFrRkJiVUk3U1VGTk4wSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVFd1FqdFJRVVZ3UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVFN1VVRkZja01zVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZGYUVJc1EwRkJRenRKUVVkRUxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4VlFVRnBRenRSUVVVM1F5eFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJRU3hGUVVGRk8xbEJSWFJDTEVsQlFVY3NVMEZCVXl4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZETzJkQ1FVVnFReXhOUVVGTkxFTkJRVU1zVjBGQldTeFRRVUZUTEVOQlFVTXNTVUZCU3l4MVJVRkJkVVVzUTBGQlF5eERRVUZCTzJGQlJUZEhPMWxCUlVRc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGQk8xRkJSUzlETEVOQlFVTXNRMEZCUXl4RFFVRkJPMUZCUlVZc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRmFFSXNRMEZCUXp0SlFVZEVMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlZ6dFJRVVYwUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVVVzUjBGQlJ5eERRVUZGTEVsQlFVa3NTVUZCU1N4RFFVRkJPMGxCUlhwRExFTkJRVU03U1VGSFJDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVRSR08xRkJSWGhITEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eFZRVUZWTEVOQlFVRTdTVUZGTTBNc1EwRkJRenM3UVVFeFEwMHNPRUpCUVZVc1IwRkJlVUlzUlVGQk1FSXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lFTnZiWEJ2Ym1WdWRDQjlJR1p5YjIwZ1hDSXVYQ0k3WEc1cGJYQnZjblFnZXlCRGIyMXdiMjVsYm5STlpYUm9iMlJTWVhjc0lFTnZiWEJ2Ym1WdWRGQnliM0J6TENCRGIyMXdiMjVsYm5SVGRHRjBaU3dnUlhod2NtVnpjMmx2YmxKbFkyOXlaQ0I5SUdaeWIyMGdYQ0l1TDJsdVpHVjRMblJjSWp0Y2JseHVMeW9xWEc0Z0tpQkVhWEpsWTNScGRtVnpYRzRnS2k5Y2JseHVYRzVsZUhCdmNuUWdkSGx3WlNCVVJHbHlaV04wYVhabFFYUjBjbWxpZFhSbElEMGdlMXh1SUNBZ0lHNWhiV1U2SUhOMGNtbHVaenRjYmlBZ0lDQmxlSEJ5WlhOemFXOXVPaUJ6ZEhKcGJtY2dmQ0J1ZFd4c08xeHVJQ0FnSUcxaGFXNDZJRHhjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUZNZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5SVGRHRjBaU3dnWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCUUlHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MFVISnZjSE1zWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJRTBnWlhoMFpXNWtjeUJEYjIxd2IyNWxiblJOWlhSb2IyUlNZWGM4VXl3Z1VENWNibHh1SUNBZ0lENG9ZMjl0Y0c5dVpXNTBPaUJEYjIxd2IyNWxiblE4VXl3Z1VDd2dUVDRzSUhKbFkyOXlaRG9nUlhod2NtVnpjMmx2YmxKbFkyOXlaQ2tnUFQ0Z2RtOXBaRHRjYmx4dUlDQWdJQzh2SUhCaGNuTmxjajg2SUR4V1BpaGhjbWR6T2lCN2ZTa2dQVDRnYzNSeWFXNW5PMXh1WEc1OVhHNWNibVY0Y0c5eWRDQjBlWEJsSUZSRWFYSmxZM1JwZG1WQmRIUnlhV0oxZEdWeklEMGdlMXh1SUNBZ0lGdExPaUJ6ZEhKcGJtZGRPaUJVUkdseVpXTjBhWFpsUVhSMGNtbGlkWFJsWEc1OVhHNWNibHh1WEc0Z1pYaHdiM0owSUdOc1lYTnpJRVJwY21WamRHbDJaVUYwZEhKcFluVjBaWE43WEc1Y2JseHVJQ0FnSUhOMFlYUnBZeUJCZG1GcGJHRmliR1Z6T2lCVVJHbHlaV04wYVhabFFYUjBjbWxpZFhSbGN5QTlJSHQ5SUdGeklGUkVhWEpsWTNScGRtVkJkSFJ5YVdKMWRHVnpPMXh1WEc1Y2JpQWdJQ0J6ZEdGMGFXTWdSR1ZtYVc1bEtITjBZWFJsT2lCVVJHbHlaV04wYVhabFFYUjBjbWxpZFhSbEtYdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxrRjJZV2xzWVdKc1pYTmJJSE4wWVhSbExtNWhiV1VnWFNBOUlITjBZWFJsWEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibHh1WEc0Z0lDQWdjM1JoZEdsaklFMWxjbWRsS0M0dUxtUnBjbVZqZEdsMlpYTTZJRlJFYVhKbFkzUnBkbVZCZEhSeWFXSjFkR1ZiWFNsN1hHNWNiaUFnSUNBZ0lDQWdaR2x5WldOMGFYWmxjeTV0WVhBb1pHbHlaV04wYVhabFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR1JwY21WamRHbDJaUzV1WVcxbElHbHVJSFJvYVhNdVFYWmhhV3hoWW14bGN5bDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ0tHQlhRVkpPU1U1SElDUjdJR1JwY21WamRHbDJaUzV1WVcxbElIMGdPaUJaYjNVZ2QyRnVkQ0IwYnlCamFHRnVaMlVnZEdobElHSmxhR0YyYVc5eUlHOW1JR0Z1SUdWNGFYTjBhVzVuSUdGMGRISnBZblYwWlNCa2FYSmxZM1JwZG1WZ0tWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVRWFpoYVd4aFlteGxjMXRrYVhKbFkzUnBkbVV1Ym1GdFpWMGdQU0JrYVhKbFkzUnBkbVZjYmx4dUlDQWdJQ0FnSUNCOUtWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dVhHNGdJQ0FnZlZ4dVhHNWNiaUFnSUNCemRHRjBhV01nVW1WMGNtbDJaU2hyWlhrNklITjBjbWx1WnlsN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11UVhaaGFXeGhZbXhsYzFzZ2EyVjVJRjBnZkh3Z2JuVnNiRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJSE4wWVhScFl5QlNaWFJ5YVhabGN5aGthWEpsWTNScGRtVTZJRlJFYVhKbFkzUnBkbVZCZEhSeWFXSjFkR1VnSmlCVVJHbHlaV04wYVhabFFYUjBjbWxpZFhSbElDWWdkSGx3Wlc5bUlFUnBjbVZqZEdsMlpVRjBkSEpwWW5WMFpYTXVRWFpoYVd4aFlteGxjeWw3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVUV1Z5WjJVb1pHbHlaV04wYVhabEtTNUJkbUZwYkdGaWJHVnpYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JjYm4xY2JseHVYRzRpWFgwPSIsImltcG9ydCB7IENyZWF0ZUNvbXBvbmVudE1ldGhvZEV2ZW50IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IERpcmVjdGl2ZUF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9kaXJlY3RpdmVcIjtcbi8qKlxuICogRGlyZWN0aXZlIENvbmZpZ3VyYXRpb25zXG4gKi9cbkRpcmVjdGl2ZUF0dHJpYnV0ZXMuRGVmaW5lKHtcbiAgICBuYW1lOiAnYWN0aW9uJyxcbiAgICBleHByZXNzaW9uOiAnQCcsXG4gICAgbWFpbjogKGNvbXBvbmVudCwgcmVjb3JkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsIERpcmVjdGl2ZScsIHJlY29yZCk7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5pc0FycmF5KHJlY29yZC5hcmd1bWVudHMpID8gcmVjb3JkLmFyZ3VtZW50cyA6IFtdO1xuICAgICAgICByZWNvcmQubm9kZS5hZGRFdmVudExpc3RlbmVyKGAke3JlY29yZC5uYW1lfWAsIChldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0cmliID0gKCgnYXR0cmlidXRlcycgaW4gcmVjb3JkLm5vZGUpXG4gICAgICAgICAgICAgICAgPyByZWNvcmQubm9kZS5nZXRBdHRyaWJ1dGUocmVjb3JkLm1hdGNoPy5pbnB1dCB8fCAnJylcbiAgICAgICAgICAgICAgICA6ICcnKT8udHJpbSgpO1xuICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZigncHJldmVudCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZignc3RvcCcpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnN0IGF0dHJpYiA9IHZhbHVlIGFzIGtleW9mIHR5cGVvZiBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENoZWNrIENvbXBvbmVudCBtZXRob2RzXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGlzTWV0aG9kID0gYXR0cmliPy5pbmRleE9mKGB0aGlzLm1ldGhvZHMuYCkgPT0gMDtcbiAgICAgICAgICAgIGNvbnN0IF9ldmVudCA9IENyZWF0ZUNvbXBvbmVudE1ldGhvZEV2ZW50KGNvbXBvbmVudCwgZXYpO1xuICAgICAgICAgICAgaWYgKGlzTWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gY29tcG9uZW50Lm1ldGhvZHNbYXR0cmliLnN1YnN0cmluZygoYHRoaXMubWV0aG9kcy5gKS5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICAvKiogKiBDaGVjayBpcyB0cmFuc2FjdGlvbiBmdW5jdGlvbiAqL1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLmFwcGx5KGNvbXBvbmVudC5zdGF0ZSwgW19ldmVudF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmliID09ICdzdHJpbmcnICYmIGF0dHJpYiBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbiA9ICh3aW5kb3dbYXR0cmliXSB8fCAoKCkgPT4geyB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4uYXBwbHkod2luZG93LCBbX2V2ZW50XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGFyZ3MuaW5kZXhPZignY2FwdHVyZScpID4gLTEgPyB0cnVlIDogZmFsc2UpO1xuICAgIH0sXG4gICAgLy8gcGFyc2VyOiAocmVjb3JkKT0+e30sXG59KTtcbmV4cG9ydCBjb25zdCBOYXRpdmVEaXJlY3RpdmVBdHRyaWJ1dGVzID0gRGlyZWN0aXZlQXR0cmlidXRlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpHbHlaV04wYVhabExtNWhkR2wyWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDJOdmNtVXZaR2x5WldOMGFYWmxMbTVoZEdsMlpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRVZCUVVVc01FSkJRVEJDTEVWQlFVVXNUVUZCVFN4SFFVRkhMRU5CUVVNN1FVRkRMME1zVDBGQlR5eEZRVUZGTEcxQ1FVRnRRaXhGUVVGRkxFMUJRVTBzWVVGQllTeERRVUZCTzBGQlNXcEVPenRIUVVWSE8wRkJSVWdzYlVKQlFXMUNMRU5CUVVNc1RVRkJUU3hEUVVGRE8wbEJSWFpDTEVsQlFVa3NSVUZCUXl4UlFVRlJPMGxCUldJc1ZVRkJWU3hGUVVGRExFZEJRVWM3U1VGRlpDeEpRVUZKTEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1RVRkJUU3hGUVVGRExFVkJRVVU3VVVGRmRrSXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRVHRSUVVWeVF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMUZCUjNKRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUjBGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGVExFVkJRVU1zUlVGQlJUdFpRVVV4UkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVWWUxFTkJRVU1zV1VGQldTeEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJSVGRDTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZMRXRCUVVzc1NVRkJSU3hGUVVGRkxFTkJRVU03WjBKQlJXNUVMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJSVkFzUlVGQlJTeEpRVUZKTEVWQlFVVXNRMEZCUXp0WlFVVldMRWxCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJRenRuUWtGQlJTeEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRU5CUVVFN1lVRkJSVHRaUVVWMlJDeEpRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVTTdaMEpCUVVVc1JVRkJSU3hEUVVGRExHVkJRV1VzUlVGQlJTeERRVUZCTzJGQlFVVTdXVUZGY2tRc2QwUkJRWGRFTzFsQlIzaEVPenRsUVVWSE8xbEJRMGdzVFVGQlRTeFJRVUZSTEVkQlFVY3NUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdXVUZGZGtRc1RVRkJUU3hOUVVGTkxFZEJRVWNzTUVKQlFUQkNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZCTzFsQlNYaEVMRWxCUVVjc1VVRkJVU3hGUVVGRE8yZENRVVZTTEUxQlFVMHNUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVVVzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZGTEVOQlFVTTdaMEpCUlM5RkxITkRRVUZ6UXp0blFrRkRkRU1zU1VGQlJ5eFBRVUZQTEUxQlFVMHNTVUZCU1N4VlFVRlZMRVZCUVVNN2IwSkJSVE5DTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVFN2FVSkJSVEZETzJGQlJVbzdhVUpCUlVjN1owSkJSVUVzU1VGQlJ5eFBRVUZQTEUxQlFVMHNTVUZCU1N4UlFVRlJMRWxCUVVrc1RVRkJUU3hKUVVGSkxFMUJRVTBzUlVGQlF6dHZRa0ZGTjBNc1lVRkJZVHR2UWtGRFlpeE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVVXNSVUZCUlN4SFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGaExFTkJRVUU3YjBKQlJXNUVMRWxCUVVjc1QwRkJUeXhGUVVGRkxFbEJRVWtzVlVGQlZTeEZRVUZETzNkQ1FVVjJRaXhGUVVGRkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVUU3Y1VKQlJUZENPMmxDUVVWS08yRkJSVW83VVVGTlRDeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUVR0SlFVVnVSQ3hEUVVGRE8wbEJSVVFzZDBKQlFYZENPME5CUlROQ0xFTkJRVU1zUTBGQlFUdEJRVWxHTEUxQlFVMHNRMEZCUXl4TlFVRk5MSGxDUVVGNVFpeEhRVUZITEcxQ1FVRnRRaXhEUVVGQklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dRM0psWVhSbFEyOXRjRzl1Wlc1MFRXVjBhRzlrUlhabGJuUWdmU0JtY205dElGd2lMbHdpTzF4dWFXMXdiM0owSUhzZ1JHbHlaV04wYVhabFFYUjBjbWxpZFhSbGN5QjlJR1p5YjIwZ1hDSXVMMlJwY21WamRHbDJaVndpWEc1Y2JseHVYRzR2S2lwY2JpQXFJRVJwY21WamRHbDJaU0JEYjI1bWFXZDFjbUYwYVc5dWMxeHVJQ292WEc1Y2JrUnBjbVZqZEdsMlpVRjBkSEpwWW5WMFpYTXVSR1ZtYVc1bEtIdGNibHh1SUNBZ0lHNWhiV1U2SjJGamRHbHZiaWNzWEc0Z0lDQWdYRzRnSUNBZ1pYaHdjbVZ6YzJsdmJqb25RQ2NzWEc0Z0lDQWdYRzRnSUNBZ2JXRnBiam9nS0dOdmJYQnZibVZ1ZEN3Z2NtVmpiM0prS1QwK2UxeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5Z25RMkZzYkNCRWFYSmxZM1JwZG1VbkxDQnlaV052Y21RcFhHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lYSm5jeUE5SUVGeWNtRjVMbWx6UVhKeVlYa29jbVZqYjNKa0xtRnlaM1Z0Wlc1MGN5a2dQeUJ5WldOdmNtUXVZWEpuZFcxbGJuUnpJRG9nVzEwN1hHNWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ2NtVmpiM0prTG01dlpHVXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGdKSHNnY21WamIzSmtMbTVoYldVZ2ZXQXNJQ2hsZGpvZ1JYWmxiblFwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0YwZEhKcFlpQTlJQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FvSjJGMGRISnBZblYwWlhNbklHbHVJSEpsWTI5eVpDNXViMlJsS1NCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lISmxZMjl5WkM1dWIyUmxMbWRsZEVGMGRISnBZblYwWlNoeVpXTnZjbVF1YldGMFkyZy9MbWx1Y0hWMGZId25KeWxjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSURvZ0p5ZGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0tUOHVkSEpwYlNncE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaGhjbWR6TG1sdVpHVjRUMllvSjNCeVpYWmxiblFuS1NBK0lDMHhLWHNnWlhZdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1NCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtHRnlaM011YVc1a1pYaFBaaWduYzNSdmNDY3BJRDRnTFRFcGV5QmxkaTV6ZEc5d1VISnZjR0ZuWVhScGIyNG9LU0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTjBJR0YwZEhKcFlpQTlJSFpoYkhWbElHRnpJR3RsZVc5bUlIUjVjR1Z2WmlCamIyMXdiMjVsYm5RdWMzUmhkR1U3WEc1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCRGFHVmpheUJEYjIxd2IyNWxiblFnYldWMGFHOWtjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwYzAxbGRHaHZaQ0E5SUdGMGRISnBZajh1YVc1a1pYaFBaaWhnZEdocGN5NXRaWFJvYjJSekxtQXBJRDA5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUY5bGRtVnVkQ0E5SUVOeVpXRjBaVU52YlhCdmJtVnVkRTFsZEdodlpFVjJaVzUwS0dOdmJYQnZibVZ1ZEN3Z1pYWXBYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlocGMwMWxkR2h2WkNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdFpYUm9iMlFnUFNCamIyMXdiMjVsYm5RdWJXVjBhRzlrYzFzZ1lYUjBjbWxpTG5OMVluTjBjbWx1Wnlnb1lIUm9hWE11YldWMGFHOWtjeTVnS1M1c1pXNW5kR2dwSUYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5b3FJQ29nUTJobFkyc2dhWE1nZEhKaGJuTmhZM1JwYjI0Z1puVnVZM1JwYjI0Z0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWWdiV1YwYUc5a0lEMDlJQ2RtZFc1amRHbHZiaWNwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldWMGFHOWtMbUZ3Y0d4NUtHTnZiWEJ2Ym1WdWRDNXpkR0YwWlN3Z1cxOWxkbVZ1ZEYwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCaGRIUnlhV0lnUFQwZ0ozTjBjbWx1WnljZ0ppWWdZWFIwY21saUlHbHVJSGRwYm1SdmR5bDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRSFJ6TFdsbmJtOXlaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JtYmlBOUlDaDNhVzVrYjNkYllYUjBjbWxpWFNCOGZDQW9LQ2s5UG50OUtTa2dZWE1nUm5WdVkzUnBiMjVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWWdabTRnUFQwZ0oyWjFibU4wYVc5dUp5bDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnVMbUZ3Y0d4NUtIZHBibVJ2ZHl3Z1cxOWxkbVZ1ZEYwcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVYRzVjYmlBZ0lDQWdJQ0FnZlN3Z1lYSm5jeTVwYm1SbGVFOW1LQ2RqWVhCMGRYSmxKeWtnUGlBdE1TQS9JSFJ5ZFdVZ09pQm1ZV3h6WlNsY2JseHVJQ0FnSUgwc1hHNGdJQ0FnWEc0Z0lDQWdMeThnY0dGeWMyVnlPaUFvY21WamIzSmtLVDArZTMwc1hHNWNibjBwWEc1Y2JseHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1RtRjBhWFpsUkdseVpXTjBhWFpsUVhSMGNtbGlkWFJsY3lBOUlFUnBjbVZqZEdsMlpVRjBkSEpwWW5WMFpYTmNibHh1SWwxOSIsIi8qKlxuICogVHlwZVxuICovXG4vKipcbiAqIFNlbnNlbiBFdmVudCBFbWl0dGVyIFJlc3BvbnNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFbWl0dGVyUmVzcG9uc2UodHlwZSwgZW1pdCkge1xuICAgIHJldHVybiB7IHR5cGUsIGVtaXQgfTtcbn1cbi8qKlxuICogU2Vuc2VuIEV2ZW50IEVtaXR0ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFNlbnNlbkVtaXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IFtdO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBbXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuZXJcbiAgICAgKi9cbiAgICBsaXN0ZW4odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIuaW5kZXhPZih0eXBlKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lclt0aGlzLmxpc3RlbmVyLmxlbmd0aF0gPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PSAnc3RyaW5nJyAmJiB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzW3R5cGVdID0gdGhpcy5lbnRyaWVzW3R5cGVdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVyXG4gICAgICovXG4gICAgZGlzcGF0Y2godHlwZSwgYXJncywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc3BhdGNoZXIuaW5kZXhPZih0eXBlKSA9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyW3RoaXMuZGlzcGF0Y2hlci5sZW5ndGhdID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudHJpZXNbdHlwZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXNbdHlwZV0ubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVybmVkID0gU2Vuc2VuRW1pdHRlci5yZXNvbHZlRGlzcGF0Y2hlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgcmVzb2x2ZURpc3BhdGNoZXIoeyBpbnN0YW5jZSwgdHlwZSwgYXJncywgY2FsbGJhY2ssIHJlc29sdmUsIHJlamVjdCwgfSkge1xuICAgICAgICBjb25zdCAkYXJncyA9IHtcbiAgICAgICAgICAgIGVtaXQ6IGFyZ3MsXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhcHBsaWVkID0gY2FsbGJhY2suYXBwbHkoaW5zdGFuY2UsIFskYXJnc10pO1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJvbWlzZVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGFwcGxpZWQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwbGllZC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc29sdmUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEVtaXR0ZXJSZXNwb25zZSh0eXBlLCByZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWplY3QgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXBwbGllZCA9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybiBhcHBsaWVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laVzFwZEhSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwyTnZjbVV2WlcxcGRIUmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGRlFUczdSMEZGUnp0QlFXZEVTRHM3UjBGRlJ6dEJRVU5JTEUxQlFVMHNWVUZCVlN4bFFVRmxMRU5CUVVrc1NVRkJXU3hGUVVGRkxFbEJRVk03U1VGRmRFUXNUMEZCVHl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlFUdEJRVVY2UWl4RFFVRkRPMEZCVFVRN08wZEJSVWM3UVVGRFJpeE5RVUZOTEU5QlFVOHNZVUZCWVR0SlFXbENka0k3VVVGRlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWc1FpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVWdVFpeEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenRKUVVWNlFpeERRVUZETzBsQlRVUTdPMDlCUlVjN1NVRkRTQ3hOUVVGTkxFTkJRVWtzU1VGQmQwSXNSVUZCUlN4UlFVRnRRenRSUVVWdVJTeEpRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkRPMWxCUldwRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZGT1VNN1VVRkZSQ3hKUVVGSExFOUJRVThzU1VGQlNTeEpRVUZKTEZGQlFWRXNTVUZCU1N4UFFVRlBMRkZCUVZFc1NVRkJTU3hWUVVGVkxFVkJRVU03V1VGRmVFUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGRkxFVkJRVVVzUTBGQlF6dFpRVVUxUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRUUVVWeVF6dFJRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUldoQ0xFTkJRVU03U1VGTlJEczdUMEZGUnp0SlFVTklMRkZCUVZFc1EwRkZTaXhKUVVGM1FpeEZRVVY0UWl4SlFVRlRMRVZCUlZRc1QwRkJiVU1zUlVGRmJrTXNUVUZCY1VRN1VVRkxja1FzU1VGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUXp0WlFVVnVReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETzFOQlJXeEVPMUZCUjBRc1NVRkJSeXhQUVVGUExFbEJRVWtzU1VGQlNTeFJRVUZSTEVWQlFVTTdXVUZGZGtJc1NVRkJSeXhKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUXp0blFrRkZjRUlzU1VGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFdEJRVXNzUlVGQlF6dHZRa0ZGYmtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVU1zUlVGQlJUdDNRa0ZGTlVJc1NVRkJSeXhMUVVGTExGbEJRVmtzVVVGQlVTeEZRVUZET3pSQ1FVVjZRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEdGQlFXRXNRMEZCUXl4cFFrRkJhVUlzUTBGQlNUdG5RMEZGTDBNc1VVRkJVU3hGUVVGSExFbEJRVWs3WjBOQlJXWXNTVUZCU1R0blEwRkZTaXhSUVVGUkxFVkJRVVVzUzBGQlN6dG5RMEZGWml4SlFVRkpPMmREUVVWS0xFOUJRVTg3WjBOQlJWQXNUVUZCVFRzMlFrRkZWQ3hEUVVGRExFTkJRVUU3ZVVKQlJVdzdiMEpCUlV3c1EwRkJReXhEUVVGRExFTkJRVU03YVVKQlJVNDdZVUZGU2p0VFFVVktPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRmFFSXNRMEZCUXp0SlFVMUVMRTFCUVUwc1EwRkJReXhwUWtGQmFVSXNRMEZCU1N4RlFVVjRRaXhSUVVGUkxFVkJSVklzU1VGQlNTeEZRVVZLTEVsQlFVa3NSVUZGU2l4UlFVRlJMRVZCUlZJc1QwRkJUeXhGUVVWUUxFMUJRVTBzUjBGRmJVSTdVVUZGZWtJc1RVRkJUU3hMUVVGTExFZEJRU3RDTzFsQlJYUkRMRWxCUVVrc1JVRkJSU3hKUVVGSk8xbEJSVllzU1VGQlNUdFRRVVZRTEVOQlFVRTdVVUZGUkN4TlFVRk5MRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VVVGSGJFUTdPMWRCUlVjN1VVRkRTQ3hKUVVGSExFOUJRVThzV1VGQldTeFBRVUZQTEVWQlFVTTdXVUZGTVVJc1QwRkJUeXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUVN4RlFVRkZPMmRDUVVVeFFpeEpRVUZITEU5QlFVOHNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJRenR2UWtGRk5VSXNUMEZCVHl4RFFVRkZMR1ZCUVdVc1EwRkJTU3hKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVVXNRMEZCUVR0cFFrRkZhRVE3V1VGRlRDeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGQkxFVkJRVVU3WjBKQlJWWXNTVUZCUnl4UFFVRlBMRTFCUVUwc1NVRkJTU3hWUVVGVkxFVkJRVU03YjBKQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8ybENRVUZGTzFsQlJXeEVMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJSMDQ3WVVGRlNTeEpRVUZITEU5QlFVOHNUMEZCVHl4SlFVRkpMRk5CUVZNc1JVRkJRenRaUVVWb1F5eFBRVUZQTEU5QlFVOHNRMEZCUXp0VFFVVnNRanRoUVVWSE8xbEJSVUVzVDBGQlR5eEpRVUZKTEVOQlFVTTdVMEZGWmp0SlFVVk1MRU5CUVVNN1EwRk5TaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWx4dVhHNHZLaXBjYmlBcUlGUjVjR1ZjYmlBcUwxeHVYRzVsZUhCdmNuUWdkSGx3WlNCVFpXNXpaVzVGYldsMGRHVnlWSGx3WlNBOUlITjBjbWx1WjF4dVhHNWxlSEJ2Y25RZ2RIbHdaU0JUWlc1elpXNUZiV2wwZEdWeVFYSm5kVzFsYm5SelBGUStJRDBnZTF4dUlDQWdJRnh1SUNBZ0lHVnRhWFE2SUZRN1hHNGdJQ0FnWEc0Z0lDQWdkSGx3WlNBNklITjBjbWx1Wnp0Y2JpQWdJQ0JjYm4xY2JseHVaWGh3YjNKMElIUjVjR1VnVTJWdWMyVnVSVzFwZEhSbGNrTmhiR3hpWVdOclBGUStJRDBnS0NoaGNtYzZJRk5sYm5ObGJrVnRhWFIwWlhKQmNtZDFiV1Z1ZEhNOFZENHBJRDArSUZCeWIyMXBjMlU4SUZRZ2ZDQlRaVzV6Wlc1RmJXbDBkR1Z5UVhKbmRXMWxiblJ6UEZRK0lENGdmQ0JpYjI5c1pXRnVJSHdnZG05cFpDbGNibHh1Wlhod2IzSjBJSFI1Y0dVZ1UyVnVjMlZ1UlcxcGRIUmxja1Z5Y205eUlEMGdlMXh1SUNBZ0lHTnZaR1U2SUc1MWJXSmxjanRjYmlBZ0lDQnRaWE56WVdkbE9pQnpkSEpwYm1jN1hHNTlYRzVjYm1WNGNHOXlkQ0IwZVhCbElGTmxibk5sYmtWdGFYUjBaWEpGY25KdmNrTmhiR3hpWVdOcklEMGdLQ2hoY21jNklGTmxibk5sYmtWdGFYUjBaWEpGY25KdmNpa2dQVDRnZG05cFpDbGNibHh1Wlhod2IzSjBJSFI1Y0dVZ1UyVnVjMlZ1UlcxcGRIUmxja1Z1ZEhKcFpYTWdQU0I3WEc1Y2JpQWdJQ0JiU3pvZ1UyVnVjMlZ1UlcxcGRIUmxjbFI1Y0dWZElEb2dVMlZ1YzJWdVJXMXBkSFJsY2tOaGJHeGlZV05yUEdGdWVUNWJYU0JjYmx4dWZWeHVYRzVsZUhCdmNuUWdkSGx3WlNCRmJXbDBkR1Z5UkdsemNHRjBZMmhsY2xCeWIzQnpQRlErSUQwZ2UxeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCcGJuTjBZVzVqWlNBNklGTmxibk5sYmtWdGFYUjBaWElzSUZ4dUlDQWdJRnh1SUNBZ0lIUjVjR1VnT2lCVFpXNXpaVzVGYldsMGRHVnlWSGx3WlN3Z1hHNGdJQ0FnWEc0Z0lDQWdZWEpuY3pvZ1lXNTVMRnh1SUNBZ0lGeHVJQ0FnSUdOaGJHeGlZV05yT2lCVFpXNXpaVzVGYldsMGRHVnlRMkZzYkdKaFkyczhWRDRzWEc0Z0lDQWdYRzRnSUNBZ2NtVnpiMngyWlQ4Z09pQlRaVzV6Wlc1RmJXbDBkR1Z5UTJGc2JHSmhZMnM4VkQ0c1hHNGdJQ0FnWEc0Z0lDQWdjbVZxWldOMFB5QTZJQ2hsY25JZ09pQlRaVzV6Wlc1RmJXbDBkR1Z5UlhKeWIzSkRZV3hzWW1GamF5QXBJRDArSUhadmFXUXNYRzVjYm4xY2JseHVYRzVjYmx4dVhHNWNiaThxS2x4dUlDb2dVMlZ1YzJWdUlFVjJaVzUwSUVWdGFYUjBaWElnVW1WemNHOXVjMlZjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlFVnRhWFIwWlhKU1pYTndiMjV6WlR4VVBpaDBlWEJsT2lCemRISnBibWNzSUdWdGFYUTZJR0Z1ZVNrZ09pQlRaVzV6Wlc1RmJXbDBkR1Z5UVhKbmRXMWxiblJ6UEZRK2UxeHVYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RIbHdaU3dnWlcxcGRDQjlYRzRnSUNBZ1hHNTlYRzVjYmx4dVhHNWNibHh1THlvcVhHNGdLaUJUWlc1elpXNGdSWFpsYm5RZ1JXMXBkSFJsY2x4dUlDb3ZYRzRnWlhod2IzSjBJR05zWVhOeklGTmxibk5sYmtWdGFYUjBaWEo3WEc1Y2JseHVJQ0FnSUdWdWRISnBaWE02SUZObGJuTmxia1Z0YVhSMFpYSkZiblJ5YVdWelhHNWNiaUFnSUNCc2FYTjBaVzVsY2pvZ1UyVnVjMlZ1UlcxcGRIUmxjbFI1Y0dWYlhWeHVYRzRnSUNBZ1pHbHpjR0YwWTJobGNqb2dVMlZ1YzJWdVJXMXBkSFJsY2xSNWNHVmJYVnh1WEc1Y2JpQWdJQ0J5WlhSMWNtNWxaRDg2SUdGdWVWeHVJQ0FnSUNCY2JseHVYRzVjYmlBZ0lDQmNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2w3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYm5SeWFXVnpJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1c2FYTjBaVzVsY2lBOUlGdGRPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaR2x6Y0dGMFkyaGxjaUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdmVnh1WEc1Y2JseHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJNYVhOMFpXNWxjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lHeHBjM1JsYmp4VVBpaDBlWEJsSURvZ1UyVnVjMlZ1UlcxcGRIUmxjbFI1Y0dVc0lHTmhiR3hpWVdOcklEb2dVMlZ1YzJWdVJXMXBkSFJsY2tOaGJHeGlZV05yUEZRK0tYdGNibHh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhwYzNSbGJtVnlMbWx1WkdWNFQyWW9kSGx3WlNrZ1BUMGdMVEVwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxteHBjM1JsYm1WeVczUm9hWE11YkdsemRHVnVaWEl1YkdWdVozUm9YU0E5SUhSNWNHVTdYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FXWW9kSGx3Wlc5bUlIUjVjR1VnUFQwZ0ozTjBjbWx1WnljZ0ppWWdkSGx3Wlc5bUlHTmhiR3hpWVdOcklEMDlJQ2RtZFc1amRHbHZiaWNwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVkSEpwWlhOYmRIbHdaVjBnUFNCMGFHbHpMbVZ1ZEhKcFpYTmJkSGx3WlYxOGZGdGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdWRISnBaWE5iZEhsd1pWMHVjSFZ6YUNoallXeHNZbUZqYXlrN1hHNWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNWNibHh1WEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFUnBjM0JoZEdOb1pYSmNiaUFnSUNBZ0tpOWNiaUFnSUNCa2FYTndZWFJqYUR4VVBpaGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSFI1Y0dVZ09pQlRaVzV6Wlc1RmJXbDBkR1Z5Vkhsd1pTeGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR0Z5WjNNZ09pQjdmU3dnWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCeVpYTnZiSFpsUHlBNklGTmxibk5sYmtWdGFYUjBaWEpEWVd4c1ltRmphenhVUGl4Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxhbVZqZEQ4Z09pQW9aWEp5SURvZ1UyVnVjMlZ1UlcxcGRIUmxja1Z5Y205eVEyRnNiR0poWTJzZ0tTQTlQaUIyYjJsa1hHNWNiaUFnSUNBcGUxeHVJQ0FnSUNBZ0lDQmNibHh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbVJwYzNCaGRHTm9aWEl1YVc1a1pYaFBaaWgwZVhCbEtTQTlQU0F0TVNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaR2x6Y0dGMFkyaGxjbHQwYUdsekxtUnBjM0JoZEdOb1pYSXViR1Z1WjNSb1hTQTlJSFI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHbG1LSFI1Y0dWdlppQjBlWEJsSUQwOUlDZHpkSEpwYm1jbktYdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEhsd1pTQnBiaUIwYUdsekxtVnVkSEpwWlhNcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NWxiblJ5YVdWelczUjVjR1ZkSUdsdWMzUmhibU5sYjJZZ1FYSnlZWGtwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNTBjbWxsYzF0MGVYQmxYUzV0WVhBb0tHVnVkSEo1S1QwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWhsYm5SeWVTQnBibk4wWVc1alpXOW1JRVoxYm1OMGFXOXVLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y21WMGRYSnVaV1FnUFNCVFpXNXpaVzVGYldsMGRHVnlMbkpsYzI5c2RtVkVhWE53WVhSamFHVnlQRlErS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2x1YzNSaGJtTmxJRG9nZEdocGN5d2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxMQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhiR3hpWVdOck9pQmxiblJ5ZVN3Z1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoY21kekxDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVzSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZxWldOMExGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc1Y2JpQWdJQ0I5WEc1Y2JseHVYRzVjYmx4dUlDQWdJSE4wWVhScFl5QnlaWE52YkhabFJHbHpjR0YwWTJobGNqeFVQaWg3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCcGJuTjBZVzVqWlN3Z1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjBlWEJsTENCY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHRnlaM01zWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCallXeHNZbUZqYXl4Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxjMjlzZG1Vc1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaV3BsWTNRc1hHNWNiaUFnSUNCOUlEb2dSVzFwZEhSbGNrUnBjM0JoZEdOb1pYSlFjbTl3Y3p4VVBpbDdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdKR0Z5WjNNZ09pQlRaVzV6Wlc1RmJXbDBkR1Z5UVhKbmRXMWxiblJ6UEZRK0lEMGdlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiV2wwT2lCaGNtZHpMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbExGeHVYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoY0hCc2FXVmtJRDBnWTJGc2JHSmhZMnN1WVhCd2JIa29hVzV6ZEdGdVkyVXNJRnNrWVhKbmMxMHBPMXh1WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQlFjbTl0YVhObFhHNGdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JwWmloaGNIQnNhV1ZrSUdsdWMzUmhibU5sYjJZZ1VISnZiV2x6WlNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJoY0hCc2FXVmtMblJvWlc0b2NtVnpjRzl1YzJVOVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSNWNHVnZaaUJ5WlhOdmJIWmxJRDA5SUNkbWRXNWpkR2x2YmljcGV5QmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb0lFVnRhWFIwWlhKU1pYTndiMjV6WlR4VVBpaDBlWEJsTENCeVpYTndiMjV6WlNrZ0tTQmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU2t1WTJGMFkyZ29aWEp5UFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWWdjbVZxWldOMElEMDlJQ2RtZFc1amRHbHZiaWNwZXlCeVpXcGxZM1FvWlhKeUtTQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdWc2MyVWdhV1lvZEhsd1pXOW1JR0Z3Y0d4cFpXUWdQVDBnSjJKdmIyeGxZVzRuS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z3Y0d4cFpXUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR1ZzYzJWN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1hHNGdJQ0FnWEc1Y2JpQWdJQ0JjYm4xY2JpSmRmUT09IiwiaW1wb3J0IFNlbnNlbiwgeyBTZW5zZW5TY3JlZW4gfSBmcm9tIFwiLlwiO1xuY29uc3Qgdm0gPSBuZXcgU2Vuc2VuLkNvbXBvbmVudCh7XG4gICAgbmFtZTogJ3Jvb3QnLFxuICAgIGVsZW1lbnQ6ICcjYXBwJyxcbiAgICB0ZW1wbGF0ZTogJ2NvbXBvbmVudHMvcm9vdC5zbi5odG1sJyxcbiAgICAvLyAgICAgdGVtcGxhdGU6IGBcbiAgICAvLyAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgLy8gPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgLy8gPGhlYWQ+XG4gICAgLy8gICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIC8vICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIj5cbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cbiAgICAvLyAgICAgPHRpdGxlPlNlbnNlbiBKdXRzdTwvdGl0bGU+XG4gICAgLy8gICAgIDxzdHlsZT5cbiAgICAvLyAgICAgICAgIGZvcm17XG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICAvKiBzbi1yb290LFtpcz1cInNuLXJvb3RcIl17XG4gICAgLy8gICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgIC8vICAgICAgICAgfSAqL1xuICAgIC8vICAgICA8L3N0eWxlPlxuICAgIC8vIDwvaGVhZD5cbiAgICAvLyA8Ym9keT5cbiAgICAvLyAgICAgPGRpdiBpZD1cImFwcFwiIGFiYz1cInNkY2RzamtiXCI+XG4gICAgLy8gICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgIC8vICAgICAgICAgPHA+e3sgZWRpdGFibGUgPyBcIk91aVwiIDogJ05vbicgfX08L3A+XG4gICAgLy8gICAgICAgICA8cD57eyBlZGl0YWJsZSB9fTwvcD5cbiAgICAvLyAgICAgICAgIDxwPnt7IG1lc3NhZ2UgfX08L3A+XG4gICAgLy8gICAgICAgICB7eyB0aGlzLnN0YXRlLmNvdW50ZXIgfX0gLyB7eyBjb3VudGVyIH19XG4gICAgLy8gICAgICAgICA8cD57JT1KU09OLnN0cmluZ2lmeShwZXJzb25zKSAlfTwvcD5cbiAgICAvLyAgICAgICAgIDxwIGRhdGEtc25hcHBlZD1cInslPXRoaXMuc3RhdGUudGl0bGUgJX1cIj5cbiAgICAvLyAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBAc3VibWl0LnByZXZlbnQ9XCJ0aGlzLm1ldGhvZHMuYWRkUGVyc29uXCIgOnN0eWxlPVwie2Rpc3BsYXk6IGVkaXRhYmxlID8gbnVsbCA6ICdub25lJyAsIG9wYWNpdHk6IGVkaXRhYmxlfVwiID5cbiAgICAvLyAgICAgICAgICAgICAgICAgPnt7IGZ1bGxuYW1lLnRyaW0oKSA/IGZ1bGxuYW1lLnRyaW0oKSA6ICdObyBuYW1lIGVudHJ5JyB9fTxcbiAgICAvLyAgICAgICAgICAgICAgICAgPGJyPlxuICAgIC8vICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZnVsbG5hbWVcIiBAaW5wdXQ9XCJ0aGlzLm1ldGhvZHMudXBkYXRlRnVsbG5hbWVcIj4gXG4gICAgLy8gICAgICAgICAgICAgICAgIDxidXR0b24+RW5yZWdpc3RyZXI8L2J1dHRvbj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGJyPlxuICAgIC8vICAgICAgICAgICAgICAgICA8aDEgdGl0bGU9XCJ7eyB0aGlzLnByb3BzLnRpdGxlIH19XCI+TWlycm9yPC9oMT5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgOnZhbHVlPVwibWVzc2FnZVwiPlxuICAgIC8vICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAvLyAgICAgICAgIDwvcD5cbiAgICAvLyAgICAgICAgIDx1bD5cbiAgICAvLyAgICAgICAgICAgICB7JSBwZXJzb25zLmZvckVhY2goKHBlcnNvbik9PnsgJX1cbiAgICAvLyAgICAgICAgICAgICAgICAgPGxpPnslPSBwZXJzb24gJX0gZnJvbSB7eyBjb3VudGVyIH19PC9saT5cbiAgICAvLyAgICAgICAgICAgICB7JSB9KSAlfVxuICAgIC8vICAgICAgICAgPC91bD5cbiAgICAvLyAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidGhpcy5tZXRob2RzLmluY3JlbWVudFwiPkdvIHRvIENvbWluZyBTb29uPC9idXR0b24+XG4gICAgLy8gICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRlc3RGdW5jdGlvblwiPlRlc3QgRnVuY3Rpb248L2J1dHRvbj5cbiAgICAvLyAgICAgPC9kaXY+XG4gICAgLy8gICAgIDxzY3JpcHQ+XG4gICAgLy8gICAgICAgICB3aW5kb3cudGVzdEZ1bmN0aW9uID0gZnVuY3Rpb24oZXYpe1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGVzdCBmdW5jdGlvbiB3b3JrJywgZXYpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIDwvc2NyaXB0PlxuICAgIC8vIDwvYm9keT5cbiAgICAvLyA8L2h0bWw+XG4gICAgLy8gICAgIGAsXG4gICAgZW1pdDoge1xuICAgICAgICBleHByZXNzaW9uUmVjb3JkZWQ6IChyZWNvcmQpID0+IHtcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdGVkOiAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgaXMgQ29ubmVjdGVkJywgZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiAnbG9hZGluZy4uLidcbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICBmdWxsbmFtZTogJ25vIGRhdGEnLFxuICAgICAgICAvLyBmdWxsbmFtZTogJ3slPShuZXcgRGF0ZSgpKSV9JyxcbiAgICAgICAgdGl0bGU6ICdIZWxsbyBsZXMgZ2VucycsXG4gICAgICAgIG1lc3NhZ2U6ICdMb3JlbSBpcHN1bSB7eyBjb3VudGVyIH19JyxcbiAgICAgICAgcm91dGU6ICdjb21pbmdzb29uJyxcbiAgICAgICAgY291bnRlcjogMTAsXG4gICAgICAgIHBlcnNvbnM6IFtcbiAgICAgICAgICAgICdZYW5uJyxcbiAgICAgICAgICAgICdDaHJpc3RpbmEnLFxuICAgICAgICAgICAgJ015YW5hJyxcbiAgICAgICAgICAgICdTeWFuYSdcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlRnVsbG5hbWUoeyBzZWxmLCBldmVudCB9KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzZWxmLnN0YXRlLmZ1bGxuYW1lID0gZXZlbnQudGFyZ2V0Py52YWx1ZSB8fCAnJztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUGVyc29uKHsgc2VsZiwgZXZlbnQgfSkge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChmb3JtLmZ1bGxuYW1lLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gZm9ybS5mdWxsbmFtZS52YWx1ZSA9ICggZm9ybS5mdWxsbmFtZS52YWx1ZSApXG4gICAgICAgICAgICAgICAgc2VsZi5zdGF0ZS5wZXJzb25zLnB1c2goZm9ybS5mdWxsbmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgZm9ybS5mdWxsbmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUuZnVsbG5hbWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRQZXJzb24nKTtcbiAgICAgICAgICAgIC8vIHNlbGYuc3RhdGUucGVyc29ucy5wdXNoKGAkeyAobmV3IERhdGUoKSkgfWApXG4gICAgICAgIH0sXG4gICAgICAgIGluY3JlbWVudCh7IHNlbGYgfSkge1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5wZXJzb25zWzFdID0gYElhbkNhcnRlciBOb3cgJHtzZWxmLnN0YXRlLmNvdW50ZXJ9IC8ge3sgY291bnRlciB9fWA7XG4gICAgICAgICAgICBzZWxmLnN0YXRlLmNvdW50ZXIrKztcbiAgICAgICAgICAgIHNlbGYuc3RhdGUuZWRpdGFibGUgPSAhc2VsZi5zdGF0ZS5lZGl0YWJsZTtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUubWVzc2FnZSA9IGBXZSBjb3VudCB0byAke3NlbGYuc3RhdGUuY291bnRlcn1gO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0luY3JlbWVudCcsIHNlbGYuc3RhdGUuY291bnRlciwgc2VsZi5zdGF0ZS5wZXJzb25zKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuY29uc3QgSG9tZVNjcmVlbiA9IG5ldyBTZW5zZW5TY3JlZW4oe1xuICAgIG5hbWU6ICdob21lJyxcbiAgICBvcHRpb25zOiB7fSxcbiAgICB0ZW1wbGF0ZTogJ3NjcmVlbnMvaG9tZS5odG1sJyxcbn0pO1xuLy8gY29uc29sZS53YXJuKCdWTScsIHZtKVxuLy8gY29uc3Qgcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbi1yb290Jylcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm8pXG4vLyBzZXRUaW1lb3V0KCgpPT57XG4vLyAgICAgcm8uc2V0QXR0cmlidXRlKCdoZWxsbycsICd3b3JsZCcpXG4vLyAgICAgcm8uc2V0QXR0cmlidXRlKCd0aXRsZScsICd3b3JsZCcpXG4vLyB9LCAxMDAwKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhobGJYQnNaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMMk52Y21VdlpYaGxiWEJzWlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFMUJRVTBzUlVGQlJTeEZRVUZGTEZsQlFWa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1EwRkJRenRCUVV0NlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SlFVRkpMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU03U1VGRk5VSXNTVUZCU1N4RlFVRkZMRTFCUVUwN1NVRkZXaXhQUVVGUExFVkJRVVVzVFVGQlRUdEpRVWRtTEZGQlFWRXNSVUZCUlN4NVFrRkJlVUk3U1VGRmRrTXNhMEpCUVd0Q08wbEJRMnhDTEhOQ1FVRnpRanRKUVVWMFFpeHRRa0ZCYlVJN1NVRkZia0lzVTBGQlV6dEpRVVZVTERaQ1FVRTJRanRKUVVVM1FpdzBSRUZCTkVRN1NVRkZOVVFzTmtWQlFUWkZPMGxCUlRkRkxHdERRVUZyUXp0SlFVZHNReXhqUVVGak8wbEJRMlFzWjBKQlFXZENPMGxCUTJoQ0xEaENRVUU0UWp0SlFVTTVRaXd3UWtGQk1FSTdTVUZETVVJc2MwTkJRWE5ETzBsQlEzUkRMRFpDUVVFMlFqdEpRVU0zUWl4WlFVRlpPMGxCUTFvc2NVTkJRWEZETzBsQlEzSkRMSGxDUVVGNVFqdEpRVU42UWl4bFFVRmxPMGxCUTJZc1pVRkJaVHRKUVVkbUxGVkJRVlU3U1VGRlZpeFRRVUZUTzBsQlIxUXNiME5CUVc5RE8wbEJSWEJETEN0Q1FVRXJRanRKUVVVdlFpeG5SRUZCWjBRN1NVRkRhRVFzWjBOQlFXZERPMGxCUldoRExDdENRVUVyUWp0SlFVVXZRaXh0UkVGQmJVUTdTVUZGYmtRc0swTkJRU3RETzBsQlJTOURMRzlFUVVGdlJEdEpRVWR3UkN3d1NVRkJNRWs3U1VGRk1Va3NPRVZCUVRoRk8wbEJSVGxGTEhWQ1FVRjFRanRKUVVWMlFpdzBSa0ZCTkVZN1NVRkZOVVlzSzBOQlFTdERPMGxCUlM5RExIVkNRVUYxUWp0SlFVTjJRaXhwUlVGQmFVVTdTVUZEYWtVc1owVkJRV2RGTzBsQlJXaEZMSE5DUVVGelFqdEpRVVYwUWl4bFFVRmxPMGxCUjJZc1pVRkJaVHRKUVVWbUxHZEVRVUZuUkR0SlFVVm9SQ3cwUkVGQk5FUTdTVUZGTlVRc2RVSkJRWFZDTzBsQlJYWkNMR2RDUVVGblFqdEpRVVZvUWl3MlJVRkJOa1U3U1VGRk4wVXNLMFJCUVN0RU8wbEJSUzlFTEdGQlFXRTdTVUZKWWl4bFFVRmxPMGxCUldZc09FTkJRVGhETzBsQlJUbERMSEZFUVVGeFJEdEpRVVZ5UkN4WlFVRlpPMGxCUlZvc1owSkJRV2RDTzBsQlIyaENMRlZCUVZVN1NVRkZWaXhWUVVGVk8wbEJSVllzVTBGQlV6dEpRVWRNTEVsQlFVa3NSVUZCUXp0UlFVVkVMR3RDUVVGclFpeEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkRMRVZCUVVVN1VVRkZPVUlzUTBGQlF6dFJRVVZFTEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJReXhGUVVGRk8xbEJSVm9zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4M1FrRkJkMElzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUVR0UlFVVTNReXhEUVVGRE8wdEJSVW83U1VGSlJDeExRVUZMTEVWQlFVTTdVVUZGUml4TFFVRkxMRVZCUVVVc1dVRkJXVHRMUVVWMFFqdEpRVWxFTEV0QlFVc3NSVUZCUXp0UlFVVkdMRkZCUVZFc1JVRkJSU3hKUVVGSk8xRkJSV1FzVVVGQlVTeEZRVUZGTEZOQlFWTTdVVUZEYmtJc2FVTkJRV2xETzFGQlJXcERMRXRCUVVzc1JVRkJSU3huUWtGQlowSTdVVUZGZGtJc1QwRkJUeXhGUVVGRkxESkNRVUV5UWp0UlFVVndReXhMUVVGTExFVkJRVVVzV1VGQldUdFJRVVZ1UWl4UFFVRlBMRVZCUVVVc1JVRkJSVHRSUVVWWUxFOUJRVThzUlVGQlJUdFpRVU5NTEUxQlFVMDdXVUZEVGl4WFFVRlhPMWxCUTFnc1QwRkJUenRaUVVOUUxFOUJRVTg3VTBGRFZqdExRVVZLTzBsQlNVUXNUMEZCVHl4RlFVRkRPMUZCUlVvc1kwRkJZeXhEUVVGRExFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUXp0WlFVVjZRaXhoUVVGaE8xbEJRMklzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVsQlFVVXNSVUZCUlN4RFFVRkJPMUZCUldwRUxFTkJRVU03VVVGRlJDeFRRVUZUTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRE8xbEJSWEJDTEUxQlFVMHNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGNVFpeERRVUZETzFsQlJUZERMRWxCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVTTdaMEpCUlc1Q0xHZEVRVUZuUkR0blFrRkZhRVFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1owSkJSVFZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlFUdG5Ra0ZGZUVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkJPMkZCUlROQ08xbEJSVVFzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRVHRaUVVWNFFpd3JRMEZCSzBNN1VVRkZia1FzUTBGQlF6dFJRVVZFTEZOQlFWTXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSVHRaUVVWa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExHbENRVUZyUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVkVzYTBKQlFXdENMRU5CUVVFN1dVRkZMMFVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVWeVFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkZPMWxCUlRWRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMR1ZCUVdkQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVVN4RlFVRkZMRU5CUVVFN1dVRkZNVVFzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVVVzUTBGQlFUdFJRVVZ5UlN4RFFVRkRPMHRCUlVvN1EwRkhTaXhEUVVGRExFTkJRVUU3UVVGTlJpeE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRmxCUVZrc1EwRkJRenRKUVVWb1F5eEpRVUZKTEVWQlFVVXNUVUZCVFR0SlFVVmFMRTlCUVU4c1JVRkJReXhGUVVWUU8wbEJSVVFzVVVGQlVTeEZRVUZGTEcxQ1FVRnRRanREUVVWb1F5eERRVUZETEVOQlFVRTdRVUZMUml4NVFrRkJlVUk3UVVGTGVrSXNLME5CUVN0RE8wRkJSUzlETEdkRFFVRm5RenRCUVVkb1F5eHRRa0ZCYlVJN1FVRkZia0lzZDBOQlFYZERPMEZCUTNoRExIZERRVUYzUXp0QlFVVjRReXhYUVVGWElpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGTmxibk5sYml3Z2V5QlRaVzV6Wlc1VFkzSmxaVzRnZlNCbWNtOXRJRndpTGx3aU8xeHVYRzVjYmx4dUlDQWdJRnh1WTI5dWMzUWdkbTBnUFNCdVpYY2dVMlZ1YzJWdUxrTnZiWEJ2Ym1WdWRDaDdYRzVjYmlBZ0lDQnVZVzFsT2lBbmNtOXZkQ2NzWEc1Y2JpQWdJQ0JsYkdWdFpXNTBPaUFuSTJGd2NDY3NYRzVjYmx4dUlDQWdJSFJsYlhCc1lYUmxPaUFuWTI5dGNHOXVaVzUwY3k5eWIyOTBMbk51TG1oMGJXd25MRnh1SUNBZ0lGeHVMeThnSUNBZ0lIUmxiWEJzWVhSbE9pQmdYRzR2THlBZ0lDQWdQQ0ZFVDBOVVdWQkZJR2gwYld3K1hHNWNiaTh2SUR4b2RHMXNJR3hoYm1jOVhDSmxibHdpUGx4dVhHNHZMeUE4YUdWaFpENWNibHh1THk4Z0lDQWdJRHh0WlhSaElHTm9ZWEp6WlhROVhDSlZWRVl0T0Z3aVBseHVYRzR2THlBZ0lDQWdQRzFsZEdFZ2FIUjBjQzFsY1hWcGRqMWNJbGd0VlVFdFEyOXRjR0YwYVdKc1pWd2lJR052Ym5SbGJuUTlYQ0pKUlQxbFpHZGxYQ0krWEc1Y2JpOHZJQ0FnSUNBOGJXVjBZU0J1WVcxbFBWd2lkbWxsZDNCdmNuUmNJaUJqYjI1MFpXNTBQVndpZDJsa2RHZzlaR1YyYVdObExYZHBaSFJvTENCcGJtbDBhV0ZzTFhOallXeGxQVEV1TUZ3aVBseHVYRzR2THlBZ0lDQWdQSFJwZEd4bFBsTmxibk5sYmlCS2RYUnpkVHd2ZEdsMGJHVStYRzVjYmx4dUx5OGdJQ0FnSUR4emRIbHNaVDVjYmk4dklDQWdJQ0FnSUNBZ1ptOXliWHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJR1JwYzNCc1lYazZJR0pzYjJOck8xeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ2IzQmhZMmwwZVRvZ01UdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUXRZMjlzYjNJNklDTmxaV1U3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0J3WVdSa2FXNW5PaUF4Y21WdE8xeHVMeThnSUNBZ0lDQWdJQ0I5WEc0dkx5QWdJQ0FnSUNBZ0lDOHFJSE51TFhKdmIzUXNXMmx6UFZ3aWMyNHRjbTl2ZEZ3aVhYdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lHOXdZV05wZEhrNklEQmNiaTh2SUNBZ0lDQWdJQ0FnZlNBcUwxeHVMeThnSUNBZ0lEd3ZjM1I1YkdVK1hHNGdJQ0FnWEc1Y2JpOHZJRHd2YUdWaFpENWNibHh1THk4Z1BHSnZaSGsrWEc1Y2JseHVMeThnSUNBZ0lEeGthWFlnYVdROVhDSmhjSEJjSWlCaFltTTlYQ0p6WkdOa2MycHJZbHdpUGx4dUlDQWdJQ0FnSUNCY2JpOHZJQ0FnSUNBZ0lDQWdQR2d4UG50N0lIUnBkR3hsSUgxOVBDOW9NVDVjYmx4dUx5OGdJQ0FnSUNBZ0lDQThjRDU3ZXlCbFpHbDBZV0pzWlNBL0lGd2lUM1ZwWENJZ09pQW5UbTl1SnlCOWZUd3ZjRDVjYmk4dklDQWdJQ0FnSUNBZ1BIQStlM3NnWldScGRHRmliR1VnZlgwOEwzQStYRzVjYmk4dklDQWdJQ0FnSUNBZ1BIQStlM3NnYldWemMyRm5aU0I5ZlR3dmNENWNibHh1THk4Z0lDQWdJQ0FnSUNCN2V5QjBhR2x6TG5OMFlYUmxMbU52ZFc1MFpYSWdmWDBnTHlCN2V5QmpiM1Z1ZEdWeUlIMTlYRzVjYmk4dklDQWdJQ0FnSUNBZ1BIQStleVU5U2xOUFRpNXpkSEpwYm1kcFpua29jR1Z5YzI5dWN5a2dKWDA4TDNBK1hHNWNiaTh2SUNBZ0lDQWdJQ0FnUEhBZ1pHRjBZUzF6Ym1Gd2NHVmtQVndpZXlVOWRHaHBjeTV6ZEdGMFpTNTBhWFJzWlNBbGZWd2lQbHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lEeG1iM0p0SUdGamRHbHZiajFjSWx3aUlFQnpkV0p0YVhRdWNISmxkbVZ1ZEQxY0luUm9hWE11YldWMGFHOWtjeTVoWkdSUVpYSnpiMjVjSWlBNmMzUjViR1U5WENKN1pHbHpjR3hoZVRvZ1pXUnBkR0ZpYkdVZ1B5QnVkV3hzSURvZ0oyNXZibVVuSUN3Z2IzQmhZMmwwZVRvZ1pXUnBkR0ZpYkdWOVhDSWdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ1N2V5Qm1kV3hzYm1GdFpTNTBjbWx0S0NrZ1B5Qm1kV3hzYm1GdFpTNTBjbWx0S0NrZ09pQW5UbThnYm1GdFpTQmxiblJ5ZVNjZ2ZYMDhYRzVjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFluSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsdWNIVjBJSFI1Y0dVOVhDSjBaWGgwWENJZ2JtRnRaVDFjSW1aMWJHeHVZVzFsWENJZ1FHbHVjSFYwUFZ3aWRHaHBjeTV0WlhSb2IyUnpMblZ3WkdGMFpVWjFiR3h1WVcxbFhDSStJRnh1WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSjFkSFJ2Ymo1RmJuSmxaMmx6ZEhKbGNqd3ZZblYwZEc5dVBseHVYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdKeVBseHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhvTVNCMGFYUnNaVDFjSW50N0lIUm9hWE11Y0hKdmNITXVkR2wwYkdVZ2ZYMWNJajVOYVhKeWIzSThMMmd4UGx4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBibkIxZENCMGVYQmxQVndpZEdWNGRGd2lJR1JwYzJGaWJHVmtJRHAyWVd4MVpUMWNJbTFsYzNOaFoyVmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJRHd2Wm05eWJUNWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUx5OGdJQ0FnSUNBZ0lDQThMM0ErWEc1Y2JseHVMeThnSUNBZ0lDQWdJQ0E4ZFd3K1hHNWNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lIc2xJSEJsY25OdmJuTXVabTl5UldGamFDZ29jR1Z5YzI5dUtUMCtleUFsZlZ4dVhHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR3hwUG5zbFBTQndaWEp6YjI0Z0pYMGdabkp2YlNCN2V5QmpiM1Z1ZEdWeUlIMTlQQzlzYVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdleVVnZlNrZ0pYMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUx5OGdJQ0FnSUNBZ0lDQThMM1ZzUGx4dVhHNHZMeUFnSUNBZ0lDQWdJRHhpZFhSMGIyNGdRR05zYVdOclBWd2lkR2hwY3k1dFpYUm9iMlJ6TG1sdVkzSmxiV1Z1ZEZ3aVBrZHZJSFJ2SUVOdmJXbHVaeUJUYjI5dVBDOWlkWFIwYjI0K1hHNWNiaTh2SUNBZ0lDQWdJQ0FnUEdKMWRIUnZiaUJBWTJ4cFkyczlYQ0owWlhOMFJuVnVZM1JwYjI1Y0lqNVVaWE4wSUVaMWJtTjBhVzl1UEM5aWRYUjBiMjQrWEc0Z0lDQWdJQ0FnSUZ4dUx5OGdJQ0FnSUR3dlpHbDJQbHh1WEc0Z0lDQWdYRzVjYmk4dklDQWdJQ0E4YzJOeWFYQjBQbHh1WEc0dkx5QWdJQ0FnSUNBZ0lIZHBibVJ2ZHk1MFpYTjBSblZ1WTNScGIyNGdQU0JtZFc1amRHbHZiaWhsZGlsN1hHNWNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdWQyRnliaWduVkdWemRDQm1kVzVqZEdsdmJpQjNiM0pySnl3Z1pYWXBYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpOHZJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmk4dklDQWdJQ0E4TDNOamNtbHdkRDVjYmlBZ0lDQmNiaUFnSUNCY2JpOHZJRHd2WW05a2VUNWNibHh1THk4Z1BDOW9kRzFzUGx4dUlDQWdJRnh1THk4Z0lDQWdJR0FzWEc1Y2JseHVJQ0FnSUdWdGFYUTZlMXh1WEc0Z0lDQWdJQ0FnSUdWNGNISmxjM05wYjI1U1pXTnZjbVJsWkRvZ0tISmxZMjl5WkNrOVBudGNibHh1SUNBZ0lDQWdJQ0I5TEZ4dVhHNGdJQ0FnSUNBZ0lHTnZibTVsWTNSbFpEb2dLR1VwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1ZDJGeWJpZ25RMjl0Y0c5dVpXNTBJR2x6SUVOdmJtNWxZM1JsWkNjc0lHVXBYRzVjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnZlN4Y2JseHVYRzVjYmlBZ0lDQndjbTl3Y3pwN1hHNWNiaUFnSUNBZ0lDQWdkR2wwYkdVNklDZHNiMkZrYVc1bkxpNHVKMXh1WEc0Z0lDQWdmU3hjYmx4dVhHNWNiaUFnSUNCemRHRjBaVHA3WEc1Y2JpQWdJQ0FnSUNBZ1pXUnBkR0ZpYkdVNklIUnlkV1VzWEc1Y2JpQWdJQ0FnSUNBZ1puVnNiRzVoYldVNklDZHVieUJrWVhSaEp5eGNiaUFnSUNBZ0lDQWdMeThnWm5Wc2JHNWhiV1U2SUNkN0pUMG9ibVYzSUVSaGRHVW9LU2tsZlNjc1hHNWNiaUFnSUNBZ0lDQWdkR2wwYkdVNklDZElaV3hzYnlCc1pYTWdaMlZ1Y3ljc1hHNWNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpUb2dKMHh2Y21WdElHbHdjM1Z0SUh0N0lHTnZkVzUwWlhJZ2ZYMG5MRnh1WEc0Z0lDQWdJQ0FnSUhKdmRYUmxPaUFuWTI5dGFXNW5jMjl2Ymljc1hHNWNiaUFnSUNBZ0lDQWdZMjkxYm5SbGNqb2dNVEFzWEc1Y2JpQWdJQ0FnSUNBZ2NHVnljMjl1Y3pvZ1cxeHVJQ0FnSUNBZ0lDQWdJQ0FnSjFsaGJtNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0owTm9jbWx6ZEdsdVlTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNBblRYbGhibUVuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdKMU41WVc1aEoxeHVJQ0FnSUNBZ0lDQmRMRnh1WEc0Z0lDQWdmU3hjYmx4dVhHNWNiaUFnSUNCdFpYUm9iMlJ6T250Y2JseHVJQ0FnSUNBZ0lDQjFjR1JoZEdWR2RXeHNibUZ0WlNoN0lITmxiR1lzSUdWMlpXNTBmU2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVCMGN5MXBaMjV2Y21WY2JpQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWMzUmhkR1V1Wm5Wc2JHNWhiV1VnUFNCbGRtVnVkQzUwWVhKblpYUS9MblpoYkhWbGZId25KMXh1WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQmhaR1JRWlhKemIyNG9leUJ6Wld4bUxDQmxkbVZ1ZEgwcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JtYjNKdElEMGdaWFpsYm5RdWRHRnlaMlYwSUdGeklFaFVUVXhHYjNKdFJXeGxiV1Z1ZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1ptOXliUzVtZFd4c2JtRnRaUzUyWVd4MVpTbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCbWIzSnRMbVoxYkd4dVlXMWxMblpoYkhWbElEMGdLQ0JtYjNKdExtWjFiR3h1WVcxbExuWmhiSFZsSUNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1l1YzNSaGRHVXVjR1Z5YzI5dWN5NXdkWE5vS0dadmNtMHVablZzYkc1aGJXVXVkbUZzZFdVcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0p0TG1aMWJHeHVZVzFsTG5aaGJIVmxJRDBnSnlkY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxiR1l1YzNSaGRHVXVablZzYkc1aGJXVWdQU0FuSjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduUVdSa1VHVnljMjl1SnlsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyVnNaaTV6ZEdGMFpTNXdaWEp6YjI1ekxuQjFjMmdvWUNSN0lDaHVaWGNnUkdGMFpTZ3BLU0I5WUNsY2JseHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnYVc1amNtVnRaVzUwS0hzZ2MyVnNaaUI5S1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNXpkR0YwWlM1d1pYSnpiMjV6V3pGZElEMGdZRWxoYmtOaGNuUmxjaUJPYjNjZ0pIc2djMlZzWmk1emRHRjBaUzVqYjNWdWRHVnlJSDBnTHlCN2V5QmpiM1Z1ZEdWeUlIMTlZRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaV3htTG5OMFlYUmxMbU52ZFc1MFpYSXJLenRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNXpkR0YwWlM1bFpHbDBZV0pzWlNBOUlDRnpaV3htTG5OMFlYUmxMbVZrYVhSaFlteGxJRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjMlZzWmk1emRHRjBaUzV0WlhOellXZGxJRDBnWUZkbElHTnZkVzUwSUhSdklDUjdJSE5sYkdZdWMzUmhkR1V1WTI5MWJuUmxjaUI5WUZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5Z25TVzVqY21WdFpXNTBKeXdnYzJWc1ppNXpkR0YwWlM1amIzVnVkR1Z5TENCelpXeG1Mbk4wWVhSbExuQmxjbk52Ym5NZ0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlZ4dVhHNWNibjBwWEc1Y2JseHVYRzVjYmx4dVkyOXVjM1FnU0c5dFpWTmpjbVZsYmlBOUlHNWxkeUJUWlc1elpXNVRZM0psWlc0b2UxeHVYRzRnSUNBZ2JtRnRaVG9nSjJodmJXVW5MRnh1SUNBZ0lGeHVJQ0FnSUc5d2RHbHZibk02ZTF4dVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhSbGJYQnNZWFJsT2lBbmMyTnlaV1Z1Y3k5b2IyMWxMbWgwYld3bkxGeHVYRzU5S1Z4dVhHNWNibHh1WEc0dkx5QmpiMjV6YjJ4bExuZGhjbTRvSjFaTkp5d2dkbTBwWEc1Y2JseHVYRzVjYmk4dklHTnZibk4wSUhKdklEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnbmMyNHRjbTl2ZENjcFhHNWNiaTh2SUdSdlkzVnRaVzUwTG1KdlpIa3VZWEJ3Wlc1a1EyaHBiR1FvY204cFhHNWNibHh1THk4Z2MyVjBWR2x0Wlc5MWRDZ29LVDArZTF4dVhHNHZMeUFnSUNBZ2NtOHVjMlYwUVhSMGNtbGlkWFJsS0Nkb1pXeHNieWNzSUNkM2IzSnNaQ2NwWEc0dkx5QWdJQ0FnY204dWMyVjBRWFIwY21saWRYUmxLQ2QwYVhSc1pTY3NJQ2QzYjNKc1pDY3BYRzVjYmk4dklIMHNJREV3TURBcFhHNWNiaUpkZlE9PSIsImltcG9ydCB7IE5hdGl2ZURpcmVjdGl2ZUF0dHJpYnV0ZXMgfSBmcm9tIFwiLi9kaXJlY3RpdmUubmF0aXZlXCI7XG5pbXBvcnQgeyBBcnJheVJhbmdlIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG4vKipcbiAqIEV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBjb25zdCBTeW50YXhFY2hvID0gbmV3IFJlZ0V4cCgne3soLio/KX19JywgJ2cnKTtcbmV4cG9ydCBjb25zdCBTeW50YXhTbmFwQ29kZSA9IG5ldyBSZWdFeHAoJ3slKC4qPyklfScsICdnJyk7XG5leHBvcnQgY29uc3QgU3lEZXRyID0gJyVzbic7XG5leHBvcnQgY29uc3QgRGlyZWN0aXZlQXR0cmlidXRlcyA9IE5hdGl2ZURpcmVjdGl2ZUF0dHJpYnV0ZXM7XG4vKipcbiAqIFN0YWJpbGl6ZSBFY2hvIEV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uKGNvbnRlbnQsIHN0b3ApIHtcbiAgICBjb25zdCBlY2hvcyA9IFsuLi5jb250ZW50Lm1hdGNoQWxsKFN5bnRheEVjaG8pXTtcbiAgICBpZiAoZWNob3MubGVuZ3RoKSB7XG4gICAgICAgIGVjaG9zLm1hcChtID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cCgobVswXSkucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJyksICdnJyksIGA8JHtTeURldHJ9PSR7bVsxXX0gJHtTeURldHJ9PmApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChzdG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGVudDtcbn1cbi8qKlxuICogU3RhYmlsaXplIFNuYXBDb2RlIEV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YWJpbGl6ZVNuYXBDb2RlRXhwcmVzc2lvbihjb250ZW50LCBzdG9wKSB7XG4gICAgY29uc3QgZWNob3MgPSBbLi4uY29udGVudC5tYXRjaEFsbChTeW50YXhTbmFwQ29kZSldO1xuICAgIGlmIChlY2hvcy5sZW5ndGgpIHtcbiAgICAgICAgZWNob3MubWFwKG0gPT4ge1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKChtWzBdKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSwgJ2cnKSwgYDwke1N5RGV0cn0ke21bMV19ICR7U3lEZXRyfT5gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlRXhwcmVzc2lvblJlY29yZChzdGF0ZSkge1xuICAgIGlmICgoc3RhdGUubm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IHN0YXRlLm5vZGUgaW5zdGFuY2VvZiBOb2RlKSAmJiAhc3RhdGUubW9ja3VwKSB7XG4gICAgICAgIHN0YXRlLm1vY2t1cCA9IHN0YXRlLm5vZGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG4vKipcbiAqIFBhcnNlIEF0dHJpYnV0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlQXR0cmlidXRlc0V4cHJlc3Npb24obm9kZSwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiAoKCkgPT4geyB9KTtcbiAgICBpZiAobm9kZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChub2RlLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG5vZGUuYXR0cmlidXRlcykubWFwKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBEaXJlY3RpdmVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKE5hdGl2ZURpcmVjdGl2ZUF0dHJpYnV0ZXMuQXZhaWxhYmxlcyB8fCB7fSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLmF0dHJpYnV0ZS5uYW1lLm1hdGNoQWxsKG5ldyBSZWdFeHAoYF4ke2RpcmVjdGl2ZS5leHByZXNzaW9ufWAsICdnaScpKV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IGF0dHJpYnV0ZS5uYW1lPy5zdWJzdHJpbmcoKGRpcmVjdGl2ZS5leHByZXNzaW9uIHx8ICcnKT8ubGVuZ3RoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBzcGxpdFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSBDcmVhdGVFeHByZXNzaW9uUmVjb3JkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RpcmVjdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vY2t1cDogYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IEFycmF5UmFuZ2Uoc3BsaXQsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBFY2hvXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlc0VjaG8gPSBbLi4uYXR0cmlidXRlLnZhbHVlLm1hdGNoQWxsKFN5bnRheEVjaG8pXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc0VjaG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNFY2hvLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gQ3JlYXRlRXhwcmVzc2lvblJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZS5lY2hvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2NrdXA6IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBTbmFwQ29kZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXNTbmFwQ29kZSA9IFsuLi5hdHRyaWJ1dGUudmFsdWUubWF0Y2hBbGwoU3ludGF4U25hcENvZGUpXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1NuYXBDb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzU25hcENvZGUuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSBDcmVhdGVFeHByZXNzaW9uUmVjb3JkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXR0cmlidXRlLnNuYXBjb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2NrdXA6IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUGFyc2VBdHRyaWJ1dGVzRXhwcmVzc2lvbjtcbn1cbi8qKlxuICogUGFyc2UgRWNobyBFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUVjaG9FeHByZXNzaW9uKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKCgpID0+IHsgfSk7XG4gICAgY29uc3QgY29udGVudCA9IChub2RlIGluc3RhbmNlb2YgVGV4dClcbiAgICAgICAgPyBub2RlLnRleHRDb250ZW50XG4gICAgICAgIDogKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IG5vZGUuaW5uZXJIVE1MIDogbnVsbCk7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi5jb250ZW50Py5tYXRjaEFsbChTeW50YXhFY2hvKV07XG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSBDcmVhdGVFeHByZXNzaW9uUmVjb3JkKHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogKG1hdGNoWzFdIHx8ICcnKS50cmltKCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlY2hvJyxcbiAgICAgICAgICAgICAgICAgICAgZWNobzogY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWNvcmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUGFyc2UgRWNobycsIHJlY29yZClcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG59XG4vKipcbiAqIFBhcnNlIFNuYXBDb2RlIEV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhcnNlU25hcENvZGVFeHByZXNzaW9uKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKCgpID0+IHsgfSk7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgaWYgKG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gQ3JlYXRlRXhwcmVzc2lvblJlY29yZCh7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgdHlwZTogJ3NuYXBjb2RlJyxcbiAgICAgICAgICAgIHNuYXBjb2RlOiBbXVxuICAgICAgICB9KTtcbiAgICAgICAgbm9kZS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi5jaGlsZC50ZXh0Q29udGVudC5tYXRjaEFsbChTeW50YXhTbmFwQ29kZSldO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQuc25hcGNvZGU/LnB1c2goeyBub2RlOiBjaGlsZCwgbWF0Y2hlcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVjb3JkLnNuYXBjb2RlKSB7XG4gICAgICAgICAgICBpZiAocmVjb3JkLnNuYXBjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBGaW5kRXhwcmVzc2lvbnMobm9kZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBub2RlcyA9IG5vZGUuY2hpbGROb2RlcztcbiAgICAvKipcbiAgICAgKiBQYXJzZSBOb2RlIEF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBQYXJzZUF0dHJpYnV0ZXNFeHByZXNzaW9uKG5vZGUsIGNhbGxiYWNrKTtcbiAgICAvKipcbiAgICAgKiBGaW5kXG4gICAgICovXG4gICAgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBub2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIC8qKiAqIEZpbmQgU25hcENvZGUgKi9cbiAgICAgICAgICAgIGNvbnN0IHNuYXBjb2RlID0gUGFyc2VTbmFwQ29kZUV4cHJlc3Npb24oY2hpbGQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIC8qKiAqIEZpbmQgRGVlcCAqL1xuICAgICAgICAgICAgaWYgKCFzbmFwY29kZSkge1xuICAgICAgICAgICAgICAgIEZpbmRFeHByZXNzaW9ucyhjaGlsZCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kIEVjaG9cbiAgICAgICAgICovXG4gICAgICAgIFBhcnNlRWNob0V4cHJlc3Npb24obm9kZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXR1cm4gRmluZEV4cHJlc3Npb25zO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlhod2NtVnpjMmx2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDJOdmNtVXZaWGh3Y21WemMybHZiaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFVkJRVVVzVFVGQlRTeHZRa0ZCYjBJc1EwRkJRenRCUVVVdlJDeFBRVUZQTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTFCUVUwc1lVRkJZU3hEUVVGRE8wRkJSM3BET3p0SFFVVkhPMEZCUzBnc1RVRkJUU3hEUVVGRExFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlFUdEJRVVYwUkN4TlFVRk5MRU5CUVVNc1RVRkJUU3hqUVVGakxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGQk8wRkJSVEZFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVUU3UVVGSE0wSXNUVUZCVFN4RFFVRkRMRTFCUVUwc2JVSkJRVzFDTEVkQlFVY3NlVUpCUVhsQ0xFTkJRVUU3UVVGTE5VUTdPMGRCUlVjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzZFVKQlFYVkNMRU5CUVVNc1QwRkJaU3hGUVVGRkxFbEJRV003U1VGRmJrVXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJRVHRKUVVVdlF5eEpRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVNN1VVRkZXaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUVN4RlFVRkZPMWxCUlZRc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlEzSkNMRWxCUVVrc1RVRkJUU3hEUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeE5RVUZOTEVOQlFVTXNSVUZCUnl4SFFVRkhMRU5CUVVVc1JVRkRka1FzU1VGQlNTeE5RVUZOTEVsQlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVU53UXl4RFFVRkJPMUZCUlV3c1EwRkJReXhEUVVGRExFTkJRVUU3UzBGRlREdFRRVVZITzFGQlJVRXNTVUZCUnl4SlFVRkpMRVZCUVVNN1dVRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dFRRVUZGTzB0QlJUTkNPMGxCUlVRc1QwRkJUeXhQUVVGUExFTkJRVU03UVVGRmJrSXNRMEZCUXp0QlFVdEVPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFZRVUZWTERKQ1FVRXlRaXhEUVVGRExFOUJRV1VzUlVGQlJTeEpRVUZqTzBsQlJYWkZMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRmJrUXNTVUZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRE8xRkJSVm9zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVFc1JVRkJSVHRaUVVWVUxFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVTnlRaXhKUVVGSkxFMUJRVTBzUTBGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVjc1IwRkJSeXhEUVVGRkxFVkJRM1pFTEVsQlFVa3NUVUZCVFN4SFFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVVVzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZEYmtNc1EwRkJRVHRSUVVWTUxFTkJRVU1zUTBGQlF5eERRVUZCTzB0QlJVdzdVMEZGUnp0UlFVVkJMRWxCUVVjc1NVRkJTU3hGUVVGRE8xbEJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdVMEZCUlR0TFFVVXpRanRKUVVWRUxFOUJRVThzVDBGQlR5eERRVUZETzBGQlJXNUNMRU5CUVVNN1FVRk5SQ3hOUVVGTkxGVkJRVlVzYzBKQlFYTkNMRU5CUVVNc1MwRkJkVUk3U1VGRk1VUXNTVUZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxGbEJRVmtzVjBGQlZ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4SlFVRkpMRmxCUVZrc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkRPMUZCUld4R0xFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdTMEZGTlVNN1NVRkZSQ3hQUVVGUExFdEJRVXNzUTBGQlFUdEJRVVZvUWl4RFFVRkRPMEZCU1VRN08wZEJSVWM3UVVGRFNDeE5RVUZOTEZWQlFWVXNlVUpCUVhsQ0xFTkJRVU1zU1VGQmFVSXNSVUZCUlN4UlFVRTBRenRKUVVkeVJ5eFJRVUZSTEVkQlFVY3NUMEZCVHl4UlFVRlJMRWxCUVVrc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSU3hGUVVGRkxFZEJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZITDBRc1NVRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZETzFGQlJXWXNTVUZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzUlVGQlF6dFpRVVYwUWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGQkxFVkJRVVU3WjBKQlJ6RkRPenR0UWtGRlJ6dG5Ra0ZGU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRlZCUVZVc1NVRkJSU3hGUVVGRkxFTkJRVU03Y1VKQlJYUkVMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVUVzUlVGQlJUdHZRa0ZGV2l4TlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlN5eFRRVUZUTEVOQlFVTXNWVUZCVnl4RlFVRkZMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCTzI5Q1FVVTFSaXhKUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVTTdkMEpCUldRc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVRXNSVUZCUlRzMFFrRkZia0lzVFVGQlRTeExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlFVTXNWVUZCVlN4SlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHMwUWtGRmRFWXNUVUZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZCT3pSQ1FVZHlRaXhOUVVGTkxFMUJRVTBzUjBGQlJ5eHpRa0ZCYzBJc1EwRkJRenRuUTBGRGJFTXNTVUZCU1R0blEwRkRTaXhUUVVGVE8yZERRVU5VTEV0QlFVczdaME5CUTB3c1NVRkJTVHRuUTBGRFNpeEpRVUZKTEVWQlFVVXNWMEZCVnp0blEwRkRha0lzVFVGQlRTeEZRVUZGTEZOQlFWTTdaME5CUTJwQ0xGTkJRVk1zUlVGQlJTeFZRVUZWTEVOQlFWTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1EwRkJRenMyUWtGRE1VTXNRMEZCUXl4RFFVRkJPelJDUVVWR0xGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0M1FrRkZjRUlzUTBGQlF5eERRVUZETEVOQlFVRTdjVUpCUlV3N1owSkJSVXdzUTBGQlF5eERRVUZETEVOQlFVRTdaMEpCU1VZN08yMUNRVVZITzJkQ1FVTklMRTFCUVUwc1YwRkJWeXhIUVVGSExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVTVSQ3hKUVVGSExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVTTdiMEpCUld4Q0xGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkJMRVZCUVVVN2QwSkJSWFpDTEUxQlFVMHNUVUZCVFN4SFFVRkhMSE5DUVVGelFpeERRVUZET3pSQ1FVTnNReXhKUVVGSk96UkNRVU5LTEZOQlFWTTdORUpCUTFRc1MwRkJTenMwUWtGRFRDeEpRVUZKTEVWQlFVVXNaMEpCUVdkQ096UkNRVU4wUWl4TlFVRk5MRVZCUVVVc1UwRkJVenQ1UWtGRGNFSXNRMEZCUXl4RFFVRkJPM2RDUVVWR0xGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0dlFrRkZjRUlzUTBGQlF5eERRVUZETEVOQlFVRTdhVUpCUlV3N1owSkJTMFE3TzIxQ1FVVkhPMmRDUVVOSUxFMUJRVTBzWlVGQlpTeEhRVUZITEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVWMFJTeEpRVUZITEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVNN2IwSkJSWFJDTEdWQlFXVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGQkxFVkJRVVU3ZDBKQlJUTkNMRTFCUVUwc1RVRkJUU3hIUVVGSExITkNRVUZ6UWl4RFFVRkRPelJDUVVOc1F5eEpRVUZKT3pSQ1FVTktMRk5CUVZNN05FSkJRMVFzUzBGQlN6czBRa0ZEVEN4SlFVRkpMRVZCUVVVc2IwSkJRVzlDT3pSQ1FVTXhRaXhOUVVGTkxFVkJRVVVzVTBGQlV6dDVRa0ZEY0VJc1EwRkJReXhEUVVGQk8zZENRVVZHTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHR2UWtGRmNFSXNRMEZCUXl4RFFVRkRMRU5CUVVFN2FVSkJSVXc3V1VGSlRDeERRVUZETEVOQlFVTXNRMEZCUVR0VFFVZE1PMHRCUlVvN1NVRkhSQ3hQUVVGUExIbENRVUY1UWl4RFFVRkRPMEZCUlhKRExFTkJRVU03UVVGSlJEczdSMEZGUnp0QlFVTklMRTFCUVUwc1ZVRkJWU3h0UWtGQmJVSXNRMEZCUXl4SlFVRnBRaXhGUVVGRkxGRkJRVFJETzBsQlJTOUdMRkZCUVZFc1IwRkJSeXhQUVVGUExGRkJRVkVzU1VGQlNTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZGTEVWQlFVVXNSMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVdlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWxCUVVrc1dVRkJXU3hKUVVGSkxFTkJRVU03VVVGRGJFTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWE8xRkJRMnhDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1dVRkJXU3hYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlJ6VkVMRWxCUVVrc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlFUdEpRVWRxUWl4SlFVRkhMRTlCUVU4c1JVRkJRenRSUVVWUUxFMUJRVTBzVDBGQlR5eEhRVUZITEVOQlFVTXNSMEZCUnl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVRTdVVUZGYkVRc1NVRkJSeXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZETzFsQlJXUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRaUVVWaUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkJMRVZCUVVVN1owSkJSVzVDTEUxQlFVMHNUVUZCVFN4SFFVRkhMSE5DUVVGelFpeERRVUZETzI5Q1FVTnNReXhKUVVGSk8yOUNRVU5LTEVsQlFVa3NSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVN2IwSkJRek5DTEVsQlFVa3NSVUZCUlN4TlFVRk5PMjlDUVVOYUxFbEJRVWtzUlVGQlJTeFBRVUZQTzI5Q1FVTmlMRXRCUVVzN2FVSkJRMUlzUTBGQlF5eERRVUZCTzJkQ1FVVkdMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdFpRVVZ3UWl4RFFVRkRMRU5CUVVNc1EwRkJRVHRaUVVWR0xHOURRVUZ2UXp0VFFVVjJRenRMUVVWS08wbEJSVVFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZGYWtJc1EwRkJRenRCUVV0RU96dEhRVVZITzBGQlEwZ3NUVUZCVFN4VlFVRlZMSFZDUVVGMVFpeERRVUZETEVsQlFXbENMRVZCUVVVc1VVRkJORU03U1VGRmJrY3NVVUZCVVN4SFFVRkhMRTlCUVU4c1VVRkJVU3hKUVVGSkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVVVzUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlM5RUxFbEJRVWtzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXp0SlFVZHNRaXhKUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RlFVRkRPMUZCUlhSQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8xbEJRMnhETEVsQlFVazdXVUZEU2l4SlFVRkpMRVZCUVVVc1ZVRkJWVHRaUVVOb1FpeFJRVUZSTEVWQlFVVXNSVUZCUlR0VFFVTm1MRU5CUVVNc1EwRkJRVHRSUVVWR0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJRU3hGUVVGRk8xbEJSVE5DTEVsQlFVY3NTMEZCU3l4RFFVRkRMRmRCUVZjc1JVRkJRenRuUWtGRmFrSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJXaEZMRWxCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlF6dHZRa0ZGWkN4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVVVzUTBGQlFUdHBRa0ZGY0VRN1lVRkZTanRSUVVWTUxFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlJVWXNTVUZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRE8xbEJSV1lzU1VGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1JVRkJRenRuUWtGRmRFSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRuUWtGRllpeFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVFN1lVRkZia0k3VTBGRlNqdExRVWxLTzBsQlIwUXNUMEZCVHl4TFFVRkxMRU5CUVVNN1FVRkZha0lzUTBGQlF6dEJRVWRFTEUxQlFVMHNWVUZCVlN4bFFVRmxMRU5CUVVNc1NVRkJhVUlzUlVGQlJTeFJRVUUwUXp0SlFVVXpSaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRPMGxCUlRsQ096dFBRVVZITzBsQlEwZ3NlVUpCUVhsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkJPMGxCU1hwRE96dFBRVVZITzBsQlEwZ3NTVUZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRE8xRkJSVm9zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVFc1JVRkJSVHRaUVVWcVFpeHpRa0ZCYzBJN1dVRkRkRUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NkVUpCUVhWQ0xFTkJRVU1zUzBGQmIwSXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRaUVVkNlJTeHJRa0ZCYTBJN1dVRkRiRUlzU1VGQlJ5eERRVUZETEZGQlFWRXNSVUZCUXp0blFrRkZWQ3hsUVVGbExFTkJRVU1zUzBGQmIwSXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRoUVVWc1JEdFJRVVZNTEVOQlFVTXNRMEZCUXl4RFFVRkJPMHRCUlV3N1UwRkZSenRSUVVWQk96dFhRVVZITzFGQlEwZ3NiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkJPMHRCUlhSRE8wbEJSVVFzVDBGQlR5eGxRVUZsTEVOQlFVTTdRVUZGTTBJc1EwRkJReUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUU1aGRHbDJaVVJwY21WamRHbDJaVUYwZEhKcFluVjBaWE1nZlNCbWNtOXRJRndpTGk5a2FYSmxZM1JwZG1VdWJtRjBhWFpsWENJN1hHNXBiWEJ2Y25RZ2V5QkZlSEJ5WlhOemFXOXVVbVZqYjNKa0lIMGdabkp2YlNCY0lpNHZhVzVrWlhndWRGd2lPMXh1YVcxd2IzSjBJSHNnUVhKeVlYbFNZVzVuWlNCOUlHWnliMjBnWENJdUwzVjBhV3hwZEdsbGMxd2lPMXh1WEc1Y2JpOHFLbHh1SUNvZ1JYaHdjbVZ6YzJsdmJuTmNiaUFxTDF4dVhHNWNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdVM2x1ZEdGNFJXTm9ieUE5SUc1bGR5QlNaV2RGZUhBb0ozdDdLQzRxUHlsOWZTY3NJQ2RuSnlsY2JseHVaWGh3YjNKMElHTnZibk4wSUZONWJuUmhlRk51WVhCRGIyUmxJRDBnYm1WM0lGSmxaMFY0Y0NnbmV5VW9MaW8vS1NWOUp5d2dKMmNuS1Z4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnVTNsRVpYUnlJRDBnSnlWemJpZGNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdSR2x5WldOMGFYWmxRWFIwY21saWRYUmxjeUE5SUU1aGRHbDJaVVJwY21WamRHbDJaVUYwZEhKcFluVjBaWE5jYmx4dVhHNWNibHh1THlvcVhHNGdLaUJUZEdGaWFXeHBlbVVnUldOb2J5QkZlSEJ5WlhOemFXOXVYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCVGRHRmlhV3hwZW1WRlkyaHZSWGh3Y21WemMybHZiaWhqYjI1MFpXNTBPaUJ6ZEhKcGJtY3NJSE4wYjNBL09pQmliMjlzWldGdUtYdGNibHh1SUNBZ0lHTnZibk4wSUdWamFHOXpJRDBnV3k0dUxtTnZiblJsYm5RdWJXRjBZMmhCYkd3b1UzbHVkR0Y0UldOb2J5bGRYRzRnSUNBZ0lGeHVJQ0FnSUdsbUtHVmphRzl6TG14bGJtZDBhQ2w3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCbFkyaHZjeTV0WVhBb2JUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpXNTBJRDBnWTI5dWRHVnVkQzV5WlhCc1lXTmxLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZHlCU1pXZEZlSEFvSUNodFd6QmRLUzV5WlhCc1lXTmxLQzliWGx4Y2QxeGNjMTB2WjJrc0lDZGNYRnhjSkNZbktTQXNJQ2RuSnlBcExDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmdQQ1I3VTNsRVpYUnlmVDBrZXlCdFd6RmRJSDBnSkh0VGVVUmxkSEo5UG1BZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmlBZ0lDQmxiSE5sZTF4dVhHNGdJQ0FnSUNBZ0lHbG1LSE4wYjNBcGV5QnlaWFIxY200Z2JuVnNiRHNnZlZ4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR052Ym5SbGJuUTdYRzVjYm4xY2JseHVYRzVjYmx4dUx5b3FYRzRnS2lCVGRHRmlhV3hwZW1VZ1UyNWhjRU52WkdVZ1JYaHdjbVZ6YzJsdmJseHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnVTNSaFltbHNhWHBsVTI1aGNFTnZaR1ZGZUhCeVpYTnphVzl1S0dOdmJuUmxiblE2SUhOMGNtbHVaeXdnYzNSdmNEODZJR0p2YjJ4bFlXNHBlMXh1WEc0Z0lDQWdZMjl1YzNRZ1pXTm9iM01nUFNCYkxpNHVZMjl1ZEdWdWRDNXRZWFJqYUVGc2JDaFRlVzUwWVhoVGJtRndRMjlrWlNsZFhHNGdJQ0FnSUZ4dUlDQWdJR2xtS0dWamFHOXpMbXhsYm1kMGFDbDdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JsWTJodmN5NXRZWEFvYlQwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWlc1MElEMGdZMjl1ZEdWdWRDNXlaWEJzWVdObEtGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkeUJTWldkRmVIQW9JQ2h0V3pCZEtTNXlaWEJzWVdObEtDOWJYbHhjZDF4Y2MxMHZaMmtzSUNkY1hGeGNKQ1luS1NBc0lDZG5KeUFwTENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZ1BDUjdVM2xFWlhSeWZTUjdJRzFiTVYwZ2ZTQWtlMU41UkdWMGNuMCtZQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVJQ0FnSUdWc2MyVjdYRzVjYmlBZ0lDQWdJQ0FnYVdZb2MzUnZjQ2w3SUhKbGRIVnliaUJ1ZFd4c095QjlYRzVjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXVkR1Z1ZER0Y2JseHVmVnh1WEc1Y2JseHVYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJEY21WaGRHVkZlSEJ5WlhOemFXOXVVbVZqYjNKa0tITjBZWFJsT2lCRmVIQnlaWE56YVc5dVVtVmpiM0prS1NBNklFVjRjSEpsYzNOcGIyNVNaV052Y21SN1hHNWNiaUFnSUNCcFppZ29jM1JoZEdVdWJtOWtaU0JwYm5OMFlXNWpaVzltSUVoVVRVeEZiR1Z0Wlc1MElIeDhJSE4wWVhSbExtNXZaR1VnYVc1emRHRnVZMlZ2WmlCT2IyUmxLU0FtSmlBaGMzUmhkR1V1Ylc5amEzVndLWHRjYmx4dUlDQWdJQ0FnSUNCemRHRjBaUzV0YjJOcmRYQWdQU0J6ZEdGMFpTNXViMlJsTG1Oc2IyNWxUbTlrWlNoMGNuVmxLVnh1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlITjBZWFJsWEc1Y2JuMWNibHh1WEc1Y2JpOHFLbHh1SUNvZ1VHRnljMlVnUVhSMGNtbGlkWFJsYzF4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdVR0Z5YzJWQmRIUnlhV0oxZEdWelJYaHdjbVZ6YzJsdmJpaHViMlJsT2lCSVZFMU1SV3hsYldWdWRDd2dZMkZzYkdKaFkyczZJQ2h5WldOdmNtUTZJRVY0Y0hKbGMzTnBiMjVTWldOdmNtUXBJRDArSUhadmFXUWdLWHRjYmx4dVhHNGdJQ0FnWTJGc2JHSmhZMnNnUFNCMGVYQmxiMllnWTJGc2JHSmhZMnNnUFQwZ0oyWjFibU4wYVc5dUp5QS9JR05oYkd4aVlXTnJJRG9nS0NncFBUNTdmU2s3WEc1Y2JseHVJQ0FnSUdsbUtHNXZaR1V1WVhSMGNtbGlkWFJsY3lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnYVdZb2JtOWtaUzVoZEhSeWFXSjFkR1Z6TG14bGJtZDBhQ2w3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCUFltcGxZM1F1ZG1Gc2RXVnpLRzV2WkdVdVlYUjBjbWxpZFhSbGN5a3ViV0Z3S0dGMGRISnBZblYwWlQwK2UxeHVJQ0FnSUZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ29nUm1sdVpDQkVhWEpsWTNScGRtVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JQWW1wbFkzUXVkbUZzZFdWektFNWhkR2wyWlVScGNtVmpkR2wyWlVGMGRISnBZblYwWlhNdVFYWmhhV3hoWW14bGMzeDhlMzBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXViV0Z3S0dScGNtVmpkR2wyWlQwK2V5QmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnV3k0dUxtRjBkSEpwWW5WMFpTNXVZVzFsTG0xaGRHTm9RV3hzS0c1bGR5QlNaV2RGZUhBb1lGNGtleUJrYVhKbFkzUnBkbVV1Wlhod2NtVnpjMmx2YmlCOVlDd2dKMmRwSnlrcFhWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtHMWhkR05vWlhNdWJHVnVaM1JvS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXRjBZMmhsY3k1bWIzSkZZV05vS0cxaGRHTm9QVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkQ0E5SUdGMGRISnBZblYwWlM1dVlXMWxQeTV6ZFdKemRISnBibWNvS0dScGNtVmpkR2wyWlM1bGVIQnlaWE56YVc5dWZId25KeWsvTG14bGJtZDBhQ2t1YzNCc2FYUW9KeTRuS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2JtRnRaU0E5SUhOd2JHbDBXekJkWEc1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElISmxZMjl5WkNBOUlFTnlaV0YwWlVWNGNISmxjM05wYjI1U1pXTnZjbVFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2FYSmxZM1JwZG1Vc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxaGRHTm9MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVZVzFsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbE9pQW5aR2x5WldOMGFYWmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiVzlqYTNWd09pQmhkSFJ5YVdKMWRHVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnlaM1Z0Wlc1MGN6b2dRWEp5WVhsU1lXNW5aVHh6ZEhKcGJtYytLSE53YkdsMExDQXhLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb2NtVmpiM0prS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ29nUm1sdVpDQkZZMmh2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYldGMFkyaGxjMFZqYUc4Z1BTQmJMaTR1WVhSMGNtbGlkWFJsTG5aaGJIVmxMbTFoZEdOb1FXeHNLRk41Ym5SaGVFVmphRzhwWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LRzFoZEdOb1pYTkZZMmh2TG14bGJtZDBhQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0YwWTJobGMwVmphRzh1Wm05eVJXRmphQ2h0WVhSamFEMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnlaV052Y21RZ1BTQkRjbVZoZEdWRmVIQnlaWE56YVc5dVVtVmpiM0prS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnViMlJsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBkSEpwWW5WMFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhSamFDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbE9pQW5ZWFIwY21saWRYUmxMbVZqYUc4bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzF2WTJ0MWNEb2dZWFIwY21saWRYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWh5WldOdmNtUXBYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dVhHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlFWnBibVFnVTI1aGNFTnZaR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpVMjVoY0VOdlpHVWdQU0JiTGk0dVlYUjBjbWxpZFhSbExuWmhiSFZsTG0xaGRHTm9RV3hzS0ZONWJuUmhlRk51WVhCRGIyUmxLVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppaHRZWFJqYUdWelUyNWhjRU52WkdVdWJHVnVaM1JvS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhSamFHVnpVMjVoY0VOdlpHVXVabTl5UldGamFDaHRZWFJqYUQwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCeVpXTnZjbVFnUFNCRGNtVmhkR1ZGZUhCeVpYTnphVzl1VW1WamIzSmtLSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGMGRISnBZblYwWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRZWFJqYUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsT2lBbllYUjBjbWxpZFhSbExuTnVZWEJqYjJSbEp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0YjJOcmRYQTZJR0YwZEhKcFluVjBaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnNvY21WamIzSmtLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJRkJoY25ObFFYUjBjbWxpZFhSbGMwVjRjSEpsYzNOcGIyNDdYRzRnSUNBZ1hHNTlYRzVjYmx4dVhHNHZLaXBjYmlBcUlGQmhjbk5sSUVWamFHOGdSWGh3Y21WemMybHZibHh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1VHRnljMlZGWTJodlJYaHdjbVZ6YzJsdmJpaHViMlJsT2lCSVZFMU1SV3hsYldWdWRDd2dZMkZzYkdKaFkyczZJQ2h5WldOdmNtUTZJRVY0Y0hKbGMzTnBiMjVTWldOdmNtUXBJRDArSUhadmFXUWdLWHRjYmx4dUlDQWdJR05oYkd4aVlXTnJJRDBnZEhsd1pXOW1JR05oYkd4aVlXTnJJRDA5SUNkbWRXNWpkR2x2YmljZ1B5QmpZV3hzWW1GamF5QTZJQ2dvS1QwK2UzMHBPMXh1WEc0Z0lDQWdZMjl1YzNRZ1kyOXVkR1Z1ZENBOUlDaHViMlJsSUdsdWMzUmhibU5sYjJZZ1ZHVjRkQ2tnWEc0Z0lDQWdJQ0FnSUQ4Z2JtOWtaUzUwWlhoMFEyOXVkR1Z1ZENCY2JpQWdJQ0FnSUNBZ09pQW9ibTlrWlNCcGJuTjBZVzVqWlc5bUlFaFVUVXhGYkdWdFpXNTBJRDhnYm05a1pTNXBibTVsY2toVVRVd2dPaUJ1ZFd4c0tUdGNibHh1SUNBZ0lGeHVJQ0FnSUd4bGRDQm1iM1Z1WkNBOUlHWmhiSE5sWEc1Y2JseHVJQ0FnSUdsbUtHTnZiblJsYm5RcGUxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHMWhkR05vWlhNZ1BTQmJMaTR1WTI5dWRHVnVkRDh1YldGMFkyaEJiR3dvVTNsdWRHRjRSV05vYnlsZFhHNWNiaUFnSUNBZ0lDQWdhV1lvYldGMFkyaGxjeTVzWlc1bmRHZ3BlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM1Z1WkNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZEdOb1pYTXVabTl5UldGamFDaHRZWFJqYUQwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NtVmpiM0prSUQwZ1EzSmxZWFJsUlhod2NtVnpjMmx2YmxKbFkyOXlaQ2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1U2SUNodFlYUmphRnN4WFh4OEp5Y3BMblJ5YVcwb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pUb2dKMlZqYUc4bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsWTJodk9pQmpiMjUwWlc1MExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhSamFGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb2NtVmpiM0prS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnWTI5dWMyOXNaUzVzYjJjb0oxQmhjbk5sSUVWamFHOG5MQ0J5WldOdmNtUXBYRzVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdabTkxYm1RN1hHNWNibjFjYmx4dVhHNWNibHh1THlvcVhHNGdLaUJRWVhKelpTQlRibUZ3UTI5a1pTQkZlSEJ5WlhOemFXOXVYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCUVlYSnpaVk51WVhCRGIyUmxSWGh3Y21WemMybHZiaWh1YjJSbE9pQklWRTFNUld4bGJXVnVkQ3dnWTJGc2JHSmhZMnM2SUNoeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwSUQwK0lIWnZhV1FnS1h0Y2JseHVJQ0FnSUdOaGJHeGlZV05ySUQwZ2RIbHdaVzltSUdOaGJHeGlZV05ySUQwOUlDZG1kVzVqZEdsdmJpY2dQeUJqWVd4c1ltRmpheUE2SUNnb0tUMCtlMzBwTzF4dVhHNGdJQ0FnYkdWMElHWnZkVzVrSUQwZ1ptRnNjMlU3WEc1Y2JseHVJQ0FnSUdsbUtHNXZaR1V1WTJocGJHUk9iMlJsY3k1c1pXNW5kR2dwZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhKbFkyOXlaQ0E5SUVOeVpXRjBaVVY0Y0hKbGMzTnBiMjVTWldOdmNtUW9lMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtOWtaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUNkemJtRndZMjlrWlNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Ym1Gd1kyOWtaVG9nVzExY2JpQWdJQ0FnSUNBZ2ZTbGNibHh1SUNBZ0lDQWdJQ0J1YjJSbExtTm9hV3hrVG05a1pYTXVabTl5UldGamFDaGphR2xzWkQwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaGphR2xzWkM1MFpYaDBRMjl1ZEdWdWRDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWFJqYUdWeklEMGdXeTR1TG1Ob2FXeGtMblJsZUhSRGIyNTBaVzUwTG0xaGRHTm9RV3hzS0ZONWJuUmhlRk51WVhCRGIyUmxLVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppaHRZWFJqYUdWekxteGxibWQwYUNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WamIzSmtMbk51WVhCamIyUmxQeTV3ZFhOb0tDQjdJRzV2WkdVNklHTm9hV3hrTENCdFlYUmphR1Z6SUgwZ0tWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dVhHNGdJQ0FnSUNBZ0lHbG1LSEpsWTI5eVpDNXpibUZ3WTI5a1pTbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSEpsWTI5eVpDNXpibUZ3WTI5a1pTNXNaVzVuZEdncGUxeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmRXNWtJRDBnZEhKMVpUdGNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXloeVpXTnZjbVFwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVYRzVjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdmVnh1SUNBZ0lGeHVYRzRnSUNBZ2NtVjBkWEp1SUdadmRXNWtPMXh1WEc1OVhHNWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRVpwYm1SRmVIQnlaWE56YVc5dWN5aHViMlJsT2lCSVZFMU1SV3hsYldWdWRDd2dZMkZzYkdKaFkyczZJQ2h5WldOdmNtUTZJRVY0Y0hKbGMzTnBiMjVTWldOdmNtUXBJRDArSUhadmFXUWdLWHRjYmx4dUlDQWdJR052Ym5OMElHNXZaR1Z6SUQwZ2JtOWtaUzVqYUdsc1pFNXZaR1Z6TzF4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1VHRnljMlVnVG05a1pTQkJkSFJ5YVdKMWRHVnpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1VHRnljMlZCZEhSeWFXSjFkR1Z6Ulhod2NtVnpjMmx2YmlodWIyUmxMQ0JqWVd4c1ltRmpheWxjYmlBZ0lDQmNiaUFnSUNCY2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFWnBibVJjYmlBZ0lDQWdLaTljYmlBZ0lDQnBaaWh1YjJSbGN5NXNaVzVuZEdncGUxeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdibTlrWlhNdVptOXlSV0ZqYUNoamFHbHNaRDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBdktpb2dLaUJHYVc1a0lGTnVZWEJEYjJSbElDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Ym1Gd1kyOWtaU0E5SUZCaGNuTmxVMjVoY0VOdlpHVkZlSEJ5WlhOemFXOXVLR05vYVd4a0lHRnpJRWhVVFV4RmJHVnRaVzUwTENCallXeHNZbUZqYXlrN1hHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FJQ29nUm1sdVpDQkVaV1Z3SUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaGMyNWhjR052WkdVcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdSbWx1WkVWNGNISmxjM05wYjI1ektHTm9hV3hrSUdGeklFaFVUVXhGYkdWdFpXNTBMQ0JqWVd4c1ltRmpheWxjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JsYkhObGUxeHVYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQkdhVzVrSUVWamFHOWNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUZCaGNuTmxSV05vYjBWNGNISmxjM05wYjI0b2JtOWtaU3dnWTJGc2JHSmhZMnNwWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQkdhVzVrUlhod2NtVnpjMmx2Ym5NN1hHNGdJQ0FnWEc1OVhHNWNibHh1WEc1Y2JpSmRmUT09IiwiaW1wb3J0IHsgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24sIFJlbmRlckVuZ2luZSB9IGZyb20gXCIuL2NvbXBpbGF0ZVwiO1xuaW1wb3J0IHsgU3RhYmlsaXplRWNob0V4cHJlc3Npb24sIFN0YWJpbGl6ZVNuYXBDb2RlRXhwcmVzc2lvbiB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB7IGRlY29kZUhUTUxFbnRpdGllcywgU3RhYmlsaXplQ29udGVudCB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkXG4gICAgICovXG4gICAgcHVzaChuYW1lLCByZWNvcmQpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdID0gdGhpcy5lbnRyaWVzW25hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLmVudHJpZXNbbmFtZV1bdGhpcy5lbnRyaWVzW25hbWVdLmxlbmd0aF0gPSByZWNvcmQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRcbiAgICAgKi9cbiAgICB1cGRhdGUobmFtZSwga2V5LCByZWNvcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lXVtrZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdW2tleV0gPSByZWNvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBlbnRyeSdzIHNsb3QgYnkgUHJvcGVydHkgb3IgU3RhdGUgbmFtZVxuICAgICAqL1xuICAgIHJlbW92ZShuYW1lLCBrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuZW50cmllc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdID0gdGhpcy5lbnRyaWVzW25hbWVdLmZpbHRlcigocmVjb3JkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAhPSBrZXk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gZW50cnkgYnkgUHJvcGVydHkgb3IgU3RhdGUgbmFtZVxuICAgICAqL1xuICAgIGNsZWFuKG5hbWUpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhbiBlbnRyeSBieSBQcm9wZXJ0eSBvciBTdGF0ZSBuYW1lXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IHt9O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZCBieSBQcm9wZXJ0eSBvciBTdGF0ZSBuYW1lXG4gICAgICovXG4gICAgcmV0cmlldmUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW25hbWVdIHx8IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRmluZCBBbGxcbiAgICAgKi9cbiAgICByZXRyaWV2ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEh5ZHJhdGVzIHtcbiAgICAvLyAkcHJvcHM6IENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UD4gPSB7fSBhcyBDb21wb25lbnRIeWRyYXRlc1N0b3JlPFA+XG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50LCBzdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgLy8gZW50cmllczogVENvbXBvbmVudEh5ZHJhdGVzRW50cmllczxTLCBQPiA9IHt9IGFzICBUQ29tcG9uZW50SHlkcmF0ZXNFbnRyaWVzPFMsIFA+XG4gICAgICAgIC8vIHN0b3JlOiBUQ29tcG9uZW50SHlkcmF0ZXNTdG9yZTxTLCBQPiA9IHtcbiAgICAgICAgLy8gICAgIHN0YXRlOiB7fSBhcyBTLFxuICAgICAgICAvLyAgICAgcHJvcHM6IHt9IGFzIFAsXG4gICAgICAgIC8vIH0gYXMgVENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UywgUD5cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMuJHN0YXRlID0ge307XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUgfHwgY29tcG9uZW50LnN0YXRlKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IGNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgdGhpcy4kc3RhdGUgPSBuZXcgQ29tcG9uZW50SHlkcmF0ZXNTdG9yZSgpO1xuICAgICAgICAvLyB0aGlzLiRwcm9wcyA9IG5ldyBDb21wb25lbnRIeWRyYXRlc1N0b3JlKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQaGFzZSBTZXQgUHJveHkgYW5kIG90aGVyJywgdGhpcylcbiAgICAgICAgdGhpcy5wcm94aWVzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIFN0YXRlIFByb3hpZXNcbiAgICAgKiBAZGVzY3JpcHRpb24gVXNlIHRoaXMgdG8gYWN0aXZhdGUgdGhlIGR5bmFtaWMgc3RhdGUuIEZvciBkZWZhdWx0IHRoZSBjb25zdHJ1Y3QgY2FsbCB0aGlzXG4gICAgICovXG4gICAgcHJveGllcygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcy5jb21wb25lbnQ7XG4gICAgICAgICAgICBjb25zdCAkID0gdGhpcztcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUpLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVbMV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlWzBdO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEFycmF5IFByb3h5XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdGF0ZVtuYW1lXSA9IG5ldyBQcm94eShlWzFdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0dGluZycsIHRhcmdldCwgcHJvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgdmFsdWUsIHByb3gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZycsIHRhcmdldCwgcHJvcCwgdmFsdWUsIHByb3gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5zdGF0ZVtuYW1lXSA9IHByb3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5oeWRyYXRlc1N0YXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogT3RoZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuc3RhdGUsIGAke25hbWV9YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gJC5zdGF0ZVtuYW1lXTsgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuc3RhdGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmh5ZHJhdGVzU3RhdGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSHlkcmF0ZSBTcGVjaWZpYyBOb2RlXG4gICAgICogQGRlc2NyaXB0aW9uIFVzZSB0aGlzIHRvIFJlUmVuZGVyIHN0YXRlIGFuZCBwcm9wcyBpbiBOb2RlXG4gICAgICovXG4gICAgaHlkcmF0ZXNOb2RlKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogSW5pdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgbW9ja3VwID0gU3RhYmlsaXplQ29udGVudCgoKCdpbm5lckhUTUwnIGluIG5vZGUpID8gbm9kZS5pbm5lckhUTUwgOiBub2RlLnRleHRDb250ZW50KSB8fCAnJyk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVjaG9cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3QgZWNob01vY2t1cCA9IFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uKG1vY2t1cCwgdHJ1ZSkgfHwgJyc7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNuYXBDb2RlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHNuYXBNb2NrdXAgPSBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24oZWNob01vY2t1cCB8fCBtb2NrdXAsIHRydWUpIHx8ICcnO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWZXJpZmljYXRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghZWNob01vY2t1cC5sZW5ndGggJiYgIXNuYXBNb2NrdXAubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlbmRlcmluZ1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBSZW5kZXJFbmdpbmUoc25hcE1vY2t1cCB8fCBlY2hvTW9ja3VwIHx8IG1vY2t1cCwgdGhpcy5jb21wb25lbnQsIHRoaXMuY29tcG9uZW50LnN0YXRlKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCdpbm5lckhUTUwnIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCd0ZXh0Q29udGVudCcgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9KS5jYXRjaChlciA9PiB7XG4gICAgICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEh5ZHJhdGUgU3BlY2lmaWMgUmVjb3JkZVxuICAgICAqIEBkZXNjcmlwdGlvbiBVc2UgdGhpcyB0byBSZVJlbmRlciBzdGF0ZSBhbmQgcHJvcHMgb2YgUmVjb3JkXG4gICAgICovXG4gICAgaHlkcmF0ZXNSZWNvcmQocmVjb3JkKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcmVjb3JkLm5vZGU7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluaXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGV0IG1vY2t1cCA9IFN0YWJpbGl6ZUNvbnRlbnQoKChyZWNvcmQubW9ja3VwICYmICdpbm5lckhUTUwnIGluIHJlY29yZC5tb2NrdXApID8gcmVjb3JkLm1vY2t1cC5pbm5lckhUTUwgOiByZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCkgfHwgJycpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFY2hvXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGVjaG9Nb2NrdXAgPSBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihtb2NrdXAsIHRydWUpIHx8ICcnO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTbmFwQ29kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBzbmFwTW9ja3VwID0gU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uKGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0cnVlKSB8fCAnJztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmVyaWZpY2F0aW9uc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIWVjaG9Nb2NrdXAubGVuZ3RoICYmICFzbmFwTW9ja3VwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW5kZXJpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgUmVuZGVyRW5naW5lKHNuYXBNb2NrdXAgfHwgZWNob01vY2t1cCB8fCBtb2NrdXAsIHRoaXMuY29tcG9uZW50LCB0aGlzLmNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnaW5uZXJIVE1MJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgndGV4dENvbnRlbnQnIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZGVjb2RlSFRNTEVudGl0aWVzKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBgJHtyZXN1bHR9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xuICAgICAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFIbGtjbUYwWlhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5amIzSmxMMmg1WkhKaGRHVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVOQkxFOUJRVThzUlVGQlJTeDFRa0ZCZFVJc1JVRkJSU3haUVVGWkxFVkJRVVVzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZEY0VVc1QwRkJUeXhGUVVGRkxIVkNRVUYxUWl4RlFVRkZMREpDUVVFeVFpeEZRVUZGTEUxQlFVMHNZMEZCWXl4RFFVRkRPMEZCUlhCR0xFOUJRVThzUlVGQlJTeHJRa0ZCYTBJc1JVRkJSU3huUWtGQlowSXNSVUZCUlN4TlFVRk5MR0ZCUVdFc1EwRkJRenRCUVV0dVJTeE5RVUZOTEU5QlFVOHNjMEpCUVhOQ08wbEJRVzVETzFGQlIwa3NXVUZCVHl4SFFVRXJRaXhGUVVGcFF5eERRVUZCTzBsQkswY3pSU3hEUVVGRE8wbEJNMGRIT3p0UFFVVkhPMGxCUTBZc1NVRkJTU3hEUVVGRExFbEJRV0VzUlVGQlJTeE5RVUYzUWp0UlFVVjZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZGTEVsQlFVa3NRMEZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVVVzU1VGQlNTeERRVUZGTEVsQlFVa3NSVUZCUlN4RFFVRkJPMUZCUldwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVVXNTVUZCU1N4RFFVRkZMRU5CUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlJTeEpRVUZKTEVOQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVVc1IwRkJSeXhOUVVGTkxFTkJRVUU3VVVGRk5VUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzUTBGQlF6dEpRVWxFT3p0UFFVVkhPMGxCUTBnc1RVRkJUU3hEUVVGRExFbEJRV0VzUlVGQlJTeEhRVUZaTEVWQlFVVXNUVUZCZDBJN1VVRkZlRVFzU1VGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkZMRWxCUVVrc1EwRkJSU3hGUVVGRE8xbEJSWEJDTEVsQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJSU3hKUVVGSkxFTkJRVVVzUTBGQlJTeEhRVUZITEVOQlFVVXNSVUZCUXp0blFrRkZNMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUlN4SlFVRkpMRU5CUVVVc1EwRkJSU3hIUVVGSExFTkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVRTdZVUZGZGtNN1UwRkZTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlJXaENMRU5CUVVNN1NVRkpSRHM3VDBGRlJ6dEpRVU5JTEUxQlFVMHNRMEZCUXl4SlFVRmhMRVZCUVVVc1IwRkJWenRSUVVVM1FpeEpRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVVc1NVRkJTU3hEUVVGRkxFVkJRVU03V1VGRmNFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJSU3hKUVVGSkxFTkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkZMRWxCUVVrc1EwRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVNc1JVRkJSVHRuUWtGRmFFVXNUMEZCVHl4TFFVRkxMRWxCUVVrc1IwRkJSeXhEUVVGQk8xbEJSWFpDTEVOQlFVTXNRMEZCUXl4RFFVRkJPMU5CUlV3N1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVVZvUWl4RFFVRkRPMGxCU1VRN08wOUJSVWM3U1VGRFNDeExRVUZMTEVOQlFVTXNTVUZCWVR0UlFVVm1MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVVVzU1VGQlNTeERRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkJPMUZCUlhwQ0xFOUJRVThzU1VGQlNTeERRVUZETzBsQlJXaENMRU5CUVVNN1NVRkpSRHM3VDBGRlJ6dEpRVU5JTEV0QlFVczdVVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRV2RETEVOQlFVRTdVVUZGTDBNc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRmFFSXNRMEZCUXp0SlFVbEVPenRQUVVWSE8wbEJRMGdzVVVGQlVTeERRVUZETEVsQlFXRTdVVUZGYkVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZGTEVsQlFVa3NRMEZCUlN4SlFVRkpMRk5CUVZNc1EwRkJRVHRKUVVVMVF5eERRVUZETzBsQlMwUTdPMDlCUlVjN1NVRkRTQ3hUUVVGVE8xRkJSVXdzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkJPMGxCUlhaQ0xFTkJRVU03UTBGTFNqdEJRVTFFTEUxQlFVMHNUMEZCVHl4cFFrRkJhVUk3U1VGblF6RkNMSE5GUVVGelJUdEpRVWwwUlN4WlFVRlpMRk5CUVRaQ0xFVkJRVVVzUzBGQlV5eEZRVUZGTEV0QlFWTTdVVUY2UWk5RUxHOUdRVUZ2Ump0UlFVVndSaXd5UTBGQk1rTTdVVUZGTTBNc2MwSkJRWE5DTzFGQlJYUkNMSE5DUVVGelFqdFJRVVYwUWl4eFEwRkJjVU03VVVGSGNrTXNZMEZCVXl4SFFVRjFRaXhGUVVGM1FpeERRVUZCTzFGQlJYaEVMRlZCUVVzc1IwRkJUU3hGUVVGUExFTkJRVUU3VVVGRmJFSXNWVUZCU3l4SFFVRk5MRVZCUVU4c1EwRkJRVHRSUVVsc1FpeFhRVUZOTEVkQlFUaENMRVZCUVN0Q0xFTkJRVUU3VVVGUkwwUXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03VVVGRk0wSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4TFFVRkxMRWxCUVVrc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzFGQlJYcEVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eEpRVUZKTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkhkRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdVVUZGTTBNc09FTkJRVGhETzFGQlJ6bERMR2xFUVVGcFJEdFJRVWRxUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVUU3U1VGRmJFSXNRMEZCUXp0SlFVMUVPenM3VDBGSFJ6dEpRVU5JTEU5QlFVODdVVUZGU0N4SlFVRkhMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFJRVUZSTEVWQlFVTTdXVUZGTjBJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0WlFVVTFRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGWml4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQkxFVkJRVVU3WjBKQlJUbENMRWxCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NWVUZCVlN4RlFVRkRPMjlDUVVGRkxFOUJRVkU3YVVKQlFVVTdaMEpCUlhwRExFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVZrc1EwRkJRVHRuUWtGRk5VSTdPMjFDUVVWSE8yZENRVU5JTEVsQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUXp0dlFrRkZia0lzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUlN4SlFVRkpMRU5CUVVVc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN2QwSkJSVGxETEVkQlFVY3NSVUZCUlN4VlFVRlRMRTFCUVUwc1JVRkJSU3hKUVVGSk96UkNRVVYwUWl4MVEwRkJkVU03TkVKQlJYWkRMRTlCUVU4c1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzNkQ1FVVjRRaXhEUVVGRE8zZENRVVZFTEVkQlFVY3NSVUZCUlN4VlFVRlRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVazdORUpCUlc1RExHOUVRVUZ2UkRzMFFrRkZjRVFzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRVHMwUWtGRmNFSXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJSU3hKUVVGSkxFTkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVRTdORUpCUlhSQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN05FSkJSWGhDTEU5QlFVOHNTVUZCU1N4RFFVRkRPM2RDUVVWb1FpeERRVUZETzNGQ1FVZEtMRU5CUVVNc1EwRkJRVHRwUWtGSFREdG5Ra0ZIUkRzN2JVSkJSVWM3Y1VKQlJVTTdiMEpCUlVFc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVrc1NVRkJTeXhGUVVGRkxFVkJRVVU3ZDBKQlJUTkRMRWRCUVVjc1MwRkJTU3hQUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVVXNTVUZCU1N4RFFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8zZENRVVZvUXl4SFFVRkhMRU5CUVVNc1MwRkJTenMwUWtGRlRDeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkZMRWxCUVVrc1EwRkJSU3hIUVVGSExFdEJRVXNzUTBGQlFUczBRa0ZGZGtJc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUVRzMFFrRkZlRUlzVDBGQlR5eEpRVUZKTEVOQlFVTTdkMEpCUldoQ0xFTkJRVU03Y1VKQlJVb3NRMEZCUXl4RFFVRkJPMmxDUVVWTU8xbEJSMHdzUTBGQlF5eERRVUZETEVOQlFVRTdVMEZGVER0UlFVZEVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJSV2hDTEVOQlFVTTdTVUZMUkRzN08wOUJSMGM3U1VGRFNDeFpRVUZaTEVOQlFVTXNTVUZCZDBJN1VVRkZha01zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZETEVWQlFVVTdXVUZGYWtRN08yVkJSVWM3V1VGRlNDeEpRVUZKTEUxQlFVMHNSMEZCUnl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4SlFVRkpMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRlhMRU5CUVVNN1dVRkhNMGM3TzJWQlJVYzdXVUZEU0N4TlFVRk5MRlZCUVZVc1IwRkJSeXgxUWtGQmRVSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZCTzFsQlNUbEVPenRsUVVWSE8xbEJSVWdzVFVGQlRTeFZRVUZWTEVkQlFVY3NNa0pCUVRKQ0xFTkJRVU1zVlVGQlZTeEpRVUZKTEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVUU3V1VGSmFFWTdPMlZCUlVjN1dVRkRTQ3hKUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhOUVVGTkxFVkJRVU03WjBKQlJYaERMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZCUXl4UFFVRlBPMkZCUlhwQ08xbEJTVVE3TzJWQlJVYzdXVUZEU0N4WlFVRlpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxGVkJRVlVzU1VGQlNTeE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVUVzUlVGQlJUdG5Ra0ZGYUVjc1NVRkJSeXhYUVVGWExFbEJRVWtzU1VGQlNTeEZRVUZETzI5Q1FVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZCTzJsQ1FVRkZPM0ZDUVVVM1F5eEpRVUZITEdGQlFXRXNTVUZCU1N4SlFVRkpMRVZCUVVNN2IwSkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVFN2FVSkJRVVU3WjBKQlJUTkVMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdFpRVVZ1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZCTEVWQlFVVTdaMEpCUlZRc2RVSkJRWFZDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFN1owSkJSVE5DTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRVHRaUVVWa0xFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlIwNHNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkhUaXhEUVVGRE8wbEJWVVE3T3p0UFFVZEhPMGxCUTBnc1kwRkJZeXhEUVVGRExFMUJRWGRDTzFGQlJXNURMRTlCUVU4c1NVRkJTU3hQUVVGUExFTkJRV2RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTFCUVUwc1JVRkJReXhGUVVGRk8xbEJSV3BFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRmVrSTdPMlZCUlVjN1dVRkZTQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNTVUZCU1N4WFFVRlhMRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1JVRkJSU3hYUVVGWExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFWY3NRMEZCUXp0WlFVZDRTanM3WlVGRlJ6dFpRVU5JTEUxQlFVMHNWVUZCVlN4SFFVRkhMSFZDUVVGMVFpeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVUU3V1VGSk9VUTdPMlZCUlVjN1dVRkZTQ3hOUVVGTkxGVkJRVlVzUjBGQlJ5d3lRa0ZCTWtJc1EwRkJReXhWUVVGVkxFbEJRVWtzVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRVHRaUVVsb1JqczdaVUZGUnp0WlFVTklMRWxCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJRenRuUWtGRmVFTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8yZENRVUZETEU5QlFVODdZVUZGZWtJN1dVRkxSRHM3WlVGRlJ6dFpRVU5JTEZsQlFWa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1ZVRkJWU3hKUVVGSkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRU3hGUVVGRk8yZENRVVZvUnl4SlFVRkhMRmRCUVZjc1NVRkJTU3hKUVVGSkxFVkJRVU03YjBKQlJXNUNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZCTzJsQ1FVVXhRanR4UWtGRlNTeEpRVUZITEdGQlFXRXNTVUZCU1N4SlFVRkpMRVZCUVVNN2IwSkJSVEZDTEUxQlFVMHNSMEZCUnl4clFrRkJhMElzUTBGQlJTeE5RVUZOTEVOQlFVVXNRMEZCUVR0dlFrRkZja01zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SFFVRkpMRTFCUVU4c1JVRkJSU3hEUVVGQk8ybENRVVZ1UXp0blFrRkZSQ3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVRTdXVUZGYmtJc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUVN4RlFVRkZPMmRDUVVWVUxIVkNRVUYxUWl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8yZENRVVV6UWl4TlFVRk5MRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVUU3V1VGRlpDeERRVUZETEVOQlFVTXNRMEZCUVR0UlFVZE9MRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJSMDRzUTBGQlF6dERRVTFLSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1EyOXRjRzl1Wlc1MElIMGdabkp2YlNCY0lpNWNJanRjYm1sdGNHOXlkQ0I3SUVOdmJYQnBiR0YwWlVWeWNtOXlSWGhqWlhCMGFXOXVMQ0JTWlc1a1pYSkZibWRwYm1VZ2ZTQm1jbTl0SUZ3aUxpOWpiMjF3YVd4aGRHVmNJanRjYm1sdGNHOXlkQ0I3SUZOMFlXSnBiR2w2WlVWamFHOUZlSEJ5WlhOemFXOXVMQ0JUZEdGaWFXeHBlbVZUYm1Gd1EyOWtaVVY0Y0hKbGMzTnBiMjRnZlNCbWNtOXRJRndpTGk5bGVIQnlaWE56YVc5dVhDSTdYRzVwYlhCdmNuUWdleUJEYjIxd2IyNWxiblJOWlhSb2IyUlNZWGNzSUVOdmJYQnZibVZ1ZEZCeWIzQnpMQ0JEYjIxd2IyNWxiblJUZEdGMFpTd2dSWGh3Y21WemMybHZibEpsWTI5eVpDd2dWRU52YlhCdmJtVnVkRWg1WkhKaGRHVnpSVzUwY25rZ2ZTQm1jbTl0SUZ3aUxpOXBibVJsZUM1MFhDSTdYRzVwYlhCdmNuUWdleUJrWldOdlpHVklWRTFNUlc1MGFYUnBaWE1zSUZOMFlXSnBiR2w2WlVOdmJuUmxiblFnZlNCbWNtOXRJRndpTGk5MWRHbHNhWFJwWlhOY0lqdGNibHh1WEc1Y2JseHVaWGh3YjNKMElHTnNZWE56SUVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6VTNSdmNtVThWQ0JsZUhSbGJtUnpJQ2hEYjIxd2IyNWxiblJUZEdGMFpTQjhJRU52YlhCdmJtVnVkRkJ5YjNCektUNTdYRzVjYmx4dUlDQWdJR1Z1ZEhKcFpYTTZJRlJEYjIxd2IyNWxiblJJZVdSeVlYUmxjMFZ1ZEhKNVBGUStJRDBnZTMwZ1lYTWdJRlJEYjIxd2IyNWxiblJJZVdSeVlYUmxjMFZ1ZEhKNVBGUStYRzVjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1FXUmtYRzRnSUNBZ0lDb3ZYRzRnSUNBZ0lIQjFjMmdvYm1GdFpUb2dhMlY1YjJZZ1ZDd2djbVZqYjNKa09pQkZlSEJ5WlhOemFXOXVVbVZqYjNKa0tYdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVkSEpwWlhOYklHNWhiV1VnWFNBOUlIUm9hWE11Wlc1MGNtbGxjMXNnYm1GdFpTQmRJSHg4SUZ0ZFhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJuUnlhV1Z6V3lCdVlXMWxJRjFiSUhSb2FYTXVaVzUwY21sbGMxc2dibUZ0WlNCZExteGxibWQwYUNCZElEMGdjbVZqYjNKa1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkJaR1JjYmlBZ0lDQWdLaTljYmlBZ0lDQjFjR1JoZEdVb2JtRnRaVG9nYTJWNWIyWWdWQ3dnYTJWNUlEb2diblZ0WW1WeUxDQnlaV052Y21RNklFVjRjSEpsYzNOcGIyNVNaV052Y21RcGUxeHVYRzRnSUNBZ0lDQWdJR2xtS0hSb2FYTXVaVzUwY21sbGMxc2dibUZ0WlNCZEtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1bGJuUnlhV1Z6V3lCdVlXMWxJRjFiSUd0bGVTQmRLWHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdWRISnBaWE5iSUc1aGJXVWdYVnNnYTJWNUlGMGdQU0J5WldOdmNtUmNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJTWlcxdmRtVWdaVzUwY25rbmN5QnpiRzkwSUdKNUlGQnliM0JsY25SNUlHOXlJRk4wWVhSbElHNWhiV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnlaVzF2ZG1Vb2JtRnRaVG9nYTJWNWIyWWdWQ3dnYTJWNU9pQnVkVzFpWlhJcGUxeHVYRzRnSUNBZ0lDQWdJR2xtS0hSb2FYTXVaVzUwY21sbGMxc2dibUZ0WlNCZEtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYm5SeWFXVnpXeUJ1WVcxbElGMGdQU0IwYUdsekxtVnVkSEpwWlhOYklHNWhiV1VnWFM1bWFXeDBaWElvS0hKbFkyOXlaQ3dnYVc1a1pYZ3BQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1a1pYZ2dJVDBnYTJWNVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyeGxZVzRnWlc1MGNua2dZbmtnVUhKdmNHVnlkSGtnYjNJZ1UzUmhkR1VnYm1GdFpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOc1pXRnVLRzVoYldVNklHdGxlVzltSUZRcGUxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNTBjbWxsYzFzZ2JtRnRaU0JkSUQwZ1cxMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlZ4dVhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU5zWldGdUlHVnVkSEo1SUdKNUlGQnliM0JsY25SNUlHOXlJRk4wWVhSbElHNWhiV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnlaWE5sZENncGUxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNTBjbWxsY3lBOUlIdDlJR0Z6SUZSRGIyMXdiMjVsYm5SSWVXUnlZWFJsYzBWdWRISjVQRlErWEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibHh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCR2FXNWtJR0o1SUZCeWIzQmxjblI1SUc5eUlGTjBZWFJsSUc1aGJXVmNiaUFnSUNBZ0tpOWNiaUFnSUNCeVpYUnlhV1YyWlNodVlXMWxPaUJyWlhsdlppQlVLU0E2SUVWNGNISmxjM05wYjI1U1pXTnZjbVJiWFh0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVsYm5SeWFXVnpXeUJ1WVcxbElGMGdmSHdnZFc1a1pXWnBibVZrWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dVhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVpwYm1RZ1FXeHNYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NtVjBjbWxsZG1WektDbDdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXNTBjbWxsYzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JseHVYRzRnSUNBZ1hHNTlYRzVjYmx4dVhHNWNibHh1Wlhod2IzSjBJR05zWVhOeklFTnZiWEJ2Ym1WdWRFaDVaSEpoZEdWelBGeHVYRzRnSUNBZ1V5QmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRGTjBZWFJsTENCY2JpQWdJQ0JjYmlBZ0lDQlFJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVSEp2Y0hNc1hHNGdJQ0FnWEc0Z0lDQWdUU0JsZUhSbGJtUnpJRU52YlhCdmJtVnVkRTFsZEdodlpGSmhkenhUTENCUVBseHVJQ0FnSUZ4dVBudGNibHh1WEc0Z0lDQWdMeThnWlc1MGNtbGxjem9nVkVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6Ulc1MGNtbGxjenhUTENCUVBpQTlJSHQ5SUdGeklDQlVRMjl0Y0c5dVpXNTBTSGxrY21GMFpYTkZiblJ5YVdWelBGTXNJRkErWEc1Y2JpQWdJQ0F2THlCemRHOXlaVG9nVkVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6VTNSdmNtVThVeXdnVUQ0Z1BTQjdYRzVjYmlBZ0lDQXZMeUFnSUNBZ2MzUmhkR1U2SUh0OUlHRnpJRk1zWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQzh2SUNBZ0lDQndjbTl3Y3pvZ2UzMGdZWE1nVUN4Y2JseHVJQ0FnSUM4dklIMGdZWE1nVkVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6VTNSdmNtVThVeXdnVUQ1Y2JpQWdJQ0JjYmx4dUlDQWdJR052YlhCdmJtVnVkRG9nUTI5dGNHOXVaVzUwUEZNc0lGQXNJRTArSUQwZ2UzMGdZWE1nUTI5dGNHOXVaVzUwUEZNc0lGQXNJRTArWEc1Y2JpQWdJQ0J6ZEdGMFpUb2dVeUE5SUh0OUlHRnpJRk5jYmx4dUlDQWdJSEJ5YjNCek9pQlFJRDBnZTMwZ1lYTWdVRnh1WEc1Y2JseHVJQ0FnSUNSemRHRjBaVG9nUTI5dGNHOXVaVzUwU0hsa2NtRjBaWE5UZEc5eVpUeFRQaUE5SUh0OUlHRnpJRU52YlhCdmJtVnVkRWg1WkhKaGRHVnpVM1J2Y21VOFV6NWNibHh1SUNBZ0lDOHZJQ1J3Y205d2N6b2dRMjl0Y0c5dVpXNTBTSGxrY21GMFpYTlRkRzl5WlR4UVBpQTlJSHQ5SUdGeklFTnZiWEJ2Ym1WdWRFaDVaSEpoZEdWelUzUnZjbVU4VUQ1Y2JseHVYRzRnSUNBZ1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb1kyOXRjRzl1Wlc1ME9pQkRiMjF3YjI1bGJuUThVeXdnVUN3Z1RUNHNJSE4wWVhSbFB6b2dVeXdnY0hKdmNITS9PaUJRS1h0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnZibVZ1ZENBOUlHTnZiWEJ2Ym1WdWREdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z2MzUmhkR1VnZkh3Z1kyOXRjRzl1Wlc1MExuTjBZWFJsS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnY0hKdmNITWdmSHdnWTI5dGNHOXVaVzUwTG5CeWIzQnpPMXh1WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTRrYzNSaGRHVWdQU0J1WlhjZ1EyOXRjRzl1Wlc1MFNIbGtjbUYwWlhOVGRHOXlaU2dwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJSFJvYVhNdUpIQnliM0J6SUQwZ2JtVjNJRU52YlhCdmJtVnVkRWg1WkhKaGRHVnpVM1J2Y21Vb0tUdGNibHh1WEc0Z0lDQWdJQ0FnSUM4dklHTnZibk52YkdVdWJHOW5LQ2RRYUdGelpTQlRaWFFnVUhKdmVIa2dZVzVrSUc5MGFHVnlKeXdnZEdocGN5bGNibHh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEp2ZUdsbGN5Z3BYRzVjYmlBZ0lDQjlYRzVjYmx4dVhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRUoxYVd4a0lGTjBZWFJsSUZCeWIzaHBaWE5jYmlBZ0lDQWdLaUJBWkdWelkzSnBjSFJwYjI0Z1ZYTmxJSFJvYVhNZ2RHOGdZV04wYVhaaGRHVWdkR2hsSUdSNWJtRnRhV01nYzNSaGRHVXVJRVp2Y2lCa1pXWmhkV3gwSUhSb1pTQmpiMjV6ZEhKMVkzUWdZMkZzYkNCMGFHbHpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2NISnZlR2xsY3lncGUxeHVYRzRnSUNBZ0lDQWdJR2xtS0hSNWNHVnZaaUIwYUdsekxuTjBZWFJsSUQwOUlDZHZZbXBsWTNRbktYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYzJWc1ppQTlJSFJvYVhNdVkyOXRjRzl1Wlc1ME8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0FrSUQwZ2RHaHBjenRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdUMkpxWldOMExtVnVkSEpwWlhNb2RHaHBjeTV6ZEdGMFpTa3ViV0Z3S0dVOVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSNWNHVnZaaUJsV3pGZElEMDlJQ2RtZFc1amRHbHZiaWNwZXlCeVpYUjFjbTRnT3lCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnVZVzFsSUQwZ1pWc3dYU0JoY3lCclpYbHZaaUJUWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaUJCY25KaGVTQlFjbTk0ZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LRUZ5Y21GNUxtbHpRWEp5WVhrb1pWc3hYU2twZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWMzUmhkR1ZiSUc1aGJXVWdYU0E5SUc1bGR5QlFjbTk0ZVR4MGVYQmxiMllnWlZzeFhUNG9aVnN4WFN3Z2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5aWFE2SUdaMWJtTjBhVzl1S0hSaGNtZGxkQ3dnY0hKdmNDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QmpiMjV6YjJ4bExteHZaeWduWjJWMGRHbHVaeWNzSUhSaGNtZGxkQ3dnY0hKdmNDbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdGeVoyVjBXM0J5YjNCZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlYwT2lCbWRXNWpkR2x2YmloMFlYSm5aWFFzSUhCeWIzQXNJSFpoYkhWbExDQndjbTk0S1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1Ykc5bktDZHpaWFIwYVc1bkp5d2dkR0Z5WjJWMExDQndjbTl3TENCMllXeDFaU3dnY0hKdmVDbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSaGNtZGxkRnR3Y205d1hTQTlJSFpoYkhWbFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrTG5OMFlYUmxXeUJ1WVcxbElGMGdQU0J3Y205NFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bUxtaDVaSEpoZEdWelUzUmhkR1VvYm1GdFpTbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlFOTBhR1Z5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiSE5sZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoelpXeG1Mbk4wWVhSbExDQmdKSHNnYm1GdFpTQjlZQ3dnZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCblpYUW9LWHNnY21WMGRYSnVJQ1F1YzNSaGRHVmJJRzVoYldVZ1hUc2dmU3hjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITmxkQ2gyWVd4MVpTbDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKQzV6ZEdGMFpWc2dibUZ0WlNCZElEMGdkbUZzZFdWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bUxtaDVaSEpoZEdWelUzUmhkR1VvYm1GdFpTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dVhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRWg1WkhKaGRHVWdVM0JsWTJsbWFXTWdUbTlrWlZ4dUlDQWdJQ0FxSUVCa1pYTmpjbWx3ZEdsdmJpQlZjMlVnZEdocGN5QjBieUJTWlZKbGJtUmxjaUJ6ZEdGMFpTQmhibVFnY0hKdmNITWdhVzRnVG05a1pWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdoNVpISmhkR1Z6VG05a1pTaHViMlJsT2lCT2IyUmxJSHdnU0ZSTlRFVnNaVzFsYm5RcGUxeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaVHh6ZEhKcGJtY2dmQ0J1ZFd4c1BpZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFJRWx1YVhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzF2WTJ0MWNDQTlJRk4wWVdKcGJHbDZaVU52Ym5SbGJuUW9LQ2duYVc1dVpYSklWRTFNSnlCcGJpQnViMlJsS1NBL0lHNXZaR1V1YVc1dVpYSklWRTFNSURvZ2JtOWtaUzUwWlhoMFEyOXVkR1Z1ZENrZ2ZId2dKeWNwSUdGeklITjBjbWx1Wnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCRlkyaHZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1ZqYUc5TmIyTnJkWEFnUFNCVGRHRmlhV3hwZW1WRlkyaHZSWGh3Y21WemMybHZiaWh0YjJOcmRYQXNJSFJ5ZFdVcElIeDhJQ2NuWEc0Z0lDQWdJRnh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nVTI1aGNFTnZaR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCemJtRndUVzlqYTNWd0lEMGdVM1JoWW1sc2FYcGxVMjVoY0VOdlpHVkZlSEJ5WlhOemFXOXVLR1ZqYUc5TmIyTnJkWEFnZkh3Z2JXOWphM1Z3TENCMGNuVmxLU0I4ZkNBbkoxeHVYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaUJXWlhKcFptbGpZWFJwYjI1elhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGbFkyaHZUVzlqYTNWd0xteGxibWQwYUNBbUppQWhjMjVoY0UxdlkydDFjQzVzWlc1bmRHZ3BleUJjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvYm5Wc2JDazdJSEpsZEhWeWJqc2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb2dVbVZ1WkdWeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUZKbGJtUmxja1Z1WjJsdVpTaHpibUZ3VFc5amEzVndJSHg4SUdWamFHOU5iMk5yZFhBZ2ZId2diVzlqYTNWd0xDQjBhR2x6TG1OdmJYQnZibVZ1ZEN3Z2RHaHBjeTVqYjIxd2IyNWxiblF1YzNSaGRHVXBMblJvWlc0b2NtVnpkV3gwUFQ1N1hHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWduYVc1dVpYSklWRTFNSnlCcGJpQnViMlJsS1hzZ2JtOWtaUzVwYm01bGNraFVUVXdnUFNCeVpYTjFiSFFnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmlnbmRHVjRkRU52Ym5SbGJuUW5JR2x1SUc1dlpHVXBleUJ1YjJSbExuUmxlSFJEYjI1MFpXNTBJRDBnY21WemRXeDBJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvY21WemRXeDBLVnh1SUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcExtTmhkR05vS0dWeVBUNTdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1EyOXRjR2xzWVhSbFJYSnliM0pGZUdObGNIUnBiMjRvWlhJcFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WcVpXTjBLR1Z5S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmx4dVhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ1hHNWNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ1hHNGdJQ0FnWEc0Z0lDQWdYRzVjYmx4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkllV1J5WVhSbElGTndaV05wWm1saklGSmxZMjl5WkdWY2JpQWdJQ0FnS2lCQVpHVnpZM0pwY0hScGIyNGdWWE5sSUhSb2FYTWdkRzhnVW1WU1pXNWtaWElnYzNSaGRHVWdZVzVrSUhCeWIzQnpJRzltSUZKbFkyOXlaRnh1SUNBZ0lDQXFMMXh1SUNBZ0lHaDVaSEpoZEdWelVtVmpiM0prS0hKbFkyOXlaRG9nUlhod2NtVnpjMmx2YmxKbFkyOXlaQ2w3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObFBITjBjbWx1WnlCOElHNTFiR3crS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzV2WkdVZ1BTQnlaV052Y21RdWJtOWtaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaUJKYm1sMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J0YjJOcmRYQWdQU0JUZEdGaWFXeHBlbVZEYjI1MFpXNTBLQ2dvY21WamIzSmtMbTF2WTJ0MWNDQW1KaUFuYVc1dVpYSklWRTFNSnlCcGJpQnlaV052Y21RdWJXOWphM1Z3S1NBL0lISmxZMjl5WkM1dGIyTnJkWEF1YVc1dVpYSklWRTFNSURvZ2NtVmpiM0prTG0xdlkydDFjRDh1ZEdWNGRFTnZiblJsYm5RcElIeDhJQ2NuS1NCaGN5QnpkSEpwYm1jN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1JXTm9iMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JsWTJodlRXOWphM1Z3SUQwZ1UzUmhZbWxzYVhwbFJXTm9iMFY0Y0hKbGMzTnBiMjRvYlc5amEzVndMQ0IwY25WbEtTQjhmQ0FuSjF4dUlDQWdJQ0JjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxSUZOdVlYQkRiMlJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmx4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MyNWhjRTF2WTJ0MWNDQTlJRk4wWVdKcGJHbDZaVk51WVhCRGIyUmxSWGh3Y21WemMybHZiaWhsWTJodlRXOWphM1Z3SUh4OElHMXZZMnQxY0N3Z2RISjFaU2tnZkh3Z0p5ZGNibHh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nVm1WeWFXWnBZMkYwYVc5dWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaFpXTm9iMDF2WTJ0MWNDNXNaVzVuZEdnZ0ppWWdJWE51WVhCTmIyTnJkWEF1YkdWdVozUm9LWHNnWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0c1MWJHd3BPeUJ5WlhSMWNtNDdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNCY2JseHVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb2dVbVZ1WkdWeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUZKbGJtUmxja1Z1WjJsdVpTaHpibUZ3VFc5amEzVndJSHg4SUdWamFHOU5iMk5yZFhBZ2ZId2diVzlqYTNWd0xDQjBhR2x6TG1OdmJYQnZibVZ1ZEN3Z2RHaHBjeTVqYjIxd2IyNWxiblF1YzNSaGRHVXBMblJvWlc0b2NtVnpkV3gwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWduYVc1dVpYSklWRTFNSnlCcGJpQnViMlJsS1hzZ1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm05a1pTNXBibTVsY2toVVRVd2dQU0J5WlhOMWJIUWdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtS0NkMFpYaDBRMjl1ZEdWdWRDY2dhVzRnYm05a1pTbDdJRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZENBOUlHUmxZMjlrWlVoVVRVeEZiblJwZEdsbGN5Z2djbVZ6ZFd4MElDbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxMblJsZUhSRGIyNTBaVzUwSUQwZ1lDUjdJSEpsYzNWc2RDQjlZQ0JjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2NtVnpkV3gwS1Z4dUlDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBMbU5oZEdOb0tHVnlQVDU3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0dsc1lYUmxSWEp5YjNKRmVHTmxjSFJwYjI0b1pYSXBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnFaV04wS0dWeUtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdYRzVjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ1hHNGdJQ0FnWEc1OUlsMTkiLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0NvbXBvbmVudF9pbnN0YW5jZXMsIF9Db21wb25lbnRfaHlkcmF0ZXMsIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlciwgX0NvbXBvbmVudF9tdXRhdGlvbk9ic2VydmVkLCBfQ29tcG9uZW50X3BlbmRpbmcsIF9Db21wb25lbnRfY29tcGxldGVkLCBfQ29tcG9uZW50X2NhbW91ZmxhZ2UsIF9Db21wb25lbnRfY2hlY2tDb21waWxhdGVkRG9uZTtcbmltcG9ydCB7IENvbXBpbGF0ZUVjaG8sIENvbXBpbGF0ZUVjaG9BdHRyaWJ1dGVzLCBDb21waWxhdGVTbmFwQ29kZSwgQ29tcGlsYXRlU25hcENvZGVBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vY29tcGlsYXRlXCI7XG5pbXBvcnQgeyBTZW5zZW5FbWl0dGVyIH0gZnJvbSBcIi4vZW1pdHRlclwiO1xuaW1wb3J0IHsgRmluZEV4cHJlc3Npb25zIH0gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuaW1wb3J0IHsgQ29tcG9uZW50SHlkcmF0ZXMgfSBmcm9tIFwiLi9oeWRyYXRlc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNvbXBvbmVudE1ldGhvZEV2ZW50KGNvbXBvbmVudCwgZXYpIHtcbiAgICBjb25zdCBfID0ge307XG4gICAgXy5zZWxmID0gY29tcG9uZW50O1xuICAgIF8uZXZlbnQgPSBldjtcbiAgICByZXR1cm4gXztcbn1cbi8qKlxuICogU2Vuc2VuIEhUTUwgRWxlbWVudFxuICovXG5jbGFzcyBTZW5zZW5IVE1MRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBOZXcgQ29uc3RydWN0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIER5bmFtaWMgdmFyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBuYW1lXG4gICAgICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7IHJldHVybiBbXTsgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gRWxlbWVudCBpcyBjb25uZWN0ZWRcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIC8qKlxuICAgICAqIFdoZW4gRWxlbWVudCBpcyBBZG9wdGVkIGJ5IG90aGVyIERPTVxuICAgICAqL1xuICAgIGFkb3B0ZWRDYWxsYmFjaygpIHsgfVxuICAgIC8qKlxuICAgICAqIFdoZW5lIEVsZW1lbnQgaXMgRGlzY29ubmVjdGVkIHRvIHRoZSBjdXJyZW50IERPTVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkgeyB9XG4gICAgLyoqXG4gICAgICogV2hlbmUgRWxlbWVudCBjaGFuZ2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaygpIHtcbiAgICB9XG59XG4vKipcbiAqIFNlbnNlbiBTY3JlZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlbnNlblNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU2Vuc2VuIFNjcmVlbicsIHRoaXMpO1xuICAgIH1cbn1cbi8qKlxuICogU2Vuc2VuIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBOZXcgQ29uc3RydWN0XG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBfQ29tcG9uZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMuJHRhZ05hbWUgPSAnJztcbiAgICAgICAgdGhpcy5tZXRob2RzID0ge307XG4gICAgICAgIHRoaXMuJG9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gZmFsc2U7XG4gICAgICAgIF9Db21wb25lbnRfaHlkcmF0ZXMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlci5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0NvbXBvbmVudF9tdXRhdGlvbk9ic2VydmVkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ29tcG9uZW50X3BlbmRpbmcuc2V0KHRoaXMsIDApO1xuICAgICAgICBfQ29tcG9uZW50X2NvbXBsZXRlZC5zZXQodGhpcywgMCk7XG4gICAgICAgIHRoaXMuJG9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnN0YXRlID0gKHRoaXMuJG9wdGlvbnMuc3RhdGUgfHwge30pO1xuICAgICAgICB0aGlzLnByb3BzID0gKHRoaXMuJG9wdGlvbnMucHJvcHMgfHwge30pO1xuICAgICAgICB0aGlzLm1ldGhvZHMgPSAodGhpcy4kb3B0aW9ucy5tZXRob2RzIHx8IHt9KTtcbiAgICAgICAgdGhpcy4kZW1pdHRlciA9IG5ldyBTZW5zZW5FbWl0dGVyKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NvbXBvbmVudF9oeWRyYXRlcywgbmV3IENvbXBvbmVudEh5ZHJhdGVzKHRoaXMpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvbXBvbmVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ29tcG9uZW50X2NhbW91ZmxhZ2UpLmNhbGwodGhpcylcbiAgICAgICAgICAgIC4kZW1pdHRpbmcoKVxuICAgICAgICAgICAgLiRpbml0aWFsaXplKClcbiAgICAgICAgICAgIC4kdGVtcGxhdGUoKVxuICAgICAgICAgICAgLnRoZW4odHBsID0+IHtcbiAgICAgICAgICAgIGlmICh0cGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdHBsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuaW5uZXJIVE1MID0gdHBsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAuJG9ic2VydmVycygpXG4gICAgICAgICAgICAgICAgLiRjb21waWxhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldCBUZW1wbGF0ZVxuICAgICAqL1xuICAgICR0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IHRlbXBsYXRlJywgdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuJG9wdGlvbnMudGVtcGxhdGUgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdpbm5lckhUTUwnIGluIHRoaXMuJG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLiRvcHRpb25zLmVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2sgPSB0aGlzLiRvcHRpb25zLnRlbXBsYXRlLm1hdGNoKC88XFwvP1tePl0rPi9naSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJywgY2hlY2spO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIElmIFRlbXBsYXRlIGlzIFN0cmluZyBIVE1MIGNvZGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLiRvcHRpb25zLnRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbHNlLCBpdCdzIGZpbGUgcGF0aFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IGAuJHsodXJsLnBhdGhuYW1lID09ICcvJykgPyAnJyA6IHVybC5wYXRobmFtZX0vJHt0aGlzLiRvcHRpb25zLnRlbXBsYXRlfWA7XG4gICAgICAgICAgICAgICAgZmV0Y2gocGF0aCkudGhlbihkID0+IHsgaWYgKGQuc3RhdHVzID09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gcmV0dXJuIGQudGV4dCgpOyB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQ2hlY2t1cCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlciA9PiB7IHJlc29sdmUodW5kZWZpbmVkKTsgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZVxuICAgICAqL1xuICAgICRpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLiRpbml0aWFsaXplRWxlbWVudCgpO1xuICAgICAgICAvLyBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG4gICAgICAgIC8vICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgICAgICAvLyB9XG4gICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3N0YXJ0JywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAkaW5pdGlhbGl6ZUVsZW1lbnQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgJHByb3BzID0gcHJvcHMgfHwgdGhpcy4kb3B0aW9ucyB8fCBudWxsO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCRwcm9wcykge1xuICAgICAgICAgICAgdGhpcy4kdGFnTmFtZSA9IGBzbi0keyRwcm9wcy5uYW1lfWA7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpbmQgY3VycmVudCBFbGVtZW50IHNlbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy4kb3B0aW9ucy5lbGVtZW50fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVmaW5lIGN1c3RvbSBFbGVtZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRoaXMuJHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4ka2xhc3MgPSBjbGFzcyBleHRlbmRzIFNlbnNlbkhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25zdHJ1Y3QnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy4ka2xhc3MucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25uZWN0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuJGtsYXNzLnByb3RvdHlwZS5hZG9wdGVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Fkb3B0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuJGtsYXNzLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnZGlzY29ubmVjdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gKG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCduUHJvcHNDaGFuZ2VkJywgeyBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy4ka2xhc3MsICdvYnNlcnZlZEF0dHJpYnV0ZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0eXBlb2Ygc2VsZi5wcm9wcyA9PSAnb2JqZWN0JykgPyBPYmplY3Qua2V5cyhzZWxmLnByb3BzKSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRoaXMuJHRhZ05hbWUsIHRoaXMuJGtsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudD8uc2V0QXR0cmlidXRlKCdpcycsIGAke3RoaXMuJHRhZ05hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3RoaXMuJHRhZ05hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnZWxlbWVudFJlYWR5JywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERPTSBPYnNlcnZlclxuICAgICAqL1xuICAgICRvYnNlcnZlcnMoKSB7XG4gICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29tcG9uZW50X211dGF0aW9uT2JzZXJ2ZXIsIG5ldyBNdXRhdGlvbk9ic2VydmVyKChyZWNvcmRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29tcG9uZW50X211dGF0aW9uT2JzZXJ2ZWQsIHJlY29yZHMsIFwiZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcy5mb3JFYWNoKHJlY29yZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT0gJ2F0dHJpYnV0ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC5hdHRyaWJ1dGVOYW1lICYmIHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByZWNvcmQuYXR0cmlidXRlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy4kb3B0aW9ucy5lbGVtZW50LmdldEF0dHJpYnV0ZShyZWNvcmQuYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdwcm9wc0NoYW5nZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVjb3JkLmF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHJlY29yZC5vbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25PYnNlcnZlZCcsIHJlY29yZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbnNPYnNlcnZlZCcsIHJlY29yZHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCBcImZcIik7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlciwgXCJmXCIpLm9ic2VydmUodGhpcy4kb3B0aW9ucy5lbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdtdXRhdGlvbk9ic2VydmF0aW9uUmVhZHknLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaHlkcmF0ZXNTdGF0ZShzbG90KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X2h5ZHJhdGVzLCBcImZcIik/LiRzdGF0ZS5yZXRyaWV2ZShzbG90KTtcbiAgICAgICAgaWYgKHN0b3JlPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHN0b3JlLm1hcChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvbXBvbmVudF9oeWRyYXRlcywgXCJmXCIpPy5oeWRyYXRlc1JlY29yZChyZWNvcmQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3N0YXRlSHlkcmF0ZWQnLCB7IHJlY29yZCwgZGF0YSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb21waWxhdGUgdHJhbnNhY3Rpb25zXG4gICAgICovXG4gICAgJGNvbXBpbGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBGaW5kRXhwcmVzc2lvbnModGhpcy4kb3B0aW9ucy5lbGVtZW50LCAocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NvbXBvbmVudF9wZW5kaW5nLCAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfcGVuZGluZywgXCJmXCIpLCBfYSsrLCBfYSksIFwiZlwiKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBGaW5kIFN0YXRlIHRvIGF1dG8tY29tcGlsYXRlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNNYXRjaGVzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHZhbHVlIHx8ICcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGAoJHtPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5qb2luKCd8Jyl9KWAsICdnJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHZhbHVlIHx8ICcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGB0aGlzXFxcXC5zdGF0ZVxcXFwuKCR7T2JqZWN0LmtleXModGhpcy5zdGF0ZSkuam9pbignKXx0aGlzXFxcXC5zdGF0ZVxcXFwuKCcpfSlgLCAnZycpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLih2YWx1ZXx8JycpLm1hdGNoQWxsKG5ldyBSZWdFeHAoYHRoaXNcXFxcLnByb3BzXFxcXC4keyBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5qb2luKCd8dGhpc1xcXFwucHJvcHNcXFxcLicpIH1gLCAnZycpKSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNNYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc01hdGNoZXMubWFwKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNvcmRDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlY29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHVyZ2UgPSBtYXRjaC5maWx0ZXIodiA9PiB2ICE9IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHB1cmdlWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJnZS5pbnB1dCA9IG1hdGNoLmlucHV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZENsb25lLm1hdGNoID0gcHVyZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X2h5ZHJhdGVzLCBcImZcIik/LiRzdGF0ZS5wdXNoKHNsb3QsIHJlY29yZENsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnZXhwcmVzc2lvbkRldGVjdGVkJywgcmVjb3JkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2NvbXBpbGF0aW9uUmVhZHknLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXR0aW5nXG4gICAgICovXG4gICAgJGVtaXR0aW5nKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwgOiBCZWdpblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKCdlbGVtZW50UmVhZHknLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDcmVhdGUgRWxlbWVudCBNb2RlbCcsIGFyZ3MpXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwgOiBFbmRcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXRhdGlvbnMgT2JzZXJ2ZXJzIDogQmVnaW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignbXV0YXRpb25PYnNlcnZhdGlvblJlYWR5JywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTXV0YXRpb24gT2JzZXJ2ZWQnLCBhcmdzKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKCdtdXRhdGlvbk9ic2VydmVkJywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTXV0YXRpb24gT2JzZXJ2ZWQnLCBhcmdzKVxuICAgICAgICAgICAgaWYgKGFyZ3MuZW1pdC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfaHlkcmF0ZXMsIFwiZlwiKT8uaHlkcmF0ZXNOb2RlKGFyZ3MuZW1pdC50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKCdtdXRhdGlvbnNPYnNlcnZlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ011dGF0aW9ucyBPYnNlcnZlZCcsIGFyZ3MpXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogTXV0YXRpb25zIE9ic2VydmVycyA6IEVuZFxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXBpbGF0ZSBSZWNvcmQgOiBCZWdpblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKCdleHByZXNzaW9uRGV0ZWN0ZWQnLCAoJCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZWQgPSBbXTtcbiAgICAgICAgICAgIGlmICgkLmVtaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJC5lbWl0LnR5cGUgPT0gJ2VjaG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlRWNobyh0aGlzLCAkLmVtaXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJC5lbWl0LnR5cGUgPT0gJ3NuYXBjb2RlJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZVNuYXBDb2RlKHRoaXMsICQuZW1pdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkLmVtaXQudHlwZSA9PSAnYXR0cmlidXRlLmVjaG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlRWNob0F0dHJpYnV0ZXModGhpcywgJC5lbWl0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCQuZW1pdC50eXBlID09ICdhdHRyaWJ1dGUuc25hcGNvZGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VkLnB1c2goQ29tcGlsYXRlU25hcENvZGVBdHRyaWJ1dGVzKHRoaXMsICQuZW1pdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkLmVtaXQudHlwZSA9PSAnZGlyZWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKG5ldyBQcm9taXNlKChyLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISgnZGlyZWN0aXZlJyBpbiAkLmVtaXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBDb3JydXB0ZWQgZGlyZWN0aXZlIDogbm90IGZvdW5kYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZW1pdC5kaXJlY3RpdmU/Lm1haW4gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChgQ29ycnVwdGVkIGRpcmVjdGl2ZSA6IDwgJHskLmVtaXQuZGlyZWN0aXZlPy5uYW1lfSA+YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVtaXQuZGlyZWN0aXZlLm1haW4odGhpcywgJC5lbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHIoJC5lbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9taXNlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obG90ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db21wb25lbnRfY29tcGxldGVkLCAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfY29tcGxldGVkLCBcImZcIiksIF9hKyssIF9hKSwgXCJmXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0NvbXBpbGF0ZWQnLCBsb3QpXG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvbXBvbmVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ29tcG9uZW50X2NoZWNrQ29tcGlsYXRlZERvbmUpLmNhbGwodGhpcywgbG90KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignY29tcGlsYXRlJywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignRXhwcmVzc2lvbiBSZWNvcmRlZCcsIGFyZ3MuZW1pdClcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxhdGUgUmVjb3JkIDogRW5kXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VzdG9tIEVtaXR0ZXIgTGlzdGVuZXIgOiBCZWdpblxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMuZW1pdCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy4kb3B0aW9ucy5lbWl0KS5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlWzFdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbihlWzBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICBlWzFdLmFwcGx5KHRoaXMsIFthcmd1bWVudHNbMF1dKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBFbWl0dGVyIExpc3RlbmVyIDogRW5kXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5fQ29tcG9uZW50X2h5ZHJhdGVzID0gbmV3IFdlYWtNYXAoKSwgX0NvbXBvbmVudF9tdXRhdGlvbk9ic2VydmVyID0gbmV3IFdlYWtNYXAoKSwgX0NvbXBvbmVudF9tdXRhdGlvbk9ic2VydmVkID0gbmV3IFdlYWtNYXAoKSwgX0NvbXBvbmVudF9wZW5kaW5nID0gbmV3IFdlYWtNYXAoKSwgX0NvbXBvbmVudF9jb21wbGV0ZWQgPSBuZXcgV2Vha01hcCgpLCBfQ29tcG9uZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9Db21wb25lbnRfY2Ftb3VmbGFnZSA9IGZ1bmN0aW9uIF9Db21wb25lbnRfY2Ftb3VmbGFnZSgpIHtcbiAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oJ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKCdyZWFkeScsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbn0sIF9Db21wb25lbnRfY2hlY2tDb21waWxhdGVkRG9uZSA9IGZ1bmN0aW9uIF9Db21wb25lbnRfY2hlY2tDb21waWxhdGVkRG9uZShsb3QpIHtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X3BlbmRpbmcsIFwiZlwiKSA9PSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfY29tcGxldGVkLCBcImZcIikpIHtcbiAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29tcGlsYXRlZCcsIGxvdCk7XG4gICAgICAgIGlmICghdGhpcy5pc1JlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3JlYWR5JywgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbXBpbGF0ZSBEb25lJywgbG90KVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIEV4cG9ydGF0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZW5zZW4ge1xufVxuU2Vuc2VuLkNvbXBvbmVudCA9IENvbXBvbmVudDtcblNlbnNlbi5TY3JlZW4gPSBTZW5zZW5TY3JlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5amIzSmxMMmx1WkdWNExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenRCUVVGQkxFOUJRVThzUlVGQlJTeGhRVUZoTEVWQlFVVXNkVUpCUVhWQ0xFVkJRVVVzYVVKQlFXbENMRVZCUVVVc01rSkJRVEpDTEVWQlFVVXNUVUZCVFN4aFFVRmhMRU5CUVVNN1FVRkRja2dzVDBGQlR5eEZRVUZGTEdGQlFXRXNSVUZCUlN4TlFVRk5MRmRCUVZjc1EwRkJRenRCUVVNeFF5eFBRVUZQTEVWQlFVVXNaVUZCWlN4RlFVRkZMRTFCUVUwc1kwRkJZeXhEUVVGRE8wRkJSUzlETEU5QlFVOHNSVUZCUlN4cFFrRkJhVUlzUlVGQlJTeE5RVUZOTEZsQlFWa3NRMEZCUXp0QlFWRXZReXhOUVVGTkxGVkJRVlVzTUVKQlFUQkNMRU5CVVhoRExGTkJRVFpDTEVWQlFVVXNSVUZCVXp0SlFVVjBReXhOUVVGTkxFTkJRVU1zUjBGQmJVTXNSVUZCYlVNc1EwRkJRVHRKUVVjM1JTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRk5CUVZNc1EwRkJRenRKUVVWdVFpeERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRVHRKUVVWYUxFOUJRVThzUTBGQlF5eERRVUZETzBGQlJXSXNRMEZCUXp0QlFVMUVPenRIUVVWSE8wRkJRMGdzVFVGQlRTeHBRa0ZCY1VJc1UwRkJVU3hYUVVGWE8wbEJaVEZET3p0UFFVVkhPMGxCUTBnc1dVRkJXU3hMUVVGVE8xRkJSV3BDTEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCV0ZvN08xZEJSVWM3VVVGRFNDeFZRVUZMTEVkQlFVOHNSVUZCVHl4RFFVRkRPMUZCVldoQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMGxCUlhaQ0xFTkJRVU03U1VGeVFrUTdPMDlCUlVjN1NVRkRTQ3hOUVVGTkxFdEJRVXNzYTBKQlFXdENMRXRCUVVrc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQmNVSTNRenM3VDBGRlJ6dEpRVU5JTEdsQ1FVRnBRaXhMUVVGSExFTkJRVU03U1VGSGNrSTdPMDlCUlVjN1NVRkRTQ3hsUVVGbExFdEJRVWNzUTBGQlF6dEpRVWR1UWpzN1QwRkZSenRKUVVOSUxHOUNRVUZ2UWl4TFFVRkhMRU5CUVVNN1NVRkplRUk3TzA5QlJVYzdTVUZEU0N4M1FrRkJkMEk3U1VGRmVFSXNRMEZCUXp0RFFVbEtPMEZCVDBRN08wZEJSVWM3UVVGRlNDeE5RVUZOTEU5QlFVOHNXVUZCV1R0SlFVZHlRaXhaUVVGWkxFMUJRWEZDTzFGQlJUZENMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkJPMGxCUlhaRExFTkJRVU03UTBGSlNqdEJRVkZFT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hQUVVGUExGTkJRVk03U1VFeVEyeENPenRQUVVWSE8wbEJRMFlzV1VGQldTeFBRVUZwUkRzN1VVRndRemxFTEdGQlFWRXNSMEZCV1N4RlFVRkZMRU5CUVVNN1VVRk5ka0lzV1VGQlR5eEhRVUV5UXl4RlFVRXlReXhEUVVGRE8xRkJSVGxHTEdGQlFWRXNSMEZCT0VNc1JVRkJPRU1zUTBGQlFUdFJRVTF3Unl4WlFVRlBMRWRCUVZrc1MwRkJTeXhEUVVGRE8xRkJSM3BDTEhORFFVRnpSRHRSUVVWMFJDdzRRMEZCYzBNN1VVRkZkRU1zT0VOQlFYTkRPMUZCVFhSRExEWkNRVUZ0UWl4RFFVRkRMRVZCUVVNN1VVRkZja0lzSzBKQlFYRkNMRU5CUVVNc1JVRkJRenRSUVZOdVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTlCUVU4c1EwRkJRenRSUVVWNFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eExRVUZMTEVsQlFVVXNSVUZCUlN4RFFVRlZMRU5CUVVFN1VVRkZMME1zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eEpRVUZGTEVWQlFVVXNRMEZCVlN4RFFVRkJPMUZCUlM5RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzU1VGQlJTeEZRVUZGTEVOQlFWa3NRMEZCUVR0UlFVVnlSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NZVUZCWVN4RlFVRkZMRU5CUVVNN1VVRkZjRU1zZFVKQlFVRXNTVUZCU1N4MVFrRkJZU3hKUVVGSkxHbENRVUZwUWl4RFFVRjNRaXhKUVVGSkxFTkJRVU1zVFVGQlFTeERRVUZCTzFGQlIyNUZMSFZDUVVGQkxFbEJRVWtzYlVSQlJWa3NUVUZHYUVJc1NVRkJTU3hEUVVWak8yRkJSV0lzVTBGQlV5eEZRVUZGTzJGQlJWZ3NWMEZCVnl4RlFVRkZPMkZCUldJc1UwRkJVeXhGUVVGRk8yRkJSVkFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUVN4RlFVRkZPMWxCUlZBc1NVRkJSeXhIUVVGSExFVkJRVU03WjBKQlJVZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU03WjBKQlJYQkNMRWxCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEZsQlFWa3NWMEZCVnl4RlFVRkRPMjlDUVVVMVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVVjZRenRoUVVWS08xbEJSVVFzU1VGQlNUdHBRa0ZGUXl4VlFVRlZMRVZCUVVVN2FVSkJSVm9zVlVGQlZTeEZRVUZGTEVOQlJXaENPMUZCUlV3c1EwRkJReXhEUVVGRExFTkJSVlE3U1VGRlRDeERRVUZETzBsQlMwUTdPMDlCUlVjN1NVRkRTQ3hUUVVGVE8xRkJSVXdzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCY1VJc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZETEVWQlFVVTdXVUZGZEVRc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkJPMWxCUnpGRUxFbEJRVWNzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1NVRkJTU3hSUVVGUkxFVkJRVU03WjBKQlJYcERMRWxCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEZsQlFWa3NWMEZCVnl4RlFVRkRPMjlDUVVVMVF5eEpRVUZITEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlF6dDNRa0ZGY0VNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGQk8zZENRVVY0UXl4UFFVRlBPM0ZDUVVWV08ybENRVWRLTzJkQ1FVVkVMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtJc1QwRkJUenRoUVVWV08ybENRVVZITzJkQ1FVVkJMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dG5Ra0ZITTBRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVFN1owSkJSek5DT3p0dFFrRkZSenRuUWtGRFNDeEpRVUZITEV0QlFVc3NSVUZCUXp0dlFrRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenR2UWtGQlF5eFBRVUZQTzJsQ1FVRkZPMmRDUVVseVJEczdiVUpCUlVjN1owSkJSVWdzVFVGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZCTzJkQ1FVVnNReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlV5eEpRVUZMTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVeXhGUVVGRkxFTkJRVUU3WjBKQlJ6RkdMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkJMRVZCUVVVc1IwRkJSU3hKUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVsQlFVa3NSMEZCUnl4RlFVRkRPMjlDUVVGRkxFOUJRVThzVTBGQlV5eERRVUZCTzJsQ1FVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2NVSkJSVE5GTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVFc1JVRkJSVHR2UWtGRlVpeEpRVUZITEVsQlFVa3NSVUZCUXp0M1FrRkZTaXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVVc1EwRkJRVHQzUWtGRk9VSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8zRkNRVVZvUWp0NVFrRkZSenQzUWtGQlJTeFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN2NVSkJRVVU3WjBKQlJ5OUNMRU5CUVVNc1EwRkJRenR4UWtGRlJDeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkJMRVZCUVVVc1IwRkJSU3hQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRVHRuUWtGSGRrTXNUMEZCVHp0aFFVVldPMUZCVFV3c1EwRkJReXhEUVVGRExFTkJRVUU3U1VGRlRpeERRVUZETzBsQmQwTkVPenRQUVVWSE8wbEJSVWdzVjBGQlZ6dFJRVVZRTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeERRVUZETzFGQlJURkNMRzlFUVVGdlJEdFJRVVZ3UkN4blJFRkJaMFE3VVVGRmFFUXNTVUZCU1R0UlFVVktMRzFDUVVGdFFqdFJRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZka01zVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZGYUVJc1EwRkJRenRKUVVsRUxHdENRVUZyUWl4RFFVRkRMRXRCUVdkRU8xRkJSUzlFTEUxQlFVMHNUVUZCVFN4SFFVRkhMRXRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEpRVUZKTEVsQlFVa3NRMEZCUXp0UlFVVTVReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVVUZIYkVJc1NVRkJSeXhOUVVGTkxFVkJRVU03V1VGRlRpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRTFCUVU4c1RVRkJUU3hEUVVGRExFbEJRVXNzUlVGQlJTeERRVUZCTzFsQlIzSkRPenRsUVVWSE8xbEJRMGdzU1VGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJRenRuUWtGRmNrSXNTVUZCUnl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEpRVUZKTEZGQlFWRXNSVUZCUXp0dlFrRkZlRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eEhRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJVU3hGUVVGRkxFTkJRV2RDTEVOQlFVRTdhVUpCUlRsR08yRkJSVW83V1VGSFJEczdaVUZGUnp0WlFVTklMRWxCUVVjc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJRenRuUWtGRmJFTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTkxGTkJRVkVzYVVKQlFYZENPMjlDUVVWb1JDeFpRVUZaTEV0QlFWazdkMEpCUlhCQ0xFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUVR0M1FrRkZXaXh0UWtGQmJVSTdkMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dHZRa0ZGTDBNc1EwRkJRenRwUWtGRlNpeERRVUZCTzJkQ1FVZEVMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdsQ1FVRnBRaXhIUVVGSExFZEJRVVVzUlVGQlJUdHZRa0ZGTVVNc2JVSkJRVzFDTzI5Q1FVTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU03WjBKQlJTOURMRU5CUVVNc1EwRkJRVHRuUWtGSFJDeEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhsUVVGbExFZEJRVWNzUjBGQlJTeEZRVUZGTzI5Q1FVVjRReXh0UWtGQmJVSTdiMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZGTjBNc1EwRkJReXhEUVVGQk8yZENRVWRFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRWRCUVVVc1JVRkJSVHR2UWtGRk4wTXNiVUpCUVcxQ08yOUNRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eGpRVUZqTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJSV3hFTEVOQlFVTXNRMEZCUVR0blFrRkhSQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4M1FrRkJkMElzUjBGQlJ5eERRVUZETEVsQlFWa3NSVUZCUlN4TFFVRlpMRVZCUVVVc1VVRkJaU3hGUVVGRExFVkJRVVU3YjBKQlJUVkdMRzFDUVVGdFFqdHZRa0ZEYmtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVWNFJTeERRVUZETEVOQlFVRTdaMEpCUjBRc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTzI5Q1FVVnlSQ3hIUVVGSExFVkJRVVU3ZDBKQlJVUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlFUdHZRa0ZGZWtVc1EwRkJRenRwUWtGRlNpeERRVUZETEVOQlFVRTdaMEpCUjBZc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVVVzUTBGQlFUdGhRVVZ5UkR0WlFVVkVMRWxCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEZsQlFWa3NWMEZCVnl4RlFVRkRPMmRDUVVVMVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3haUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVkQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZNc1JVRkJSU3hEUVVGRExFTkJRVUU3WVVGRmJFVTdXVUZGUkN4SlFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNXVUZCV1N4WFFVRlhMRU5CUVVNc1JVRkJRenRuUWtGRkwwTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkpMRWxCUVVrc1EwRkJReXhSUVVGVExFVkJRVVVzUTBGQlF5eERRVUZCTzJGQlJYWkZPMWxCUjBRc2JVSkJRVzFDTzFsQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVkcVJEdFJRVWRFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUldoQ0xFTkJRVU03U1VGVlJEczdUMEZGUnp0SlFVTklMRlZCUVZVN1VVRkhUaXhKUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4WlFVRlpMRmRCUVZjc1JVRkJRenRaUVVVMVF5eDFRa0ZCUVN4SlFVRkpMQ3RDUVVGeFFpeEpRVUZKTEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZETEVWQlFVVTdaMEpCUlhKRUxFbEJRVWNzVDBGQlR5eEZRVUZETzI5Q1FVVlFMSFZDUVVGQkxFbEJRVWtzSzBKQlFYRkNMRTlCUVU4c1RVRkJRU3hEUVVGQk8yOUNRVVZvUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlFTeEZRVUZGTzNkQ1FVVndRaXhKUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVsQlFVa3NXVUZCV1N4RlFVRkRPelJDUVVVelFpeEpRVUZITEUxQlFVMHNRMEZCUXl4aFFVRmhMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEZsQlFWa3NWMEZCVnl4RlFVRkRPMmREUVVWd1JTeEpRVUZITEUxQlFVMHNRMEZCUXl4aFFVRmhMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlF6dHZRMEZGYkVNc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEdGQlFYZERMRU5CUVVFN2IwTkJSVE5FTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVUU3YjBOQlJYUkZMR0ZCUVdFN2IwTkJRMklzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUlN4SFFVRkhMRU5CUVVVc1IwRkJSeXhMUVVGTExFTkJRVUU3YjBOQlIzcENMRzFDUVVGdFFqdHZRMEZEYmtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNZMEZCWXl4RlFVRkZPM2REUVVOd1F5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMR0ZCUVdFN2QwTkJRekZDTEV0QlFVczdkME5CUTB3c1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eFJRVUZSTzNGRFFVTTFRaXhEUVVGRExFTkJRVU03YVVOQlJVNDdOa0pCUlVvN2VVSkJSMG83ZDBKQlJVUXNiVUpCUVcxQ08zZENRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dHZRa0ZGZUVRc1EwRkJReXhEUVVGRExFTkJRVUU3YjBKQlJVWXNiVUpCUVcxQ08yOUNRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dHBRa0ZGZWtRN1dVRkhUQ3hEUVVGRExFTkJRVU1zVFVGQlFTeERRVUZCTzFsQlJVWXNkVUpCUVVFc1NVRkJTU3h0UTBGQmEwSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVTTdaMEpCUldwRUxGTkJRVk1zUlVGQlJTeEpRVUZKTzJkQ1FVVm1MRTlCUVU4c1JVRkJSU3hKUVVGSk8yZENRVVZpTEZWQlFWVXNSVUZCUlN4SlFVRkpPMmRDUVVWb1FpeGhRVUZoTEVWQlFVVXNTVUZCU1R0blFrRkZia0lzY1VKQlFYRkNMRVZCUVVVc1NVRkJTVHRuUWtGRk0wSXNhVUpCUVdsQ0xFVkJRVVVzU1VGQlNUdG5Ra0ZGZGtJc1pVRkJaU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRoUVVVelF5eERRVUZETEVOQlFVRTdXVUZIUml4dFFrRkJiVUk3V1VGRGJrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zTUVKQlFUQkNMRVZCUVVVc2RVSkJRVUVzU1VGQlNTeHRRMEZCYTBJc1EwRkJReXhEUVVGRE8xTkJSUzlGTzFGQlMwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzUTBGQlF6dEpRVkZFTEdGQlFXRXNRMEZCUXl4SlFVRnBRanRSUVVVelFpeE5RVUZOTEV0QlFVc3NSMEZCUnl4MVFrRkJRU3hKUVVGSkxESkNRVUZWTEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJSU3hKUVVGSkxFTkJRVVVzUTBGQlFUdFJRVWR5UkN4SlFVRkhMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVU03V1VGRllpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRU3hGUVVGRk8yZENRVVZrTEhWQ1FVRkJMRWxCUVVrc01rSkJRVlVzUlVGQlJTeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRPM0ZDUVVWcVF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVNc1JVRkJSVHR2UWtGRlZpeHRRa0ZCYlVJN2IwSkJRMjVDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExHVkJRV1VzUlVGQlJTeEZRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVNc1EwRkJReXhEUVVGRE8yZENRVVUzUkN4RFFVRkRMRU5CUVVNc1EwRkJRVHRaUVVWV0xFTkJRVU1zUTBGQlF5eERRVUZCTzFOQlJVdzdVVUZIUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVWb1FpeERRVUZETzBsQlVVUTdPMDlCUlVjN1NVRkRTQ3hWUVVGVk8xRkJSVTRzU1VGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1dVRkJXU3hYUVVGWExFVkJRVU03V1VGRk5VTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkRMRVZCUVVVN08yZENRVVUzUXl4cFJFRkJRU3hEUVVGQkxEQkVRVUZoTEVWQlFXSXNTVUZCWlN4SlFVRkJMRU5CUVVFc1RVRkJRU3hEUVVGRE8yZENRVVZvUWpzN2JVSkJSVWM3WjBKQlJVZ3NTVUZCUnl4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzVVVGQlVTeEZRVUZETzI5Q1FVVTNRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1EwRkJRenR2UWtGSGVrTXNUVUZCVFN4UlFVRlJMRWRCUVVjN2QwSkJSV0lzUjBGQlJ5eERRVUZETEV0QlFVc3NTVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU3l4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkZjRVlzUjBGQlJ5eERRVUZETEV0QlFVc3NTVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNiVUpCUVc5Q0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdkMEpCUlhCSUxHOUlRVUZ2U0R0eFFrRkRka2dzUTBGQlFUdHZRa0ZIUkN4SlFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVU03ZDBKQlJXWXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVUVzUlVGQlJUczBRa0ZGYUVJc1RVRkJUU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVUU3TkVKQlJUZERMRTFCUVUwc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkJMRVZCUVVVc1EwRkJRU3hEUVVGRExFbEJRVVVzVTBGQlV5eERRVUZETEVOQlFVRTdORUpCUlRORExFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVdkQ0xFTkJRVUU3TkVKQlJYQkRMR0ZCUVdFN05FSkJRMklzUzBGQlN5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGQk96UkNRVVY2UWl4WFFVRlhMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6czBRa0ZGTVVJc2RVSkJRVUVzU1VGQlNTd3lRa0ZCVlN4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkJPM2RDUVVWc1JDeERRVUZETEVOQlFVTXNRMEZCUVR0eFFrRkZURHRwUWtGRlNqdG5Ra0ZIUkN4dFFrRkJiVUk3WjBKQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEc5Q1FVRnZRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzFsQlJURkVMRU5CUVVNc1EwRkJReXhEUVVGQk8xTkJSVXc3VVVGRlJDeHRRa0ZCYlVJN1VVRkRia0lzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkZiRVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZGYUVJc1EwRkJRenRKUVc5RFJEczdUMEZGUnp0SlFVTklMRk5CUVZNN1VVRkhURHM3VjBGRlJ6dFJRVVZJTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1RVRkJUU3hEUVVGakxHTkJRV01zUlVGQlJTeERRVUZETEVsQlFVa3NSVUZCUXl4RlFVRkZPMWxCUlhaRUxEWkRRVUUyUXp0UlFVVnFSQ3hEUVVGRExFTkJRVU1zUTBGQlFUdFJRVVZHT3p0WFFVVkhPMUZCU1VnN08xZEJSVWM3VVVGRlNDeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJiVUlzTUVKQlFUQkNMRVZCUVVVc1EwRkJReXhKUVVGSkxFVkJRVU1zUlVGQlJUdFpRVVY0UlN3d1EwRkJNRU03VVVGRk9VTXNRMEZCUXl4RFFVRkRMRU5CUVVFN1VVRkZSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCYVVJc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4SlFVRkpMRVZCUVVNc1JVRkJSVHRaUVVVNVJDd3dRMEZCTUVNN1dVRkZNVU1zU1VGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJRenRuUWtGRmFFSXNkVUpCUVVFc1NVRkJTU3d5UWtGQlZTeEZRVUZGTEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZCTzJGQlJXcEVPMUZCUjB3c1EwRkJReXhEUVVGRExFTkJRVUU3VVVGRlJpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJReXhGUVVGRk8xbEJSUzlETERKRFFVRXlRenRSUVVVdlF5eERRVUZETEVOQlFVTXNRMEZCUVR0UlFVVkdPenRYUVVWSE8xRkJUMGc3TzFkQlJVYzdVVUZGU0N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQmJVSXNiMEpCUVc5Q0xFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVTXNSVUZCUlR0WlFVVXZSQ3hOUVVGTkxGRkJRVkVzUjBGQk9FTXNSVUZCUlN4RFFVRkJPMWxCUnpsRUxFbEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUXp0blFrRkZUaXhKUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRTFCUVUwc1JVRkJRenR2UWtGRmNrSXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGQk8ybENRVVUzUXp0eFFrRkZTU3hKUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4SlFVRkpMRlZCUVZVc1JVRkJRenR2UWtGRk9VSXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVRTdhVUpCUldwRU8zRkNRVVZKTEVsQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzWjBKQlFXZENMRVZCUVVNN2IwSkJSWEJETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZCTzJsQ1FVVjJSRHR4UWtGRlNTeEpRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxHOUNRVUZ2UWl4RlFVRkRPMjlDUVVWNFF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMREpDUVVFeVFpeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlFUdHBRa0ZGTTBRN2NVSkJSVWtzU1VGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1NVRkJTU3hYUVVGWExFVkJRVU03YjBKQlJTOUNMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJSVlFzU1VGQlNTeFBRVUZQTEVOQlFXMUNMRU5CUVVNc1EwRkJReXhGUVVGRExFTkJRVU1zUlVGQlF5eEZRVUZGTzNkQ1FVVnFReXhKUVVGSExFTkJRVU1zUTBGQlF5eFhRVUZYTEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRE96UkNRVU40UWl4TlFVRk5MRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0NVFrRkROME03ZDBKQlJVUXNTVUZCUnl4UFFVRlBMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NTVUZCU1N4VlFVRlZMRVZCUVVNN05FSkJRek5ETEUxQlFVMHNRMEZCUXl3eVFrRkJORUlzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTeXhKUVVGSkxFTkJRVU1zUTBGQlF6dDVRa0ZEYmtVN2QwSkJSVVFzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVFN2QwSkJSVzVETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3YjBKQlJXSXNRMEZCUXl4RFFVRkRMRU5CUlV3c1EwRkJRVHRwUWtGRlNqdGhRVVZLTzFsQlIwUXNTVUZCUnl4UlFVRlJMRU5CUVVNc1RVRkJUU3hGUVVGRE8yZENRVVZtTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRE8zRkNRVVZvUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGQkxFVkJRVVU3TzI5Q1FVVlFMRzFFUVVGQkxFTkJRVUVzTkVSQlFXVXNSVUZCWml4SlFVRnBRaXhKUVVGQkxFTkJRVUVzVFVGQlFTeERRVUZETzI5Q1FVVnNRaXhyUTBGQmEwTTdiMEpCUld4RExIVkNRVUZCTEVsQlFVa3NORVJCUVhGQ0xFMUJRWHBDTEVsQlFVa3NSVUZCYzBJc1IwRkJSeXhEUVVGRExFTkJRVU03WjBKQlJXNURMRU5CUVVNc1EwRkJReXhEUVVWTU8yRkJSMG83VVVGRlRDeERRVUZETEVOQlFVTXNRMEZCUVR0UlFVVkdMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZqTEZkQlFWY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJReXhGUVVGRk8xbEJSWEJFTEdsRVFVRnBSRHRSUVVWeVJDeERRVUZETEVOQlFVTXNRMEZCUVR0UlFVZEdPenRYUVVWSE8xRkJUMGc3TzFkQlJVYzdVVUZGU0N4SlFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEZRVUZETzFsQlJXeENMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZCTEVWQlFVVTdaMEpCUlhSRExFbEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1ZVRkJWU3hGUVVGRE8yOUNRVVY2UWl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU03YjBKQlJXeENMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHQzUWtGRmVFSXNZVUZCWVR0M1FrRkRZaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVFN2IwSkJSWEJETEVOQlFVTXNRMEZCUXl4RFFVRkJPMmxDUVVWTU8xbEJSVXdzUTBGQlF5eERRVUZETEVOQlFVRTdVMEZGVER0UlFVVkVPenRYUVVWSE8xRkJTMGdzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZGYUVJc1EwRkJRenREUVU5S096dEpRVGRzUWs4c1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeE5RVUZOTEVOQlFXTXNUMEZCVHl4RlFVRkZMRWRCUVVVc1JVRkJSVHRSUVVVMVF5eEpRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhaUVVGWkxGZEJRVmNzUlVGQlF6dFpRVVUxUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRenRUUVVWb1JEdEpRVVZNTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUlVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeE5RVUZOTEVOQlFXTXNUMEZCVHl4RlFVRkZMRWRCUVVVc1JVRkJSVHRSUVVVMVF5eEpRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhaUVVGWkxGZEJRVmNzUlVGQlF6dFpRVVUxUXl4aFFVRmhPMWxCUTJJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRk9VTTdTVUZGVEN4RFFVRkRMRU5CUVVNc1EwRkJRVHRKUVVkR0xFOUJRVThzU1VGQlNTeERRVUZETzBGQlJXaENMRU5CUVVNc01rVkJaMWR2UWl4SFFVRnhRenRKUVVWMFJDeEpRVUZITEhWQ1FVRkJMRWxCUVVrc01FSkJRVk1zU1VGQlNTeDFRa0ZCUVN4SlFVRkpMRFJDUVVGWExFVkJRVU03VVVGRmFFTXNiVUpCUVcxQ08xRkJRMjVDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExGbEJRVmtzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVVXpReXhKUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUXp0WlFVVmlMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlJYQkNMRzFDUVVGdFFqdFpRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkZNVU03VVVGRlJDeHhRMEZCY1VNN1MwRkZlRU03U1VGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXp0QlFVVm9RaXhEUVVGRE8wRkJjVTVNT3p0SFFVVkhPMEZCUlVZc1RVRkJUU3hEUVVGRExFOUJRVThzVDBGQlR5eE5RVUZOT3p0QlFVVnFRaXhuUWtGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXp0QlFVVjBRaXhoUVVGTkxFZEJRVWNzV1VGQldTeERRVUZESWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1EyOXRjR2xzWVhSbFJXTm9ieXdnUTI5dGNHbHNZWFJsUldOb2IwRjBkSEpwWW5WMFpYTXNJRU52YlhCcGJHRjBaVk51WVhCRGIyUmxMQ0JEYjIxd2FXeGhkR1ZUYm1Gd1EyOWtaVUYwZEhKcFluVjBaWE1nZlNCbWNtOXRJRndpTGk5amIyMXdhV3hoZEdWY0lqdGNibWx0Y0c5eWRDQjdJRk5sYm5ObGJrVnRhWFIwWlhJZ2ZTQm1jbTl0SUZ3aUxpOWxiV2wwZEdWeVhDSTdYRzVwYlhCdmNuUWdleUJHYVc1a1JYaHdjbVZ6YzJsdmJuTWdmU0JtY205dElGd2lMaTlsZUhCeVpYTnphVzl1WENJN1hHNXBiWEJ2Y25RZ2RIbHdaU0I3SUVOdmJYQnZibVZ1ZEUxbGRHaHZaRVYyWlc1MExDQkRiMjF3YjI1bGJuUk5aWFJvYjJSU1lYY3NJRU52YlhCdmJtVnVkRkJ5YjNCekxDQkRiMjF3YjI1bGJuUlRkR0YwWlN3Z1JYaHdjbVZ6YzJsdmJsSmxZMjl5WkN3Z1ZFTnZiWEJ2Ym1WdWRFOXdkR2x2Ym5Nc0lGUlRZM0psWlc1RGIyNW1hV2NnZlNCbWNtOXRJRndpTGk5cGJtUmxlQzUwWENJN1hHNXBiWEJ2Y25RZ2V5QkRiMjF3YjI1bGJuUkllV1J5WVhSbGN5QjlJR1p5YjIwZ1hDSXVMMmg1WkhKaGRHVnpYQ0k3WEc1Y2JseHVYRzVjYmx4dVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQkRjbVZoZEdWRGIyMXdiMjVsYm5STlpYUm9iMlJGZG1WdWREeGNiaUFnSUNCY2JpQWdJQ0JUSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVTNSaGRHVXNJRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQlFJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVSEp2Y0hNc1hHNGdJQ0FnWEc0Z0lDQWdUU0JsZUhSbGJtUnpJRU52YlhCdmJtVnVkRTFsZEdodlpGSmhkenhUTENCUVBseHVJQ0FnSUZ4dVBpaGpiMjF3YjI1bGJuUTZJRU52YlhCdmJtVnVkRHhUTENCUUxDQk5QaXdnWlhZNklFVjJaVzUwS1h0Y2JseHVJQ0FnSUdOdmJuTjBJRjhnT2lCRGIyMXdiMjVsYm5STlpYUm9iMlJGZG1WdWREeFRMQ0JRTENCTlBpQTlJSHQ5SUdGeklFTnZiWEJ2Ym1WdWRFMWxkR2h2WkVWMlpXNTBQRk1zSUZBc0lFMCtYRzRnSUNBZ1hHNWNiaUFnSUNCZkxuTmxiR1lnUFNCamIyMXdiMjVsYm5RN1hHNWNiaUFnSUNCZkxtVjJaVzUwSUQwZ1pYWmNiaUFnSUNCY2JpQWdJQ0J5WlhSMWNtNGdYenRjYmx4dWZWeHVYRzVjYmx4dVhHNWNiaThxS2x4dUlDb2dVMlZ1YzJWdUlFaFVUVXdnUld4bGJXVnVkRnh1SUNvdlhHNWpiR0Z6Y3lCVFpXNXpaVzVJVkUxTVJXeGxiV1Z1ZER4UVBpQmxlSFJsYm1SeklFaFVUVXhGYkdWdFpXNTBlMXh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCUWNtOXdaWEowYVdWeklHNWhiV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnpkR0YwYVdNZ1oyVjBJRzlpYzJWeWRtVmtRWFIwY21saWRYUmxjeWdwSUh0eVpYUjFjbTRnVzEwN0lIMWNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUkhsdVlXMXBZeUIyWVhKY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J3Y205d2N5QTZJRkFnUFNCN2ZTQmhjeUJRTzF4dUlDQWdJRnh1SUNBZ0lGeHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFNWxkeUJEYjI1emRISjFZM1JjYmlBZ0lDQWdLaTljYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5QTZJRkFwZTF4dVhHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1d2NtOXdjeUE5SUhCeWIzQnpPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZkb1pXNGdSV3hsYldWdWRDQnBjeUJqYjI1dVpXTjBaV1JjYmlBZ0lDQWdLaTljYmlBZ0lDQmpiMjV1WldOMFpXUkRZV3hzWW1GamF5Z3BlMzFjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1YyaGxiaUJGYkdWdFpXNTBJR2x6SUVGa2IzQjBaV1FnWW5rZ2IzUm9aWElnUkU5TlhHNGdJQ0FnSUNvdlhHNGdJQ0FnWVdSdmNIUmxaRU5oYkd4aVlXTnJLQ2w3ZlZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQlhhR1Z1WlNCRmJHVnRaVzUwSUdseklFUnBjMk52Ym01bFkzUmxaQ0IwYnlCMGFHVWdZM1Z5Y21WdWRDQkVUMDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmthWE5qYjI1dVpXTjBaV1JEWVd4c1ltRmpheWdwZTMxY2JpQWdJQ0JjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1YyaGxibVVnUld4bGJXVnVkQ0JqYUdGdVoyVWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQXFMMXh1SUNBZ0lHRjBkSEpwWW5WMFpVTm9ZVzVuWldSRFlXeHNZbUZqYXlncGUxeHVYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dVhHNGdJQ0FnWEc1OVhHNWNibHh1WEc1Y2JseHVYRzR2S2lwY2JpQXFJRk5sYm5ObGJpQlRZM0psWlc1Y2JpQXFMMXh1WEc1bGVIQnZjblFnWTJ4aGMzTWdVMlZ1YzJWdVUyTnlaV1Z1ZTF4dVhHNWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaGpiMjVtYVdjNklGUlRZM0psWlc1RGIyNW1hV2NwZTF4dVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWQyRnliaWduVTJWdWMyVnVJRk5qY21WbGJpY3NJSFJvYVhNcFhHNWNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdYRzVjYm4xY2JseHVYRzVjYmx4dVhHNWNibHh1THlvcVhHNGdLaUJUWlc1elpXNGdRMjl0Y0c5dVpXNTBYRzRnS2k5Y2JtVjRjRzl5ZENCamJHRnpjeUJEYjIxd2IyNWxiblE4WEc1Y2JpQWdJQ0JUZEdGMFpTQmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRGTjBZWFJsTENCY2JpQWdJQ0JjYmlBZ0lDQlFjbTl3Y3lCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZEZCeWIzQnpMRnh1SUNBZ0lGeHVJQ0FnSUUxbGRHaHZaSE1nWlhoMFpXNWtjeUJEYjIxd2IyNWxiblJOWlhSb2IyUlNZWGM4VTNSaGRHVXNJRkJ5YjNCelBseHVJQ0FnSUZ4dVBudGNibHh1SUNBZ0lDUjBZV2RPWVcxbElEb2djM1J5YVc1bklEMGdKeWM3WEc1Y2JpQWdJQ0J6ZEdGMFpTQTZJSHNnVzFNZ2FXNGdhMlY1YjJZZ1UzUmhkR1ZkSURvZ1UzUmhkR1ZiVTEwZ2ZUdGNibHh1SUNBZ0lIQnliM0J6SURvZ2V5QmJVQ0JwYmlCclpYbHZaaUJRY205d2MxMGdPaUJRY205d2MxdFFYU0I5TzF4dVhHNGdJQ0FnYldWMGFHOWtjeUE2SUhzZ1cwMGdhVzRnYTJWNWIyWWdUV1YwYUc5a2MxMGdPaUJOWlhSb2IyUnpXMDFkSUgwZ1BTQjdmU0JoY3lCN0lGdE5JR2x1SUd0bGVXOW1JRTFsZEdodlpITmRJRG9nVFdWMGFHOWtjMXROWFNCOU8xeHVYRzRnSUNBZ0pHOXdkR2x2Ym5NZ09pQlVRMjl0Y0c5dVpXNTBUM0IwYVc5dWN6eFRkR0YwWlN3Z1VISnZjSE1zSUUxbGRHaHZaSE0rSUQwZ2UzMGdZWE1nVkVOdmJYQnZibVZ1ZEU5d2RHbHZibk04VTNSaGRHVXNJRkJ5YjNCekxDQk5aWFJvYjJSelBseHVJQ0FnSUZ4dUlDQWdJQ1JsYldsMGRHVnlQeUE2SUZObGJuTmxia1Z0YVhSMFpYSTdYRzVjYmlBZ0lDQWthMnhoYzNNL0lEb2dRM1Z6ZEc5dFJXeGxiV1Z1ZEVOdmJuTjBjblZqZEc5eU8xeHVJQ0FnSUZ4dUlDQWdJR2x6VW1WaFpIazZJR0p2YjJ4bFlXNGdQU0JtWVd4elpUdGNibHh1WEc0Z0lDQWdJMmg1WkhKaGRHVnpQeUE2SUVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6UEZOMFlYUmxMQ0JRY205d2N5d2dUV1YwYUc5a2N6NDdYRzRnSUNBZ1hHNGdJQ0FnSTIxMWRHRjBhVzl1VDJKelpYSjJaWEkvSURvZ1RYVjBZWFJwYjI1UFluTmxjblpsY2p0Y2JseHVJQ0FnSUNOdGRYUmhkR2x2Yms5aWMyVnlkbVZrUHlBNklFMTFkR0YwYVc5dVVtVmpiM0prVzEwN1hHNWNibHh1SUNBZ0lIUmxiWEJzWVhSbFB6b2djM1J5YVc1bk8xeHVYRzVjYmlBZ0lDQWpjR1Z1WkdsdVp6b2diblZ0WW1WeUlEMGdNRHRjYmx4dUlDQWdJQ05qYjIxd2JHVjBaV1E2SUc1MWJXSmxjaUE5SURBN1hHNGdJQ0FnWEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlFNWxkeUJEYjI1emRISjFZM1JjYmlBZ0lDQWdLaTljYmlBZ0lDQWdZMjl1YzNSeWRXTjBiM0lvYjNCMGFXOXVjem9nVkVOdmJYQnZibVZ1ZEU5d2RHbHZibk04VTNSaGRHVXNJRkJ5YjNCekxDQk5aWFJvYjJSelBpbDdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NGtiM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTTdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlDaDBhR2x6TGlSdmNIUnBiMjV6TG5OMFlYUmxmSHg3ZlNrZ1lYTWdVM1JoZEdWY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeWIzQnpJRDBnS0hSb2FYTXVKRzl3ZEdsdmJuTXVjSEp2Y0hOOGZIdDlLU0JoY3lCUWNtOXdjMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV1YwYUc5a2N5QTlJQ2gwYUdsekxpUnZjSFJwYjI1ekxtMWxkR2h2WkhOOGZIdDlLU0JoY3lCTlpYUm9iMlJ6WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTRrWlcxcGRIUmxjaUE5SUc1bGR5QlRaVzV6Wlc1RmJXbDBkR1Z5S0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0amFIbGtjbUYwWlhNZ1BTQnVaWGNnUTI5dGNHOXVaVzUwU0hsa2NtRjBaWE04VTNSaGRHVXNJRkJ5YjNCekxDQk5aWFJvYjJSelBpaDBhR2x6S1Z4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwYzF4dUlDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1STJOaGJXOTFabXhoWjJVb0tWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdUpHVnRhWFIwYVc1bktDbGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdMaVJwYm1sMGFXRnNhWHBsS0NsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTGlSMFpXMXdiR0YwWlNncFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xuUm9aVzRvZEhCc1BUNTdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSd2JDbDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblJsYlhCc1lYUmxJRDBnZEhCc08xeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHaHBjeTRrYjNCMGFXOXVjeTVsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RcGUxeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Skc5d2RHbHZibk11Wld4bGJXVnVkQzVwYm01bGNraFVUVXdnUFNCMGNHdzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTGlSdlluTmxjblpsY25Nb0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1SkdOdmJYQnBiR0YwWlNncFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQTdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibHh1WEc1Y2JseHVJQ0FnSUM4cUtseHVJQ0FnSUNBcUlITmxkQ0JVWlcxd2JHRjBaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lDUjBaVzF3YkdGMFpTZ3BlMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlR4emRISnBibWNnZkNCMWJtUmxabWx1WldRK0tDaHlaWE52YkhabExDQnlaV3BsWTNRcFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdWQyRnliaWduUTI5dGNHOXVaVzUwSUhSbGJYQnNZWFJsSnl3Z2RHaHBjeTRrYjNCMGFXOXVjeTUwWlcxd2JHRjBaU2xjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnZEdocGN5NGtiM0IwYVc5dWN5NTBaVzF3YkdGMFpTQWhQU0FuYzNSeWFXNW5KeWw3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppaDBhR2x6TGlSdmNIUnBiMjV6TG1Wc1pXMWxiblFnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9KMmx1Ym1WeVNGUk5UQ2NnYVc0Z2RHaHBjeTRrYjNCMGFXOXVjeTVsYkdWdFpXNTBLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2gwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RdWFXNXVaWEpJVkUxTUtWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaDFibVJsWm1sdVpXUXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZMmhsWTJzZ1BTQjBhR2x6TGlSdmNIUnBiMjV6TG5SbGJYQnNZWFJsTG0xaGRHTm9LQzg4WEZ3dlAxdGVQbDByUGk5bmFTazdYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktDZGphR1ZqYXljc0lHTm9aV05yS1Z4dUlDQWdJRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb2dTV1lnVkdWdGNHeGhkR1VnYVhNZ1UzUnlhVzVuSUVoVVRVd2dZMjlrWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LR05vWldOcktYc2djbVZ6YjJ4MlpTaDBhR2x6TGlSdmNIUnBiMjV6TG5SbGJYQnNZWFJsS1RzZ2NtVjBkWEp1T3lCOVhHNWNibHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb2dSV3h6WlN3Z2FYUW5jeUJtYVd4bElIQmhkR2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhWeWJDQTlJRzVsZHlCVlVrd29iRzlqWVhScGIyNHVhSEpsWmlsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCaGRHZ2dQU0JnTGlSN0lDaDFjbXd1Y0dGMGFHNWhiV1VnUFQwZ0p5OG5LU0EvSUNjbklEb2dkWEpzTG5CaGRHaHVZVzFsSUgwdkpIc2dkR2hwY3k0a2IzQjBhVzl1Y3k1MFpXMXdiR0YwWlNCOVlGeHVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtWlhSamFDaHdZWFJvS1M1MGFHVnVLR1E5UG5zZ2FXWW9aQzV6ZEdGMGRYTWdQVDBnTkRBMEtYc2djbVYwZFhKdUlIVnVaR1ZtYVc1bFpDQjlJSEpsZEhWeWJpQmtMblJsZUhRb0tTQjlLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNTBhR1Z1S0dSaGRHRTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1pHRjBZU2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExuZGhjbTRvSjBOb1pXTnJkWEFuTENCa1lYUmhJQ2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb1pHRjBZU2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxleUJ5WlhOdmJIWmxLSFZ1WkdWbWFXNWxaQ2s3SUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzVqWVhSamFDaGxjajArZXlCeVpYTnZiSFpsS0hWdVpHVm1hVzVsWkNrN0lIMHBYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCY2JseHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEWVcxdmRXWnNZV2RsWEc0Z0lDQWdJQ292WEc0Z0lDQWdJMk5oYlc5MVpteGhaMlVvS1h0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlSbGJXbDBkR1Z5UHk1c2FYTjBaVzQ4ZEhsd1pXOW1JSFJvYVhNK0tDZHpkR0Z5ZENjc0lDZ3BQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXVKRzl3ZEdsdmJuTXVaV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRWhVVFV4RmJHVnRaVzUwS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Skc5d2RHbHZibk11Wld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdKMjV2Ym1Vbk8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlSbGJXbDBkR1Z5UHk1c2FYTjBaVzQ4ZEhsd1pXOW1JSFJvYVhNK0tDZHlaV0ZrZVNjc0lDZ3BQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXVKRzl3ZEdsdmJuTXVaV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRWhVVFV4RmJHVnRaVzUwS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUIwY3kxcFoyNXZjbVZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUc1MWJHdzdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOUtWeHVYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JpQWdJQ0JjYmx4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkpibWwwYVdGc2FYcGxYRzRnSUNBZ0lDb3ZYRzVjYmlBZ0lDQWthVzVwZEdsaGJHbDZaU2dwZTF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11SkdsdWFYUnBZV3hwZW1WRmJHVnRaVzUwS0NrN1hHNWNiaUFnSUNBZ0lDQWdMeThnYVdZb2RHaHBjeTRrYjNCMGFXOXVjeTVsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RcGUxeHVYRzRnSUNBZ0lDQWdJQzh2SUNBZ0lDQjBhR2x6TGlSdmNIUnBiMjV6TG1Wc1pXMWxiblF1YzNSNWJHVXViM0JoWTJsMGVTQTlJQ2N3SjF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUgxY2JseHVJQ0FnSUNBZ0lDQXZLaW9nS2lCRmJXbDBJRVYyWlc1MElDb3ZYRzRnSUNBZ0lDQWdJSFJvYVhNdUpHVnRhWFIwWlhJL0xtUnBjM0JoZEdOb0tDZHpkR0Z5ZENjc0lIUm9hWE1wTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmx4dVhHNGdJQ0FnSkdsdWFYUnBZV3hwZW1WRmJHVnRaVzUwS0hCeWIzQnpQem9nVkVOdmJYQnZibVZ1ZEU5d2RHbHZibk04VTNSaGRHVXNJRkJ5YjNCekxDQk5aWFJvYjJSelBpbDdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdKSEJ5YjNCeklEMGdjSEp2Y0hNZ2ZId2dkR2hwY3k0a2IzQjBhVzl1Y3lCOGZDQnVkV3hzTzF4dVhHNGdJQ0FnSUNBZ0lHTnZibk4wSUhObGJHWWdQU0IwYUdsek8xeHVYRzVjYmlBZ0lDQWdJQ0FnYVdZb0pIQnliM0J6S1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtkR0ZuVG1GdFpTQTlJR0J6Ymkwa2V5QWtjSEp2Y0hNdWJtRnRaU0I5WUZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1JtbHVaQ0JqZFhKeVpXNTBJRVZzWlcxbGJuUWdjMlZ1ZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvZEhsd1pXOW1JSFJvYVhNdUpHOXdkR2x2Ym5NdVpXeGxiV1Z1ZENBOVBTQW5jM1J5YVc1bkp5bDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRrYjNCMGFXOXVjeTVsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNpaGdKSHNnZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MElIMWdLU0JoY3lCSVZFMU1SV3hsYldWdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCRVpXWnBibVVnWTNWemRHOXRJRVZzWlcxbGJuUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lXTjFjM1J2YlVWc1pXMWxiblJ6TG1kbGRDaDBhR2x6TGlSMFlXZE9ZVzFsS1NsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGlScmJHRnpjeUE5SUdOc1lYTnpJR1Y0ZEdWdVpITWdVMlZ1YzJWdVNGUk5URVZzWlcxbGJuUThVSEp2Y0hNK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6T2lCUWNtOXdjeWw3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2lod2NtOXdjeWxjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvcUlDb2dSVzFwZENCRmRtVnVkQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNGtaVzFwZEhSbGNqOHVaR2x6Y0dGMFkyZ29KMk52Ym5OMGNuVmpkQ2NzSUhObGJHWXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJyYkdGemN5NXdjbTkwYjNSNWNHVXVZMjl1Ym1WamRHVmtRMkZzYkdKaFkyc2dQU0FvS1QwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtpQXFJRVZ0YVhRZ1JYWmxiblFnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlZzWmk0a1pXMXBkSFJsY2o4dVpHbHpjR0YwWTJnb0oyTnZibTVsWTNSbFpDY3NJSE5sYkdZcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Skd0c1lYTnpMbkJ5YjNSdmRIbHdaUzVoWkc5d2RHVmtRMkZzYkdKaFkyc2dQU0FvS1QwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtpQXFJRVZ0YVhRZ1JYWmxiblFnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjMlZzWmk0a1pXMXBkSFJsY2o4dVpHbHpjR0YwWTJnb0oyRmtiM0IwWldRbkxDQnpaV3htS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJyYkdGemN5NXdjbTkwYjNSNWNHVXVaR2x6WTI5dWJtVmpkR1ZrUTJGc2JHSmhZMnNnUFNBb0tUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHFLaUFxSUVWdGFYUWdSWFpsYm5RZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNGtaVzFwZEhSbGNqOHVaR2x6Y0dGMFkyZ29KMlJwYzJOdmJtNWxZM1JsWkNjc0lITmxiR1lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKR3RzWVhOekxuQnliM1J2ZEhsd1pTNWhkSFJ5YVdKMWRHVkRhR0Z1WjJWa1EyRnNiR0poWTJzZ1BTQW9ibUZ0WlRvZ2MzUnlhVzVuTENCMllXeDFaVHB6ZEhKcGJtY3NJRzlzWkZaaGJIVmxPbk4wY21sdVp5azlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaW9nS2lCRmJXbDBJRVYyWlc1MElDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHWXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2R1VUhKdmNITkRhR0Z1WjJWa0p5d2dleUJ1WVcxbExDQjJZV3gxWlN3Z2IyeGtWbUZzZFdVZ2ZTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0hSb2FYTXVKR3RzWVhOekxDQW5iMkp6WlhKMlpXUkJkSFJ5YVdKMWRHVnpKeXdnZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2RsZERvZ1puVnVZM1JwYjI0b0tYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDaDBlWEJsYjJZZ2MyVnNaaTV3Y205d2N5QTlQU0FuYjJKcVpXTjBKeWtnUHlCUFltcGxZM1F1YTJWNWN5aHpaV3htTG5CeWIzQnpLU0E2SUZ0ZFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z6ZEc5dFJXeGxiV1Z1ZEhNdVpHVm1hVzVsS0hSb2FYTXVKSFJoWjA1aGJXVXNJSFJvYVhNdUpHdHNZWE56SUNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaDBhR2x6TGlSdmNIUnBiMjV6TG1Wc1pXMWxiblFnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RL0xuTmxkRUYwZEhKcFluVjBaU2duYVhNbkxDQmdKSHNnZEdocGN5NGtkR0ZuVG1GdFpTQjlZQ2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaEtIUm9hWE11Skc5d2RHbHZibk11Wld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUVoVVRVeEZiR1Z0Wlc1MEtTbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0dBa2V5QjBhR2x6TGlSMFlXZE9ZVzFsSUgxZ0tWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FJQ29nUlcxcGRDQkZkbVZ1ZENBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtaVzFwZEhSbGNqOHVaR2x6Y0dGMFkyZ29KMlZzWlcxbGJuUlNaV0ZrZVNjc0lIUm9hWE1wTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dVhHNWNibHh1WEc1Y2JseHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJFVDAwZ1QySnpaWEoyWlhKY2JpQWdJQ0FnS2k5Y2JpQWdJQ0FrYjJKelpYSjJaWEp6S0NsN1hHNWNibHh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMaVJ2Y0hScGIyNXpMbVZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJJVkUxTVJXeGxiV1Z1ZENsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdUkyMTFkR0YwYVc5dVQySnpaWEoyWlhJZ1BTQnVaWGNnVFhWMFlYUnBiMjVQWW5ObGNuWmxjaWdvY21WamIzSmtjeWs5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LSEpsWTI5eVpITXBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11STIxMWRHRjBhVzl1VDJKelpYSjJaV1FnUFNCeVpXTnZjbVJ6WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa2N5NW1iM0pGWVdOb0tISmxZMjl5WkQwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWh5WldOdmNtUXVkSGx3WlNBOVBTQW5ZWFIwY21saWRYUmxjeWNwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvY21WamIzSmtMbUYwZEhKcFluVjBaVTVoYldVZ0ppWWdkR2hwY3k0a2IzQjBhVzl1Y3k1bGJHVnRaVzUwSUdsdWMzUmhibU5sYjJZZ1NGUk5URVZzWlcxbGJuUXBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hKbFkyOXlaQzVoZEhSeWFXSjFkR1ZPWVcxbElHbHVJSFJvYVhNdWNISnZjSE1wZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0J5WldOdmNtUXVZWFIwY21saWRYUmxUbUZ0WlNCaGN5QnJaWGx2WmlCMGVYQmxiMllnZEdocGN5NXdjbTl3YzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVKRzl3ZEdsdmJuTXVaV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvY21WamIzSmtMbUYwZEhKcFluVjBaVTVoYldVcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVCMGN5MXBaMjV2Y21WY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0hKdmNITmJJR3RsZVNCZElEMGdkbUZzZFdWY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpb2dLaUJGYldsMElFVjJaVzUwSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGlSbGJXbDBkR1Z5UHk1a2FYTndZWFJqYUNnbmNISnZjSE5EYUdGdVoyVmtKeXdnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklISmxZMjl5WkM1aGRIUnlhV0oxZEdWT1lXMWxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzlzWkZaaGJIVmxPaUJ5WldOdmNtUXViMnhrVm1Gc2RXVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtpQXFJRVZ0YVhRZ1JYWmxiblFnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2R0ZFhSaGRHbHZiazlpYzJWeWRtVmtKeXdnY21WamIzSmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xSUNvZ1JXMXBkQ0JGZG1WdWRDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duYlhWMFlYUnBiMjV6VDJKelpYSjJaV1FuTENCeVpXTnZjbVJ6S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaU50ZFhSaGRHbHZiazlpYzJWeWRtVnlMbTlpYzJWeWRtVW9kR2hwY3k0a2IzQjBhVzl1Y3k1bGJHVnRaVzUwTEh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHbHNaRXhwYzNRNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNWaWRISmxaVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkSFJ5YVdKMWRHVnpPaUIwY25WbExGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoY21GamRHVnlSR0YwWVRvZ2RISjFaU3hjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb1lYSmhZM1JsY2tSaGRHRlBiR1JXWVd4MVpUb2dkSEoxWlN4Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBkSEpwWW5WMFpVOXNaRlpoYkhWbE9pQjBjblZsTEZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYUjBjbWxpZFhSbFJtbHNkR1Z5T2lCUFltcGxZM1F1YTJWNWN5aDBhR2x6TG5CeWIzQnpLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLaUFxSUVWdGFYUWdSWFpsYm5RZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2R0ZFhSaGRHbHZiazlpYzJWeWRtRjBhVzl1VW1WaFpIa25MQ0IwYUdsekxpTnRkWFJoZEdsdmJrOWljMlZ5ZG1WeUtUdGNibHh1SUNBZ0lDQWdJQ0I5WEc1Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JpQWdJQ0JjYmx4dVhHNWNibHh1WEc1Y2JpQWdJQ0JvZVdSeVlYUmxjMU4wWVhSbEtITnNiM1E2SUd0bGVXOW1JRk4wWVhSbEtYdGNibHh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkRzl5WlNBOUlIUm9hWE11STJoNVpISmhkR1Z6UHk0a2MzUmhkR1V1Y21WMGNtbGxkbVVvSUhOc2IzUWdLVnh1WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCcFppaHpkRzl5WlQ4dWJHVnVaM1JvS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUnZjbVV1YldGd0tISmxZMjl5WkQwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11STJoNVpISmhkR1Z6UHk1b2VXUnlZWFJsYzFKbFkyOXlaQ2h5WldOdmNtUXBYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xuUm9aVzRvS0dSaGRHRXBQVDU3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvcUlDb2dSVzFwZENCRmRtVnVkQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtaVzFwZEhSbGNqOHVaR2x6Y0dGMFkyZ29KM04wWVhSbFNIbGtjbUYwWldRbkxDQjdjbVZqYjNKa0xDQmtZWFJoZlNrN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjlYRzVjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ2ZWeHVYRzVjYmx4dVhHNWNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTI5dGNHbHNZWFJsSUhSeVlXNXpZV04wYVc5dWMxeHVJQ0FnSUNBcUwxeHVJQ0FnSUNSamIyMXdhV3hoZEdVb0tYdGNibHh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMaVJ2Y0hScGIyNXpMbVZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJJVkUxTVJXeGxiV1Z1ZENsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUVacGJtUkZlSEJ5WlhOemFXOXVjeWgwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5Rc0lDaHlaV052Y21RcFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpTndaVzVrYVc1bkt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1JtbHVaQ0JUZEdGMFpTQjBieUJoZFhSdkxXTnZiWEJwYkdGMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RIbHdaVzltSUhSb2FYTXVjM1JoZEdVZ1BUMGdKMjlpYW1WamRDY3BlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnY21WamIzSmtMbTF2WTJ0MWNEOHVkR1Y0ZEVOdmJuUmxiblE3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE5OWVhSamFHVnpJRDBnVzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNG9kbUZzZFdWOGZDY25LUzV0WVhSamFFRnNiQ2h1WlhjZ1VtVm5SWGh3S0dBb0pIc2dUMkpxWldOMExtdGxlWE1vZEdocGN5NXpkR0YwWlNrdWFtOXBiaWduZkNjcElIMHBZQ3dnSjJjbktTa3NYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzR1TGloMllXeDFaWHg4SnljcExtMWhkR05vUVd4c0tHNWxkeUJTWldkRmVIQW9ZSFJvYVhOY1hGeGNMbk4wWVhSbFhGeGNYQzRvSkhzZ1QySnFaV04wTG10bGVYTW9kR2hwY3k1emRHRjBaU2t1YW05cGJpZ25LWHgwYUdselhGeGNYQzV6ZEdGMFpWeGNYRnd1S0NjcElIMHBZQ3dnSjJjbktTa3NYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUM0dUxpaDJZV3gxWlh4OEp5Y3BMbTFoZEdOb1FXeHNLRzVsZHlCU1pXZEZlSEFvWUhSb2FYTmNYRnhjTG5CeWIzQnpYRnhjWEM0a2V5QlBZbXBsWTNRdWEyVjVjeWgwYUdsekxuQnliM0J6S1M1cWIybHVLQ2Q4ZEdocGMxeGNYRnd1Y0hKdmNITmNYRnhjTGljcElIMWdMQ0FuWnljcEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWFZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2MwMWhkR05vWlhNdWJHVnVaM1JvS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MwMWhkR05vWlhNdWJXRndLRzFoZEdOb1BUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J5WldOdmNtUkRiRzl1WlNBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lISmxZMjl5WkNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQjFjbWRsSUQwZ2JXRjBZMmd1Wm1sc2RHVnlLSFk5UG5ZaFBYVnVaR1ZtYVc1bFpDbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE5zYjNRZ1BTQndkWEpuWlZzeFhTQmhjeUJyWlhsdlppQlRkR0YwWlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUUhSekxXbG5ibTl5WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQjFjbWRsTG1sdWNIVjBJRDBnYldGMFkyZ3VhVzV3ZFhSY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpFTnNiMjVsTG0xaGRHTm9JRDBnY0hWeVoyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaU5vZVdSeVlYUmxjejh1SkhOMFlYUmxMbkIxYzJnb2MyeHZkQ3dnY21WamIzSmtRMnh2Ym1VcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvcUlDb2dSVzFwZENCRmRtVnVkQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2RsZUhCeVpYTnphVzl1UkdWMFpXTjBaV1FuTENCeVpXTnZjbVFwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2S2lvZ0tpQkZiV2wwSUVWMlpXNTBJQ292WEc0Z0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2RqYjIxd2FXeGhkR2x2YmxKbFlXUjVKeXdnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVYRzVjYmx4dVhHNWNiaUFnSUNBalkyaGxZMnREYjIxd2FXeGhkR1ZrUkc5dVpTaHNiM1E2SUNoRmVIQnlaWE56YVc5dVVtVmpiM0prSUh3Z2RXNWtaV1pwYm1Wa0tWdGRLWHRjYmx4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TGlOd1pXNWthVzVuSUQwOUlIUm9hWE11STJOdmJYQnNaWFJsWkNsN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLaW9nS2lCRmJXbDBJRVYyWlc1MElDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duWTI5dGNHbHNZWFJsWkNjc0lHeHZkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbWx6VW1WaFpIa3BleUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtbHpVbVZoWkhrZ1BTQjBjblZsT3lCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpb2dLaUJGYldsMElFVjJaVzUwSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRrWlcxcGRIUmxjajh1WkdsemNHRjBZMmdvSjNKbFlXUjVKeXdnZEdocGN5azdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1Ykc5bktDZERiMjF3YVd4aGRHVWdSRzl1WlNjc0lHeHZkQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNWNiaUFnSUNCOVhHNWNibHh1WEc1Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dSVzFwZEhScGJtZGNiaUFnSUNBZ0tpOWNiaUFnSUNBa1pXMXBkSFJwYm1jb0tYdGNibHh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJOYjJSbGJDQTZJRUpsWjJsdVhHNGdJQ0FnSUNBZ0lDQXFMMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbXhwYzNSbGJqeDBlWEJsYjJZZ2RHaHBjejRvSjJWc1pXMWxiblJTWldGa2VTY3NJQ2hoY21kektUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbmRoY200b0owTnlaV0YwWlNCRmJHVnRaVzUwSUUxdlpHVnNKeXdnWVhKbmN5bGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOUtWeHVYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQk5iMlJsYkNBNklFVnVaRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRTExZEdGMGFXOXVjeUJQWW5ObGNuWmxjbk1nT2lCQ1pXZHBibHh1SUNBZ0lDQWdJQ0FnS2k5Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlSbGJXbDBkR1Z5UHk1c2FYTjBaVzQ4VFhWMFlYUnBiMjVQWW5ObGNuWmxjajRvSjIxMWRHRjBhVzl1VDJKelpYSjJZWFJwYjI1U1pXRmtlU2NzSUNoaGNtZHpLVDArZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCamIyNXpiMnhsTG5kaGNtNG9KMDExZEdGMGFXOXVJRTlpYzJWeWRtVmtKeXdnWVhKbmN5bGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOUtWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdUpHVnRhWFIwWlhJL0xteHBjM1JsYmp4TmRYUmhkR2x2YmxKbFkyOXlaRDRvSjIxMWRHRjBhVzl1VDJKelpYSjJaV1FuTENBb1lYSm5jeWs5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1M1lYSnVLQ2ROZFhSaGRHbHZiaUJQWW5ObGNuWmxaQ2NzSUdGeVozTXBYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR0Z5WjNNdVpXMXBkQzUwWVhKblpYUXBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGphSGxrY21GMFpYTS9MbWg1WkhKaGRHVnpUbTlrWlNoaGNtZHpMbVZ0YVhRdWRHRnlaMlYwS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11SkdWdGFYUjBaWEkvTG14cGMzUmxiaWduYlhWMFlYUnBiMjV6VDJKelpYSjJaV1FuTENBb1lYSm5jeWs5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1M1lYSnVLQ2ROZFhSaGRHbHZibk1nVDJKelpYSjJaV1FuTENCaGNtZHpLVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIMHBYRzVjYmlBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQXFJRTExZEdGMGFXOXVjeUJQWW5ObGNuWmxjbk1nT2lCRmJtUmNiaUFnSUNBZ0lDQWdJQ292WEc1Y2JseHVYRzVjYmx4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCRGIyMXdhV3hoZEdVZ1VtVmpiM0prSURvZ1FtVm5hVzVjYmlBZ0lDQWdJQ0FnSUNvdlhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dWJHbHpkR1Z1UEVWNGNISmxjM05wYjI1U1pXTnZjbVErS0NkbGVIQnlaWE56YVc5dVJHVjBaV04wWldRbkxDQW9KQ2s5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2YldselpXUTZJQ2hRY205dGFYTmxQRVY0Y0hKbGMzTnBiMjVTWldOdmNtUStJSHdnZFc1a1pXWnBibVZrS1Z0ZElEMGdXMTFjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlna0xtVnRhWFFwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9KQzVsYldsMExuUjVjR1VnUFQwZ0oyVmphRzhuS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205dGFYTmxaQzV3ZFhOb0tFTnZiWEJwYkdGMFpVVmphRzhvZEdocGN5d2dKQzVsYldsMEtTbGNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiSE5sSUdsbUtDUXVaVzFwZEM1MGVYQmxJRDA5SUNkemJtRndZMjlrWlNjcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyMXBjMlZrTG5CMWMyZ29RMjl0Y0dsc1lYUmxVMjVoY0VOdlpHVW9kR2hwY3l3Z0pDNWxiV2wwS1NsY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtS0NRdVpXMXBkQzUwZVhCbElEMDlJQ2RoZEhSeWFXSjFkR1V1WldOb2J5Y3BlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliMjFwYzJWa0xuQjFjMmdvUTI5dGNHbHNZWFJsUldOb2IwRjBkSEpwWW5WMFpYTW9kR2hwY3l3Z0pDNWxiV2wwS1NsY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtS0NRdVpXMXBkQzUwZVhCbElEMDlJQ2RoZEhSeWFXSjFkR1V1YzI1aGNHTnZaR1VuS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205dGFYTmxaQzV3ZFhOb0tFTnZiWEJwYkdGMFpWTnVZWEJEYjJSbFFYUjBjbWxpZFhSbGN5aDBhR2x6TENBa0xtVnRhWFFwS1Z4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdWc2MyVWdhV1lvSkM1bGJXbDBMblI1Y0dVZ1BUMGdKMlJwY21WamRHbDJaU2NwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjIxcGMyVmtMbkIxYzJnb1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkeUJRY205dGFYTmxQRVY0Y0hKbGMzTnBiMjVTWldOdmNtUStLQ2h5TEdvcFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppZ2hLQ2RrYVhKbFkzUnBkbVVuSUdsdUlDUXVaVzFwZENrcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUFvWUVOdmNuSjFjSFJsWkNCa2FYSmxZM1JwZG1VZ09pQnViM1FnWm05MWJtUmdLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnSkM1bGJXbDBMbVJwY21WamRHbDJaVDh1YldGcGJpQWhQU0FuWm5WdVkzUnBiMjRuS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dLR0JEYjNKeWRYQjBaV1FnWkdseVpXTjBhWFpsSURvZ1BDQWtleUFrTG1WdGFYUXVaR2x5WldOMGFYWmxQeTV1WVcxbElIMGdQbUFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWtMbVZ0YVhRdVpHbHlaV04wYVhabExtMWhhVzRvZEdocGN5d2dKQzVsYldsMEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY2lna0xtVnRhWFFwWEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtIQnliMjFwYzJWa0xteGxibWQwYUNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQlFjbTl0YVhObExtRnNiQ2h3Y205dGFYTmxaQ2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVkR2hsYmloc2IzUTlQbnRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpTmpiMjF3YkdWMFpXUXJLenRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1M1lYSnVLQ2REYjIxd2FXeGhkR1ZrSnl3Z2JHOTBLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpTmphR1ZqYTBOdmJYQnBiR0YwWldSRWIyNWxLR3h2ZENrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlSbGJXbDBkR1Z5UHk1c2FYTjBaVzQ4ZEhsd1pXOW1JSFJvYVhNK0tDZGpiMjF3YVd4aGRHVW5MQ0FvWVhKbmN5azlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnWTI5dWMyOXNaUzUzWVhKdUtDZEZlSEJ5WlhOemFXOXVJRkpsWTI5eVpHVmtKeXdnWVhKbmN5NWxiV2wwS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSDBwWEc1Y2JseHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1EyOXRjR2xzWVhSbElGSmxZMjl5WkNBNklFVnVaRnh1SUNBZ0lDQWdJQ0FnS2k5Y2JseHVYRzVjYmx4dVhHNWNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFTjFjM1J2YlNCRmJXbDBkR1Z5SUV4cGMzUmxibVZ5SURvZ1FtVm5hVzVjYmlBZ0lDQWdJQ0FnSUNvdlhHNWNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NGtiM0IwYVc5dWN5NWxiV2wwS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbVZ1ZEhKcFpYTW9kR2hwY3k0a2IzQjBhVzl1Y3k1bGJXbDBLUzV0WVhBb1pUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RIbHdaVzltSUdWYk1WMGdQVDBnSjJaMWJtTjBhVzl1SnlsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjMlZzWmlBOUlIUm9hWE03WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dWJHbHpkR1Z1S0dWYk1GMHNJR1oxYm1OMGFXOXVLQ2w3SUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCQWRITXRhV2R1YjNKbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbFd6RmRMbUZ3Y0d4NUtIUm9hWE1zSUZ0aGNtZDFiV1Z1ZEhOYk1GMWRLU0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCRGRYTjBiMjBnUlcxcGRIUmxjaUJNYVhOMFpXNWxjaUE2SUVWdVpGeHVJQ0FnSUNBZ0lDQWdLaTljYmx4dVhHNWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JseHVJQ0FnSUgxY2JseHVJQ0FnSUZ4dUlDQWdJRnh1SUNBZ0lGeHVYRzVjYm4xY2JseHVYRzVjYmx4dVhHNHZLaXBjYmlBcUlFVjRjRzl5ZEdGMGFXOXVjMXh1SUNvdlhHNWNiaUJsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCVFpXNXpaVzRnZTF4dVhHNGdJQ0FnYzNSaGRHbGpJRU52YlhCdmJtVnVkQ0E5SUVOdmJYQnZibVZ1ZER0Y2JseHVJQ0FnSUhOMFlYUnBZeUJUWTNKbFpXNGdQU0JUWlc1elpXNVRZM0psWlc0N1hHNGdJQ0FnWEc1OVhHNWNibHh1SWwxOSIsIi8qKlxuICogVXRpbGl0aWVzXG4gKi9cbi8qKlxuICogQ29udGVudCBTdGF0aWJpbHphdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gU3RhYmlsaXplQ29udGVudChjb250ZW50KSB7XG4gICAgcmV0dXJuIChjb250ZW50IHx8ICcnKS5yZXBsYWNlKC8mZ3Q7L2csIGA+YCkucmVwbGFjZSgvJmx0Oy9nLCBgPGApO1xufVxuLyoqXG4gKiBBcnJheSBSZWZhY3RvciBmcm9tIGtleSB0byBrZXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEFycmF5UmFuZ2UoYXJncywgZnJvbSwgdG8pIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCAwO1xuICAgIHRvID0gdG8gfHwgYXJncy5sZW5ndGg7XG4gICAgZnJvbSA9IGZyb20gPCAwID8gMCA6IGZyb207XG4gICAgdG8gPSB0byA+IGFyZ3MubGVuZ3RoID8gYXJncy5sZW5ndGggOiB0bztcbiAgICBmb3IgKGxldCB4ID0gKGZyb20pOyB4IDwgYXJncy5sZW5ndGg7IHgrKykge1xuICAgICAgICBvdXQucHVzaChhcmdzW3hdKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVIVE1MRW50aXRpZXMoaW5wdXQpIHtcbiAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRtcC5pbm5lckhUTUwgPSBpbnB1dDtcbiAgICByZXR1cm4gdG1wLnZhbHVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUhUTUxFbnRpdGllcyhpbnB1dCkge1xuICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdG1wLmlubmVyVGV4dCA9IGlucHV0O1xuICAgIHJldHVybiB0bXAuaW5uZXJIVE1MO1xufVxuLyoqXG4gKiBGaXggSlNPTlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gSlNPTlNhZmVQYXJzZTxUIGV4dGVuZHMgb2JqZWN0Pihqc29uOiBzdHJpbmcpIDogVCB8IG51bGx7XG4vLyAgICAgbGV0IGZpeGVkIDogVCA9IHt9IGFzIFRcbi8vICAgICAvKipcbi8vICAgICAgKiBAU29sdXRpb24gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTkzMjk0OTUvMTgwNTk0MTFcbi8vICAgICAgKi9cbi8vICAgICBmdW5jdGlvbiBidWxrUmVnZXgoc3RyOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbiB8IEFycmF5PEZ1bmN0aW9uPil7XG4vLyAgICAgICAgIGlmKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyl7XG4vLyAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soc3RyKTtcbi8vICAgICAgICAgfWVsc2UgaWYoY2FsbGJhY2sgJiYgQXJyYXkuaXNBcnJheShjYWxsYmFjaykpe1xuLy8gICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrLmxlbmd0aDsgaSsrKXtcbi8vICAgICAgICAgICAgICAgICBpZihjYWxsYmFja1tpXSAmJiB0eXBlb2YgY2FsbGJhY2tbaV0gPT09ICdmdW5jdGlvbicpe1xuLy8gICAgICAgICAgICAgICAgICAgICBzdHIgPSBjYWxsYmFja1tpXShzdHIpO1xuLy8gICAgICAgICAgICAgICAgIH1lbHNle2JyZWFrO31cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIHJldHVybiBzdHI7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHN0cjtcbi8vICAgICB9XG4vLyAgICAgaWYoanNvbiAmJiBqc29uICE9PSAnJyl7XG4vLyAgICAgICAgIGlmKHR5cGVvZiBqc29uICE9PSAnc3RyaW5nJyl7XG4vLyAgICAgICAgICAgICB0cnl7XG4vLyAgICAgICAgICAgICAgICAganNvbiA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuLy8gICAgICAgICAgICAgfWNhdGNoKGUpe3JldHVybiBudWxsO31cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZih0eXBlb2YganNvbiA9PT0gJ3N0cmluZycpe1xuLy8gICAgICAgICAgICAganNvbiA9IGJ1bGtSZWdleChqc29uLCBbXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC9bXFxuXFx0XS9nbSwgJycpLFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvLFxcfS9nbSwgJ30nKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyxcXF0vZ20sICddJyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGFzdHIgPSBzdHIuc3BsaXQoLyg/PVssXFx9XFxdXSkvZyk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFzdHIgPSBhc3RyLm1hcChzID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuaW5jbHVkZXMoJzonKSAmJiBzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyUCA9IHMuc3BsaXQoLzooLispLywgMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFswXSA9IHN0clBbMF0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0clBbMF0pe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RQID0gc3RyUFswXS5zcGxpdCgvKFssXFx7XFxbXSkvZyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0UFtmaXJzdFAubGVuZ3RoLTFdID0gYnVsa1JlZ2V4KGZpcnN0UFtmaXJzdFAubGVuZ3RoLTFdLCAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvW15BLVphLXowLTlcXC1fXS8sICcnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBmaXJzdFAuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gc3RyUFsxXS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoKHBhcnQuc3RhcnRzV2l0aCgnXCInKSAmJiBwYXJ0LmVuZHNXaXRoKCdcIicpKSB8fCAocGFydC5zdGFydHNXaXRoKCdcXCcnKSAmJiBwYXJ0LmVuZHNXaXRoKCdcXCcnKSkgfHwgKHBhcnQuc3RhcnRzV2l0aCgnYCcpICYmIHBhcnQuZW5kc1dpdGgoJ2AnKSkpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydC5zdWJzdHIoMSwgcGFydC5sZW5ndGggLSAyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IGJ1bGtSZWdleChwYXJ0LCBbXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC8oW1wiXSkvZ20sICdcXFxcJDEnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHA6c3RyaW5nKSA9PiBwLnJlcGxhY2UoL1xcXFwnL2dtLCAnXFwnJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC9cXFxcYC9nbSwgJ2AnKSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzFdID0gKCdcIicrcGFydCsnXCInKS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IHN0clAuam9pbignOicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHM7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXN0ci5qb2luKCcnKTtcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvKFsnXCJdKT8oW2EtekEtWjAtOVxcLV9dKykoWydcIl0pPzovZywgJ1wiJDJcIjonKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBsZXQgYXN0ciA9IHN0ci5zcGxpdCgvKD89WyxcXH1cXF1dKS9naSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGFzdHIgPSBhc3RyLm1hcChzID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHMuaW5jbHVkZXMoJzonKSAmJiBzKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RyUCA9IHMuc3BsaXQoLzooLispLywgMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFswXSA9IHN0clBbMF0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0clBbMV0uaW5jbHVkZXMoJ1wiJykgJiYgc3RyUFsxXS5pbmNsdWRlcygnOicpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnQgPSBzdHJQWzFdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFydC5zdGFydHNXaXRoKCdcIicpICYmIHBhcnQuZW5kc1dpdGgoJ1wiJykpe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3Vic3RyaW5nKDEsIHBhcnQubGVuZ3RoIC0gMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gYnVsa1JlZ2V4KHBhcnQsIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC8oPzwhXFxcXClcIi9nbSwgJycpKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzFdID0gKCdcIicrcGFydCsnXCInKS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzdHJQLmpvaW4oJzonKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzdHIuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgIF0pO1xuLy8gICAgICAgICAgICAgdHJ5e1xuLy8gICAgICAgICAgICAgICAgIGZpeGVkID0gSlNPTi5wYXJzZShqc29uKTtcbi8vICAgICAgICAgICAgIH1jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIGZpeGVkO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gbnVsbDtcbi8vIH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiR2wwYVdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dlkyOXlaUzkxZEdsc2FYUnBaWE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlEwRTdPMGRCUlVjN1FVRlJTRHM3UjBGRlJ6dEJRVU5JTEUxQlFVMHNWVUZCVlN4blFrRkJaMElzUTBGQlF5eFBRVUZsTzBsQlJUVkRMRTlCUVU4c1EwRkJReXhQUVVGUExFbEJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSWEpGTEVOQlFVTTdRVUZOUkRzN1IwRkZSenRCUVVOR0xFMUJRVTBzVlVGQlZTeFZRVUZWTEVOQlFVa3NTVUZCVVN4RlFVRkZMRWxCUVdFc1JVRkJSU3hGUVVGWE8wbEJSUzlFTEUxQlFVMHNSMEZCUnl4SFFVRlRMRVZCUVVVc1EwRkJRVHRKUVVWd1FpeEpRVUZKTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVWcVFpeEZRVUZGTEVkQlFVY3NSVUZCUlN4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03U1VGSGRrSXNTVUZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRE8wbEJSVE5DTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzBsQlIzcERMRXRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0UlFVRkZMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkZMRU5CUVVNN1MwRkJSVHRKUVVWdVJTeFBRVUZQTEVkQlFVY3NRMEZCUXp0QlFVVm1MRU5CUVVNN1FVRlBSQ3hOUVVGTkxGVkJRVlVzYTBKQlFXdENMRU5CUVVNc1MwRkJZVHRKUVVVMVF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4UlFVRlJMRU5CUVVNc1lVRkJZU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZCTzBsQlJUbERMRWRCUVVjc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlJYUkNMRTlCUVU4c1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlFUdEJRVVZ3UWl4RFFVRkRPMEZCUzBRc1RVRkJUU3hWUVVGVkxHdENRVUZyUWl4RFFVRkRMRXRCUVdFN1NVRkZOVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlFUdEpRVVU1UXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVVYwUWl4UFFVRlBMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVUU3UVVGRmVFSXNRMEZCUXp0QlFVdEVPenRIUVVWSE8wRkJRMGdzTkVWQlFUUkZPMEZCUlRWRkxEaENRVUU0UWp0QlFVVTVRaXhWUVVGVk8wRkJRMVlzYzBWQlFYTkZPMEZCUTNSRkxGVkJRVlU3UVVGRlZpdzJSVUZCTmtVN1FVRkROMFVzTUVSQlFUQkVPMEZCUXpGRUxHOURRVUZ2UXp0QlFVTndReXg1UkVGQmVVUTdRVUZEZWtRc2QwUkJRWGRFTzBGQlEzaEVMSGRGUVVGM1JUdEJRVU40UlN3NFEwRkJPRU03UVVGRE9VTXNaME5CUVdkRE8wRkJRMmhETEdkQ1FVRm5RanRCUVVOb1Fpd3dRa0ZCTUVJN1FVRkRNVUlzV1VGQldUdEJRVU5hTEhOQ1FVRnpRanRCUVVOMFFpeFJRVUZSTzBGQlIxSXNLMEpCUVN0Q08wRkJReTlDTEhkRFFVRjNRenRCUVVONFF5eHRRa0ZCYlVJN1FVRkRia0lzSzBOQlFTdERPMEZCUXk5RExITkRRVUZ6UXp0QlFVTjBReXhaUVVGWk8wRkJRMW9zZDBOQlFYZERPMEZCUTNoRExIVkRRVUYxUXp0QlFVTjJReXdyUkVGQkswUTdRVUZETDBRc05rUkJRVFpFTzBGQlF6ZEVMRFpFUVVFMlJEdEJRVU0zUkN4dlEwRkJiME03UVVGRGNFTXNORVJCUVRSRU8wRkJRelZFTERaRFFVRTJRenRCUVVNM1F5eHZSRUZCYjBRN1FVRkRjRVFzT0VSQlFUaEVPMEZCUXpsRUxIZEVRVUYzUkR0QlFVTjRSQ3d5UTBGQk1rTTdRVUZETTBNc05FVkJRVFJGTzBGQlF6VkZMR2RLUVVGblNqdEJRVU5vU2l3MlJFRkJOa1E3UVVGRE4wUXNaME5CUVdkRE8wRkJRMmhETEhsRVFVRjVSRHRCUVVONlJDeHJURUZCYTB3N1FVRkRiRXdzTUVWQlFUQkZPMEZCUXpGRkxHZERRVUZuUXp0QlFVTm9ReXgxUkVGQmRVUTdRVUZEZGtRc09FVkJRVGhGTzBGQlF6bEZMREJGUVVFd1JUdEJRVU14UlN4NVJVRkJlVVU3UVVGRGVrVXNhME5CUVd0RE8wRkJRMnhETEN0RVFVRXJSRHRCUVVNdlJDeHJSRUZCYTBRN1FVRkRiRVFzTkVKQlFUUkNPMEZCUXpWQ0xHOURRVUZ2UXp0QlFVTndReXd3UWtGQk1FSTdRVUZETVVJc05FTkJRVFJETzBGQlF6VkRMSEZDUVVGeFFqdEJRVU55UWl3MlJrRkJOa1k3UVVGRE4wWXNiME5CUVc5RE8wRkJRM0JETERaRVFVRTJSRHRCUVVNM1JDdzJRMEZCTmtNN1FVRkROME1zYjBSQlFXOUVPMEZCUTNCRUxEaEVRVUU0UkR0QlFVTTVSQ3gzUkVGQmQwUTdRVUZEZUVRc2EwWkJRV3RHTzBGQlEyeEdMRFpFUVVFMlJEdEJRVU0zUkN4clJrRkJhMFk3UVVGRGJFWXNhVVpCUVdsR08wRkJRMnBHTEhsSFFVRjVSenRCUVVONlJ5eHZRMEZCYjBNN1FVRkRjRU1zYlVWQlFXMUZPMEZCUTI1RkxHZERRVUZuUXp0QlFVTm9ReXhyUkVGQmEwUTdRVUZEYkVRc05FSkJRVFJDTzBGQlF6VkNMRzlEUVVGdlF6dEJRVU53UXl3d1FrRkJNRUk3UVVGRE1VSXNORU5CUVRSRE8wRkJRelZETEhGQ1FVRnhRanRCUVVOeVFpeHJRa0ZCYTBJN1FVRkRiRUlzYlVKQlFXMUNPMEZCUTI1Q0xEUkRRVUUwUXp0QlFVTTFReXh6UTBGQmMwTTdRVUZEZEVNc1dVRkJXVHRCUVVOYUxIZENRVUYzUWp0QlFVTjRRaXhSUVVGUk8wRkJSVklzYlVKQlFXMUNPMEZCUlc1Q0xFbEJRVWtpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKY2JpOHFLbHh1SUNvZ1ZYUnBiR2wwYVdWelhHNGdLaTljYmx4dVhHNWNibHh1WEc1Y2JseHVMeW9xWEc0Z0tpQkRiMjUwWlc1MElGTjBZWFJwWW1sc2VtRjBhVzl1WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQlRkR0ZpYVd4cGVtVkRiMjUwWlc1MEtHTnZiblJsYm5RNklITjBjbWx1WnlrZ09pQnpkSEpwYm1kN1hHNWNiaUFnSUNCeVpYUjFjbTRnS0dOdmJuUmxiblI4ZkNjbktTNXlaWEJzWVdObEtDOG1aM1E3TDJjc0lHQStZQ2t1Y21Wd2JHRmpaU2d2Sm14ME95OW5MQ0JnUEdBcE8xeHVYRzU5WEc1Y2JseHVYRzVjYmx4dUx5b3FYRzRnS2lCQmNuSmhlU0JTWldaaFkzUnZjaUJtY205dElHdGxlU0IwYnlCclpYbGNiaUFxTDF4dUlHVjRjRzl5ZENCbWRXNWpkR2x2YmlCQmNuSmhlVkpoYm1kbFBGUStLR0Z5WjNNNlZGdGRMQ0JtY205dFB6b2diblZ0WW1WeUxDQjBiejg2SUc1MWJXSmxjaWw3WEc1Y2JpQWdJQ0JqYjI1emRDQnZkWFFnT2lCVVcxMGdQU0JiWFZ4dVhHNGdJQ0FnWm5KdmJTQTlJR1p5YjIwZ2ZId2dNRHRjYmlBZ0lDQmNiaUFnSUNCMGJ5QTlJSFJ2SUh4OElHRnlaM011YkdWdVozUm9PMXh1WEc1Y2JpQWdJQ0JtY205dElEMGdabkp2YlNBOElEQWdQeUF3SURvZ1puSnZiVHRjYmx4dUlDQWdJSFJ2SUQwZ2RHOGdQaUJoY21kekxteGxibWQwYUNBL0lHRnlaM011YkdWdVozUm9JRG9nZEc4N1hHNWNibHh1SUNBZ0lHWnZjaUFvYkdWMElIZ2dQU0FvWm5KdmJTazdJSGdnUENCaGNtZHpMbXhsYm1kMGFEc2dlQ3NyS1NCN0lHOTFkQzV3ZFhOb0tDQmhjbWR6VzNoZElDazdJSDFjYmlBZ0lDQmNiaUFnSUNCeVpYUjFjbTRnYjNWME8xeHVJQ0FnSUZ4dWZWeHVYRzVjYmx4dVhHNWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR1JsWTI5a1pVaFVUVXhGYm5ScGRHbGxjeWhwYm5CMWREb2djM1J5YVc1bktYdGNibHh1SUNBZ0lHTnZibk4wSUhSdGNDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozUmxlSFJoY21WaEp5bGNibHh1SUNBZ0lIUnRjQzVwYm01bGNraFVUVXdnUFNCcGJuQjFkRHRjYmlBZ0lDQmNiaUFnSUNCeVpYUjFjbTRnZEcxd0xuWmhiSFZsWEc0Z0lDQWdYRzU5WEc1Y2JseHVYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJsYm1OdlpHVklWRTFNUlc1MGFYUnBaWE1vYVc1d2RYUTZJSE4wY21sdVp5bDdYRzVjYmlBZ0lDQmpiMjV6ZENCMGJYQWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZDBaWGgwWVhKbFlTY3BYRzVjYmlBZ0lDQjBiWEF1YVc1dVpYSlVaWGgwSUQwZ2FXNXdkWFE3WEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUhSdGNDNXBibTVsY2toVVRVeGNibHh1ZlZ4dVhHNWNibHh1WEc0dktpcGNiaUFxSUVacGVDQktVMDlPWEc0Z0tpOWNiaTh2SUdWNGNHOXlkQ0JtZFc1amRHbHZiaUJLVTA5T1UyRm1aVkJoY25ObFBGUWdaWGgwWlc1a2N5QnZZbXBsWTNRK0tHcHpiMjQ2SUhOMGNtbHVaeWtnT2lCVUlId2diblZzYkh0Y2JseHVMeThnSUNBZ0lHeGxkQ0JtYVhobFpDQTZJRlFnUFNCN2ZTQmhjeUJVWEc1Y2JpOHZJQ0FnSUNBdktpcGNiaTh2SUNBZ0lDQWdLaUJBVTI5c2RYUnBiMjRnWm5KdmJTQm9kSFJ3Y3pvdkwzTjBZV05yYjNabGNtWnNiM2N1WTI5dEwyRXZOVGt6TWprME9UVXZNVGd3TlRrME1URmNiaTh2SUNBZ0lDQWdLaTljYmx4dUx5OGdJQ0FnSUdaMWJtTjBhVzl1SUdKMWJHdFNaV2RsZUNoemRISTZJSE4wY21sdVp5d2dZMkZzYkdKaFkyczZJRVoxYm1OMGFXOXVJSHdnUVhKeVlYazhSblZ1WTNScGIyNCtLWHRjYmk4dklDQWdJQ0FnSUNBZ2FXWW9ZMkZzYkdKaFkyc2dKaVlnZEhsd1pXOW1JR05oYkd4aVlXTnJJRDA5UFNBblpuVnVZM1JwYjI0bktYdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXeHNZbUZqYXloemRISXBPMXh1THk4Z0lDQWdJQ0FnSUNCOVpXeHpaU0JwWmloallXeHNZbUZqYXlBbUppQkJjbkpoZVM1cGMwRnljbUY1S0dOaGJHeGlZV05yS1NsN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNCbWIzSW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1kyRnNiR0poWTJzdWJHVnVaM1JvT3lCcEt5c3BlMXh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtHTmhiR3hpWVdOclcybGRJQ1ltSUhSNWNHVnZaaUJqWVd4c1ltRmphMXRwWFNBOVBUMGdKMloxYm1OMGFXOXVKeWw3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wY2lBOUlHTmhiR3hpWVdOclcybGRLSE4wY2lrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmV1ZzYzJWN1luSmxZV3M3ZlZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSE4wY2p0Y2JpOHZJQ0FnSUNBZ0lDQWdmVnh1THk4Z0lDQWdJQ0FnSUNCeVpYUjFjbTRnYzNSeU8xeHVMeThnSUNBZ0lIMWNibHh1WEc0dkx5QWdJQ0FnYVdZb2FuTnZiaUFtSmlCcWMyOXVJQ0U5UFNBbkp5bDdYRzR2THlBZ0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCcWMyOXVJQ0U5UFNBbmMzUnlhVzVuSnlsN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNCMGNubDdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYW5OdmJpQTlJRXBUVDA0dWMzUnlhVzVuYVdaNUtHcHpiMjRwTzF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnZldOaGRHTm9LR1VwZTNKbGRIVnliaUJ1ZFd4c08zMWNiaTh2SUNBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnSUNBZ0lDQnBaaWgwZVhCbGIyWWdhbk52YmlBOVBUMGdKM04wY21sdVp5Y3BlMXh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdhbk52YmlBOUlHSjFiR3RTWldkbGVDaHFjMjl1TENCYlhHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLSE4wY2pwemRISnBibWNwSUQwK0lITjBjaTV5WlhCc1lXTmxLQzliWEZ4dVhGeDBYUzluYlN3Z0p5Y3BMRnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNoemRISTZjM1J5YVc1bktTQTlQaUJ6ZEhJdWNtVndiR0ZqWlNndkxGeGNmUzluYlN3Z0ozMG5LU3hjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBb2MzUnlPbk4wY21sdVp5a2dQVDRnYzNSeUxuSmxjR3hoWTJVb0x5eGNYRjB2WjIwc0lDZGRKeWtzWEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tITjBjanB6ZEhKcGJtY3BJRDArSUh0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHRnpkSElnUFNCemRISXVjM0JzYVhRb0x5Zy9QVnNzWEZ4OVhGeGRYU2t2WnlrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGemRISWdQU0JoYzNSeUxtMWhjQ2h6SUQwK0lIdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hNdWFXNWpiSFZrWlhNb0p6b25LU0FtSmlCektYdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1J5VUNBOUlITXVjM0JzYVhRb0x6b29MaXNwTHl3Z01pazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUnlVRnN3WFNBOUlITjBjbEJiTUYwdWRISnBiU2dwTzF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hOMGNsQmJNRjBwZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdabWx5YzNSUUlEMGdjM1J5VUZzd1hTNXpjR3hwZENndktGc3NYRng3WEZ4YlhTa3ZaeWs3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdacGNuTjBVRnRtYVhKemRGQXViR1Z1WjNSb0xURmRJRDBnWW5Wc2ExSmxaMlY0S0dacGNuTjBVRnRtYVhKemRGQXViR1Z1WjNSb0xURmRMQ0FvY0RwemRISnBibWNwSUQwK0lIQXVjbVZ3YkdGalpTZ3ZXMTVCTFZwaExYb3dMVGxjWEMxZlhTOHNJQ2NuS1NrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBjbEJiTUYwZ1BTQm1hWEp6ZEZBdWFtOXBiaWduSnlrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCd1lYSjBJRDBnYzNSeVVGc3hYUzUwY21sdEtDazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9LSEJoY25RdWMzUmhjblJ6VjJsMGFDZ25YQ0luS1NBbUppQndZWEowTG1WdVpITlhhWFJvS0NkY0lpY3BLU0I4ZkNBb2NHRnlkQzV6ZEdGeWRITlhhWFJvS0NkY1hDY25LU0FtSmlCd1lYSjBMbVZ1WkhOWGFYUm9LQ2RjWENjbktTa2dmSHdnS0hCaGNuUXVjM1JoY25SelYybDBhQ2duWUNjcElDWW1JSEJoY25RdVpXNWtjMWRwZEdnb0oyQW5LU2twZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYSjBJRDBnY0dGeWRDNXpkV0p6ZEhJb01Td2djR0Z5ZEM1c1pXNW5kR2dnTFNBeUtUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGeWRDQTlJR0oxYkd0U1pXZGxlQ2h3WVhKMExDQmJYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2h3T25OMGNtbHVaeWtnUFQ0Z2NDNXlaWEJzWVdObEtDOG9XMXdpWFNrdloyMHNJQ2RjWEZ4Y0pERW5LU3hjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0hBNmMzUnlhVzVuS1NBOVBpQndMbkpsY0d4aFkyVW9MMXhjWEZ3bkwyZHRMQ0FuWEZ3bkp5a3NYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2h3T25OMGNtbHVaeWtnUFQ0Z2NDNXlaWEJzWVdObEtDOWNYRnhjWUM5bmJTd2dKMkFuS1N4Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JkS1R0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEhKUVd6RmRJRDBnS0NkY0lpY3JjR0Z5ZENzblhDSW5LUzUwY21sdEtDazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2N5QTlJSE4wY2xBdWFtOXBiaWduT2ljcE8xeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSE03WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWE4wY2k1cWIybHVLQ2NuS1R0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlMRnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNoemRISTZjM1J5YVc1bktTQTlQaUJ6ZEhJdWNtVndiR0ZqWlNndktGc25YQ0pkS1Q4b1cyRXRla0V0V2pBdE9WeGNMVjlkS3lrb1d5ZGNJbDBwUHpvdlp5d2dKMXdpSkRKY0lqb25LU3hjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBb2MzUnlPbk4wY21sdVp5a2dQVDRnZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1lYTjBjaUE5SUhOMGNpNXpjR3hwZENndktEODlXeXhjWEgxY1hGMWRLUzluYVNrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGemRISWdQU0JoYzNSeUxtMWhjQ2h6SUQwK0lIdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hNdWFXNWpiSFZrWlhNb0p6b25LU0FtSmlCektYdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1J5VUNBOUlITXVjM0JzYVhRb0x6b29MaXNwTHl3Z01pazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUnlVRnN3WFNBOUlITjBjbEJiTUYwdWRISnBiU2dwTzF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hOMGNsQmJNVjB1YVc1amJIVmtaWE1vSjF3aUp5a2dKaVlnYzNSeVVGc3hYUzVwYm1Oc2RXUmxjeWduT2ljcEtYdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhCaGNuUWdQU0J6ZEhKUVd6RmRMblJ5YVcwb0tUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvY0dGeWRDNXpkR0Z5ZEhOWGFYUm9LQ2RjSWljcElDWW1JSEJoY25RdVpXNWtjMWRwZEdnb0oxd2lKeWtwZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjR0Z5ZENBOUlIQmhjblF1YzNWaWMzUnlhVzVuS0RFc0lIQmhjblF1YkdWdVozUm9JQzBnTWlrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhKMElEMGdZblZzYTFKbFoyVjRLSEJoY25Rc0lDaHdPbk4wY21sdVp5a2dQVDRnY0M1eVpYQnNZV05sS0M4b1B6d2hYRnhjWENsY0lpOW5iU3dnSnljcEtUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6ZEhKUVd6RmRJRDBnS0NkY0lpY3JjR0Z5ZENzblhDSW5LUzUwY21sdEtDazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhNZ1BTQnpkSEpRTG1wdmFXNG9Kem9uS1R0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnpPMXh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHRnpkSEl1YW05cGJpZ25KeWs3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTeGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lGMHBPMXh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdkSEo1ZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBlR1ZrSUQwZ1NsTlBUaTV3WVhKelpTaHFjMjl1S1R0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUgxallYUmphQ2hsS1h0eVpYUjFjbTRnYm5Wc2JEdDlYRzR2THlBZ0lDQWdJQ0FnSUgxY2JpOHZJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWnBlR1ZrTzF4dUx5OGdJQ0FnSUgxY2JseHVMeThnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1WEc0dkx5QjlJbDE5IiwiLypcbiAqIEVKUyBFbWJlZGRlZCBKYXZhU2NyaXB0IHRlbXBsYXRlc1xuICogQ29weXJpZ2h0IDIxMTIgTWF0dGhldyBFZXJuaXNzZSAobWRlQGZsZWVnaXgub3JnKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEBmaWxlIEVtYmVkZGVkIEphdmFTY3JpcHQgdGVtcGxhdGluZyBlbmdpbmUuIHtAbGluayBodHRwOi8vZWpzLmNvfVxuICogQGF1dGhvciBNYXR0aGV3IEVlcm5pc3NlIDxtZGVAZmxlZWdpeC5vcmc+XG4gKiBAYXV0aG9yIFRpYW5jaGVuZyBcIlRpbW90aHlcIiBHdSA8dGltb3RoeWd1OTlAZ21haWwuY29tPlxuICogQHByb2plY3QgRUpTXG4gKiBAbGljZW5zZSB7QGxpbmsgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMH1cbiAqL1xuXG4vKipcbiAqIEVKUyBpbnRlcm5hbCBmdW5jdGlvbnMuXG4gKlxuICogVGVjaG5pY2FsbHkgdGhpcyBcIm1vZHVsZVwiIGxpZXMgaW4gdGhlIHNhbWUgZmlsZSBhcyB7QGxpbmsgbW9kdWxlOmVqc30sIGZvclxuICogdGhlIHNha2Ugb2Ygb3JnYW5pemF0aW9uIGFsbCB0aGUgcHJpdmF0ZSBmdW5jdGlvbnMgcmUgZ3JvdXBlZCBpbnRvIHRoaXNcbiAqIG1vZHVsZS5cbiAqXG4gKiBAbW9kdWxlIGVqcy1pbnRlcm5hbFxuICogQHByaXZhdGVcbiAqL1xuXG4vKipcbiAqIEVtYmVkZGVkIEphdmFTY3JpcHQgdGVtcGxhdGluZyBlbmdpbmUuXG4gKlxuICogQG1vZHVsZSBlanNcbiAqIEBwdWJsaWNcbiAqL1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBzY29wZU9wdGlvbldhcm5lZCA9IGZhbHNlO1xuLyoqIEB0eXBlIHtzdHJpbmd9ICovXG52YXIgX1ZFUlNJT05fU1RSSU5HID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcbnZhciBfREVGQVVMVF9PUEVOX0RFTElNSVRFUiA9ICc8JztcbnZhciBfREVGQVVMVF9DTE9TRV9ERUxJTUlURVIgPSAnPic7XG52YXIgX0RFRkFVTFRfREVMSU1JVEVSID0gJyUnO1xudmFyIF9ERUZBVUxUX0xPQ0FMU19OQU1FID0gJ2xvY2Fscyc7XG52YXIgX05BTUUgPSAnZWpzJztcbnZhciBfUkVHRVhfU1RSSU5HID0gJyg8JSV8JSU+fDwlPXw8JS18PCVffDwlI3w8JXwlPnwtJT58XyU+KSc7XG52YXIgX09QVFNfUEFTU0FCTEVfV0lUSF9EQVRBID0gWydkZWxpbWl0ZXInLCAnc2NvcGUnLCAnY29udGV4dCcsICdkZWJ1ZycsICdjb21waWxlRGVidWcnLFxuICAnY2xpZW50JywgJ193aXRoJywgJ3JtV2hpdGVzcGFjZScsICdzdHJpY3QnLCAnZmlsZW5hbWUnLCAnYXN5bmMnXTtcbi8vIFdlIGRvbid0IGFsbG93ICdjYWNoZScgb3B0aW9uIHRvIGJlIHBhc3NlZCBpbiB0aGUgZGF0YSBvYmogZm9yXG4vLyB0aGUgbm9ybWFsIGByZW5kZXJgIGNhbGwsIGJ1dCB0aGlzIGlzIHdoZXJlIEV4cHJlc3MgMiAmIDMgcHV0IGl0XG4vLyBzbyB3ZSBtYWtlIGFuIGV4Y2VwdGlvbiBmb3IgYHJlbmRlckZpbGVgXG52YXIgX09QVFNfUEFTU0FCTEVfV0lUSF9EQVRBX0VYUFJFU1MgPSBfT1BUU19QQVNTQUJMRV9XSVRIX0RBVEEuY29uY2F0KCdjYWNoZScpO1xudmFyIF9CT00gPSAvXlxcdUZFRkYvO1xuXG4vKipcbiAqIEVKUyB0ZW1wbGF0ZSBmdW5jdGlvbiBjYWNoZS4gVGhpcyBjYW4gYmUgYSBMUlUgb2JqZWN0IGZyb20gbHJ1LWNhY2hlIE5QTVxuICogbW9kdWxlLiBCeSBkZWZhdWx0LCBpdCBpcyB7QGxpbmsgbW9kdWxlOnV0aWxzLmNhY2hlfSwgYSBzaW1wbGUgaW4tcHJvY2Vzc1xuICogY2FjaGUgdGhhdCBncm93cyBjb250aW51b3VzbHkuXG4gKlxuICogQHR5cGUge0NhY2hlfVxuICovXG5cbmV4cG9ydHMuY2FjaGUgPSB1dGlscy5jYWNoZTtcblxuLyoqXG4gKiBDdXN0b20gZmlsZSBsb2FkZXIuIFVzZWZ1bCBmb3IgdGVtcGxhdGUgcHJlcHJvY2Vzc2luZyBvciByZXN0cmljdGluZyBhY2Nlc3NcbiAqIHRvIGEgY2VydGFpbiBwYXJ0IG9mIHRoZSBmaWxlc3lzdGVtLlxuICpcbiAqIEB0eXBlIHtmaWxlTG9hZGVyfVxuICovXG5cbmV4cG9ydHMuZmlsZUxvYWRlciA9IGZzLnJlYWRGaWxlU3luYztcblxuLyoqXG4gKiBOYW1lIG9mIHRoZSBvYmplY3QgY29udGFpbmluZyB0aGUgbG9jYWxzLlxuICpcbiAqIFRoaXMgdmFyaWFibGUgaXMgb3ZlcnJpZGRlbiBieSB7QGxpbmsgT3B0aW9uc31gLmxvY2Fsc05hbWVgIGlmIGl0IGlzIG5vdFxuICogYHVuZGVmaW5lZGAuXG4gKlxuICogQHR5cGUge1N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmxvY2Fsc05hbWUgPSBfREVGQVVMVF9MT0NBTFNfTkFNRTtcblxuLyoqXG4gKiBQcm9taXNlIGltcGxlbWVudGF0aW9uIC0tIGRlZmF1bHRzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlXG4gKiBUaGlzIGlzIG1vc3RseSBqdXN0IGZvciB0ZXN0YWJpbGl0eVxuICpcbiAqIEB0eXBlIHtQcm9taXNlQ29uc3RydWN0b3JMaWtlfVxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvbWlzZUltcGwgPSAobmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpczsnKSkoKS5Qcm9taXNlO1xuXG4vKipcbiAqIEdldCB0aGUgcGF0aCB0byB0aGUgaW5jbHVkZWQgZmlsZSBmcm9tIHRoZSBwYXJlbnQgZmlsZSBwYXRoIGFuZCB0aGVcbiAqIHNwZWNpZmllZCBwYXRoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSAgbmFtZSAgICAgc3BlY2lmaWVkIHBhdGhcbiAqIEBwYXJhbSB7U3RyaW5nfSAgZmlsZW5hbWUgcGFyZW50IGZpbGUgcGF0aFxuICogQHBhcmFtIHtCb29sZWFufSBbaXNEaXI9ZmFsc2VdIHdoZXRoZXIgdGhlIHBhcmVudCBmaWxlIHBhdGggaXMgYSBkaXJlY3RvcnlcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5yZXNvbHZlSW5jbHVkZSA9IGZ1bmN0aW9uKG5hbWUsIGZpbGVuYW1lLCBpc0Rpcikge1xuICB2YXIgZGlybmFtZSA9IHBhdGguZGlybmFtZTtcbiAgdmFyIGV4dG5hbWUgPSBwYXRoLmV4dG5hbWU7XG4gIHZhciByZXNvbHZlID0gcGF0aC5yZXNvbHZlO1xuICB2YXIgaW5jbHVkZVBhdGggPSByZXNvbHZlKGlzRGlyID8gZmlsZW5hbWUgOiBkaXJuYW1lKGZpbGVuYW1lKSwgbmFtZSk7XG4gIHZhciBleHQgPSBleHRuYW1lKG5hbWUpO1xuICBpZiAoIWV4dCkge1xuICAgIGluY2x1ZGVQYXRoICs9ICcuZWpzJztcbiAgfVxuICByZXR1cm4gaW5jbHVkZVBhdGg7XG59O1xuXG4vKipcbiAqIFRyeSB0byByZXNvbHZlIGZpbGUgcGF0aCBvbiBtdWx0aXBsZSBkaXJlY3Rvcmllc1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgIG5hbWUgIHNwZWNpZmllZCBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheTxTdHJpbmc+fSBwYXRocyBsaXN0IG9mIHBvc3NpYmxlIHBhcmVudCBkaXJlY3RvcnkgcGF0aHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVBhdGhzKG5hbWUsIHBhdGhzKSB7XG4gIHZhciBmaWxlUGF0aDtcbiAgaWYgKHBhdGhzLnNvbWUoZnVuY3Rpb24gKHYpIHtcbiAgICBmaWxlUGF0aCA9IGV4cG9ydHMucmVzb2x2ZUluY2x1ZGUobmFtZSwgdiwgdHJ1ZSk7XG4gICAgcmV0dXJuIGZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpO1xuICB9KSkge1xuICAgIHJldHVybiBmaWxlUGF0aDtcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgcGF0aCB0byB0aGUgaW5jbHVkZWQgZmlsZSBieSBPcHRpb25zXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgcGF0aCAgICBzcGVjaWZpZWQgcGF0aFxuICogQHBhcmFtICB7T3B0aW9uc30gb3B0aW9ucyBjb21waWxhdGlvbiBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEluY2x1ZGVQYXRoKHBhdGgsIG9wdGlvbnMpIHtcbiAgdmFyIGluY2x1ZGVQYXRoO1xuICB2YXIgZmlsZVBhdGg7XG4gIHZhciB2aWV3cyA9IG9wdGlvbnMudmlld3M7XG4gIHZhciBtYXRjaCA9IC9eW0EtWmEtel0rOlxcXFx8XlxcLy8uZXhlYyhwYXRoKTtcblxuICAvLyBBYnMgcGF0aFxuICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoKSB7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcLyovLCAnJyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucy5yb290KSkge1xuICAgICAgaW5jbHVkZVBhdGggPSByZXNvbHZlUGF0aHMocGF0aCwgb3B0aW9ucy5yb290KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5jbHVkZVBhdGggPSBleHBvcnRzLnJlc29sdmVJbmNsdWRlKHBhdGgsIG9wdGlvbnMucm9vdCB8fCAnLycsIHRydWUpO1xuICAgIH1cbiAgfVxuICAvLyBSZWxhdGl2ZSBwYXRoc1xuICBlbHNlIHtcbiAgICAvLyBMb29rIHJlbGF0aXZlIHRvIGEgcGFzc2VkIGZpbGVuYW1lIGZpcnN0XG4gICAgaWYgKG9wdGlvbnMuZmlsZW5hbWUpIHtcbiAgICAgIGZpbGVQYXRoID0gZXhwb3J0cy5yZXNvbHZlSW5jbHVkZShwYXRoLCBvcHRpb25zLmZpbGVuYW1lKTtcbiAgICAgIGlmIChmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgICAgICBpbmNsdWRlUGF0aCA9IGZpbGVQYXRoO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGVuIGxvb2sgaW4gYW55IHZpZXdzIGRpcmVjdG9yaWVzXG4gICAgaWYgKCFpbmNsdWRlUGF0aCAmJiBBcnJheS5pc0FycmF5KHZpZXdzKSkge1xuICAgICAgaW5jbHVkZVBhdGggPSByZXNvbHZlUGF0aHMocGF0aCwgdmlld3MpO1xuICAgIH1cbiAgICBpZiAoIWluY2x1ZGVQYXRoICYmIHR5cGVvZiBvcHRpb25zLmluY2x1ZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIHRoZSBpbmNsdWRlIGZpbGUgXCInICtcbiAgICAgICAgICBvcHRpb25zLmVzY2FwZUZ1bmN0aW9uKHBhdGgpICsgJ1wiJyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmNsdWRlUGF0aDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRlbXBsYXRlIGZyb20gYSBzdHJpbmcgb3IgYSBmaWxlLCBlaXRoZXIgY29tcGlsZWQgb24tdGhlLWZseSBvclxuICogcmVhZCBmcm9tIGNhY2hlIChpZiBlbmFibGVkKSwgYW5kIGNhY2hlIHRoZSB0ZW1wbGF0ZSBpZiBuZWVkZWQuXG4gKlxuICogSWYgYHRlbXBsYXRlYCBpcyBub3Qgc2V0LCB0aGUgZmlsZSBzcGVjaWZpZWQgaW4gYG9wdGlvbnMuZmlsZW5hbWVgIHdpbGwgYmVcbiAqIHJlYWQuXG4gKlxuICogSWYgYG9wdGlvbnMuY2FjaGVgIGlzIHRydWUsIHRoaXMgZnVuY3Rpb24gcmVhZHMgdGhlIGZpbGUgZnJvbVxuICogYG9wdGlvbnMuZmlsZW5hbWVgIHNvIGl0IG11c3QgYmUgc2V0IHByaW9yIHRvIGNhbGxpbmcgdGhpcyBmdW5jdGlvbi5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmVqcy1pbnRlcm5hbFxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zICAgY29tcGlsYXRpb24gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IFt0ZW1wbGF0ZV0gdGVtcGxhdGUgc291cmNlXG4gKiBAcmV0dXJuIHsoVGVtcGxhdGVGdW5jdGlvbnxDbGllbnRGdW5jdGlvbil9XG4gKiBEZXBlbmRpbmcgb24gdGhlIHZhbHVlIG9mIGBvcHRpb25zLmNsaWVudGAsIGVpdGhlciB0eXBlIG1pZ2h0IGJlIHJldHVybmVkLlxuICogQHN0YXRpY1xuICovXG5cbmZ1bmN0aW9uIGhhbmRsZUNhY2hlKG9wdGlvbnMsIHRlbXBsYXRlKSB7XG4gIHZhciBmdW5jO1xuICB2YXIgZmlsZW5hbWUgPSBvcHRpb25zLmZpbGVuYW1lO1xuICB2YXIgaGFzVGVtcGxhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMTtcblxuICBpZiAob3B0aW9ucy5jYWNoZSkge1xuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FjaGUgb3B0aW9uIHJlcXVpcmVzIGEgZmlsZW5hbWUnKTtcbiAgICB9XG4gICAgZnVuYyA9IGV4cG9ydHMuY2FjaGUuZ2V0KGZpbGVuYW1lKTtcbiAgICBpZiAoZnVuYykge1xuICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgfVxuICAgIGlmICghaGFzVGVtcGxhdGUpIHtcbiAgICAgIHRlbXBsYXRlID0gZmlsZUxvYWRlcihmaWxlbmFtZSkudG9TdHJpbmcoKS5yZXBsYWNlKF9CT00sICcnKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoIWhhc1RlbXBsYXRlKSB7XG4gICAgLy8gaXN0YW5idWwgaWdub3JlIGlmOiBzaG91bGQgbm90IGhhcHBlbiBhdCBhbGxcbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVybmFsIEVKUyBlcnJvcjogbm8gZmlsZSBuYW1lIG9yIHRlbXBsYXRlICdcbiAgICAgICAgICAgICAgICAgICAgKyAncHJvdmlkZWQnKTtcbiAgICB9XG4gICAgdGVtcGxhdGUgPSBmaWxlTG9hZGVyKGZpbGVuYW1lKS50b1N0cmluZygpLnJlcGxhY2UoX0JPTSwgJycpO1xuICB9XG4gIGZ1bmMgPSBleHBvcnRzLmNvbXBpbGUodGVtcGxhdGUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5jYWNoZSkge1xuICAgIGV4cG9ydHMuY2FjaGUuc2V0KGZpbGVuYW1lLCBmdW5jKTtcbiAgfVxuICByZXR1cm4gZnVuYztcbn1cblxuLyoqXG4gKiBUcnkgY2FsbGluZyBoYW5kbGVDYWNoZSB3aXRoIHRoZSBnaXZlbiBvcHRpb25zIGFuZCBkYXRhIGFuZCBjYWxsIHRoZVxuICogY2FsbGJhY2sgd2l0aCB0aGUgcmVzdWx0LiBJZiBhbiBlcnJvciBvY2N1cnMsIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGhcbiAqIHRoZSBlcnJvci4gVXNlZCBieSByZW5kZXJGaWxlKCkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTplanMtaW50ZXJuYWxcbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9ucyAgICBjb21waWxhdGlvbiBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgICAgICAgdGVtcGxhdGUgZGF0YVxuICogQHBhcmFtIHtSZW5kZXJGaWxlQ2FsbGJhY2t9IGNiIGNhbGxiYWNrXG4gKiBAc3RhdGljXG4gKi9cblxuZnVuY3Rpb24gdHJ5SGFuZGxlQ2FjaGUob3B0aW9ucywgZGF0YSwgY2IpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCFjYikge1xuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5wcm9taXNlSW1wbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbmV3IGV4cG9ydHMucHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZUNhY2hlKG9wdGlvbnMpKGRhdGEpO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBjYWxsYmFjayBmdW5jdGlvbicpO1xuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gaGFuZGxlQ2FjaGUob3B0aW9ucykoZGF0YSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBjYihlcnIpO1xuICAgIH1cblxuICAgIGNiKG51bGwsIHJlc3VsdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBmaWxlTG9hZGVyIGlzIGluZGVwZW5kZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpbGVQYXRoIGVqcyBmaWxlIHBhdGguXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBjb250ZW50cyBvZiB0aGUgc3BlY2lmaWVkIGZpbGUuXG4gKiBAc3RhdGljXG4gKi9cblxuZnVuY3Rpb24gZmlsZUxvYWRlcihmaWxlUGF0aCl7XG4gIHJldHVybiBleHBvcnRzLmZpbGVMb2FkZXIoZmlsZVBhdGgpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uXG4gKlxuICogSWYgYG9wdGlvbnMuY2FjaGVgIGlzIGB0cnVlYCwgdGhlbiB0aGUgdGVtcGxhdGUgaXMgY2FjaGVkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZWpzLWludGVybmFsXG4gKiBAcGFyYW0ge1N0cmluZ30gIHBhdGggICAgcGF0aCBmb3IgdGhlIHNwZWNpZmllZCBmaWxlXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnMgY29tcGlsYXRpb24gb3B0aW9uc1xuICogQHJldHVybiB7KFRlbXBsYXRlRnVuY3Rpb258Q2xpZW50RnVuY3Rpb24pfVxuICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBgb3B0aW9ucy5jbGllbnRgLCBlaXRoZXIgdHlwZSBtaWdodCBiZSByZXR1cm5lZFxuICogQHN0YXRpY1xuICovXG5cbmZ1bmN0aW9uIGluY2x1ZGVGaWxlKHBhdGgsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSB1dGlscy5zaGFsbG93Q29weSh7fSwgb3B0aW9ucyk7XG4gIG9wdHMuZmlsZW5hbWUgPSBnZXRJbmNsdWRlUGF0aChwYXRoLCBvcHRzKTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluY2x1ZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGluY2x1ZGVyUmVzdWx0ID0gb3B0aW9ucy5pbmNsdWRlcihwYXRoLCBvcHRzLmZpbGVuYW1lKTtcbiAgICBpZiAoaW5jbHVkZXJSZXN1bHQpIHtcbiAgICAgIGlmIChpbmNsdWRlclJlc3VsdC5maWxlbmFtZSkge1xuICAgICAgICBvcHRzLmZpbGVuYW1lID0gaW5jbHVkZXJSZXN1bHQuZmlsZW5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZXJSZXN1bHQudGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZUNhY2hlKG9wdHMsIGluY2x1ZGVyUmVzdWx0LnRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGhhbmRsZUNhY2hlKG9wdHMpO1xufVxuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZSBgc3RyYCBvZiBlanMsIGBmaWxlbmFtZWAsIGFuZFxuICogYGxpbmVub2AuXG4gKlxuICogQGltcGxlbWVudHMge1JldGhyb3dDYWxsYmFja31cbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZWpzLWludGVybmFsXG4gKiBAcGFyYW0ge0Vycm9yfSAgZXJyICAgICAgRXJyb3Igb2JqZWN0XG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyICAgICAgRUpTIHNvdXJjZVxuICogQHBhcmFtIHtTdHJpbmd9IGZsbm0gICAgIGZpbGUgbmFtZSBvZiB0aGUgRUpTIGZpbGVcbiAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lbm8gICBsaW5lIG51bWJlciBvZiB0aGUgZXJyb3JcbiAqIEBwYXJhbSB7RXNjYXBlQ2FsbGJhY2t9IGVzY1xuICogQHN0YXRpY1xuICovXG5cbmZ1bmN0aW9uIHJldGhyb3coZXJyLCBzdHIsIGZsbm0sIGxpbmVubywgZXNjKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJyk7XG4gIHZhciBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIDMsIDApO1xuICB2YXIgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyAzKTtcbiAgdmFyIGZpbGVuYW1lID0gZXNjKGZsbm0pO1xuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uIChsaW5lLCBpKXtcbiAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgPj4gJyA6ICcgICAgJylcbiAgICAgICsgY3VyclxuICAgICAgKyAnfCAnXG4gICAgICArIGxpbmU7XG4gIH0pLmpvaW4oJ1xcbicpO1xuXG4gIC8vIEFsdGVyIGV4Y2VwdGlvbiBtZXNzYWdlXG4gIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gIGVyci5tZXNzYWdlID0gKGZpbGVuYW1lIHx8ICdlanMnKSArICc6J1xuICAgICsgbGluZW5vICsgJ1xcbidcbiAgICArIGNvbnRleHQgKyAnXFxuXFxuJ1xuICAgICsgZXJyLm1lc3NhZ2U7XG5cbiAgdGhyb3cgZXJyO1xufVxuXG5mdW5jdGlvbiBzdHJpcFNlbWkoc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC87KFxccyokKS8sICckMScpO1xufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIGdpdmVuIGBzdHJgIG9mIGVqcyBpbnRvIGEgdGVtcGxhdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9ICB0ZW1wbGF0ZSBFSlMgdGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRzXSBjb21waWxhdGlvbiBvcHRpb25zXG4gKlxuICogQHJldHVybiB7KFRlbXBsYXRlRnVuY3Rpb258Q2xpZW50RnVuY3Rpb24pfVxuICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBgb3B0cy5jbGllbnRgLCBlaXRoZXIgdHlwZSBtaWdodCBiZSByZXR1cm5lZC5cbiAqIE5vdGUgdGhhdCB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlIGZ1bmN0aW9uIGFsc28gZGVwZW5kcyBvbiB0aGUgdmFsdWUgb2YgYG9wdHMuYXN5bmNgLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY29tcGlsZSA9IGZ1bmN0aW9uIGNvbXBpbGUodGVtcGxhdGUsIG9wdHMpIHtcbiAgdmFyIHRlbXBsO1xuXG4gIC8vIHYxIGNvbXBhdFxuICAvLyAnc2NvcGUnIGlzICdjb250ZXh0J1xuICAvLyBGSVhNRTogUmVtb3ZlIHRoaXMgaW4gYSBmdXR1cmUgdmVyc2lvblxuICBpZiAob3B0cyAmJiBvcHRzLnNjb3BlKSB7XG4gICAgaWYgKCFzY29wZU9wdGlvbldhcm5lZCl7XG4gICAgICBjb25zb2xlLndhcm4oJ2BzY29wZWAgb3B0aW9uIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBFSlMgMycpO1xuICAgICAgc2NvcGVPcHRpb25XYXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIW9wdHMuY29udGV4dCkge1xuICAgICAgb3B0cy5jb250ZXh0ID0gb3B0cy5zY29wZTtcbiAgICB9XG4gICAgZGVsZXRlIG9wdHMuc2NvcGU7XG4gIH1cbiAgdGVtcGwgPSBuZXcgVGVtcGxhdGUodGVtcGxhdGUsIG9wdHMpO1xuICByZXR1cm4gdGVtcGwuY29tcGlsZSgpO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgb2YgZWpzLlxuICpcbiAqIElmIHlvdSB3b3VsZCBsaWtlIHRvIGluY2x1ZGUgb3B0aW9ucyBidXQgbm90IGRhdGEsIHlvdSBuZWVkIHRvIGV4cGxpY2l0bHlcbiAqIGNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIGBkYXRhYCBiZWluZyBhbiBlbXB0eSBvYmplY3Qgb3IgYG51bGxgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSAgIHRlbXBsYXRlIEVKUyB0ZW1wbGF0ZVxuICogQHBhcmFtIHtPYmplY3R9ICBbZGF0YT17fV0gdGVtcGxhdGUgZGF0YVxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0cz17fV0gY29tcGlsYXRpb24gYW5kIHJlbmRlcmluZyBvcHRpb25zXG4gKiBAcmV0dXJuIHsoU3RyaW5nfFByb21pc2U8U3RyaW5nPil9XG4gKiBSZXR1cm4gdmFsdWUgdHlwZSBkZXBlbmRzIG9uIGBvcHRzLmFzeW5jYC5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgZCwgbykge1xuICB2YXIgZGF0YSA9IGQgfHwge307XG4gIHZhciBvcHRzID0gbyB8fCB7fTtcblxuICAvLyBObyBvcHRpb25zIG9iamVjdCAtLSBpZiB0aGVyZSBhcmUgb3B0aW9ueSBuYW1lc1xuICAvLyBpbiB0aGUgZGF0YSwgY29weSB0aGVtIHRvIG9wdGlvbnNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMikge1xuICAgIHV0aWxzLnNoYWxsb3dDb3B5RnJvbUxpc3Qob3B0cywgZGF0YSwgX09QVFNfUEFTU0FCTEVfV0lUSF9EQVRBKTtcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVDYWNoZShvcHRzLCB0ZW1wbGF0ZSkoZGF0YSk7XG59O1xuXG4vKipcbiAqIFJlbmRlciBhbiBFSlMgZmlsZSBhdCB0aGUgZ2l2ZW4gYHBhdGhgIGFuZCBjYWxsYmFjayBgY2IoZXJyLCBzdHIpYC5cbiAqXG4gKiBJZiB5b3Ugd291bGQgbGlrZSB0byBpbmNsdWRlIG9wdGlvbnMgYnV0IG5vdCBkYXRhLCB5b3UgbmVlZCB0byBleHBsaWNpdGx5XG4gKiBjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCBgZGF0YWAgYmVpbmcgYW4gZW1wdHkgb2JqZWN0IG9yIGBudWxsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gICAgICAgICAgICAgcGF0aCAgICAgcGF0aCB0byB0aGUgRUpTIGZpbGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICAgICAgICAgIFtkYXRhPXt9XSB0ZW1wbGF0ZSBkYXRhXG4gKiBAcGFyYW0ge09wdGlvbnN9ICAgICAgICAgICBbb3B0cz17fV0gY29tcGlsYXRpb24gYW5kIHJlbmRlcmluZyBvcHRpb25zXG4gKiBAcGFyYW0ge1JlbmRlckZpbGVDYWxsYmFja30gY2IgY2FsbGJhY2tcbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnJlbmRlckZpbGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgdmFyIGZpbGVuYW1lID0gYXJncy5zaGlmdCgpO1xuICB2YXIgY2I7XG4gIHZhciBvcHRzID0ge2ZpbGVuYW1lOiBmaWxlbmFtZX07XG4gIHZhciBkYXRhO1xuICB2YXIgdmlld09wdHM7XG5cbiAgLy8gRG8gd2UgaGF2ZSBhIGNhbGxiYWNrP1xuICBpZiAodHlwZW9mIGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gYXJncy5wb3AoKTtcbiAgfVxuICAvLyBEbyB3ZSBoYXZlIGRhdGEvb3B0cz9cbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgLy8gU2hvdWxkIGFsd2F5cyBoYXZlIGRhdGEgb2JqXG4gICAgZGF0YSA9IGFyZ3Muc2hpZnQoKTtcbiAgICAvLyBOb3JtYWwgcGFzc2VkIG9wdHMgKGRhdGEgb2JqICsgb3B0cyBvYmopXG4gICAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBVc2Ugc2hhbGxvd0NvcHkgc28gd2UgZG9uJ3QgcG9sbHV0ZSBwYXNzZWQgaW4gb3B0cyBvYmogd2l0aCBuZXcgdmFsc1xuICAgICAgdXRpbHMuc2hhbGxvd0NvcHkob3B0cywgYXJncy5wb3AoKSk7XG4gICAgfVxuICAgIC8vIFNwZWNpYWwgY2FzaW5nIGZvciBFeHByZXNzIChzZXR0aW5ncyArIG9wdHMtaW4tZGF0YSlcbiAgICBlbHNlIHtcbiAgICAgIC8vIEV4cHJlc3MgMyBhbmQgNFxuICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgLy8gUHVsbCBhIGZldyB0aGluZ3MgZnJvbSBrbm93biBsb2NhdGlvbnNcbiAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3Mudmlld3MpIHtcbiAgICAgICAgICBvcHRzLnZpZXdzID0gZGF0YS5zZXR0aW5ncy52aWV3cztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5zZXR0aW5nc1sndmlldyBjYWNoZSddKSB7XG4gICAgICAgICAgb3B0cy5jYWNoZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVW5kb2N1bWVudGVkIGFmdGVyIEV4cHJlc3MgMiwgYnV0IHN0aWxsIHVzYWJsZSwgZXNwLiBmb3JcbiAgICAgICAgLy8gaXRlbXMgdGhhdCBhcmUgdW5zYWZlIHRvIGJlIHBhc3NlZCBhbG9uZyB3aXRoIGRhdGEsIGxpa2UgYHJvb3RgXG4gICAgICAgIHZpZXdPcHRzID0gZGF0YS5zZXR0aW5nc1sndmlldyBvcHRpb25zJ107XG4gICAgICAgIGlmICh2aWV3T3B0cykge1xuICAgICAgICAgIHV0aWxzLnNoYWxsb3dDb3B5KG9wdHMsIHZpZXdPcHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRXhwcmVzcyAyIGFuZCBsb3dlciwgdmFsdWVzIHNldCBpbiBhcHAubG9jYWxzLCBvciBwZW9wbGUgd2hvIGp1c3RcbiAgICAgIC8vIHdhbnQgdG8gcGFzcyBvcHRpb25zIGluIHRoZWlyIGRhdGEuIE5PVEU6IFRoZXNlIHZhbHVlcyB3aWxsIG92ZXJyaWRlXG4gICAgICAvLyBhbnl0aGluZyBwcmV2aW91c2x5IHNldCBpbiBzZXR0aW5ncyAgb3Igc2V0dGluZ3NbJ3ZpZXcgb3B0aW9ucyddXG4gICAgICB1dGlscy5zaGFsbG93Q29weUZyb21MaXN0KG9wdHMsIGRhdGEsIF9PUFRTX1BBU1NBQkxFX1dJVEhfREFUQV9FWFBSRVNTKTtcbiAgICB9XG4gICAgb3B0cy5maWxlbmFtZSA9IGZpbGVuYW1lO1xuICB9XG4gIGVsc2Uge1xuICAgIGRhdGEgPSB7fTtcbiAgfVxuXG4gIHJldHVybiB0cnlIYW5kbGVDYWNoZShvcHRzLCBkYXRhLCBjYik7XG59O1xuXG4vKipcbiAqIENsZWFyIGludGVybWVkaWF0ZSBKYXZhU2NyaXB0IGNhY2hlLiBDYWxscyB7QGxpbmsgQ2FjaGUjcmVzZXR9LlxuICogQHB1YmxpY1xuICovXG5cbi8qKlxuICogRUpTIHRlbXBsYXRlIGNsYXNzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydHMuVGVtcGxhdGUgPSBUZW1wbGF0ZTtcblxuZXhwb3J0cy5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkge1xuICBleHBvcnRzLmNhY2hlLnJlc2V0KCk7XG59O1xuXG5mdW5jdGlvbiBUZW1wbGF0ZSh0ZXh0LCBvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB0aGlzLnRlbXBsYXRlVGV4dCA9IHRleHQ7XG4gIC8qKiBAdHlwZSB7c3RyaW5nIHwgbnVsbH0gKi9cbiAgdGhpcy5tb2RlID0gbnVsbDtcbiAgdGhpcy50cnVuY2F0ZSA9IGZhbHNlO1xuICB0aGlzLmN1cnJlbnRMaW5lID0gMTtcbiAgdGhpcy5zb3VyY2UgPSAnJztcbiAgb3B0aW9ucy5jbGllbnQgPSBvcHRzLmNsaWVudCB8fCBmYWxzZTtcbiAgb3B0aW9ucy5lc2NhcGVGdW5jdGlvbiA9IG9wdHMuZXNjYXBlIHx8IG9wdHMuZXNjYXBlRnVuY3Rpb24gfHwgdXRpbHMuZXNjYXBlWE1MO1xuICBvcHRpb25zLmNvbXBpbGVEZWJ1ZyA9IG9wdHMuY29tcGlsZURlYnVnICE9PSBmYWxzZTtcbiAgb3B0aW9ucy5kZWJ1ZyA9ICEhb3B0cy5kZWJ1ZztcbiAgb3B0aW9ucy5maWxlbmFtZSA9IG9wdHMuZmlsZW5hbWU7XG4gIG9wdGlvbnMub3BlbkRlbGltaXRlciA9IG9wdHMub3BlbkRlbGltaXRlciB8fCBleHBvcnRzLm9wZW5EZWxpbWl0ZXIgfHwgX0RFRkFVTFRfT1BFTl9ERUxJTUlURVI7XG4gIG9wdGlvbnMuY2xvc2VEZWxpbWl0ZXIgPSBvcHRzLmNsb3NlRGVsaW1pdGVyIHx8IGV4cG9ydHMuY2xvc2VEZWxpbWl0ZXIgfHwgX0RFRkFVTFRfQ0xPU0VfREVMSU1JVEVSO1xuICBvcHRpb25zLmRlbGltaXRlciA9IG9wdHMuZGVsaW1pdGVyIHx8IGV4cG9ydHMuZGVsaW1pdGVyIHx8IF9ERUZBVUxUX0RFTElNSVRFUjtcbiAgb3B0aW9ucy5zdHJpY3QgPSBvcHRzLnN0cmljdCB8fCBmYWxzZTtcbiAgb3B0aW9ucy5jb250ZXh0ID0gb3B0cy5jb250ZXh0O1xuICBvcHRpb25zLmNhY2hlID0gb3B0cy5jYWNoZSB8fCBmYWxzZTtcbiAgb3B0aW9ucy5ybVdoaXRlc3BhY2UgPSBvcHRzLnJtV2hpdGVzcGFjZTtcbiAgb3B0aW9ucy5yb290ID0gb3B0cy5yb290O1xuICBvcHRpb25zLmluY2x1ZGVyID0gb3B0cy5pbmNsdWRlcjtcbiAgb3B0aW9ucy5vdXRwdXRGdW5jdGlvbk5hbWUgPSBvcHRzLm91dHB1dEZ1bmN0aW9uTmFtZTtcbiAgb3B0aW9ucy5sb2NhbHNOYW1lID0gb3B0cy5sb2NhbHNOYW1lIHx8IGV4cG9ydHMubG9jYWxzTmFtZSB8fCBfREVGQVVMVF9MT0NBTFNfTkFNRTtcbiAgb3B0aW9ucy52aWV3cyA9IG9wdHMudmlld3M7XG4gIG9wdGlvbnMuYXN5bmMgPSBvcHRzLmFzeW5jO1xuICBvcHRpb25zLmRlc3RydWN0dXJlZExvY2FscyA9IG9wdHMuZGVzdHJ1Y3R1cmVkTG9jYWxzO1xuICBvcHRpb25zLmxlZ2FjeUluY2x1ZGUgPSB0eXBlb2Ygb3B0cy5sZWdhY3lJbmNsdWRlICE9ICd1bmRlZmluZWQnID8gISFvcHRzLmxlZ2FjeUluY2x1ZGUgOiB0cnVlO1xuXG4gIGlmIChvcHRpb25zLnN0cmljdCkge1xuICAgIG9wdGlvbnMuX3dpdGggPSBmYWxzZTtcbiAgfVxuICBlbHNlIHtcbiAgICBvcHRpb25zLl93aXRoID0gdHlwZW9mIG9wdHMuX3dpdGggIT0gJ3VuZGVmaW5lZCcgPyBvcHRzLl93aXRoIDogdHJ1ZTtcbiAgfVxuXG4gIHRoaXMub3B0cyA9IG9wdGlvbnM7XG5cbiAgdGhpcy5yZWdleCA9IHRoaXMuY3JlYXRlUmVnZXgoKTtcbn1cblxuVGVtcGxhdGUubW9kZXMgPSB7XG4gIEVWQUw6ICdldmFsJyxcbiAgRVNDQVBFRDogJ2VzY2FwZWQnLFxuICBSQVc6ICdyYXcnLFxuICBDT01NRU5UOiAnY29tbWVudCcsXG4gIExJVEVSQUw6ICdsaXRlcmFsJ1xufTtcblxuVGVtcGxhdGUucHJvdG90eXBlID0ge1xuICBjcmVhdGVSZWdleDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdHIgPSBfUkVHRVhfU1RSSU5HO1xuICAgIHZhciBkZWxpbSA9IHV0aWxzLmVzY2FwZVJlZ0V4cENoYXJzKHRoaXMub3B0cy5kZWxpbWl0ZXIpO1xuICAgIHZhciBvcGVuID0gdXRpbHMuZXNjYXBlUmVnRXhwQ2hhcnModGhpcy5vcHRzLm9wZW5EZWxpbWl0ZXIpO1xuICAgIHZhciBjbG9zZSA9IHV0aWxzLmVzY2FwZVJlZ0V4cENoYXJzKHRoaXMub3B0cy5jbG9zZURlbGltaXRlcik7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyUvZywgZGVsaW0pXG4gICAgICAucmVwbGFjZSgvPC9nLCBvcGVuKVxuICAgICAgLnJlcGxhY2UoLz4vZywgY2xvc2UpO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHN0cik7XG4gIH0sXG5cbiAgY29tcGlsZTogZnVuY3Rpb24gKCkge1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBzcmM7XG4gICAgLyoqIEB0eXBlIHtDbGllbnRGdW5jdGlvbn0gKi9cbiAgICB2YXIgZm47XG4gICAgdmFyIG9wdHMgPSB0aGlzLm9wdHM7XG4gICAgdmFyIHByZXBlbmRlZCA9ICcnO1xuICAgIHZhciBhcHBlbmRlZCA9ICcnO1xuICAgIC8qKiBAdHlwZSB7RXNjYXBlQ2FsbGJhY2t9ICovXG4gICAgdmFyIGVzY2FwZUZuID0gb3B0cy5lc2NhcGVGdW5jdGlvbjtcbiAgICAvKiogQHR5cGUge0Z1bmN0aW9uQ29uc3RydWN0b3J9ICovXG4gICAgdmFyIGN0b3I7XG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgdmFyIHNhbml0aXplZEZpbGVuYW1lID0gb3B0cy5maWxlbmFtZSA/IEpTT04uc3RyaW5naWZ5KG9wdHMuZmlsZW5hbWUpIDogJ3VuZGVmaW5lZCc7XG5cbiAgICBpZiAoIXRoaXMuc291cmNlKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlU291cmNlKCk7XG4gICAgICBwcmVwZW5kZWQgKz1cbiAgICAgICAgJyAgdmFyIF9fb3V0cHV0ID0gXCJcIjtcXG4nICtcbiAgICAgICAgJyAgZnVuY3Rpb24gX19hcHBlbmQocykgeyBpZiAocyAhPT0gdW5kZWZpbmVkICYmIHMgIT09IG51bGwpIF9fb3V0cHV0ICs9IHMgfVxcbic7XG4gICAgICBpZiAob3B0cy5vdXRwdXRGdW5jdGlvbk5hbWUpIHtcbiAgICAgICAgcHJlcGVuZGVkICs9ICcgIHZhciAnICsgb3B0cy5vdXRwdXRGdW5jdGlvbk5hbWUgKyAnID0gX19hcHBlbmQ7JyArICdcXG4nO1xuICAgICAgfVxuICAgICAgaWYgKG9wdHMuZGVzdHJ1Y3R1cmVkTG9jYWxzICYmIG9wdHMuZGVzdHJ1Y3R1cmVkTG9jYWxzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZGVzdHJ1Y3R1cmluZyA9ICcgIHZhciBfX2xvY2FscyA9ICgnICsgb3B0cy5sb2NhbHNOYW1lICsgJyB8fCB7fSksXFxuJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRzLmRlc3RydWN0dXJlZExvY2Fscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBuYW1lID0gb3B0cy5kZXN0cnVjdHVyZWRMb2NhbHNbaV07XG4gICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICBkZXN0cnVjdHVyaW5nICs9ICcsXFxuICAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZXN0cnVjdHVyaW5nICs9IG5hbWUgKyAnID0gX19sb2NhbHMuJyArIG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJlcGVuZGVkICs9IGRlc3RydWN0dXJpbmcgKyAnO1xcbic7XG4gICAgICB9XG4gICAgICBpZiAob3B0cy5fd2l0aCAhPT0gZmFsc2UpIHtcbiAgICAgICAgcHJlcGVuZGVkICs9ICAnICB3aXRoICgnICsgb3B0cy5sb2NhbHNOYW1lICsgJyB8fCB7fSkgeycgKyAnXFxuJztcbiAgICAgICAgYXBwZW5kZWQgKz0gJyAgfScgKyAnXFxuJztcbiAgICAgIH1cbiAgICAgIGFwcGVuZGVkICs9ICcgIHJldHVybiBfX291dHB1dDsnICsgJ1xcbic7XG4gICAgICB0aGlzLnNvdXJjZSA9IHByZXBlbmRlZCArIHRoaXMuc291cmNlICsgYXBwZW5kZWQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuY29tcGlsZURlYnVnKSB7XG4gICAgICBzcmMgPSAndmFyIF9fbGluZSA9IDEnICsgJ1xcbidcbiAgICAgICAgKyAnICAsIF9fbGluZXMgPSAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy50ZW1wbGF0ZVRleHQpICsgJ1xcbidcbiAgICAgICAgKyAnICAsIF9fZmlsZW5hbWUgPSAnICsgc2FuaXRpemVkRmlsZW5hbWUgKyAnOycgKyAnXFxuJ1xuICAgICAgICArICd0cnkgeycgKyAnXFxuJ1xuICAgICAgICArIHRoaXMuc291cmNlXG4gICAgICAgICsgJ30gY2F0Y2ggKGUpIHsnICsgJ1xcbidcbiAgICAgICAgKyAnICByZXRocm93KGUsIF9fbGluZXMsIF9fZmlsZW5hbWUsIF9fbGluZSwgZXNjYXBlRm4pOycgKyAnXFxuJ1xuICAgICAgICArICd9JyArICdcXG4nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNyYyA9IHRoaXMuc291cmNlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmNsaWVudCkge1xuICAgICAgc3JjID0gJ2VzY2FwZUZuID0gZXNjYXBlRm4gfHwgJyArIGVzY2FwZUZuLnRvU3RyaW5nKCkgKyAnOycgKyAnXFxuJyArIHNyYztcbiAgICAgIGlmIChvcHRzLmNvbXBpbGVEZWJ1Zykge1xuICAgICAgICBzcmMgPSAncmV0aHJvdyA9IHJldGhyb3cgfHwgJyArIHJldGhyb3cudG9TdHJpbmcoKSArICc7JyArICdcXG4nICsgc3JjO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRzLnN0cmljdCkge1xuICAgICAgc3JjID0gJ1widXNlIHN0cmljdFwiO1xcbicgKyBzcmM7XG4gICAgfVxuICAgIGlmIChvcHRzLmRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhzcmMpO1xuICAgIH1cbiAgICBpZiAob3B0cy5jb21waWxlRGVidWcgJiYgb3B0cy5maWxlbmFtZSkge1xuICAgICAgc3JjID0gc3JjICsgJ1xcbidcbiAgICAgICAgKyAnLy8jIHNvdXJjZVVSTD0nICsgc2FuaXRpemVkRmlsZW5hbWUgKyAnXFxuJztcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaWYgKG9wdHMuYXN5bmMpIHtcbiAgICAgICAgLy8gSGF2ZSB0byB1c2UgZ2VuZXJhdGVkIGZ1bmN0aW9uIGZvciB0aGlzLCBzaW5jZSBpbiBlbnZzIHdpdGhvdXQgc3VwcG9ydCxcbiAgICAgICAgLy8gaXQgYnJlYWtzIGluIHBhcnNpbmdcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjdG9yID0gKG5ldyBGdW5jdGlvbigncmV0dXJuIChhc3luYyBmdW5jdGlvbigpe30pLmNvbnN0cnVjdG9yOycpKSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCBhc3luYy9hd2FpdCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY3RvciA9IEZ1bmN0aW9uO1xuICAgICAgfVxuICAgICAgZm4gPSBuZXcgY3RvcihvcHRzLmxvY2Fsc05hbWUgKyAnLCBlc2NhcGVGbiwgaW5jbHVkZSwgcmV0aHJvdycsIHNyYyk7XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgIGlmIChvcHRzLmZpbGVuYW1lKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9ICcgaW4gJyArIG9wdHMuZmlsZW5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZS5tZXNzYWdlICs9ICcgd2hpbGUgY29tcGlsaW5nIGVqc1xcblxcbic7XG4gICAgICAgIGUubWVzc2FnZSArPSAnSWYgdGhlIGFib3ZlIGVycm9yIGlzIG5vdCBoZWxwZnVsLCB5b3UgbWF5IHdhbnQgdG8gdHJ5IEVKUy1MaW50Olxcbic7XG4gICAgICAgIGUubWVzc2FnZSArPSAnaHR0cHM6Ly9naXRodWIuY29tL1J5YW5aaW0vRUpTLUxpbnQnO1xuICAgICAgICBpZiAoIW9wdHMuYXN5bmMpIHtcbiAgICAgICAgICBlLm1lc3NhZ2UgKz0gJ1xcbic7XG4gICAgICAgICAgZS5tZXNzYWdlICs9ICdPciwgaWYgeW91IG1lYW50IHRvIGNyZWF0ZSBhbiBhc3luYyBmdW5jdGlvbiwgcGFzcyBgYXN5bmM6IHRydWVgIGFzIGFuIG9wdGlvbi4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBhIGNhbGxhYmxlIGZ1bmN0aW9uIHdoaWNoIHdpbGwgZXhlY3V0ZSB0aGUgZnVuY3Rpb25cbiAgICAvLyBjcmVhdGVkIGJ5IHRoZSBzb3VyY2UtY29kZSwgd2l0aCB0aGUgcGFzc2VkIGRhdGEgYXMgbG9jYWxzXG4gICAgLy8gQWRkcyBhIGxvY2FsIGBpbmNsdWRlYCBmdW5jdGlvbiB3aGljaCBhbGxvd3MgZnVsbCByZWN1cnNpdmUgaW5jbHVkZVxuICAgIHZhciByZXR1cm5lZEZuID0gb3B0cy5jbGllbnQgPyBmbiA6IGZ1bmN0aW9uIGFub255bW91cyhkYXRhKSB7XG4gICAgICB2YXIgaW5jbHVkZSA9IGZ1bmN0aW9uIChwYXRoLCBpbmNsdWRlRGF0YSkge1xuICAgICAgICB2YXIgZCA9IHV0aWxzLnNoYWxsb3dDb3B5KHt9LCBkYXRhKTtcbiAgICAgICAgaWYgKGluY2x1ZGVEYXRhKSB7XG4gICAgICAgICAgZCA9IHV0aWxzLnNoYWxsb3dDb3B5KGQsIGluY2x1ZGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5jbHVkZUZpbGUocGF0aCwgb3B0cykoZCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KG9wdHMuY29udGV4dCwgW2RhdGEgfHwge30sIGVzY2FwZUZuLCBpbmNsdWRlLCByZXRocm93XSk7XG4gICAgfTtcbiAgICBpZiAob3B0cy5maWxlbmFtZSAmJiB0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgZmlsZW5hbWUgPSBvcHRzLmZpbGVuYW1lO1xuICAgICAgdmFyIGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlbmFtZSwgcGF0aC5leHRuYW1lKGZpbGVuYW1lKSk7XG4gICAgICB0cnkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmV0dXJuZWRGbiwgJ25hbWUnLCB7XG4gICAgICAgICAgdmFsdWU6IGJhc2VuYW1lLFxuICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7LyogaWdub3JlICovfVxuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuZWRGbjtcbiAgfSxcblxuICBnZW5lcmF0ZVNvdXJjZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRzID0gdGhpcy5vcHRzO1xuXG4gICAgaWYgKG9wdHMucm1XaGl0ZXNwYWNlKSB7XG4gICAgICAvLyBIYXZlIHRvIHVzZSB0d28gc2VwYXJhdGUgcmVwbGFjZSBoZXJlIGFzIGBeYCBhbmQgYCRgIG9wZXJhdG9ycyBkb24ndFxuICAgICAgLy8gd29yayB3ZWxsIHdpdGggYFxccmAgYW5kIGVtcHR5IGxpbmVzIGRvbid0IHdvcmsgd2VsbCB3aXRoIHRoZSBgbWAgZmxhZy5cbiAgICAgIHRoaXMudGVtcGxhdGVUZXh0ID1cbiAgICAgICAgdGhpcy50ZW1wbGF0ZVRleHQucmVwbGFjZSgvW1xcclxcbl0rL2csICdcXG4nKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nbSwgJycpO1xuICAgIH1cblxuICAgIC8vIFNsdXJwIHNwYWNlcyBhbmQgdGFicyBiZWZvcmUgPCVfIGFuZCBhZnRlciBfJT5cbiAgICB0aGlzLnRlbXBsYXRlVGV4dCA9XG4gICAgICB0aGlzLnRlbXBsYXRlVGV4dC5yZXBsYWNlKC9bIFxcdF0qPCVfL2dtLCAnPCVfJykucmVwbGFjZSgvXyU+WyBcXHRdKi9nbSwgJ18lPicpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBtYXRjaGVzID0gdGhpcy5wYXJzZVRlbXBsYXRlVGV4dCgpO1xuICAgIHZhciBkID0gdGhpcy5vcHRzLmRlbGltaXRlcjtcbiAgICB2YXIgbyA9IHRoaXMub3B0cy5vcGVuRGVsaW1pdGVyO1xuICAgIHZhciBjID0gdGhpcy5vcHRzLmNsb3NlRGVsaW1pdGVyO1xuXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgIG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGNsb3Npbmc7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gb3BlbmluZyB0YWcsIGNoZWNrIGZvciBjbG9zaW5nIHRhZ3NcbiAgICAgICAgLy8gRklYTUU6IE1heSBlbmQgdXAgd2l0aCBzb21lIGZhbHNlIHBvc2l0aXZlcyBoZXJlXG4gICAgICAgIC8vIEJldHRlciB0byBzdG9yZSBtb2RlcyBhcyBrL3Ygd2l0aCBvcGVuRGVsaW1pdGVyICsgZGVsaW1pdGVyIGFzIGtleVxuICAgICAgICAvLyBUaGVuIHRoaXMgY2FuIHNpbXBseSBjaGVjayBhZ2FpbnN0IHRoZSBtYXBcbiAgICAgICAgaWYgKCBsaW5lLmluZGV4T2YobyArIGQpID09PSAwICAgICAgICAvLyBJZiBpdCBpcyBhIHRhZ1xuICAgICAgICAgICYmIGxpbmUuaW5kZXhPZihvICsgZCArIGQpICE9PSAwKSB7IC8vIGFuZCBpcyBub3QgZXNjYXBlZFxuICAgICAgICAgIGNsb3NpbmcgPSBtYXRjaGVzW2luZGV4ICsgMl07XG4gICAgICAgICAgaWYgKCEoY2xvc2luZyA9PSBkICsgYyB8fCBjbG9zaW5nID09ICctJyArIGQgKyBjIHx8IGNsb3NpbmcgPT0gJ18nICsgZCArIGMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIG1hdGNoaW5nIGNsb3NlIHRhZyBmb3IgXCInICsgbGluZSArICdcIi4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5zY2FuTGluZShsaW5lKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9LFxuXG4gIHBhcnNlVGVtcGxhdGVUZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMudGVtcGxhdGVUZXh0O1xuICAgIHZhciBwYXQgPSB0aGlzLnJlZ2V4O1xuICAgIHZhciByZXN1bHQgPSBwYXQuZXhlYyhzdHIpO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICB2YXIgZmlyc3RQb3M7XG5cbiAgICB3aGlsZSAocmVzdWx0KSB7XG4gICAgICBmaXJzdFBvcyA9IHJlc3VsdC5pbmRleDtcblxuICAgICAgaWYgKGZpcnN0UG9zICE9PSAwKSB7XG4gICAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoMCwgZmlyc3RQb3MpKTtcbiAgICAgICAgc3RyID0gc3RyLnNsaWNlKGZpcnN0UG9zKTtcbiAgICAgIH1cblxuICAgICAgYXJyLnB1c2gocmVzdWx0WzBdKTtcbiAgICAgIHN0ciA9IHN0ci5zbGljZShyZXN1bHRbMF0ubGVuZ3RoKTtcbiAgICAgIHJlc3VsdCA9IHBhdC5leGVjKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKHN0cikge1xuICAgICAgYXJyLnB1c2goc3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9LFxuXG4gIF9hZGRPdXRwdXQ6IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgaWYgKHRoaXMudHJ1bmNhdGUpIHtcbiAgICAgIC8vIE9ubHkgcmVwbGFjZSBzaW5nbGUgbGVhZGluZyBsaW5lYnJlYWsgaW4gdGhlIGxpbmUgYWZ0ZXJcbiAgICAgIC8vIC0lPiB0YWcgLS0gdGhpcyBpcyB0aGUgc2luZ2xlLCB0cmFpbGluZyBsaW5lYnJlYWtcbiAgICAgIC8vIGFmdGVyIHRoZSB0YWcgdGhhdCB0aGUgdHJ1bmNhdGlvbiBtb2RlIHJlcGxhY2VzXG4gICAgICAvLyBIYW5kbGUgV2luIC8gVW5peCAvIG9sZCBNYWMgbGluZWJyZWFrcyAtLSBkbyB0aGUgXFxyXFxuXG4gICAgICAvLyBjb21ibyBmaXJzdCBpbiB0aGUgcmVnZXgtb3JcbiAgICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL14oPzpcXHJcXG58XFxyfFxcbikvLCAnJyk7XG4gICAgICB0aGlzLnRydW5jYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICghbGluZSkge1xuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfVxuXG4gICAgLy8gUHJlc2VydmUgbGl0ZXJhbCBzbGFzaGVzXG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKTtcblxuICAgIC8vIENvbnZlcnQgbGluZWJyZWFrc1xuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKTtcbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJyk7XG5cbiAgICAvLyBFc2NhcGUgZG91YmxlLXF1b3Rlc1xuICAgIC8vIC0gdGhpcyB3aWxsIGJlIHRoZSBkZWxpbWl0ZXIgZHVyaW5nIGV4ZWN1dGlvblxuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcbiAgICB0aGlzLnNvdXJjZSArPSAnICAgIDsgX19hcHBlbmQoXCInICsgbGluZSArICdcIiknICsgJ1xcbic7XG4gIH0sXG5cbiAgc2NhbkxpbmU6IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBkID0gdGhpcy5vcHRzLmRlbGltaXRlcjtcbiAgICB2YXIgbyA9IHRoaXMub3B0cy5vcGVuRGVsaW1pdGVyO1xuICAgIHZhciBjID0gdGhpcy5vcHRzLmNsb3NlRGVsaW1pdGVyO1xuICAgIHZhciBuZXdMaW5lQ291bnQgPSAwO1xuXG4gICAgbmV3TGluZUNvdW50ID0gKGxpbmUuc3BsaXQoJ1xcbicpLmxlbmd0aCAtIDEpO1xuXG4gICAgc3dpdGNoIChsaW5lKSB7XG4gICAgY2FzZSBvICsgZDpcbiAgICBjYXNlIG8gKyBkICsgJ18nOlxuICAgICAgdGhpcy5tb2RlID0gVGVtcGxhdGUubW9kZXMuRVZBTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbyArIGQgKyAnPSc6XG4gICAgICB0aGlzLm1vZGUgPSBUZW1wbGF0ZS5tb2Rlcy5FU0NBUEVEO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBvICsgZCArICctJzpcbiAgICAgIHRoaXMubW9kZSA9IFRlbXBsYXRlLm1vZGVzLlJBVztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbyArIGQgKyAnIyc6XG4gICAgICB0aGlzLm1vZGUgPSBUZW1wbGF0ZS5tb2Rlcy5DT01NRU5UO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBvICsgZCArIGQ6XG4gICAgICB0aGlzLm1vZGUgPSBUZW1wbGF0ZS5tb2Rlcy5MSVRFUkFMO1xuICAgICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7IF9fYXBwZW5kKFwiJyArIGxpbmUucmVwbGFjZShvICsgZCArIGQsIG8gKyBkKSArICdcIiknICsgJ1xcbic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGQgKyBkICsgYzpcbiAgICAgIHRoaXMubW9kZSA9IFRlbXBsYXRlLm1vZGVzLkxJVEVSQUw7XG4gICAgICB0aGlzLnNvdXJjZSArPSAnICAgIDsgX19hcHBlbmQoXCInICsgbGluZS5yZXBsYWNlKGQgKyBkICsgYywgZCArIGMpICsgJ1wiKScgKyAnXFxuJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZCArIGM6XG4gICAgY2FzZSAnLScgKyBkICsgYzpcbiAgICBjYXNlICdfJyArIGQgKyBjOlxuICAgICAgaWYgKHRoaXMubW9kZSA9PSBUZW1wbGF0ZS5tb2Rlcy5MSVRFUkFMKSB7XG4gICAgICAgIHRoaXMuX2FkZE91dHB1dChsaW5lKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICAgIHRoaXMudHJ1bmNhdGUgPSBsaW5lLmluZGV4T2YoJy0nKSA9PT0gMCB8fCBsaW5lLmluZGV4T2YoJ18nKSA9PT0gMDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBJbiBzY3JpcHQgbW9kZSwgZGVwZW5kcyBvbiB0eXBlIG9mIHRhZ1xuICAgICAgaWYgKHRoaXMubW9kZSkge1xuICAgICAgICAvLyBJZiAnLy8nIGlzIGZvdW5kIHdpdGhvdXQgYSBsaW5lIGJyZWFrLCBhZGQgYSBsaW5lIGJyZWFrLlxuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSkge1xuICAgICAgICBjYXNlIFRlbXBsYXRlLm1vZGVzLkVWQUw6XG4gICAgICAgIGNhc2UgVGVtcGxhdGUubW9kZXMuRVNDQVBFRDpcbiAgICAgICAgY2FzZSBUZW1wbGF0ZS5tb2Rlcy5SQVc6XG4gICAgICAgICAgaWYgKGxpbmUubGFzdEluZGV4T2YoJy8vJykgPiBsaW5lLmxhc3RJbmRleE9mKCdcXG4nKSkge1xuICAgICAgICAgICAgbGluZSArPSAnXFxuJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgLy8gSnVzdCBleGVjdXRpbmcgY29kZVxuICAgICAgICBjYXNlIFRlbXBsYXRlLm1vZGVzLkVWQUw6XG4gICAgICAgICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7ICcgKyBsaW5lICsgJ1xcbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gRXhlYywgZXNjLCBhbmQgb3V0cHV0XG4gICAgICAgIGNhc2UgVGVtcGxhdGUubW9kZXMuRVNDQVBFRDpcbiAgICAgICAgICB0aGlzLnNvdXJjZSArPSAnICAgIDsgX19hcHBlbmQoZXNjYXBlRm4oJyArIHN0cmlwU2VtaShsaW5lKSArICcpKScgKyAnXFxuJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBFeGVjIGFuZCBvdXRwdXRcbiAgICAgICAgY2FzZSBUZW1wbGF0ZS5tb2Rlcy5SQVc6XG4gICAgICAgICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7IF9fYXBwZW5kKCcgKyBzdHJpcFNlbWkobGluZSkgKyAnKScgKyAnXFxuJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUZW1wbGF0ZS5tb2Rlcy5DT01NRU5UOlxuICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBMaXRlcmFsIDwlJSBtb2RlLCBhcHBlbmQgYXMgcmF3IG91dHB1dFxuICAgICAgICBjYXNlIFRlbXBsYXRlLm1vZGVzLkxJVEVSQUw6XG4gICAgICAgICAgdGhpcy5fYWRkT3V0cHV0KGxpbmUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBJbiBzdHJpbmcgbW9kZSwganVzdCBhZGQgdGhlIG91dHB1dFxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZE91dHB1dChsaW5lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VsZi5vcHRzLmNvbXBpbGVEZWJ1ZyAmJiBuZXdMaW5lQ291bnQpIHtcbiAgICAgIHRoaXMuY3VycmVudExpbmUgKz0gbmV3TGluZUNvdW50O1xuICAgICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7IF9fbGluZSA9ICcgKyB0aGlzLmN1cnJlbnRMaW5lICsgJ1xcbic7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEVzY2FwZSBjaGFyYWN0ZXJzIHJlc2VydmVkIGluIFhNTC5cbiAqXG4gKiBUaGlzIGlzIHNpbXBseSBhbiBleHBvcnQgb2Yge0BsaW5rIG1vZHVsZTp1dGlscy5lc2NhcGVYTUx9LlxuICpcbiAqIElmIGBtYXJrdXBgIGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYCwgdGhlIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWFya3VwIElucHV0IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBFc2NhcGVkIHN0cmluZ1xuICogQHB1YmxpY1xuICogQGZ1bmNcbiAqICovXG5leHBvcnRzLmVzY2FwZVhNTCA9IHV0aWxzLmVzY2FwZVhNTDtcblxuLyoqXG4gKiBFeHByZXNzLmpzIHN1cHBvcnQuXG4gKlxuICogVGhpcyBpcyBhbiBhbGlhcyBmb3Ige0BsaW5rIG1vZHVsZTplanMucmVuZGVyRmlsZX0sIGluIG9yZGVyIHRvIHN1cHBvcnRcbiAqIEV4cHJlc3MuanMgb3V0LW9mLXRoZS1ib3guXG4gKlxuICogQGZ1bmNcbiAqL1xuXG5leHBvcnRzLl9fZXhwcmVzcyA9IGV4cG9ydHMucmVuZGVyRmlsZTtcblxuLyoqXG4gKiBWZXJzaW9uIG9mIEVKUy5cbiAqXG4gKiBAcmVhZG9ubHlcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5WRVJTSU9OID0gX1ZFUlNJT05fU1RSSU5HO1xuXG4vKipcbiAqIE5hbWUgZm9yIGRldGVjdGlvbiBvZiBFSlMuXG4gKlxuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMubmFtZSA9IF9OQU1FO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5lanMgPSBleHBvcnRzO1xufVxuIiwiLypcbiAqIEVKUyBFbWJlZGRlZCBKYXZhU2NyaXB0IHRlbXBsYXRlc1xuICogQ29weXJpZ2h0IDIxMTIgTWF0dGhldyBFZXJuaXNzZSAobWRlQGZsZWVnaXgub3JnKVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKlxuKi9cblxuLyoqXG4gKiBQcml2YXRlIHV0aWxpdHkgZnVuY3Rpb25zXG4gKiBAbW9kdWxlIHV0aWxzXG4gKiBAcHJpdmF0ZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ0V4cENoYXJzID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xuXG4vKipcbiAqIEVzY2FwZSBjaGFyYWN0ZXJzIHJlc2VydmVkIGluIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG4gKlxuICogSWYgYHN0cmluZ2AgaXMgYHVuZGVmaW5lZGAgb3IgYG51bGxgLCB0aGUgZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEVzY2FwZWQgc3RyaW5nXG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnRzLmVzY2FwZVJlZ0V4cENoYXJzID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVnRXhwQ2hhcnMsICdcXFxcJCYnKTtcbn07XG5cbnZhciBfRU5DT0RFX0hUTUxfUlVMRVMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJiMzNDsnLFxuICBcIidcIjogJyYjMzk7J1xufTtcbnZhciBfTUFUQ0hfSFRNTCA9IC9bJjw+J1wiXS9nO1xuXG5mdW5jdGlvbiBlbmNvZGVfY2hhcihjKSB7XG4gIHJldHVybiBfRU5DT0RFX0hUTUxfUlVMRVNbY10gfHwgYztcbn1cblxuLyoqXG4gKiBTdHJpbmdpZmllZCB2ZXJzaW9uIG9mIGNvbnN0YW50cyB1c2VkIGJ5IHtAbGluayBtb2R1bGU6dXRpbHMuZXNjYXBlWE1MfS5cbiAqXG4gKiBJdCBpcyB1c2VkIGluIHRoZSBwcm9jZXNzIG9mIGdlbmVyYXRpbmcge0BsaW5rIENsaWVudEZ1bmN0aW9ufXMuXG4gKlxuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7U3RyaW5nfVxuICovXG5cbnZhciBlc2NhcGVGdW5jU3RyID1cbiAgJ3ZhciBfRU5DT0RFX0hUTUxfUlVMRVMgPSB7XFxuJ1xuKyAnICAgICAgXCImXCI6IFwiJmFtcDtcIlxcbidcbisgJyAgICAsIFwiPFwiOiBcIiZsdDtcIlxcbidcbisgJyAgICAsIFwiPlwiOiBcIiZndDtcIlxcbidcbisgJyAgICAsIFxcJ1wiXFwnOiBcIiYjMzQ7XCJcXG4nXG4rICcgICAgLCBcIlxcJ1wiOiBcIiYjMzk7XCJcXG4nXG4rICcgICAgfVxcbidcbisgJyAgLCBfTUFUQ0hfSFRNTCA9IC9bJjw+XFwnXCJdL2c7XFxuJ1xuKyAnZnVuY3Rpb24gZW5jb2RlX2NoYXIoYykge1xcbidcbisgJyAgcmV0dXJuIF9FTkNPREVfSFRNTF9SVUxFU1tjXSB8fCBjO1xcbidcbisgJ307XFxuJztcblxuLyoqXG4gKiBFc2NhcGUgY2hhcmFjdGVycyByZXNlcnZlZCBpbiBYTUwuXG4gKlxuICogSWYgYG1hcmt1cGAgaXMgYHVuZGVmaW5lZGAgb3IgYG51bGxgLCB0aGUgZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkLlxuICpcbiAqIEBpbXBsZW1lbnRzIHtFc2NhcGVDYWxsYmFja31cbiAqIEBwYXJhbSB7U3RyaW5nfSBtYXJrdXAgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEVzY2FwZWQgc3RyaW5nXG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuZXNjYXBlWE1MID0gZnVuY3Rpb24gKG1hcmt1cCkge1xuICByZXR1cm4gbWFya3VwID09IHVuZGVmaW5lZFxuICAgID8gJydcbiAgICA6IFN0cmluZyhtYXJrdXApXG4gICAgICAucmVwbGFjZShfTUFUQ0hfSFRNTCwgZW5jb2RlX2NoYXIpO1xufTtcbmV4cG9ydHMuZXNjYXBlWE1MLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcykgKyAnO1xcbicgKyBlc2NhcGVGdW5jU3RyO1xufTtcblxuLyoqXG4gKiBOYWl2ZSBjb3B5IG9mIHByb3BlcnRpZXMgZnJvbSBvbmUgb2JqZWN0IHRvIGFub3RoZXIuXG4gKiBEb2VzIG5vdCByZWN1cnNlIGludG8gbm9uLXNjYWxhciBwcm9wZXJ0aWVzXG4gKiBEb2VzIG5vdCBjaGVjayB0byBzZWUgaWYgdGhlIHByb3BlcnR5IGhhcyBhIHZhbHVlIGJlZm9yZSBjb3B5aW5nXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSB0byAgIERlc3RpbmF0aW9uIG9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBmcm9tIFNvdXJjZSBvYmplY3RcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICBEZXN0aW5hdGlvbiBvYmplY3RcbiAqIEBzdGF0aWNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydHMuc2hhbGxvd0NvcHkgPSBmdW5jdGlvbiAodG8sIGZyb20pIHtcbiAgZnJvbSA9IGZyb20gfHwge307XG4gIGZvciAodmFyIHAgaW4gZnJvbSkge1xuICAgIHRvW3BdID0gZnJvbVtwXTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xuXG4vKipcbiAqIE5haXZlIGNvcHkgb2YgYSBsaXN0IG9mIGtleSBuYW1lcywgZnJvbSBvbmUgb2JqZWN0IHRvIGFub3RoZXIuXG4gKiBPbmx5IGNvcGllcyBwcm9wZXJ0eSBpZiBpdCBpcyBhY3R1YWxseSBkZWZpbmVkXG4gKiBEb2VzIG5vdCByZWN1cnNlIGludG8gbm9uLXNjYWxhciBwcm9wZXJ0aWVzXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSB0byAgIERlc3RpbmF0aW9uIG9iamVjdFxuICogQHBhcmFtICB7T2JqZWN0fSBmcm9tIFNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSAge0FycmF5fSBsaXN0IExpc3Qgb2YgcHJvcGVydGllcyB0byBjb3B5XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgRGVzdGluYXRpb24gb2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnRzLnNoYWxsb3dDb3B5RnJvbUxpc3QgPSBmdW5jdGlvbiAodG8sIGZyb20sIGxpc3QpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHAgPSBsaXN0W2ldO1xuICAgIGlmICh0eXBlb2YgZnJvbVtwXSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgdG9bcF0gPSBmcm9tW3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG87XG59O1xuXG4vKipcbiAqIFNpbXBsZSBpbi1wcm9jZXNzIGNhY2hlIGltcGxlbWVudGF0aW9uLiBEb2VzIG5vdCBpbXBsZW1lbnQgbGltaXRzIG9mIGFueVxuICogc29ydC5cbiAqXG4gKiBAaW1wbGVtZW50cyB7Q2FjaGV9XG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnRzLmNhY2hlID0ge1xuICBfZGF0YToge30sXG4gIHNldDogZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gICAgdGhpcy5fZGF0YVtrZXldID0gdmFsO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICB9LFxuICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgfVxufTtcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGh5cGhlbiBjYXNlIHZhcmlhYmxlIGludG8gY2FtZWwgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIEh5cGhlbiBjYXNlIHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBDYW1lbCBjYXNlIHN0cmluZ1xuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0cy5oeXBoZW5Ub0NhbWVsID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLy1bYS16XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHsgcmV0dXJuIG1hdGNoWzFdLnRvVXBwZXJDYXNlKCk7IH0pO1xufTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==