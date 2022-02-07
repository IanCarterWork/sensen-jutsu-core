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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlkcmF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2h5ZHJhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLDJCQUEyQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUtuRSxNQUFNLE9BQU8sc0JBQXNCO0lBQW5DO1FBR0ksWUFBTyxHQUErQixFQUFpQyxDQUFBO0lBK0czRSxDQUFDO0lBM0dHOztPQUVHO0lBQ0YsSUFBSSxDQUFDLElBQWEsRUFBRSxNQUF3QjtRQUV6QyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLElBQUksRUFBRSxDQUFBO1FBRWpELElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLENBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBQyxNQUFNLENBQUUsR0FBRyxNQUFNLENBQUE7UUFFNUQsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUlEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLElBQWEsRUFBRSxHQUFZLEVBQUUsTUFBd0I7UUFFeEQsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxFQUFDO1lBRXBCLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBRSxHQUFHLENBQUUsRUFBQztnQkFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsQ0FBRSxHQUFHLENBQUUsR0FBRyxNQUFNLENBQUE7YUFFdkM7U0FFSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFJRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFhLEVBQUUsR0FBVztRQUU3QixJQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLEVBQUM7WUFFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFBRTtnQkFFaEUsT0FBTyxLQUFLLElBQUksR0FBRyxDQUFBO1lBRXZCLENBQUMsQ0FBQyxDQUFBO1NBRUw7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBSUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBYTtRQUVmLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFFLEdBQUcsRUFBRSxDQUFBO1FBRXpCLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFJRDs7T0FFRztJQUNILEtBQUs7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQWdDLENBQUE7UUFFL0MsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUlEOztPQUVHO0lBQ0gsUUFBUSxDQUFDLElBQWE7UUFFbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBRSxJQUFJLFNBQVMsQ0FBQTtJQUU1QyxDQUFDO0lBS0Q7O09BRUc7SUFDSCxTQUFTO1FBRUwsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBRXZCLENBQUM7Q0FLSjtBQU1ELE1BQU0sT0FBTyxpQkFBaUI7SUFnQzFCLHNFQUFzRTtJQUl0RSxZQUFZLFNBQTZCLEVBQUUsS0FBUyxFQUFFLEtBQVM7UUF6Qi9ELG9GQUFvRjtRQUVwRiwyQ0FBMkM7UUFFM0Msc0JBQXNCO1FBRXRCLHNCQUFzQjtRQUV0QixxQ0FBcUM7UUFHckMsY0FBUyxHQUF1QixFQUF3QixDQUFBO1FBRXhELFVBQUssR0FBTSxFQUFPLENBQUE7UUFFbEIsVUFBSyxHQUFNLEVBQU8sQ0FBQTtRQUlsQixXQUFNLEdBQThCLEVBQStCLENBQUE7UUFRL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFHdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFFM0MsOENBQThDO1FBRzlDLGlEQUFpRDtRQUdqRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFFbEIsQ0FBQztJQU1EOzs7T0FHRztJQUNILE9BQU87UUFFSCxJQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUM7WUFFN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUU1QixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFZixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUU7Z0JBRTlCLElBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFDO29CQUFFLE9BQVE7aUJBQUU7Z0JBRXpDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVksQ0FBQTtnQkFFNUI7O21CQUVHO2dCQUNILElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztvQkFFbkIsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsR0FBRyxJQUFJLEtBQUssQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBRTlDLEdBQUcsRUFBRSxVQUFTLE1BQU0sRUFBRSxJQUFJOzRCQUV0Qix1Q0FBdUM7NEJBRXZDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV4QixDQUFDO3dCQUVELEdBQUcsRUFBRSxVQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUk7NEJBRW5DLG9EQUFvRDs0QkFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQTs0QkFFcEIsQ0FBQyxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUUsR0FBRyxJQUFJLENBQUE7NEJBRXRCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBRXhCLE9BQU8sSUFBSSxDQUFDO3dCQUVoQixDQUFDO3FCQUdKLENBQUMsQ0FBQTtpQkFHTDtnQkFHRDs7bUJBRUc7cUJBRUM7b0JBRUEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUksSUFBSyxFQUFFLEVBQUU7d0JBRTNDLEdBQUcsS0FBSSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUVoQyxHQUFHLENBQUMsS0FBSzs0QkFFTCxDQUFDLENBQUMsS0FBSyxDQUFFLElBQUksQ0FBRSxHQUFHLEtBQUssQ0FBQTs0QkFFdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFFeEIsT0FBTyxJQUFJLENBQUM7d0JBRWhCLENBQUM7cUJBRUosQ0FBQyxDQUFBO2lCQUVMO1lBR0wsQ0FBQyxDQUFDLENBQUE7U0FFTDtRQUdELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFLRDs7O09BR0c7SUFDSCxZQUFZLENBQUMsSUFBd0I7UUFFakMsT0FBTyxJQUFJLE9BQU8sQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUU7WUFFakQ7O2VBRUc7WUFFSCxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFXLENBQUM7WUFHM0c7O2VBRUc7WUFDSCxNQUFNLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1lBSTlEOztlQUVHO1lBRUgsTUFBTSxVQUFVLEdBQUcsMkJBQTJCLENBQUMsVUFBVSxJQUFJLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7WUFJaEY7O2VBRUc7WUFDSCxJQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUM7Z0JBRXhDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFBQyxPQUFPO2FBRXpCO1lBSUQ7O2VBRUc7WUFDSCxZQUFZLENBQUMsVUFBVSxJQUFJLFVBQVUsSUFBSSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUEsRUFBRTtnQkFFaEcsSUFBRyxXQUFXLElBQUksSUFBSSxFQUFDO29CQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO2lCQUFFO3FCQUU3QyxJQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUM7b0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUE7aUJBQUU7Z0JBRTNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUVuQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFBLEVBQUU7Z0JBRVQsdUJBQXVCLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBRTNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUVkLENBQUMsQ0FBQyxDQUFBO1FBR04sQ0FBQyxDQUFDLENBQUE7SUFHTixDQUFDO0lBVUQ7OztPQUdHO0lBQ0gsY0FBYyxDQUFDLE1BQXdCO1FBRW5DLE9BQU8sSUFBSSxPQUFPLENBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxFQUFFO1lBRWpELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFekI7O2VBRUc7WUFFSCxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxXQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQVcsQ0FBQztZQUd4Sjs7ZUFFRztZQUNILE1BQU0sVUFBVSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7WUFJOUQ7O2VBRUc7WUFFSCxNQUFNLFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxVQUFVLElBQUksTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUloRjs7ZUFFRztZQUNILElBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztnQkFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUFDLE9BQU87YUFFekI7WUFLRDs7ZUFFRztZQUNILFlBQVksQ0FBQyxVQUFVLElBQUksVUFBVSxJQUFJLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQSxFQUFFO2dCQUVoRyxJQUFHLFdBQVcsSUFBSSxJQUFJLEVBQUM7b0JBRW5CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO2lCQUUxQjtxQkFFSSxJQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUM7b0JBRTFCLE1BQU0sR0FBRyxrQkFBa0IsQ0FBRSxNQUFNLENBQUUsQ0FBQTtvQkFFckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFJLE1BQU8sRUFBRSxDQUFBO2lCQUVuQztnQkFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFbkIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQSxFQUFFO2dCQUVULHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUUzQixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFFZCxDQUFDLENBQUMsQ0FBQTtRQUdOLENBQUMsQ0FBQyxDQUFBO0lBR04sQ0FBQztDQU1KIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uLCBSZW5kZXJFbmdpbmUgfSBmcm9tIFwiLi9jb21waWxhdGVcIjtcbmltcG9ydCB7IFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uLCBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24gfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5pbXBvcnQgeyBDb21wb25lbnRNZXRob2RSYXcsIENvbXBvbmVudFByb3BzLCBDb21wb25lbnRTdGF0ZSwgRXhwcmVzc2lvblJlY29yZCwgVENvbXBvbmVudEh5ZHJhdGVzRW50cnkgfSBmcm9tIFwiLi9pbmRleC50XCI7XG5pbXBvcnQgeyBkZWNvZGVIVE1MRW50aXRpZXMsIFN0YWJpbGl6ZUNvbnRlbnQgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuXG5cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8VCBleHRlbmRzIChDb21wb25lbnRTdGF0ZSB8IENvbXBvbmVudFByb3BzKT57XG5cblxuICAgIGVudHJpZXM6IFRDb21wb25lbnRIeWRyYXRlc0VudHJ5PFQ+ID0ge30gYXMgIFRDb21wb25lbnRIeWRyYXRlc0VudHJ5PFQ+XG5cblxuXG4gICAgLyoqXG4gICAgICogQWRkXG4gICAgICovXG4gICAgIHB1c2gobmFtZToga2V5b2YgVCwgcmVjb3JkOiBFeHByZXNzaW9uUmVjb3JkKXtcblxuICAgICAgICB0aGlzLmVudHJpZXNbIG5hbWUgXSA9IHRoaXMuZW50cmllc1sgbmFtZSBdIHx8IFtdXG5cbiAgICAgICAgdGhpcy5lbnRyaWVzWyBuYW1lIF1bIHRoaXMuZW50cmllc1sgbmFtZSBdLmxlbmd0aCBdID0gcmVjb3JkXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBBZGRcbiAgICAgKi9cbiAgICB1cGRhdGUobmFtZToga2V5b2YgVCwga2V5IDogbnVtYmVyLCByZWNvcmQ6IEV4cHJlc3Npb25SZWNvcmQpe1xuXG4gICAgICAgIGlmKHRoaXMuZW50cmllc1sgbmFtZSBdKXtcblxuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzWyBuYW1lIF1bIGtleSBdKXtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXNbIG5hbWUgXVsga2V5IF0gPSByZWNvcmRcbiAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50cnkncyBzbG90IGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmUobmFtZToga2V5b2YgVCwga2V5OiBudW1iZXIpe1xuXG4gICAgICAgIGlmKHRoaXMuZW50cmllc1sgbmFtZSBdKXtcblxuICAgICAgICAgICAgdGhpcy5lbnRyaWVzWyBuYW1lIF0gPSB0aGlzLmVudHJpZXNbIG5hbWUgXS5maWx0ZXIoKHJlY29yZCwgaW5kZXgpPT57XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggIT0ga2V5XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogQ2xlYW4gZW50cnkgYnkgUHJvcGVydHkgb3IgU3RhdGUgbmFtZVxuICAgICAqL1xuICAgIGNsZWFuKG5hbWU6IGtleW9mIFQpe1xuXG4gICAgICAgIHRoaXMuZW50cmllc1sgbmFtZSBdID0gW11cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIENsZWFuIGVudHJ5IGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZXNldCgpe1xuXG4gICAgICAgIHRoaXMuZW50cmllcyA9IHt9IGFzIFRDb21wb25lbnRIeWRyYXRlc0VudHJ5PFQ+XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZXRyaWV2ZShuYW1lOiBrZXlvZiBUKSA6IEV4cHJlc3Npb25SZWNvcmRbXXtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzWyBuYW1lIF0gfHwgdW5kZWZpbmVkXG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEZpbmQgQWxsXG4gICAgICovXG4gICAgcmV0cmlldmVzKCl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1xuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgXG59XG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEh5ZHJhdGVzPFxuXG4gICAgUyBleHRlbmRzIENvbXBvbmVudFN0YXRlLCBcbiAgICBcbiAgICBQIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTSBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTLCBQPlxuICAgIFxuPntcblxuXG4gICAgLy8gZW50cmllczogVENvbXBvbmVudEh5ZHJhdGVzRW50cmllczxTLCBQPiA9IHt9IGFzICBUQ29tcG9uZW50SHlkcmF0ZXNFbnRyaWVzPFMsIFA+XG5cbiAgICAvLyBzdG9yZTogVENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UywgUD4gPSB7XG5cbiAgICAvLyAgICAgc3RhdGU6IHt9IGFzIFMsXG4gICAgICAgIFxuICAgIC8vICAgICBwcm9wczoge30gYXMgUCxcblxuICAgIC8vIH0gYXMgVENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UywgUD5cbiAgICBcblxuICAgIGNvbXBvbmVudDogQ29tcG9uZW50PFMsIFAsIE0+ID0ge30gYXMgQ29tcG9uZW50PFMsIFAsIE0+XG5cbiAgICBzdGF0ZTogUyA9IHt9IGFzIFNcblxuICAgIHByb3BzOiBQID0ge30gYXMgUFxuXG5cblxuICAgICRzdGF0ZTogQ29tcG9uZW50SHlkcmF0ZXNTdG9yZTxTPiA9IHt9IGFzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8Uz5cblxuICAgIC8vICRwcm9wczogQ29tcG9uZW50SHlkcmF0ZXNTdG9yZTxQPiA9IHt9IGFzIENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UD5cblxuXG4gICAgXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnQ8UywgUCwgTT4sIHN0YXRlPzogUywgcHJvcHM/OiBQKXtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUgfHwgY29tcG9uZW50LnN0YXRlKTtcblxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwgY29tcG9uZW50LnByb3BzO1xuXG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSBuZXcgQ29tcG9uZW50SHlkcmF0ZXNTdG9yZSgpO1xuXG4gICAgICAgIC8vIHRoaXMuJHByb3BzID0gbmV3IENvbXBvbmVudEh5ZHJhdGVzU3RvcmUoKTtcblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdQaGFzZSBTZXQgUHJveHkgYW5kIG90aGVyJywgdGhpcylcblxuXG4gICAgICAgIHRoaXMucHJveGllcygpXG5cbiAgICB9XG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIFN0YXRlIFByb3hpZXNcbiAgICAgKiBAZGVzY3JpcHRpb24gVXNlIHRoaXMgdG8gYWN0aXZhdGUgdGhlIGR5bmFtaWMgc3RhdGUuIEZvciBkZWZhdWx0IHRoZSBjb25zdHJ1Y3QgY2FsbCB0aGlzXG4gICAgICovXG4gICAgcHJveGllcygpe1xuXG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnN0YXRlID09ICdvYmplY3QnKXtcblxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMuY29tcG9uZW50O1xuXG4gICAgICAgICAgICBjb25zdCAkID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZSkubWFwKGU9PntcblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlWzFdID09ICdmdW5jdGlvbicpeyByZXR1cm4gOyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZVswXSBhcyBrZXlvZiBTXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBcnJheSBQcm94eVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZVsxXSkpe1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdGVbIG5hbWUgXSA9IG5ldyBQcm94eTx0eXBlb2YgZVsxXT4oZVsxXSwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0dGluZycsIHRhcmdldCwgcHJvcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih0YXJnZXQsIHByb3AsIHZhbHVlLCBwcm94KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nJywgdGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcHJveClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnN0YXRlWyBuYW1lIF0gPSBwcm94XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmh5ZHJhdGVzU3RhdGUobmFtZSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE90aGVyXG4gICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLnN0YXRlLCBgJHsgbmFtZSB9YCwge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQoKXsgcmV0dXJuICQuc3RhdGVbIG5hbWUgXTsgfSxcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCh2YWx1ZSl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5zdGF0ZVsgbmFtZSBdID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmh5ZHJhdGVzU3RhdGUobmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEh5ZHJhdGUgU3BlY2lmaWMgTm9kZVxuICAgICAqIEBkZXNjcmlwdGlvbiBVc2UgdGhpcyB0byBSZVJlbmRlciBzdGF0ZSBhbmQgcHJvcHMgaW4gTm9kZVxuICAgICAqL1xuICAgIGh5ZHJhdGVzTm9kZShub2RlOiBOb2RlIHwgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmcgfCBudWxsPigocmVzb2x2ZSwgcmVqZWN0KT0+e1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluaXRcbiAgICAgICAgICAgICAqL1xuICAgIFxuICAgICAgICAgICAgbGV0IG1vY2t1cCA9IFN0YWJpbGl6ZUNvbnRlbnQoKCgnaW5uZXJIVE1MJyBpbiBub2RlKSA/IG5vZGUuaW5uZXJIVE1MIDogbm9kZS50ZXh0Q29udGVudCkgfHwgJycpIGFzIHN0cmluZztcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFY2hvXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGVjaG9Nb2NrdXAgPSBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihtb2NrdXAsIHRydWUpIHx8ICcnXG4gICAgIFxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU25hcENvZGVcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBjb25zdCBzbmFwTW9ja3VwID0gU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uKGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0cnVlKSB8fCAnJ1xuXG5cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBWZXJpZmljYXRpb25zXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKCFlY2hvTW9ja3VwLmxlbmd0aCAmJiAhc25hcE1vY2t1cC5sZW5ndGgpeyBcblxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7IHJldHVybjsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVuZGVyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJlbmRlckVuZ2luZShzbmFwTW9ja3VwIHx8IGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5jb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICBpZignaW5uZXJIVE1MJyBpbiBub2RlKXsgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZigndGV4dENvbnRlbnQnIGluIG5vZGUpeyBub2RlLnRleHRDb250ZW50ID0gcmVzdWx0IH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyPT57XG4gICAgXG4gICAgICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpXG4gICAgXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgXG5cbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG5cblxuXG5cbiAgICAvKipcbiAgICAgKiBIeWRyYXRlIFNwZWNpZmljIFJlY29yZGVcbiAgICAgKiBAZGVzY3JpcHRpb24gVXNlIHRoaXMgdG8gUmVSZW5kZXIgc3RhdGUgYW5kIHByb3BzIG9mIFJlY29yZFxuICAgICAqL1xuICAgIGh5ZHJhdGVzUmVjb3JkKHJlY29yZDogRXhwcmVzc2lvblJlY29yZCl7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IG51bGw+KChyZXNvbHZlLCByZWplY3QpPT57XG5cbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSByZWNvcmQubm9kZTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbml0XG4gICAgICAgICAgICAgKi9cbiAgICBcbiAgICAgICAgICAgIGxldCBtb2NrdXAgPSBTdGFiaWxpemVDb250ZW50KCgocmVjb3JkLm1vY2t1cCAmJiAnaW5uZXJIVE1MJyBpbiByZWNvcmQubW9ja3VwKSA/IHJlY29yZC5tb2NrdXAuaW5uZXJIVE1MIDogcmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQpIHx8ICcnKSBhcyBzdHJpbmc7XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWNob1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBlY2hvTW9ja3VwID0gU3RhYmlsaXplRWNob0V4cHJlc3Npb24obW9ja3VwLCB0cnVlKSB8fCAnJ1xuICAgICBcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNuYXBDb2RlXG4gICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgY29uc3Qgc25hcE1vY2t1cCA9IFN0YWJpbGl6ZVNuYXBDb2RlRXhwcmVzc2lvbihlY2hvTW9ja3VwIHx8IG1vY2t1cCwgdHJ1ZSkgfHwgJydcblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmVyaWZpY2F0aW9uc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZighZWNob01vY2t1cC5sZW5ndGggJiYgIXNuYXBNb2NrdXAubGVuZ3RoKXsgXG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpOyByZXR1cm47IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICBcblxuXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVuZGVyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJlbmRlckVuZ2luZShzbmFwTW9ja3VwIHx8IGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5jb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0PT57XG5cbiAgICAgICAgICAgICAgICBpZignaW5uZXJIVE1MJyBpbiBub2RlKXsgXG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSByZXN1bHQgXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCd0ZXh0Q29udGVudCcgaW4gbm9kZSl7IFxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRlY29kZUhUTUxFbnRpdGllcyggcmVzdWx0IClcblxuICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gYCR7IHJlc3VsdCB9YCBcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICBcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyPT57XG4gICAgXG4gICAgICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpXG4gICAgXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgIH0pXG4gICAgXG5cbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG59Il19

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
                const path = `${url.origin}${(url.pathname == '/') ? '' : url.pathname}/${this.$options.template}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQVEvQyxNQUFNLFVBQVUsMEJBQTBCLENBUXhDLFNBQTZCLEVBQUUsRUFBUztJQUV0QyxNQUFNLENBQUMsR0FBbUMsRUFBbUMsQ0FBQTtJQUc3RSxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUVuQixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUVaLE9BQU8sQ0FBQyxDQUFDO0FBRWIsQ0FBQztBQU1EOztHQUVHO0FBQ0gsTUFBTSxpQkFBcUIsU0FBUSxXQUFXO0lBZTFDOztPQUVHO0lBQ0gsWUFBWSxLQUFTO1FBRWpCLEtBQUssRUFBRSxDQUFDO1FBWFo7O1dBRUc7UUFDSCxVQUFLLEdBQU8sRUFBTyxDQUFDO1FBVWhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBRXZCLENBQUM7SUFyQkQ7O09BRUc7SUFDSCxNQUFNLEtBQUssa0JBQWtCLEtBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBcUI3Qzs7T0FFRztJQUNILGlCQUFpQixLQUFHLENBQUM7SUFHckI7O09BRUc7SUFDSCxlQUFlLEtBQUcsQ0FBQztJQUduQjs7T0FFRztJQUNILG9CQUFvQixLQUFHLENBQUM7SUFJeEI7O09BRUc7SUFDSCx3QkFBd0I7SUFFeEIsQ0FBQztDQUlKO0FBT0Q7O0dBRUc7QUFFSCxNQUFNLE9BQU8sWUFBWTtJQUdyQixZQUFZLE1BQXFCO1FBRTdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRXZDLENBQUM7Q0FJSjtBQVFEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUEyQ2xCOztPQUVHO0lBQ0YsWUFBWSxPQUFpRDs7UUFwQzlELGFBQVEsR0FBWSxFQUFFLENBQUM7UUFNdkIsWUFBTyxHQUEyQyxFQUEyQyxDQUFDO1FBRTlGLGFBQVEsR0FBOEMsRUFBOEMsQ0FBQTtRQU1wRyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLHNDQUFzRDtRQUV0RCw4Q0FBc0M7UUFFdEMsOENBQXNDO1FBTXRDLDZCQUFtQixDQUFDLEVBQUM7UUFFckIsK0JBQXFCLENBQUMsRUFBQztRQVNuQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUV4QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFVLENBQUE7UUFFL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBVSxDQUFBO1FBRS9DLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBRSxFQUFFLENBQVksQ0FBQTtRQUVyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFFcEMsdUJBQUEsSUFBSSx1QkFBYSxJQUFJLGlCQUFpQixDQUF3QixJQUFJLENBQUMsTUFBQSxDQUFBO1FBR25FLHVCQUFBLElBQUksbURBRVksTUFGaEIsSUFBSSxDQUVjO2FBRWIsU0FBUyxFQUFFO2FBRVgsV0FBVyxFQUFFO2FBRWIsU0FBUyxFQUFFO2FBRVAsSUFBSSxDQUFDLEdBQUcsQ0FBQSxFQUFFO1lBRVAsSUFBRyxHQUFHLEVBQUM7Z0JBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBRXBCLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFDO29CQUU1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO2lCQUV6QzthQUVKO1lBRUQsSUFBSTtpQkFFQyxVQUFVLEVBQUU7aUJBRVosVUFBVSxFQUFFLENBRWhCO1FBRUwsQ0FBQyxDQUFDLENBRVQ7SUFFTCxDQUFDO0lBS0Q7O09BRUc7SUFDSCxTQUFTO1FBRUwsT0FBTyxJQUFJLE9BQU8sQ0FBcUIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUU7WUFFdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRzFELElBQUcsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUM7Z0JBRXpDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFDO29CQUU1QyxJQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQzt3QkFFcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO3dCQUV4QyxPQUFPO3FCQUVWO2lCQUdKO2dCQUVELE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkIsT0FBTzthQUVWO2lCQUVHO2dCQUVBLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFHM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7Z0JBRzNCOzttQkFFRztnQkFDSCxJQUFHLEtBQUssRUFBQztvQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBQyxPQUFPO2lCQUFFO2dCQUlyRDs7bUJBRUc7Z0JBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUVsQyxNQUFNLElBQUksR0FBRyxHQUFJLEdBQUcsQ0FBQyxNQUFPLEdBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFTLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFTLEVBQUUsQ0FBQTtnQkFHeEcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxHQUFFLElBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUM7b0JBQUUsT0FBTyxTQUFTLENBQUE7aUJBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQztxQkFFM0UsSUFBSSxDQUFDLElBQUksQ0FBQSxFQUFFO29CQUVSLElBQUcsSUFBSSxFQUFDO3dCQUVKLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBRSxDQUFBO3dCQUU5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7cUJBRWhCO3lCQUVHO3dCQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztxQkFBRTtnQkFHL0IsQ0FBQyxDQUFDO3FCQUVELEtBQUssQ0FBQyxFQUFFLENBQUEsRUFBRSxHQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUd2QyxPQUFPO2FBRVY7UUFNTCxDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUF3Q0Q7O09BRUc7SUFFSCxXQUFXO1FBRVAsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsb0RBQW9EO1FBRXBELGdEQUFnRDtRQUVoRCxJQUFJO1FBRUosbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBSUQsa0JBQWtCLENBQUMsS0FBZ0Q7UUFFL0QsTUFBTSxNQUFNLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO1FBRTlDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUdsQixJQUFHLE1BQU0sRUFBQztZQUVOLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTyxNQUFNLENBQUMsSUFBSyxFQUFFLENBQUE7WUFHckM7O2VBRUc7WUFDSCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFDO2dCQUVyQixJQUFHLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxFQUFDO29CQUV4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFRLEVBQUUsQ0FBZ0IsQ0FBQTtpQkFFOUY7YUFFSjtZQUdEOztlQUVHO1lBQ0gsSUFBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDO2dCQUVsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQU0sU0FBUSxpQkFBd0I7b0JBRWhELFlBQVksS0FBWTt3QkFFcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUVaLG1CQUFtQjt3QkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUUvQyxDQUFDO2lCQUVKLENBQUE7Z0JBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsR0FBRSxFQUFFO29CQUUxQyxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFL0MsQ0FBQyxDQUFBO2dCQUdELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxHQUFFLEVBQUU7b0JBRXhDLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU3QyxDQUFDLENBQUE7Z0JBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsR0FBRSxFQUFFO29CQUU3QyxtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFbEQsQ0FBQyxDQUFBO2dCQUdELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLHdCQUF3QixHQUFHLENBQUMsSUFBWSxFQUFFLEtBQVksRUFBRSxRQUFlLEVBQUMsRUFBRTtvQkFFNUYsbUJBQW1CO29CQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBRXhFLENBQUMsQ0FBQTtnQkFHRCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUU7b0JBRXJELEdBQUcsRUFBRTt3QkFFRCxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO29CQUV6RSxDQUFDO2lCQUVKLENBQUMsQ0FBQTtnQkFHRixjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO2FBRXJEO1lBRUQsSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sWUFBWSxXQUFXLEVBQUM7Z0JBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBSSxJQUFJLENBQUMsUUFBUyxFQUFFLENBQUMsQ0FBQTthQUVsRTtZQUVELElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxZQUFZLFdBQVcsQ0FBQyxFQUFDO2dCQUUvQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUksSUFBSSxDQUFDLFFBQVMsRUFBRSxDQUFDLENBQUE7YUFFdkU7WUFHRCxtQkFBbUI7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBR2pEO1FBR0QsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQVVEOztPQUVHO0lBQ0gsVUFBVTtRQUdOLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFDO1lBRTVDLHVCQUFBLElBQUksK0JBQXFCLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUMsRUFBRTtnQkFFckQsSUFBRyxPQUFPLEVBQUM7b0JBRVAsdUJBQUEsSUFBSSwrQkFBcUIsT0FBTyxNQUFBLENBQUE7b0JBRWhDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBLEVBQUU7d0JBRXBCLElBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUM7NEJBRTNCLElBQUcsTUFBTSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sWUFBWSxXQUFXLEVBQUM7Z0NBRXBFLElBQUcsTUFBTSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO29DQUVsQyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsYUFBd0MsQ0FBQTtvQ0FFM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtvQ0FFdEUsYUFBYTtvQ0FDYixJQUFJLENBQUMsS0FBSyxDQUFFLEdBQUcsQ0FBRSxHQUFHLEtBQUssQ0FBQTtvQ0FHekIsbUJBQW1CO29DQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUU7d0NBQ3BDLElBQUksRUFBRSxNQUFNLENBQUMsYUFBYTt3Q0FDMUIsS0FBSzt3Q0FDTCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7cUNBQzVCLENBQUMsQ0FBQztpQ0FFTjs2QkFFSjt5QkFHSjt3QkFFRCxtQkFBbUI7d0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUV4RCxDQUFDLENBQUMsQ0FBQTtvQkFFRixtQkFBbUI7b0JBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUV6RDtZQUdMLENBQUMsQ0FBQyxNQUFBLENBQUE7WUFFRix1QkFBQSxJQUFJLG1DQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQztnQkFFakQsU0FBUyxFQUFFLElBQUk7Z0JBRWYsT0FBTyxFQUFFLElBQUk7Z0JBRWIsVUFBVSxFQUFFLElBQUk7Z0JBRWhCLGFBQWEsRUFBRSxJQUFJO2dCQUVuQixxQkFBcUIsRUFBRSxJQUFJO2dCQUUzQixpQkFBaUIsRUFBRSxJQUFJO2dCQUV2QixlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBRTNDLENBQUMsQ0FBQTtZQUdGLG1CQUFtQjtZQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSx1QkFBQSxJQUFJLG1DQUFrQixDQUFDLENBQUM7U0FFL0U7UUFLRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBUUQsYUFBYSxDQUFDLElBQWlCO1FBRTNCLE1BQU0sS0FBSyxHQUFHLHVCQUFBLElBQUksMkJBQVUsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBRSxDQUFBO1FBR3JELElBQUcsS0FBSyxFQUFFLE1BQU0sRUFBQztZQUViLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFBLEVBQUU7Z0JBRWQsdUJBQUEsSUFBSSwyQkFBVSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUM7cUJBRWpDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO29CQUVWLG1CQUFtQjtvQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsZUFBZSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBRTdELENBQUMsQ0FBQyxDQUFBO1lBRVYsQ0FBQyxDQUFDLENBQUE7U0FFTDtRQUdELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7SUFRRDs7T0FFRztJQUNILFVBQVU7UUFFTixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBQztZQUU1QyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUMsRUFBRTs7Z0JBRTdDLGlEQUFBLENBQUEsMERBQWEsRUFBYixJQUFlLElBQUEsQ0FBQSxNQUFBLENBQUM7Z0JBRWhCOzttQkFFRztnQkFFSCxJQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUM7b0JBRTdCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDO29CQUd6QyxNQUFNLFFBQVEsR0FBRzt3QkFFYixHQUFHLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3dCQUVwRixHQUFHLENBQUMsS0FBSyxJQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxtQkFBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzt3QkFFcEgsb0hBQW9IO3FCQUN2SCxDQUFBO29CQUdELElBQUcsUUFBUSxDQUFDLE1BQU0sRUFBQzt3QkFFZixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQSxFQUFFOzRCQUVoQixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQTs0QkFFN0MsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsSUFBRSxTQUFTLENBQUMsQ0FBQTs0QkFFM0MsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBZ0IsQ0FBQTs0QkFFcEMsYUFBYTs0QkFDYixLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7NEJBRXpCLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOzRCQUUxQix1QkFBQSxJQUFJLDJCQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUE7d0JBRWxELENBQUMsQ0FBQyxDQUFBO3FCQUVMO2lCQUVKO2dCQUdELG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFMUQsQ0FBQyxDQUFDLENBQUE7U0FFTDtRQUVELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBb0NEOztPQUVHO0lBQ0gsU0FBUztRQUdMOztXQUVHO1FBRUgsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQWMsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFFdkQsNkNBQTZDO1FBRWpELENBQUMsQ0FBQyxDQUFBO1FBRUY7O1dBRUc7UUFJSDs7V0FFRztRQUVILElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFtQiwwQkFBMEIsRUFBRSxDQUFDLElBQUksRUFBQyxFQUFFO1lBRXhFLDBDQUEwQztRQUU5QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFpQixrQkFBa0IsRUFBRSxDQUFDLElBQUksRUFBQyxFQUFFO1lBRTlELDBDQUEwQztZQUUxQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUVoQix1QkFBQSxJQUFJLDJCQUFVLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7YUFFakQ7UUFHTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFFL0MsMkNBQTJDO1FBRS9DLENBQUMsQ0FBQyxDQUFBO1FBRUY7O1dBRUc7UUFPSDs7V0FFRztRQUVILElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFtQixvQkFBb0IsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFO1lBRS9ELE1BQU0sUUFBUSxHQUE4QyxFQUFFLENBQUE7WUFHOUQsSUFBRyxDQUFDLENBQUMsSUFBSSxFQUFDO2dCQUVOLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFDO29CQUVyQixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBRTdDO3FCQUVJLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFDO29CQUU5QixRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtpQkFFakQ7cUJBRUksSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFBQztvQkFFcEMsUUFBUSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7aUJBRXZEO3FCQUVJLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksb0JBQW9CLEVBQUM7b0JBRXhDLFFBQVEsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2lCQUUzRDtxQkFFSSxJQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBQztvQkFFL0IsUUFBUSxDQUFDLElBQUksQ0FFVCxJQUFJLE9BQU8sQ0FBbUIsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEVBQUU7d0JBRWpDLElBQUcsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUM7NEJBQ3hCLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO3lCQUM3Qzt3QkFFRCxJQUFHLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLFVBQVUsRUFBQzs0QkFDM0MsTUFBTSxDQUFDLDJCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFLLElBQUksQ0FBQyxDQUFDO3lCQUNuRTt3QkFFRCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFFbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtvQkFFYixDQUFDLENBQUMsQ0FFTCxDQUFBO2lCQUVKO2FBRUo7WUFHRCxJQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUM7Z0JBRWYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBRWhCLElBQUksQ0FBQyxHQUFHLENBQUEsRUFBRTs7b0JBRVAsbURBQUEsQ0FBQSw0REFBZSxFQUFmLElBQWlCLElBQUEsQ0FBQSxNQUFBLENBQUM7b0JBRWxCLGtDQUFrQztvQkFFbEMsdUJBQUEsSUFBSSw0REFBcUIsTUFBekIsSUFBSSxFQUFzQixHQUFHLENBQUMsQ0FBQztnQkFFbkMsQ0FBQyxDQUFDLENBRUw7YUFHSjtRQUVMLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQWMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFDLEVBQUU7WUFFcEQsaURBQWlEO1FBRXJELENBQUMsQ0FBQyxDQUFBO1FBR0Y7O1dBRUc7UUFPSDs7V0FFRztRQUVILElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUM7WUFFbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsRUFBRTtnQkFFdEMsSUFBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUM7b0JBRXpCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUV4QixhQUFhO3dCQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFFcEMsQ0FBQyxDQUFDLENBQUE7aUJBRUw7WUFFTCxDQUFDLENBQUMsQ0FBQTtTQUVMO1FBRUQ7O1dBRUc7UUFLSCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0NBT0o7O0lBN2xCTyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBYyxPQUFPLEVBQUUsR0FBRSxFQUFFO1FBRTVDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFDO1lBRTVDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBRWhEO0lBRUwsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBYyxPQUFPLEVBQUUsR0FBRSxFQUFFO1FBRTVDLElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFDO1lBRTVDLGFBQWE7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUU5QztJQUVMLENBQUMsQ0FBQyxDQUFBO0lBR0YsT0FBTyxJQUFJLENBQUM7QUFFaEIsQ0FBQywyRUFnV29CLEdBQXFDO0lBRXRELElBQUcsdUJBQUEsSUFBSSwwQkFBUyxJQUFJLHVCQUFBLElBQUksNEJBQVcsRUFBQztRQUVoQyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTNDLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBRWIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUUxQztRQUVELHFDQUFxQztLQUV4QztJQUVELE9BQU8sSUFBSSxDQUFDO0FBRWhCLENBQUM7QUFxTkw7O0dBRUc7QUFFRixNQUFNLENBQUMsT0FBTyxPQUFPLE1BQU07O0FBRWpCLGdCQUFTLEdBQUcsU0FBUyxDQUFDO0FBRXRCLGFBQU0sR0FBRyxZQUFZLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21waWxhdGVFY2hvLCBDb21waWxhdGVFY2hvQXR0cmlidXRlcywgQ29tcGlsYXRlU25hcENvZGUsIENvbXBpbGF0ZVNuYXBDb2RlQXR0cmlidXRlcyB9IGZyb20gXCIuL2NvbXBpbGF0ZVwiO1xuaW1wb3J0IHsgU2Vuc2VuRW1pdHRlciB9IGZyb20gXCIuL2VtaXR0ZXJcIjtcbmltcG9ydCB7IEZpbmRFeHByZXNzaW9ucyB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB0eXBlIHsgQ29tcG9uZW50TWV0aG9kRXZlbnQsIENvbXBvbmVudE1ldGhvZFJhdywgQ29tcG9uZW50UHJvcHMsIENvbXBvbmVudFN0YXRlLCBFeHByZXNzaW9uUmVjb3JkLCBUQ29tcG9uZW50T3B0aW9ucywgVFNjcmVlbkNvbmZpZyB9IGZyb20gXCIuL2luZGV4LnRcIjtcbmltcG9ydCB7IENvbXBvbmVudEh5ZHJhdGVzIH0gZnJvbSBcIi4vaHlkcmF0ZXNcIjtcblxuXG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUNvbXBvbmVudE1ldGhvZEV2ZW50PFxuICAgIFxuICAgIFMgZXh0ZW5kcyBDb21wb25lbnRTdGF0ZSwgXG4gICAgICAgIFxuICAgIFAgZXh0ZW5kcyBDb21wb25lbnRQcm9wcyxcbiAgICBcbiAgICBNIGV4dGVuZHMgQ29tcG9uZW50TWV0aG9kUmF3PFMsIFA+XG4gICAgXG4+KGNvbXBvbmVudDogQ29tcG9uZW50PFMsIFAsIE0+LCBldjogRXZlbnQpe1xuXG4gICAgY29uc3QgXyA6IENvbXBvbmVudE1ldGhvZEV2ZW50PFMsIFAsIE0+ID0ge30gYXMgQ29tcG9uZW50TWV0aG9kRXZlbnQ8UywgUCwgTT5cbiAgICBcblxuICAgIF8uc2VsZiA9IGNvbXBvbmVudDtcblxuICAgIF8uZXZlbnQgPSBldlxuICAgIFxuICAgIHJldHVybiBfO1xuXG59XG5cblxuXG5cblxuLyoqXG4gKiBTZW5zZW4gSFRNTCBFbGVtZW50XG4gKi9cbmNsYXNzIFNlbnNlbkhUTUxFbGVtZW50PFA+IGV4dGVuZHMgSFRNTEVsZW1lbnR7XG5cblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge3JldHVybiBbXTsgfVxuXG5cbiAgICAvKipcbiAgICAgKiBEeW5hbWljIHZhclxuICAgICAqL1xuICAgIHByb3BzIDogUCA9IHt9IGFzIFA7XG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICogTmV3IENvbnN0cnVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzIDogUCl7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogV2hlbiBFbGVtZW50IGlzIGNvbm5lY3RlZFxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCl7fVxuXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIEVsZW1lbnQgaXMgQWRvcHRlZCBieSBvdGhlciBET01cbiAgICAgKi9cbiAgICBhZG9wdGVkQ2FsbGJhY2soKXt9XG5cblxuICAgIC8qKlxuICAgICAqIFdoZW5lIEVsZW1lbnQgaXMgRGlzY29ubmVjdGVkIHRvIHRoZSBjdXJyZW50IERPTVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7fVxuICAgIFxuXG5cbiAgICAvKipcbiAgICAgKiBXaGVuZSBFbGVtZW50IGNoYW5nZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKCl7XG5cbiAgICB9XG4gICAgXG5cbiAgICBcbn1cblxuXG5cblxuXG5cbi8qKlxuICogU2Vuc2VuIFNjcmVlblxuICovXG5cbmV4cG9ydCBjbGFzcyBTZW5zZW5TY3JlZW57XG5cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVFNjcmVlbkNvbmZpZyl7XG5cbiAgICAgICAgY29uc29sZS53YXJuKCdTZW5zZW4gU2NyZWVuJywgdGhpcylcblxuICAgIH1cbiAgICBcbiAgICBcblxufVxuXG5cblxuXG5cblxuXG4vKipcbiAqIFNlbnNlbiBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxcblxuICAgIFN0YXRlIGV4dGVuZHMgQ29tcG9uZW50U3RhdGUsIFxuICAgIFxuICAgIFByb3BzIGV4dGVuZHMgQ29tcG9uZW50UHJvcHMsXG4gICAgXG4gICAgTWV0aG9kcyBleHRlbmRzIENvbXBvbmVudE1ldGhvZFJhdzxTdGF0ZSwgUHJvcHM+XG4gICAgXG4+e1xuXG4gICAgJHRhZ05hbWUgOiBzdHJpbmcgPSAnJztcblxuICAgIHN0YXRlIDogeyBbUyBpbiBrZXlvZiBTdGF0ZV0gOiBTdGF0ZVtTXSB9O1xuXG4gICAgcHJvcHMgOiB7IFtQIGluIGtleW9mIFByb3BzXSA6IFByb3BzW1BdIH07XG5cbiAgICBtZXRob2RzIDogeyBbTSBpbiBrZXlvZiBNZXRob2RzXSA6IE1ldGhvZHNbTV0gfSA9IHt9IGFzIHsgW00gaW4ga2V5b2YgTWV0aG9kc10gOiBNZXRob2RzW01dIH07XG5cbiAgICAkb3B0aW9ucyA6IFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz4gPSB7fSBhcyBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+XG4gICAgXG4gICAgJGVtaXR0ZXI/IDogU2Vuc2VuRW1pdHRlcjtcblxuICAgICRrbGFzcz8gOiBDdXN0b21FbGVtZW50Q29uc3RydWN0b3I7XG4gICAgXG4gICAgaXNSZWFkeTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAjaHlkcmF0ZXM/IDogQ29tcG9uZW50SHlkcmF0ZXM8U3RhdGUsIFByb3BzLCBNZXRob2RzPjtcbiAgICBcbiAgICAjbXV0YXRpb25PYnNlcnZlcj8gOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gICAgI211dGF0aW9uT2JzZXJ2ZWQ/IDogTXV0YXRpb25SZWNvcmRbXTtcblxuXG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG5cblxuICAgICNwZW5kaW5nOiBudW1iZXIgPSAwO1xuXG4gICAgI2NvbXBsZXRlZDogbnVtYmVyID0gMDtcbiAgICBcblxuXG4gICAgLyoqXG4gICAgICogTmV3IENvbnN0cnVjdFxuICAgICAqL1xuICAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUQ29tcG9uZW50T3B0aW9uczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+KXtcblxuICAgICAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgICB0aGlzLnN0YXRlID0gKHRoaXMuJG9wdGlvbnMuc3RhdGV8fHt9KSBhcyBTdGF0ZVxuXG4gICAgICAgIHRoaXMucHJvcHMgPSAodGhpcy4kb3B0aW9ucy5wcm9wc3x8e30pIGFzIFByb3BzXG5cbiAgICAgICAgdGhpcy5tZXRob2RzID0gKHRoaXMuJG9wdGlvbnMubWV0aG9kc3x8e30pIGFzIE1ldGhvZHNcblxuICAgICAgICB0aGlzLiRlbWl0dGVyID0gbmV3IFNlbnNlbkVtaXR0ZXIoKTtcblxuICAgICAgICB0aGlzLiNoeWRyYXRlcyA9IG5ldyBDb21wb25lbnRIeWRyYXRlczxTdGF0ZSwgUHJvcHMsIE1ldGhvZHM+KHRoaXMpXG5cblxuICAgICAgICB0aGlzXG4gICAgICAgICBcbiAgICAgICAgICAgIC4jY2Ftb3VmbGFnZSgpXG5cbiAgICAgICAgICAgIC4kZW1pdHRpbmcoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuJGluaXRpYWxpemUoKVxuXG4gICAgICAgICAgICAuJHRlbXBsYXRlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudGhlbih0cGw9PntcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodHBsKXtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0cGw7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LmlubmVySFRNTCA9IHRwbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuJG9ic2VydmVycygpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC4kY29tcGlsYXRlKClcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIDtcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG4gICAgLyoqXG4gICAgICogc2V0IFRlbXBsYXRlXG4gICAgICovXG4gICAgJHRlbXBsYXRlKCl7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4oKHJlc29sdmUsIHJlamVjdCk9PntcblxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdDb21wb25lbnQgdGVtcGxhdGUnLCB0aGlzLiRvcHRpb25zLnRlbXBsYXRlKVxuXG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLiRvcHRpb25zLnRlbXBsYXRlICE9ICdzdHJpbmcnKXtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAgICAgICAgICAgICBpZignaW5uZXJIVE1MJyBpbiB0aGlzLiRvcHRpb25zLmVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuJG9wdGlvbnMuZWxlbWVudC5pbm5lckhUTUwpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVjayA9IHRoaXMuJG9wdGlvbnMudGVtcGxhdGUubWF0Y2goLzxcXC8/W14+XSs+L2dpKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJywgY2hlY2spXG4gICAgXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiBUZW1wbGF0ZSBpcyBTdHJpbmcgSFRNTCBjb2RlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYoY2hlY2speyByZXNvbHZlKHRoaXMuJG9wdGlvbnMudGVtcGxhdGUpOyByZXR1cm47IH1cblxuXG5cbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBFbHNlLCBpdCdzIGZpbGUgcGF0aFxuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IGAkeyB1cmwub3JpZ2luIH0keyAodXJsLnBhdGhuYW1lID09ICcvJykgPyAnJyA6IHVybC5wYXRobmFtZSB9LyR7IHRoaXMuJG9wdGlvbnMudGVtcGxhdGUgfWBcblxuXG4gICAgICAgICAgICAgICAgZmV0Y2gocGF0aCkudGhlbihkPT57IGlmKGQuc3RhdHVzID09IDQwNCl7IHJldHVybiB1bmRlZmluZWQgfSByZXR1cm4gZC50ZXh0KCkgfSlcblxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDaGVja3VwJywgZGF0YSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgcmVzb2x2ZSh1bmRlZmluZWQpOyB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXI9PnsgcmVzb2x2ZSh1bmRlZmluZWQpOyB9KVxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgXG5cblxuXG4gICAgLyoqXG4gICAgICogQ2Ftb3VmbGFnZVxuICAgICAqL1xuICAgICNjYW1vdWZsYWdlKCl7XG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPHR5cGVvZiB0aGlzPignc3RhcnQnLCAoKT0+e1xuXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPHR5cGVvZiB0aGlzPigncmVhZHknLCAoKT0+e1xuXG4gICAgICAgICAgICBpZih0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cblxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZVxuICAgICAqL1xuXG4gICAgJGluaXRpYWxpemUoKXtcblxuICAgICAgICB0aGlzLiRpbml0aWFsaXplRWxlbWVudCgpO1xuXG4gICAgICAgIC8vIGlmKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAvLyAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnc3RhcnQnLCB0aGlzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgXG4gICAgfVxuXG5cblxuICAgICRpbml0aWFsaXplRWxlbWVudChwcm9wcz86IFRDb21wb25lbnRPcHRpb25zPFN0YXRlLCBQcm9wcywgTWV0aG9kcz4pe1xuXG4gICAgICAgIGNvbnN0ICRwcm9wcyA9IHByb3BzIHx8IHRoaXMuJG9wdGlvbnMgfHwgbnVsbDtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuXG4gICAgICAgIGlmKCRwcm9wcyl7XG5cbiAgICAgICAgICAgIHRoaXMuJHRhZ05hbWUgPSBgc24tJHsgJHByb3BzLm5hbWUgfWBcblxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEZpbmQgY3VycmVudCBFbGVtZW50IHNlbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50KXtcblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLiRvcHRpb25zLmVsZW1lbnQgPT0gJ3N0cmluZycpe1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7IHRoaXMuJG9wdGlvbnMuZWxlbWVudCB9YCkgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRGVmaW5lIGN1c3RvbSBFbGVtZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKCFjdXN0b21FbGVtZW50cy5nZXQodGhpcy4kdGFnTmFtZSkpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4ka2xhc3MgPSBjbGFzcyBleHRlbmRzIFNlbnNlbkhUTUxFbGVtZW50PFByb3BzPntcblxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpe1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25zdHJ1Y3QnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgdGhpcy4ka2xhc3MucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrID0gKCk9PntcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb25uZWN0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuYWRvcHRlZENhbGxiYWNrID0gKCk9PntcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdhZG9wdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgdGhpcy4ka2xhc3MucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gKCk9PntcblxuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdkaXNjb25uZWN0ZWQnLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gKG5hbWU6IHN0cmluZywgdmFsdWU6c3RyaW5nLCBvbGRWYWx1ZTpzdHJpbmcpPT57XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnblByb3BzQ2hhbmdlZCcsIHsgbmFtZSwgdmFsdWUsIG9sZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLiRrbGFzcywgJ29ic2VydmVkQXR0cmlidXRlcycsIHtcblxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHNlbGYucHJvcHMgPT0gJ29iamVjdCcpID8gT2JqZWN0LmtleXMoc2VsZi5wcm9wcykgOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0aGlzLiR0YWdOYW1lLCB0aGlzLiRrbGFzcyApXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2lzJywgYCR7IHRoaXMuJHRhZ05hbWUgfWApXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoISh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpe1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHsgdGhpcy4kdGFnTmFtZSB9YClcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdlbGVtZW50UmVhZHknLCB0aGlzKTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICogRE9NIE9ic2VydmVyXG4gICAgICovXG4gICAgJG9ic2VydmVycygpe1xuXG5cbiAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiNtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHJlY29yZHMpPT57XG5cbiAgICAgICAgICAgICAgICBpZihyZWNvcmRzKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNtdXRhdGlvbk9ic2VydmVkID0gcmVjb3Jkc1xuXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChyZWNvcmQ9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVjb3JkLnR5cGUgPT0gJ2F0dHJpYnV0ZXMnKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlY29yZC5hdHRyaWJ1dGVOYW1lICYmIHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZWNvcmQuYXR0cmlidXRlTmFtZSBpbiB0aGlzLnByb3BzKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcmVjb3JkLmF0dHJpYnV0ZU5hbWUgYXMga2V5b2YgdHlwZW9mIHRoaXMucHJvcHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLiRvcHRpb25zLmVsZW1lbnQuZ2V0QXR0cmlidXRlKHJlY29yZC5hdHRyaWJ1dGVOYW1lKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzWyBrZXkgXSA9IHZhbHVlXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ3Byb3BzQ2hhbmdlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZWNvcmQuYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogcmVjb3JkLm9sZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25PYnNlcnZlZCcsIHJlY29yZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ211dGF0aW9uc09ic2VydmVkJywgcmVjb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgdGhpcy4jbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuJG9wdGlvbnMuZWxlbWVudCx7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG5cbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogT2JqZWN0LmtleXModGhpcy5wcm9wcylcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25PYnNlcnZhdGlvblJlYWR5JywgdGhpcy4jbXV0YXRpb25PYnNlcnZlcik7XG5cbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cblxuXG5cblxuXG4gICAgaHlkcmF0ZXNTdGF0ZShzbG90OiBrZXlvZiBTdGF0ZSl7XG5cbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0aGlzLiNoeWRyYXRlcz8uJHN0YXRlLnJldHJpZXZlKCBzbG90IClcblxuICAgICAgICBcbiAgICAgICAgaWYoc3RvcmU/Lmxlbmd0aCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHN0b3JlLm1hcChyZWNvcmQ9PntcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiNoeWRyYXRlcz8uaHlkcmF0ZXNSZWNvcmQocmVjb3JkKVxuXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKT0+e1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdzdGF0ZUh5ZHJhdGVkJywge3JlY29yZCwgZGF0YX0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIENvbXBpbGF0ZSB0cmFuc2FjdGlvbnNcbiAgICAgKi9cbiAgICAkY29tcGlsYXRlKCl7XG5cbiAgICAgICAgaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgICAgICBGaW5kRXhwcmVzc2lvbnModGhpcy4kb3B0aW9ucy5lbGVtZW50LCAocmVjb3JkKT0+e1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jcGVuZGluZysrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEZpbmQgU3RhdGUgdG8gYXV0by1jb21waWxhdGVcbiAgICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLnN0YXRlID09ICdvYmplY3QnKXtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlY29yZC5tb2NrdXA/LnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzTWF0Y2hlcyA9IFtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHZhbHVlfHwnJykubWF0Y2hBbGwobmV3IFJlZ0V4cChgKCR7IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmpvaW4oJ3wnKSB9KWAsICdnJykpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGB0aGlzXFxcXC5zdGF0ZVxcXFwuKCR7IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmpvaW4oJyl8dGhpc1xcXFwuc3RhdGVcXFxcLignKSB9KWAsICdnJykpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGB0aGlzXFxcXC5wcm9wc1xcXFwuJHsgT2JqZWN0LmtleXModGhpcy5wcm9wcykuam9pbignfHRoaXNcXFxcLnByb3BzXFxcXC4nKSB9YCwgJ2cnKSksXG4gICAgICAgICAgICAgICAgICAgIF1cblxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHNNYXRjaGVzLmxlbmd0aCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNNYXRjaGVzLm1hcChtYXRjaD0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCByZWNvcmQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwdXJnZSA9IG1hdGNoLmZpbHRlcih2PT52IT11bmRlZmluZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gcHVyZ2VbMV0gYXMga2V5b2YgU3RhdGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJnZS5pbnB1dCA9IG1hdGNoLmlucHV0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRDbG9uZS5tYXRjaCA9IHB1cmdlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jaHlkcmF0ZXM/LiRzdGF0ZS5wdXNoKHNsb3QsIHJlY29yZENsb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnZXhwcmVzc2lvbkRldGVjdGVkJywgcmVjb3JkKTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29tcGlsYXRpb25SZWFkeScsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICBcbiAgICB9XG5cblxuXG5cblxuXG4gICAgI2NoZWNrQ29tcGlsYXRlZERvbmUobG90OiAoRXhwcmVzc2lvblJlY29yZCB8IHVuZGVmaW5lZClbXSl7XG5cbiAgICAgICAgaWYodGhpcy4jcGVuZGluZyA9PSB0aGlzLiNjb21wbGV0ZWQpe1xuICAgIFxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2NvbXBpbGF0ZWQnLCBsb3QpO1xuXG4gICAgICAgICAgICBpZighdGhpcy5pc1JlYWR5KXsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZWFkeScsIHRoaXMpO1xuICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcGlsYXRlIERvbmUnLCBsb3QpXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG5cblxuXG5cblxuICAgIC8qKlxuICAgICAqIEVtaXR0aW5nXG4gICAgICovXG4gICAgJGVtaXR0aW5nKCl7XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwgOiBCZWdpblxuICAgICAgICAgKi9cblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48dHlwZW9mIHRoaXM+KCdlbGVtZW50UmVhZHknLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDcmVhdGUgRWxlbWVudCBNb2RlbCcsIGFyZ3MpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwgOiBFbmRcbiAgICAgICAgICovXG5cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXRhdGlvbnMgT2JzZXJ2ZXJzIDogQmVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPE11dGF0aW9uT2JzZXJ2ZXI+KCdtdXRhdGlvbk9ic2VydmF0aW9uUmVhZHknLCAoYXJncyk9PntcblxuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbiBPYnNlcnZlZCcsIGFyZ3MpXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW48TXV0YXRpb25SZWNvcmQ+KCdtdXRhdGlvbk9ic2VydmVkJywgKGFyZ3MpPT57XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTXV0YXRpb24gT2JzZXJ2ZWQnLCBhcmdzKVxuXG4gICAgICAgICAgICBpZihhcmdzLmVtaXQudGFyZ2V0KXtcblxuICAgICAgICAgICAgICAgIHRoaXMuI2h5ZHJhdGVzPy5oeWRyYXRlc05vZGUoYXJncy5lbWl0LnRhcmdldClcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oJ211dGF0aW9uc09ic2VydmVkJywgKGFyZ3MpPT57XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignTXV0YXRpb25zIE9ic2VydmVkJywgYXJncylcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXRhdGlvbnMgT2JzZXJ2ZXJzIDogRW5kXG4gICAgICAgICAqL1xuXG5cblxuXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlIFJlY29yZCA6IEJlZ2luXG4gICAgICAgICAqL1xuXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbjxFeHByZXNzaW9uUmVjb3JkPignZXhwcmVzc2lvbkRldGVjdGVkJywgKCQpPT57XG5cbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VkOiAoUHJvbWlzZTxFeHByZXNzaW9uUmVjb3JkPiB8IHVuZGVmaW5lZClbXSA9IFtdXG5cblxuICAgICAgICAgICAgaWYoJC5lbWl0KXtcblxuICAgICAgICAgICAgICAgIGlmKCQuZW1pdC50eXBlID09ICdlY2hvJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChDb21waWxhdGVFY2hvKHRoaXMsICQuZW1pdCkpXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZigkLmVtaXQudHlwZSA9PSAnc25hcGNvZGUnKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZVNuYXBDb2RlKHRoaXMsICQuZW1pdCkpXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZigkLmVtaXQudHlwZSA9PSAnYXR0cmlidXRlLmVjaG8nKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZUVjaG9BdHRyaWJ1dGVzKHRoaXMsICQuZW1pdCkpXG4gICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZigkLmVtaXQudHlwZSA9PSAnYXR0cmlidXRlLnNuYXBjb2RlJyl7XG5cbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChDb21waWxhdGVTbmFwQ29kZUF0dHJpYnV0ZXModGhpcywgJC5lbWl0KSlcbiAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCQuZW1pdC50eXBlID09ICdkaXJlY3RpdmUnKXtcblxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZTxFeHByZXNzaW9uUmVjb3JkPigocixqKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISgnZGlyZWN0aXZlJyBpbiAkLmVtaXQpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgKGBDb3JydXB0ZWQgZGlyZWN0aXZlIDogbm90IGZvdW5kYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mICQuZW1pdC5kaXJlY3RpdmU/Lm1haW4gIT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChgQ29ycnVwdGVkIGRpcmVjdGl2ZSA6IDwgJHsgJC5lbWl0LmRpcmVjdGl2ZT8ubmFtZSB9ID5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5lbWl0LmRpcmVjdGl2ZS5tYWluKHRoaXMsICQuZW1pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIoJC5lbWl0KVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBpZihwcm9taXNlZC5sZW5ndGgpe1xuXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obG90PT57XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jY29tcGxldGVkKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignQ29tcGlsYXRlZCcsIGxvdClcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jY2hlY2tDb21waWxhdGVkRG9uZShsb3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuPHR5cGVvZiB0aGlzPignY29tcGlsYXRlJywgKGFyZ3MpPT57XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignRXhwcmVzc2lvbiBSZWNvcmRlZCcsIGFyZ3MuZW1pdClcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbXBpbGF0ZSBSZWNvcmQgOiBFbmRcbiAgICAgICAgICovXG5cblxuXG5cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gRW1pdHRlciBMaXN0ZW5lciA6IEJlZ2luXG4gICAgICAgICAqL1xuXG4gICAgICAgIGlmKHRoaXMuJG9wdGlvbnMuZW1pdCl7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuJG9wdGlvbnMuZW1pdCkubWFwKGU9PntcblxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlWzFdID09ICdmdW5jdGlvbicpe1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbihlWzBdLCBmdW5jdGlvbigpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgZVsxXS5hcHBseSh0aGlzLCBbYXJndW1lbnRzWzBdXSkgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VzdG9tIEVtaXR0ZXIgTGlzdGVuZXIgOiBFbmRcbiAgICAgICAgICovXG5cblxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICBcblxuXG59XG5cblxuXG5cblxuLyoqXG4gKiBFeHBvcnRhdGlvbnNcbiAqL1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vuc2VuIHtcblxuICAgIHN0YXRpYyBDb21wb25lbnQgPSBDb21wb25lbnQ7XG5cbiAgICBzdGF0aWMgU2NyZWVuID0gU2Vuc2VuU2NyZWVuO1xuICAgIFxufVxuXG5cbiJdfQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1EQUFtRCxnQ0FBZ0M7QUFDbkY7Ozs7Ozs7Ozs7O0FDbExBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi9jb21waWxhdGUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL3NlbnNlbi1jb3JlLy4vbGliL2RpcmVjdGl2ZS5uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS8uL2xpYi9leGVtcGxlLmpzIiwid2VicGFjazovL3NlbnNlbi1jb3JlLy4vbGliL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvaHlkcmF0ZXMuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9saWIvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3NlbnNlbi1jb3JlLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2Vqc0AzLjEuNi9ub2RlX21vZHVsZXMvZWpzL2xpYi9lanMuanMiLCJ3ZWJwYWNrOi8vc2Vuc2VuLWNvcmUvLi9ub2RlX21vZHVsZXMvLnBucG0vZWpzQDMuMS42L25vZGVfbW9kdWxlcy9lanMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL3NlbnNlbi1jb3JlL2lnbm9yZWR8L1VzZXJzL2lhbmNhcnRlci9Xb3Jrcy9kZXZlbG9wbWVudHMvZ2l0L25wbS9zZW5zZW4tanV0c3Uvbm9kZV9tb2R1bGVzLy5wbnBtL2Vqc0AzLjEuNi9ub2RlX21vZHVsZXMvZWpzL2xpYnxmcyIsIndlYnBhY2s6Ly9zZW5zZW4tY29yZS9pZ25vcmVkfC9Vc2Vycy9pYW5jYXJ0ZXIvV29ya3MvZGV2ZWxvcG1lbnRzL2dpdC9ucG0vc2Vuc2VuLWp1dHN1L25vZGVfbW9kdWxlcy8ucG5wbS9lanNAMy4xLjYvbm9kZV9tb2R1bGVzL2Vqcy9saWJ8cGF0aCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeURldHIsIFN5bnRheEVjaG8gfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdlanMnO1xuaW1wb3J0IHsgU3RhYmlsaXplQ29udGVudCB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuLyoqXG4gKiBGcmFnbWVudCByZW5kZXJpbmcgZnJvbSBTdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFJlbmRlckVuZ2luZShpbnB1dCwgY29udGV4dCwgZGljdGlvbmFyeSkge1xuICAgIHJldHVybiByZW5kZXIoYCR7aW5wdXR9YCwgZGljdGlvbmFyeSwge1xuICAgICAgICBkZWxpbWl0ZXI6IGAke1N5RGV0cn1gLFxuICAgICAgICAvLyBjbGllbnQ6IHRydWUsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAvLyBpbmNsdWRlcjogKG9yaWdpbmFsLCBwYXJzZWQpPT57XG4gICAgICAgIC8vICAgICByZXR1cm4ge1xuICAgICAgICAvLyAgICAgICAgIGZpbGVuYW1lOicnLFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignQ29tcGlsYXRlIEVycm9yLy8vLycsIGVycik7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlRWNobyhjb21wb25lbnQsIHJlY29yZCkge1xuICAgIGlmICghcmVjb3JkLmVjaG8pIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmF3ID0gKHJlY29yZC5tYXRjaCkgPyByZWNvcmQubWF0Y2hbMF0gOiAnJztcbiAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9ICgocmVjb3JkLm1hdGNoKSA/IHJlY29yZC5tYXRjaFsxXSA6ICcnKS50cmltKCk7XG4gICAgICAgIGxldCBtb2NrdXAgPSByZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmVzXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gWy4uLm1vY2t1cC5tYXRjaEFsbChTeW50YXhFY2hvKV07XG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbWF0Y2hlcy5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgbW9ja3VwID0gbW9ja3VwLnJlcGxhY2UobmV3IFJlZ0V4cCgobVswXSkucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJyksICdnJyksIGA8JHtTeURldHJ9PSR7bVsxXX0gJHtTeURldHJ9PmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgUmVuZGVyRW5naW5lKChcbiAgICAgICAgLy8gbW9ja3VwLnJlcGxhY2UobmV3IFJlZ0V4cChyYXcsICdnJyksIGA8JHtTeURldHJ9PSR7IGV4cHJlc3Npb24gfSAke1N5RGV0cn0+YCApXG4gICAgICAgIG1vY2t1cC5yZXBsYWNlKG5ldyBSZWdFeHAoKHJhdykucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJyksICdnJyksIGA8JHtTeURldHJ9PSR7ZXhwcmVzc2lvbn0gJHtTeURldHJ9PmApKSwgY29tcG9uZW50LCBjb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZWNvcmQubm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLm5vZGUuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVjb3JkLm5vZGUgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLm5vZGUudGV4dENvbnRlbnQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG4gICAgICAgIH0pLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKTtcbiAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0ZVNuYXBDb2RlKGNvbXBvbmVudCwgcmVjb3JkKSB7XG4gICAgaWYgKCFyZWNvcmQuc25hcGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgbW9ja3VwID0gKHJlY29yZC5tb2NrdXA/LmlubmVySFRNTCB8fCByZWNvcmQubW9ja3VwPy50ZXh0Q29udGVudCB8fCAnJyk7XG4gICAgICAgIG1vY2t1cCA9IFN0YWJpbGl6ZUNvbnRlbnQobW9ja3VwKTtcbiAgICAgICAgcmVjb3JkLnNuYXBjb2RlPy5tYXAoc25hcCA9PiB7XG4gICAgICAgICAgICBzbmFwLm1hdGNoZXMubWFwKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgICBtb2NrdXAgPSBtb2NrdXAucmVwbGFjZShuZXcgUmVnRXhwKChtYXRjaFswXSkucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJyksICdnJyksIGA8JHtTeURldHJ9JHttYXRjaFsxXX0gJHtTeURldHJ9PmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBSZW5kZXJFbmdpbmUobW9ja3VwLCBjb21wb25lbnQsIGNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5ub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWNvcmQubm9kZSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZWNvcmQubm9kZS50ZXh0Q29udGVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKTtcbiAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xuICAgICAgICAgICAgQ29tcGlsYXRlRXJyb3JFeGNlcHRpb24oZXIpO1xuICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gQ29tcGlsYXRlU25hcENvZGVBdHRyaWJ1dGVzKGNvbXBvbmVudCwgcmVjb3JkKSB7XG4gICAgaWYgKCFyZWNvcmQuYXR0cmlidXRlICYmIHJlY29yZC50eXBlID09ICdhdHRyaWJ1dGUuc25hcGNvZGUnKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSByZWNvcmQuYXR0cmlidXRlPy5uYW1lO1xuICAgICAgICBsZXQgbW9ja3VwID0gKHJlY29yZC5tb2NrdXA/LnRleHRDb250ZW50IHx8ICcnKTtcbiAgICAgICAgaWYgKHJlY29yZC5tYXRjaCkge1xuICAgICAgICAgICAgbW9ja3VwID0gbW9ja3VwLnJlcGxhY2UobmV3IFJlZ0V4cCgocmVjb3JkLm1hdGNoWzBdIHx8ICcnKS5yZXBsYWNlKC9bXlxcd1xcc10vZ2ksICdcXFxcJCYnKSwgJ2cnKSwgYDwke1N5RGV0cn0ke3JlY29yZC5tYXRjaFsxXX0gJHtTeURldHJ9PmApO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlckVuZ2luZShtb2NrdXAsIGNvbXBvbmVudCwgY29tcG9uZW50LnN0YXRlKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoJ2F0dHJpYnV0ZXMnIGluIHJlY29yZC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLm5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG4gICAgICAgIH0pLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKTtcbiAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGF0ZUVjaG9BdHRyaWJ1dGVzKGNvbXBvbmVudCwgcmVjb3JkKSB7XG4gICAgaWYgKCFyZWNvcmQuYXR0cmlidXRlICYmIHJlY29yZC50eXBlID09ICdhdHRyaWJ1dGUuZWNobycpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHJlY29yZC5hdHRyaWJ1dGU/Lm5hbWU7XG4gICAgICAgIGxldCBtb2NrdXAgPSAocmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQgfHwgJycpO1xuICAgICAgICBpZiAocmVjb3JkLm1hdGNoKSB7XG4gICAgICAgICAgICBtb2NrdXAgPSBtb2NrdXAucmVwbGFjZShuZXcgUmVnRXhwKChyZWNvcmQubWF0Y2hbMF0gfHwgJycpLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJ1xcXFwkJicpLCAnZycpLCBgPCR7U3lEZXRyfT0ke3JlY29yZC5tYXRjaFsxXX0gJHtTeURldHJ9PmApO1xuICAgICAgICB9XG4gICAgICAgIFJlbmRlckVuZ2luZShtb2NrdXAsIGNvbXBvbmVudCwgY29tcG9uZW50LnN0YXRlKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAoJ2F0dHJpYnV0ZXMnIGluIHJlY29yZC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgcmVjb3JkLm5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHJlY29yZCk7XG4gICAgICAgIH0pLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKTtcbiAgICAgICAgICAgIHJlamVjdChlcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHbHNZWFJsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2WTI5eVpTOWpiMjF3YVd4aGRHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUTBFc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNUVUZCVFN4alFVRmpMRU5CUVVNN1FVRkZiRVFzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRXRCUVVzc1EwRkJRenRCUVVNM1FpeFBRVUZQTEVWQlFVVXNaMEpCUVdkQ0xFVkJRVVVzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZKTDBNN08wZEJSVWM3UVVGRFNDeE5RVUZOTEZWQlFWVXNXVUZCV1N4RFFWRXhRaXhMUVVGaExFVkJRVVVzVDBGQk1rSXNSVUZCUlN4VlFVRnJRenRKUVVVMVJTeFBRVUZQTEUxQlFVMHNRMEZCUXl4SFFVRkpMRXRCUVUwc1JVRkJSU3hGUVVGRkxGVkJRVlVzUlVGQlJUdFJRVVZ3UXl4VFFVRlRMRVZCUVVVc1IwRkJTU3hOUVVGUExFVkJRVVU3VVVGRmVFSXNaMEpCUVdkQ08xRkJSV2hDTEU5QlFVOHNSVUZCUlN4UFFVRlBPMUZCUldoQ0xFdEJRVXNzUlVGQlJTeEpRVUZKTzFGQlJWZ3NhME5CUVd0RE8xRkJSV3hETEdWQlFXVTdVVUZEWml4MVFrRkJkVUk3VVVGRGRrSXNVVUZCVVR0UlFVVlNMRWxCUVVrN1MwRkZVQ3hEUVVGRExFTkJRVUU3UVVGRlRpeERRVUZETzBGQlNVUXNUVUZCVFN4VlFVRlZMSFZDUVVGMVFpeERRVUZETEVkQlFWRTdTVUZGTlVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hIUVVGSExFTkJRVVVzUTBGQlFUdEJRVVU1UXl4RFFVRkRPMEZCVFVRc1RVRkJUU3hWUVVGVkxHRkJRV0VzUTBGUk0wSXNVMEZCTmtJc1JVRkJSU3hOUVVGM1FqdEpRVVZ5UkN4SlFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlF6dFJRVUZGTEU5QlFVOHNVMEZCVXl4RFFVRkRPMHRCUVVNN1NVRkZjRU1zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCWjBJc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZETEVWQlFVVTdVVUZGYWtRc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dFJRVVZzUkN4TlFVRk5MRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0UlFVVnNSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1NVRkJTU3hGUVVGRkxFTkJRVU03VVVGSE9VTTdPMWRCUlVjN1VVRkZTQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlJXaEVMRWxCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlF6dFpRVVZrTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQkxFVkJRVVU3WjBKQlJWZ3NUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRMjVDTEVsQlFVa3NUVUZCVFN4RFFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJ5eEhRVUZITEVOQlFVVXNSVUZEZGtRc1NVRkJTU3hOUVVGTkxFbEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVOd1F5eERRVUZCTzFsQlJVd3NRMEZCUXl4RFFVRkRMRU5CUVVFN1UwRkZURHRSUVVkRU96dFhRVVZITzFGQlEwZ3NXVUZCV1N4RFFVRlZPMUZCUld4Q0xHbEdRVUZwUmp0UlFVVnFSaXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVU5XTEVsQlFVa3NUVUZCVFN4RFFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1JVRkJSeXhIUVVGSExFTkJRVVVzUlVGRGRFUXNTVUZCU1N4TlFVRk5MRWxCUVVzc1ZVRkJWeXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVU14UXl4RFFVVktMRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGQkxFVkJRVVU3V1VGRmVFTXNTVUZCUnl4TlFVRk5MRU5CUVVNc1NVRkJTU3haUVVGWkxGZEJRVmNzUlVGQlF6dG5Ra0ZGYkVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NUVUZCVFN4RFFVRkRPMkZCUld4RE8ybENRVVZKTEVsQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1dVRkJXU3hKUVVGSkxFVkJRVU03WjBKQlJXaERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEUxQlFVMHNRMEZCUVR0aFFVVnVRenRaUVVkRUxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0UlFVVnVRaXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkJMRVZCUVVVN1dVRkZWQ3gxUWtGQmRVSXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRVHRaUVVVelFpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFN1VVRkZaQ3hEUVVGRExFTkJRVU1zUTBGQlFUdEpRVVZPTEVOQlFVTXNRMEZCUXl4RFFVRkJPMEZCUjA0c1EwRkJRenRCUVUxRUxFMUJRVTBzVlVGQlZTeHBRa0ZCYVVJc1EwRlJMMElzVTBGQk5rSXNSVUZCUlN4TlFVRjNRanRKUVVkeVJDeEpRVUZITEVOQlFVTXNUVUZCVFN4RFFVRkRMRkZCUVZFc1JVRkJRenRSUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETzB0QlFVTTdTVUZGZUVNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlowSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRExFVkJRVVU3VVVGRmFrUXNZVUZCWVR0UlFVTmlMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRWxCUVVrc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeFhRVUZYTEVsQlFVa3NSVUZCUlN4RFFVRlhMRU5CUVVNN1VVRkhkRVlzVFVGQlRTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZCTzFGQlJXcERMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUVN4RlFVRkZPMWxCUlhaQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRU3hGUVVGRk8yZENRVVZ3UWl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlJTeEpRVUZKTEUxQlFVMHNRMEZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVc1RVRkJUU3hEUVVGRExFVkJRVWNzUjBGQlJ5eERRVUZGTEVWQlFVVXNTVUZCU1N4TlFVRk5MRWRCUVVrc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlJTeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkZMRU5CUVVFN1dVRkZhRWtzUTBGQlF5eERRVUZETEVOQlFVRTdVVUZGVGl4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVkR0xGbEJRVmtzUTBGQlF5eE5RVUZOTEVWQlFVVXNVMEZCVXl4RlFVRkZMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkJMRVZCUVVVN1dVRkZNVVFzU1VGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4WlFVRlpMRmRCUVZjc1JVRkJRenRuUWtGRmJFTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETzJGQlJXeERPMmxDUVVWSkxFbEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NXVUZCV1N4SlFVRkpMRVZCUVVNN1owSkJSV2hETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFMUJRVTBzUTBGQlF6dGhRVVZ3UXp0WlFVVkVMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdFJRVVZ1UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZCTEVWQlFVVTdXVUZGVkN4MVFrRkJkVUlzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUVR0WlFVVXpRaXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRTdVVUZGWkN4RFFVRkRMRU5CUVVNc1EwRkJRVHRKUVVWT0xFTkJRVU1zUTBGQlF5eERRVUZCTzBGQlIwNHNRMEZCUXp0QlFVMUVMRTFCUVUwc1ZVRkJWU3d5UWtGQk1rSXNRMEZSZWtNc1UwRkJOa0lzUlVGQlJTeE5RVUYzUWp0SlFVZHlSQ3hKUVVGSExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hKUVVGSkxHOUNRVUZ2UWl4RlFVRkRPMUZCUVVVc1QwRkJUeXhUUVVGVExFTkJRVU03UzBGQlF6dEpRVVZvUml4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGblFpeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVNc1JVRkJSVHRSUVVWcVJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRV01zUTBGQlFUdFJRVVUzUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVWQlFVVXNWMEZCVnl4SlFVRkpMRVZCUVVVc1EwRkJWeXhEUVVGRE8xRkJSVEZFTEVsQlFVY3NUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJRenRaUVVWYUxFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkZMRWxCUVVrc1RVRkJUU3hEUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZMRTFCUVUwc1EwRkJReXhGUVVGSExFZEJRVWNzUTBGQlJTeEZRVUZGTEVsQlFVa3NUVUZCVFN4SFFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZGTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVVc1EwRkJRVHRUUVVWcVNqdFJRVVZFTEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGQkxFVkJRVVU3V1VGRk1VUXNTVUZCUnl4WlFVRlpMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUlVGQlF6dG5Ra0ZGTTBJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJSVEZETzFsQlJVUXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGQk8xRkJSVzVDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVUVzUlVGQlJUdFpRVVZVTEhWQ1FVRjFRaXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZCTzFsQlJUTkNMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlFUdFJRVVZrTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUlU0c1EwRkJReXhEUVVGRExFTkJRVUU3UVVGSFRpeERRVUZETzBGQlRVUXNUVUZCVFN4VlFVRlZMSFZDUVVGMVFpeERRVkZ5UXl4VFFVRTJRaXhGUVVGRkxFMUJRWGRDTzBsQlIzSkVMRWxCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRWxCUVVrc1owSkJRV2RDTEVWQlFVTTdVVUZCUlN4UFFVRlBMRk5CUVZNc1EwRkJRenRMUVVGRE8wbEJSVFZGTEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUXl4RlFVRkZPMUZCUldwRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJZeXhEUVVGQk8xRkJSVGRETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeFhRVUZYTEVsQlFVa3NSVUZCUlN4RFFVRlhMRU5CUVVNN1VVRkZNVVFzU1VGQlJ5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkRPMWxCUlZvc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVVXNTVUZCU1N4TlFVRk5MRU5CUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVjc1IwRkJSeXhEUVVGRkxFVkJRVVVzU1VGQlNTeE5RVUZOTEVsQlFVc3NUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVVVzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUlN4RFFVRkJPMU5CUld4S08xRkJSVVFzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4VFFVRlRMRVZCUVVVc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVFc1JVRkJSVHRaUVVVeFJDeEpRVUZITEZsQlFWa3NTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hGUVVGRE8yZENRVVV6UWl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkZNVU03V1VGRlJDeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVFN1VVRkZia0lzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRU3hGUVVGRk8xbEJSVlFzZFVKQlFYVkNMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVUU3V1VGRk0wSXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGQk8xRkJSV1FzUTBGQlF5eERRVUZETEVOQlFVRTdTVUZGVGl4RFFVRkRMRU5CUVVNc1EwRkJRVHRCUVVkT0xFTkJRVU1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCRGIyMXdiMjVsYm5RZ2ZTQm1jbTl0SUZ3aUxsd2lPMXh1YVcxd2IzSjBJSHNnVTNsRVpYUnlMQ0JUZVc1MFlYaEZZMmh2SUgwZ1puSnZiU0JjSWk0dlpYaHdjbVZ6YzJsdmJsd2lPMXh1YVcxd2IzSjBJSFI1Y0dVZ2V5QkRiMjF3YjI1bGJuUk5aWFJvYjJSU1lYY3NJRU52YlhCdmJtVnVkRkJ5YjNCekxDQkRiMjF3YjI1bGJuUlRkR0YwWlN3Z1JYaHdjbVZ6YzJsdmJsSmxZMjl5WkNCOUlHWnliMjBnWENJdUwybHVaR1Y0TG5SY0lqdGNibWx0Y0c5eWRDQjdJSEpsYm1SbGNpQjlJR1p5YjIwZ0oyVnFjeWM3WEc1cGJYQnZjblFnZXlCVGRHRmlhV3hwZW1WRGIyNTBaVzUwSUgwZ1puSnZiU0JjSWk0dmRYUnBiR2wwYVdWelhDSTdYRzVjYmx4dVhHNHZLaXBjYmlBcUlFWnlZV2R0Wlc1MElISmxibVJsY21sdVp5Qm1jbTl0SUZOMGNtbHVaMXh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1VtVnVaR1Z5Ulc1bmFXNWxQRnh1WEc0Z0lDQWdVeUJsZUhSbGJtUnpJRU52YlhCdmJtVnVkRk4wWVhSbExDQmNiaUFnSUNCY2JpQWdJQ0JRSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVUhKdmNITXNYRzRnSUNBZ1hHNGdJQ0FnVFNCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZEUxbGRHaHZaRkpoZHp4VExDQlFQbHh1SUNBZ0lGeHVQaWhwYm5CMWREb2djM1J5YVc1bkxDQmpiMjUwWlhoME9pQkRiMjF3YjI1bGJuUThVeXdnVUN3Z1RUNHNJR1JwWTNScGIyNWhjbms2SUhzZ1cwczZJSE4wY21sdVoxMGdPaUJoYm5rZ0lIMGdLWHRjYmlBZ0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUhKbGJtUmxjaWhnSkhzZ2FXNXdkWFFnZldBc0lHUnBZM1JwYjI1aGNua3NJSHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdSbGJHbHRhWFJsY2pvZ1lDUjdJRk41UkdWMGNpQjlZQ3hjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUM4dklHTnNhV1Z1ZERvZ2RISjFaU3hjYmx4dUlDQWdJQ0FnSUNCamIyNTBaWGgwT2lCamIyNTBaWGgwTEZ4dVhHNGdJQ0FnSUNBZ0lHRnplVzVqT2lCMGNuVmxMRnh1WEc0Z0lDQWdJQ0FnSUM4dklHbHVZMngxWkdWeU9pQW9iM0pwWjJsdVlXd3NJSEJoY25ObFpDazlQbnRjYmx4dUlDQWdJQ0FnSUNBdkx5QWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnTHk4Z0lDQWdJQ0FnSUNCbWFXeGxibUZ0WlRvbkp5eGNiaUFnSUNBZ0lDQWdMeThnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCOVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgwcFhHNWNibjFjYmx4dVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQkRiMjF3YVd4aGRHVkZjbkp2Y2tWNFkyVndkR2x2YmlobGNuSTZJR0Z1ZVNsN1hHNWNiaUFnSUNCamIyNXpiMnhsTG1WeWNtOXlLQ2REYjIxd2FXeGhkR1VnUlhKeWIzSXZMeTh2Snl3Z1pYSnlJQ2xjYmx4dWZWeHVYRzVjYmx4dVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQkRiMjF3YVd4aGRHVkZZMmh2UEZ4dVhHNGdJQ0FnVXlCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZEZOMFlYUmxMQ0JjYmlBZ0lDQmNiaUFnSUNCUUlHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MFVISnZjSE1zWEc0Z0lDQWdYRzRnSUNBZ1RTQmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRFMWxkR2h2WkZKaGR6eFRMQ0JRUGx4dUlDQWdJRnh1UGloamIyMXdiMjVsYm5RNklFTnZiWEJ2Ym1WdWREeFRMQ0JRTENCTlBpd2djbVZqYjNKa09pQkZlSEJ5WlhOemFXOXVVbVZqYjNKa0tYdGNibHh1SUNBZ0lHbG1LQ0Z5WldOdmNtUXVaV05vYnlsN0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN2ZWeHVJQ0FnSUZ4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaVHgwZVhCbGIyWWdjbVZqYjNKa1BpZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtUMCtlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEpoZHlBOUlDaHlaV052Y21RdWJXRjBZMmdwSUQ4Z2NtVmpiM0prTG0xaGRHTm9XekJkSURvZ0p5YzdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JqYjI1emRDQmxlSEJ5WlhOemFXOXVJRDBnS0NoeVpXTnZjbVF1YldGMFkyZ3BJRDhnY21WamIzSmtMbTFoZEdOb1d6RmRJRG9nSnljcExuUnlhVzBvS1R0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHeGxkQ0J0YjJOcmRYQWdQU0J5WldOdmNtUXViVzlqYTNWd1B5NTBaWGgwUTI5dWRHVnVkQ0I4ZkNBbkp6dGNibHh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJRY21Wd1lYSmxjMXh1SUNBZ0lDQWdJQ0FnS2k5Y2JseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6SUQwZ1d5NHVMbTF2WTJ0MWNDNXRZWFJqYUVGc2JDaFRlVzUwWVhoRlkyaHZLVjFjYmx4dUlDQWdJQ0FnSUNCcFppaHRZWFJqYUdWekxteGxibWQwYUNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGRHTm9aWE11YldGd0tHMDlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxdlkydDFjQ0E5SUcxdlkydDFjQzV5WlhCc1lXTmxLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dVbVZuUlhod0tDQW9iVnN3WFNrdWNtVndiR0ZqWlNndlcxNWNYSGRjWEhOZEwyZHBMQ0FuWEZ4Y1hDUW1KeWtnTENBblp5Y2dLU3dnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHQThKSHRUZVVSbGRISjlQU1I3SUcxYk1WMGdmU0FrZTFONVJHVjBjbjArWUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSDFjYmx4dVhHNGdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnS2lCU1pXNWtaWEpwYm1kY2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJRkpsYm1SbGNrVnVaMmx1WlR4VExDQlFMQ0JOUGlnb1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHMXZZMnQxY0M1eVpYQnNZV05sS0c1bGR5QlNaV2RGZUhBb2NtRjNMQ0FuWnljcExDQmdQQ1I3VTNsRVpYUnlmVDBrZXlCbGVIQnlaWE56YVc5dUlIMGdKSHRUZVVSbGRISjlQbUFnS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J0YjJOcmRYQXVjbVZ3YkdGalpTZ2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzSUZKbFowVjRjQ2dnS0hKaGR5a3VjbVZ3YkdGalpTZ3ZXMTVjWEhkY1hITmRMMmRwTENBblhGeGNYQ1FtSnlrZ0xDQW5aeWNnS1N3Z1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lEd2tlMU41UkdWMGNuMDlKSHNnWlhod2NtVnpjMmx2YmlCOUlDUjdVM2xFWlhSeWZUNWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0tTQmNibHh1SUNBZ0lDQWdJQ0FwTENCamIyMXdiMjVsYm5Rc0lHTnZiWEJ2Ym1WdWRDNXpkR0YwWlNrdWRHaGxiaWh5WlhOMWJIUTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvY21WamIzSmtMbTV2WkdVZ2FXNXpkR0Z1WTJWdlppQklWRTFNUld4bGJXVnVkQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVF1Ym05a1pTNXBibTVsY2toVVRVd2dQU0J5WlhOMWJIUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmloeVpXTnZjbVF1Ym05a1pTQnBibk4wWVc1alpXOW1JRTV2WkdVcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa0xtNXZaR1V1ZEdWNGRFTnZiblJsYm5RZ1BTQnlaWE4xYkhSY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvY21WamIzSmtLVnh1WEc0Z0lDQWdJQ0FnSUgwcExtTmhkR05vS0dWeVBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lFTnZiWEJwYkdGMFpVVnljbTl5UlhoalpYQjBhVzl1S0dWeUtWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXcGxZM1FvWlhJcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlNsY2JpQWdJQ0JjYmlBZ0lDQmNibjFjYmx4dVhHNWNibHh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnUTI5dGNHbHNZWFJsVTI1aGNFTnZaR1U4WEc1Y2JpQWdJQ0JUSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVTNSaGRHVXNJRnh1SUNBZ0lGeHVJQ0FnSUZBZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5SUWNtOXdjeXhjYmlBZ0lDQmNiaUFnSUNCTklHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MFRXVjBhRzlrVW1GM1BGTXNJRkErWEc0Z0lDQWdYRzQrS0dOdmJYQnZibVZ1ZERvZ1EyOXRjRzl1Wlc1MFBGTXNJRkFzSUUwK0xDQnlaV052Y21RNklFVjRjSEpsYzNOcGIyNVNaV052Y21RcGUxeHVYRzVjYmlBZ0lDQnBaaWdoY21WamIzSmtMbk51WVhCamIyUmxLWHNnY21WMGRYSnVJSFZ1WkdWbWFXNWxaRHQ5WEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObFBIUjVjR1Z2WmlCeVpXTnZjbVErS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdMeThnUUhSekxXbG5ibTl5WlZ4dUlDQWdJQ0FnSUNCc1pYUWdiVzlqYTNWd0lEMGdLSEpsWTI5eVpDNXRiMk5yZFhBL0xtbHVibVZ5U0ZSTlRDQjhmQ0J5WldOdmNtUXViVzlqYTNWd1B5NTBaWGgwUTI5dWRHVnVkQ0I4ZkNBbkp5a2dZWE1nYzNSeWFXNW5PMXh1WEc1Y2JpQWdJQ0FnSUNBZ2JXOWphM1Z3SUQwZ1UzUmhZbWxzYVhwbFEyOXVkR1Z1ZENodGIyTnJkWEFwWEc1Y2JpQWdJQ0FnSUNBZ2NtVmpiM0prTG5OdVlYQmpiMlJsUHk1dFlYQW9jMjVoY0QwK2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCemJtRndMbTFoZEdOb1pYTXViV0Z3S0cxaGRHTm9QVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdGIyTnJkWEFnUFNCdGIyTnJkWEF1Y21Wd2JHRmpaU2dnYm1WM0lGSmxaMFY0Y0NnZ0tHMWhkR05vV3pCZEtTNXlaWEJzWVdObEtDOWJYbHhjZDF4Y2MxMHZaMmtzSUNkY1hGeGNKQ1luS1NBc0lDZG5KeUFwTENCZ1BDUjdVM2xFWlhSeWZTUjdJRzFoZEdOb1d6RmRJSDBnSkh0VGVVUmxkSEo5UG1BZ0tTQmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOUtWeHVYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JTWlc1a1pYSkZibWRwYm1Vb2JXOWphM1Z3TENCamIyMXdiMjVsYm5Rc0lHTnZiWEJ2Ym1WdWRDNXpkR0YwWlNrdWRHaGxiaWh5WlhOMWJIUTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvY21WamIzSmtMbTV2WkdVZ2FXNXpkR0Z1WTJWdlppQklWRTFNUld4bGJXVnVkQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpXTnZjbVF1Ym05a1pTNXBibTVsY2toVVRVd2dQU0J5WlhOMWJIUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmloeVpXTnZjbVF1Ym05a1pTQnBibk4wWVc1alpXOW1JRTV2WkdVcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZqYjNKa0xtNXZaR1V1ZEdWNGRFTnZiblJsYm5RZ1BTQnlaWE4xYkhRN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2h5WldOdmNtUXBYRzVjYmlBZ0lDQWdJQ0FnZlNrdVkyRjBZMmdvWlhJOVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1EyOXRjR2xzWVhSbFJYSnliM0pGZUdObGNIUnBiMjRvWlhJcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGFtVmpkQ2hsY2lsY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5S1Z4dUlDQWdJRnh1SUNBZ0lGeHVmVnh1WEc1Y2JseHVYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJEYjIxd2FXeGhkR1ZUYm1Gd1EyOWtaVUYwZEhKcFluVjBaWE04WEc1Y2JpQWdJQ0JUSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVTNSaGRHVXNJRnh1SUNBZ0lGeHVJQ0FnSUZBZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5SUWNtOXdjeXhjYmlBZ0lDQmNiaUFnSUNCTklHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MFRXVjBhRzlrVW1GM1BGTXNJRkErWEc0Z0lDQWdYRzQrS0dOdmJYQnZibVZ1ZERvZ1EyOXRjRzl1Wlc1MFBGTXNJRkFzSUUwK0xDQnlaV052Y21RNklFVjRjSEpsYzNOcGIyNVNaV052Y21RcGUxeHVYRzVjYmlBZ0lDQnBaaWdoY21WamIzSmtMbUYwZEhKcFluVjBaU0FtSmlCeVpXTnZjbVF1ZEhsd1pTQTlQU0FuWVhSMGNtbGlkWFJsTG5OdVlYQmpiMlJsSnlsN0lISmxkSFZ5YmlCMWJtUmxabWx1WldRN2ZWeHVJQ0FnSUZ4dUlDQWdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaVHgwZVhCbGIyWWdjbVZqYjNKa1BpZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtUMCtlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzVoYldVZ1BTQnlaV052Y21RdVlYUjBjbWxpZFhSbFB5NXVZVzFsSUdGeklITjBjbWx1WjF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0J0YjJOcmRYQWdQU0FvY21WamIzSmtMbTF2WTJ0MWNEOHVkR1Y0ZEVOdmJuUmxiblFnZkh3Z0p5Y3BJR0Z6SUhOMGNtbHVaenRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUtISmxZMjl5WkM1dFlYUmphQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRzF2WTJ0MWNDQTlJRzF2WTJ0MWNDNXlaWEJzWVdObEtDQnVaWGNnVW1WblJYaHdLQ0FvY21WamIzSmtMbTFoZEdOb1d6QmRmSHduSnlrdWNtVndiR0ZqWlNndlcxNWNYSGRjWEhOZEwyZHBMQ0FuWEZ4Y1hDUW1KeWtnTENBblp5Y2dLU3dnWUR3a2UxTjVSR1YwY24wa2V5QnlaV052Y21RdWJXRjBZMmhiTVYwZ2ZTQWtlMU41UkdWMGNuMCtZQ0FwSUZ4dVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JTWlc1a1pYSkZibWRwYm1Vb2JXOWphM1Z3TENCamIyMXdiMjVsYm5Rc0lHTnZiWEJ2Ym1WdWRDNXpkR0YwWlNrdWRHaGxiaWh5WlhOMWJIUTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvSjJGMGRISnBZblYwWlhNbklHbHVJSEpsWTI5eVpDNXViMlJsS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxZMjl5WkM1dWIyUmxMbk5sZEVGMGRISnBZblYwWlNodVlXMWxMQ0J5WlhOMWJIUXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2NtVmpiM0prS1Z4dVhHNGdJQ0FnSUNBZ0lIMHBMbU5oZEdOb0tHVnlQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJRU52YlhCcGJHRjBaVVZ5Y205eVJYaGpaWEIwYVc5dUtHVnlLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaV3BsWTNRb1pYSXBYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ2ZTbGNiaUFnSUNCY2JpQWdJQ0JjYm4xY2JseHVYRzVjYmx4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1EyOXRjR2xzWVhSbFJXTm9iMEYwZEhKcFluVjBaWE04WEc1Y2JpQWdJQ0JUSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVTNSaGRHVXNJRnh1SUNBZ0lGeHVJQ0FnSUZBZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5SUWNtOXdjeXhjYmlBZ0lDQmNiaUFnSUNCTklHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MFRXVjBhRzlrVW1GM1BGTXNJRkErWEc0Z0lDQWdYRzQrS0dOdmJYQnZibVZ1ZERvZ1EyOXRjRzl1Wlc1MFBGTXNJRkFzSUUwK0xDQnlaV052Y21RNklFVjRjSEpsYzNOcGIyNVNaV052Y21RcGUxeHVYRzVjYmlBZ0lDQnBaaWdoY21WamIzSmtMbUYwZEhKcFluVjBaU0FtSmlCeVpXTnZjbVF1ZEhsd1pTQTlQU0FuWVhSMGNtbGlkWFJsTG1WamFHOG5LWHNnY21WMGRYSnVJSFZ1WkdWbWFXNWxaRHQ5WEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObFBIUjVjR1Z2WmlCeVpXTnZjbVErS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JtRnRaU0E5SUhKbFkyOXlaQzVoZEhSeWFXSjFkR1UvTG01aGJXVWdZWE1nYzNSeWFXNW5YRzVjYmlBZ0lDQWdJQ0FnYkdWMElHMXZZMnQxY0NBOUlDaHlaV052Y21RdWJXOWphM1Z3UHk1MFpYaDBRMjl1ZEdWdWRDQjhmQ0FuSnlrZ1lYTWdjM1J5YVc1bk8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdhV1lvY21WamIzSmtMbTFoZEdOb0tYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXOWphM1Z3SUQwZ2JXOWphM1Z3TG5KbGNHeGhZMlVvSUc1bGR5QlNaV2RGZUhBb0lDaHlaV052Y21RdWJXRjBZMmhiTUYxOGZDY25LUzV5WlhCc1lXTmxLQzliWGx4Y2QxeGNjMTB2WjJrc0lDZGNYRnhjSkNZbktTQXNJQ2RuSnlBcExDQmdQQ1I3VTNsRVpYUnlmVDBrZXlCeVpXTnZjbVF1YldGMFkyaGJNVjBnZlNBa2UxTjVSR1YwY24wK1lDQXBJRnh1WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQlNaVzVrWlhKRmJtZHBibVVvYlc5amEzVndMQ0JqYjIxd2IyNWxiblFzSUdOdmJYQnZibVZ1ZEM1emRHRjBaU2t1ZEdobGJpaHlaWE4xYkhROVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9KMkYwZEhKcFluVjBaWE1uSUdsdUlISmxZMjl5WkM1dWIyUmxLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbFkyOXlaQzV1YjJSbExuTmxkRUYwZEhKcFluVjBaU2h1WVcxbExDQnlaWE4xYkhRcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGMyOXNkbVVvY21WamIzSmtLVnh1WEc0Z0lDQWdJQ0FnSUgwcExtTmhkR05vS0dWeVBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lFTnZiWEJwYkdGMFpVVnljbTl5UlhoalpYQjBhVzl1S0dWeUtWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXcGxZM1FvWlhJcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlNsY2JpQWdJQ0JjYmlBZ0lDQmNibjFjYmx4dVhHNWNibHh1WEc1Y2JpSmRmUT09IiwiZXhwb3J0IGNsYXNzIERpcmVjdGl2ZUF0dHJpYnV0ZXMge1xuICAgIHN0YXRpYyBEZWZpbmUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5BdmFpbGFibGVzW3N0YXRlLm5hbWVdID0gc3RhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgTWVyZ2UoLi4uZGlyZWN0aXZlcykge1xuICAgICAgICBkaXJlY3RpdmVzLm1hcChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZS5uYW1lIGluIHRoaXMuQXZhaWxhYmxlcykge1xuICAgICAgICAgICAgICAgIHRocm93IChgV0FSTklORyAke2RpcmVjdGl2ZS5uYW1lfSA6IFlvdSB3YW50IHRvIGNoYW5nZSB0aGUgYmVoYXZpb3Igb2YgYW4gZXhpc3RpbmcgYXR0cmlidXRlIGRpcmVjdGl2ZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5BdmFpbGFibGVzW2RpcmVjdGl2ZS5uYW1lXSA9IGRpcmVjdGl2ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzdGF0aWMgUmV0cml2ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuQXZhaWxhYmxlc1trZXldIHx8IG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBSZXRyaXZlcyhkaXJlY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuTWVyZ2UoZGlyZWN0aXZlKS5BdmFpbGFibGVzO1xuICAgIH1cbn1cbkRpcmVjdGl2ZUF0dHJpYnV0ZXMuQXZhaWxhYmxlcyA9IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWkdseVpXTjBhWFpsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2WTI5eVpTOWthWEpsWTNScGRtVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCSzBKRExFMUJRVTBzVDBGQlR5eHRRa0ZCYlVJN1NVRk5OMElzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRXdRanRSUVVWd1F5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkZMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVVVzUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZGY2tNc1QwRkJUeXhKUVVGSkxFTkJRVU03U1VGRmFFSXNRMEZCUXp0SlFVZEVMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eFZRVUZwUXp0UlFVVTNReXhWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUVN4RlFVRkZPMWxCUlhSQ0xFbEJRVWNzVTBGQlV5eERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRE8yZENRVVZxUXl4TlFVRk5MRU5CUVVNc1YwRkJXU3hUUVVGVExFTkJRVU1zU1VGQlN5eDFSVUZCZFVVc1EwRkJReXhEUVVGQk8yRkJSVGRITzFsQlJVUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkJPMUZCUlM5RExFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlJVWXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzUTBGQlF6dEpRVWRFTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJWenRSUVVWMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVVc1IwRkJSeXhEUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZCTzBsQlJYcERMRU5CUVVNN1NVRkhSQ3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEZOQlFUUkdPMUZCUlhoSExFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhWUVVGVkxFTkJRVUU3U1VGRk0wTXNRMEZCUXpzN1FVRXhRMDBzT0VKQlFWVXNSMEZCZVVJc1JVRkJNRUlzUTBGQlF5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRU52YlhCdmJtVnVkQ0I5SUdaeWIyMGdYQ0l1WENJN1hHNXBiWEJ2Y25RZ2V5QkRiMjF3YjI1bGJuUk5aWFJvYjJSU1lYY3NJRU52YlhCdmJtVnVkRkJ5YjNCekxDQkRiMjF3YjI1bGJuUlRkR0YwWlN3Z1JYaHdjbVZ6YzJsdmJsSmxZMjl5WkNCOUlHWnliMjBnWENJdUwybHVaR1Y0TG5SY0lqdGNibHh1THlvcVhHNGdLaUJFYVhKbFkzUnBkbVZ6WEc0Z0tpOWNibHh1WEc1bGVIQnZjblFnZEhsd1pTQlVSR2x5WldOMGFYWmxRWFIwY21saWRYUmxJRDBnZTF4dUlDQWdJRzVoYldVNklITjBjbWx1Wnp0Y2JpQWdJQ0JsZUhCeVpYTnphVzl1T2lCemRISnBibWNnZkNCdWRXeHNPMXh1SUNBZ0lHMWhhVzQ2SUR4Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lGTWdaWGgwWlc1a2N5QkRiMjF3YjI1bGJuUlRkR0YwWlN3Z1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQlFJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVSEp2Y0hNc1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUUwZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5STlpYUm9iMlJTWVhjOFV5d2dVRDVjYmx4dUlDQWdJRDRvWTI5dGNHOXVaVzUwT2lCRGIyMXdiMjVsYm5ROFV5d2dVQ3dnVFQ0c0lISmxZMjl5WkRvZ1JYaHdjbVZ6YzJsdmJsSmxZMjl5WkNrZ1BUNGdkbTlwWkR0Y2JseHVJQ0FnSUM4dklIQmhjbk5sY2o4NklEeFdQaWhoY21kek9pQjdmU2tnUFQ0Z2MzUnlhVzVuTzF4dVhHNTlYRzVjYm1WNGNHOXlkQ0IwZVhCbElGUkVhWEpsWTNScGRtVkJkSFJ5YVdKMWRHVnpJRDBnZTF4dUlDQWdJRnRMT2lCemRISnBibWRkT2lCVVJHbHlaV04wYVhabFFYUjBjbWxpZFhSbFhHNTlYRzVjYmx4dVhHNGdaWGh3YjNKMElHTnNZWE56SUVScGNtVmpkR2wyWlVGMGRISnBZblYwWlhON1hHNWNibHh1SUNBZ0lITjBZWFJwWXlCQmRtRnBiR0ZpYkdWek9pQlVSR2x5WldOMGFYWmxRWFIwY21saWRYUmxjeUE5SUh0OUlHRnpJRlJFYVhKbFkzUnBkbVZCZEhSeWFXSjFkR1Z6TzF4dVhHNWNiaUFnSUNCemRHRjBhV01nUkdWbWFXNWxLSE4wWVhSbE9pQlVSR2x5WldOMGFYWmxRWFIwY21saWRYUmxLWHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMa0YyWVdsc1lXSnNaWE5iSUhOMFlYUmxMbTVoYldVZ1hTQTlJSE4wWVhSbFhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dVhHNGdJQ0FnYzNSaGRHbGpJRTFsY21kbEtDNHVMbVJwY21WamRHbDJaWE02SUZSRWFYSmxZM1JwZG1WQmRIUnlhV0oxZEdWYlhTbDdYRzVjYmlBZ0lDQWdJQ0FnWkdseVpXTjBhWFpsY3k1dFlYQW9aR2x5WldOMGFYWmxQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0dScGNtVmpkR2wyWlM1dVlXMWxJR2x1SUhSb2FYTXVRWFpoYVd4aFlteGxjeWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dLR0JYUVZKT1NVNUhJQ1I3SUdScGNtVmpkR2wyWlM1dVlXMWxJSDBnT2lCWmIzVWdkMkZ1ZENCMGJ5QmphR0Z1WjJVZ2RHaGxJR0psYUdGMmFXOXlJRzltSUdGdUlHVjRhWE4wYVc1bklHRjBkSEpwWW5WMFpTQmthWEpsWTNScGRtVmdLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11UVhaaGFXeGhZbXhsYzF0a2FYSmxZM1JwZG1VdWJtRnRaVjBnUFNCa2FYSmxZM1JwZG1WY2JseHVJQ0FnSUNBZ0lDQjlLVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVYRzRnSUNBZ2ZWeHVYRzVjYmlBZ0lDQnpkR0YwYVdNZ1VtVjBjbWwyWlNoclpYazZJSE4wY21sdVp5bDdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVFYWmhhV3hoWW14bGMxc2dhMlY1SUYwZ2ZId2diblZzYkZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUhOMFlYUnBZeUJTWlhSeWFYWmxjeWhrYVhKbFkzUnBkbVU2SUZSRWFYSmxZM1JwZG1WQmRIUnlhV0oxZEdVZ0ppQlVSR2x5WldOMGFYWmxRWFIwY21saWRYUmxJQ1lnZEhsd1pXOW1JRVJwY21WamRHbDJaVUYwZEhKcFluVjBaWE11UVhaaGFXeGhZbXhsY3lsN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11VFdWeVoyVW9aR2x5WldOMGFYWmxLUzVCZG1GcGJHRmliR1Z6WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCY2JuMWNibHh1WEc0aVhYMD0iLCJpbXBvcnQgeyBDcmVhdGVDb21wb25lbnRNZXRob2RFdmVudCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBEaXJlY3RpdmVBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vZGlyZWN0aXZlXCI7XG4vKipcbiAqIERpcmVjdGl2ZSBDb25maWd1cmF0aW9uc1xuICovXG5EaXJlY3RpdmVBdHRyaWJ1dGVzLkRlZmluZSh7XG4gICAgbmFtZTogJ2FjdGlvbicsXG4gICAgZXhwcmVzc2lvbjogJ0AnLFxuICAgIG1haW46IChjb21wb25lbnQsIHJlY29yZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbCBEaXJlY3RpdmUnLCByZWNvcmQpO1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkuaXNBcnJheShyZWNvcmQuYXJndW1lbnRzKSA/IHJlY29yZC5hcmd1bWVudHMgOiBbXTtcbiAgICAgICAgcmVjb3JkLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcihgJHtyZWNvcmQubmFtZX1gLCAoZXYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYiA9ICgoJ2F0dHJpYnV0ZXMnIGluIHJlY29yZC5ub2RlKVxuICAgICAgICAgICAgICAgID8gcmVjb3JkLm5vZGUuZ2V0QXR0cmlidXRlKHJlY29yZC5tYXRjaD8uaW5wdXQgfHwgJycpXG4gICAgICAgICAgICAgICAgOiAnJyk/LnRyaW0oKTtcbiAgICAgICAgICAgIGlmIChhcmdzLmluZGV4T2YoJ3ByZXZlbnQnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmdzLmluZGV4T2YoJ3N0b3AnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdCBhdHRyaWIgPSB2YWx1ZSBhcyBrZXlvZiB0eXBlb2YgY29tcG9uZW50LnN0YXRlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVjayBDb21wb25lbnQgbWV0aG9kc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBpc01ldGhvZCA9IGF0dHJpYj8uaW5kZXhPZihgdGhpcy5tZXRob2RzLmApID09IDA7XG4gICAgICAgICAgICBjb25zdCBfZXZlbnQgPSBDcmVhdGVDb21wb25lbnRNZXRob2RFdmVudChjb21wb25lbnQsIGV2KTtcbiAgICAgICAgICAgIGlmIChpc01ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IGNvbXBvbmVudC5tZXRob2RzW2F0dHJpYi5zdWJzdHJpbmcoKGB0aGlzLm1ldGhvZHMuYCkubGVuZ3RoKV07XG4gICAgICAgICAgICAgICAgLyoqICogQ2hlY2sgaXMgdHJhbnNhY3Rpb24gZnVuY3Rpb24gKi9cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZC5hcHBseShjb21wb25lbnQuc3RhdGUsIFtfZXZlbnRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYiA9PSAnc3RyaW5nJyAmJiBhdHRyaWIgaW4gd2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm4gPSAod2luZG93W2F0dHJpYl0gfHwgKCgpID0+IHsgfSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuLmFwcGx5KHdpbmRvdywgW19ldmVudF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBhcmdzLmluZGV4T2YoJ2NhcHR1cmUnKSA+IC0xID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LFxuICAgIC8vIHBhcnNlcjogKHJlY29yZCk9Pnt9LFxufSk7XG5leHBvcnQgY29uc3QgTmF0aXZlRGlyZWN0aXZlQXR0cmlidXRlcyA9IERpcmVjdGl2ZUF0dHJpYnV0ZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laR2x5WldOMGFYWmxMbTVoZEdsMlpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwyTnZjbVV2WkdseVpXTjBhWFpsTG01aGRHbDJaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeFBRVUZQTEVWQlFVVXNNRUpCUVRCQ0xFVkJRVVVzVFVGQlRTeEhRVUZITEVOQlFVTTdRVUZETDBNc1QwRkJUeXhGUVVGRkxHMUNRVUZ0UWl4RlFVRkZMRTFCUVUwc1lVRkJZU3hEUVVGQk8wRkJTV3BFT3p0SFFVVkhPMEZCUlVnc2JVSkJRVzFDTEVOQlFVTXNUVUZCVFN4RFFVRkRPMGxCUlhaQ0xFbEJRVWtzUlVGQlF5eFJRVUZSTzBsQlJXSXNWVUZCVlN4RlFVRkRMRWRCUVVjN1NVRkZaQ3hKUVVGSkxFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNUVUZCVFN4RlFVRkRMRVZCUVVVN1VVRkZka0lzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUVR0UlFVVnlReXhOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzFGQlIzSkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRlRMRVZCUVVNc1JVRkJSVHRaUVVVeFJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4RFFVVllMRU5CUVVNc1dVRkJXU3hKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUlRkQ0xFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVc3NTVUZCUlN4RlFVRkZMRU5CUVVNN1owSkJSVzVFTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUlZBc1JVRkJSU3hKUVVGSkxFVkJRVVVzUTBGQlF6dFpRVVZXTEVsQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUXp0blFrRkJSU3hGUVVGRkxFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVRTdZVUZCUlR0WlFVVjJSQ3hKUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVU03WjBKQlFVVXNSVUZCUlN4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGQk8yRkJRVVU3V1VGRmNrUXNkMFJCUVhkRU8xbEJSM2hFT3p0bFFVVkhPMWxCUTBnc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRmRrUXNUVUZCVFN4TlFVRk5MRWRCUVVjc01FSkJRVEJDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGQk8xbEJTWGhFTEVsQlFVY3NVVUZCVVN4RlFVRkRPMmRDUVVWU0xFMUJRVTBzVFVGQlRTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRkxFTkJRVU03WjBKQlJTOUZMSE5EUVVGelF6dG5Ra0ZEZEVNc1NVRkJSeXhQUVVGUExFMUJRVTBzU1VGQlNTeFZRVUZWTEVWQlFVTTdiMEpCUlROQ0xFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVRTdhVUpCUlRGRE8yRkJSVW83YVVKQlJVYzdaMEpCUlVFc1NVRkJSeXhQUVVGUExFMUJRVTBzU1VGQlNTeFJRVUZSTEVsQlFVa3NUVUZCVFN4SlFVRkpMRTFCUVUwc1JVRkJRenR2UWtGRk4wTXNZVUZCWVR0dlFrRkRZaXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVVVzUlVGQlJTeEhRVUZETEVOQlFVTXNRMEZCUXl4RFFVRmhMRU5CUVVFN2IwSkJSVzVFTEVsQlFVY3NUMEZCVHl4RlFVRkZMRWxCUVVrc1ZVRkJWU3hGUVVGRE8zZENRVVYyUWl4RlFVRkZMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVFN2NVSkJSVGRDTzJsQ1FVVktPMkZCUlVvN1VVRk5UQ3hEUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlFUdEpRVVZ1UkN4RFFVRkRPMGxCUlVRc2QwSkJRWGRDTzBOQlJUTkNMRU5CUVVNc1EwRkJRVHRCUVVsR0xFMUJRVTBzUTBGQlF5eE5RVUZOTEhsQ1FVRjVRaXhIUVVGSExHMUNRVUZ0UWl4RFFVRkJJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnUTNKbFlYUmxRMjl0Y0c5dVpXNTBUV1YwYUc5a1JYWmxiblFnZlNCbWNtOXRJRndpTGx3aU8xeHVhVzF3YjNKMElIc2dSR2x5WldOMGFYWmxRWFIwY21saWRYUmxjeUI5SUdaeWIyMGdYQ0l1TDJScGNtVmpkR2wyWlZ3aVhHNWNibHh1WEc0dktpcGNiaUFxSUVScGNtVmpkR2wyWlNCRGIyNW1hV2QxY21GMGFXOXVjMXh1SUNvdlhHNWNia1JwY21WamRHbDJaVUYwZEhKcFluVjBaWE11UkdWbWFXNWxLSHRjYmx4dUlDQWdJRzVoYldVNkoyRmpkR2x2Ymljc1hHNGdJQ0FnWEc0Z0lDQWdaWGh3Y21WemMybHZiam9uUUNjc1hHNGdJQ0FnWEc0Z0lDQWdiV0ZwYmpvZ0tHTnZiWEJ2Ym1WdWRDd2djbVZqYjNKa0tUMCtlMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduUTJGc2JDQkVhWEpsWTNScGRtVW5MQ0J5WldOdmNtUXBYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZWEpuY3lBOUlFRnljbUY1TG1selFYSnlZWGtvY21WamIzSmtMbUZ5WjNWdFpXNTBjeWtnUHlCeVpXTnZjbVF1WVhKbmRXMWxiblJ6SURvZ1cxMDdYRzVjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdjbVZqYjNKa0xtNXZaR1V1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhnSkhzZ2NtVmpiM0prTG01aGJXVWdmV0FzSUNobGRqb2dSWFpsYm5RcFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGMGRISnBZaUE5SUNoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBb0oyRjBkSEpwWW5WMFpYTW5JR2x1SUhKbFkyOXlaQzV1YjJSbEtTQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQS9JSEpsWTI5eVpDNXViMlJsTG1kbGRFRjBkSEpwWW5WMFpTaHlaV052Y21RdWJXRjBZMmcvTG1sdWNIVjBmSHduSnlsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEb2dKeWRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdLVDh1ZEhKcGJTZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhoY21kekxtbHVaR1Y0VDJZb0ozQnlaWFpsYm5RbktTQStJQzB4S1hzZ1pYWXVjSEpsZG1WdWRFUmxabUYxYkhRb0tTQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LR0Z5WjNNdWFXNWtaWGhQWmlnbmMzUnZjQ2NwSUQ0Z0xURXBleUJsZGk1emRHOXdVSEp2Y0dGbllYUnBiMjRvS1NCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHTnZibk4wSUdGMGRISnBZaUE5SUhaaGJIVmxJR0Z6SUd0bGVXOW1JSFI1Y0dWdlppQmpiMjF3YjI1bGJuUXVjM1JoZEdVN1hHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkRhR1ZqYXlCRGIyMXdiMjVsYm5RZ2JXVjBhRzlrYzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcGMwMWxkR2h2WkNBOUlHRjBkSEpwWWo4dWFXNWtaWGhQWmloZ2RHaHBjeTV0WlhSb2IyUnpMbUFwSUQwOUlEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElGOWxkbVZ1ZENBOUlFTnlaV0YwWlVOdmJYQnZibVZ1ZEUxbGRHaHZaRVYyWlc1MEtHTnZiWEJ2Ym1WdWRDd2daWFlwWEc1Y2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaHBjMDFsZEdodlpDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRaWFJvYjJRZ1BTQmpiMjF3YjI1bGJuUXViV1YwYUc5a2Mxc2dZWFIwY21saUxuTjFZbk4wY21sdVp5Z29ZSFJvYVhNdWJXVjBhRzlrY3k1Z0tTNXNaVzVuZEdncElGMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xSUNvZ1EyaGxZMnNnYVhNZ2RISmhibk5oWTNScGIyNGdablZ1WTNScGIyNGdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnYldWMGFHOWtJRDA5SUNkbWRXNWpkR2x2YmljcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JXVjBhRzlrTG1Gd2NHeDVLR052YlhCdmJtVnVkQzV6ZEdGMFpTd2dXMTlsZG1WdWRGMHBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6Wlh0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFI1Y0dWdlppQmhkSFJ5YVdJZ1BUMGdKM04wY21sdVp5Y2dKaVlnWVhSMGNtbGlJR2x1SUhkcGJtUnZkeWw3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUUhSekxXbG5ibTl5WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCbWJpQTlJQ2gzYVc1a2IzZGJZWFIwY21saVhTQjhmQ0FvS0NrOVBudDlLU2tnWVhNZ1JuVnVZM1JwYjI1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnWm00Z1BUMGdKMloxYm1OMGFXOXVKeWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p1TG1Gd2NHeDVLSGRwYm1SdmR5d2dXMTlsZG1WdWRGMHBYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1WEc1Y2JpQWdJQ0FnSUNBZ2ZTd2dZWEpuY3k1cGJtUmxlRTltS0NkallYQjBkWEpsSnlrZ1BpQXRNU0EvSUhSeWRXVWdPaUJtWVd4elpTbGNibHh1SUNBZ0lIMHNYRzRnSUNBZ1hHNGdJQ0FnTHk4Z2NHRnljMlZ5T2lBb2NtVmpiM0prS1QwK2UzMHNYRzVjYm4wcFhHNWNibHh1WEc1bGVIQnZjblFnWTI5dWMzUWdUbUYwYVhabFJHbHlaV04wYVhabFFYUjBjbWxpZFhSbGN5QTlJRVJwY21WamRHbDJaVUYwZEhKcFluVjBaWE5jYmx4dUlsMTkiLCIvKipcbiAqIFR5cGVcbiAqL1xuLyoqXG4gKiBTZW5zZW4gRXZlbnQgRW1pdHRlciBSZXNwb25zZVxuICovXG5leHBvcnQgZnVuY3Rpb24gRW1pdHRlclJlc3BvbnNlKHR5cGUsIGVtaXQpIHtcbiAgICByZXR1cm4geyB0eXBlLCBlbWl0IH07XG59XG4vKipcbiAqIFNlbnNlbiBFdmVudCBFbWl0dGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5zZW5FbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBbXTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyXG4gICAgICovXG4gICAgbGlzdGVuKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyLmluZGV4T2YodHlwZSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJbdGhpcy5saXN0ZW5lci5sZW5ndGhdID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT0gJ3N0cmluZycgJiYgdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllc1t0eXBlXSA9IHRoaXMuZW50cmllc1t0eXBlXSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuZW50cmllc1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlclxuICAgICAqL1xuICAgIGRpc3BhdGNoKHR5cGUsIGFyZ3MsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBpZiAodGhpcy5kaXNwYXRjaGVyLmluZGV4T2YodHlwZSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlclt0aGlzLmRpc3BhdGNoZXIubGVuZ3RoXSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAodHlwZSBpbiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbnRyaWVzW3R5cGVdIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzW3R5cGVdLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5lZCA9IFNlbnNlbkVtaXR0ZXIucmVzb2x2ZURpc3BhdGNoZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc3RhdGljIHJlc29sdmVEaXNwYXRjaGVyKHsgaW5zdGFuY2UsIHR5cGUsIGFyZ3MsIGNhbGxiYWNrLCByZXNvbHZlLCByZWplY3QsIH0pIHtcbiAgICAgICAgY29uc3QgJGFyZ3MgPSB7XG4gICAgICAgICAgICBlbWl0OiBhcmdzLFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYXBwbGllZCA9IGNhbGxiYWNrLmFwcGx5KGluc3RhbmNlLCBbJGFyZ3NdKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb21pc2VcbiAgICAgICAgICovXG4gICAgICAgIGlmIChhcHBsaWVkIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFwcGxpZWQudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNvbHZlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShFbWl0dGVyUmVzcG9uc2UodHlwZSwgcmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVqZWN0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFwcGxpZWQgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBwbGllZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWlcxcGRIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMMk52Y21VdlpXMXBkSFJsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkZRVHM3UjBGRlJ6dEJRV2RFU0RzN1IwRkZSenRCUVVOSUxFMUJRVTBzVlVGQlZTeGxRVUZsTEVOQlFVa3NTVUZCV1N4RlFVRkZMRWxCUVZNN1NVRkZkRVFzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJRVHRCUVVWNlFpeERRVUZETzBGQlRVUTdPMGRCUlVjN1FVRkRSaXhOUVVGTkxFOUJRVThzWVVGQllUdEpRV2xDZGtJN1VVRkZTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnNRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVXNRMEZCUXp0UlFVVnVRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVWQlFVVXNRMEZCUXp0SlFVVjZRaXhEUVVGRE8wbEJUVVE3TzA5QlJVYzdTVUZEU0N4TlFVRk5MRU5CUVVrc1NVRkJkMElzUlVGQlJTeFJRVUZ0UXp0UlFVVnVSU3hKUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZETzFsQlJXcERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03VTBGRk9VTTdVVUZGUkN4SlFVRkhMRTlCUVU4c1NVRkJTU3hKUVVGSkxGRkJRVkVzU1VGQlNTeFBRVUZQTEZGQlFWRXNTVUZCU1N4VlFVRlZMRVZCUVVNN1dVRkZlRVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkZMRVZCUVVVc1EwRkJRenRaUVVVMVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0VFFVVnlRenRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETzBsQlJXaENMRU5CUVVNN1NVRk5SRHM3VDBGRlJ6dEpRVU5JTEZGQlFWRXNRMEZGU2l4SlFVRjNRaXhGUVVWNFFpeEpRVUZUTEVWQlJWUXNUMEZCYlVNc1JVRkZia01zVFVGQmNVUTdVVUZMY2tRc1NVRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUlVGQlF6dFpRVVZ1UXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8xTkJSV3hFTzFGQlIwUXNTVUZCUnl4UFFVRlBMRWxCUVVrc1NVRkJTU3hSUVVGUkxFVkJRVU03V1VGRmRrSXNTVUZCUnl4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlF6dG5Ra0ZGY0VJc1NVRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRXRCUVVzc1JVRkJRenR2UWtGRmJrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVNc1JVRkJSVHQzUWtGRk5VSXNTVUZCUnl4TFFVRkxMRmxCUVZrc1VVRkJVU3hGUVVGRE96UkNRVVY2UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExHRkJRV0VzUTBGQlF5eHBRa0ZCYVVJc1EwRkJTVHRuUTBGRkwwTXNVVUZCVVN4RlFVRkhMRWxCUVVrN1owTkJSV1lzU1VGQlNUdG5RMEZGU2l4UlFVRlJMRVZCUVVVc1MwRkJTenRuUTBGRlppeEpRVUZKTzJkRFFVVktMRTlCUVU4N1owTkJSVkFzVFVGQlRUczJRa0ZGVkN4RFFVRkRMRU5CUVVFN2VVSkJSVXc3YjBKQlJVd3NRMEZCUXl4RFFVRkRMRU5CUVVNN2FVSkJSVTQ3WVVGRlNqdFRRVVZLTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzUTBGQlF6dEpRVTFFTEUxQlFVMHNRMEZCUXl4cFFrRkJhVUlzUTBGQlNTeEZRVVY0UWl4UlFVRlJMRVZCUlZJc1NVRkJTU3hGUVVWS0xFbEJRVWtzUlVGRlNpeFJRVUZSTEVWQlJWSXNUMEZCVHl4RlFVVlFMRTFCUVUwc1IwRkZiVUk3VVVGRmVrSXNUVUZCVFN4TFFVRkxMRWRCUVN0Q08xbEJSWFJETEVsQlFVa3NSVUZCUlN4SlFVRkpPMWxCUlZZc1NVRkJTVHRUUVVWUUxFTkJRVUU3VVVGRlJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkhiRVE3TzFkQlJVYzdVVUZEU0N4SlFVRkhMRTlCUVU4c1dVRkJXU3hQUVVGUExFVkJRVU03V1VGRk1VSXNUMEZCVHl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlFTeEZRVUZGTzJkQ1FVVXhRaXhKUVVGSExFOUJRVThzVDBGQlR5eEpRVUZKTEZWQlFWVXNSVUZCUXp0dlFrRkZOVUlzVDBGQlR5eERRVUZGTEdWQlFXVXNRMEZCU1N4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVVVzUTBGQlFUdHBRa0ZGYUVRN1dVRkZUQ3hEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkJMRVZCUVVVN1owSkJSVllzU1VGQlJ5eFBRVUZQTEUxQlFVMHNTVUZCU1N4VlFVRlZMRVZCUVVNN2IwSkJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVGRk8xbEJSV3hFTEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUjA0N1lVRkZTU3hKUVVGSExFOUJRVThzVDBGQlR5eEpRVUZKTEZOQlFWTXNSVUZCUXp0WlFVVm9ReXhQUVVGUExFOUJRVThzUTBGQlF6dFRRVVZzUWp0aFFVVkhPMWxCUlVFc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGRlpqdEpRVVZNTEVOQlFVTTdRMEZOU2lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklseHVYRzR2S2lwY2JpQXFJRlI1Y0dWY2JpQXFMMXh1WEc1bGVIQnZjblFnZEhsd1pTQlRaVzV6Wlc1RmJXbDBkR1Z5Vkhsd1pTQTlJSE4wY21sdVoxeHVYRzVsZUhCdmNuUWdkSGx3WlNCVFpXNXpaVzVGYldsMGRHVnlRWEpuZFcxbGJuUnpQRlErSUQwZ2UxeHVJQ0FnSUZ4dUlDQWdJR1Z0YVhRNklGUTdYRzRnSUNBZ1hHNGdJQ0FnZEhsd1pTQTZJSE4wY21sdVp6dGNiaUFnSUNCY2JuMWNibHh1Wlhod2IzSjBJSFI1Y0dVZ1UyVnVjMlZ1UlcxcGRIUmxja05oYkd4aVlXTnJQRlErSUQwZ0tDaGhjbWM2SUZObGJuTmxia1Z0YVhSMFpYSkJjbWQxYldWdWRITThWRDRwSUQwK0lGQnliMjFwYzJVOElGUWdmQ0JUWlc1elpXNUZiV2wwZEdWeVFYSm5kVzFsYm5SelBGUStJRDRnZkNCaWIyOXNaV0Z1SUh3Z2RtOXBaQ2xjYmx4dVpYaHdiM0owSUhSNWNHVWdVMlZ1YzJWdVJXMXBkSFJsY2tWeWNtOXlJRDBnZTF4dUlDQWdJR052WkdVNklHNTFiV0psY2p0Y2JpQWdJQ0J0WlhOellXZGxPaUJ6ZEhKcGJtYzdYRzU5WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRk5sYm5ObGJrVnRhWFIwWlhKRmNuSnZja05oYkd4aVlXTnJJRDBnS0NoaGNtYzZJRk5sYm5ObGJrVnRhWFIwWlhKRmNuSnZjaWtnUFQ0Z2RtOXBaQ2xjYmx4dVpYaHdiM0owSUhSNWNHVWdVMlZ1YzJWdVJXMXBkSFJsY2tWdWRISnBaWE1nUFNCN1hHNWNiaUFnSUNCYlN6b2dVMlZ1YzJWdVJXMXBkSFJsY2xSNWNHVmRJRG9nVTJWdWMyVnVSVzFwZEhSbGNrTmhiR3hpWVdOclBHRnVlVDViWFNCY2JseHVmVnh1WEc1bGVIQnZjblFnZEhsd1pTQkZiV2wwZEdWeVJHbHpjR0YwWTJobGNsQnliM0J6UEZRK0lEMGdlMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQnBibk4wWVc1alpTQTZJRk5sYm5ObGJrVnRhWFIwWlhJc0lGeHVJQ0FnSUZ4dUlDQWdJSFI1Y0dVZ09pQlRaVzV6Wlc1RmJXbDBkR1Z5Vkhsd1pTd2dYRzRnSUNBZ1hHNGdJQ0FnWVhKbmN6b2dZVzU1TEZ4dUlDQWdJRnh1SUNBZ0lHTmhiR3hpWVdOck9pQlRaVzV6Wlc1RmJXbDBkR1Z5UTJGc2JHSmhZMnM4VkQ0c1hHNGdJQ0FnWEc0Z0lDQWdjbVZ6YjJ4MlpUOGdPaUJUWlc1elpXNUZiV2wwZEdWeVEyRnNiR0poWTJzOFZENHNYRzRnSUNBZ1hHNGdJQ0FnY21WcVpXTjBQeUE2SUNobGNuSWdPaUJUWlc1elpXNUZiV2wwZEdWeVJYSnliM0pEWVd4c1ltRmpheUFwSUQwK0lIWnZhV1FzWEc1Y2JuMWNibHh1WEc1Y2JseHVYRzVjYmk4cUtseHVJQ29nVTJWdWMyVnVJRVYyWlc1MElFVnRhWFIwWlhJZ1VtVnpjRzl1YzJWY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJRVZ0YVhSMFpYSlNaWE53YjI1elpUeFVQaWgwZVhCbE9pQnpkSEpwYm1jc0lHVnRhWFE2SUdGdWVTa2dPaUJUWlc1elpXNUZiV2wwZEdWeVFYSm5kVzFsYm5SelBGUStlMXh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dkSGx3WlN3Z1pXMXBkQ0I5WEc0Z0lDQWdYRzU5WEc1Y2JseHVYRzVjYmx4dUx5b3FYRzRnS2lCVFpXNXpaVzRnUlhabGJuUWdSVzFwZEhSbGNseHVJQ292WEc0Z1pYaHdiM0owSUdOc1lYTnpJRk5sYm5ObGJrVnRhWFIwWlhKN1hHNWNibHh1SUNBZ0lHVnVkSEpwWlhNNklGTmxibk5sYmtWdGFYUjBaWEpGYm5SeWFXVnpYRzVjYmlBZ0lDQnNhWE4wWlc1bGNqb2dVMlZ1YzJWdVJXMXBkSFJsY2xSNWNHVmJYVnh1WEc0Z0lDQWdaR2x6Y0dGMFkyaGxjam9nVTJWdWMyVnVSVzFwZEhSbGNsUjVjR1ZiWFZ4dVhHNWNiaUFnSUNCeVpYUjFjbTVsWkQ4NklHRnVlVnh1SUNBZ0lDQmNibHh1WEc1Y2JpQWdJQ0JjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJuUnlhV1Z6SUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXNhWE4wWlc1bGNpQTlJRnRkTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11WkdsemNHRjBZMmhsY2lBOUlGdGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnZlZ4dVhHNWNibHh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCTWFYTjBaVzVsY2x4dUlDQWdJQ0FxTDF4dUlDQWdJR3hwYzNSbGJqeFVQaWgwZVhCbElEb2dVMlZ1YzJWdVJXMXBkSFJsY2xSNWNHVXNJR05oYkd4aVlXTnJJRG9nVTJWdWMyVnVSVzFwZEhSbGNrTmhiR3hpWVdOclBGUStLWHRjYmx4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14cGMzUmxibVZ5TG1sdVpHVjRUMllvZEhsd1pTa2dQVDBnTFRFcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXhwYzNSbGJtVnlXM1JvYVhNdWJHbHpkR1Z1WlhJdWJHVnVaM1JvWFNBOUlIUjVjR1U3WEc1Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdhV1lvZEhsd1pXOW1JSFI1Y0dVZ1BUMGdKM04wY21sdVp5Y2dKaVlnZEhsd1pXOW1JR05oYkd4aVlXTnJJRDA5SUNkbWRXNWpkR2x2YmljcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ1ZEhKcFpYTmJkSGx3WlYwZ1BTQjBhR2x6TG1WdWRISnBaWE5iZEhsd1pWMThmRnRkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVkSEpwWlhOYmRIbHdaVjB1Y0hWemFDaGpZV3hzWW1GamF5azdYRzVjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmx4dVhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVJwYzNCaGRHTm9aWEpjYmlBZ0lDQWdLaTljYmlBZ0lDQmthWE53WVhSamFEeFVQaWhjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhSNWNHVWdPaUJUWlc1elpXNUZiV2wwZEdWeVZIbHdaU3hjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdGeVozTWdPaUI3ZlN3Z1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWE52YkhabFB5QTZJRk5sYm5ObGJrVnRhWFIwWlhKRFlXeHNZbUZqYXp4VVBpeGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsYW1WamREOGdPaUFvWlhKeUlEb2dVMlZ1YzJWdVJXMXBkSFJsY2tWeWNtOXlRMkZzYkdKaFkyc2dLU0E5UGlCMmIybGtYRzVjYmlBZ0lDQXBlMXh1SUNBZ0lDQWdJQ0JjYmx4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG1ScGMzQmhkR05vWlhJdWFXNWtaWGhQWmloMGVYQmxLU0E5UFNBdE1TbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WkdsemNHRjBZMmhsY2x0MGFHbHpMbVJwYzNCaGRHTm9aWEl1YkdWdVozUm9YU0E5SUhSNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2xtS0hSNWNHVnZaaUIwZVhCbElEMDlJQ2R6ZEhKcGJtY25LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RIbHdaU0JwYmlCMGFHbHpMbVZ1ZEhKcFpYTXBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVsYm5SeWFXVnpXM1I1Y0dWZElHbHVjM1JoYm1ObGIyWWdRWEp5WVhrcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzUwY21sbGMxdDBlWEJsWFM1dFlYQW9LR1Z1ZEhKNUtUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlobGJuUnllU0JwYm5OMFlXNWpaVzltSUVaMWJtTjBhVzl1S1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNtVjBkWEp1WldRZ1BTQlRaVzV6Wlc1RmJXbDBkR1Z5TG5KbGMyOXNkbVZFYVhOd1lYUmphR1Z5UEZRK0tIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsdWMzUmhibU5sSURvZ2RHaHBjeXdnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBlWEJsTENCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05oYkd4aVlXTnJPaUJsYm5SeWVTd2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGNtZHpMQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vc0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WcVpXTjBMRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNWNiaUFnSUNCOVhHNWNibHh1WEc1Y2JseHVJQ0FnSUhOMFlYUnBZeUJ5WlhOdmJIWmxSR2x6Y0dGMFkyaGxjanhVUGloN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnBibk4wWVc1alpTd2dYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0IwZVhCbExDQmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR0Z5WjNNc1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5eGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsYzI5c2RtVXNYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WldwbFkzUXNYRzVjYmlBZ0lDQjlJRG9nUlcxcGRIUmxja1JwYzNCaGRHTm9aWEpRY205d2N6eFVQaWw3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnSkdGeVozTWdPaUJUWlc1elpXNUZiV2wwZEdWeVFYSm5kVzFsYm5SelBGUStJRDBnZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JsYldsME9pQmhjbWR6TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxMRnh1WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaGNIQnNhV1ZrSUQwZ1kyRnNiR0poWTJzdVlYQndiSGtvYVc1emRHRnVZMlVzSUZza1lYSm5jMTBwTzF4dVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJRY205dGFYTmxYRzRnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCcFppaGhjSEJzYVdWa0lHbHVjM1JoYm1ObGIyWWdVSEp2YldselpTbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaGNIQnNhV1ZrTG5Sb1pXNG9jbVZ6Y0c5dWMyVTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCeVpYTnZiSFpsSUQwOUlDZG1kVzVqZEdsdmJpY3BleUJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9JRVZ0YVhSMFpYSlNaWE53YjI1elpUeFVQaWgwZVhCbExDQnlaWE53YjI1elpTa2dLU0JjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrdVkyRjBZMmdvWlhKeVBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnY21WcVpXTjBJRDA5SUNkbWRXNWpkR2x2YmljcGV5QnlaV3BsWTNRb1pYSnlLU0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHVnNjMlVnYVdZb2RIbHdaVzltSUdGd2NHeHBaV1FnUFQwZ0oySnZiMnhsWVc0bktYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGd2NHeHBaV1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdWc2MyVjdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ1hHNWNiaUFnSUNCY2JuMWNiaUpkZlE9PSIsImltcG9ydCBTZW5zZW4sIHsgU2Vuc2VuU2NyZWVuIH0gZnJvbSBcIi5cIjtcbmNvbnN0IHZtID0gbmV3IFNlbnNlbi5Db21wb25lbnQoe1xuICAgIG5hbWU6ICdyb290JyxcbiAgICBlbGVtZW50OiAnI2FwcCcsXG4gICAgdGVtcGxhdGU6ICdjb21wb25lbnRzL3Jvb3Quc24uaHRtbCcsXG4gICAgLy8gICAgIHRlbXBsYXRlOiBgXG4gICAgLy8gICAgIDwhRE9DVFlQRSBodG1sPlxuICAgIC8vIDxodG1sIGxhbmc9XCJlblwiPlxuICAgIC8vIDxoZWFkPlxuICAgIC8vICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cbiAgICAvLyAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCI+XG4gICAgLy8gICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgLy8gICAgIDx0aXRsZT5TZW5zZW4gSnV0c3U8L3RpdGxlPlxuICAgIC8vICAgICA8c3R5bGU+XG4gICAgLy8gICAgICAgICBmb3Jte1xuICAgIC8vICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAvLyAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgLyogc24tcm9vdCxbaXM9XCJzbi1yb290XCJde1xuICAgIC8vICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAvLyAgICAgICAgIH0gKi9cbiAgICAvLyAgICAgPC9zdHlsZT5cbiAgICAvLyA8L2hlYWQ+XG4gICAgLy8gPGJvZHk+XG4gICAgLy8gICAgIDxkaXYgaWQ9XCJhcHBcIiBhYmM9XCJzZGNkc2prYlwiPlxuICAgIC8vICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICAvLyAgICAgICAgIDxwPnt7IGVkaXRhYmxlID8gXCJPdWlcIiA6ICdOb24nIH19PC9wPlxuICAgIC8vICAgICAgICAgPHA+e3sgZWRpdGFibGUgfX08L3A+XG4gICAgLy8gICAgICAgICA8cD57eyBtZXNzYWdlIH19PC9wPlxuICAgIC8vICAgICAgICAge3sgdGhpcy5zdGF0ZS5jb3VudGVyIH19IC8ge3sgY291bnRlciB9fVxuICAgIC8vICAgICAgICAgPHA+eyU9SlNPTi5zdHJpbmdpZnkocGVyc29ucykgJX08L3A+XG4gICAgLy8gICAgICAgICA8cCBkYXRhLXNuYXBwZWQ9XCJ7JT10aGlzLnN0YXRlLnRpdGxlICV9XCI+XG4gICAgLy8gICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgQHN1Ym1pdC5wcmV2ZW50PVwidGhpcy5tZXRob2RzLmFkZFBlcnNvblwiIDpzdHlsZT1cIntkaXNwbGF5OiBlZGl0YWJsZSA/IG51bGwgOiAnbm9uZScgLCBvcGFjaXR5OiBlZGl0YWJsZX1cIiA+XG4gICAgLy8gICAgICAgICAgICAgICAgID57eyBmdWxsbmFtZS50cmltKCkgPyBmdWxsbmFtZS50cmltKCkgOiAnTm8gbmFtZSBlbnRyeScgfX08XG4gICAgLy8gICAgICAgICAgICAgICAgIDxicj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZ1bGxuYW1lXCIgQGlucHV0PVwidGhpcy5tZXRob2RzLnVwZGF0ZUZ1bGxuYW1lXCI+IFxuICAgIC8vICAgICAgICAgICAgICAgICA8YnV0dG9uPkVucmVnaXN0cmVyPC9idXR0b24+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxicj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPGgxIHRpdGxlPVwie3sgdGhpcy5wcm9wcy50aXRsZSB9fVwiPk1pcnJvcjwvaDE+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRpc2FibGVkIDp2YWx1ZT1cIm1lc3NhZ2VcIj5cbiAgICAvLyAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgLy8gICAgICAgICA8L3A+XG4gICAgLy8gICAgICAgICA8dWw+XG4gICAgLy8gICAgICAgICAgICAgeyUgcGVyc29ucy5mb3JFYWNoKChwZXJzb24pPT57ICV9XG4gICAgLy8gICAgICAgICAgICAgICAgIDxsaT57JT0gcGVyc29uICV9IGZyb20ge3sgY291bnRlciB9fTwvbGk+XG4gICAgLy8gICAgICAgICAgICAgeyUgfSkgJX1cbiAgICAvLyAgICAgICAgIDwvdWw+XG4gICAgLy8gICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRoaXMubWV0aG9kcy5pbmNyZW1lbnRcIj5HbyB0byBDb21pbmcgU29vbjwvYnV0dG9uPlxuICAgIC8vICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0ZXN0RnVuY3Rpb25cIj5UZXN0IEZ1bmN0aW9uPC9idXR0b24+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgICA8c2NyaXB0PlxuICAgIC8vICAgICAgICAgd2luZG93LnRlc3RGdW5jdGlvbiA9IGZ1bmN0aW9uKGV2KXtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Rlc3QgZnVuY3Rpb24gd29yaycsIGV2KVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICA8L3NjcmlwdD5cbiAgICAvLyA8L2JvZHk+XG4gICAgLy8gPC9odG1sPlxuICAgIC8vICAgICBgLFxuICAgIGVtaXQ6IHtcbiAgICAgICAgZXhwcmVzc2lvblJlY29yZGVkOiAocmVjb3JkKSA9PiB7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3RlZDogKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignQ29tcG9uZW50IGlzIENvbm5lY3RlZCcsIGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZTogJ2xvYWRpbmcuLi4nXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgZnVsbG5hbWU6ICdubyBkYXRhJyxcbiAgICAgICAgLy8gZnVsbG5hbWU6ICd7JT0obmV3IERhdGUoKSklfScsXG4gICAgICAgIHRpdGxlOiAnSGVsbG8gbGVzIGdlbnMnLFxuICAgICAgICBtZXNzYWdlOiAnTG9yZW0gaXBzdW0ge3sgY291bnRlciB9fScsXG4gICAgICAgIHJvdXRlOiAnY29taW5nc29vbicsXG4gICAgICAgIGNvdW50ZXI6IDEwLFxuICAgICAgICBwZXJzb25zOiBbXG4gICAgICAgICAgICAnWWFubicsXG4gICAgICAgICAgICAnQ2hyaXN0aW5hJyxcbiAgICAgICAgICAgICdNeWFuYScsXG4gICAgICAgICAgICAnU3lhbmEnXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUZ1bGxuYW1lKHsgc2VsZiwgZXZlbnQgfSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgc2VsZi5zdGF0ZS5mdWxsbmFtZSA9IGV2ZW50LnRhcmdldD8udmFsdWUgfHwgJyc7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFBlcnNvbih7IHNlbGYsIGV2ZW50IH0pIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZm9ybS5mdWxsbmFtZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIGZvcm0uZnVsbG5hbWUudmFsdWUgPSAoIGZvcm0uZnVsbG5hbWUudmFsdWUgKVxuICAgICAgICAgICAgICAgIHNlbGYuc3RhdGUucGVyc29ucy5wdXNoKGZvcm0uZnVsbG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGZvcm0uZnVsbG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBzZWxmLnN0YXRlLmZ1bGxuYW1lID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkUGVyc29uJyk7XG4gICAgICAgICAgICAvLyBzZWxmLnN0YXRlLnBlcnNvbnMucHVzaChgJHsgKG5ldyBEYXRlKCkpIH1gKVxuICAgICAgICB9LFxuICAgICAgICBpbmNyZW1lbnQoeyBzZWxmIH0pIHtcbiAgICAgICAgICAgIHNlbGYuc3RhdGUucGVyc29uc1sxXSA9IGBJYW5DYXJ0ZXIgTm93ICR7c2VsZi5zdGF0ZS5jb3VudGVyfSAvIHt7IGNvdW50ZXIgfX1gO1xuICAgICAgICAgICAgc2VsZi5zdGF0ZS5jb3VudGVyKys7XG4gICAgICAgICAgICBzZWxmLnN0YXRlLmVkaXRhYmxlID0gIXNlbGYuc3RhdGUuZWRpdGFibGU7XG4gICAgICAgICAgICBzZWxmLnN0YXRlLm1lc3NhZ2UgPSBgV2UgY291bnQgdG8gJHtzZWxmLnN0YXRlLmNvdW50ZXJ9YDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmNyZW1lbnQnLCBzZWxmLnN0YXRlLmNvdW50ZXIsIHNlbGYuc3RhdGUucGVyc29ucyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbmNvbnN0IEhvbWVTY3JlZW4gPSBuZXcgU2Vuc2VuU2NyZWVuKHtcbiAgICBuYW1lOiAnaG9tZScsXG4gICAgb3B0aW9uczoge30sXG4gICAgdGVtcGxhdGU6ICdzY3JlZW5zL2hvbWUuaHRtbCcsXG59KTtcbi8vIGNvbnNvbGUud2FybignVk0nLCB2bSlcbi8vIGNvbnN0IHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc24tcm9vdCcpXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvKVxuLy8gc2V0VGltZW91dCgoKT0+e1xuLy8gICAgIHJvLnNldEF0dHJpYnV0ZSgnaGVsbG8nLCAnd29ybGQnKVxuLy8gICAgIHJvLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnd29ybGQnKVxuLy8gfSwgMTAwMClcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYaGxiWEJzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDJOdmNtVXZaWGhsYlhCc1pTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4UFFVRlBMRTFCUVUwc1JVRkJSU3hGUVVGRkxGbEJRVmtzUlVGQlJTeE5RVUZOTEVkQlFVY3NRMEZCUXp0QlFVdDZReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEpRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkZOVUlzU1VGQlNTeEZRVUZGTEUxQlFVMDdTVUZGV2l4UFFVRlBMRVZCUVVVc1RVRkJUVHRKUVVkbUxGRkJRVkVzUlVGQlJTeDVRa0ZCZVVJN1NVRkZka01zYTBKQlFXdENPMGxCUTJ4Q0xITkNRVUZ6UWp0SlFVVjBRaXh0UWtGQmJVSTdTVUZGYmtJc1UwRkJVenRKUVVWVUxEWkNRVUUyUWp0SlFVVTNRaXcwUkVGQk5FUTdTVUZGTlVRc05rVkJRVFpGTzBsQlJUZEZMR3REUVVGclF6dEpRVWRzUXl4alFVRmpPMGxCUTJRc1owSkJRV2RDTzBsQlEyaENMRGhDUVVFNFFqdEpRVU01UWl3d1FrRkJNRUk3U1VGRE1VSXNjME5CUVhORE8wbEJRM1JETERaQ1FVRTJRanRKUVVNM1FpeFpRVUZaTzBsQlExb3NjVU5CUVhGRE8wbEJRM0pETEhsQ1FVRjVRanRKUVVONlFpeGxRVUZsTzBsQlEyWXNaVUZCWlR0SlFVZG1MRlZCUVZVN1NVRkZWaXhUUVVGVE8wbEJSMVFzYjBOQlFXOURPMGxCUlhCRExDdENRVUVyUWp0SlFVVXZRaXhuUkVGQlowUTdTVUZEYUVRc1owTkJRV2RETzBsQlJXaERMQ3RDUVVFclFqdEpRVVV2UWl4dFJFRkJiVVE3U1VGRmJrUXNLME5CUVN0RE8wbEJSUzlETEc5RVFVRnZSRHRKUVVkd1JDd3dTVUZCTUVrN1NVRkZNVWtzT0VWQlFUaEZPMGxCUlRsRkxIVkNRVUYxUWp0SlFVVjJRaXcwUmtGQk5FWTdTVUZGTlVZc0swTkJRU3RETzBsQlJTOURMSFZDUVVGMVFqdEpRVU4yUWl4cFJVRkJhVVU3U1VGRGFrVXNaMFZCUVdkRk8wbEJSV2hGTEhOQ1FVRnpRanRKUVVWMFFpeGxRVUZsTzBsQlIyWXNaVUZCWlR0SlFVVm1MR2RFUVVGblJEdEpRVVZvUkN3MFJFRkJORVE3U1VGRk5VUXNkVUpCUVhWQ08wbEJSWFpDTEdkQ1FVRm5RanRKUVVWb1FpdzJSVUZCTmtVN1NVRkZOMFVzSzBSQlFTdEVPMGxCUlM5RUxHRkJRV0U3U1VGSllpeGxRVUZsTzBsQlJXWXNPRU5CUVRoRE8wbEJSVGxETEhGRVFVRnhSRHRKUVVWeVJDeFpRVUZaTzBsQlJWb3NaMEpCUVdkQ08wbEJSMmhDTEZWQlFWVTdTVUZGVml4VlFVRlZPMGxCUlZZc1UwRkJVenRKUVVkTUxFbEJRVWtzUlVGQlF6dFJRVVZFTEd0Q1FVRnJRaXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZETEVWQlFVVTdVVUZGT1VJc1EwRkJRenRSUVVWRUxGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUXl4RlFVRkZPMWxCUlZvc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFJRVVUzUXl4RFFVRkRPMHRCUlVvN1NVRkpSQ3hMUVVGTExFVkJRVU03VVVGRlJpeExRVUZMTEVWQlFVVXNXVUZCV1R0TFFVVjBRanRKUVVsRUxFdEJRVXNzUlVGQlF6dFJRVVZHTEZGQlFWRXNSVUZCUlN4SlFVRkpPMUZCUldRc1VVRkJVU3hGUVVGRkxGTkJRVk03VVVGRGJrSXNhVU5CUVdsRE8xRkJSV3BETEV0QlFVc3NSVUZCUlN4blFrRkJaMEk3VVVGRmRrSXNUMEZCVHl4RlFVRkZMREpDUVVFeVFqdFJRVVZ3UXl4TFFVRkxMRVZCUVVVc1dVRkJXVHRSUVVWdVFpeFBRVUZQTEVWQlFVVXNSVUZCUlR0UlFVVllMRTlCUVU4c1JVRkJSVHRaUVVOTUxFMUJRVTA3V1VGRFRpeFhRVUZYTzFsQlExZ3NUMEZCVHp0WlFVTlFMRTlCUVU4N1UwRkRWanRMUVVWS08wbEJTVVFzVDBGQlR5eEZRVUZETzFGQlJVb3NZMEZCWXl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlF6dFpRVVY2UWl4aFFVRmhPMWxCUTJJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSU3hMUVVGTExFbEJRVVVzUlVGQlJTeERRVUZCTzFGQlJXcEVMRU5CUVVNN1VVRkZSQ3hUUVVGVExFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkRPMWxCUlhCQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRjVRaXhEUVVGRE8xbEJSVGRETEVsQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFVkJRVU03WjBKQlJXNUNMR2RFUVVGblJEdG5Ra0ZGYUVRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdaMEpCUlRWRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4SFFVRkhMRVZCUVVVc1EwRkJRVHRuUWtGRmVFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZCTzJGQlJUTkNPMWxCUlVRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUVR0WlFVVjRRaXdyUTBGQkswTTdVVUZGYmtRc1EwRkJRenRSUVVWRUxGTkJRVk1zUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlR0WlFVVmtMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMR2xDUVVGclFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVZFc2EwSkJRV3RDTEVOQlFVRTdXVUZGTDBVc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVVnlRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZGTzFsQlJUVkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEdWQlFXZENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlVTeEZRVUZGTEVOQlFVRTdXVUZGTVVRc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVVc1EwRkJRVHRSUVVWeVJTeERRVUZETzB0QlJVbzdRMEZIU2l4RFFVRkRMRU5CUVVFN1FVRk5SaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEZsQlFWa3NRMEZCUXp0SlFVVm9ReXhKUVVGSkxFVkJRVVVzVFVGQlRUdEpRVVZhTEU5QlFVOHNSVUZCUXl4RlFVVlFPMGxCUlVRc1VVRkJVU3hGUVVGRkxHMUNRVUZ0UWp0RFFVVm9ReXhEUVVGRExFTkJRVUU3UVVGTFJpeDVRa0ZCZVVJN1FVRkxla0lzSzBOQlFTdERPMEZCUlM5RExHZERRVUZuUXp0QlFVZG9ReXh0UWtGQmJVSTdRVUZGYmtJc2QwTkJRWGRETzBGQlEzaERMSGREUVVGM1F6dEJRVVY0UXl4WFFVRlhJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRk5sYm5ObGJpd2dleUJUWlc1elpXNVRZM0psWlc0Z2ZTQm1jbTl0SUZ3aUxsd2lPMXh1WEc1Y2JseHVJQ0FnSUZ4dVkyOXVjM1FnZG0wZ1BTQnVaWGNnVTJWdWMyVnVMa052YlhCdmJtVnVkQ2g3WEc1Y2JpQWdJQ0J1WVcxbE9pQW5jbTl2ZENjc1hHNWNiaUFnSUNCbGJHVnRaVzUwT2lBbkkyRndjQ2NzWEc1Y2JseHVJQ0FnSUhSbGJYQnNZWFJsT2lBblkyOXRjRzl1Wlc1MGN5OXliMjkwTG5OdUxtaDBiV3duTEZ4dUlDQWdJRnh1THk4Z0lDQWdJSFJsYlhCc1lYUmxPaUJnWEc0dkx5QWdJQ0FnUENGRVQwTlVXVkJGSUdoMGJXdytYRzVjYmk4dklEeG9kRzFzSUd4aGJtYzlYQ0psYmx3aVBseHVYRzR2THlBOGFHVmhaRDVjYmx4dUx5OGdJQ0FnSUR4dFpYUmhJR05vWVhKelpYUTlYQ0pWVkVZdE9Gd2lQbHh1WEc0dkx5QWdJQ0FnUEcxbGRHRWdhSFIwY0MxbGNYVnBkajFjSWxndFZVRXRRMjl0Y0dGMGFXSnNaVndpSUdOdmJuUmxiblE5WENKSlJUMWxaR2RsWENJK1hHNWNiaTh2SUNBZ0lDQThiV1YwWVNCdVlXMWxQVndpZG1sbGQzQnZjblJjSWlCamIyNTBaVzUwUFZ3aWQybGtkR2c5WkdWMmFXTmxMWGRwWkhSb0xDQnBibWwwYVdGc0xYTmpZV3hsUFRFdU1Gd2lQbHh1WEc0dkx5QWdJQ0FnUEhScGRHeGxQbE5sYm5ObGJpQktkWFJ6ZFR3dmRHbDBiR1UrWEc1Y2JseHVMeThnSUNBZ0lEeHpkSGxzWlQ1Y2JpOHZJQ0FnSUNBZ0lDQWdabTl5Ylh0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUdScGMzQnNZWGs2SUdKc2IyTnJPMXh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdiM0JoWTJsMGVUb2dNVHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVF0WTI5c2IzSTZJQ05sWldVN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNCd1lXUmthVzVuT2lBeGNtVnRPMXh1THk4Z0lDQWdJQ0FnSUNCOVhHNHZMeUFnSUNBZ0lDQWdJQzhxSUhOdUxYSnZiM1FzVzJselBWd2ljMjR0Y205dmRGd2lYWHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJRzl3WVdOcGRIazZJREJjYmk4dklDQWdJQ0FnSUNBZ2ZTQXFMMXh1THk4Z0lDQWdJRHd2YzNSNWJHVStYRzRnSUNBZ1hHNWNiaTh2SUR3dmFHVmhaRDVjYmx4dUx5OGdQR0p2WkhrK1hHNWNibHh1THk4Z0lDQWdJRHhrYVhZZ2FXUTlYQ0poY0hCY0lpQmhZbU05WENKelpHTmtjMnByWWx3aVBseHVJQ0FnSUNBZ0lDQmNiaTh2SUNBZ0lDQWdJQ0FnUEdneFBudDdJSFJwZEd4bElIMTlQQzlvTVQ1Y2JseHVMeThnSUNBZ0lDQWdJQ0E4Y0Q1N2V5QmxaR2wwWVdKc1pTQS9JRndpVDNWcFhDSWdPaUFuVG05dUp5QjlmVHd2Y0Q1Y2JpOHZJQ0FnSUNBZ0lDQWdQSEErZTNzZ1pXUnBkR0ZpYkdVZ2ZYMDhMM0ErWEc1Y2JpOHZJQ0FnSUNBZ0lDQWdQSEErZTNzZ2JXVnpjMkZuWlNCOWZUd3ZjRDVjYmx4dUx5OGdJQ0FnSUNBZ0lDQjdleUIwYUdsekxuTjBZWFJsTG1OdmRXNTBaWElnZlgwZ0x5QjdleUJqYjNWdWRHVnlJSDE5WEc1Y2JpOHZJQ0FnSUNBZ0lDQWdQSEErZXlVOVNsTlBUaTV6ZEhKcGJtZHBabmtvY0dWeWMyOXVjeWtnSlgwOEwzQStYRzVjYmk4dklDQWdJQ0FnSUNBZ1BIQWdaR0YwWVMxemJtRndjR1ZrUFZ3aWV5VTlkR2hwY3k1emRHRjBaUzUwYVhSc1pTQWxmVndpUGx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJRHhtYjNKdElHRmpkR2x2YmoxY0lsd2lJRUJ6ZFdKdGFYUXVjSEpsZG1WdWREMWNJblJvYVhNdWJXVjBhRzlrY3k1aFpHUlFaWEp6YjI1Y0lpQTZjM1I1YkdVOVhDSjdaR2x6Y0d4aGVUb2daV1JwZEdGaWJHVWdQeUJ1ZFd4c0lEb2dKMjV2Ym1VbklDd2diM0JoWTJsMGVUb2daV1JwZEdGaWJHVjlYQ0lnUGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lENTdleUJtZFd4c2JtRnRaUzUwY21sdEtDa2dQeUJtZFd4c2JtRnRaUzUwY21sdEtDa2dPaUFuVG04Z2JtRnRaU0JsYm5SeWVTY2dmWDA4WEc1Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThZbkkrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHbHVjSFYwSUhSNWNHVTlYQ0owWlhoMFhDSWdibUZ0WlQxY0ltWjFiR3h1WVcxbFhDSWdRR2x1Y0hWMFBWd2lkR2hwY3k1dFpYUm9iMlJ6TG5Wd1pHRjBaVVoxYkd4dVlXMWxYQ0krSUZ4dVhHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR0oxZEhSdmJqNUZibkpsWjJsemRISmxjand2WW5WMGRHOXVQbHh1WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHSnlQbHh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4b01TQjBhWFJzWlQxY0ludDdJSFJvYVhNdWNISnZjSE11ZEdsMGJHVWdmWDFjSWo1TmFYSnliM0k4TDJneFBseHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhwYm5CMWRDQjBlWEJsUFZ3aWRHVjRkRndpSUdScGMyRmliR1ZrSURwMllXeDFaVDFjSW0xbGMzTmhaMlZjSWo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlptOXliVDVjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVMeThnSUNBZ0lDQWdJQ0E4TDNBK1hHNWNibHh1THk4Z0lDQWdJQ0FnSUNBOGRXdytYRzVjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJSHNsSUhCbGNuTnZibk11Wm05eVJXRmphQ2dvY0dWeWMyOXVLVDArZXlBbGZWeHVYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEd4cFBuc2xQU0J3WlhKemIyNGdKWDBnWm5KdmJTQjdleUJqYjNWdWRHVnlJSDE5UEM5c2FUNWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnZXlVZ2ZTa2dKWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVMeThnSUNBZ0lDQWdJQ0E4TDNWc1BseHVYRzR2THlBZ0lDQWdJQ0FnSUR4aWRYUjBiMjRnUUdOc2FXTnJQVndpZEdocGN5NXRaWFJvYjJSekxtbHVZM0psYldWdWRGd2lQa2R2SUhSdklFTnZiV2x1WnlCVGIyOXVQQzlpZFhSMGIyNCtYRzVjYmk4dklDQWdJQ0FnSUNBZ1BHSjFkSFJ2YmlCQVkyeHBZMnM5WENKMFpYTjBSblZ1WTNScGIyNWNJajVVWlhOMElFWjFibU4wYVc5dVBDOWlkWFIwYjI0K1hHNGdJQ0FnSUNBZ0lGeHVMeThnSUNBZ0lEd3ZaR2wyUGx4dVhHNGdJQ0FnWEc1Y2JpOHZJQ0FnSUNBOGMyTnlhWEIwUGx4dVhHNHZMeUFnSUNBZ0lDQWdJSGRwYm1SdmR5NTBaWE4wUm5WdVkzUnBiMjRnUFNCbWRXNWpkR2x2YmlobGRpbDdYRzVjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXVkMkZ5YmlnblZHVnpkQ0JtZFc1amRHbHZiaUIzYjNKckp5d2daWFlwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaTh2SUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpOHZJQ0FnSUNBOEwzTmpjbWx3ZEQ1Y2JpQWdJQ0JjYmlBZ0lDQmNiaTh2SUR3dlltOWtlVDVjYmx4dUx5OGdQQzlvZEcxc1BseHVJQ0FnSUZ4dUx5OGdJQ0FnSUdBc1hHNWNibHh1SUNBZ0lHVnRhWFE2ZTF4dVhHNGdJQ0FnSUNBZ0lHVjRjSEpsYzNOcGIyNVNaV052Y21SbFpEb2dLSEpsWTI5eVpDazlQbnRjYmx4dUlDQWdJQ0FnSUNCOUxGeHVYRzRnSUNBZ0lDQWdJR052Ym01bFkzUmxaRG9nS0dVcFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdWQyRnliaWduUTI5dGNHOXVaVzUwSUdseklFTnZibTVsWTNSbFpDY3NJR1VwWEc1Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ2ZTeGNibHh1WEc1Y2JpQWdJQ0J3Y205d2N6cDdYRzVjYmlBZ0lDQWdJQ0FnZEdsMGJHVTZJQ2RzYjJGa2FXNW5MaTR1SjF4dVhHNGdJQ0FnZlN4Y2JseHVYRzVjYmlBZ0lDQnpkR0YwWlRwN1hHNWNiaUFnSUNBZ0lDQWdaV1JwZEdGaWJHVTZJSFJ5ZFdVc1hHNWNiaUFnSUNBZ0lDQWdablZzYkc1aGJXVTZJQ2R1YnlCa1lYUmhKeXhjYmlBZ0lDQWdJQ0FnTHk4Z1puVnNiRzVoYldVNklDZDdKVDBvYm1WM0lFUmhkR1VvS1NrbGZTY3NYRzVjYmlBZ0lDQWdJQ0FnZEdsMGJHVTZJQ2RJWld4c2J5QnNaWE1nWjJWdWN5Y3NYRzVjYmlBZ0lDQWdJQ0FnYldWemMyRm5aVG9nSjB4dmNtVnRJR2x3YzNWdElIdDdJR052ZFc1MFpYSWdmWDBuTEZ4dVhHNGdJQ0FnSUNBZ0lISnZkWFJsT2lBblkyOXRhVzVuYzI5dmJpY3NYRzVjYmlBZ0lDQWdJQ0FnWTI5MWJuUmxjam9nTVRBc1hHNWNiaUFnSUNBZ0lDQWdjR1Z5YzI5dWN6b2dXMXh1SUNBZ0lDQWdJQ0FnSUNBZ0oxbGhibTRuTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdKME5vY21semRHbHVZU2NzWEc0Z0lDQWdJQ0FnSUNBZ0lDQW5UWGxoYm1FbkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSjFONVlXNWhKMXh1SUNBZ0lDQWdJQ0JkTEZ4dVhHNGdJQ0FnZlN4Y2JseHVYRzVjYmlBZ0lDQnRaWFJvYjJSek9udGNibHh1SUNBZ0lDQWdJQ0IxY0dSaGRHVkdkV3hzYm1GdFpTaDdJSE5sYkdZc0lHVjJaVzUwZlNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFQjBjeTFwWjI1dmNtVmNiaUFnSUNBZ0lDQWdJQ0FnSUhObGJHWXVjM1JoZEdVdVpuVnNiRzVoYldVZ1BTQmxkbVZ1ZEM1MFlYSm5aWFEvTG5aaGJIVmxmSHduSjF4dVhHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JoWkdSUVpYSnpiMjRvZXlCelpXeG1MQ0JsZG1WdWRIMHBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCbWIzSnRJRDBnWlhabGJuUXVkR0Z5WjJWMElHRnpJRWhVVFV4R2IzSnRSV3hsYldWdWREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9abTl5YlM1bWRXeHNibUZ0WlM1MllXeDFaU2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5Qm1iM0p0TG1aMWJHeHVZVzFsTG5aaGJIVmxJRDBnS0NCbWIzSnRMbVoxYkd4dVlXMWxMblpoYkhWbElDbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWMzUmhkR1V1Y0dWeWMyOXVjeTV3ZFhOb0tHWnZjbTB1Wm5Wc2JHNWhiV1V1ZG1Gc2RXVXBYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNKdExtWjFiR3h1WVcxbExuWmhiSFZsSUQwZ0p5ZGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdWMzUmhkR1V1Wm5Wc2JHNWhiV1VnUFNBbkoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlnblFXUmtVR1Z5YzI5dUp5bGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdjMlZzWmk1emRHRjBaUzV3WlhKemIyNXpMbkIxYzJnb1lDUjdJQ2h1WlhjZ1JHRjBaU2dwS1NCOVlDbGNibHh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FXNWpjbVZ0Wlc1MEtIc2djMlZzWmlCOUtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVnNaaTV6ZEdGMFpTNXdaWEp6YjI1eld6RmRJRDBnWUVsaGJrTmhjblJsY2lCT2IzY2dKSHNnYzJWc1ppNXpkR0YwWlM1amIzVnVkR1Z5SUgwZ0x5QjdleUJqYjNWdWRHVnlJSDE5WUZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6Wld4bUxuTjBZWFJsTG1OdmRXNTBaWElyS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyVnNaaTV6ZEdGMFpTNWxaR2wwWVdKc1pTQTlJQ0Z6Wld4bUxuTjBZWFJsTG1Wa2FYUmhZbXhsSUR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYzJWc1ppNXpkR0YwWlM1dFpYTnpZV2RsSUQwZ1lGZGxJR052ZFc1MElIUnZJQ1I3SUhObGJHWXVjM1JoZEdVdVkyOTFiblJsY2lCOVlGeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduU1c1amNtVnRaVzUwSnl3Z2MyVnNaaTV6ZEdGMFpTNWpiM1Z1ZEdWeUxDQnpaV3htTG5OMFlYUmxMbkJsY25OdmJuTWdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ2ZWeHVYRzVjYm4wcFhHNWNibHh1WEc1Y2JseHVZMjl1YzNRZ1NHOXRaVk5qY21WbGJpQTlJRzVsZHlCVFpXNXpaVzVUWTNKbFpXNG9lMXh1WEc0Z0lDQWdibUZ0WlRvZ0oyaHZiV1VuTEZ4dUlDQWdJRnh1SUNBZ0lHOXdkR2x2Ym5NNmUxeHVYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxiWEJzWVhSbE9pQW5jMk55WldWdWN5OW9iMjFsTG1oMGJXd25MRnh1WEc1OUtWeHVYRzVjYmx4dVhHNHZMeUJqYjI1emIyeGxMbmRoY200b0oxWk5KeXdnZG0wcFhHNWNibHh1WEc1Y2JpOHZJR052Ym5OMElISnZJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25jMjR0Y205dmRDY3BYRzVjYmk4dklHUnZZM1Z0Wlc1MExtSnZaSGt1WVhCd1pXNWtRMmhwYkdRb2NtOHBYRzVjYmx4dUx5OGdjMlYwVkdsdFpXOTFkQ2dvS1QwK2UxeHVYRzR2THlBZ0lDQWdjbTh1YzJWMFFYUjBjbWxpZFhSbEtDZG9aV3hzYnljc0lDZDNiM0pzWkNjcFhHNHZMeUFnSUNBZ2NtOHVjMlYwUVhSMGNtbGlkWFJsS0NkMGFYUnNaU2NzSUNkM2IzSnNaQ2NwWEc1Y2JpOHZJSDBzSURFd01EQXBYRzVjYmlKZGZRPT0iLCJpbXBvcnQgeyBOYXRpdmVEaXJlY3RpdmVBdHRyaWJ1dGVzIH0gZnJvbSBcIi4vZGlyZWN0aXZlLm5hdGl2ZVwiO1xuaW1wb3J0IHsgQXJyYXlSYW5nZSB9IGZyb20gXCIuL3V0aWxpdGllc1wiO1xuLyoqXG4gKiBFeHByZXNzaW9uc1xuICovXG5leHBvcnQgY29uc3QgU3ludGF4RWNobyA9IG5ldyBSZWdFeHAoJ3t7KC4qPyl9fScsICdnJyk7XG5leHBvcnQgY29uc3QgU3ludGF4U25hcENvZGUgPSBuZXcgUmVnRXhwKCd7JSguKj8pJX0nLCAnZycpO1xuZXhwb3J0IGNvbnN0IFN5RGV0ciA9ICclc24nO1xuZXhwb3J0IGNvbnN0IERpcmVjdGl2ZUF0dHJpYnV0ZXMgPSBOYXRpdmVEaXJlY3RpdmVBdHRyaWJ1dGVzO1xuLyoqXG4gKiBTdGFiaWxpemUgRWNobyBFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihjb250ZW50LCBzdG9wKSB7XG4gICAgY29uc3QgZWNob3MgPSBbLi4uY29udGVudC5tYXRjaEFsbChTeW50YXhFY2hvKV07XG4gICAgaWYgKGVjaG9zLmxlbmd0aCkge1xuICAgICAgICBlY2hvcy5tYXAobSA9PiB7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKG5ldyBSZWdFeHAoKG1bMF0pLnJlcGxhY2UoL1teXFx3XFxzXS9naSwgJ1xcXFwkJicpLCAnZycpLCBgPCR7U3lEZXRyfT0ke21bMV19ICR7U3lEZXRyfT5gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoc3RvcCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59XG4vKipcbiAqIFN0YWJpbGl6ZSBTbmFwQ29kZSBFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24oY29udGVudCwgc3RvcCkge1xuICAgIGNvbnN0IGVjaG9zID0gWy4uLmNvbnRlbnQubWF0Y2hBbGwoU3ludGF4U25hcENvZGUpXTtcbiAgICBpZiAoZWNob3MubGVuZ3RoKSB7XG4gICAgICAgIGVjaG9zLm1hcChtID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UobmV3IFJlZ0V4cCgobVswXSkucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnXFxcXCQmJyksICdnJyksIGA8JHtTeURldHJ9JHttWzFdfSAke1N5RGV0cn0+YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHN0b3ApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIENyZWF0ZUV4cHJlc3Npb25SZWNvcmQoc3RhdGUpIHtcbiAgICBpZiAoKHN0YXRlLm5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBzdGF0ZS5ub2RlIGluc3RhbmNlb2YgTm9kZSkgJiYgIXN0YXRlLm1vY2t1cCkge1xuICAgICAgICBzdGF0ZS5tb2NrdXAgPSBzdGF0ZS5ub2RlLmNsb25lTm9kZSh0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuLyoqXG4gKiBQYXJzZSBBdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZUF0dHJpYnV0ZXNFeHByZXNzaW9uKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrIDogKCgpID0+IHsgfSk7XG4gICAgaWYgKG5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICBpZiAobm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhub2RlLmF0dHJpYnV0ZXMpLm1hcChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEZpbmQgRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhOYXRpdmVEaXJlY3RpdmVBdHRyaWJ1dGVzLkF2YWlsYWJsZXMgfHwge30pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZGlyZWN0aXZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFsuLi5hdHRyaWJ1dGUubmFtZS5tYXRjaEFsbChuZXcgUmVnRXhwKGBeJHtkaXJlY3RpdmUuZXhwcmVzc2lvbn1gLCAnZ2knKSldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXQgPSBhdHRyaWJ1dGUubmFtZT8uc3Vic3RyaW5nKChkaXJlY3RpdmUuZXhwcmVzc2lvbiB8fCAnJyk/Lmxlbmd0aCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gc3BsaXRbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gQ3JlYXRlRXhwcmVzc2lvblJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkaXJlY3RpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2NrdXA6IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBBcnJheVJhbmdlKHNwbGl0LCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlY29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEZpbmQgRWNob1xuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXNFY2hvID0gWy4uLmF0dHJpYnV0ZS52YWx1ZS5tYXRjaEFsbChTeW50YXhFY2hvKV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNFY2hvLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzRWNoby5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IENyZWF0ZUV4cHJlc3Npb25SZWNvcmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhdHRyaWJ1dGUuZWNobycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ja3VwOiBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIEZpbmQgU25hcENvZGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzU25hcENvZGUgPSBbLi4uYXR0cmlidXRlLnZhbHVlLm1hdGNoQWxsKFN5bnRheFNuYXBDb2RlKV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXNTbmFwQ29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1NuYXBDb2RlLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gQ3JlYXRlRXhwcmVzc2lvblJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2F0dHJpYnV0ZS5zbmFwY29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ja3VwOiBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFBhcnNlQXR0cmlidXRlc0V4cHJlc3Npb247XG59XG4vKipcbiAqIFBhcnNlIEVjaG8gRXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gUGFyc2VFY2hvRXhwcmVzc2lvbihub2RlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICgoKSA9PiB7IH0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSAobm9kZSBpbnN0YW5jZW9mIFRleHQpXG4gICAgICAgID8gbm9kZS50ZXh0Q29udGVudFxuICAgICAgICA6IChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBub2RlLmlubmVySFRNTCA6IG51bGwpO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4uY29udGVudD8ubWF0Y2hBbGwoU3ludGF4RWNobyldO1xuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gQ3JlYXRlRXhwcmVzc2lvblJlY29yZCh7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IChtYXRjaFsxXSB8fCAnJykudHJpbSgpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZWNobycsXG4gICAgICAgICAgICAgICAgICAgIGVjaG86IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1BhcnNlIEVjaG8nLCByZWNvcmQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xufVxuLyoqXG4gKiBQYXJzZSBTbmFwQ29kZSBFeHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBQYXJzZVNuYXBDb2RlRXhwcmVzc2lvbihub2RlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicgPyBjYWxsYmFjayA6ICgoKSA9PiB7IH0pO1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGlmIChub2RlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJlY29yZCA9IENyZWF0ZUV4cHJlc3Npb25SZWNvcmQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIHR5cGU6ICdzbmFwY29kZScsXG4gICAgICAgICAgICBzbmFwY29kZTogW11cbiAgICAgICAgfSk7XG4gICAgICAgIG5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4uY2hpbGQudGV4dENvbnRlbnQubWF0Y2hBbGwoU3ludGF4U25hcENvZGUpXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnNuYXBjb2RlPy5wdXNoKHsgbm9kZTogY2hpbGQsIG1hdGNoZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlY29yZC5zbmFwY29kZSkge1xuICAgICAgICAgICAgaWYgKHJlY29yZC5zbmFwY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVjb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG59XG5leHBvcnQgZnVuY3Rpb24gRmluZEV4cHJlc3Npb25zKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBub2RlLmNoaWxkTm9kZXM7XG4gICAgLyoqXG4gICAgICogUGFyc2UgTm9kZSBBdHRyaWJ1dGVzXG4gICAgICovXG4gICAgUGFyc2VBdHRyaWJ1dGVzRXhwcmVzc2lvbihub2RlLCBjYWxsYmFjayk7XG4gICAgLyoqXG4gICAgICogRmluZFxuICAgICAqL1xuICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgbm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAvKiogKiBGaW5kIFNuYXBDb2RlICovXG4gICAgICAgICAgICBjb25zdCBzbmFwY29kZSA9IFBhcnNlU25hcENvZGVFeHByZXNzaW9uKGNoaWxkLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAvKiogKiBGaW5kIERlZXAgKi9cbiAgICAgICAgICAgIGlmICghc25hcGNvZGUpIHtcbiAgICAgICAgICAgICAgICBGaW5kRXhwcmVzc2lvbnMoY2hpbGQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogRmluZCBFY2hvXG4gICAgICAgICAqL1xuICAgICAgICBQYXJzZUVjaG9FeHByZXNzaW9uKG5vZGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIEZpbmRFeHByZXNzaW9ucztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpYaHdjbVZ6YzJsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwyTnZjbVV2Wlhod2NtVnpjMmx2Ymk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hQUVVGUExFVkJRVVVzZVVKQlFYbENMRVZCUVVVc1RVRkJUU3h2UWtGQmIwSXNRMEZCUXp0QlFVVXZSQ3hQUVVGUExFVkJRVVVzVlVGQlZTeEZRVUZGTEUxQlFVMHNZVUZCWVN4RFFVRkRPMEZCUjNwRE96dEhRVVZITzBGQlMwZ3NUVUZCVFN4RFFVRkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRVHRCUVVWMFJDeE5RVUZOTEVOQlFVTXNUVUZCVFN4alFVRmpMRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkJPMEZCUlRGRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVFN1FVRkhNMElzVFVGQlRTeERRVUZETEUxQlFVMHNiVUpCUVcxQ0xFZEJRVWNzZVVKQlFYbENMRU5CUVVFN1FVRkxOVVE3TzBkQlJVYzdRVUZEU0N4TlFVRk5MRlZCUVZVc2RVSkJRWFZDTEVOQlFVTXNUMEZCWlN4RlFVRkZMRWxCUVdNN1NVRkZia1VzVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUVR0SlFVVXZReXhKUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVTTdVVUZGV2l4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlFTeEZRVUZGTzFsQlJWUXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRM0pDTEVsQlFVa3NUVUZCVFN4RFFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlJ5eEhRVUZITEVOQlFVVXNSVUZEZGtRc1NVRkJTU3hOUVVGTkxFbEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVOd1F5eERRVUZCTzFGQlJVd3NRMEZCUXl4RFFVRkRMRU5CUVVFN1MwRkZURHRUUVVWSE8xRkJSVUVzU1VGQlJ5eEpRVUZKTEVWQlFVTTdXVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJRenRUUVVGRk8wdEJSVE5DTzBsQlJVUXNUMEZCVHl4UFFVRlBMRU5CUVVNN1FVRkZia0lzUTBGQlF6dEJRVXRFT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hWUVVGVkxESkNRVUV5UWl4RFFVRkRMRTlCUVdVc1JVRkJSU3hKUVVGak8wbEJSWFpGTEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkZia1FzU1VGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkRPMUZCUlZvc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVRXNSVUZCUlR0WlFVVlVMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVU55UWl4SlFVRkpMRTFCUVUwc1EwRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVY3NSMEZCUnl4RFFVRkZMRVZCUTNaRUxFbEJRVWtzVFVGQlRTeEhRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVVc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGRGJrTXNRMEZCUVR0UlFVVk1MRU5CUVVNc1EwRkJReXhEUVVGQk8wdEJSVXc3VTBGRlJ6dFJRVVZCTEVsQlFVY3NTVUZCU1N4RlFVRkRPMWxCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03VTBGQlJUdExRVVV6UWp0SlFVVkVMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJSVzVDTEVOQlFVTTdRVUZOUkN4TlFVRk5MRlZCUVZVc2MwSkJRWE5DTEVOQlFVTXNTMEZCZFVJN1NVRkZNVVFzU1VGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRmxCUVZrc1YwRkJWeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEZsQlFWa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZETzFGQlJXeEdMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3UzBGRk5VTTdTVUZGUkN4UFFVRlBMRXRCUVVzc1EwRkJRVHRCUVVWb1FpeERRVUZETzBGQlNVUTdPMGRCUlVjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzZVVKQlFYbENMRU5CUVVNc1NVRkJhVUlzUlVGQlJTeFJRVUUwUXp0SlFVZHlSeXhSUVVGUkxFZEJRVWNzVDBGQlR5eFJRVUZSTEVsQlFVa3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUlN4RlFVRkZMRWRCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGSEwwUXNTVUZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRE8xRkJSV1lzU1VGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTFCUVUwc1JVRkJRenRaUVVWMFFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkJMRVZCUVVVN1owSkJSekZET3p0dFFrRkZSenRuUWtGRlNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMSGxDUVVGNVFpeERRVUZETEZWQlFWVXNTVUZCUlN4RlFVRkZMRU5CUVVNN2NVSkJSWFJFTEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVFc1JVRkJSVHR2UWtGRldpeE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTeXhUUVVGVExFTkJRVU1zVlVGQlZ5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQk8yOUNRVVUxUml4SlFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVU03ZDBKQlJXUXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVUVzUlVGQlJUczBRa0ZGYmtJc1RVRkJUU3hMUVVGTExFZEJRVWNzVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRVU1zVlVGQlZTeEpRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVRzMFFrRkZkRVlzVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQk96UkNRVWR5UWl4TlFVRk5MRTFCUVUwc1IwRkJSeXh6UWtGQmMwSXNRMEZCUXp0blEwRkRiRU1zU1VGQlNUdG5RMEZEU2l4VFFVRlRPMmREUVVOVUxFdEJRVXM3WjBOQlEwd3NTVUZCU1R0blEwRkRTaXhKUVVGSkxFVkJRVVVzVjBGQlZ6dG5RMEZEYWtJc1RVRkJUU3hGUVVGRkxGTkJRVk03WjBOQlEycENMRk5CUVZNc1JVRkJSU3hWUVVGVkxFTkJRVk1zUzBGQlN5eEZRVUZGTEVOQlFVTXNRMEZCUXpzMlFrRkRNVU1zUTBGQlF5eERRVUZCT3pSQ1FVVkdMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdDNRa0ZGY0VJc1EwRkJReXhEUVVGRExFTkJRVUU3Y1VKQlJVdzdaMEpCUlV3c1EwRkJReXhEUVVGRExFTkJRVUU3WjBKQlNVWTdPMjFDUVVWSE8yZENRVU5JTEUxQlFVMHNWMEZCVnl4SFFVRkhMRU5CUVVNc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVVU1UkN4SlFVRkhMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVU03YjBKQlJXeENMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZCTEVWQlFVVTdkMEpCUlhaQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEhOQ1FVRnpRaXhEUVVGRE96UkNRVU5zUXl4SlFVRkpPelJDUVVOS0xGTkJRVk03TkVKQlExUXNTMEZCU3pzMFFrRkRUQ3hKUVVGSkxFVkJRVVVzWjBKQlFXZENPelJDUVVOMFFpeE5RVUZOTEVWQlFVVXNVMEZCVXp0NVFrRkRjRUlzUTBGQlF5eERRVUZCTzNkQ1FVVkdMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdHZRa0ZGY0VJc1EwRkJReXhEUVVGRExFTkJRVUU3YVVKQlJVdzdaMEpCUzBRN08yMUNRVVZITzJkQ1FVTklMRTFCUVUwc1pVRkJaU3hIUVVGSExFTkJRVU1zUjBGQlJ5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVjBSU3hKUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVTTdiMEpCUlhSQ0xHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkJMRVZCUVVVN2QwSkJSVE5DTEUxQlFVMHNUVUZCVFN4SFFVRkhMSE5DUVVGelFpeERRVUZET3pSQ1FVTnNReXhKUVVGSk96UkNRVU5LTEZOQlFWTTdORUpCUTFRc1MwRkJTenMwUWtGRFRDeEpRVUZKTEVWQlFVVXNiMEpCUVc5Q096UkNRVU14UWl4TlFVRk5MRVZCUVVVc1UwRkJVenQ1UWtGRGNFSXNRMEZCUXl4RFFVRkJPM2RDUVVWR0xGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0dlFrRkZjRUlzUTBGQlF5eERRVUZETEVOQlFVRTdhVUpCUlV3N1dVRkpUQ3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVWRNTzB0QlJVbzdTVUZIUkN4UFFVRlBMSGxDUVVGNVFpeERRVUZETzBGQlJYSkRMRU5CUVVNN1FVRkpSRHM3UjBGRlJ6dEJRVU5JTEUxQlFVMHNWVUZCVlN4dFFrRkJiVUlzUTBGQlF5eEpRVUZwUWl4RlFVRkZMRkZCUVRSRE8wbEJSUzlHTEZGQlFWRXNSMEZCUnl4UFFVRlBMRkZCUVZFc1NVRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGRkxFVkJRVVVzUjBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVXZSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eERRVUZETEVsQlFVa3NXVUZCV1N4SlFVRkpMRU5CUVVNN1VVRkRiRU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhPMUZCUTJ4Q0xFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NXVUZCV1N4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJSelZFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJRVHRKUVVkcVFpeEpRVUZITEU5QlFVOHNSVUZCUXp0UlFVVlFMRTFCUVUwc1QwRkJUeXhIUVVGSExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVUU3VVVGRmJFUXNTVUZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRE8xbEJSV1FzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0WlFVVmlMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZCTEVWQlFVVTdaMEpCUlc1Q0xFMUJRVTBzVFVGQlRTeEhRVUZITEhOQ1FVRnpRaXhEUVVGRE8yOUNRVU5zUXl4SlFVRkpPMjlDUVVOS0xFbEJRVWtzUlVGQlJTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVTdiMEpCUXpOQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTzI5Q1FVTmFMRWxCUVVrc1JVRkJSU3hQUVVGUE8yOUNRVU5pTEV0QlFVczdhVUpCUTFJc1EwRkJReXhEUVVGQk8yZENRVVZHTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHRaUVVWd1FpeERRVUZETEVOQlFVTXNRMEZCUVR0WlFVVkdMRzlEUVVGdlF6dFRRVVYyUXp0TFFVVktPMGxCUlVRc1QwRkJUeXhMUVVGTExFTkJRVU03UVVGRmFrSXNRMEZCUXp0QlFVdEVPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFZRVUZWTEhWQ1FVRjFRaXhEUVVGRExFbEJRV2xDTEVWQlFVVXNVVUZCTkVNN1NVRkZia2NzVVVGQlVTeEhRVUZITEU5QlFVOHNVVUZCVVN4SlFVRkpMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVVc1JVRkJSU3hIUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJTOUVMRWxCUVVrc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF6dEpRVWRzUWl4SlFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeEZRVUZETzFGQlJYUkNMRTFCUVUwc1RVRkJUU3hIUVVGSExITkNRVUZ6UWl4RFFVRkRPMWxCUTJ4RExFbEJRVWs3V1VGRFNpeEpRVUZKTEVWQlFVVXNWVUZCVlR0WlFVTm9RaXhSUVVGUkxFVkJRVVVzUlVGQlJUdFRRVU5tTEVOQlFVTXNRMEZCUVR0UlFVVkdMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUVN4RlFVRkZPMWxCUlROQ0xFbEJRVWNzUzBGQlN5eERRVUZETEZkQlFWY3NSVUZCUXp0blFrRkZha0lzVFVGQlRTeFBRVUZQTEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJSV2hGTEVsQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJRenR2UWtGRlpDeE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVVc1EwRkJRVHRwUWtGRmNFUTdZVUZGU2p0UlFVVk1MRU5CUVVNc1EwRkJReXhEUVVGQk8xRkJSVVlzU1VGQlJ5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkRPMWxCUldZc1NVRkJSeXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUXp0blFrRkZkRUlzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0blFrRkZZaXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVRTdZVUZGYmtJN1UwRkZTanRMUVVsS08wbEJSMFFzVDBGQlR5eExRVUZMTEVOQlFVTTdRVUZGYWtJc1EwRkJRenRCUVVkRUxFMUJRVTBzVlVGQlZTeGxRVUZsTEVOQlFVTXNTVUZCYVVJc1JVRkJSU3hSUVVFMFF6dEpRVVV6Uml4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETzBsQlJUbENPenRQUVVWSE8wbEJRMGdzZVVKQlFYbENMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZCTzBsQlNYcERPenRQUVVWSE8wbEJRMGdzU1VGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkRPMUZCUlZvc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVRXNSVUZCUlR0WlFVVnFRaXh6UWtGQmMwSTdXVUZEZEVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzZFVKQlFYVkNMRU5CUVVNc1MwRkJiMElzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0WlFVZDZSU3hyUWtGQmEwSTdXVUZEYkVJc1NVRkJSeXhEUVVGRExGRkJRVkVzUlVGQlF6dG5Ra0ZGVkN4bFFVRmxMRU5CUVVNc1MwRkJiMElzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0aFFVVnNSRHRSUVVWTUxFTkJRVU1zUTBGQlF5eERRVUZCTzB0QlJVdzdVMEZGUnp0UlFVVkJPenRYUVVWSE8xRkJRMGdzYlVKQlFXMUNMRU5CUVVNc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZCTzB0QlJYUkRPMGxCUlVRc1QwRkJUeXhsUVVGbExFTkJRVU03UVVGRk0wSXNRMEZCUXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lFNWhkR2wyWlVScGNtVmpkR2wyWlVGMGRISnBZblYwWlhNZ2ZTQm1jbTl0SUZ3aUxpOWthWEpsWTNScGRtVXVibUYwYVhabFhDSTdYRzVwYlhCdmNuUWdleUJGZUhCeVpYTnphVzl1VW1WamIzSmtJSDBnWm5KdmJTQmNJaTR2YVc1a1pYZ3VkRndpTzF4dWFXMXdiM0owSUhzZ1FYSnlZWGxTWVc1blpTQjlJR1p5YjIwZ1hDSXVMM1YwYVd4cGRHbGxjMXdpTzF4dVhHNWNiaThxS2x4dUlDb2dSWGh3Y21WemMybHZibk5jYmlBcUwxeHVYRzVjYmx4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnVTNsdWRHRjRSV05vYnlBOUlHNWxkeUJTWldkRmVIQW9KM3Q3S0M0cVB5bDlmU2NzSUNkbkp5bGNibHh1Wlhod2IzSjBJR052Ym5OMElGTjViblJoZUZOdVlYQkRiMlJsSUQwZ2JtVjNJRkpsWjBWNGNDZ25leVVvTGlvL0tTVjlKeXdnSjJjbktWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1UzbEVaWFJ5SUQwZ0p5VnpiaWRjYmx4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnUkdseVpXTjBhWFpsUVhSMGNtbGlkWFJsY3lBOUlFNWhkR2wyWlVScGNtVmpkR2wyWlVGMGRISnBZblYwWlhOY2JseHVYRzVjYmx4dUx5b3FYRzRnS2lCVGRHRmlhV3hwZW1VZ1JXTm9ieUJGZUhCeVpYTnphVzl1WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQlRkR0ZpYVd4cGVtVkZZMmh2Ulhod2NtVnpjMmx2YmloamIyNTBaVzUwT2lCemRISnBibWNzSUhOMGIzQS9PaUJpYjI5c1pXRnVLWHRjYmx4dUlDQWdJR052Ym5OMElHVmphRzl6SUQwZ1d5NHVMbU52Ym5SbGJuUXViV0YwWTJoQmJHd29VM2x1ZEdGNFJXTm9ieWxkWEc0Z0lDQWdJRnh1SUNBZ0lHbG1LR1ZqYUc5ekxteGxibWQwYUNsN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQmxZMmh2Y3k1dFlYQW9iVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaVzUwSUQwZ1kyOXVkR1Z1ZEM1eVpYQnNZV05sS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGR5QlNaV2RGZUhBb0lDaHRXekJkS1M1eVpYQnNZV05sS0M5YlhseGNkMXhjYzEwdloya3NJQ2RjWEZ4Y0pDWW5LU0FzSUNkbkp5QXBMQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JnUENSN1UzbEVaWFJ5ZlQwa2V5QnRXekZkSUgwZ0pIdFRlVVJsZEhKOVBtQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JsYkhObGUxeHVYRzRnSUNBZ0lDQWdJR2xtS0hOMGIzQXBleUJ5WlhSMWNtNGdiblZzYkRzZ2ZWeHVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdOdmJuUmxiblE3WEc1Y2JuMWNibHh1WEc1Y2JseHVMeW9xWEc0Z0tpQlRkR0ZpYVd4cGVtVWdVMjVoY0VOdlpHVWdSWGh3Y21WemMybHZibHh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1UzUmhZbWxzYVhwbFUyNWhjRU52WkdWRmVIQnlaWE56YVc5dUtHTnZiblJsYm5RNklITjBjbWx1Wnl3Z2MzUnZjRDg2SUdKdmIyeGxZVzRwZTF4dVhHNGdJQ0FnWTI5dWMzUWdaV05vYjNNZ1BTQmJMaTR1WTI5dWRHVnVkQzV0WVhSamFFRnNiQ2hUZVc1MFlYaFRibUZ3UTI5a1pTbGRYRzRnSUNBZ0lGeHVJQ0FnSUdsbUtHVmphRzl6TG14bGJtZDBhQ2w3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCbFkyaHZjeTV0WVhBb2JUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpXNTBJRDBnWTI5dWRHVnVkQzV5WlhCc1lXTmxLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZHlCU1pXZEZlSEFvSUNodFd6QmRLUzV5WlhCc1lXTmxLQzliWGx4Y2QxeGNjMTB2WjJrc0lDZGNYRnhjSkNZbktTQXNJQ2RuSnlBcExDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmdQQ1I3VTNsRVpYUnlmU1I3SUcxYk1WMGdmU0FrZTFONVJHVjBjbjArWUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibHh1SUNBZ0lHVnNjMlY3WEc1Y2JpQWdJQ0FnSUNBZ2FXWW9jM1J2Y0NsN0lISmxkSFZ5YmlCdWRXeHNPeUI5WEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjl1ZEdWdWREdGNibHh1ZlZ4dVhHNWNibHh1WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCRGNtVmhkR1ZGZUhCeVpYTnphVzl1VW1WamIzSmtLSE4wWVhSbE9pQkZlSEJ5WlhOemFXOXVVbVZqYjNKa0tTQTZJRVY0Y0hKbGMzTnBiMjVTWldOdmNtUjdYRzVjYmlBZ0lDQnBaaWdvYzNSaGRHVXVibTlrWlNCcGJuTjBZVzVqWlc5bUlFaFVUVXhGYkdWdFpXNTBJSHg4SUhOMFlYUmxMbTV2WkdVZ2FXNXpkR0Z1WTJWdlppQk9iMlJsS1NBbUppQWhjM1JoZEdVdWJXOWphM1Z3S1h0Y2JseHVJQ0FnSUNBZ0lDQnpkR0YwWlM1dGIyTnJkWEFnUFNCemRHRjBaUzV1YjJSbExtTnNiMjVsVG05a1pTaDBjblZsS1Z4dVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSE4wWVhSbFhHNWNibjFjYmx4dVhHNWNiaThxS2x4dUlDb2dVR0Z5YzJVZ1FYUjBjbWxpZFhSbGMxeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnVUdGeWMyVkJkSFJ5YVdKMWRHVnpSWGh3Y21WemMybHZiaWh1YjJSbE9pQklWRTFNUld4bGJXVnVkQ3dnWTJGc2JHSmhZMnM2SUNoeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwSUQwK0lIWnZhV1FnS1h0Y2JseHVYRzRnSUNBZ1kyRnNiR0poWTJzZ1BTQjBlWEJsYjJZZ1kyRnNiR0poWTJzZ1BUMGdKMloxYm1OMGFXOXVKeUEvSUdOaGJHeGlZV05ySURvZ0tDZ3BQVDU3ZlNrN1hHNWNibHh1SUNBZ0lHbG1LRzV2WkdVdVlYUjBjbWxpZFhSbGN5bDdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FXWW9ibTlrWlM1aGRIUnlhV0oxZEdWekxteGxibWQwYUNsN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQlBZbXBsWTNRdWRtRnNkV1Z6S0c1dlpHVXVZWFIwY21saWRYUmxjeWt1YldGd0tHRjBkSEpwWW5WMFpUMCtlMXh1SUNBZ0lGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1JtbHVaQ0JFYVhKbFkzUnBkbVZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCUFltcGxZM1F1ZG1Gc2RXVnpLRTVoZEdsMlpVUnBjbVZqZEdsMlpVRjBkSEpwWW5WMFpYTXVRWFpoYVd4aFlteGxjM3g4ZTMwcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1YldGd0tHUnBjbVZqZEdsMlpUMCtleUJjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6SUQwZ1d5NHVMbUYwZEhKcFluVjBaUzV1WVcxbExtMWhkR05vUVd4c0tHNWxkeUJTWldkRmVIQW9ZRjRrZXlCa2FYSmxZM1JwZG1VdVpYaHdjbVZ6YzJsdmJpQjlZQ3dnSjJkcEp5a3BYVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LRzFoZEdOb1pYTXViR1Z1WjNSb0tYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0YwWTJobGN5NW1iM0pGWVdOb0tHMWhkR05vUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZENBOUlHRjBkSEpwWW5WMFpTNXVZVzFsUHk1emRXSnpkSEpwYm1jb0tHUnBjbVZqZEdsMlpTNWxlSEJ5WlhOemFXOXVmSHduSnlrL0xteGxibWQwYUNrdWMzQnNhWFFvSnk0bktWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdibUZ0WlNBOUlITndiR2wwV3pCZFhHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEpsWTI5eVpDQTlJRU55WldGMFpVVjRjSEpsYzNOcGIyNVNaV052Y21Rb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmthWEpsWTNScGRtVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhkR05vTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxPaUFuWkdseVpXTjBhWFpsSnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYlc5amEzVndPaUJoZEhSeWFXSjFkR1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z5WjNWdFpXNTBjem9nUVhKeVlYbFNZVzVuWlR4emRISnBibWMrS0hOd2JHbDBMQ0F4S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZzYkdKaFkyc29jbVZqYjNKa0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc1Y2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1JtbHVaQ0JGWTJodlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2JXRjBZMmhsYzBWamFHOGdQU0JiTGk0dVlYUjBjbWxpZFhSbExuWmhiSFZsTG0xaGRHTm9RV3hzS0ZONWJuUmhlRVZqYUc4cFhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0cxaGRHTm9aWE5GWTJodkxteGxibWQwYUNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYldGMFkyaGxjMFZqYUc4dVptOXlSV0ZqYUNodFlYUmphRDArZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J5WldOdmNtUWdQU0JEY21WaGRHVkZlSEJ5WlhOemFXOXVVbVZqYjNKa0tIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YwZEhKcFluVjBaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFlYUmphQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGVYQmxPaUFuWVhSMGNtbGlkWFJsTG1WamFHOG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUcxdlkydDFjRG9nWVhSMGNtbGlkWFJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXloeVpXTnZjbVFwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFJRVpwYm1RZ1UyNWhjRU52WkdWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6VTI1aGNFTnZaR1VnUFNCYkxpNHVZWFIwY21saWRYUmxMblpoYkhWbExtMWhkR05vUVd4c0tGTjViblJoZUZOdVlYQkRiMlJsS1YwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWh0WVhSamFHVnpVMjVoY0VOdlpHVXViR1Z1WjNSb0tYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFlYUmphR1Z6VTI1aGNFTnZaR1V1Wm05eVJXRmphQ2h0WVhSamFEMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnlaV052Y21RZ1BTQkRjbVZoZEdWRmVIQnlaWE56YVc5dVVtVmpiM0prS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnViMlJsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBkSEpwWW5WMFpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WVhSamFDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwZVhCbE9pQW5ZWFIwY21saWRYUmxMbk51WVhCamIyUmxKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdGIyTnJkWEE2SUdGMGRISnBZblYwWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb2NtVmpiM0prS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lGeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUZCaGNuTmxRWFIwY21saWRYUmxjMFY0Y0hKbGMzTnBiMjQ3WEc0Z0lDQWdYRzU5WEc1Y2JseHVYRzR2S2lwY2JpQXFJRkJoY25ObElFVmphRzhnUlhod2NtVnpjMmx2Ymx4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdVR0Z5YzJWRlkyaHZSWGh3Y21WemMybHZiaWh1YjJSbE9pQklWRTFNUld4bGJXVnVkQ3dnWTJGc2JHSmhZMnM2SUNoeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwSUQwK0lIWnZhV1FnS1h0Y2JseHVJQ0FnSUdOaGJHeGlZV05ySUQwZ2RIbHdaVzltSUdOaGJHeGlZV05ySUQwOUlDZG1kVzVqZEdsdmJpY2dQeUJqWVd4c1ltRmpheUE2SUNnb0tUMCtlMzBwTzF4dVhHNGdJQ0FnWTI5dWMzUWdZMjl1ZEdWdWRDQTlJQ2h1YjJSbElHbHVjM1JoYm1ObGIyWWdWR1Y0ZENrZ1hHNGdJQ0FnSUNBZ0lEOGdibTlrWlM1MFpYaDBRMjl1ZEdWdWRDQmNiaUFnSUNBZ0lDQWdPaUFvYm05a1pTQnBibk4wWVc1alpXOW1JRWhVVFV4RmJHVnRaVzUwSUQ4Z2JtOWtaUzVwYm01bGNraFVUVXdnT2lCdWRXeHNLVHRjYmx4dUlDQWdJRnh1SUNBZ0lHeGxkQ0JtYjNWdVpDQTlJR1poYkhObFhHNWNibHh1SUNBZ0lHbG1LR052Ym5SbGJuUXBlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFoZEdOb1pYTWdQU0JiTGk0dVkyOXVkR1Z1ZEQ4dWJXRjBZMmhCYkd3b1UzbHVkR0Y0UldOb2J5bGRYRzVjYmlBZ0lDQWdJQ0FnYVdZb2JXRjBZMmhsY3k1c1pXNW5kR2dwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNWdVpDQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGRHTm9aWE11Wm05eVJXRmphQ2h0WVhSamFEMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjbVZqYjNKa0lEMGdRM0psWVhSbFJYaHdjbVZ6YzJsdmJsSmxZMjl5WkNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzV2WkdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVoYldVNklDaHRZWFJqYUZzeFhYeDhKeWNwTG5SeWFXMG9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVG9nSjJWamFHOG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbFkyaHZPaUJqYjI1MFpXNTBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdFlYUmphRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZzYkdKaFkyc29jbVZqYjNKa0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1c2IyY29KMUJoY25ObElFVmphRzhuTENCeVpXTnZjbVFwWEc1Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWm05MWJtUTdYRzVjYm4xY2JseHVYRzVjYmx4dUx5b3FYRzRnS2lCUVlYSnpaU0JUYm1Gd1EyOWtaU0JGZUhCeVpYTnphVzl1WEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQlFZWEp6WlZOdVlYQkRiMlJsUlhod2NtVnpjMmx2YmlodWIyUmxPaUJJVkUxTVJXeGxiV1Z1ZEN3Z1kyRnNiR0poWTJzNklDaHlaV052Y21RNklFVjRjSEpsYzNOcGIyNVNaV052Y21RcElEMCtJSFp2YVdRZ0tYdGNibHh1SUNBZ0lHTmhiR3hpWVdOcklEMGdkSGx3Wlc5bUlHTmhiR3hpWVdOcklEMDlJQ2RtZFc1amRHbHZiaWNnUHlCallXeHNZbUZqYXlBNklDZ29LVDArZTMwcE8xeHVYRzRnSUNBZ2JHVjBJR1p2ZFc1a0lEMGdabUZzYzJVN1hHNWNibHh1SUNBZ0lHbG1LRzV2WkdVdVkyaHBiR1JPYjJSbGN5NXNaVzVuZEdncGUxeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElISmxZMjl5WkNBOUlFTnlaV0YwWlVWNGNISmxjM05wYjI1U1pXTnZjbVFvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdibTlrWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVNklDZHpibUZ3WTI5a1pTY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemJtRndZMjlrWlRvZ1cxMWNiaUFnSUNBZ0lDQWdmU2xjYmx4dUlDQWdJQ0FnSUNCdWIyUmxMbU5vYVd4a1RtOWtaWE11Wm05eVJXRmphQ2hqYUdsc1pEMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhqYUdsc1pDNTBaWGgwUTI5dWRHVnVkQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnV3k0dUxtTm9hV3hrTG5SbGVIUkRiMjUwWlc1MExtMWhkR05vUVd4c0tGTjViblJoZUZOdVlYQkRiMlJsS1YwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWh0WVhSamFHVnpMbXhsYm1kMGFDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVmpiM0prTG5OdVlYQmpiMlJsUHk1d2RYTm9LQ0I3SUc1dlpHVTZJR05vYVd4a0xDQnRZWFJqYUdWeklIMGdLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOUtWeHVYRzRnSUNBZ0lDQWdJR2xtS0hKbFkyOXlaQzV6Ym1Gd1kyOWtaU2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0hKbFkyOXlaQzV6Ym1Gd1kyOWtaUzVzWlc1bmRHZ3BlMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZkVzVrSUQwZ2RISjFaVHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aHlaV052Y21RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlZ4dUlDQWdJRnh1WEc0Z0lDQWdjbVYwZFhKdUlHWnZkVzVrTzF4dVhHNTlYRzVjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUVacGJtUkZlSEJ5WlhOemFXOXVjeWh1YjJSbE9pQklWRTFNUld4bGJXVnVkQ3dnWTJGc2JHSmhZMnM2SUNoeVpXTnZjbVE2SUVWNGNISmxjM05wYjI1U1pXTnZjbVFwSUQwK0lIWnZhV1FnS1h0Y2JseHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdibTlrWlM1amFHbHNaRTV2WkdWek8xeHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVR0Z5YzJVZ1RtOWtaU0JCZEhSeWFXSjFkR1Z6WEc0Z0lDQWdJQ292WEc0Z0lDQWdVR0Z5YzJWQmRIUnlhV0oxZEdWelJYaHdjbVZ6YzJsdmJpaHViMlJsTENCallXeHNZbUZqYXlsY2JpQWdJQ0JjYmlBZ0lDQmNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVpwYm1SY2JpQWdJQ0FnS2k5Y2JpQWdJQ0JwWmlodWIyUmxjeTVzWlc1bmRHZ3BlMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnYm05a1pYTXVabTl5UldGamFDaGphR2xzWkQwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLaW9nS2lCR2FXNWtJRk51WVhCRGIyUmxJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCemJtRndZMjlrWlNBOUlGQmhjbk5sVTI1aGNFTnZaR1ZGZUhCeVpYTnphVzl1S0dOb2FXeGtJR0Z6SUVoVVRVeEZiR1Z0Wlc1MExDQmpZV3hzWW1GamF5azdYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeW9xSUNvZ1JtbHVaQ0JFWldWd0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppZ2hjMjVoY0dOdlpHVXBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUm1sdVpFVjRjSEpsYzNOcGIyNXpLR05vYVd4a0lHRnpJRWhVVFV4RmJHVnRaVzUwTENCallXeHNZbUZqYXlsY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNWNiaUFnSUNCbGJITmxlMXh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJHYVc1a0lFVmphRzljYmlBZ0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lGQmhjbk5sUldOb2IwVjRjSEpsYzNOcGIyNG9ibTlrWlN3Z1kyRnNiR0poWTJzcFhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJHYVc1a1JYaHdjbVZ6YzJsdmJuTTdYRzRnSUNBZ1hHNTlYRzVjYmx4dVhHNWNiaUpkZlE9PSIsImltcG9ydCB7IENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uLCBSZW5kZXJFbmdpbmUgfSBmcm9tIFwiLi9jb21waWxhdGVcIjtcbmltcG9ydCB7IFN0YWJpbGl6ZUVjaG9FeHByZXNzaW9uLCBTdGFiaWxpemVTbmFwQ29kZUV4cHJlc3Npb24gfSBmcm9tIFwiLi9leHByZXNzaW9uXCI7XG5pbXBvcnQgeyBkZWNvZGVIVE1MRW50aXRpZXMsIFN0YWJpbGl6ZUNvbnRlbnQgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRIeWRyYXRlc1N0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZFxuICAgICAqL1xuICAgIHB1c2gobmFtZSwgcmVjb3JkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc1tuYW1lXSA9IHRoaXMuZW50cmllc1tuYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5lbnRyaWVzW25hbWVdW3RoaXMuZW50cmllc1tuYW1lXS5sZW5ndGhdID0gcmVjb3JkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkXG4gICAgICovXG4gICAgdXBkYXRlKG5hbWUsIGtleSwgcmVjb3JkKSB7XG4gICAgICAgIGlmICh0aGlzLmVudHJpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVudHJpZXNbbmFtZV1ba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50cmllc1tuYW1lXVtrZXldID0gcmVjb3JkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZW50cnkncyBzbG90IGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmUobmFtZSwga2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmVudHJpZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllc1tuYW1lXSA9IHRoaXMuZW50cmllc1tuYW1lXS5maWx0ZXIoKHJlY29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXggIT0ga2V5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFuIGVudHJ5IGJ5IFByb3BlcnR5IG9yIFN0YXRlIG5hbWVcbiAgICAgKi9cbiAgICBjbGVhbihuYW1lKSB7XG4gICAgICAgIHRoaXMuZW50cmllc1tuYW1lXSA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2xlYW4gZW50cnkgYnkgUHJvcGVydHkgb3IgU3RhdGUgbmFtZVxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgYnkgUHJvcGVydHkgb3IgU3RhdGUgbmFtZVxuICAgICAqL1xuICAgIHJldHJpZXZlKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tuYW1lXSB8fCB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmQgQWxsXG4gICAgICovXG4gICAgcmV0cmlldmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRIeWRyYXRlcyB7XG4gICAgLy8gJHByb3BzOiBDb21wb25lbnRIeWRyYXRlc1N0b3JlPFA+ID0ge30gYXMgQ29tcG9uZW50SHlkcmF0ZXNTdG9yZTxQPlxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudCwgc3RhdGUsIHByb3BzKSB7XG4gICAgICAgIC8vIGVudHJpZXM6IFRDb21wb25lbnRIeWRyYXRlc0VudHJpZXM8UywgUD4gPSB7fSBhcyAgVENvbXBvbmVudEh5ZHJhdGVzRW50cmllczxTLCBQPlxuICAgICAgICAvLyBzdG9yZTogVENvbXBvbmVudEh5ZHJhdGVzU3RvcmU8UywgUD4gPSB7XG4gICAgICAgIC8vICAgICBzdGF0ZToge30gYXMgUyxcbiAgICAgICAgLy8gICAgIHByb3BzOiB7fSBhcyBQLFxuICAgICAgICAvLyB9IGFzIFRDb21wb25lbnRIeWRyYXRlc1N0b3JlPFMsIFA+XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLiRzdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlIHx8IGNvbXBvbmVudC5zdGF0ZSk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCBjb21wb25lbnQucHJvcHM7XG4gICAgICAgIHRoaXMuJHN0YXRlID0gbmV3IENvbXBvbmVudEh5ZHJhdGVzU3RvcmUoKTtcbiAgICAgICAgLy8gdGhpcy4kcHJvcHMgPSBuZXcgQ29tcG9uZW50SHlkcmF0ZXNTdG9yZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnUGhhc2UgU2V0IFByb3h5IGFuZCBvdGhlcicsIHRoaXMpXG4gICAgICAgIHRoaXMucHJveGllcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCBTdGF0ZSBQcm94aWVzXG4gICAgICogQGRlc2NyaXB0aW9uIFVzZSB0aGlzIHRvIGFjdGl2YXRlIHRoZSBkeW5hbWljIHN0YXRlLiBGb3IgZGVmYXVsdCB0aGUgY29uc3RydWN0IGNhbGwgdGhpc1xuICAgICAqL1xuICAgIHByb3hpZXMoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXMuY29tcG9uZW50O1xuICAgICAgICAgICAgY29uc3QgJCA9IHRoaXM7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlKS5tYXAoZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlWzFdID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gZVswXTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBBcnJheSBQcm94eVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RhdGVbbmFtZV0gPSBuZXcgUHJveHkoZVsxXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldHRpbmcnLCB0YXJnZXQsIHByb3ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIHZhbHVlLCBwcm94KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcnLCB0YXJnZXQsIHByb3AsIHZhbHVlLCBwcm94KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuc3RhdGVbbmFtZV0gPSBwcm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaHlkcmF0ZXNTdGF0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE90aGVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLnN0YXRlLCBgJHtuYW1lfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldCgpIHsgcmV0dXJuICQuc3RhdGVbbmFtZV07IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnN0YXRlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5oeWRyYXRlc1N0YXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEh5ZHJhdGUgU3BlY2lmaWMgTm9kZVxuICAgICAqIEBkZXNjcmlwdGlvbiBVc2UgdGhpcyB0byBSZVJlbmRlciBzdGF0ZSBhbmQgcHJvcHMgaW4gTm9kZVxuICAgICAqL1xuICAgIGh5ZHJhdGVzTm9kZShub2RlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluaXRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGV0IG1vY2t1cCA9IFN0YWJpbGl6ZUNvbnRlbnQoKCgnaW5uZXJIVE1MJyBpbiBub2RlKSA/IG5vZGUuaW5uZXJIVE1MIDogbm9kZS50ZXh0Q29udGVudCkgfHwgJycpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBFY2hvXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IGVjaG9Nb2NrdXAgPSBTdGFiaWxpemVFY2hvRXhwcmVzc2lvbihtb2NrdXAsIHRydWUpIHx8ICcnO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBTbmFwQ29kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBzbmFwTW9ja3VwID0gU3RhYmlsaXplU25hcENvZGVFeHByZXNzaW9uKGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0cnVlKSB8fCAnJztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVmVyaWZpY2F0aW9uc1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIWVjaG9Nb2NrdXAubGVuZ3RoICYmICFzbmFwTW9ja3VwLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZW5kZXJpbmdcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgUmVuZGVyRW5naW5lKHNuYXBNb2NrdXAgfHwgZWNob01vY2t1cCB8fCBtb2NrdXAsIHRoaXMuY29tcG9uZW50LCB0aGlzLmNvbXBvbmVudC5zdGF0ZSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgnaW5uZXJIVE1MJyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgndGV4dENvbnRlbnQnIGluIG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xuICAgICAgICAgICAgICAgIENvbXBpbGF0ZUVycm9yRXhjZXB0aW9uKGVyKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIeWRyYXRlIFNwZWNpZmljIFJlY29yZGVcbiAgICAgKiBAZGVzY3JpcHRpb24gVXNlIHRoaXMgdG8gUmVSZW5kZXIgc3RhdGUgYW5kIHByb3BzIG9mIFJlY29yZFxuICAgICAqL1xuICAgIGh5ZHJhdGVzUmVjb3JkKHJlY29yZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJlY29yZC5ub2RlO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbml0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxldCBtb2NrdXAgPSBTdGFiaWxpemVDb250ZW50KCgocmVjb3JkLm1vY2t1cCAmJiAnaW5uZXJIVE1MJyBpbiByZWNvcmQubW9ja3VwKSA/IHJlY29yZC5tb2NrdXAuaW5uZXJIVE1MIDogcmVjb3JkLm1vY2t1cD8udGV4dENvbnRlbnQpIHx8ICcnKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWNob1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBlY2hvTW9ja3VwID0gU3RhYmlsaXplRWNob0V4cHJlc3Npb24obW9ja3VwLCB0cnVlKSB8fCAnJztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU25hcENvZGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uc3Qgc25hcE1vY2t1cCA9IFN0YWJpbGl6ZVNuYXBDb2RlRXhwcmVzc2lvbihlY2hvTW9ja3VwIHx8IG1vY2t1cCwgdHJ1ZSkgfHwgJyc7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFZlcmlmaWNhdGlvbnNcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCFlY2hvTW9ja3VwLmxlbmd0aCAmJiAhc25hcE1vY2t1cC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVuZGVyaW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIFJlbmRlckVuZ2luZShzbmFwTW9ja3VwIHx8IGVjaG9Nb2NrdXAgfHwgbW9ja3VwLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5jb21wb25lbnQuc3RhdGUpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoJ2lubmVySFRNTCcgaW4gbm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJ3RleHRDb250ZW50JyBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRlY29kZUhUTUxFbnRpdGllcyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gYCR7cmVzdWx0fWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgICBDb21waWxhdGVFcnJvckV4Y2VwdGlvbihlcik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhSGxrY21GMFpYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOWpiM0psTDJoNVpISmhkR1Z6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVTkJMRTlCUVU4c1JVRkJSU3gxUWtGQmRVSXNSVUZCUlN4WlFVRlpMRVZCUVVVc1RVRkJUU3hoUVVGaExFTkJRVU03UVVGRGNFVXNUMEZCVHl4RlFVRkZMSFZDUVVGMVFpeEZRVUZGTERKQ1FVRXlRaXhGUVVGRkxFMUJRVTBzWTBGQll5eERRVUZETzBGQlJYQkdMRTlCUVU4c1JVRkJSU3hyUWtGQmEwSXNSVUZCUlN4blFrRkJaMElzUlVGQlJTeE5RVUZOTEdGQlFXRXNRMEZCUXp0QlFVdHVSU3hOUVVGTkxFOUJRVThzYzBKQlFYTkNPMGxCUVc1RE8xRkJSMGtzV1VGQlR5eEhRVUVyUWl4RlFVRnBReXhEUVVGQk8wbEJLMGN6UlN4RFFVRkRPMGxCTTBkSE96dFBRVVZITzBsQlEwWXNTVUZCU1N4RFFVRkRMRWxCUVdFc1JVRkJSU3hOUVVGM1FqdFJRVVY2UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRkxFbEJRVWtzUTBGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVVc1NVRkJTU3hEUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZCTzFGQlJXcEVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVVVzU1VGQlNTeERRVUZGTEVOQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJSU3hKUVVGSkxFTkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVFN1VVRkZOVVFzVDBGQlR5eEpRVUZKTEVOQlFVTTdTVUZGYUVJc1EwRkJRenRKUVVsRU96dFBRVVZITzBsQlEwZ3NUVUZCVFN4RFFVRkRMRWxCUVdFc1JVRkJSU3hIUVVGWkxFVkJRVVVzVFVGQmQwSTdVVUZGZUVRc1NVRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZGTEVsQlFVa3NRMEZCUlN4RlFVRkRPMWxCUlhCQ0xFbEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUlN4SlFVRkpMRU5CUVVVc1EwRkJSU3hIUVVGSExFTkJRVVVzUlVGQlF6dG5Ra0ZGTTBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlJTeEpRVUZKTEVOQlFVVXNRMEZCUlN4SFFVRkhMRU5CUVVVc1IwRkJSeXhOUVVGTkxFTkJRVUU3WVVGRmRrTTdVMEZGU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJSV2hDTEVOQlFVTTdTVUZKUkRzN1QwRkZSenRKUVVOSUxFMUJRVTBzUTBGQlF5eEpRVUZoTEVWQlFVVXNSMEZCVnp0UlFVVTNRaXhKUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVVXNTVUZCU1N4RFFVRkZMRVZCUVVNN1dVRkZjRUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUlN4SlFVRkpMRU5CUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZGTEVsQlFVa3NRMEZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVTXNSVUZCUlR0blFrRkZhRVVzVDBGQlR5eExRVUZMTEVsQlFVa3NSMEZCUnl4RFFVRkJPMWxCUlhaQ0xFTkJRVU1zUTBGQlF5eERRVUZCTzFOQlJVdzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVWb1FpeERRVUZETzBsQlNVUTdPMDlCUlVjN1NVRkRTQ3hMUVVGTExFTkJRVU1zU1VGQllUdFJRVVZtTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVVc1NVRkJTU3hEUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZCTzFGQlJYcENMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJSV2hDTEVOQlFVTTdTVUZKUkRzN1QwRkZSenRKUVVOSUxFdEJRVXM3VVVGRlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVdkRExFTkJRVUU3VVVGRkwwTXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzUTBGQlF6dEpRVWxFT3p0UFFVVkhPMGxCUTBnc1VVRkJVU3hEUVVGRExFbEJRV0U3VVVGRmJFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRkxFbEJRVWtzUTBGQlJTeEpRVUZKTEZOQlFWTXNRMEZCUVR0SlFVVTFReXhEUVVGRE8wbEJTMFE3TzA5QlJVYzdTVUZEU0N4VFFVRlRPMUZCUlV3c1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZCTzBsQlJYWkNMRU5CUVVNN1EwRkxTanRCUVUxRUxFMUJRVTBzVDBGQlR5eHBRa0ZCYVVJN1NVRm5RekZDTEhORlFVRnpSVHRKUVVsMFJTeFpRVUZaTEZOQlFUWkNMRVZCUVVVc1MwRkJVeXhGUVVGRkxFdEJRVk03VVVGNlFpOUVMRzlHUVVGdlJqdFJRVVZ3Uml3eVEwRkJNa003VVVGRk0wTXNjMEpCUVhOQ08xRkJSWFJDTEhOQ1FVRnpRanRSUVVWMFFpeHhRMEZCY1VNN1VVRkhja01zWTBGQlV5eEhRVUYxUWl4RlFVRjNRaXhEUVVGQk8xRkJSWGhFTEZWQlFVc3NSMEZCVFN4RlFVRlBMRU5CUVVFN1VVRkZiRUlzVlVGQlN5eEhRVUZOTEVWQlFVOHNRMEZCUVR0UlFVbHNRaXhYUVVGTkxFZEJRVGhDTEVWQlFTdENMRU5CUVVFN1VVRlJMMFFzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1VVRkZNMElzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8xRkJSWHBFTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhKUVVGSkxGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZIZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEhOQ1FVRnpRaXhGUVVGRkxFTkJRVU03VVVGRk0wTXNPRU5CUVRoRE8xRkJSemxETEdsRVFVRnBSRHRSUVVkcVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVFN1NVRkZiRUlzUTBGQlF6dEpRVTFFT3pzN1QwRkhSenRKUVVOSUxFOUJRVTg3VVVGRlNDeEpRVUZITEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3hSUVVGUkxFVkJRVU03V1VGRk4wSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVVUxUWl4TlFVRk5MRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRlppeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJMRVZCUVVVN1owSkJSVGxDTEVsQlFVY3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzVlVGQlZTeEZRVUZETzI5Q1FVRkZMRTlCUVZFN2FVSkJRVVU3WjBKQlJYcERMRTFCUVUwc1NVRkJTU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFWa3NRMEZCUVR0blFrRkZOVUk3TzIxQ1FVVkhPMmRDUVVOSUxFbEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlF6dHZRa0ZGYmtJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlJTeEpRVUZKTEVOQlFVVXNSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdkMEpCUlRsRExFZEJRVWNzUlVGQlJTeFZRVUZUTEUxQlFVMHNSVUZCUlN4SlFVRkpPelJDUVVWMFFpeDFRMEZCZFVNN05FSkJSWFpETEU5QlFVOHNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8zZENRVVY0UWl4RFFVRkRPM2RDUVVWRUxFZEJRVWNzUlVGQlJTeFZRVUZUTEUxQlFVMHNSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWs3TkVKQlJXNURMRzlFUVVGdlJEczBRa0ZGY0VRc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUVRzMFFrRkZjRUlzUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUlN4SlFVRkpMRU5CUVVVc1IwRkJSeXhKUVVGSkxFTkJRVUU3TkVKQlJYUkNMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVRTdORUpCUlhoQ0xFOUJRVThzU1VGQlNTeERRVUZETzNkQ1FVVm9RaXhEUVVGRE8zRkNRVWRLTEVOQlFVTXNRMEZCUVR0cFFrRkhURHRuUWtGSFJEczdiVUpCUlVjN2NVSkJSVU03YjBKQlJVRXNUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVa3NTVUZCU3l4RlFVRkZMRVZCUVVVN2QwSkJSVE5ETEVkQlFVY3NTMEZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVVVzU1VGQlNTeERRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPM2RDUVVWb1F5eEhRVUZITEVOQlFVTXNTMEZCU3pzMFFrRkZUQ3hEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZGTEVsQlFVa3NRMEZCUlN4SFFVRkhMRXRCUVVzc1EwRkJRVHMwUWtGRmRrSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUczBRa0ZGZUVJc1QwRkJUeXhKUVVGSkxFTkJRVU03ZDBKQlJXaENMRU5CUVVNN2NVSkJSVW9zUTBGQlF5eERRVUZCTzJsQ1FVVk1PMWxCUjB3c1EwRkJReXhEUVVGRExFTkJRVUU3VTBGRlREdFJRVWRFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMGxCUldoQ0xFTkJRVU03U1VGTFJEczdPMDlCUjBjN1NVRkRTQ3haUVVGWkxFTkJRVU1zU1VGQmQwSTdVVUZGYWtNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlowSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRExFVkJRVVU3V1VGRmFrUTdPMlZCUlVjN1dVRkZTQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZYTEVOQlFVTTdXVUZITTBjN08yVkJSVWM3V1VGRFNDeE5RVUZOTEZWQlFWVXNSMEZCUnl4MVFrRkJkVUlzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGQk8xbEJTVGxFT3p0bFFVVkhPMWxCUlVnc1RVRkJUU3hWUVVGVkxFZEJRVWNzTWtKQlFUSkNMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVFN1dVRkphRVk3TzJWQlJVYzdXVUZEU0N4SlFVRkhMRU5CUVVNc1ZVRkJWU3hEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRVZCUVVNN1owSkJSWGhETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGQlF5eFBRVUZQTzJGQlJYcENPMWxCU1VRN08yVkJSVWM3V1VGRFNDeFpRVUZaTEVOQlFVTXNWVUZCVlN4SlFVRkpMRlZCUVZVc1NVRkJTU3hOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVFc1JVRkJSVHRuUWtGRmFFY3NTVUZCUnl4WFFVRlhMRWxCUVVrc1NVRkJTU3hGUVVGRE8yOUNRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGQk8ybENRVUZGTzNGQ1FVVTNReXhKUVVGSExHRkJRV0VzU1VGQlNTeEpRVUZKTEVWQlFVTTdiMEpCUVVVc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVRTdhVUpCUVVVN1owSkJSVE5FTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHRaUVVWdVFpeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGQkxFVkJRVVU3WjBKQlJWUXNkVUpCUVhWQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRTdaMEpCUlROQ0xFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUVR0WlFVVmtMRU5CUVVNc1EwRkJReXhEUVVGQk8xRkJSMDRzUTBGQlF5eERRVUZETEVOQlFVRTdTVUZIVGl4RFFVRkRPMGxCVlVRN096dFBRVWRITzBsQlEwZ3NZMEZCWXl4RFFVRkRMRTFCUVhkQ08xRkJSVzVETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVdkQ0xFTkJRVU1zVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUXl4RlFVRkZPMWxCUldwRUxFMUJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkZla0k3TzJWQlJVYzdXVUZGU0N4SlFVRkpMRTFCUVUwc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzU1VGQlNTeFhRVUZYTEVsQlFVa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4WFFVRlhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVmNzUTBGQlF6dFpRVWQ0U2pzN1pVRkZSenRaUVVOSUxFMUJRVTBzVlVGQlZTeEhRVUZITEhWQ1FVRjFRaXhEUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVFN1dVRkpPVVE3TzJWQlJVYzdXVUZGU0N4TlFVRk5MRlZCUVZVc1IwRkJSeXd5UWtGQk1rSXNRMEZCUXl4VlFVRlZMRWxCUVVrc1RVRkJUU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUVR0WlFVbG9SanM3WlVGRlJ6dFpRVU5JTEVsQlFVY3NRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEUxQlFVMHNSVUZCUXp0blFrRkZlRU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVGRExFOUJRVTg3WVVGRmVrSTdXVUZMUkRzN1pVRkZSenRaUVVOSUxGbEJRVmtzUTBGQlF5eFZRVUZWTEVsQlFVa3NWVUZCVlN4SlFVRkpMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUVN4RlFVRkZPMmRDUVVWb1J5eEpRVUZITEZkQlFWY3NTVUZCU1N4SlFVRkpMRVZCUVVNN2IwSkJSVzVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1RVRkJUU3hEUVVGQk8ybENRVVV4UWp0eFFrRkZTU3hKUVVGSExHRkJRV0VzU1VGQlNTeEpRVUZKTEVWQlFVTTdiMEpCUlRGQ0xFMUJRVTBzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJSU3hOUVVGTkxFTkJRVVVzUTBGQlFUdHZRa0ZGY2tNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEhRVUZKTEUxQlFVOHNSVUZCUlN4RFFVRkJPMmxDUVVWdVF6dG5Ra0ZGUkN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVUU3V1VGRmJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlFTeEZRVUZGTzJkQ1FVVlVMSFZDUVVGMVFpeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkJPMmRDUVVVelFpeE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFN1dVRkZaQ3hEUVVGRExFTkJRVU1zUTBGQlFUdFJRVWRPTEVOQlFVTXNRMEZCUXl4RFFVRkJPMGxCUjA0c1EwRkJRenREUVUxS0lpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dRMjl0Y0c5dVpXNTBJSDBnWm5KdmJTQmNJaTVjSWp0Y2JtbHRjRzl5ZENCN0lFTnZiWEJwYkdGMFpVVnljbTl5UlhoalpYQjBhVzl1TENCU1pXNWtaWEpGYm1kcGJtVWdmU0JtY205dElGd2lMaTlqYjIxd2FXeGhkR1ZjSWp0Y2JtbHRjRzl5ZENCN0lGTjBZV0pwYkdsNlpVVmphRzlGZUhCeVpYTnphVzl1TENCVGRHRmlhV3hwZW1WVGJtRndRMjlrWlVWNGNISmxjM05wYjI0Z2ZTQm1jbTl0SUZ3aUxpOWxlSEJ5WlhOemFXOXVYQ0k3WEc1cGJYQnZjblFnZXlCRGIyMXdiMjVsYm5STlpYUm9iMlJTWVhjc0lFTnZiWEJ2Ym1WdWRGQnliM0J6TENCRGIyMXdiMjVsYm5SVGRHRjBaU3dnUlhod2NtVnpjMmx2YmxKbFkyOXlaQ3dnVkVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6Ulc1MGNua2dmU0JtY205dElGd2lMaTlwYm1SbGVDNTBYQ0k3WEc1cGJYQnZjblFnZXlCa1pXTnZaR1ZJVkUxTVJXNTBhWFJwWlhNc0lGTjBZV0pwYkdsNlpVTnZiblJsYm5RZ2ZTQm1jbTl0SUZ3aUxpOTFkR2xzYVhScFpYTmNJanRjYmx4dVhHNWNibHh1Wlhod2IzSjBJR05zWVhOeklFTnZiWEJ2Ym1WdWRFaDVaSEpoZEdWelUzUnZjbVU4VkNCbGVIUmxibVJ6SUNoRGIyMXdiMjVsYm5SVGRHRjBaU0I4SUVOdmJYQnZibVZ1ZEZCeWIzQnpLVDU3WEc1Y2JseHVJQ0FnSUdWdWRISnBaWE02SUZSRGIyMXdiMjVsYm5SSWVXUnlZWFJsYzBWdWRISjVQRlErSUQwZ2UzMGdZWE1nSUZSRGIyMXdiMjVsYm5SSWVXUnlZWFJsYzBWdWRISjVQRlErWEc1Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRV1JrWEc0Z0lDQWdJQ292WEc0Z0lDQWdJSEIxYzJnb2JtRnRaVG9nYTJWNWIyWWdWQ3dnY21WamIzSmtPaUJGZUhCeVpYTnphVzl1VW1WamIzSmtLWHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1ZEhKcFpYTmJJRzVoYldVZ1hTQTlJSFJvYVhNdVpXNTBjbWxsYzFzZ2JtRnRaU0JkSUh4OElGdGRYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiblJ5YVdWeld5QnVZVzFsSUYxYklIUm9hWE11Wlc1MGNtbGxjMXNnYm1GdFpTQmRMbXhsYm1kMGFDQmRJRDBnY21WamIzSmtYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJCWkdSY2JpQWdJQ0FnS2k5Y2JpQWdJQ0IxY0dSaGRHVW9ibUZ0WlRvZ2EyVjViMllnVkN3Z2EyVjVJRG9nYm5WdFltVnlMQ0J5WldOdmNtUTZJRVY0Y0hKbGMzTnBiMjVTWldOdmNtUXBlMXh1WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11Wlc1MGNtbGxjMXNnYm1GdFpTQmRLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NWxiblJ5YVdWeld5QnVZVzFsSUYxYklHdGxlU0JkS1h0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVkSEpwWlhOYklHNWhiV1VnWFZzZ2EyVjVJRjBnUFNCeVpXTnZjbVJjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibHh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCU1pXMXZkbVVnWlc1MGNua25jeUJ6Ykc5MElHSjVJRkJ5YjNCbGNuUjVJRzl5SUZOMFlYUmxJRzVoYldWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J5WlcxdmRtVW9ibUZ0WlRvZ2EyVjViMllnVkN3Z2EyVjVPaUJ1ZFcxaVpYSXBlMXh1WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11Wlc1MGNtbGxjMXNnYm1GdFpTQmRLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJuUnlhV1Z6V3lCdVlXMWxJRjBnUFNCMGFHbHpMbVZ1ZEhKcFpYTmJJRzVoYldVZ1hTNW1hV3gwWlhJb0tISmxZMjl5WkN3Z2FXNWtaWGdwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2FXNWtaWGdnSVQwZ2EyVjVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dRMnhsWVc0Z1pXNTBjbmtnWW5rZ1VISnZjR1Z5ZEhrZ2IzSWdVM1JoZEdVZ2JtRnRaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHTnNaV0Z1S0c1aGJXVTZJR3RsZVc5bUlGUXBlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzUwY21sbGMxc2dibUZ0WlNCZElEMGdXMTFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ2ZWeHVYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOc1pXRnVJR1Z1ZEhKNUlHSjVJRkJ5YjNCbGNuUjVJRzl5SUZOMFlYUmxJRzVoYldWY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J5WlhObGRDZ3BlMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzUwY21sbGN5QTlJSHQ5SUdGeklGUkRiMjF3YjI1bGJuUkllV1J5WVhSbGMwVnVkSEo1UEZRK1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJSDFjYmx4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkdhVzVrSUdKNUlGQnliM0JsY25SNUlHOXlJRk4wWVhSbElHNWhiV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQnlaWFJ5YVdWMlpTaHVZVzFsT2lCclpYbHZaaUJVS1NBNklFVjRjSEpsYzNOcGIyNVNaV052Y21SYlhYdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bGJuUnlhV1Z6V3lCdVlXMWxJRjBnZkh3Z2RXNWtaV1pwYm1Wa1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVacGJtUWdRV3hzWEc0Z0lDQWdJQ292WEc0Z0lDQWdjbVYwY21sbGRtVnpLQ2w3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaVzUwY21sbGMxeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNWNibHh1WEc0Z0lDQWdYRzU5WEc1Y2JseHVYRzVjYmx4dVpYaHdiM0owSUdOc1lYTnpJRU52YlhCdmJtVnVkRWg1WkhKaGRHVnpQRnh1WEc0Z0lDQWdVeUJsZUhSbGJtUnpJRU52YlhCdmJtVnVkRk4wWVhSbExDQmNiaUFnSUNCY2JpQWdJQ0JRSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVUhKdmNITXNYRzRnSUNBZ1hHNGdJQ0FnVFNCbGVIUmxibVJ6SUVOdmJYQnZibVZ1ZEUxbGRHaHZaRkpoZHp4VExDQlFQbHh1SUNBZ0lGeHVQbnRjYmx4dVhHNGdJQ0FnTHk4Z1pXNTBjbWxsY3pvZ1ZFTnZiWEJ2Ym1WdWRFaDVaSEpoZEdWelJXNTBjbWxsY3p4VExDQlFQaUE5SUh0OUlHRnpJQ0JVUTI5dGNHOXVaVzUwU0hsa2NtRjBaWE5GYm5SeWFXVnpQRk1zSUZBK1hHNWNiaUFnSUNBdkx5QnpkRzl5WlRvZ1ZFTnZiWEJ2Ym1WdWRFaDVaSEpoZEdWelUzUnZjbVU4VXl3Z1VENGdQU0I3WEc1Y2JpQWdJQ0F2THlBZ0lDQWdjM1JoZEdVNklIdDlJR0Z6SUZNc1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUM4dklDQWdJQ0J3Y205d2N6b2dlMzBnWVhNZ1VDeGNibHh1SUNBZ0lDOHZJSDBnWVhNZ1ZFTnZiWEJ2Ym1WdWRFaDVaSEpoZEdWelUzUnZjbVU4VXl3Z1VENWNiaUFnSUNCY2JseHVJQ0FnSUdOdmJYQnZibVZ1ZERvZ1EyOXRjRzl1Wlc1MFBGTXNJRkFzSUUwK0lEMGdlMzBnWVhNZ1EyOXRjRzl1Wlc1MFBGTXNJRkFzSUUwK1hHNWNiaUFnSUNCemRHRjBaVG9nVXlBOUlIdDlJR0Z6SUZOY2JseHVJQ0FnSUhCeWIzQnpPaUJRSUQwZ2UzMGdZWE1nVUZ4dVhHNWNibHh1SUNBZ0lDUnpkR0YwWlRvZ1EyOXRjRzl1Wlc1MFNIbGtjbUYwWlhOVGRHOXlaVHhUUGlBOUlIdDlJR0Z6SUVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6VTNSdmNtVThVejVjYmx4dUlDQWdJQzh2SUNSd2NtOXdjem9nUTI5dGNHOXVaVzUwU0hsa2NtRjBaWE5UZEc5eVpUeFFQaUE5SUh0OUlHRnpJRU52YlhCdmJtVnVkRWg1WkhKaGRHVnpVM1J2Y21VOFVENWNibHh1WEc0Z0lDQWdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9ZMjl0Y0c5dVpXNTBPaUJEYjIxd2IyNWxiblE4VXl3Z1VDd2dUVDRzSUhOMFlYUmxQem9nVXl3Z2NISnZjSE0vT2lCUUtYdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZiWEJ2Ym1WdWRDQTlJR052YlhCdmJtVnVkRHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2djM1JoZEdVZ2ZId2dZMjl0Y0c5dVpXNTBMbk4wWVhSbEtUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuQnliM0J6SUQwZ2NISnZjSE1nZkh3Z1kyOXRjRzl1Wlc1MExuQnliM0J6TzF4dVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0a2MzUmhkR1VnUFNCdVpYY2dRMjl0Y0c5dVpXNTBTSGxrY21GMFpYTlRkRzl5WlNncE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUhSb2FYTXVKSEJ5YjNCeklEMGdibVYzSUVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6VTNSdmNtVW9LVHRjYmx4dVhHNGdJQ0FnSUNBZ0lDOHZJR052Ym5OdmJHVXViRzluS0NkUWFHRnpaU0JUWlhRZ1VISnZlSGtnWVc1a0lHOTBhR1Z5Snl3Z2RHaHBjeWxjYmx4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y0hKdmVHbGxjeWdwWEc1Y2JpQWdJQ0I5WEc1Y2JseHVYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVKMWFXeGtJRk4wWVhSbElGQnliM2hwWlhOY2JpQWdJQ0FnS2lCQVpHVnpZM0pwY0hScGIyNGdWWE5sSUhSb2FYTWdkRzhnWVdOMGFYWmhkR1VnZEdobElHUjVibUZ0YVdNZ2MzUmhkR1V1SUVadmNpQmtaV1poZFd4MElIUm9aU0JqYjI1emRISjFZM1FnWTJGc2JDQjBhR2x6WEc0Z0lDQWdJQ292WEc0Z0lDQWdjSEp2ZUdsbGN5Z3BlMXh1WEc0Z0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCMGFHbHpMbk4wWVhSbElEMDlJQ2R2WW1wbFkzUW5LWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MyVnNaaUE5SUhSb2FYTXVZMjl0Y0c5dVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENBa0lEMGdkR2hwY3p0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbVZ1ZEhKcFpYTW9kR2hwY3k1emRHRjBaU2t1YldGd0tHVTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCbFd6RmRJRDA5SUNkbWRXNWpkR2x2YmljcGV5QnlaWFIxY200Z095QjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J1WVcxbElEMGdaVnN3WFNCaGN5QnJaWGx2WmlCVFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCQmNuSmhlU0JRY205NGVWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0VGeWNtRjVMbWx6UVhKeVlYa29aVnN4WFNrcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHWXVjM1JoZEdWYklHNWhiV1VnWFNBOUlHNWxkeUJRY205NGVUeDBlWEJsYjJZZ1pWc3hYVDRvWlZzeFhTd2dlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUtIUmhjbWRsZEN3Z2NISnZjQ2w3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbXh2WnlnbloyVjBkR2x1Wnljc0lIUmhjbWRsZEN3Z2NISnZjQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHRnlaMlYwVzNCeWIzQmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzJWME9pQm1kVzVqZEdsdmJpaDBZWEpuWlhRc0lIQnliM0FzSUhaaGJIVmxMQ0J3Y205NEtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklHTnZibk52YkdVdWJHOW5LQ2R6WlhSMGFXNW5KeXdnZEdGeVoyVjBMQ0J3Y205d0xDQjJZV3gxWlN3Z2NISnZlQ2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjbWRsZEZ0d2NtOXdYU0E5SUhaaGJIVmxYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa0xuTjBZWFJsV3lCdVlXMWxJRjBnUFNCd2NtOTRYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXeG1MbWg1WkhKaGRHVnpVM1JoZEdVb2JtRnRaU2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFJRTkwYUdWeVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYkhObGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHpaV3htTG5OMFlYUmxMQ0JnSkhzZ2JtRnRaU0I5WUN3Z2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm5aWFFvS1hzZ2NtVjBkWEp1SUNRdWMzUmhkR1ZiSUc1aGJXVWdYVHNnZlN4Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sZENoMllXeDFaU2w3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkM1emRHRjBaVnNnYm1GdFpTQmRJRDBnZG1Gc2RXVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXeG1MbWg1WkhKaGRHVnpVM1JoZEdVb2JtRnRaU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMHNYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVoNVpISmhkR1VnVTNCbFkybG1hV01nVG05a1pWeHVJQ0FnSUNBcUlFQmtaWE5qY21sd2RHbHZiaUJWYzJVZ2RHaHBjeUIwYnlCU1pWSmxibVJsY2lCemRHRjBaU0JoYm1RZ2NISnZjSE1nYVc0Z1RtOWtaVnh1SUNBZ0lDQXFMMXh1SUNBZ0lHaDVaSEpoZEdWelRtOWtaU2h1YjJSbE9pQk9iMlJsSUh3Z1NGUk5URVZzWlcxbGJuUXBlMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlR4emRISnBibWNnZkNCdWRXeHNQaWdvY21WemIyeDJaU3dnY21WcVpXTjBLVDArZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxSUVsdWFYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUwxeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUcxdlkydDFjQ0E5SUZOMFlXSnBiR2w2WlVOdmJuUmxiblFvS0NnbmFXNXVaWEpJVkUxTUp5QnBiaUJ1YjJSbEtTQS9JRzV2WkdVdWFXNXVaWEpJVkUxTUlEb2dibTlrWlM1MFpYaDBRMjl1ZEdWdWRDa2dmSHdnSnljcElHRnpJSE4wY21sdVp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpQkZZMmh2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdWamFHOU5iMk5yZFhBZ1BTQlRkR0ZpYVd4cGVtVkZZMmh2Ulhod2NtVnpjMmx2YmlodGIyTnJkWEFzSUhSeWRXVXBJSHg4SUNjblhHNGdJQ0FnSUZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1UyNWhjRU52WkdWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnpibUZ3VFc5amEzVndJRDBnVTNSaFltbHNhWHBsVTI1aGNFTnZaR1ZGZUhCeVpYTnphVzl1S0dWamFHOU5iMk5yZFhBZ2ZId2diVzlqYTNWd0xDQjBjblZsS1NCOGZDQW5KMXh1WEc1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCV1pYSnBabWxqWVhScGIyNXpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtDRmxZMmh2VFc5amEzVndMbXhsYm1kMGFDQW1KaUFoYzI1aGNFMXZZMnQxY0M1c1pXNW5kR2dwZXlCY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2JuVnNiQ2s3SUhKbGRIVnlianNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nVW1WdVpHVnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lGSmxibVJsY2tWdVoybHVaU2h6Ym1Gd1RXOWphM1Z3SUh4OElHVmphRzlOYjJOcmRYQWdmSHdnYlc5amEzVndMQ0IwYUdsekxtTnZiWEJ2Ym1WdWRDd2dkR2hwY3k1amIyMXdiMjVsYm5RdWMzUmhkR1VwTG5Sb1pXNG9jbVZ6ZFd4MFBUNTdYRzRnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlnbmFXNXVaWEpJVkUxTUp5QnBiaUJ1YjJSbEtYc2dibTlrWlM1cGJtNWxja2hVVFV3Z1BTQnlaWE4xYkhRZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCcFppZ25kR1Y0ZEVOdmJuUmxiblFuSUdsdUlHNXZaR1VwZXlCdWIyUmxMblJsZUhSRGIyNTBaVzUwSUQwZ2NtVnpkV3gwSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2NtVnpkV3gwS1Z4dUlDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBMbU5oZEdOb0tHVnlQVDU3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdRMjl0Y0dsc1lYUmxSWEp5YjNKRmVHTmxjSFJwYjI0b1pYSXBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVnFaV04wS0dWeUtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdYRzVjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ1hHNGdJQ0FnWEc1Y2JseHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJJZVdSeVlYUmxJRk53WldOcFptbGpJRkpsWTI5eVpHVmNiaUFnSUNBZ0tpQkFaR1Z6WTNKcGNIUnBiMjRnVlhObElIUm9hWE1nZEc4Z1VtVlNaVzVrWlhJZ2MzUmhkR1VnWVc1a0lIQnliM0J6SUc5bUlGSmxZMjl5WkZ4dUlDQWdJQ0FxTDF4dUlDQWdJR2g1WkhKaGRHVnpVbVZqYjNKa0tISmxZMjl5WkRvZ1JYaHdjbVZ6YzJsdmJsSmxZMjl5WkNsN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxQSE4wY21sdVp5QjhJRzUxYkd3K0tDaHlaWE52YkhabExDQnlaV3BsWTNRcFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUc1dlpHVWdQU0J5WldOdmNtUXVibTlrWlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2lCSmJtbDBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdGIyTnJkWEFnUFNCVGRHRmlhV3hwZW1WRGIyNTBaVzUwS0Nnb2NtVmpiM0prTG0xdlkydDFjQ0FtSmlBbmFXNXVaWEpJVkUxTUp5QnBiaUJ5WldOdmNtUXViVzlqYTNWd0tTQS9JSEpsWTI5eVpDNXRiMk5yZFhBdWFXNXVaWEpJVkUxTUlEb2djbVZqYjNKa0xtMXZZMnQxY0Q4dWRHVjRkRU52Ym5SbGJuUXBJSHg4SUNjbktTQmhjeUJ6ZEhKcGJtYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb2dSV05vYjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCbFkyaHZUVzlqYTNWd0lEMGdVM1JoWW1sc2FYcGxSV05vYjBWNGNISmxjM05wYjI0b2JXOWphM1Z3TENCMGNuVmxLU0I4ZkNBbkoxeHVJQ0FnSUNCY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUlGTnVZWEJEYjJSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnS2k5Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjMjVoY0UxdlkydDFjQ0E5SUZOMFlXSnBiR2w2WlZOdVlYQkRiMlJsUlhod2NtVnpjMmx2YmlobFkyaHZUVzlqYTNWd0lIeDhJRzF2WTJ0MWNDd2dkSEoxWlNrZ2ZId2dKeWRjYmx4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1ZtVnlhV1pwWTJGMGFXOXVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppZ2haV05vYjAxdlkydDFjQzVzWlc1bmRHZ2dKaVlnSVhOdVlYQk5iMk5yZFhBdWJHVnVaM1JvS1hzZ1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtHNTFiR3dwT3lCeVpYUjFjbTQ3SUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQmNibHh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ29nVW1WdVpHVnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lGSmxibVJsY2tWdVoybHVaU2h6Ym1Gd1RXOWphM1Z3SUh4OElHVmphRzlOYjJOcmRYQWdmSHdnYlc5amEzVndMQ0IwYUdsekxtTnZiWEJ2Ym1WdWRDd2dkR2hwY3k1amIyMXdiMjVsYm5RdWMzUmhkR1VwTG5Sb1pXNG9jbVZ6ZFd4MFBUNTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlnbmFXNXVaWEpJVkUxTUp5QnBiaUJ1YjJSbEtYc2dYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtOWtaUzVwYm01bGNraFVUVXdnUFNCeVpYTjFiSFFnWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxiSE5sSUdsbUtDZDBaWGgwUTI5dWRHVnVkQ2NnYVc0Z2JtOWtaU2w3SUZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzNWc2RDQTlJR1JsWTI5a1pVaFVUVXhGYm5ScGRHbGxjeWdnY21WemRXeDBJQ2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnViMlJsTG5SbGVIUkRiMjUwWlc1MElEMGdZQ1I3SUhKbGMzVnNkQ0I5WUNCY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9jbVZ6ZFd4MEtWeHVJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTG1OaGRHTm9LR1Z5UFQ1N1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUTI5dGNHbHNZWFJsUlhKeWIzSkZlR05sY0hScGIyNG9aWElwWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZxWldOMEtHVnlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNibHh1WEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnWEc1Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1hHNGdJQ0FnWEc0Z0lDQWdYRzRnSUNBZ1hHNTlJbDE5IiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Db21wb25lbnRfaW5zdGFuY2VzLCBfQ29tcG9uZW50X2h5ZHJhdGVzLCBfQ29tcG9uZW50X211dGF0aW9uT2JzZXJ2ZXIsIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlZCwgX0NvbXBvbmVudF9wZW5kaW5nLCBfQ29tcG9uZW50X2NvbXBsZXRlZCwgX0NvbXBvbmVudF9jYW1vdWZsYWdlLCBfQ29tcG9uZW50X2NoZWNrQ29tcGlsYXRlZERvbmU7XG5pbXBvcnQgeyBDb21waWxhdGVFY2hvLCBDb21waWxhdGVFY2hvQXR0cmlidXRlcywgQ29tcGlsYXRlU25hcENvZGUsIENvbXBpbGF0ZVNuYXBDb2RlQXR0cmlidXRlcyB9IGZyb20gXCIuL2NvbXBpbGF0ZVwiO1xuaW1wb3J0IHsgU2Vuc2VuRW1pdHRlciB9IGZyb20gXCIuL2VtaXR0ZXJcIjtcbmltcG9ydCB7IEZpbmRFeHByZXNzaW9ucyB9IGZyb20gXCIuL2V4cHJlc3Npb25cIjtcbmltcG9ydCB7IENvbXBvbmVudEh5ZHJhdGVzIH0gZnJvbSBcIi4vaHlkcmF0ZXNcIjtcbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVDb21wb25lbnRNZXRob2RFdmVudChjb21wb25lbnQsIGV2KSB7XG4gICAgY29uc3QgXyA9IHt9O1xuICAgIF8uc2VsZiA9IGNvbXBvbmVudDtcbiAgICBfLmV2ZW50ID0gZXY7XG4gICAgcmV0dXJuIF87XG59XG4vKipcbiAqIFNlbnNlbiBIVE1MIEVsZW1lbnRcbiAqL1xuY2xhc3MgU2Vuc2VuSFRNTEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogTmV3IENvbnN0cnVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEeW5hbWljIHZhclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgbmFtZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkgeyByZXR1cm4gW107IH1cbiAgICAvKipcbiAgICAgKiBXaGVuIEVsZW1lbnQgaXMgY29ubmVjdGVkXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAvKipcbiAgICAgKiBXaGVuIEVsZW1lbnQgaXMgQWRvcHRlZCBieSBvdGhlciBET01cbiAgICAgKi9cbiAgICBhZG9wdGVkQ2FsbGJhY2soKSB7IH1cbiAgICAvKipcbiAgICAgKiBXaGVuZSBFbGVtZW50IGlzIERpc2Nvbm5lY3RlZCB0byB0aGUgY3VycmVudCBET01cbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHsgfVxuICAgIC8qKlxuICAgICAqIFdoZW5lIEVsZW1lbnQgY2hhbmdlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soKSB7XG4gICAgfVxufVxuLyoqXG4gKiBTZW5zZW4gU2NyZWVuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZW5zZW5TY3JlZW4ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1NlbnNlbiBTY3JlZW4nLCB0aGlzKTtcbiAgICB9XG59XG4vKipcbiAqIFNlbnNlbiBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogTmV3IENvbnN0cnVjdFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgX0NvbXBvbmVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLiR0YWdOYW1lID0gJyc7XG4gICAgICAgIHRoaXMubWV0aG9kcyA9IHt9O1xuICAgICAgICB0aGlzLiRvcHRpb25zID0ge307XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuICAgICAgICBfQ29tcG9uZW50X2h5ZHJhdGVzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ29tcG9uZW50X211dGF0aW9uT2JzZXJ2ZXIuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0NvbXBvbmVudF9wZW5kaW5nLnNldCh0aGlzLCAwKTtcbiAgICAgICAgX0NvbXBvbmVudF9jb21wbGV0ZWQuc2V0KHRoaXMsIDApO1xuICAgICAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICh0aGlzLiRvcHRpb25zLnN0YXRlIHx8IHt9KTtcbiAgICAgICAgdGhpcy5wcm9wcyA9ICh0aGlzLiRvcHRpb25zLnByb3BzIHx8IHt9KTtcbiAgICAgICAgdGhpcy5tZXRob2RzID0gKHRoaXMuJG9wdGlvbnMubWV0aG9kcyB8fCB7fSk7XG4gICAgICAgIHRoaXMuJGVtaXR0ZXIgPSBuZXcgU2Vuc2VuRW1pdHRlcigpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db21wb25lbnRfaHlkcmF0ZXMsIG5ldyBDb21wb25lbnRIeWRyYXRlcyh0aGlzKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0NvbXBvbmVudF9jYW1vdWZsYWdlKS5jYWxsKHRoaXMpXG4gICAgICAgICAgICAuJGVtaXR0aW5nKClcbiAgICAgICAgICAgIC4kaW5pdGlhbGl6ZSgpXG4gICAgICAgICAgICAuJHRlbXBsYXRlKClcbiAgICAgICAgICAgIC50aGVuKHRwbCA9PiB7XG4gICAgICAgICAgICBpZiAodHBsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRwbDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LmlubmVySFRNTCA9IHRwbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgLiRvYnNlcnZlcnMoKVxuICAgICAgICAgICAgICAgIC4kY29tcGlsYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzZXQgVGVtcGxhdGVcbiAgICAgKi9cbiAgICAkdGVtcGxhdGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvbXBvbmVudCB0ZW1wbGF0ZScsIHRoaXMuJG9wdGlvbnMudGVtcGxhdGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLiRvcHRpb25zLnRlbXBsYXRlICE9ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnaW5uZXJIVE1MJyBpbiB0aGlzLiRvcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy4kb3B0aW9ucy5lbGVtZW50LmlubmVySFRNTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gdGhpcy4kb3B0aW9ucy50ZW1wbGF0ZS5tYXRjaCgvPFxcLz9bXj5dKz4vZ2kpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycsIGNoZWNrKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiBUZW1wbGF0ZSBpcyBTdHJpbmcgSFRNTCBjb2RlXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy4kb3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRWxzZSwgaXQncyBmaWxlIHBhdGhcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSBgJHt1cmwub3JpZ2lufSR7KHVybC5wYXRobmFtZSA9PSAnLycpID8gJycgOiB1cmwucGF0aG5hbWV9LyR7dGhpcy4kb3B0aW9ucy50ZW1wbGF0ZX1gO1xuICAgICAgICAgICAgICAgIGZldGNoKHBhdGgpLnRoZW4oZCA9PiB7IGlmIChkLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IHJldHVybiBkLnRleHQoKTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NoZWNrdXAnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXIgPT4geyByZXNvbHZlKHVuZGVmaW5lZCk7IH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVcbiAgICAgKi9cbiAgICAkaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy4kaW5pdGlhbGl6ZUVsZW1lbnQoKTtcbiAgICAgICAgLy8gaWYodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpe1xuICAgICAgICAvLyAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICAgICAgLy8gfVxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdzdGFydCcsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgJGluaXRpYWxpemVFbGVtZW50KHByb3BzKSB7XG4gICAgICAgIGNvbnN0ICRwcm9wcyA9IHByb3BzIHx8IHRoaXMuJG9wdGlvbnMgfHwgbnVsbDtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICgkcHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuJHRhZ05hbWUgPSBgc24tJHskcHJvcHMubmFtZX1gO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBGaW5kIGN1cnJlbnQgRWxlbWVudCBzZW50XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuJG9wdGlvbnMuZWxlbWVudCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3RoaXMuJG9wdGlvbnMuZWxlbWVudH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlZmluZSBjdXN0b20gRWxlbWVudFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0aGlzLiR0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGtsYXNzID0gY2xhc3MgZXh0ZW5kcyBTZW5zZW5IVE1MRWxlbWVudCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29uc3RydWN0Jywgc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuJGtsYXNzLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnY29ubmVjdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuYWRvcHRlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXR0ZXI/LmRpc3BhdGNoKCdhZG9wdGVkJywgc2VsZik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLiRrbGFzcy5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdHRlcj8uZGlzcGF0Y2goJ2Rpc2Nvbm5lY3RlZCcsIHNlbGYpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy4ka2xhc3MucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IChuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0dGVyPy5kaXNwYXRjaCgnblByb3BzQ2hhbmdlZCcsIHsgbmFtZSwgdmFsdWUsIG9sZFZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuJGtsYXNzLCAnb2JzZXJ2ZWRBdHRyaWJ1dGVzJywge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHNlbGYucHJvcHMgPT0gJ29iamVjdCcpID8gT2JqZWN0LmtleXMoc2VsZi5wcm9wcykgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0aGlzLiR0YWdOYW1lLCB0aGlzLiRrbGFzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnaXMnLCBgJHt0aGlzLiR0YWdOYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0aGlzLiR0YWdOYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2VsZW1lbnRSZWFkeScsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBET00gT2JzZXJ2ZXJcbiAgICAgKi9cbiAgICAkb2JzZXJ2ZXJzKCkge1xuICAgICAgICBpZiAodGhpcy4kb3B0aW9ucy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NvbXBvbmVudF9tdXRhdGlvbk9ic2VydmVyLCBuZXcgTXV0YXRpb25PYnNlcnZlcigocmVjb3JkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NvbXBvbmVudF9tdXRhdGlvbk9ic2VydmVkLCByZWNvcmRzLCBcImZcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZHMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWNvcmQuYXR0cmlidXRlTmFtZSAmJiB0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjb3JkLmF0dHJpYnV0ZU5hbWUgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gcmVjb3JkLmF0dHJpYnV0ZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuJG9wdGlvbnMuZWxlbWVudC5nZXRBdHRyaWJ1dGUocmVjb3JkLmF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgncHJvcHNDaGFuZ2VkJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlY29yZC5hdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiByZWNvcmQub2xkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ211dGF0aW9uT2JzZXJ2ZWQnLCByZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLyoqICogRW1pdCBFdmVudCAqL1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25zT2JzZXJ2ZWQnLCByZWNvcmRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSwgXCJmXCIpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X211dGF0aW9uT2JzZXJ2ZXIsIFwiZlwiKS5vYnNlcnZlKHRoaXMuJG9wdGlvbnMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBPYmplY3Qua2V5cyh0aGlzLnByb3BzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5kaXNwYXRjaCgnbXV0YXRpb25PYnNlcnZhdGlvblJlYWR5JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X211dGF0aW9uT2JzZXJ2ZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGh5ZHJhdGVzU3RhdGUoc2xvdCkge1xuICAgICAgICBjb25zdCBzdG9yZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvbXBvbmVudF9oeWRyYXRlcywgXCJmXCIpPy4kc3RhdGUucmV0cmlldmUoc2xvdCk7XG4gICAgICAgIGlmIChzdG9yZT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdG9yZS5tYXAocmVjb3JkID0+IHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfaHlkcmF0ZXMsIFwiZlwiKT8uaHlkcmF0ZXNSZWNvcmQocmVjb3JkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdzdGF0ZUh5ZHJhdGVkJywgeyByZWNvcmQsIGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcGlsYXRlIHRyYW5zYWN0aW9uc1xuICAgICAqL1xuICAgICRjb21waWxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgRmluZEV4cHJlc3Npb25zKHRoaXMuJG9wdGlvbnMuZWxlbWVudCwgKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db21wb25lbnRfcGVuZGluZywgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X3BlbmRpbmcsIFwiZlwiKSwgX2ErKywgX2EpLCBcImZcIik7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogRmluZCBTdGF0ZSB0byBhdXRvLWNvbXBpbGF0ZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlY29yZC5tb2NrdXA/LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzTWF0Y2hlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLih2YWx1ZSB8fCAnJykubWF0Y2hBbGwobmV3IFJlZ0V4cChgKCR7T2JqZWN0LmtleXModGhpcy5zdGF0ZSkuam9pbignfCcpfSlgLCAnZycpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLih2YWx1ZSB8fCAnJykubWF0Y2hBbGwobmV3IFJlZ0V4cChgdGhpc1xcXFwuc3RhdGVcXFxcLigke09iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmpvaW4oJyl8dGhpc1xcXFwuc3RhdGVcXFxcLignKX0pYCwgJ2cnKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi4odmFsdWV8fCcnKS5tYXRjaEFsbChuZXcgUmVnRXhwKGB0aGlzXFxcXC5wcm9wc1xcXFwuJHsgT2JqZWN0LmtleXModGhpcy5wcm9wcykuam9pbignfHRoaXNcXFxcLnByb3BzXFxcXC4nKSB9YCwgJ2cnKSksXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzTWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNNYXRjaGVzLm1hcChtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCByZWNvcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHB1cmdlID0gbWF0Y2guZmlsdGVyKHYgPT4gdiAhPSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBwdXJnZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVyZ2UuaW5wdXQgPSBtYXRjaC5pbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRDbG9uZS5tYXRjaCA9IHB1cmdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvbXBvbmVudF9oeWRyYXRlcywgXCJmXCIpPy4kc3RhdGUucHVzaChzbG90LCByZWNvcmRDbG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2V4cHJlc3Npb25EZXRlY3RlZCcsIHJlY29yZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKiogKiBFbWl0IEV2ZW50ICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdjb21waWxhdGlvblJlYWR5JywgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0dGluZ1xuICAgICAqL1xuICAgICRlbWl0dGluZygpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsIDogQmVnaW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignZWxlbWVudFJlYWR5JywgKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybignQ3JlYXRlIEVsZW1lbnQgTW9kZWwnLCBhcmdzKVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsIDogRW5kXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogTXV0YXRpb25zIE9ic2VydmVycyA6IEJlZ2luXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oJ211dGF0aW9uT2JzZXJ2YXRpb25SZWFkeScsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ011dGF0aW9uIE9ic2VydmVkJywgYXJncylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignbXV0YXRpb25PYnNlcnZlZCcsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ011dGF0aW9uIE9ic2VydmVkJywgYXJncylcbiAgICAgICAgICAgIGlmIChhcmdzLmVtaXQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X2h5ZHJhdGVzLCBcImZcIik/Lmh5ZHJhdGVzTm9kZShhcmdzLmVtaXQudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignbXV0YXRpb25zT2JzZXJ2ZWQnLCAoYXJncykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdNdXRhdGlvbnMgT2JzZXJ2ZWQnLCBhcmdzKVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11dGF0aW9ucyBPYnNlcnZlcnMgOiBFbmRcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21waWxhdGUgUmVjb3JkIDogQmVnaW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbignZXhwcmVzc2lvbkRldGVjdGVkJywgKCQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VkID0gW107XG4gICAgICAgICAgICBpZiAoJC5lbWl0KSB7XG4gICAgICAgICAgICAgICAgaWYgKCQuZW1pdC50eXBlID09ICdlY2hvJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZUVjaG8odGhpcywgJC5lbWl0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCQuZW1pdC50eXBlID09ICdzbmFwY29kZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChDb21waWxhdGVTbmFwQ29kZSh0aGlzLCAkLmVtaXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJC5lbWl0LnR5cGUgPT0gJ2F0dHJpYnV0ZS5lY2hvJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZUVjaG9BdHRyaWJ1dGVzKHRoaXMsICQuZW1pdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgkLmVtaXQudHlwZSA9PSAnYXR0cmlidXRlLnNuYXBjb2RlJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlZC5wdXNoKENvbXBpbGF0ZVNuYXBDb2RlQXR0cmlidXRlcyh0aGlzLCAkLmVtaXQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJC5lbWl0LnR5cGUgPT0gJ2RpcmVjdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZWQucHVzaChuZXcgUHJvbWlzZSgociwgaikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoJ2RpcmVjdGl2ZScgaW4gJC5lbWl0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IChgQ29ycnVwdGVkIGRpcmVjdGl2ZSA6IG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAkLmVtaXQuZGlyZWN0aXZlPy5tYWluICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAoYENvcnJ1cHRlZCBkaXJlY3RpdmUgOiA8ICR7JC5lbWl0LmRpcmVjdGl2ZT8ubmFtZX0gPmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJC5lbWl0LmRpcmVjdGl2ZS5tYWluKHRoaXMsICQuZW1pdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByKCQuZW1pdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvbWlzZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxvdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29tcG9uZW50X2NvbXBsZXRlZCwgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X2NvbXBsZXRlZCwgXCJmXCIpLCBfYSsrLCBfYSksIFwiZlwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKCdDb21waWxhdGVkJywgbG90KVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db21wb25lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0NvbXBvbmVudF9jaGVja0NvbXBpbGF0ZWREb25lKS5jYWxsKHRoaXMsIGxvdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oJ2NvbXBpbGF0ZScsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ0V4cHJlc3Npb24gUmVjb3JkZWQnLCBhcmdzLmVtaXQpXG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29tcGlsYXRlIFJlY29yZCA6IEVuZFxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1c3RvbSBFbWl0dGVyIExpc3RlbmVyIDogQmVnaW5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVtaXQpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuJG9wdGlvbnMuZW1pdCkubWFwKGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZVsxXSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0dGVyPy5saXN0ZW4oZVswXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgZVsxXS5hcHBseSh0aGlzLCBbYXJndW1lbnRzWzBdXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXN0b20gRW1pdHRlciBMaXN0ZW5lciA6IEVuZFxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuX0NvbXBvbmVudF9oeWRyYXRlcyA9IG5ldyBXZWFrTWFwKCksIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlciA9IG5ldyBXZWFrTWFwKCksIF9Db21wb25lbnRfbXV0YXRpb25PYnNlcnZlZCA9IG5ldyBXZWFrTWFwKCksIF9Db21wb25lbnRfcGVuZGluZyA9IG5ldyBXZWFrTWFwKCksIF9Db21wb25lbnRfY29tcGxldGVkID0gbmV3IFdlYWtNYXAoKSwgX0NvbXBvbmVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQ29tcG9uZW50X2NhbW91ZmxhZ2UgPSBmdW5jdGlvbiBfQ29tcG9uZW50X2NhbW91ZmxhZ2UoKSB7XG4gICAgdGhpcy4kZW1pdHRlcj8ubGlzdGVuKCdzdGFydCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuJG9wdGlvbnMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRvcHRpb25zLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuJGVtaXR0ZXI/Lmxpc3RlbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRvcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG59LCBfQ29tcG9uZW50X2NoZWNrQ29tcGlsYXRlZERvbmUgPSBmdW5jdGlvbiBfQ29tcG9uZW50X2NoZWNrQ29tcGlsYXRlZERvbmUobG90KSB7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvbXBvbmVudF9wZW5kaW5nLCBcImZcIikgPT0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29tcG9uZW50X2NvbXBsZXRlZCwgXCJmXCIpKSB7XG4gICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgdGhpcy4kZW1pdHRlcj8uZGlzcGF0Y2goJ2NvbXBpbGF0ZWQnLCBsb3QpO1xuICAgICAgICBpZiAoIXRoaXMuaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8qKiAqIEVtaXQgRXZlbnQgKi9cbiAgICAgICAgICAgIHRoaXMuJGVtaXR0ZXI/LmRpc3BhdGNoKCdyZWFkeScsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21waWxhdGUgRG9uZScsIGxvdClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuLyoqXG4gKiBFeHBvcnRhdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vuc2VuIHtcbn1cblNlbnNlbi5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5TZW5zZW4uU2NyZWVuID0gU2Vuc2VuU2NyZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOWpiM0psTDJsdVpHVjRMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3p0QlFVRkJMRTlCUVU4c1JVRkJSU3hoUVVGaExFVkJRVVVzZFVKQlFYVkNMRVZCUVVVc2FVSkJRV2xDTEVWQlFVVXNNa0pCUVRKQ0xFVkJRVVVzVFVGQlRTeGhRVUZoTEVOQlFVTTdRVUZEY2tnc1QwRkJUeXhGUVVGRkxHRkJRV0VzUlVGQlJTeE5RVUZOTEZkQlFWY3NRMEZCUXp0QlFVTXhReXhQUVVGUExFVkJRVVVzWlVGQlpTeEZRVUZGTEUxQlFVMHNZMEZCWXl4RFFVRkRPMEZCUlM5RExFOUJRVThzUlVGQlJTeHBRa0ZCYVVJc1JVRkJSU3hOUVVGTkxGbEJRVmtzUTBGQlF6dEJRVkV2UXl4TlFVRk5MRlZCUVZVc01FSkJRVEJDTEVOQlVYaERMRk5CUVRaQ0xFVkJRVVVzUlVGQlV6dEpRVVYwUXl4TlFVRk5MRU5CUVVNc1IwRkJiVU1zUlVGQmJVTXNRMEZCUVR0SlFVYzNSU3hEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEZOQlFWTXNRMEZCUXp0SlFVVnVRaXhEUVVGRExFTkJRVU1zUzBGQlN5eEhRVUZITEVWQlFVVXNRMEZCUVR0SlFVVmFMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJSV0lzUTBGQlF6dEJRVTFFT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hwUWtGQmNVSXNVMEZCVVN4WFFVRlhPMGxCWlRGRE96dFBRVVZITzBsQlEwZ3NXVUZCV1N4TFFVRlRPMUZCUldwQ0xFdEJRVXNzUlVGQlJTeERRVUZETzFGQldGbzdPMWRCUlVjN1VVRkRTQ3hWUVVGTExFZEJRVThzUlVGQlR5eERRVUZETzFGQlZXaENMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzBsQlJYWkNMRU5CUVVNN1NVRnlRa1E3TzA5QlJVYzdTVUZEU0N4TlFVRk5MRXRCUVVzc2EwSkJRV3RDTEV0QlFVa3NUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJjVUkzUXpzN1QwRkZSenRKUVVOSUxHbENRVUZwUWl4TFFVRkhMRU5CUVVNN1NVRkhja0k3TzA5QlJVYzdTVUZEU0N4bFFVRmxMRXRCUVVjc1EwRkJRenRKUVVkdVFqczdUMEZGUnp0SlFVTklMRzlDUVVGdlFpeExRVUZITEVOQlFVTTdTVUZKZUVJN08wOUJSVWM3U1VGRFNDeDNRa0ZCZDBJN1NVRkZlRUlzUTBGQlF6dERRVWxLTzBGQlQwUTdPMGRCUlVjN1FVRkZTQ3hOUVVGTkxFOUJRVThzV1VGQldUdEpRVWR5UWl4WlFVRlpMRTFCUVhGQ08xRkJSVGRDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZCTzBsQlJYWkRMRU5CUVVNN1EwRkpTanRCUVZGRU96dEhRVVZITzBGQlEwZ3NUVUZCVFN4UFFVRlBMRk5CUVZNN1NVRXlRMnhDT3p0UFFVVkhPMGxCUTBZc1dVRkJXU3hQUVVGcFJEczdVVUZ3UXpsRUxHRkJRVkVzUjBGQldTeEZRVUZGTEVOQlFVTTdVVUZOZGtJc1dVRkJUeXhIUVVFeVF5eEZRVUV5UXl4RFFVRkRPMUZCUlRsR0xHRkJRVkVzUjBGQk9FTXNSVUZCT0VNc1EwRkJRVHRSUVUxd1J5eFpRVUZQTEVkQlFWa3NTMEZCU3l4RFFVRkRPMUZCUjNwQ0xITkRRVUZ6UkR0UlFVVjBSQ3c0UTBGQmMwTTdVVUZGZEVNc09FTkJRWE5ETzFGQlRYUkRMRFpDUVVGdFFpeERRVUZETEVWQlFVTTdVVUZGY2tJc0swSkJRWEZDTEVOQlFVTXNSVUZCUXp0UlFWTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXp0UlFVVjRRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhMUVVGTExFbEJRVVVzUlVGQlJTeERRVUZWTEVOQlFVRTdVVUZGTDBNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhKUVVGRkxFVkJRVVVzUTBGQlZTeERRVUZCTzFGQlJTOURMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1NVRkJSU3hGUVVGRkxFTkJRVmtzUTBGQlFUdFJRVVZ5UkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzWVVGQllTeEZRVUZGTEVOQlFVTTdVVUZGY0VNc2RVSkJRVUVzU1VGQlNTeDFRa0ZCWVN4SlFVRkpMR2xDUVVGcFFpeERRVUYzUWl4SlFVRkpMRU5CUVVNc1RVRkJRU3hEUVVGQk8xRkJSMjVGTEhWQ1FVRkJMRWxCUVVrc2JVUkJSVmtzVFVGR2FFSXNTVUZCU1N4RFFVVmpPMkZCUldJc1UwRkJVeXhGUVVGRk8yRkJSVmdzVjBGQlZ5eEZRVUZGTzJGQlJXSXNVMEZCVXl4RlFVRkZPMkZCUlZBc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlFTeEZRVUZGTzFsQlJWQXNTVUZCUnl4SFFVRkhMRVZCUVVNN1owSkJSVWdzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNN1owSkJSWEJDTEVsQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExGbEJRVmtzVjBGQlZ5eEZRVUZETzI5Q1FVVTFReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVVY2UXp0aFFVVktPMWxCUlVRc1NVRkJTVHRwUWtGRlF5eFZRVUZWTEVWQlFVVTdhVUpCUlZvc1ZVRkJWU3hGUVVGRkxFTkJSV2hDTzFGQlJVd3NRMEZCUXl4RFFVRkRMRU5CUlZRN1NVRkZUQ3hEUVVGRE8wbEJTMFE3TzA5QlJVYzdTVUZEU0N4VFFVRlRPMUZCUlV3c1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQmNVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGRExFVkJRVVU3V1VGRmRFUXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZCTzFsQlJ6RkVMRWxCUVVjc1QwRkJUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVNN1owSkJSWHBETEVsQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExGbEJRVmtzVjBGQlZ5eEZRVUZETzI5Q1FVVTFReXhKUVVGSExGZEJRVmNzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJRenQzUWtGRmNFTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkJPM2RDUVVWNFF5eFBRVUZQTzNGQ1FVVldPMmxDUVVkS08yZENRVVZFTEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRuUWtGRmJrSXNUMEZCVHp0aFFVVldPMmxDUVVWSE8yZENRVVZCTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJRenRuUWtGSE0wUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVRTdaMEpCUnpOQ096dHRRa0ZGUnp0blFrRkRTQ3hKUVVGSExFdEJRVXNzUlVGQlF6dHZRa0ZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkJReXhQUVVGUE8ybENRVUZGTzJkQ1FVbHlSRHM3YlVKQlJVYzdaMEpCUlVnc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGQk8yZENRVVZzUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZQTEVkQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZUTEVsQlFVc3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGVExFVkJRVVVzUTBGQlFUdG5Ra0ZIZUVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVFc1JVRkJSU3hIUVVGRkxFbEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNTVUZCU1N4SFFVRkhMRVZCUVVNN2IwSkJRVVVzVDBGQlR5eFRRVUZUTEVOQlFVRTdhVUpCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUVN4RFFVRkRMRU5CUVVNc1EwRkJRenR4UWtGRk0wVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRU3hGUVVGRk8yOUNRVVZTTEVsQlFVY3NTVUZCU1N4RlFVRkRPM2RDUVVWS0xFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJSU3hEUVVGQk8zZENRVVU1UWl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVUU3Y1VKQlJXaENPM2xDUVVWSE8zZENRVUZGTEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenR4UWtGQlJUdG5Ra0ZITDBJc1EwRkJReXhEUVVGRE8zRkNRVVZFTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVFc1JVRkJSU3hIUVVGRkxFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGQk8yZENRVWQyUXl4UFFVRlBPMkZCUlZZN1VVRk5UQ3hEUVVGRExFTkJRVU1zUTBGQlFUdEpRVVZPTEVOQlFVTTdTVUYzUTBRN08wOUJSVWM3U1VGRlNDeFhRVUZYTzFGQlJWQXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEVOQlFVTTdVVUZGTVVJc2IwUkJRVzlFTzFGQlJYQkVMR2RFUVVGblJEdFJRVVZvUkN4SlFVRkpPMUZCUlVvc2JVSkJRVzFDTzFGQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWMlF5eFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVVm9RaXhEUVVGRE8wbEJTVVFzYTBKQlFXdENMRU5CUVVNc1MwRkJaMFE3VVVGRkwwUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1MwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRPMUZCUlRsRExFMUJRVTBzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0UlFVZHNRaXhKUVVGSExFMUJRVTBzUlVGQlF6dFpRVVZPTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUeXhOUVVGTkxFTkJRVU1zU1VGQlN5eEZRVUZGTEVOQlFVRTdXVUZIY2tNN08yVkJSVWM3V1VGRFNDeEpRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRE8yZENRVVZ5UWl4SlFVRkhMRTlCUVU4c1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVsQlFVa3NVVUZCVVN4RlFVRkRPMjlDUVVWNFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1IwRkJSeXhSUVVGUkxFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUkxFVkJRVVVzUTBGQlowSXNRMEZCUVR0cFFrRkZPVVk3WVVGRlNqdFpRVWRFT3p0bFFVVkhPMWxCUTBnc1NVRkJSeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRE8yZENRVVZzUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVTBzVTBGQlVTeHBRa0ZCZDBJN2IwSkJSV2hFTEZsQlFWa3NTMEZCV1R0M1FrRkZjRUlzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkJPM2RDUVVWYUxHMUNRVUZ0UWp0M1FrRkRia0lzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzI5Q1FVVXZReXhEUVVGRE8ybENRVVZLTEVOQlFVRTdaMEpCUjBRc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzUjBGQlJTeEZRVUZGTzI5Q1FVVXhReXh0UWtGQmJVSTdiMEpCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZGTDBNc1EwRkJReXhEUVVGQk8yZENRVWRFTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExHVkJRV1VzUjBGQlJ5eEhRVUZGTEVWQlFVVTdiMEpCUlhoRExHMUNRVUZ0UWp0dlFrRkRia0lzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJkQ1FVVTNReXhEUVVGRExFTkJRVUU3WjBKQlIwUXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zYjBKQlFXOUNMRWRCUVVjc1IwRkJSU3hGUVVGRk8yOUNRVVUzUXl4dFFrRkJiVUk3YjBKQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRmJFUXNRMEZCUXl4RFFVRkJPMmRDUVVkRUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMSGRDUVVGM1FpeEhRVUZITEVOQlFVTXNTVUZCV1N4RlFVRkZMRXRCUVZrc1JVRkJSU3hSUVVGbExFVkJRVU1zUlVGQlJUdHZRa0ZGTlVZc2JVSkJRVzFDTzI5Q1FVTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4bFFVRmxMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUzBGQlN5eEZRVUZGTEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNN1owSkJSWGhGTEVOQlFVTXNRMEZCUVR0blFrRkhSQ3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc2IwSkJRVzlDTEVWQlFVVTdiMEpCUlhKRUxFZEJRVWNzUlVGQlJUdDNRa0ZGUkN4UFFVRlBMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eEpRVUZKTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZCTzI5Q1FVVjZSU3hEUVVGRE8ybENRVVZLTEVOQlFVTXNRMEZCUVR0blFrRkhSaXhqUVVGakxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlJTeERRVUZCTzJGQlJYSkVPMWxCUlVRc1NVRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNXVUZCV1N4WFFVRlhMRVZCUVVNN1owSkJSVFZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlFUdGhRVVZzUlR0WlFVVkVMRWxCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4WlFVRlpMRmRCUVZjc1EwRkJReXhGUVVGRE8yZENRVVV2UXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVrc1NVRkJTU3hEUVVGRExGRkJRVk1zUlVGQlJTeERRVUZETEVOQlFVRTdZVUZGZGtVN1dVRkhSQ3h0UWtGQmJVSTdXVUZEYmtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJSMnBFTzFGQlIwUXNUMEZCVHl4SlFVRkpMRU5CUVVNN1NVRkZhRUlzUTBGQlF6dEpRVlZFT3p0UFFVVkhPMGxCUTBnc1ZVRkJWVHRSUVVkT0xFbEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRmxCUVZrc1YwRkJWeXhGUVVGRE8xbEJSVFZETEhWQ1FVRkJMRWxCUVVrc0swSkJRWEZDTEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVTXNSVUZCUlR0blFrRkZja1FzU1VGQlJ5eFBRVUZQTEVWQlFVTTdiMEpCUlZBc2RVSkJRVUVzU1VGQlNTd3JRa0ZCY1VJc1QwRkJUeXhOUVVGQkxFTkJRVUU3YjBKQlJXaERMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZCTEVWQlFVVTdkMEpCUlhCQ0xFbEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NTVUZCU1N4WlFVRlpMRVZCUVVNN05FSkJSVE5DTEVsQlFVY3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNXVUZCV1N4WFFVRlhMRVZCUVVNN1owTkJSWEJGTEVsQlFVY3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZETzI5RFFVVnNReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNZVUZCZDBNc1EwRkJRVHR2UTBGRk0wUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlFUdHZRMEZGZEVVc1lVRkJZVHR2UTBGRFlpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkZMRWRCUVVjc1EwRkJSU3hIUVVGSExFdEJRVXNzUTBGQlFUdHZRMEZIZWtJc2JVSkJRVzFDTzI5RFFVTnVRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4alFVRmpMRVZCUVVVN2QwTkJRM0JETEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1lVRkJZVHQzUTBGRE1VSXNTMEZCU3p0M1EwRkRUQ3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEZGQlFWRTdjVU5CUXpWQ0xFTkJRVU1zUTBGQlF6dHBRMEZGVGpzMlFrRkZTanQ1UWtGSFNqdDNRa0ZGUkN4dFFrRkJiVUk3ZDBKQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzI5Q1FVVjRSQ3hEUVVGRExFTkJRVU1zUTBGQlFUdHZRa0ZGUml4dFFrRkJiVUk3YjBKQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEcxQ1FVRnRRaXhGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzJsQ1FVVjZSRHRaUVVkTUxFTkJRVU1zUTBGQlF5eE5RVUZCTEVOQlFVRTdXVUZGUml4MVFrRkJRU3hKUVVGSkxHMURRVUZyUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUXp0blFrRkZha1FzVTBGQlV5eEZRVUZGTEVsQlFVazdaMEpCUldZc1QwRkJUeXhGUVVGRkxFbEJRVWs3WjBKQlJXSXNWVUZCVlN4RlFVRkZMRWxCUVVrN1owSkJSV2hDTEdGQlFXRXNSVUZCUlN4SlFVRkpPMmRDUVVWdVFpeHhRa0ZCY1VJc1JVRkJSU3hKUVVGSk8yZENRVVV6UWl4cFFrRkJhVUlzUlVGQlJTeEpRVUZKTzJkQ1FVVjJRaXhsUVVGbExFVkJRVVVzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8yRkJSVE5ETEVOQlFVTXNRMEZCUVR0WlFVZEdMRzFDUVVGdFFqdFpRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5d3dRa0ZCTUVJc1JVRkJSU3gxUWtGQlFTeEpRVUZKTEcxRFFVRnJRaXhEUVVGRExFTkJRVU03VTBGRkwwVTdVVUZMUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVWb1FpeERRVUZETzBsQlVVUXNZVUZCWVN4RFFVRkRMRWxCUVdsQ08xRkJSVE5DTEUxQlFVMHNTMEZCU3l4SFFVRkhMSFZDUVVGQkxFbEJRVWtzTWtKQlFWVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRkxFbEJRVWtzUTBGQlJTeERRVUZCTzFGQlIzSkVMRWxCUVVjc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlF6dFpRVVZpTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGQkxFVkJRVVU3WjBKQlJXUXNkVUpCUVVFc1NVRkJTU3d5UWtGQlZTeEZRVUZGTEdOQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNN2NVSkJSV3BETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJReXhGUVVGRk8yOUNRVVZXTEcxQ1FVRnRRanR2UWtGRGJrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVWQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJReXhEUVVGRExFTkJRVU03WjBKQlJUZEVMRU5CUVVNc1EwRkJReXhEUVVGQk8xbEJSVllzUTBGQlF5eERRVUZETEVOQlFVRTdVMEZGVER0UlFVZEVMRTlCUVU4c1NVRkJTU3hEUVVGRE8wbEJSV2hDTEVOQlFVTTdTVUZSUkRzN1QwRkZSenRKUVVOSUxGVkJRVlU3VVVGRlRpeEpRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhaUVVGWkxGZEJRVmNzUlVGQlF6dFpRVVUxUXl4bFFVRmxMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4TlFVRk5MRVZCUVVNc1JVRkJSVHM3WjBKQlJUZERMR2xFUVVGQkxFTkJRVUVzTUVSQlFXRXNSVUZCWWl4SlFVRmxMRWxCUVVFc1EwRkJRU3hOUVVGQkxFTkJRVU03WjBKQlJXaENPenR0UWtGRlJ6dG5Ra0ZGU0N4SlFVRkhMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeFJRVUZSTEVWQlFVTTdiMEpCUlRkQ0xFMUJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRVZCUVVVc1YwRkJWeXhEUVVGRE8yOUNRVWQ2UXl4TlFVRk5MRkZCUVZFc1IwRkJSenQzUWtGRllpeEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkxMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVWd1JpeEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4dFFrRkJiMElzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkZjRWdzYjBoQlFXOUlPM0ZDUVVOMlNDeERRVUZCTzI5Q1FVZEVMRWxCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUlVGQlF6dDNRa0ZGWml4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlFTeEZRVUZGT3pSQ1FVVm9RaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlFUczBRa0ZGTjBNc1RVRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVFc1JVRkJSU3hEUVVGQkxFTkJRVU1zU1VGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUVRzMFFrRkZNME1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJaMElzUTBGQlFUczBRa0ZGY0VNc1lVRkJZVHMwUWtGRFlpeExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVUU3TkVKQlJYcENMRmRCUVZjc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZET3pSQ1FVVXhRaXgxUWtGQlFTeEpRVUZKTERKQ1FVRlZMRVZCUVVVc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVFN2QwSkJSV3hFTEVOQlFVTXNRMEZCUXl4RFFVRkJPM0ZDUVVWTU8ybENRVVZLTzJkQ1FVZEVMRzFDUVVGdFFqdG5Ra0ZEYmtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdXVUZGTVVRc1EwRkJReXhEUVVGRExFTkJRVUU3VTBGRlREdFJRVVZFTEcxQ1FVRnRRanRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRSUVVWc1JDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVVm9RaXhEUVVGRE8wbEJiME5FT3p0UFFVVkhPMGxCUTBnc1UwRkJVenRSUVVkTU96dFhRVVZITzFGQlJVZ3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hOUVVGTkxFTkJRV01zWTBGQll5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RlFVRkRMRVZCUVVVN1dVRkZka1FzTmtOQlFUWkRPMUZCUldwRUxFTkJRVU1zUTBGQlF5eERRVUZCTzFGQlJVWTdPMWRCUlVjN1VVRkpTRHM3VjBGRlJ6dFJRVVZJTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1RVRkJUU3hEUVVGdFFpd3dRa0ZCTUVJc1JVRkJSU3hEUVVGRExFbEJRVWtzUlVGQlF5eEZRVUZGTzFsQlJYaEZMREJEUVVFd1F6dFJRVVU1UXl4RFFVRkRMRU5CUVVNc1EwRkJRVHRSUVVWR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRnBRaXhyUWtGQmEwSXNSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJReXhGUVVGRk8xbEJSVGxFTERCRFFVRXdRenRaUVVVeFF5eEpRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRE8yZENRVVZvUWl4MVFrRkJRU3hKUVVGSkxESkNRVUZWTEVWQlFVVXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVRTdZVUZGYWtRN1VVRkhUQ3hEUVVGRExFTkJRVU1zUTBGQlFUdFJRVVZHTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1RVRkJUU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRExFVkJRVVU3V1VGRkwwTXNNa05CUVRKRE8xRkJSUzlETEVOQlFVTXNRMEZCUXl4RFFVRkJPMUZCUlVZN08xZEJSVWM3VVVGUFNEczdWMEZGUnp0UlFVVklMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZ0UWl4dlFrRkJiMElzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUXl4RlFVRkZPMWxCUlM5RUxFMUJRVTBzVVVGQlVTeEhRVUU0UXl4RlFVRkZMRU5CUVVFN1dVRkhPVVFzU1VGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkRPMmRDUVVWT0xFbEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1RVRkJUU3hGUVVGRE8yOUNRVVZ5UWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVUU3YVVKQlJUZERPM0ZDUVVWSkxFbEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRWxCUVVrc1ZVRkJWU3hGUVVGRE8yOUNRVVU1UWl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUVR0cFFrRkZha1E3Y1VKQlJVa3NTVUZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJRenR2UWtGRmNFTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVRTdhVUpCUlhaRU8zRkNRVVZKTEVsQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFbEJRVWtzYjBKQlFXOUNMRVZCUVVNN2IwSkJSWGhETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc01rSkJRVEpDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZCTzJsQ1FVVXpSRHR4UWtGRlNTeEpRVUZITEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hKUVVGSkxGZEJRVmNzUlVGQlF6dHZRa0ZGTDBJc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGRlZDeEpRVUZKTEU5QlFVOHNRMEZCYlVJc1EwRkJReXhEUVVGRExFVkJRVU1zUTBGQlF5eEZRVUZETEVWQlFVVTdkMEpCUldwRExFbEJRVWNzUTBGQlF5eERRVUZETEZkQlFWY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVU03TkVKQlEzaENMRTFCUVUwc1EwRkJReXhwUTBGQmFVTXNRMEZCUXl4RFFVRkRPM2xDUVVNM1F6dDNRa0ZGUkN4SlFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4SlFVRkpMRlZCUVZVc1JVRkJRenMwUWtGRE0wTXNUVUZCVFN4RFFVRkRMREpDUVVFMFFpeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGTExFbEJRVWtzUTBGQlF5eERRVUZETzNsQ1FVTnVSVHQzUWtGRlJDeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRVHQzUWtGRmJrTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlFUdHZRa0ZGWWl4RFFVRkRMRU5CUVVNc1EwRkZUQ3hEUVVGQk8ybENRVVZLTzJGQlJVbzdXVUZIUkN4SlFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVU03WjBKQlJXWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU03Y1VKQlJXaENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVUVzUlVGQlJUczdiMEpCUlZBc2JVUkJRVUVzUTBGQlFTdzBSRUZCWlN4RlFVRm1MRWxCUVdsQ0xFbEJRVUVzUTBGQlFTeE5RVUZCTEVOQlFVTTdiMEpCUld4Q0xHdERRVUZyUXp0dlFrRkZiRU1zZFVKQlFVRXNTVUZCU1N3MFJFRkJjVUlzVFVGQmVrSXNTVUZCU1N4RlFVRnpRaXhIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtNc1EwRkJReXhEUVVGRExFTkJSVXc3WVVGSFNqdFJRVVZNTEVOQlFVTXNRMEZCUXl4RFFVRkJPMUZCUlVZc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeE5RVUZOTEVOQlFXTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRExFVkJRVVU3V1VGRmNFUXNhVVJCUVdsRU8xRkJSWEpFTEVOQlFVTXNRMEZCUXl4RFFVRkJPMUZCUjBZN08xZEJSVWM3VVVGUFNEczdWMEZGUnp0UlFVVklMRWxCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVTTdXVUZGYkVJc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVRXNSVUZCUlR0blFrRkZkRU1zU1VGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hWUVVGVkxFVkJRVU03YjBKQlJYcENMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF6dHZRa0ZGYkVJc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8zZENRVVY0UWl4aFFVRmhPM2RDUVVOaUxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRVHR2UWtGRmNFTXNRMEZCUXl4RFFVRkRMRU5CUVVFN2FVSkJSVXc3V1VGRlRDeERRVUZETEVOQlFVTXNRMEZCUVR0VFFVVk1PMUZCUlVRN08xZEJSVWM3VVVGTFNDeFBRVUZQTEVsQlFVa3NRMEZCUXp0SlFVVm9RaXhEUVVGRE8wTkJUMG83TzBsQk4yeENUeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCWXl4UFFVRlBMRVZCUVVVc1IwRkJSU3hGUVVGRk8xRkJSVFZETEVsQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExGbEJRVmtzVjBGQlZ5eEZRVUZETzFsQlJUVkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRE8xTkJSV2hFTzBsQlJVd3NRMEZCUXl4RFFVRkRMRU5CUVVFN1NVRkZSaXhKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCWXl4UFFVRlBMRVZCUVVVc1IwRkJSU3hGUVVGRk8xRkJSVFZETEVsQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExGbEJRVmtzVjBGQlZ5eEZRVUZETzFsQlJUVkRMR0ZCUVdFN1dVRkRZaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF6dFRRVVU1UXp0SlFVVk1MRU5CUVVNc1EwRkJReXhEUVVGQk8wbEJSMFlzVDBGQlR5eEpRVUZKTEVOQlFVTTdRVUZGYUVJc1EwRkJReXd5UlVGblYyOUNMRWRCUVhGRE8wbEJSWFJFTEVsQlFVY3NkVUpCUVVFc1NVRkJTU3d3UWtGQlV5eEpRVUZKTEhWQ1FVRkJMRWxCUVVrc05FSkJRVmNzUlVGQlF6dFJRVVZvUXl4dFFrRkJiVUk3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlRORExFbEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkRPMWxCUldJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZGY0VJc2JVSkJRVzFDTzFsQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVVeFF6dFJRVVZFTEhGRFFVRnhRenRMUVVWNFF6dEpRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMEZCUldoQ0xFTkJRVU03UVVGeFRrdzdPMGRCUlVjN1FVRkZSaXhOUVVGTkxFTkJRVU1zVDBGQlR5eFBRVUZQTEUxQlFVMDdPMEZCUldwQ0xHZENRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUlhSQ0xHRkJRVTBzUjBGQlJ5eFpRVUZaTEVOQlFVTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJEYjIxd2FXeGhkR1ZGWTJodkxDQkRiMjF3YVd4aGRHVkZZMmh2UVhSMGNtbGlkWFJsY3l3Z1EyOXRjR2xzWVhSbFUyNWhjRU52WkdVc0lFTnZiWEJwYkdGMFpWTnVZWEJEYjJSbFFYUjBjbWxpZFhSbGN5QjlJR1p5YjIwZ1hDSXVMMk52YlhCcGJHRjBaVndpTzF4dWFXMXdiM0owSUhzZ1UyVnVjMlZ1UlcxcGRIUmxjaUI5SUdaeWIyMGdYQ0l1TDJWdGFYUjBaWEpjSWp0Y2JtbHRjRzl5ZENCN0lFWnBibVJGZUhCeVpYTnphVzl1Y3lCOUlHWnliMjBnWENJdUwyVjRjSEpsYzNOcGIyNWNJanRjYm1sdGNHOXlkQ0IwZVhCbElIc2dRMjl0Y0c5dVpXNTBUV1YwYUc5a1JYWmxiblFzSUVOdmJYQnZibVZ1ZEUxbGRHaHZaRkpoZHl3Z1EyOXRjRzl1Wlc1MFVISnZjSE1zSUVOdmJYQnZibVZ1ZEZOMFlYUmxMQ0JGZUhCeVpYTnphVzl1VW1WamIzSmtMQ0JVUTI5dGNHOXVaVzUwVDNCMGFXOXVjeXdnVkZOamNtVmxia052Ym1acFp5QjlJR1p5YjIwZ1hDSXVMMmx1WkdWNExuUmNJanRjYm1sdGNHOXlkQ0I3SUVOdmJYQnZibVZ1ZEVoNVpISmhkR1Z6SUgwZ1puSnZiU0JjSWk0dmFIbGtjbUYwWlhOY0lqdGNibHh1WEc1Y2JseHVYRzVjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUVOeVpXRjBaVU52YlhCdmJtVnVkRTFsZEdodlpFVjJaVzUwUEZ4dUlDQWdJRnh1SUNBZ0lGTWdaWGgwWlc1a2N5QkRiMjF3YjI1bGJuUlRkR0YwWlN3Z1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUZBZ1pYaDBaVzVrY3lCRGIyMXdiMjVsYm5SUWNtOXdjeXhjYmlBZ0lDQmNiaUFnSUNCTklHVjRkR1Z1WkhNZ1EyOXRjRzl1Wlc1MFRXVjBhRzlrVW1GM1BGTXNJRkErWEc0Z0lDQWdYRzQrS0dOdmJYQnZibVZ1ZERvZ1EyOXRjRzl1Wlc1MFBGTXNJRkFzSUUwK0xDQmxkam9nUlhabGJuUXBlMXh1WEc0Z0lDQWdZMjl1YzNRZ1h5QTZJRU52YlhCdmJtVnVkRTFsZEdodlpFVjJaVzUwUEZNc0lGQXNJRTArSUQwZ2UzMGdZWE1nUTI5dGNHOXVaVzUwVFdWMGFHOWtSWFpsYm5ROFV5d2dVQ3dnVFQ1Y2JpQWdJQ0JjYmx4dUlDQWdJRjh1YzJWc1ppQTlJR052YlhCdmJtVnVkRHRjYmx4dUlDQWdJRjh1WlhabGJuUWdQU0JsZGx4dUlDQWdJRnh1SUNBZ0lISmxkSFZ5YmlCZk8xeHVYRzU5WEc1Y2JseHVYRzVjYmx4dUx5b3FYRzRnS2lCVFpXNXpaVzRnU0ZSTlRDQkZiR1Z0Wlc1MFhHNGdLaTljYm1Oc1lYTnpJRk5sYm5ObGJraFVUVXhGYkdWdFpXNTBQRkErSUdWNGRHVnVaSE1nU0ZSTlRFVnNaVzFsYm5SN1hHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRkJ5YjNCbGNuUnBaWE1nYm1GdFpWeHVJQ0FnSUNBcUwxeHVJQ0FnSUhOMFlYUnBZeUJuWlhRZ2IySnpaWEoyWldSQmRIUnlhV0oxZEdWektDa2dlM0psZEhWeWJpQmJYVHNnZlZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkVlVzVoYldsaklIWmhjbHh1SUNBZ0lDQXFMMXh1SUNBZ0lIQnliM0J6SURvZ1VDQTlJSHQ5SUdGeklGQTdYRzRnSUNBZ1hHNGdJQ0FnWEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVG1WM0lFTnZibk4wY25WamRGeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6SURvZ1VDbDdYRzVjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ5YjNCeklEMGdjSEp2Y0hNN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUgxY2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dWMmhsYmlCRmJHVnRaVzUwSUdseklHTnZibTVsWTNSbFpGeHVJQ0FnSUNBcUwxeHVJQ0FnSUdOdmJtNWxZM1JsWkVOaGJHeGlZV05yS0NsN2ZWeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJYYUdWdUlFVnNaVzFsYm5RZ2FYTWdRV1J2Y0hSbFpDQmllU0J2ZEdobGNpQkVUMDFjYmlBZ0lDQWdLaTljYmlBZ0lDQmhaRzl3ZEdWa1EyRnNiR0poWTJzb0tYdDlYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZkb1pXNWxJRVZzWlcxbGJuUWdhWE1nUkdselkyOXVibVZqZEdWa0lIUnZJSFJvWlNCamRYSnlaVzUwSUVSUFRWeHVJQ0FnSUNBcUwxeHVJQ0FnSUdScGMyTnZibTVsWTNSbFpFTmhiR3hpWVdOcktDbDdmVnh1SUNBZ0lGeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJYYUdWdVpTQkZiR1Z0Wlc1MElHTm9ZVzVuWlNCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNvdlhHNGdJQ0FnWVhSMGNtbGlkWFJsUTJoaGJtZGxaRU5oYkd4aVlXTnJLQ2w3WEc1Y2JpQWdJQ0I5WEc0Z0lDQWdYRzVjYmlBZ0lDQmNibjFjYmx4dVhHNWNibHh1WEc1Y2JpOHFLbHh1SUNvZ1UyVnVjMlZ1SUZOamNtVmxibHh1SUNvdlhHNWNibVY0Y0c5eWRDQmpiR0Z6Y3lCVFpXNXpaVzVUWTNKbFpXNTdYRzVjYmx4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dOdmJtWnBaem9nVkZOamNtVmxia052Ym1acFp5bDdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzUzWVhKdUtDZFRaVzV6Wlc0Z1UyTnlaV1Z1Snl3Z2RHaHBjeWxjYmx4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCY2JseHVmVnh1WEc1Y2JseHVYRzVjYmx4dVhHNHZLaXBjYmlBcUlGTmxibk5sYmlCRGIyMXdiMjVsYm5SY2JpQXFMMXh1Wlhod2IzSjBJR05zWVhOeklFTnZiWEJ2Ym1WdWREeGNibHh1SUNBZ0lGTjBZWFJsSUdWNGRHVnVaSE1nUTI5dGNHOXVaVzUwVTNSaGRHVXNJRnh1SUNBZ0lGeHVJQ0FnSUZCeWIzQnpJR1Y0ZEdWdVpITWdRMjl0Y0c5dVpXNTBVSEp2Y0hNc1hHNGdJQ0FnWEc0Z0lDQWdUV1YwYUc5a2N5QmxlSFJsYm1SeklFTnZiWEJ2Ym1WdWRFMWxkR2h2WkZKaGR6eFRkR0YwWlN3Z1VISnZjSE0rWEc0Z0lDQWdYRzQrZTF4dVhHNGdJQ0FnSkhSaFowNWhiV1VnT2lCemRISnBibWNnUFNBbkp6dGNibHh1SUNBZ0lITjBZWFJsSURvZ2V5QmJVeUJwYmlCclpYbHZaaUJUZEdGMFpWMGdPaUJUZEdGMFpWdFRYU0I5TzF4dVhHNGdJQ0FnY0hKdmNITWdPaUI3SUZ0UUlHbHVJR3RsZVc5bUlGQnliM0J6WFNBNklGQnliM0J6VzFCZElIMDdYRzVjYmlBZ0lDQnRaWFJvYjJSeklEb2dleUJiVFNCcGJpQnJaWGx2WmlCTlpYUm9iMlJ6WFNBNklFMWxkR2h2WkhOYlRWMGdmU0E5SUh0OUlHRnpJSHNnVzAwZ2FXNGdhMlY1YjJZZ1RXVjBhRzlrYzEwZ09pQk5aWFJvYjJSelcwMWRJSDA3WEc1Y2JpQWdJQ0FrYjNCMGFXOXVjeUE2SUZSRGIyMXdiMjVsYm5SUGNIUnBiMjV6UEZOMFlYUmxMQ0JRY205d2N5d2dUV1YwYUc5a2N6NGdQU0I3ZlNCaGN5QlVRMjl0Y0c5dVpXNTBUM0IwYVc5dWN6eFRkR0YwWlN3Z1VISnZjSE1zSUUxbGRHaHZaSE0rWEc0Z0lDQWdYRzRnSUNBZ0pHVnRhWFIwWlhJL0lEb2dVMlZ1YzJWdVJXMXBkSFJsY2p0Y2JseHVJQ0FnSUNScmJHRnpjejhnT2lCRGRYTjBiMjFGYkdWdFpXNTBRMjl1YzNSeWRXTjBiM0k3WEc0Z0lDQWdYRzRnSUNBZ2FYTlNaV0ZrZVRvZ1ltOXZiR1ZoYmlBOUlHWmhiSE5sTzF4dVhHNWNiaUFnSUNBamFIbGtjbUYwWlhNL0lEb2dRMjl0Y0c5dVpXNTBTSGxrY21GMFpYTThVM1JoZEdVc0lGQnliM0J6TENCTlpYUm9iMlJ6UGp0Y2JpQWdJQ0JjYmlBZ0lDQWpiWFYwWVhScGIyNVBZbk5sY25abGNqOGdPaUJOZFhSaGRHbHZiazlpYzJWeWRtVnlPMXh1WEc0Z0lDQWdJMjExZEdGMGFXOXVUMkp6WlhKMlpXUS9JRG9nVFhWMFlYUnBiMjVTWldOdmNtUmJYVHRjYmx4dVhHNGdJQ0FnZEdWdGNHeGhkR1UvT2lCemRISnBibWM3WEc1Y2JseHVJQ0FnSUNOd1pXNWthVzVuT2lCdWRXMWlaWElnUFNBd08xeHVYRzRnSUNBZ0kyTnZiWEJzWlhSbFpEb2diblZ0WW1WeUlEMGdNRHRjYmlBZ0lDQmNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVG1WM0lFTnZibk4wY25WamRGeHVJQ0FnSUNBcUwxeHVJQ0FnSUNCamIyNXpkSEoxWTNSdmNpaHZjSFJwYjI1ek9pQlVRMjl0Y0c5dVpXNTBUM0IwYVc5dWN6eFRkR0YwWlN3Z1VISnZjSE1zSUUxbGRHaHZaSE0rS1h0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlSdmNIUnBiMjV6SUQwZ2IzQjBhVzl1Y3p0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnS0hSb2FYTXVKRzl3ZEdsdmJuTXVjM1JoZEdWOGZIdDlLU0JoY3lCVGRHRjBaVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEp2Y0hNZ1BTQW9kR2hwY3k0a2IzQjBhVzl1Y3k1d2NtOXdjM3g4ZTMwcElHRnpJRkJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dFpYUm9iMlJ6SUQwZ0tIUm9hWE11Skc5d2RHbHZibk11YldWMGFHOWtjM3g4ZTMwcElHRnpJRTFsZEdodlpITmNibHh1SUNBZ0lDQWdJQ0IwYUdsekxpUmxiV2wwZEdWeUlEMGdibVYzSUZObGJuTmxia1Z0YVhSMFpYSW9LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMaU5vZVdSeVlYUmxjeUE5SUc1bGR5QkRiMjF3YjI1bGJuUkllV1J5WVhSbGN6eFRkR0YwWlN3Z1VISnZjSE1zSUUxbGRHaHZaSE0rS0hSb2FYTXBYRzVjYmx4dUlDQWdJQ0FnSUNCMGFHbHpYRzRnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDNGpZMkZ0YjNWbWJHRm5aU2dwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzRrWlcxcGRIUnBibWNvS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUpHbHVhWFJwWVd4cGVtVW9LVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVKSFJsYlhCc1lYUmxLQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1ZEdobGJpaDBjR3c5UG50Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kSEJzS1h0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRHVnRjR3hoZEdVZ1BTQjBjR3c3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWgwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RZ2FXNXpkR0Z1WTJWdlppQklWRTFNUld4bGJXVnVkQ2w3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MExtbHVibVZ5U0ZSTlRDQTlJSFJ3YkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVKRzlpYzJWeWRtVnljeWdwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNGtZMjl0Y0dsc1lYUmxLQ2xjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnZlZ4dVhHNWNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nYzJWMElGUmxiWEJzWVhSbFhHNGdJQ0FnSUNvdlhHNGdJQ0FnSkhSbGJYQnNZWFJsS0NsN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxQSE4wY21sdVp5QjhJSFZ1WkdWbWFXNWxaRDRvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2s5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMyOXNaUzUzWVhKdUtDZERiMjF3YjI1bGJuUWdkR1Z0Y0d4aGRHVW5MQ0IwYUdsekxpUnZjSFJwYjI1ekxuUmxiWEJzWVhSbEtWeHVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSFI1Y0dWdlppQjBhR2x6TGlSdmNIUnBiMjV6TG5SbGJYQnNZWFJsSUNFOUlDZHpkSEpwYm1jbktYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSb2FYTXVKRzl3ZEdsdmJuTXVaV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRWhVVFV4RmJHVnRaVzUwS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlnbmFXNXVaWEpJVkUxTUp5QnBiaUIwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtIUm9hWE11Skc5d2RHbHZibk11Wld4bGJXVnVkQzVwYm01bGNraFVUVXdwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlianRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hWdVpHVm1hVzVsWkNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJWN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCamFHVmpheUE5SUhSb2FYTXVKRzl3ZEdsdmJuTXVkR1Z0Y0d4aGRHVXViV0YwWTJnb0x6eGNYQzgvVzE0K1hTcytMMmRwS1R0Y2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvSjJOb1pXTnJKeXdnWTJobFkyc3BYRzRnSUNBZ1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCSlppQlVaVzF3YkdGMFpTQnBjeUJUZEhKcGJtY2dTRlJOVENCamIyUmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1kyaGxZMnNwZXlCeVpYTnZiSFpsS0hSb2FYTXVKRzl3ZEdsdmJuTXVkR1Z0Y0d4aGRHVXBPeUJ5WlhSMWNtNDdJSDFjYmx4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS2lCRmJITmxMQ0JwZENkeklHWnBiR1VnY0dGMGFGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXFMMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkWEpzSUQwZ2JtVjNJRlZTVENoc2IyTmhkR2x2Ymk1b2NtVm1LVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjR0YwYUNBOUlHQWtleUIxY213dWIzSnBaMmx1SUgwa2V5QW9kWEpzTG5CaGRHaHVZVzFsSUQwOUlDY3ZKeWtnUHlBbkp5QTZJSFZ5YkM1d1lYUm9ibUZ0WlNCOUx5UjdJSFJvYVhNdUpHOXdkR2x2Ym5NdWRHVnRjR3hoZEdVZ2ZXQmNibHh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm1WMFkyZ29jR0YwYUNrdWRHaGxiaWhrUFQ1N0lHbG1LR1F1YzNSaGRIVnpJRDA5SURRd05DbDdJSEpsZEhWeWJpQjFibVJsWm1sdVpXUWdmU0J5WlhSMWNtNGdaQzUwWlhoMEtDa2dmU2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVkR2hsYmloa1lYUmhQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtHUmhkR0VwZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzI5c1pTNTNZWEp1S0NkRGFHVmphM1Z3Snl3Z1pHRjBZU0FwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtHUmhkR0VwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaWHNnY21WemIyeDJaU2gxYm1SbFptbHVaV1FwT3lCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1WTJGMFkyZ29aWEk5UG5zZ2NtVnpiMngyWlNoMWJtUmxabWx1WldRcE95QjlLVnh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1hHNWNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTJGdGIzVm1iR0ZuWlZ4dUlDQWdJQ0FxTDF4dUlDQWdJQ05qWVcxdmRXWnNZV2RsS0NsN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dWJHbHpkR1Z1UEhSNWNHVnZaaUIwYUdselBpZ25jM1JoY25RbkxDQW9LVDArZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGFHbHpMaVJ2Y0hScGIyNXpMbVZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJJVkUxTVJXeGxiV1Z1ZENsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGlSdmNIUnBiMjV6TG1Wc1pXMWxiblF1YzNSNWJHVXVaR2x6Y0d4aGVTQTlJQ2R1YjI1bEp6dGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgwcFhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dWJHbHpkR1Z1UEhSNWNHVnZaaUIwYUdselBpZ25jbVZoWkhrbkxDQW9LVDArZTF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloMGFHbHpMaVJ2Y0hScGIyNXpMbVZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJJVkUxTVJXeGxiV1Z1ZENsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJBZEhNdGFXZHViM0psWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MExuTjBlV3hsTG1ScGMzQnNZWGtnUFNCdWRXeHNPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZTbGNibHh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNGdJQ0FnWEc1Y2JseHVYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dTVzVwZEdsaGJHbDZaVnh1SUNBZ0lDQXFMMXh1WEc0Z0lDQWdKR2x1YVhScFlXeHBlbVVvS1h0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlScGJtbDBhV0ZzYVhwbFJXeGxiV1Z1ZENncE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUdsbUtIUm9hWE11Skc5d2RHbHZibk11Wld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUVoVVRVeEZiR1Z0Wlc1MEtYdGNibHh1SUNBZ0lDQWdJQ0F2THlBZ0lDQWdkR2hwY3k0a2IzQjBhVzl1Y3k1bGJHVnRaVzUwTG5OMGVXeGxMbTl3WVdOcGRIa2dQU0FuTUNkY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0F2THlCOVhHNWNiaUFnSUNBZ0lDQWdMeW9xSUNvZ1JXMXBkQ0JGZG1WdWRDQXFMMXh1SUNBZ0lDQWdJQ0IwYUdsekxpUmxiV2wwZEdWeVB5NWthWE53WVhSamFDZ25jM1JoY25RbkxDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdmVnh1WEc1Y2JseHVJQ0FnSUNScGJtbDBhV0ZzYVhwbFJXeGxiV1Z1ZENod2NtOXdjejg2SUZSRGIyMXdiMjVsYm5SUGNIUnBiMjV6UEZOMFlYUmxMQ0JRY205d2N5d2dUV1YwYUc5a2N6NHBlMXh1WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJQ1J3Y205d2N5QTlJSEJ5YjNCeklIeDhJSFJvYVhNdUpHOXdkR2x2Ym5NZ2ZId2diblZzYkR0Y2JseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCelpXeG1JRDBnZEdocGN6dGNibHh1WEc0Z0lDQWdJQ0FnSUdsbUtDUndjbTl3Y3lsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKSFJoWjA1aGJXVWdQU0JnYzI0dEpIc2dKSEJ5YjNCekxtNWhiV1VnZldCY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBcUlFWnBibVFnWTNWeWNtVnVkQ0JGYkdWdFpXNTBJSE5sYm5SY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MEtYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hSNWNHVnZaaUIwYUdsekxpUnZjSFJwYjI1ekxtVnNaVzFsYm5RZ1BUMGdKM04wY21sdVp5Y3BlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Skc5d2RHbHZibk11Wld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSW9ZQ1I3SUhSb2FYTXVKRzl3ZEdsdmJuTXVaV3hsYldWdWRDQjlZQ2tnWVhNZ1NGUk5URVZzWlcxbGJuUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNvZ1JHVm1hVzVsSUdOMWMzUnZiU0JGYkdWdFpXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtDRmpkWE4wYjIxRmJHVnRaVzUwY3k1blpYUW9kR2hwY3k0a2RHRm5UbUZ0WlNrcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k0a2EyeGhjM01nUFNCamJHRnpjeUJsZUhSbGJtUnpJRk5sYm5ObGJraFVUVXhGYkdWdFpXNTBQRkJ5YjNCelBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3pvZ1VISnZjSE1wZTF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtpQXFJRVZ0YVhRZ1JYWmxiblFnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHWXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2RqYjI1emRISjFZM1FuTENCelpXeG1LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRrYTJ4aGMzTXVjSEp2ZEc5MGVYQmxMbU52Ym01bFkzUmxaRU5oYkd4aVlXTnJJRDBnS0NrOVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpb2dLaUJGYldsMElFVjJaVzUwSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdUpHVnRhWFIwWlhJL0xtUnBjM0JoZEdOb0tDZGpiMjV1WldOMFpXUW5MQ0J6Wld4bUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGlScmJHRnpjeTV3Y205MGIzUjVjR1V1WVdSdmNIUmxaRU5oYkd4aVlXTnJJRDBnS0NrOVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpb2dLaUJGYldsMElFVjJaVzUwSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE5sYkdZdUpHVnRhWFIwWlhJL0xtUnBjM0JoZEdOb0tDZGhaRzl3ZEdWa0p5d2djMlZzWmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRrYTJ4aGMzTXVjSEp2ZEc5MGVYQmxMbVJwYzJOdmJtNWxZM1JsWkVOaGJHeGlZV05ySUQwZ0tDazlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZLaW9nS2lCRmJXbDBJRVYyWlc1MElDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhObGJHWXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2RrYVhOamIyNXVaV04wWldRbkxDQnpaV3htS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJyYkdGemN5NXdjbTkwYjNSNWNHVXVZWFIwY21saWRYUmxRMmhoYm1kbFpFTmhiR3hpWVdOcklEMGdLRzVoYldVNklITjBjbWx1Wnl3Z2RtRnNkV1U2YzNSeWFXNW5MQ0J2YkdSV1lXeDFaVHB6ZEhKcGJtY3BQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeW9xSUNvZ1JXMXBkQ0JGZG1WdWRDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpXeG1MaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duYmxCeWIzQnpRMmhoYm1kbFpDY3NJSHNnYm1GdFpTd2dkbUZzZFdVc0lHOXNaRlpoYkhWbElIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoMGFHbHpMaVJyYkdGemN5d2dKMjlpYzJWeWRtVmtRWFIwY21saWRYUmxjeWNzSUh0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JuWlhRNklHWjFibU4wYVc5dUtDbDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kSGx3Wlc5bUlITmxiR1l1Y0hKdmNITWdQVDBnSjI5aWFtVmpkQ2NwSUQ4Z1QySnFaV04wTG10bGVYTW9jMlZzWmk1d2NtOXdjeWtnT2lCYlhWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xYzNSdmJVVnNaVzFsYm5SekxtUmxabWx1WlNoMGFHbHpMaVIwWVdkT1lXMWxMQ0IwYUdsekxpUnJiR0Z6Y3lBcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9kR2hwY3k0a2IzQjBhVzl1Y3k1bGJHVnRaVzUwSUdsdWMzUmhibU5sYjJZZ1NGUk5URVZzWlcxbGJuUXBlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MFB5NXpaWFJCZEhSeWFXSjFkR1VvSjJsekp5d2dZQ1I3SUhSb2FYTXVKSFJoWjA1aGJXVWdmV0FwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lTaDBhR2x6TGlSdmNIUnBiMjV6TG1Wc1pXMWxiblFnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDa3BlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoZ0pIc2dkR2hwY3k0a2RHRm5UbUZ0WlNCOVlDbGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHFLaUFxSUVWdGFYUWdSWFpsYm5RZ0tpOWNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2RsYkdWdFpXNTBVbVZoWkhrbkxDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgxY2JseHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0I5WEc1Y2JseHVYRzVjYmx4dVhHNWNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUkU5TklFOWljMlZ5ZG1WeVhHNGdJQ0FnSUNvdlhHNGdJQ0FnSkc5aWMyVnlkbVZ5Y3lncGUxeHVYRzVjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTRrYjNCMGFXOXVjeTVsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxpTnRkWFJoZEdsdmJrOWljMlZ5ZG1WeUlEMGdibVYzSUUxMWRHRjBhVzl1VDJKelpYSjJaWElvS0hKbFkyOXlaSE1wUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaWh5WldOdmNtUnpLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGlOdGRYUmhkR2x2Yms5aWMyVnlkbVZrSUQwZ2NtVmpiM0prYzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsWTI5eVpITXVabTl5UldGamFDaHlaV052Y21ROVBudGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvY21WamIzSmtMblI1Y0dVZ1BUMGdKMkYwZEhKcFluVjBaWE1uS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtS0hKbFkyOXlaQzVoZEhSeWFXSjFkR1ZPWVcxbElDWW1JSFJvYVhNdUpHOXdkR2x2Ym5NdVpXeGxiV1Z1ZENCcGJuTjBZVzVqWlc5bUlFaFVUVXhGYkdWdFpXNTBLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmloeVpXTnZjbVF1WVhSMGNtbGlkWFJsVG1GdFpTQnBiaUIwYUdsekxuQnliM0J6S1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnY21WamIzSmtMbUYwZEhKcFluVjBaVTVoYldVZ1lYTWdhMlY1YjJZZ2RIbHdaVzltSUhSb2FYTXVjSEp2Y0hOY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMaVJ2Y0hScGIyNXpMbVZzWlcxbGJuUXVaMlYwUVhSMGNtbGlkWFJsS0hKbFkyOXlaQzVoZEhSeWFXSjFkR1ZPWVcxbEtWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCQWRITXRhV2R1YjNKbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5CeWIzQnpXeUJyWlhrZ1hTQTlJSFpoYkhWbFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5b3FJQ29nUlcxcGRDQkZkbVZ1ZENBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dVpHbHpjR0YwWTJnb0ozQnliM0J6UTJoaGJtZGxaQ2NzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WVcxbE9pQnlaV052Y21RdVlYUjBjbWxpZFhSbFRtRnRaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J2YkdSV1lXeDFaVG9nY21WamIzSmtMbTlzWkZaaGJIVmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdktpb2dLaUJGYldsMElFVjJaVzUwSUNvdlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duYlhWMFlYUnBiMjVQWW5ObGNuWmxaQ2NzSUhKbFkyOXlaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxS2lBcUlFVnRhWFFnUlhabGJuUWdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRrWlcxcGRIUmxjajh1WkdsemNHRjBZMmdvSjIxMWRHRjBhVzl1YzA5aWMyVnlkbVZrSnl3Z2NtVmpiM0prY3lrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRqYlhWMFlYUnBiMjVQWW5ObGNuWmxjaTV2WW5ObGNuWmxLSFJvYVhNdUpHOXdkR2x2Ym5NdVpXeGxiV1Z1ZEN4N1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JNYVhOME9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMVluUnlaV1U2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWFIwY21saWRYUmxjem9nZEhKMVpTeGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVhKaFkzUmxja1JoZEdFNklIUnlkV1VzWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnlZV04wWlhKRVlYUmhUMnhrVm1Gc2RXVTZJSFJ5ZFdVc1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkSFJ5YVdKMWRHVlBiR1JXWVd4MVpUb2dkSEoxWlN4Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBkSEpwWW5WMFpVWnBiSFJsY2pvZ1QySnFaV04wTG10bGVYTW9kR2hwY3k1d2NtOXdjeWxjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZLaW9nS2lCRmJXbDBJRVYyWlc1MElDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duYlhWMFlYUnBiMjVQWW5ObGNuWmhkR2x2YmxKbFlXUjVKeXdnZEdocGN5NGpiWFYwWVhScGIyNVBZbk5sY25abGNpazdYRzVjYmlBZ0lDQWdJQ0FnZlZ4dVhHNWNibHh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNGdJQ0FnWEc1Y2JseHVYRzVjYmx4dVhHNGdJQ0FnYUhsa2NtRjBaWE5UZEdGMFpTaHpiRzkwT2lCclpYbHZaaUJUZEdGMFpTbDdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM1J2Y21VZ1BTQjBhR2x6TGlOb2VXUnlZWFJsY3o4dUpITjBZWFJsTG5KbGRISnBaWFpsS0NCemJHOTBJQ2xjYmx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2FXWW9jM1J2Y21VL0xteGxibWQwYUNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBiM0psTG0xaGNDaHlaV052Y21ROVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGlOb2VXUnlZWFJsY3o4dWFIbGtjbUYwWlhOU1pXTnZjbVFvY21WamIzSmtLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDNTBhR1Z1S0Noa1lYUmhLVDArZTF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtpQXFJRVZ0YVhRZ1JYWmxiblFnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVKR1Z0YVhSMFpYSS9MbVJwYzNCaGRHTm9LQ2R6ZEdGMFpVaDVaSEpoZEdWa0p5d2dlM0psWTI5eVpDd2daR0YwWVgwcE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lIMWNibHh1WEc1Y2JseHVYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOdmJYQnBiR0YwWlNCMGNtRnVjMkZqZEdsdmJuTmNiaUFnSUNBZ0tpOWNiaUFnSUNBa1kyOXRjR2xzWVhSbEtDbDdYRzVjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTRrYjNCMGFXOXVjeTVsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCR2FXNWtSWGh3Y21WemMybHZibk1vZEdocGN5NGtiM0IwYVc5dWN5NWxiR1Z0Wlc1MExDQW9jbVZqYjNKa0tUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGpjR1Z1WkdsdVp5c3JPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcUlFWnBibVFnVTNSaGRHVWdkRzhnWVhWMGJ5MWpiMjF3YVd4aGRHVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLaTljYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCMGFHbHpMbk4wWVhSbElEMDlJQ2R2WW1wbFkzUW5LWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhKbFkyOXlaQzV0YjJOcmRYQS9MblJsZUhSRGIyNTBaVzUwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6VFdGMFkyaGxjeUE5SUZ0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVLSFpoYkhWbGZId25KeWt1YldGMFkyaEJiR3dvYm1WM0lGSmxaMFY0Y0NoZ0tDUjdJRTlpYW1WamRDNXJaWGx6S0hSb2FYTXVjM1JoZEdVcExtcHZhVzRvSjN3bktTQjlLV0FzSUNkbkp5a3BMRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk0b2RtRnNkV1Y4ZkNjbktTNXRZWFJqYUVGc2JDaHVaWGNnVW1WblJYaHdLR0IwYUdselhGeGNYQzV6ZEdGMFpWeGNYRnd1S0NSN0lFOWlhbVZqZEM1clpYbHpLSFJvYVhNdWMzUmhkR1VwTG1wdmFXNG9KeWw4ZEdocGMxeGNYRnd1YzNSaGRHVmNYRnhjTGlnbktTQjlLV0FzSUNkbkp5a3BMRnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlBdUxpNG9kbUZzZFdWOGZDY25LUzV0WVhSamFFRnNiQ2h1WlhjZ1VtVm5SWGh3S0dCMGFHbHpYRnhjWEM1d2NtOXdjMXhjWEZ3dUpIc2dUMkpxWldOMExtdGxlWE1vZEdocGN5NXdjbTl3Y3lrdWFtOXBiaWduZkhSb2FYTmNYRnhjTG5CeWIzQnpYRnhjWEM0bktTQjlZQ3dnSjJjbktTa3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUYxY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtITk5ZWFJqYUdWekxteGxibWQwYUNsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITk5ZWFJqYUdWekxtMWhjQ2h0WVhSamFEMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY21WamIzSmtRMnh2Ym1VZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQnlaV052Y21RcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndkWEpuWlNBOUlHMWhkR05vTG1acGJIUmxjaWgyUFQ1MklUMTFibVJsWm1sdVpXUXBYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Ykc5MElEMGdjSFZ5WjJWYk1WMGdZWE1nYTJWNWIyWWdVM1JoZEdWY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVCMGN5MXBaMjV2Y21WY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndkWEpuWlM1cGJuQjFkQ0E5SUcxaGRHTm9MbWx1Y0hWMFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WldOdmNtUkRiRzl1WlM1dFlYUmphQ0E5SUhCMWNtZGxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRqYUhsa2NtRjBaWE0vTGlSemRHRjBaUzV3ZFhOb0tITnNiM1FzSUhKbFkyOXlaRU5zYjI1bEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUtpQXFJRVZ0YVhRZ1JYWmxiblFnS2k5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duWlhod2NtVnpjMmx2YmtSbGRHVmpkR1ZrSnl3Z2NtVmpiM0prS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHlvcUlDb2dSVzFwZENCRmRtVnVkQ0FxTDF4dUlDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVrYVhOd1lYUmphQ2duWTI5dGNHbHNZWFJwYjI1U1pXRmtlU2NzSUhSb2FYTXBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNCOVhHNWNibHh1WEc1Y2JseHVYRzRnSUNBZ0kyTm9aV05yUTI5dGNHbHNZWFJsWkVSdmJtVW9iRzkwT2lBb1JYaHdjbVZ6YzJsdmJsSmxZMjl5WkNCOElIVnVaR1ZtYVc1bFpDbGJYU2w3WEc1Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k0amNHVnVaR2x1WnlBOVBTQjBhR2x6TGlOamIyMXdiR1YwWldRcGUxeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdMeW9xSUNvZ1JXMXBkQ0JGZG1WdWRDQXFMMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTRrWlcxcGRIUmxjajh1WkdsemNHRjBZMmdvSjJOdmJYQnBiR0YwWldRbkxDQnNiM1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTVwYzFKbFlXUjVLWHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBjMUpsWVdSNUlEMGdkSEoxWlRzZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5b3FJQ29nUlcxcGRDQkZkbVZ1ZENBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11SkdWdGFYUjBaWEkvTG1ScGMzQmhkR05vS0NkeVpXRmtlU2NzSUhSb2FYTXBPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCamIyNXpiMnhsTG14dlp5Z25RMjl0Y0dsc1lYUmxJRVJ2Ym1VbkxDQnNiM1FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVYRzRnSUNBZ2ZWeHVYRzVjYmx4dVhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRVZ0YVhSMGFXNW5YRzRnSUNBZ0lDb3ZYRzRnSUNBZ0pHVnRhWFIwYVc1bktDbDdYRzVjYmx4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nVFc5a1pXd2dPaUJDWldkcGJseHVJQ0FnSUNBZ0lDQWdLaTljYmx4dUlDQWdJQ0FnSUNCMGFHbHpMaVJsYldsMGRHVnlQeTVzYVhOMFpXNDhkSGx3Wlc5bUlIUm9hWE0rS0NkbGJHVnRaVzUwVW1WaFpIa25MQ0FvWVhKbmN5azlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnWTI5dWMyOXNaUzUzWVhKdUtDZERjbVZoZEdVZ1JXeGxiV1Z1ZENCTmIyUmxiQ2NzSUdGeVozTXBYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZTbGNibHh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2dUVzlrWld3Z09pQkZibVJjYmlBZ0lDQWdJQ0FnSUNvdlhHNWNibHh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJOZFhSaGRHbHZibk1nVDJKelpYSjJaWEp6SURvZ1FtVm5hVzVjYmlBZ0lDQWdJQ0FnSUNvdlhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dWJHbHpkR1Z1UEUxMWRHRjBhVzl1VDJKelpYSjJaWEkrS0NkdGRYUmhkR2x2Yms5aWMyVnlkbUYwYVc5dVVtVmhaSGtuTENBb1lYSm5jeWs5UG50Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1M1lYSnVLQ2ROZFhSaGRHbHZiaUJQWW5ObGNuWmxaQ2NzSUdGeVozTXBYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2ZTbGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxpUmxiV2wwZEdWeVB5NXNhWE4wWlc0OFRYVjBZWFJwYjI1U1pXTnZjbVErS0NkdGRYUmhkR2x2Yms5aWMyVnlkbVZrSnl3Z0tHRnlaM01wUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHTnZibk52YkdVdWQyRnliaWduVFhWMFlYUnBiMjRnVDJKelpYSjJaV1FuTENCaGNtZHpLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhoY21kekxtVnRhWFF1ZEdGeVoyVjBLWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVJMmg1WkhKaGRHVnpQeTVvZVdSeVlYUmxjMDV2WkdVb1lYSm5jeTVsYldsMExuUmhjbWRsZENsY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGlSbGJXbDBkR1Z5UHk1c2FYTjBaVzRvSjIxMWRHRjBhVzl1YzA5aWMyVnlkbVZrSnl3Z0tHRnlaM01wUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklHTnZibk52YkdVdWQyRnliaWduVFhWMFlYUnBiMjV6SUU5aWMyVnlkbVZrSnl3Z1lYSm5jeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQjlLVnh1WEc0Z0lDQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDQWdLaUJOZFhSaGRHbHZibk1nVDJKelpYSjJaWEp6SURvZ1JXNWtYRzRnSUNBZ0lDQWdJQ0FxTDF4dVhHNWNibHh1WEc1Y2JseHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1EyOXRjR2xzWVhSbElGSmxZMjl5WkNBNklFSmxaMmx1WEc0Z0lDQWdJQ0FnSUNBcUwxeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdUpHVnRhWFIwWlhJL0xteHBjM1JsYmp4RmVIQnlaWE56YVc5dVVtVmpiM0prUGlnblpYaHdjbVZ6YzJsdmJrUmxkR1ZqZEdWa0p5d2dLQ1FwUFQ1N1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjIxcGMyVmtPaUFvVUhKdmJXbHpaVHhGZUhCeVpYTnphVzl1VW1WamIzSmtQaUI4SUhWdVpHVm1hVzVsWkNsYlhTQTlJRnRkWEc1Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0pDNWxiV2wwS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LQ1F1WlcxcGRDNTBlWEJsSUQwOUlDZGxZMmh2SnlsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaV1F1Y0hWemFDaERiMjF3YVd4aGRHVkZZMmh2S0hSb2FYTXNJQ1F1WlcxcGRDa3BYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCcFppZ2tMbVZ0YVhRdWRIbHdaU0E5UFNBbmMyNWhjR052WkdVbktYdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXRhWE5sWkM1d2RYTm9LRU52YlhCcGJHRjBaVk51WVhCRGIyUmxLSFJvYVhNc0lDUXVaVzFwZENrcFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmlna0xtVnRhWFF1ZEhsd1pTQTlQU0FuWVhSMGNtbGlkWFJsTG1WamFHOG5LWHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl0YVhObFpDNXdkWE5vS0VOdmJYQnBiR0YwWlVWamFHOUJkSFJ5YVdKMWRHVnpLSFJvYVhNc0lDUXVaVzFwZENrcFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0JwWmlna0xtVnRhWFF1ZEhsd1pTQTlQU0FuWVhSMGNtbGlkWFJsTG5OdVlYQmpiMlJsSnlsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmJXbHpaV1F1Y0hWemFDaERiMjF3YVd4aGRHVlRibUZ3UTI5a1pVRjBkSEpwWW5WMFpYTW9kR2hwY3l3Z0pDNWxiV2wwS1NsY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtS0NRdVpXMXBkQzUwZVhCbElEMDlJQ2RrYVhKbFkzUnBkbVVuS1h0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205dGFYTmxaQzV3ZFhOb0tGeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGNnVUhKdmJXbHpaVHhGZUhCeVpYTnphVzl1VW1WamIzSmtQaWdvY2l4cUtUMCtlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWW9JU2duWkdseVpXTjBhWFpsSnlCcGJpQWtMbVZ0YVhRcEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnS0dCRGIzSnlkWEIwWldRZ1pHbHlaV04wYVhabElEb2dibTkwSUdadmRXNWtZQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2RIbHdaVzltSUNRdVpXMXBkQzVrYVhKbFkzUnBkbVUvTG0xaGFXNGdJVDBnSjJaMWJtTjBhVzl1SnlsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJQ2hnUTI5eWNuVndkR1ZrSUdScGNtVmpkR2wyWlNBNklEd2dKSHNnSkM1bGJXbDBMbVJwY21WamRHbDJaVDh1Ym1GdFpTQjlJRDVnS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdKQzVsYldsMExtUnBjbVZqZEdsMlpTNXRZV2x1S0hSb2FYTXNJQ1F1WlcxcGRDbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhJb0pDNWxiV2wwS1Z4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaHdjbTl0YVhObFpDNXNaVzVuZEdncGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdVSEp2YldselpTNWhiR3dvY0hKdmJXbHpaV1FwWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMblJvWlc0b2JHOTBQVDU3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGpZMjl0Y0d4bGRHVmtLeXM3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklHTnZibk52YkdVdWQyRnliaWduUTI5dGNHbHNZWFJsWkNjc0lHeHZkQ2xjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NGpZMmhsWTJ0RGIyMXdhV3hoZEdWa1JHOXVaU2hzYjNRcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgwcFhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k0a1pXMXBkSFJsY2o4dWJHbHpkR1Z1UEhSNWNHVnZaaUIwYUdselBpZ25ZMjl0Y0dsc1lYUmxKeXdnS0dGeVozTXBQVDU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1ZDJGeWJpZ25SWGh3Y21WemMybHZiaUJTWldOdmNtUmxaQ2NzSUdGeVozTXVaVzFwZENsY2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0I5S1Z4dVhHNWNiaUFnSUNBZ0lDQWdMeW9xWEc0Z0lDQWdJQ0FnSUNBcUlFTnZiWEJwYkdGMFpTQlNaV052Y21RZ09pQkZibVJjYmlBZ0lDQWdJQ0FnSUNvdlhHNWNibHh1WEc1Y2JseHVYRzRnSUNBZ0lDQWdJQzhxS2x4dUlDQWdJQ0FnSUNBZ0tpQkRkWE4wYjIwZ1JXMXBkSFJsY2lCTWFYTjBaVzVsY2lBNklFSmxaMmx1WEc0Z0lDQWdJQ0FnSUNBcUwxeHVYRzRnSUNBZ0lDQWdJR2xtS0hSb2FYTXVKRzl3ZEdsdmJuTXVaVzFwZENsN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVsYm5SeWFXVnpLSFJvYVhNdUpHOXdkR2x2Ym5NdVpXMXBkQ2t1YldGd0tHVTlQbnRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtIUjVjR1Z2WmlCbFd6RmRJRDA5SUNkbWRXNWpkR2x2YmljcGUxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE5sYkdZZ1BTQjBhR2x6TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdUpHVnRhWFIwWlhJL0xteHBjM1JsYmlobFd6QmRMQ0JtZFc1amRHbHZiaWdwZXlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FIUnpMV2xuYm05eVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pWc3hYUzVoY0hCc2VTaDBhR2x6TENCYllYSm5kVzFsYm5Seld6QmRYU2tnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZLaXBjYmlBZ0lDQWdJQ0FnSUNvZ1EzVnpkRzl0SUVWdGFYUjBaWElnVEdsemRHVnVaWElnT2lCRmJtUmNiaUFnSUNBZ0lDQWdJQ292WEc1Y2JseHVYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNWNiaUFnSUNCOVhHNWNiaUFnSUNCY2JpQWdJQ0JjYmlBZ0lDQmNibHh1WEc1OVhHNWNibHh1WEc1Y2JseHVMeW9xWEc0Z0tpQkZlSEJ2Y25SaGRHbHZibk5jYmlBcUwxeHVYRzRnWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1UyVnVjMlZ1SUh0Y2JseHVJQ0FnSUhOMFlYUnBZeUJEYjIxd2IyNWxiblFnUFNCRGIyMXdiMjVsYm5RN1hHNWNiaUFnSUNCemRHRjBhV01nVTJOeVpXVnVJRDBnVTJWdWMyVnVVMk55WldWdU8xeHVJQ0FnSUZ4dWZWeHVYRzVjYmlKZGZRPT0iLCIvKipcbiAqIFV0aWxpdGllc1xuICovXG4vKipcbiAqIENvbnRlbnQgU3RhdGliaWx6YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFN0YWJpbGl6ZUNvbnRlbnQoY29udGVudCkge1xuICAgIHJldHVybiAoY29udGVudCB8fCAnJykucmVwbGFjZSgvJmd0Oy9nLCBgPmApLnJlcGxhY2UoLyZsdDsvZywgYDxgKTtcbn1cbi8qKlxuICogQXJyYXkgUmVmYWN0b3IgZnJvbSBrZXkgdG8ga2V5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcnJheVJhbmdlKGFyZ3MsIGZyb20sIHRvKSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgMDtcbiAgICB0byA9IHRvIHx8IGFyZ3MubGVuZ3RoO1xuICAgIGZyb20gPSBmcm9tIDwgMCA/IDAgOiBmcm9tO1xuICAgIHRvID0gdG8gPiBhcmdzLmxlbmd0aCA/IGFyZ3MubGVuZ3RoIDogdG87XG4gICAgZm9yIChsZXQgeCA9IChmcm9tKTsgeCA8IGFyZ3MubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgb3V0LnB1c2goYXJnc1t4XSk7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSFRNTEVudGl0aWVzKGlucHV0KSB7XG4gICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB0bXAuaW5uZXJIVE1MID0gaW5wdXQ7XG4gICAgcmV0dXJuIHRtcC52YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVIVE1MRW50aXRpZXMoaW5wdXQpIHtcbiAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHRtcC5pbm5lclRleHQgPSBpbnB1dDtcbiAgICByZXR1cm4gdG1wLmlubmVySFRNTDtcbn1cbi8qKlxuICogRml4IEpTT05cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIEpTT05TYWZlUGFyc2U8VCBleHRlbmRzIG9iamVjdD4oanNvbjogc3RyaW5nKSA6IFQgfCBudWxse1xuLy8gICAgIGxldCBmaXhlZCA6IFQgPSB7fSBhcyBUXG4vLyAgICAgLyoqXG4vLyAgICAgICogQFNvbHV0aW9uIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU5MzI5NDk1LzE4MDU5NDExXG4vLyAgICAgICovXG4vLyAgICAgZnVuY3Rpb24gYnVsa1JlZ2V4KHN0cjogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24gfCBBcnJheTxGdW5jdGlvbj4pe1xuLy8gICAgICAgICBpZihjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpe1xuLy8gICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHN0cik7XG4vLyAgICAgICAgIH1lbHNlIGlmKGNhbGxiYWNrICYmIEFycmF5LmlzQXJyYXkoY2FsbGJhY2spKXtcbi8vICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjYWxsYmFjay5sZW5ndGg7IGkrKyl7XG4vLyAgICAgICAgICAgICAgICAgaWYoY2FsbGJhY2tbaV0gJiYgdHlwZW9mIGNhbGxiYWNrW2ldID09PSAnZnVuY3Rpb24nKXtcbi8vICAgICAgICAgICAgICAgICAgICAgc3RyID0gY2FsbGJhY2tbaV0oc3RyKTtcbi8vICAgICAgICAgICAgICAgICB9ZWxzZXticmVhazt9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gc3RyO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBzdHI7XG4vLyAgICAgfVxuLy8gICAgIGlmKGpzb24gJiYganNvbiAhPT0gJycpe1xuLy8gICAgICAgICBpZih0eXBlb2YganNvbiAhPT0gJ3N0cmluZycpe1xuLy8gICAgICAgICAgICAgdHJ5e1xuLy8gICAgICAgICAgICAgICAgIGpzb24gPSBKU09OLnN0cmluZ2lmeShqc29uKTtcbi8vICAgICAgICAgICAgIH1jYXRjaChlKXtyZXR1cm4gbnVsbDt9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYodHlwZW9mIGpzb24gPT09ICdzdHJpbmcnKXtcbi8vICAgICAgICAgICAgIGpzb24gPSBidWxrUmVnZXgoanNvbiwgW1xuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiBzdHIucmVwbGFjZSgvW1xcblxcdF0vZ20sICcnKSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyxcXH0vZ20sICd9JyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHN0ci5yZXBsYWNlKC8sXFxdL2dtLCAnXScpLFxuLy8gICAgICAgICAgICAgICAgIChzdHI6c3RyaW5nKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxldCBhc3RyID0gc3RyLnNwbGl0KC8oPz1bLFxcfVxcXV0pL2cpO1xuLy8gICAgICAgICAgICAgICAgICAgICBhc3RyID0gYXN0ci5tYXAocyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihzLmluY2x1ZGVzKCc6JykgJiYgcyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0clAgPSBzLnNwbGl0KC86KC4rKS8sIDIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBzdHJQWzBdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdHJQWzBdKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0UCA9IHN0clBbMF0uc3BsaXQoLyhbLFxce1xcW10pL2cpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFBbZmlyc3RQLmxlbmd0aC0xXSA9IGJ1bGtSZWdleChmaXJzdFBbZmlyc3RQLmxlbmd0aC0xXSwgKHA6c3RyaW5nKSA9PiBwLnJlcGxhY2UoL1teQS1aYS16MC05XFwtX10vLCAnJykpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJQWzBdID0gZmlyc3RQLmpvaW4oJycpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFydCA9IHN0clBbMV0udHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKChwYXJ0LnN0YXJ0c1dpdGgoJ1wiJykgJiYgcGFydC5lbmRzV2l0aCgnXCInKSkgfHwgKHBhcnQuc3RhcnRzV2l0aCgnXFwnJykgJiYgcGFydC5lbmRzV2l0aCgnXFwnJykpIHx8IChwYXJ0LnN0YXJ0c1dpdGgoJ2AnKSAmJiBwYXJ0LmVuZHNXaXRoKCdgJykpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQuc3Vic3RyKDEsIHBhcnQubGVuZ3RoIC0gMik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQgPSBidWxrUmVnZXgocGFydCwgW1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvKFtcIl0pL2dtLCAnXFxcXCQxJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOnN0cmluZykgPT4gcC5yZXBsYWNlKC9cXFxcJy9nbSwgJ1xcJycpLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvXFxcXGAvZ20sICdgJyksXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFsxXSA9ICgnXCInK3BhcnQrJ1wiJykudHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBzdHJQLmpvaW4oJzonKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzO1xuLy8gICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzdHIuam9pbignJyk7XG4vLyAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICAoc3RyOnN0cmluZykgPT4gc3RyLnJlcGxhY2UoLyhbJ1wiXSk/KFthLXpBLVowLTlcXC1fXSspKFsnXCJdKT86L2csICdcIiQyXCI6JyksXG4vLyAgICAgICAgICAgICAgICAgKHN0cjpzdHJpbmcpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgbGV0IGFzdHIgPSBzdHIuc3BsaXQoLyg/PVssXFx9XFxdXSkvZ2kpO1xuLy8gICAgICAgICAgICAgICAgICAgICBhc3RyID0gYXN0ci5tYXAocyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZihzLmluY2x1ZGVzKCc6JykgJiYgcyl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0clAgPSBzLnNwbGl0KC86KC4rKS8sIDIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0clBbMF0gPSBzdHJQWzBdLnRyaW0oKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzdHJQWzFdLmluY2x1ZGVzKCdcIicpICYmIHN0clBbMV0uaW5jbHVkZXMoJzonKSl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0ID0gc3RyUFsxXS50cmltKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcnQuc3RhcnRzV2l0aCgnXCInKSAmJiBwYXJ0LmVuZHNXaXRoKCdcIicpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnN1YnN0cmluZygxLCBwYXJ0Lmxlbmd0aCAtIDIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydCA9IGJ1bGtSZWdleChwYXJ0LCAocDpzdHJpbmcpID0+IHAucmVwbGFjZSgvKD88IVxcXFwpXCIvZ20sICcnKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyUFsxXSA9ICgnXCInK3BhcnQrJ1wiJykudHJpbSgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzID0gc3RyUC5qb2luKCc6Jyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcztcbi8vICAgICAgICAgICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3RyLmpvaW4oJycpO1xuLy8gICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICBdKTtcbi8vICAgICAgICAgICAgIHRyeXtcbi8vICAgICAgICAgICAgICAgICBmaXhlZCA9IEpTT04ucGFyc2UoanNvbik7XG4vLyAgICAgICAgICAgICB9Y2F0Y2goZSl7cmV0dXJuIG51bGw7fVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBmaXhlZDtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIG51bGw7XG4vLyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkdsMGFXVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZZMjl5WlM5MWRHbHNhWFJwWlhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRMEU3TzBkQlJVYzdRVUZSU0RzN1IwRkZSenRCUVVOSUxFMUJRVTBzVlVGQlZTeG5Ra0ZCWjBJc1EwRkJReXhQUVVGbE8wbEJSVFZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRWxCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUlhKRkxFTkJRVU03UVVGTlJEczdSMEZGUnp0QlFVTkdMRTFCUVUwc1ZVRkJWU3hWUVVGVkxFTkJRVWtzU1VGQlVTeEZRVUZGTEVsQlFXRXNSVUZCUlN4RlFVRlhPMGxCUlM5RUxFMUJRVTBzUjBGQlJ5eEhRVUZUTEVWQlFVVXNRMEZCUVR0SlFVVndRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVVnFRaXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1NVRkhka0lzU1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMGxCUlROQ0xFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJSM3BETEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFJRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZGTEVOQlFVTTdTMEZCUlR0SlFVVnVSU3hQUVVGUExFZEJRVWNzUTBGQlF6dEJRVVZtTEVOQlFVTTdRVUZQUkN4TlFVRk5MRlZCUVZVc2EwSkJRV3RDTEVOQlFVTXNTMEZCWVR0SlFVVTFReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZVUZCWVN4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGQk8wbEJSVGxETEVkQlFVY3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRE8wbEJSWFJDTEU5QlFVOHNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJRVHRCUVVWd1FpeERRVUZETzBGQlMwUXNUVUZCVFN4VlFVRlZMR3RDUVVGclFpeERRVUZETEV0QlFXRTdTVUZGTlVNc1RVRkJUU3hIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRVHRKUVVVNVF5eEhRVUZITEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenRKUVVWMFFpeFBRVUZQTEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVFN1FVRkZlRUlzUTBGQlF6dEJRVXRFT3p0SFFVVkhPMEZCUTBnc05FVkJRVFJGTzBGQlJUVkZMRGhDUVVFNFFqdEJRVVU1UWl4VlFVRlZPMEZCUTFZc2MwVkJRWE5GTzBGQlEzUkZMRlZCUVZVN1FVRkZWaXcyUlVGQk5rVTdRVUZETjBVc01FUkJRVEJFTzBGQlF6RkVMRzlEUVVGdlF6dEJRVU53UXl4NVJFRkJlVVE3UVVGRGVrUXNkMFJCUVhkRU8wRkJRM2hFTEhkRlFVRjNSVHRCUVVONFJTdzRRMEZCT0VNN1FVRkRPVU1zWjBOQlFXZERPMEZCUTJoRExHZENRVUZuUWp0QlFVTm9RaXd3UWtGQk1FSTdRVUZETVVJc1dVRkJXVHRCUVVOYUxITkNRVUZ6UWp0QlFVTjBRaXhSUVVGUk8wRkJSMUlzSzBKQlFTdENPMEZCUXk5Q0xIZERRVUYzUXp0QlFVTjRReXh0UWtGQmJVSTdRVUZEYmtJc0swTkJRU3RETzBGQlF5OURMSE5EUVVGelF6dEJRVU4wUXl4WlFVRlpPMEZCUTFvc2QwTkJRWGRETzBGQlEzaERMSFZEUVVGMVF6dEJRVU4yUXl3clJFRkJLMFE3UVVGREwwUXNOa1JCUVRaRU8wRkJRemRFTERaRVFVRTJSRHRCUVVNM1JDeHZRMEZCYjBNN1FVRkRjRU1zTkVSQlFUUkVPMEZCUXpWRUxEWkRRVUUyUXp0QlFVTTNReXh2UkVGQmIwUTdRVUZEY0VRc09FUkJRVGhFTzBGQlF6bEVMSGRFUVVGM1JEdEJRVU40UkN3eVEwRkJNa003UVVGRE0wTXNORVZCUVRSRk8wRkJRelZGTEdkS1FVRm5TanRCUVVOb1NpdzJSRUZCTmtRN1FVRkROMFFzWjBOQlFXZERPMEZCUTJoRExIbEVRVUY1UkR0QlFVTjZSQ3hyVEVGQmEwdzdRVUZEYkV3c01FVkJRVEJGTzBGQlF6RkZMR2REUVVGblF6dEJRVU5vUXl4MVJFRkJkVVE3UVVGRGRrUXNPRVZCUVRoRk8wRkJRemxGTERCRlFVRXdSVHRCUVVNeFJTeDVSVUZCZVVVN1FVRkRla1VzYTBOQlFXdERPMEZCUTJ4RExDdEVRVUVyUkR0QlFVTXZSQ3hyUkVGQmEwUTdRVUZEYkVRc05FSkJRVFJDTzBGQlF6VkNMRzlEUVVGdlF6dEJRVU53UXl3d1FrRkJNRUk3UVVGRE1VSXNORU5CUVRSRE8wRkJRelZETEhGQ1FVRnhRanRCUVVOeVFpdzJSa0ZCTmtZN1FVRkROMFlzYjBOQlFXOURPMEZCUTNCRExEWkVRVUUyUkR0QlFVTTNSQ3cyUTBGQk5rTTdRVUZETjBNc2IwUkJRVzlFTzBGQlEzQkVMRGhFUVVFNFJEdEJRVU01UkN4M1JFRkJkMFE3UVVGRGVFUXNhMFpCUVd0R08wRkJRMnhHTERaRVFVRTJSRHRCUVVNM1JDeHJSa0ZCYTBZN1FVRkRiRVlzYVVaQlFXbEdPMEZCUTJwR0xIbEhRVUY1Unp0QlFVTjZSeXh2UTBGQmIwTTdRVUZEY0VNc2JVVkJRVzFGTzBGQlEyNUZMR2REUVVGblF6dEJRVU5vUXl4clJFRkJhMFE3UVVGRGJFUXNORUpCUVRSQ08wRkJRelZDTEc5RFFVRnZRenRCUVVOd1F5d3dRa0ZCTUVJN1FVRkRNVUlzTkVOQlFUUkRPMEZCUXpWRExIRkNRVUZ4UWp0QlFVTnlRaXhyUWtGQmEwSTdRVUZEYkVJc2JVSkJRVzFDTzBGQlEyNUNMRFJEUVVFMFF6dEJRVU0xUXl4elEwRkJjME03UVVGRGRFTXNXVUZCV1R0QlFVTmFMSGRDUVVGM1FqdEJRVU40UWl4UlFVRlJPMEZCUlZJc2JVSkJRVzFDTzBGQlJXNUNMRWxCUVVraUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmNiaThxS2x4dUlDb2dWWFJwYkdsMGFXVnpYRzRnS2k5Y2JseHVYRzVjYmx4dVhHNWNibHh1THlvcVhHNGdLaUJEYjI1MFpXNTBJRk4wWVhScFltbHNlbUYwYVc5dVhHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJUZEdGaWFXeHBlbVZEYjI1MFpXNTBLR052Ym5SbGJuUTZJSE4wY21sdVp5a2dPaUJ6ZEhKcGJtZDdYRzVjYmlBZ0lDQnlaWFIxY200Z0tHTnZiblJsYm5SOGZDY25LUzV5WlhCc1lXTmxLQzhtWjNRN0wyY3NJR0ErWUNrdWNtVndiR0ZqWlNndkpteDBPeTluTENCZ1BHQXBPMXh1WEc1OVhHNWNibHh1WEc1Y2JseHVMeW9xWEc0Z0tpQkJjbkpoZVNCU1pXWmhZM1J2Y2lCbWNtOXRJR3RsZVNCMGJ5QnJaWGxjYmlBcUwxeHVJR1Y0Y0c5eWRDQm1kVzVqZEdsdmJpQkJjbkpoZVZKaGJtZGxQRlErS0dGeVozTTZWRnRkTENCbWNtOXRQem9nYm5WdFltVnlMQ0IwYno4NklHNTFiV0psY2lsN1hHNWNiaUFnSUNCamIyNXpkQ0J2ZFhRZ09pQlVXMTBnUFNCYlhWeHVYRzRnSUNBZ1puSnZiU0E5SUdaeWIyMGdmSHdnTUR0Y2JpQWdJQ0JjYmlBZ0lDQjBieUE5SUhSdklIeDhJR0Z5WjNNdWJHVnVaM1JvTzF4dVhHNWNiaUFnSUNCbWNtOXRJRDBnWm5KdmJTQThJREFnUHlBd0lEb2dabkp2YlR0Y2JseHVJQ0FnSUhSdklEMGdkRzhnUGlCaGNtZHpMbXhsYm1kMGFDQS9JR0Z5WjNNdWJHVnVaM1JvSURvZ2RHODdYRzVjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJSGdnUFNBb1puSnZiU2s3SUhnZ1BDQmhjbWR6TG14bGJtZDBhRHNnZUNzcktTQjdJRzkxZEM1d2RYTm9LQ0JoY21kelczaGRJQ2s3SUgxY2JpQWdJQ0JjYmlBZ0lDQnlaWFIxY200Z2IzVjBPMXh1SUNBZ0lGeHVmVnh1WEc1Y2JseHVYRzVjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdSbFkyOWtaVWhVVFV4RmJuUnBkR2xsY3locGJuQjFkRG9nYzNSeWFXNW5LWHRjYmx4dUlDQWdJR052Ym5OMElIUnRjQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KM1JsZUhSaGNtVmhKeWxjYmx4dUlDQWdJSFJ0Y0M1cGJtNWxja2hVVFV3Z1BTQnBibkIxZER0Y2JpQWdJQ0JjYmlBZ0lDQnlaWFIxY200Z2RHMXdMblpoYkhWbFhHNGdJQ0FnWEc1OVhHNWNibHh1WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCbGJtTnZaR1ZJVkUxTVJXNTBhWFJwWlhNb2FXNXdkWFE2SUhOMGNtbHVaeWw3WEc1Y2JpQWdJQ0JqYjI1emRDQjBiWEFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2QwWlhoMFlYSmxZU2NwWEc1Y2JpQWdJQ0IwYlhBdWFXNXVaWEpVWlhoMElEMGdhVzV3ZFhRN1hHNGdJQ0FnWEc0Z0lDQWdjbVYwZFhKdUlIUnRjQzVwYm01bGNraFVUVXhjYmx4dWZWeHVYRzVjYmx4dVhHNHZLaXBjYmlBcUlFWnBlQ0JLVTA5T1hHNGdLaTljYmk4dklHVjRjRzl5ZENCbWRXNWpkR2x2YmlCS1UwOU9VMkZtWlZCaGNuTmxQRlFnWlhoMFpXNWtjeUJ2WW1wbFkzUStLR3B6YjI0NklITjBjbWx1WnlrZ09pQlVJSHdnYm5Wc2JIdGNibHh1THk4Z0lDQWdJR3hsZENCbWFYaGxaQ0E2SUZRZ1BTQjdmU0JoY3lCVVhHNWNiaTh2SUNBZ0lDQXZLaXBjYmk4dklDQWdJQ0FnS2lCQVUyOXNkWFJwYjI0Z1puSnZiU0JvZEhSd2N6b3ZMM04wWVdOcmIzWmxjbVpzYjNjdVkyOXRMMkV2TlRrek1qazBPVFV2TVRnd05UazBNVEZjYmk4dklDQWdJQ0FnS2k5Y2JseHVMeThnSUNBZ0lHWjFibU4wYVc5dUlHSjFiR3RTWldkbGVDaHpkSEk2SUhOMGNtbHVaeXdnWTJGc2JHSmhZMnM2SUVaMWJtTjBhVzl1SUh3Z1FYSnlZWGs4Um5WdVkzUnBiMjQrS1h0Y2JpOHZJQ0FnSUNBZ0lDQWdhV1lvWTJGc2JHSmhZMnNnSmlZZ2RIbHdaVzltSUdOaGJHeGlZV05ySUQwOVBTQW5ablZ1WTNScGIyNG5LWHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV3hzWW1GamF5aHpkSElwTzF4dUx5OGdJQ0FnSUNBZ0lDQjlaV3h6WlNCcFppaGpZV3hzWW1GamF5QW1KaUJCY25KaGVTNXBjMEZ5Y21GNUtHTmhiR3hpWVdOcktTbDdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2dZMkZzYkdKaFkyc3ViR1Z1WjNSb095QnBLeXNwZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1LR05oYkd4aVlXTnJXMmxkSUNZbUlIUjVjR1Z2WmlCallXeHNZbUZqYTF0cFhTQTlQVDBnSjJaMWJtTjBhVzl1SnlsN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMGNpQTlJR05oYkd4aVlXTnJXMmxkS0hOMGNpazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZldWc2MyVjdZbkpsWVdzN2ZWeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOMGNqdGNiaTh2SUNBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlPMXh1THk4Z0lDQWdJSDFjYmx4dVhHNHZMeUFnSUNBZ2FXWW9hbk52YmlBbUppQnFjMjl1SUNFOVBTQW5KeWw3WEc0dkx5QWdJQ0FnSUNBZ0lHbG1LSFI1Y0dWdlppQnFjMjl1SUNFOVBTQW5jM1J5YVc1bkp5bDdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQjBjbmw3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FuTnZiaUE5SUVwVFQwNHVjM1J5YVc1bmFXWjVLR3B6YjI0cE8xeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ2ZXTmhkR05vS0dVcGUzSmxkSFZ5YmlCdWRXeHNPMzFjYmk4dklDQWdJQ0FnSUNBZ2ZWeHVMeThnSUNBZ0lDQWdJQ0JwWmloMGVYQmxiMllnYW5OdmJpQTlQVDBnSjNOMGNtbHVaeWNwZTF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnYW5OdmJpQTlJR0oxYkd0U1pXZGxlQ2hxYzI5dUxDQmJYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS0hOMGNqcHpkSEpwYm1jcElEMCtJSE4wY2k1eVpYQnNZV05sS0M5YlhGeHVYRngwWFM5bmJTd2dKeWNwTEZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDaHpkSEk2YzNSeWFXNW5LU0E5UGlCemRISXVjbVZ3YkdGalpTZ3ZMRnhjZlM5bmJTd2dKMzBuS1N4Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW9jM1J5T25OMGNtbHVaeWtnUFQ0Z2MzUnlMbkpsY0d4aFkyVW9MeXhjWEYwdloyMHNJQ2RkSnlrc1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLSE4wY2pwemRISnBibWNwSUQwK0lIdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR0Z6ZEhJZ1BTQnpkSEl1YzNCc2FYUW9MeWcvUFZzc1hGeDlYRnhkWFNrdlp5azdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpkSElnUFNCaGMzUnlMbTFoY0NoeklEMCtJSHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtITXVhVzVqYkhWa1pYTW9Kem9uS1NBbUppQnpLWHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYzNSeVVDQTlJSE11YzNCc2FYUW9Mem9vTGlzcEx5d2dNaWs3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1J5VUZzd1hTQTlJSE4wY2xCYk1GMHVkSEpwYlNncE8xeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtITjBjbEJiTUYwcGUxeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWm1seWMzUlFJRDBnYzNSeVVGc3dYUzV6Y0d4cGRDZ3ZLRnNzWEZ4N1hGeGJYU2t2WnlrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnBjbk4wVUZ0bWFYSnpkRkF1YkdWdVozUm9MVEZkSUQwZ1luVnNhMUpsWjJWNEtHWnBjbk4wVUZ0bWFYSnpkRkF1YkdWdVozUm9MVEZkTENBb2NEcHpkSEpwYm1jcElEMCtJSEF1Y21Wd2JHRmpaU2d2VzE1QkxWcGhMWG93TFRsY1hDMWZYUzhzSUNjbktTazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wY2xCYk1GMGdQU0JtYVhKemRGQXVhbTlwYmlnbkp5azdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQndZWEowSUQwZ2MzUnlVRnN4WFM1MGNtbHRLQ2s3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lvS0hCaGNuUXVjM1JoY25SelYybDBhQ2duWENJbktTQW1KaUJ3WVhKMExtVnVaSE5YYVhSb0tDZGNJaWNwS1NCOGZDQW9jR0Z5ZEM1emRHRnlkSE5YYVhSb0tDZGNYQ2NuS1NBbUppQndZWEowTG1WdVpITlhhWFJvS0NkY1hDY25LU2tnZkh3Z0tIQmhjblF1YzNSaGNuUnpWMmwwYUNnbllDY3BJQ1ltSUhCaGNuUXVaVzVrYzFkcGRHZ29KMkFuS1NrcGUxeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndZWEowSUQwZ2NHRnlkQzV6ZFdKemRISW9NU3dnY0dGeWRDNXNaVzVuZEdnZ0xTQXlLVHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRnlkQ0E5SUdKMWJHdFNaV2RsZUNod1lYSjBMQ0JiWEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNod09uTjBjbWx1WnlrZ1BUNGdjQzV5WlhCc1lXTmxLQzhvVzF3aVhTa3ZaMjBzSUNkY1hGeGNKREVuS1N4Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0tIQTZjM1J5YVc1bktTQTlQaUJ3TG5KbGNHeGhZMlVvTDF4Y1hGd25MMmR0TENBblhGd25KeWtzWEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNod09uTjBjbWx1WnlrZ1BUNGdjQzV5WlhCc1lXTmxLQzljWEZ4Y1lDOW5iU3dnSjJBbktTeGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCZEtUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRISlFXekZkSUQwZ0tDZGNJaWNyY0dGeWRDc25YQ0luS1M1MGNtbHRLQ2s3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjeUE5SUhOMGNsQXVhbTlwYmlnbk9pY3BPMXh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhNN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWVhOMGNpNXFiMmx1S0NjbktUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5TEZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDaHpkSEk2YzNSeWFXNW5LU0E5UGlCemRISXVjbVZ3YkdGalpTZ3ZLRnNuWENKZEtUOG9XMkV0ZWtFdFdqQXRPVnhjTFY5ZEt5a29XeWRjSWwwcFB6b3ZaeXdnSjF3aUpESmNJam9uS1N4Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQW9jM1J5T25OMGNtbHVaeWtnUFQ0Z2UxeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZWE4wY2lBOUlITjBjaTV6Y0d4cGRDZ3ZLRDg5V3l4Y1hIMWNYRjFkS1M5bmFTazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnpkSElnUFNCaGMzUnlMbTFoY0NoeklEMCtJSHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtITXVhVzVqYkhWa1pYTW9Kem9uS1NBbUppQnpLWHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYzNSeVVDQTlJSE11YzNCc2FYUW9Mem9vTGlzcEx5d2dNaWs3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1J5VUZzd1hTQTlJSE4wY2xCYk1GMHVkSEpwYlNncE8xeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUtITjBjbEJiTVYwdWFXNWpiSFZrWlhNb0oxd2lKeWtnSmlZZ2MzUnlVRnN4WFM1cGJtTnNkV1JsY3lnbk9pY3BLWHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIQmhjblFnUFNCemRISlFXekZkTG5SeWFXMG9LVHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2NHRnlkQzV6ZEdGeWRITlhhWFJvS0NkY0lpY3BJQ1ltSUhCaGNuUXVaVzVrYzFkcGRHZ29KMXdpSnlrcGUxeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGeWRDQTlJSEJoY25RdWMzVmljM1J5YVc1bktERXNJSEJoY25RdWJHVnVaM1JvSUMwZ01pazdYRzR2THlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYSjBJRDBnWW5Wc2ExSmxaMlY0S0hCaGNuUXNJQ2h3T25OMGNtbHVaeWtnUFQ0Z2NDNXlaWEJzWVdObEtDOG9QendoWEZ4Y1hDbGNJaTluYlN3Z0p5Y3BLVHRjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRISlFXekZkSUQwZ0tDZGNJaWNyY0dGeWRDc25YQ0luS1M1MGNtbHRLQ2s3WEc0dkx5QWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1THk4Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITWdQU0J6ZEhKUUxtcHZhVzRvSnpvbktUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ6TzF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpOHZJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z6ZEhJdWFtOXBiaWduSnlrN1hHNHZMeUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU3hjYmk4dklDQWdJQ0FnSUNBZ0lDQWdJRjBwTzF4dUx5OGdJQ0FnSUNBZ0lDQWdJQ0FnZEhKNWUxeHVMeThnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1pwZUdWa0lEMGdTbE5QVGk1d1lYSnpaU2hxYzI5dUtUdGNiaTh2SUNBZ0lDQWdJQ0FnSUNBZ0lIMWpZWFJqYUNobEtYdHlaWFIxY200Z2JuVnNiRHQ5WEc0dkx5QWdJQ0FnSUNBZ0lIMWNiaTh2SUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1pwZUdWa08xeHVMeThnSUNBZ0lIMWNibHh1THk4Z0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dVhHNHZMeUI5SWwxOSIsIi8qXG4gKiBFSlMgRW1iZWRkZWQgSmF2YVNjcmlwdCB0ZW1wbGF0ZXNcbiAqIENvcHlyaWdodCAyMTEyIE1hdHRoZXcgRWVybmlzc2UgKG1kZUBmbGVlZ2l4Lm9yZylcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAZmlsZSBFbWJlZGRlZCBKYXZhU2NyaXB0IHRlbXBsYXRpbmcgZW5naW5lLiB7QGxpbmsgaHR0cDovL2Vqcy5jb31cbiAqIEBhdXRob3IgTWF0dGhldyBFZXJuaXNzZSA8bWRlQGZsZWVnaXgub3JnPlxuICogQGF1dGhvciBUaWFuY2hlbmcgXCJUaW1vdGh5XCIgR3UgPHRpbW90aHlndTk5QGdtYWlsLmNvbT5cbiAqIEBwcm9qZWN0IEVKU1xuICogQGxpY2Vuc2Uge0BsaW5rIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMCBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjB9XG4gKi9cblxuLyoqXG4gKiBFSlMgaW50ZXJuYWwgZnVuY3Rpb25zLlxuICpcbiAqIFRlY2huaWNhbGx5IHRoaXMgXCJtb2R1bGVcIiBsaWVzIGluIHRoZSBzYW1lIGZpbGUgYXMge0BsaW5rIG1vZHVsZTplanN9LCBmb3JcbiAqIHRoZSBzYWtlIG9mIG9yZ2FuaXphdGlvbiBhbGwgdGhlIHByaXZhdGUgZnVuY3Rpb25zIHJlIGdyb3VwZWQgaW50byB0aGlzXG4gKiBtb2R1bGUuXG4gKlxuICogQG1vZHVsZSBlanMtaW50ZXJuYWxcbiAqIEBwcml2YXRlXG4gKi9cblxuLyoqXG4gKiBFbWJlZGRlZCBKYXZhU2NyaXB0IHRlbXBsYXRpbmcgZW5naW5lLlxuICpcbiAqIEBtb2R1bGUgZWpzXG4gKiBAcHVibGljXG4gKi9cblxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgc2NvcGVPcHRpb25XYXJuZWQgPSBmYWxzZTtcbi8qKiBAdHlwZSB7c3RyaW5nfSAqL1xudmFyIF9WRVJTSU9OX1NUUklORyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG52YXIgX0RFRkFVTFRfT1BFTl9ERUxJTUlURVIgPSAnPCc7XG52YXIgX0RFRkFVTFRfQ0xPU0VfREVMSU1JVEVSID0gJz4nO1xudmFyIF9ERUZBVUxUX0RFTElNSVRFUiA9ICclJztcbnZhciBfREVGQVVMVF9MT0NBTFNfTkFNRSA9ICdsb2NhbHMnO1xudmFyIF9OQU1FID0gJ2Vqcyc7XG52YXIgX1JFR0VYX1NUUklORyA9ICcoPCUlfCUlPnw8JT18PCUtfDwlX3w8JSN8PCV8JT58LSU+fF8lPiknO1xudmFyIF9PUFRTX1BBU1NBQkxFX1dJVEhfREFUQSA9IFsnZGVsaW1pdGVyJywgJ3Njb3BlJywgJ2NvbnRleHQnLCAnZGVidWcnLCAnY29tcGlsZURlYnVnJyxcbiAgJ2NsaWVudCcsICdfd2l0aCcsICdybVdoaXRlc3BhY2UnLCAnc3RyaWN0JywgJ2ZpbGVuYW1lJywgJ2FzeW5jJ107XG4vLyBXZSBkb24ndCBhbGxvdyAnY2FjaGUnIG9wdGlvbiB0byBiZSBwYXNzZWQgaW4gdGhlIGRhdGEgb2JqIGZvclxuLy8gdGhlIG5vcm1hbCBgcmVuZGVyYCBjYWxsLCBidXQgdGhpcyBpcyB3aGVyZSBFeHByZXNzIDIgJiAzIHB1dCBpdFxuLy8gc28gd2UgbWFrZSBhbiBleGNlcHRpb24gZm9yIGByZW5kZXJGaWxlYFxudmFyIF9PUFRTX1BBU1NBQkxFX1dJVEhfREFUQV9FWFBSRVNTID0gX09QVFNfUEFTU0FCTEVfV0lUSF9EQVRBLmNvbmNhdCgnY2FjaGUnKTtcbnZhciBfQk9NID0gL15cXHVGRUZGLztcblxuLyoqXG4gKiBFSlMgdGVtcGxhdGUgZnVuY3Rpb24gY2FjaGUuIFRoaXMgY2FuIGJlIGEgTFJVIG9iamVjdCBmcm9tIGxydS1jYWNoZSBOUE1cbiAqIG1vZHVsZS4gQnkgZGVmYXVsdCwgaXQgaXMge0BsaW5rIG1vZHVsZTp1dGlscy5jYWNoZX0sIGEgc2ltcGxlIGluLXByb2Nlc3NcbiAqIGNhY2hlIHRoYXQgZ3Jvd3MgY29udGludW91c2x5LlxuICpcbiAqIEB0eXBlIHtDYWNoZX1cbiAqL1xuXG5leHBvcnRzLmNhY2hlID0gdXRpbHMuY2FjaGU7XG5cbi8qKlxuICogQ3VzdG9tIGZpbGUgbG9hZGVyLiBVc2VmdWwgZm9yIHRlbXBsYXRlIHByZXByb2Nlc3Npbmcgb3IgcmVzdHJpY3RpbmcgYWNjZXNzXG4gKiB0byBhIGNlcnRhaW4gcGFydCBvZiB0aGUgZmlsZXN5c3RlbS5cbiAqXG4gKiBAdHlwZSB7ZmlsZUxvYWRlcn1cbiAqL1xuXG5leHBvcnRzLmZpbGVMb2FkZXIgPSBmcy5yZWFkRmlsZVN5bmM7XG5cbi8qKlxuICogTmFtZSBvZiB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGxvY2Fscy5cbiAqXG4gKiBUaGlzIHZhcmlhYmxlIGlzIG92ZXJyaWRkZW4gYnkge0BsaW5rIE9wdGlvbnN9YC5sb2NhbHNOYW1lYCBpZiBpdCBpcyBub3RcbiAqIGB1bmRlZmluZWRgLlxuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5sb2NhbHNOYW1lID0gX0RFRkFVTFRfTE9DQUxTX05BTUU7XG5cbi8qKlxuICogUHJvbWlzZSBpbXBsZW1lbnRhdGlvbiAtLSBkZWZhdWx0cyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uIGlmIGF2YWlsYWJsZVxuICogVGhpcyBpcyBtb3N0bHkganVzdCBmb3IgdGVzdGFiaWxpdHlcbiAqXG4gKiBAdHlwZSB7UHJvbWlzZUNvbnN0cnVjdG9yTGlrZX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnByb21pc2VJbXBsID0gKG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXM7JykpKCkuUHJvbWlzZTtcblxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gdGhlIGluY2x1ZGVkIGZpbGUgZnJvbSB0aGUgcGFyZW50IGZpbGUgcGF0aCBhbmQgdGhlXG4gKiBzcGVjaWZpZWQgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gIG5hbWUgICAgIHNwZWNpZmllZCBwYXRoXG4gKiBAcGFyYW0ge1N0cmluZ30gIGZpbGVuYW1lIHBhcmVudCBmaWxlIHBhdGhcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzRGlyPWZhbHNlXSB3aGV0aGVyIHRoZSBwYXJlbnQgZmlsZSBwYXRoIGlzIGEgZGlyZWN0b3J5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMucmVzb2x2ZUluY2x1ZGUgPSBmdW5jdGlvbihuYW1lLCBmaWxlbmFtZSwgaXNEaXIpIHtcbiAgdmFyIGRpcm5hbWUgPSBwYXRoLmRpcm5hbWU7XG4gIHZhciBleHRuYW1lID0gcGF0aC5leHRuYW1lO1xuICB2YXIgcmVzb2x2ZSA9IHBhdGgucmVzb2x2ZTtcbiAgdmFyIGluY2x1ZGVQYXRoID0gcmVzb2x2ZShpc0RpciA/IGZpbGVuYW1lIDogZGlybmFtZShmaWxlbmFtZSksIG5hbWUpO1xuICB2YXIgZXh0ID0gZXh0bmFtZShuYW1lKTtcbiAgaWYgKCFleHQpIHtcbiAgICBpbmNsdWRlUGF0aCArPSAnLmVqcyc7XG4gIH1cbiAgcmV0dXJuIGluY2x1ZGVQYXRoO1xufTtcblxuLyoqXG4gKiBUcnkgdG8gcmVzb2x2ZSBmaWxlIHBhdGggb24gbXVsdGlwbGUgZGlyZWN0b3JpZXNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgICBuYW1lICBzcGVjaWZpZWQgcGF0aFxuICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gcGF0aHMgbGlzdCBvZiBwb3NzaWJsZSBwYXJlbnQgZGlyZWN0b3J5IHBhdGhzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVQYXRocyhuYW1lLCBwYXRocykge1xuICB2YXIgZmlsZVBhdGg7XG4gIGlmIChwYXRocy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgZmlsZVBhdGggPSBleHBvcnRzLnJlc29sdmVJbmNsdWRlKG5hbWUsIHYsIHRydWUpO1xuICAgIHJldHVybiBmcy5leGlzdHNTeW5jKGZpbGVQYXRoKTtcbiAgfSkpIHtcbiAgICByZXR1cm4gZmlsZVBhdGg7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gdGhlIGluY2x1ZGVkIGZpbGUgYnkgT3B0aW9uc1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gIHBhdGggICAgc3BlY2lmaWVkIHBhdGhcbiAqIEBwYXJhbSAge09wdGlvbnN9IG9wdGlvbnMgY29tcGlsYXRpb24gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRJbmNsdWRlUGF0aChwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBpbmNsdWRlUGF0aDtcbiAgdmFyIGZpbGVQYXRoO1xuICB2YXIgdmlld3MgPSBvcHRpb25zLnZpZXdzO1xuICB2YXIgbWF0Y2ggPSAvXltBLVphLXpdKzpcXFxcfF5cXC8vLmV4ZWMocGF0aCk7XG5cbiAgLy8gQWJzIHBhdGhcbiAgaWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCkge1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8qLywgJycpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMucm9vdCkpIHtcbiAgICAgIGluY2x1ZGVQYXRoID0gcmVzb2x2ZVBhdGhzKHBhdGgsIG9wdGlvbnMucm9vdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluY2x1ZGVQYXRoID0gZXhwb3J0cy5yZXNvbHZlSW5jbHVkZShwYXRoLCBvcHRpb25zLnJvb3QgfHwgJy8nLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgLy8gUmVsYXRpdmUgcGF0aHNcbiAgZWxzZSB7XG4gICAgLy8gTG9vayByZWxhdGl2ZSB0byBhIHBhc3NlZCBmaWxlbmFtZSBmaXJzdFxuICAgIGlmIChvcHRpb25zLmZpbGVuYW1lKSB7XG4gICAgICBmaWxlUGF0aCA9IGV4cG9ydHMucmVzb2x2ZUluY2x1ZGUocGF0aCwgb3B0aW9ucy5maWxlbmFtZSk7XG4gICAgICBpZiAoZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICAgICAgaW5jbHVkZVBhdGggPSBmaWxlUGF0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlbiBsb29rIGluIGFueSB2aWV3cyBkaXJlY3Rvcmllc1xuICAgIGlmICghaW5jbHVkZVBhdGggJiYgQXJyYXkuaXNBcnJheSh2aWV3cykpIHtcbiAgICAgIGluY2x1ZGVQYXRoID0gcmVzb2x2ZVBhdGhzKHBhdGgsIHZpZXdzKTtcbiAgICB9XG4gICAgaWYgKCFpbmNsdWRlUGF0aCAmJiB0eXBlb2Ygb3B0aW9ucy5pbmNsdWRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB0aGUgaW5jbHVkZSBmaWxlIFwiJyArXG4gICAgICAgICAgb3B0aW9ucy5lc2NhcGVGdW5jdGlvbihwYXRoKSArICdcIicpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5jbHVkZVBhdGg7XG59XG5cbi8qKlxuICogR2V0IHRoZSB0ZW1wbGF0ZSBmcm9tIGEgc3RyaW5nIG9yIGEgZmlsZSwgZWl0aGVyIGNvbXBpbGVkIG9uLXRoZS1mbHkgb3JcbiAqIHJlYWQgZnJvbSBjYWNoZSAoaWYgZW5hYmxlZCksIGFuZCBjYWNoZSB0aGUgdGVtcGxhdGUgaWYgbmVlZGVkLlxuICpcbiAqIElmIGB0ZW1wbGF0ZWAgaXMgbm90IHNldCwgdGhlIGZpbGUgc3BlY2lmaWVkIGluIGBvcHRpb25zLmZpbGVuYW1lYCB3aWxsIGJlXG4gKiByZWFkLlxuICpcbiAqIElmIGBvcHRpb25zLmNhY2hlYCBpcyB0cnVlLCB0aGlzIGZ1bmN0aW9uIHJlYWRzIHRoZSBmaWxlIGZyb21cbiAqIGBvcHRpb25zLmZpbGVuYW1lYCBzbyBpdCBtdXN0IGJlIHNldCBwcmlvciB0byBjYWxsaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTplanMtaW50ZXJuYWxcbiAqIEBwYXJhbSB7T3B0aW9uc30gb3B0aW9ucyAgIGNvbXBpbGF0aW9uIG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBbdGVtcGxhdGVdIHRlbXBsYXRlIHNvdXJjZVxuICogQHJldHVybiB7KFRlbXBsYXRlRnVuY3Rpb258Q2xpZW50RnVuY3Rpb24pfVxuICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSBvZiBgb3B0aW9ucy5jbGllbnRgLCBlaXRoZXIgdHlwZSBtaWdodCBiZSByZXR1cm5lZC5cbiAqIEBzdGF0aWNcbiAqL1xuXG5mdW5jdGlvbiBoYW5kbGVDYWNoZShvcHRpb25zLCB0ZW1wbGF0ZSkge1xuICB2YXIgZnVuYztcbiAgdmFyIGZpbGVuYW1lID0gb3B0aW9ucy5maWxlbmFtZTtcbiAgdmFyIGhhc1RlbXBsYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDE7XG5cbiAgaWYgKG9wdGlvbnMuY2FjaGUpIHtcbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhY2hlIG9wdGlvbiByZXF1aXJlcyBhIGZpbGVuYW1lJyk7XG4gICAgfVxuICAgIGZ1bmMgPSBleHBvcnRzLmNhY2hlLmdldChmaWxlbmFtZSk7XG4gICAgaWYgKGZ1bmMpIHtcbiAgICAgIHJldHVybiBmdW5jO1xuICAgIH1cbiAgICBpZiAoIWhhc1RlbXBsYXRlKSB7XG4gICAgICB0ZW1wbGF0ZSA9IGZpbGVMb2FkZXIoZmlsZW5hbWUpLnRvU3RyaW5nKCkucmVwbGFjZShfQk9NLCAnJyk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKCFoYXNUZW1wbGF0ZSkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZjogc2hvdWxkIG5vdCBoYXBwZW4gYXQgYWxsXG4gICAgaWYgKCFmaWxlbmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnRlcm5hbCBFSlMgZXJyb3I6IG5vIGZpbGUgbmFtZSBvciB0ZW1wbGF0ZSAnXG4gICAgICAgICAgICAgICAgICAgICsgJ3Byb3ZpZGVkJyk7XG4gICAgfVxuICAgIHRlbXBsYXRlID0gZmlsZUxvYWRlcihmaWxlbmFtZSkudG9TdHJpbmcoKS5yZXBsYWNlKF9CT00sICcnKTtcbiAgfVxuICBmdW5jID0gZXhwb3J0cy5jb21waWxlKHRlbXBsYXRlLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuY2FjaGUpIHtcbiAgICBleHBvcnRzLmNhY2hlLnNldChmaWxlbmFtZSwgZnVuYyk7XG4gIH1cbiAgcmV0dXJuIGZ1bmM7XG59XG5cbi8qKlxuICogVHJ5IGNhbGxpbmcgaGFuZGxlQ2FjaGUgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucyBhbmQgZGF0YSBhbmQgY2FsbCB0aGVcbiAqIGNhbGxiYWNrIHdpdGggdGhlIHJlc3VsdC4gSWYgYW4gZXJyb3Igb2NjdXJzLCBjYWxsIHRoZSBjYWxsYmFjayB3aXRoXG4gKiB0aGUgZXJyb3IuIFVzZWQgYnkgcmVuZGVyRmlsZSgpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZWpzLWludGVybmFsXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnMgICAgY29tcGlsYXRpb24gb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGRhdGEgICAgICAgIHRlbXBsYXRlIGRhdGFcbiAqIEBwYXJhbSB7UmVuZGVyRmlsZUNhbGxiYWNrfSBjYiBjYWxsYmFja1xuICogQHN0YXRpY1xuICovXG5cbmZ1bmN0aW9uIHRyeUhhbmRsZUNhY2hlKG9wdGlvbnMsIGRhdGEsIGNiKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICghY2IpIHtcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMucHJvbWlzZUltcGwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyBleHBvcnRzLnByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVDYWNoZShvcHRpb25zKShkYXRhKTtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgY2FsbGJhY2sgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGhhbmRsZUNhY2hlKG9wdGlvbnMpKGRhdGEpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICB9XG5cbiAgICBjYihudWxsLCByZXN1bHQpO1xuICB9XG59XG5cbi8qKlxuICogZmlsZUxvYWRlciBpcyBpbmRlcGVuZGVudFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlUGF0aCBlanMgZmlsZSBwYXRoLlxuICogQHJldHVybiB7U3RyaW5nfSBUaGUgY29udGVudHMgb2YgdGhlIHNwZWNpZmllZCBmaWxlLlxuICogQHN0YXRpY1xuICovXG5cbmZ1bmN0aW9uIGZpbGVMb2FkZXIoZmlsZVBhdGgpe1xuICByZXR1cm4gZXhwb3J0cy5maWxlTG9hZGVyKGZpbGVQYXRoKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICpcbiAqIElmIGBvcHRpb25zLmNhY2hlYCBpcyBgdHJ1ZWAsIHRoZW4gdGhlIHRlbXBsYXRlIGlzIGNhY2hlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmVqcy1pbnRlcm5hbFxuICogQHBhcmFtIHtTdHJpbmd9ICBwYXRoICAgIHBhdGggZm9yIHRoZSBzcGVjaWZpZWQgZmlsZVxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zIGNvbXBpbGF0aW9uIG9wdGlvbnNcbiAqIEByZXR1cm4geyhUZW1wbGF0ZUZ1bmN0aW9ufENsaWVudEZ1bmN0aW9uKX1cbiAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYG9wdGlvbnMuY2xpZW50YCwgZWl0aGVyIHR5cGUgbWlnaHQgYmUgcmV0dXJuZWRcbiAqIEBzdGF0aWNcbiAqL1xuXG5mdW5jdGlvbiBpbmNsdWRlRmlsZShwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdXRpbHMuc2hhbGxvd0NvcHkoe30sIG9wdGlvbnMpO1xuICBvcHRzLmZpbGVuYW1lID0gZ2V0SW5jbHVkZVBhdGgocGF0aCwgb3B0cyk7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbmNsdWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBpbmNsdWRlclJlc3VsdCA9IG9wdGlvbnMuaW5jbHVkZXIocGF0aCwgb3B0cy5maWxlbmFtZSk7XG4gICAgaWYgKGluY2x1ZGVyUmVzdWx0KSB7XG4gICAgICBpZiAoaW5jbHVkZXJSZXN1bHQuZmlsZW5hbWUpIHtcbiAgICAgICAgb3B0cy5maWxlbmFtZSA9IGluY2x1ZGVyUmVzdWx0LmZpbGVuYW1lO1xuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVyUmVzdWx0LnRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVDYWNoZShvcHRzLCBpbmNsdWRlclJlc3VsdC50ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBoYW5kbGVDYWNoZShvcHRzKTtcbn1cblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGUgYHN0cmAgb2YgZWpzLCBgZmlsZW5hbWVgLCBhbmRcbiAqIGBsaW5lbm9gLlxuICpcbiAqIEBpbXBsZW1lbnRzIHtSZXRocm93Q2FsbGJhY2t9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmVqcy1pbnRlcm5hbFxuICogQHBhcmFtIHtFcnJvcn0gIGVyciAgICAgIEVycm9yIG9iamVjdFxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciAgICAgIEVKUyBzb3VyY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBmbG5tICAgICBmaWxlIG5hbWUgb2YgdGhlIEVKUyBmaWxlXG4gKiBAcGFyYW0ge051bWJlcn0gbGluZW5vICAgbGluZSBudW1iZXIgb2YgdGhlIGVycm9yXG4gKiBAcGFyYW0ge0VzY2FwZUNhbGxiYWNrfSBlc2NcbiAqIEBzdGF0aWNcbiAqL1xuXG5mdW5jdGlvbiByZXRocm93KGVyciwgc3RyLCBmbG5tLCBsaW5lbm8sIGVzYykge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpO1xuICB2YXIgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSAzLCAwKTtcbiAgdmFyIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgMyk7XG4gIHZhciBmaWxlbmFtZSA9IGVzYyhmbG5tKTtcbiAgLy8gRXJyb3IgY29udGV4dFxuICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbiAobGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnID4+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnZWpzJykgKyAnOidcbiAgICArIGxpbmVubyArICdcXG4nXG4gICAgKyBjb250ZXh0ICsgJ1xcblxcbidcbiAgICArIGVyci5tZXNzYWdlO1xuXG4gIHRocm93IGVycjtcbn1cblxuZnVuY3Rpb24gc3RyaXBTZW1pKHN0cil7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvOyhcXHMqJCkvLCAnJDEnKTtcbn1cblxuLyoqXG4gKiBDb21waWxlIHRoZSBnaXZlbiBgc3RyYCBvZiBlanMgaW50byBhIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSAgdGVtcGxhdGUgRUpTIHRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtPcHRpb25zfSBbb3B0c10gY29tcGlsYXRpb24gb3B0aW9uc1xuICpcbiAqIEByZXR1cm4geyhUZW1wbGF0ZUZ1bmN0aW9ufENsaWVudEZ1bmN0aW9uKX1cbiAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYG9wdHMuY2xpZW50YCwgZWl0aGVyIHR5cGUgbWlnaHQgYmUgcmV0dXJuZWQuXG4gKiBOb3RlIHRoYXQgdGhlIHJldHVybiB0eXBlIG9mIHRoZSBmdW5jdGlvbiBhbHNvIGRlcGVuZHMgb24gdGhlIHZhbHVlIG9mIGBvcHRzLmFzeW5jYC5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmNvbXBpbGUgPSBmdW5jdGlvbiBjb21waWxlKHRlbXBsYXRlLCBvcHRzKSB7XG4gIHZhciB0ZW1wbDtcblxuICAvLyB2MSBjb21wYXRcbiAgLy8gJ3Njb3BlJyBpcyAnY29udGV4dCdcbiAgLy8gRklYTUU6IFJlbW92ZSB0aGlzIGluIGEgZnV0dXJlIHZlcnNpb25cbiAgaWYgKG9wdHMgJiYgb3B0cy5zY29wZSkge1xuICAgIGlmICghc2NvcGVPcHRpb25XYXJuZWQpe1xuICAgICAgY29uc29sZS53YXJuKCdgc2NvcGVgIG9wdGlvbiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gRUpTIDMnKTtcbiAgICAgIHNjb3BlT3B0aW9uV2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFvcHRzLmNvbnRleHQpIHtcbiAgICAgIG9wdHMuY29udGV4dCA9IG9wdHMuc2NvcGU7XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRzLnNjb3BlO1xuICB9XG4gIHRlbXBsID0gbmV3IFRlbXBsYXRlKHRlbXBsYXRlLCBvcHRzKTtcbiAgcmV0dXJuIHRlbXBsLmNvbXBpbGUoKTtcbn07XG5cbi8qKlxuICogUmVuZGVyIHRoZSBnaXZlbiBgdGVtcGxhdGVgIG9mIGVqcy5cbiAqXG4gKiBJZiB5b3Ugd291bGQgbGlrZSB0byBpbmNsdWRlIG9wdGlvbnMgYnV0IG5vdCBkYXRhLCB5b3UgbmVlZCB0byBleHBsaWNpdGx5XG4gKiBjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCBgZGF0YWAgYmVpbmcgYW4gZW1wdHkgb2JqZWN0IG9yIGBudWxsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gICB0ZW1wbGF0ZSBFSlMgdGVtcGxhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSAgW2RhdGE9e31dIHRlbXBsYXRlIGRhdGFcbiAqIEBwYXJhbSB7T3B0aW9uc30gW29wdHM9e31dIGNvbXBpbGF0aW9uIGFuZCByZW5kZXJpbmcgb3B0aW9uc1xuICogQHJldHVybiB7KFN0cmluZ3xQcm9taXNlPFN0cmluZz4pfVxuICogUmV0dXJuIHZhbHVlIHR5cGUgZGVwZW5kcyBvbiBgb3B0cy5hc3luY2AuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5yZW5kZXIgPSBmdW5jdGlvbiAodGVtcGxhdGUsIGQsIG8pIHtcbiAgdmFyIGRhdGEgPSBkIHx8IHt9O1xuICB2YXIgb3B0cyA9IG8gfHwge307XG5cbiAgLy8gTm8gb3B0aW9ucyBvYmplY3QgLS0gaWYgdGhlcmUgYXJlIG9wdGlvbnkgbmFtZXNcbiAgLy8gaW4gdGhlIGRhdGEsIGNvcHkgdGhlbSB0byBvcHRpb25zXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDIpIHtcbiAgICB1dGlscy5zaGFsbG93Q29weUZyb21MaXN0KG9wdHMsIGRhdGEsIF9PUFRTX1BBU1NBQkxFX1dJVEhfREFUQSk7XG4gIH1cblxuICByZXR1cm4gaGFuZGxlQ2FjaGUob3B0cywgdGVtcGxhdGUpKGRhdGEpO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgYW4gRUpTIGZpbGUgYXQgdGhlIGdpdmVuIGBwYXRoYCBhbmQgY2FsbGJhY2sgYGNiKGVyciwgc3RyKWAuXG4gKlxuICogSWYgeW91IHdvdWxkIGxpa2UgdG8gaW5jbHVkZSBvcHRpb25zIGJ1dCBub3QgZGF0YSwgeW91IG5lZWQgdG8gZXhwbGljaXRseVxuICogY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggYGRhdGFgIGJlaW5nIGFuIGVtcHR5IG9iamVjdCBvciBgbnVsbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9ICAgICAgICAgICAgIHBhdGggICAgIHBhdGggdG8gdGhlIEVKUyBmaWxlXG4gKiBAcGFyYW0ge09iamVjdH0gICAgICAgICAgICBbZGF0YT17fV0gdGVtcGxhdGUgZGF0YVxuICogQHBhcmFtIHtPcHRpb25zfSAgICAgICAgICAgW29wdHM9e31dIGNvbXBpbGF0aW9uIGFuZCByZW5kZXJpbmcgb3B0aW9uc1xuICogQHBhcmFtIHtSZW5kZXJGaWxlQ2FsbGJhY2t9IGNiIGNhbGxiYWNrXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5yZW5kZXJGaWxlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gIHZhciBmaWxlbmFtZSA9IGFyZ3Muc2hpZnQoKTtcbiAgdmFyIGNiO1xuICB2YXIgb3B0cyA9IHtmaWxlbmFtZTogZmlsZW5hbWV9O1xuICB2YXIgZGF0YTtcbiAgdmFyIHZpZXdPcHRzO1xuXG4gIC8vIERvIHdlIGhhdmUgYSBjYWxsYmFjaz9cbiAgaWYgKHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGFyZ3MucG9wKCk7XG4gIH1cbiAgLy8gRG8gd2UgaGF2ZSBkYXRhL29wdHM/XG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIC8vIFNob3VsZCBhbHdheXMgaGF2ZSBkYXRhIG9ialxuICAgIGRhdGEgPSBhcmdzLnNoaWZ0KCk7XG4gICAgLy8gTm9ybWFsIHBhc3NlZCBvcHRzIChkYXRhIG9iaiArIG9wdHMgb2JqKVxuICAgIGlmIChhcmdzLmxlbmd0aCkge1xuICAgICAgLy8gVXNlIHNoYWxsb3dDb3B5IHNvIHdlIGRvbid0IHBvbGx1dGUgcGFzc2VkIGluIG9wdHMgb2JqIHdpdGggbmV3IHZhbHNcbiAgICAgIHV0aWxzLnNoYWxsb3dDb3B5KG9wdHMsIGFyZ3MucG9wKCkpO1xuICAgIH1cbiAgICAvLyBTcGVjaWFsIGNhc2luZyBmb3IgRXhwcmVzcyAoc2V0dGluZ3MgKyBvcHRzLWluLWRhdGEpXG4gICAgZWxzZSB7XG4gICAgICAvLyBFeHByZXNzIDMgYW5kIDRcbiAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4gICAgICAgIC8vIFB1bGwgYSBmZXcgdGhpbmdzIGZyb20ga25vd24gbG9jYXRpb25zXG4gICAgICAgIGlmIChkYXRhLnNldHRpbmdzLnZpZXdzKSB7XG4gICAgICAgICAgb3B0cy52aWV3cyA9IGRhdGEuc2V0dGluZ3Mudmlld3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3NbJ3ZpZXcgY2FjaGUnXSkge1xuICAgICAgICAgIG9wdHMuY2FjaGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZG9jdW1lbnRlZCBhZnRlciBFeHByZXNzIDIsIGJ1dCBzdGlsbCB1c2FibGUsIGVzcC4gZm9yXG4gICAgICAgIC8vIGl0ZW1zIHRoYXQgYXJlIHVuc2FmZSB0byBiZSBwYXNzZWQgYWxvbmcgd2l0aCBkYXRhLCBsaWtlIGByb290YFxuICAgICAgICB2aWV3T3B0cyA9IGRhdGEuc2V0dGluZ3NbJ3ZpZXcgb3B0aW9ucyddO1xuICAgICAgICBpZiAodmlld09wdHMpIHtcbiAgICAgICAgICB1dGlscy5zaGFsbG93Q29weShvcHRzLCB2aWV3T3B0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEV4cHJlc3MgMiBhbmQgbG93ZXIsIHZhbHVlcyBzZXQgaW4gYXBwLmxvY2Fscywgb3IgcGVvcGxlIHdobyBqdXN0XG4gICAgICAvLyB3YW50IHRvIHBhc3Mgb3B0aW9ucyBpbiB0aGVpciBkYXRhLiBOT1RFOiBUaGVzZSB2YWx1ZXMgd2lsbCBvdmVycmlkZVxuICAgICAgLy8gYW55dGhpbmcgcHJldmlvdXNseSBzZXQgaW4gc2V0dGluZ3MgIG9yIHNldHRpbmdzWyd2aWV3IG9wdGlvbnMnXVxuICAgICAgdXRpbHMuc2hhbGxvd0NvcHlGcm9tTGlzdChvcHRzLCBkYXRhLCBfT1BUU19QQVNTQUJMRV9XSVRIX0RBVEFfRVhQUkVTUyk7XG4gICAgfVxuICAgIG9wdHMuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbiAgfVxuICBlbHNlIHtcbiAgICBkYXRhID0ge307XG4gIH1cblxuICByZXR1cm4gdHJ5SGFuZGxlQ2FjaGUob3B0cywgZGF0YSwgY2IpO1xufTtcblxuLyoqXG4gKiBDbGVhciBpbnRlcm1lZGlhdGUgSmF2YVNjcmlwdCBjYWNoZS4gQ2FsbHMge0BsaW5rIENhY2hlI3Jlc2V0fS5cbiAqIEBwdWJsaWNcbiAqL1xuXG4vKipcbiAqIEVKUyB0ZW1wbGF0ZSBjbGFzc1xuICogQHB1YmxpY1xuICovXG5leHBvcnRzLlRlbXBsYXRlID0gVGVtcGxhdGU7XG5cbmV4cG9ydHMuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgZXhwb3J0cy5jYWNoZS5yZXNldCgpO1xufTtcblxuZnVuY3Rpb24gVGVtcGxhdGUodGV4dCwgb3B0cykge1xuICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdGhpcy50ZW1wbGF0ZVRleHQgPSB0ZXh0O1xuICAvKiogQHR5cGUge3N0cmluZyB8IG51bGx9ICovXG4gIHRoaXMubW9kZSA9IG51bGw7XG4gIHRoaXMudHJ1bmNhdGUgPSBmYWxzZTtcbiAgdGhpcy5jdXJyZW50TGluZSA9IDE7XG4gIHRoaXMuc291cmNlID0gJyc7XG4gIG9wdGlvbnMuY2xpZW50ID0gb3B0cy5jbGllbnQgfHwgZmFsc2U7XG4gIG9wdGlvbnMuZXNjYXBlRnVuY3Rpb24gPSBvcHRzLmVzY2FwZSB8fCBvcHRzLmVzY2FwZUZ1bmN0aW9uIHx8IHV0aWxzLmVzY2FwZVhNTDtcbiAgb3B0aW9ucy5jb21waWxlRGVidWcgPSBvcHRzLmNvbXBpbGVEZWJ1ZyAhPT0gZmFsc2U7XG4gIG9wdGlvbnMuZGVidWcgPSAhIW9wdHMuZGVidWc7XG4gIG9wdGlvbnMuZmlsZW5hbWUgPSBvcHRzLmZpbGVuYW1lO1xuICBvcHRpb25zLm9wZW5EZWxpbWl0ZXIgPSBvcHRzLm9wZW5EZWxpbWl0ZXIgfHwgZXhwb3J0cy5vcGVuRGVsaW1pdGVyIHx8IF9ERUZBVUxUX09QRU5fREVMSU1JVEVSO1xuICBvcHRpb25zLmNsb3NlRGVsaW1pdGVyID0gb3B0cy5jbG9zZURlbGltaXRlciB8fCBleHBvcnRzLmNsb3NlRGVsaW1pdGVyIHx8IF9ERUZBVUxUX0NMT1NFX0RFTElNSVRFUjtcbiAgb3B0aW9ucy5kZWxpbWl0ZXIgPSBvcHRzLmRlbGltaXRlciB8fCBleHBvcnRzLmRlbGltaXRlciB8fCBfREVGQVVMVF9ERUxJTUlURVI7XG4gIG9wdGlvbnMuc3RyaWN0ID0gb3B0cy5zdHJpY3QgfHwgZmFsc2U7XG4gIG9wdGlvbnMuY29udGV4dCA9IG9wdHMuY29udGV4dDtcbiAgb3B0aW9ucy5jYWNoZSA9IG9wdHMuY2FjaGUgfHwgZmFsc2U7XG4gIG9wdGlvbnMucm1XaGl0ZXNwYWNlID0gb3B0cy5ybVdoaXRlc3BhY2U7XG4gIG9wdGlvbnMucm9vdCA9IG9wdHMucm9vdDtcbiAgb3B0aW9ucy5pbmNsdWRlciA9IG9wdHMuaW5jbHVkZXI7XG4gIG9wdGlvbnMub3V0cHV0RnVuY3Rpb25OYW1lID0gb3B0cy5vdXRwdXRGdW5jdGlvbk5hbWU7XG4gIG9wdGlvbnMubG9jYWxzTmFtZSA9IG9wdHMubG9jYWxzTmFtZSB8fCBleHBvcnRzLmxvY2Fsc05hbWUgfHwgX0RFRkFVTFRfTE9DQUxTX05BTUU7XG4gIG9wdGlvbnMudmlld3MgPSBvcHRzLnZpZXdzO1xuICBvcHRpb25zLmFzeW5jID0gb3B0cy5hc3luYztcbiAgb3B0aW9ucy5kZXN0cnVjdHVyZWRMb2NhbHMgPSBvcHRzLmRlc3RydWN0dXJlZExvY2FscztcbiAgb3B0aW9ucy5sZWdhY3lJbmNsdWRlID0gdHlwZW9mIG9wdHMubGVnYWN5SW5jbHVkZSAhPSAndW5kZWZpbmVkJyA/ICEhb3B0cy5sZWdhY3lJbmNsdWRlIDogdHJ1ZTtcblxuICBpZiAob3B0aW9ucy5zdHJpY3QpIHtcbiAgICBvcHRpb25zLl93aXRoID0gZmFsc2U7XG4gIH1cbiAgZWxzZSB7XG4gICAgb3B0aW9ucy5fd2l0aCA9IHR5cGVvZiBvcHRzLl93aXRoICE9ICd1bmRlZmluZWQnID8gb3B0cy5fd2l0aCA6IHRydWU7XG4gIH1cblxuICB0aGlzLm9wdHMgPSBvcHRpb25zO1xuXG4gIHRoaXMucmVnZXggPSB0aGlzLmNyZWF0ZVJlZ2V4KCk7XG59XG5cblRlbXBsYXRlLm1vZGVzID0ge1xuICBFVkFMOiAnZXZhbCcsXG4gIEVTQ0FQRUQ6ICdlc2NhcGVkJyxcbiAgUkFXOiAncmF3JyxcbiAgQ09NTUVOVDogJ2NvbW1lbnQnLFxuICBMSVRFUkFMOiAnbGl0ZXJhbCdcbn07XG5cblRlbXBsYXRlLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlUmVnZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RyID0gX1JFR0VYX1NUUklORztcbiAgICB2YXIgZGVsaW0gPSB1dGlscy5lc2NhcGVSZWdFeHBDaGFycyh0aGlzLm9wdHMuZGVsaW1pdGVyKTtcbiAgICB2YXIgb3BlbiA9IHV0aWxzLmVzY2FwZVJlZ0V4cENoYXJzKHRoaXMub3B0cy5vcGVuRGVsaW1pdGVyKTtcbiAgICB2YXIgY2xvc2UgPSB1dGlscy5lc2NhcGVSZWdFeHBDaGFycyh0aGlzLm9wdHMuY2xvc2VEZWxpbWl0ZXIpO1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8lL2csIGRlbGltKVxuICAgICAgLnJlcGxhY2UoLzwvZywgb3BlbilcbiAgICAgIC5yZXBsYWNlKC8+L2csIGNsb3NlKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzdHIpO1xuICB9LFxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgICB2YXIgc3JjO1xuICAgIC8qKiBAdHlwZSB7Q2xpZW50RnVuY3Rpb259ICovXG4gICAgdmFyIGZuO1xuICAgIHZhciBvcHRzID0gdGhpcy5vcHRzO1xuICAgIHZhciBwcmVwZW5kZWQgPSAnJztcbiAgICB2YXIgYXBwZW5kZWQgPSAnJztcbiAgICAvKiogQHR5cGUge0VzY2FwZUNhbGxiYWNrfSAqL1xuICAgIHZhciBlc2NhcGVGbiA9IG9wdHMuZXNjYXBlRnVuY3Rpb247XG4gICAgLyoqIEB0eXBlIHtGdW5jdGlvbkNvbnN0cnVjdG9yfSAqL1xuICAgIHZhciBjdG9yO1xuICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgIHZhciBzYW5pdGl6ZWRGaWxlbmFtZSA9IG9wdHMuZmlsZW5hbWUgPyBKU09OLnN0cmluZ2lmeShvcHRzLmZpbGVuYW1lKSA6ICd1bmRlZmluZWQnO1xuXG4gICAgaWYgKCF0aGlzLnNvdXJjZSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZVNvdXJjZSgpO1xuICAgICAgcHJlcGVuZGVkICs9XG4gICAgICAgICcgIHZhciBfX291dHB1dCA9IFwiXCI7XFxuJyArXG4gICAgICAgICcgIGZ1bmN0aW9uIF9fYXBwZW5kKHMpIHsgaWYgKHMgIT09IHVuZGVmaW5lZCAmJiBzICE9PSBudWxsKSBfX291dHB1dCArPSBzIH1cXG4nO1xuICAgICAgaWYgKG9wdHMub3V0cHV0RnVuY3Rpb25OYW1lKSB7XG4gICAgICAgIHByZXBlbmRlZCArPSAnICB2YXIgJyArIG9wdHMub3V0cHV0RnVuY3Rpb25OYW1lICsgJyA9IF9fYXBwZW5kOycgKyAnXFxuJztcbiAgICAgIH1cbiAgICAgIGlmIChvcHRzLmRlc3RydWN0dXJlZExvY2FscyAmJiBvcHRzLmRlc3RydWN0dXJlZExvY2Fscy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGRlc3RydWN0dXJpbmcgPSAnICB2YXIgX19sb2NhbHMgPSAoJyArIG9wdHMubG9jYWxzTmFtZSArICcgfHwge30pLFxcbic7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0cy5kZXN0cnVjdHVyZWRMb2NhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgbmFtZSA9IG9wdHMuZGVzdHJ1Y3R1cmVkTG9jYWxzW2ldO1xuICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgZGVzdHJ1Y3R1cmluZyArPSAnLFxcbiAgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVzdHJ1Y3R1cmluZyArPSBuYW1lICsgJyA9IF9fbG9jYWxzLicgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHByZXBlbmRlZCArPSBkZXN0cnVjdHVyaW5nICsgJztcXG4nO1xuICAgICAgfVxuICAgICAgaWYgKG9wdHMuX3dpdGggIT09IGZhbHNlKSB7XG4gICAgICAgIHByZXBlbmRlZCArPSAgJyAgd2l0aCAoJyArIG9wdHMubG9jYWxzTmFtZSArICcgfHwge30pIHsnICsgJ1xcbic7XG4gICAgICAgIGFwcGVuZGVkICs9ICcgIH0nICsgJ1xcbic7XG4gICAgICB9XG4gICAgICBhcHBlbmRlZCArPSAnICByZXR1cm4gX19vdXRwdXQ7JyArICdcXG4nO1xuICAgICAgdGhpcy5zb3VyY2UgPSBwcmVwZW5kZWQgKyB0aGlzLnNvdXJjZSArIGFwcGVuZGVkO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmNvbXBpbGVEZWJ1Zykge1xuICAgICAgc3JjID0gJ3ZhciBfX2xpbmUgPSAxJyArICdcXG4nXG4gICAgICAgICsgJyAgLCBfX2xpbmVzID0gJyArIEpTT04uc3RyaW5naWZ5KHRoaXMudGVtcGxhdGVUZXh0KSArICdcXG4nXG4gICAgICAgICsgJyAgLCBfX2ZpbGVuYW1lID0gJyArIHNhbml0aXplZEZpbGVuYW1lICsgJzsnICsgJ1xcbidcbiAgICAgICAgKyAndHJ5IHsnICsgJ1xcbidcbiAgICAgICAgKyB0aGlzLnNvdXJjZVxuICAgICAgICArICd9IGNhdGNoIChlKSB7JyArICdcXG4nXG4gICAgICAgICsgJyAgcmV0aHJvdyhlLCBfX2xpbmVzLCBfX2ZpbGVuYW1lLCBfX2xpbmUsIGVzY2FwZUZuKTsnICsgJ1xcbidcbiAgICAgICAgKyAnfScgKyAnXFxuJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzcmMgPSB0aGlzLnNvdXJjZTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5jbGllbnQpIHtcbiAgICAgIHNyYyA9ICdlc2NhcGVGbiA9IGVzY2FwZUZuIHx8ICcgKyBlc2NhcGVGbi50b1N0cmluZygpICsgJzsnICsgJ1xcbicgKyBzcmM7XG4gICAgICBpZiAob3B0cy5jb21waWxlRGVidWcpIHtcbiAgICAgICAgc3JjID0gJ3JldGhyb3cgPSByZXRocm93IHx8ICcgKyByZXRocm93LnRvU3RyaW5nKCkgKyAnOycgKyAnXFxuJyArIHNyYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0cy5zdHJpY3QpIHtcbiAgICAgIHNyYyA9ICdcInVzZSBzdHJpY3RcIjtcXG4nICsgc3JjO1xuICAgIH1cbiAgICBpZiAob3B0cy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coc3JjKTtcbiAgICB9XG4gICAgaWYgKG9wdHMuY29tcGlsZURlYnVnICYmIG9wdHMuZmlsZW5hbWUpIHtcbiAgICAgIHNyYyA9IHNyYyArICdcXG4nXG4gICAgICAgICsgJy8vIyBzb3VyY2VVUkw9JyArIHNhbml0aXplZEZpbGVuYW1lICsgJ1xcbic7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRzLmFzeW5jKSB7XG4gICAgICAgIC8vIEhhdmUgdG8gdXNlIGdlbmVyYXRlZCBmdW5jdGlvbiBmb3IgdGhpcywgc2luY2UgaW4gZW52cyB3aXRob3V0IHN1cHBvcnQsXG4gICAgICAgIC8vIGl0IGJyZWFrcyBpbiBwYXJzaW5nXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY3RvciA9IChuZXcgRnVuY3Rpb24oJ3JldHVybiAoYXN5bmMgZnVuY3Rpb24oKXt9KS5jb25zdHJ1Y3RvcjsnKSkoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgYXN5bmMvYXdhaXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGN0b3IgPSBGdW5jdGlvbjtcbiAgICAgIH1cbiAgICAgIGZuID0gbmV3IGN0b3Iob3B0cy5sb2NhbHNOYW1lICsgJywgZXNjYXBlRm4sIGluY2x1ZGUsIHJldGhyb3cnLCBzcmMpO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgZWxzZVxuICAgICAgaWYgKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICBpZiAob3B0cy5maWxlbmFtZSkge1xuICAgICAgICAgIGUubWVzc2FnZSArPSAnIGluICcgKyBvcHRzLmZpbGVuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGUubWVzc2FnZSArPSAnIHdoaWxlIGNvbXBpbGluZyBlanNcXG5cXG4nO1xuICAgICAgICBlLm1lc3NhZ2UgKz0gJ0lmIHRoZSBhYm92ZSBlcnJvciBpcyBub3QgaGVscGZ1bCwgeW91IG1heSB3YW50IHRvIHRyeSBFSlMtTGludDpcXG4nO1xuICAgICAgICBlLm1lc3NhZ2UgKz0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9SeWFuWmltL0VKUy1MaW50JztcbiAgICAgICAgaWYgKCFvcHRzLmFzeW5jKSB7XG4gICAgICAgICAgZS5tZXNzYWdlICs9ICdcXG4nO1xuICAgICAgICAgIGUubWVzc2FnZSArPSAnT3IsIGlmIHlvdSBtZWFudCB0byBjcmVhdGUgYW4gYXN5bmMgZnVuY3Rpb24sIHBhc3MgYGFzeW5jOiB0cnVlYCBhcyBhbiBvcHRpb24uJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBjYWxsYWJsZSBmdW5jdGlvbiB3aGljaCB3aWxsIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXG4gICAgLy8gY3JlYXRlZCBieSB0aGUgc291cmNlLWNvZGUsIHdpdGggdGhlIHBhc3NlZCBkYXRhIGFzIGxvY2Fsc1xuICAgIC8vIEFkZHMgYSBsb2NhbCBgaW5jbHVkZWAgZnVuY3Rpb24gd2hpY2ggYWxsb3dzIGZ1bGwgcmVjdXJzaXZlIGluY2x1ZGVcbiAgICB2YXIgcmV0dXJuZWRGbiA9IG9wdHMuY2xpZW50ID8gZm4gOiBmdW5jdGlvbiBhbm9ueW1vdXMoZGF0YSkge1xuICAgICAgdmFyIGluY2x1ZGUgPSBmdW5jdGlvbiAocGF0aCwgaW5jbHVkZURhdGEpIHtcbiAgICAgICAgdmFyIGQgPSB1dGlscy5zaGFsbG93Q29weSh7fSwgZGF0YSk7XG4gICAgICAgIGlmIChpbmNsdWRlRGF0YSkge1xuICAgICAgICAgIGQgPSB1dGlscy5zaGFsbG93Q29weShkLCBpbmNsdWRlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY2x1ZGVGaWxlKHBhdGgsIG9wdHMpKGQpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBmbi5hcHBseShvcHRzLmNvbnRleHQsIFtkYXRhIHx8IHt9LCBlc2NhcGVGbiwgaW5jbHVkZSwgcmV0aHJvd10pO1xuICAgIH07XG4gICAgaWYgKG9wdHMuZmlsZW5hbWUgJiYgdHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGZpbGVuYW1lID0gb3B0cy5maWxlbmFtZTtcbiAgICAgIHZhciBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZW5hbWUsIHBhdGguZXh0bmFtZShmaWxlbmFtZSkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJldHVybmVkRm4sICduYW1lJywge1xuICAgICAgICAgIHZhbHVlOiBiYXNlbmFtZSxcbiAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkgey8qIGlnbm9yZSAqL31cbiAgICB9XG4gICAgcmV0dXJuIHJldHVybmVkRm47XG4gIH0sXG5cbiAgZ2VuZXJhdGVTb3VyY2U6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0cyA9IHRoaXMub3B0cztcblxuICAgIGlmIChvcHRzLnJtV2hpdGVzcGFjZSkge1xuICAgICAgLy8gSGF2ZSB0byB1c2UgdHdvIHNlcGFyYXRlIHJlcGxhY2UgaGVyZSBhcyBgXmAgYW5kIGAkYCBvcGVyYXRvcnMgZG9uJ3RcbiAgICAgIC8vIHdvcmsgd2VsbCB3aXRoIGBcXHJgIGFuZCBlbXB0eSBsaW5lcyBkb24ndCB3b3JrIHdlbGwgd2l0aCB0aGUgYG1gIGZsYWcuXG4gICAgICB0aGlzLnRlbXBsYXRlVGV4dCA9XG4gICAgICAgIHRoaXMudGVtcGxhdGVUZXh0LnJlcGxhY2UoL1tcXHJcXG5dKy9nLCAnXFxuJykucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKTtcbiAgICB9XG5cbiAgICAvLyBTbHVycCBzcGFjZXMgYW5kIHRhYnMgYmVmb3JlIDwlXyBhbmQgYWZ0ZXIgXyU+XG4gICAgdGhpcy50ZW1wbGF0ZVRleHQgPVxuICAgICAgdGhpcy50ZW1wbGF0ZVRleHQucmVwbGFjZSgvWyBcXHRdKjwlXy9nbSwgJzwlXycpLnJlcGxhY2UoL18lPlsgXFx0XSovZ20sICdfJT4nKTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbWF0Y2hlcyA9IHRoaXMucGFyc2VUZW1wbGF0ZVRleHQoKTtcbiAgICB2YXIgZCA9IHRoaXMub3B0cy5kZWxpbWl0ZXI7XG4gICAgdmFyIG8gPSB0aGlzLm9wdHMub3BlbkRlbGltaXRlcjtcbiAgICB2YXIgYyA9IHRoaXMub3B0cy5jbG9zZURlbGltaXRlcjtcblxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUsIGluZGV4KSB7XG4gICAgICAgIHZhciBjbG9zaW5nO1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGFuIG9wZW5pbmcgdGFnLCBjaGVjayBmb3IgY2xvc2luZyB0YWdzXG4gICAgICAgIC8vIEZJWE1FOiBNYXkgZW5kIHVwIHdpdGggc29tZSBmYWxzZSBwb3NpdGl2ZXMgaGVyZVxuICAgICAgICAvLyBCZXR0ZXIgdG8gc3RvcmUgbW9kZXMgYXMgay92IHdpdGggb3BlbkRlbGltaXRlciArIGRlbGltaXRlciBhcyBrZXlcbiAgICAgICAgLy8gVGhlbiB0aGlzIGNhbiBzaW1wbHkgY2hlY2sgYWdhaW5zdCB0aGUgbWFwXG4gICAgICAgIGlmICggbGluZS5pbmRleE9mKG8gKyBkKSA9PT0gMCAgICAgICAgLy8gSWYgaXQgaXMgYSB0YWdcbiAgICAgICAgICAmJiBsaW5lLmluZGV4T2YobyArIGQgKyBkKSAhPT0gMCkgeyAvLyBhbmQgaXMgbm90IGVzY2FwZWRcbiAgICAgICAgICBjbG9zaW5nID0gbWF0Y2hlc1tpbmRleCArIDJdO1xuICAgICAgICAgIGlmICghKGNsb3NpbmcgPT0gZCArIGMgfHwgY2xvc2luZyA9PSAnLScgKyBkICsgYyB8fCBjbG9zaW5nID09ICdfJyArIGQgKyBjKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBtYXRjaGluZyBjbG9zZSB0YWcgZm9yIFwiJyArIGxpbmUgKyAnXCIuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2NhbkxpbmUobGluZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSxcblxuICBwYXJzZVRlbXBsYXRlVGV4dDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdHIgPSB0aGlzLnRlbXBsYXRlVGV4dDtcbiAgICB2YXIgcGF0ID0gdGhpcy5yZWdleDtcbiAgICB2YXIgcmVzdWx0ID0gcGF0LmV4ZWMoc3RyKTtcbiAgICB2YXIgYXJyID0gW107XG4gICAgdmFyIGZpcnN0UG9zO1xuXG4gICAgd2hpbGUgKHJlc3VsdCkge1xuICAgICAgZmlyc3RQb3MgPSByZXN1bHQuaW5kZXg7XG5cbiAgICAgIGlmIChmaXJzdFBvcyAhPT0gMCkge1xuICAgICAgICBhcnIucHVzaChzdHIuc3Vic3RyaW5nKDAsIGZpcnN0UG9zKSk7XG4gICAgICAgIHN0ciA9IHN0ci5zbGljZShmaXJzdFBvcyk7XG4gICAgICB9XG5cbiAgICAgIGFyci5wdXNoKHJlc3VsdFswXSk7XG4gICAgICBzdHIgPSBzdHIuc2xpY2UocmVzdWx0WzBdLmxlbmd0aCk7XG4gICAgICByZXN1bHQgPSBwYXQuZXhlYyhzdHIpO1xuICAgIH1cblxuICAgIGlmIChzdHIpIHtcbiAgICAgIGFyci5wdXNoKHN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfSxcblxuICBfYWRkT3V0cHV0OiBmdW5jdGlvbiAobGluZSkge1xuICAgIGlmICh0aGlzLnRydW5jYXRlKSB7XG4gICAgICAvLyBPbmx5IHJlcGxhY2Ugc2luZ2xlIGxlYWRpbmcgbGluZWJyZWFrIGluIHRoZSBsaW5lIGFmdGVyXG4gICAgICAvLyAtJT4gdGFnIC0tIHRoaXMgaXMgdGhlIHNpbmdsZSwgdHJhaWxpbmcgbGluZWJyZWFrXG4gICAgICAvLyBhZnRlciB0aGUgdGFnIHRoYXQgdGhlIHRydW5jYXRpb24gbW9kZSByZXBsYWNlc1xuICAgICAgLy8gSGFuZGxlIFdpbiAvIFVuaXggLyBvbGQgTWFjIGxpbmVicmVha3MgLS0gZG8gdGhlIFxcclxcblxuICAgICAgLy8gY29tYm8gZmlyc3QgaW4gdGhlIHJlZ2V4LW9yXG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9eKD86XFxyXFxufFxccnxcXG4pLywgJycpO1xuICAgICAgdGhpcy50cnVuY2F0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWxpbmUpIHtcbiAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cblxuICAgIC8vIFByZXNlcnZlIGxpdGVyYWwgc2xhc2hlc1xuICAgIGxpbmUgPSBsaW5lLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJyk7XG5cbiAgICAvLyBDb252ZXJ0IGxpbmVicmVha3NcbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyk7XG4gICAgbGluZSA9IGxpbmUucmVwbGFjZSgvXFxyL2csICdcXFxccicpO1xuXG4gICAgLy8gRXNjYXBlIGRvdWJsZS1xdW90ZXNcbiAgICAvLyAtIHRoaXMgd2lsbCBiZSB0aGUgZGVsaW1pdGVyIGR1cmluZyBleGVjdXRpb25cbiAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyk7XG4gICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7IF9fYXBwZW5kKFwiJyArIGxpbmUgKyAnXCIpJyArICdcXG4nO1xuICB9LFxuXG4gIHNjYW5MaW5lOiBmdW5jdGlvbiAobGluZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZCA9IHRoaXMub3B0cy5kZWxpbWl0ZXI7XG4gICAgdmFyIG8gPSB0aGlzLm9wdHMub3BlbkRlbGltaXRlcjtcbiAgICB2YXIgYyA9IHRoaXMub3B0cy5jbG9zZURlbGltaXRlcjtcbiAgICB2YXIgbmV3TGluZUNvdW50ID0gMDtcblxuICAgIG5ld0xpbmVDb3VudCA9IChsaW5lLnNwbGl0KCdcXG4nKS5sZW5ndGggLSAxKTtcblxuICAgIHN3aXRjaCAobGluZSkge1xuICAgIGNhc2UgbyArIGQ6XG4gICAgY2FzZSBvICsgZCArICdfJzpcbiAgICAgIHRoaXMubW9kZSA9IFRlbXBsYXRlLm1vZGVzLkVWQUw7XG4gICAgICBicmVhaztcbiAgICBjYXNlIG8gKyBkICsgJz0nOlxuICAgICAgdGhpcy5tb2RlID0gVGVtcGxhdGUubW9kZXMuRVNDQVBFRDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbyArIGQgKyAnLSc6XG4gICAgICB0aGlzLm1vZGUgPSBUZW1wbGF0ZS5tb2Rlcy5SQVc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIG8gKyBkICsgJyMnOlxuICAgICAgdGhpcy5tb2RlID0gVGVtcGxhdGUubW9kZXMuQ09NTUVOVDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbyArIGQgKyBkOlxuICAgICAgdGhpcy5tb2RlID0gVGVtcGxhdGUubW9kZXMuTElURVJBTDtcbiAgICAgIHRoaXMuc291cmNlICs9ICcgICAgOyBfX2FwcGVuZChcIicgKyBsaW5lLnJlcGxhY2UobyArIGQgKyBkLCBvICsgZCkgKyAnXCIpJyArICdcXG4nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkICsgZCArIGM6XG4gICAgICB0aGlzLm1vZGUgPSBUZW1wbGF0ZS5tb2Rlcy5MSVRFUkFMO1xuICAgICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7IF9fYXBwZW5kKFwiJyArIGxpbmUucmVwbGFjZShkICsgZCArIGMsIGQgKyBjKSArICdcIiknICsgJ1xcbic7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGQgKyBjOlxuICAgIGNhc2UgJy0nICsgZCArIGM6XG4gICAgY2FzZSAnXycgKyBkICsgYzpcbiAgICAgIGlmICh0aGlzLm1vZGUgPT0gVGVtcGxhdGUubW9kZXMuTElURVJBTCkge1xuICAgICAgICB0aGlzLl9hZGRPdXRwdXQobGluZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgICB0aGlzLnRydW5jYXRlID0gbGluZS5pbmRleE9mKCctJykgPT09IDAgfHwgbGluZS5pbmRleE9mKCdfJykgPT09IDA7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gSW4gc2NyaXB0IG1vZGUsIGRlcGVuZHMgb24gdHlwZSBvZiB0YWdcbiAgICAgIGlmICh0aGlzLm1vZGUpIHtcbiAgICAgICAgLy8gSWYgJy8vJyBpcyBmb3VuZCB3aXRob3V0IGEgbGluZSBicmVhaywgYWRkIGEgbGluZSBicmVhay5cbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBUZW1wbGF0ZS5tb2Rlcy5FVkFMOlxuICAgICAgICBjYXNlIFRlbXBsYXRlLm1vZGVzLkVTQ0FQRUQ6XG4gICAgICAgIGNhc2UgVGVtcGxhdGUubW9kZXMuUkFXOlxuICAgICAgICAgIGlmIChsaW5lLmxhc3RJbmRleE9mKCcvLycpID4gbGluZS5sYXN0SW5kZXhPZignXFxuJykpIHtcbiAgICAgICAgICAgIGxpbmUgKz0gJ1xcbic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5tb2RlKSB7XG4gICAgICAgIC8vIEp1c3QgZXhlY3V0aW5nIGNvZGVcbiAgICAgICAgY2FzZSBUZW1wbGF0ZS5tb2Rlcy5FVkFMOlxuICAgICAgICAgIHRoaXMuc291cmNlICs9ICcgICAgOyAnICsgbGluZSArICdcXG4nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIEV4ZWMsIGVzYywgYW5kIG91dHB1dFxuICAgICAgICBjYXNlIFRlbXBsYXRlLm1vZGVzLkVTQ0FQRUQ6XG4gICAgICAgICAgdGhpcy5zb3VyY2UgKz0gJyAgICA7IF9fYXBwZW5kKGVzY2FwZUZuKCcgKyBzdHJpcFNlbWkobGluZSkgKyAnKSknICsgJ1xcbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gRXhlYyBhbmQgb3V0cHV0XG4gICAgICAgIGNhc2UgVGVtcGxhdGUubW9kZXMuUkFXOlxuICAgICAgICAgIHRoaXMuc291cmNlICs9ICcgICAgOyBfX2FwcGVuZCgnICsgc3RyaXBTZW1pKGxpbmUpICsgJyknICsgJ1xcbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVGVtcGxhdGUubW9kZXMuQ09NTUVOVDpcbiAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgLy8gTGl0ZXJhbCA8JSUgbW9kZSwgYXBwZW5kIGFzIHJhdyBvdXRwdXRcbiAgICAgICAgY2FzZSBUZW1wbGF0ZS5tb2Rlcy5MSVRFUkFMOlxuICAgICAgICAgIHRoaXMuX2FkZE91dHB1dChsaW5lKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gSW4gc3RyaW5nIG1vZGUsIGp1c3QgYWRkIHRoZSBvdXRwdXRcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRPdXRwdXQobGluZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlbGYub3B0cy5jb21waWxlRGVidWcgJiYgbmV3TGluZUNvdW50KSB7XG4gICAgICB0aGlzLmN1cnJlbnRMaW5lICs9IG5ld0xpbmVDb3VudDtcbiAgICAgIHRoaXMuc291cmNlICs9ICcgICAgOyBfX2xpbmUgPSAnICsgdGhpcy5jdXJyZW50TGluZSArICdcXG4nO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBFc2NhcGUgY2hhcmFjdGVycyByZXNlcnZlZCBpbiBYTUwuXG4gKlxuICogVGhpcyBpcyBzaW1wbHkgYW4gZXhwb3J0IG9mIHtAbGluayBtb2R1bGU6dXRpbHMuZXNjYXBlWE1MfS5cbiAqXG4gKiBJZiBgbWFya3VwYCBpcyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsIHRoZSBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1hcmt1cCBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gRXNjYXBlZCBzdHJpbmdcbiAqIEBwdWJsaWNcbiAqIEBmdW5jXG4gKiAqL1xuZXhwb3J0cy5lc2NhcGVYTUwgPSB1dGlscy5lc2NhcGVYTUw7XG5cbi8qKlxuICogRXhwcmVzcy5qcyBzdXBwb3J0LlxuICpcbiAqIFRoaXMgaXMgYW4gYWxpYXMgZm9yIHtAbGluayBtb2R1bGU6ZWpzLnJlbmRlckZpbGV9LCBpbiBvcmRlciB0byBzdXBwb3J0XG4gKiBFeHByZXNzLmpzIG91dC1vZi10aGUtYm94LlxuICpcbiAqIEBmdW5jXG4gKi9cblxuZXhwb3J0cy5fX2V4cHJlc3MgPSBleHBvcnRzLnJlbmRlckZpbGU7XG5cbi8qKlxuICogVmVyc2lvbiBvZiBFSlMuXG4gKlxuICogQHJlYWRvbmx5XG4gKiBAdHlwZSB7U3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuVkVSU0lPTiA9IF9WRVJTSU9OX1NUUklORztcblxuLyoqXG4gKiBOYW1lIGZvciBkZXRlY3Rpb24gb2YgRUpTLlxuICpcbiAqIEByZWFkb25seVxuICogQHR5cGUge1N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLm5hbWUgPSBfTkFNRTtcblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuZWpzID0gZXhwb3J0cztcbn1cbiIsIi8qXG4gKiBFSlMgRW1iZWRkZWQgSmF2YVNjcmlwdCB0ZW1wbGF0ZXNcbiAqIENvcHlyaWdodCAyMTEyIE1hdHRoZXcgRWVybmlzc2UgKG1kZUBmbGVlZ2l4Lm9yZylcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiovXG5cbi8qKlxuICogUHJpdmF0ZSB1dGlsaXR5IGZ1bmN0aW9uc1xuICogQG1vZHVsZSB1dGlsc1xuICogQHByaXZhdGVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciByZWdFeHBDaGFycyA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcblxuLyoqXG4gKiBFc2NhcGUgY2hhcmFjdGVycyByZXNlcnZlZCBpbiByZWd1bGFyIGV4cHJlc3Npb25zLlxuICpcbiAqIElmIGBzdHJpbmdgIGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYCwgdGhlIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIElucHV0IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBFc2NhcGVkIHN0cmluZ1xuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0cy5lc2NhcGVSZWdFeHBDaGFycyA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmICghc3RyaW5nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlZ0V4cENoYXJzLCAnXFxcXCQmJyk7XG59O1xuXG52YXIgX0VOQ09ERV9IVE1MX1JVTEVTID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyYjMzQ7JyxcbiAgXCInXCI6ICcmIzM5Oydcbn07XG52YXIgX01BVENIX0hUTUwgPSAvWyY8PidcIl0vZztcblxuZnVuY3Rpb24gZW5jb2RlX2NoYXIoYykge1xuICByZXR1cm4gX0VOQ09ERV9IVE1MX1JVTEVTW2NdIHx8IGM7XG59XG5cbi8qKlxuICogU3RyaW5naWZpZWQgdmVyc2lvbiBvZiBjb25zdGFudHMgdXNlZCBieSB7QGxpbmsgbW9kdWxlOnV0aWxzLmVzY2FwZVhNTH0uXG4gKlxuICogSXQgaXMgdXNlZCBpbiB0aGUgcHJvY2VzcyBvZiBnZW5lcmF0aW5nIHtAbGluayBDbGllbnRGdW5jdGlvbn1zLlxuICpcbiAqIEByZWFkb25seVxuICogQHR5cGUge1N0cmluZ31cbiAqL1xuXG52YXIgZXNjYXBlRnVuY1N0ciA9XG4gICd2YXIgX0VOQ09ERV9IVE1MX1JVTEVTID0ge1xcbidcbisgJyAgICAgIFwiJlwiOiBcIiZhbXA7XCJcXG4nXG4rICcgICAgLCBcIjxcIjogXCImbHQ7XCJcXG4nXG4rICcgICAgLCBcIj5cIjogXCImZ3Q7XCJcXG4nXG4rICcgICAgLCBcXCdcIlxcJzogXCImIzM0O1wiXFxuJ1xuKyAnICAgICwgXCJcXCdcIjogXCImIzM5O1wiXFxuJ1xuKyAnICAgIH1cXG4nXG4rICcgICwgX01BVENIX0hUTUwgPSAvWyY8PlxcJ1wiXS9nO1xcbidcbisgJ2Z1bmN0aW9uIGVuY29kZV9jaGFyKGMpIHtcXG4nXG4rICcgIHJldHVybiBfRU5DT0RFX0hUTUxfUlVMRVNbY10gfHwgYztcXG4nXG4rICd9O1xcbic7XG5cbi8qKlxuICogRXNjYXBlIGNoYXJhY3RlcnMgcmVzZXJ2ZWQgaW4gWE1MLlxuICpcbiAqIElmIGBtYXJrdXBgIGlzIGB1bmRlZmluZWRgIG9yIGBudWxsYCwgdGhlIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZC5cbiAqXG4gKiBAaW1wbGVtZW50cyB7RXNjYXBlQ2FsbGJhY2t9XG4gKiBAcGFyYW0ge1N0cmluZ30gbWFya3VwIElucHV0IHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBFc2NhcGVkIHN0cmluZ1xuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVzY2FwZVhNTCA9IGZ1bmN0aW9uIChtYXJrdXApIHtcbiAgcmV0dXJuIG1hcmt1cCA9PSB1bmRlZmluZWRcbiAgICA/ICcnXG4gICAgOiBTdHJpbmcobWFya3VwKVxuICAgICAgLnJlcGxhY2UoX01BVENIX0hUTUwsIGVuY29kZV9jaGFyKTtcbn07XG5leHBvcnRzLmVzY2FwZVhNTC50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpICsgJztcXG4nICsgZXNjYXBlRnVuY1N0cjtcbn07XG5cbi8qKlxuICogTmFpdmUgY29weSBvZiBwcm9wZXJ0aWVzIGZyb20gb25lIG9iamVjdCB0byBhbm90aGVyLlxuICogRG9lcyBub3QgcmVjdXJzZSBpbnRvIG5vbi1zY2FsYXIgcHJvcGVydGllc1xuICogRG9lcyBub3QgY2hlY2sgdG8gc2VlIGlmIHRoZSBwcm9wZXJ0eSBoYXMgYSB2YWx1ZSBiZWZvcmUgY29weWluZ1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdG8gICBEZXN0aW5hdGlvbiBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gZnJvbSBTb3VyY2Ugb2JqZWN0XG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgRGVzdGluYXRpb24gb2JqZWN0XG4gKiBAc3RhdGljXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnRzLnNoYWxsb3dDb3B5ID0gZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gIGZyb20gPSBmcm9tIHx8IHt9O1xuICBmb3IgKHZhciBwIGluIGZyb20pIHtcbiAgICB0b1twXSA9IGZyb21bcF07XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcblxuLyoqXG4gKiBOYWl2ZSBjb3B5IG9mIGEgbGlzdCBvZiBrZXkgbmFtZXMsIGZyb20gb25lIG9iamVjdCB0byBhbm90aGVyLlxuICogT25seSBjb3BpZXMgcHJvcGVydHkgaWYgaXQgaXMgYWN0dWFsbHkgZGVmaW5lZFxuICogRG9lcyBub3QgcmVjdXJzZSBpbnRvIG5vbi1zY2FsYXIgcHJvcGVydGllc1xuICpcbiAqIEBwYXJhbSAge09iamVjdH0gdG8gICBEZXN0aW5hdGlvbiBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gZnJvbSBTb3VyY2Ugb2JqZWN0XG4gKiBAcGFyYW0gIHtBcnJheX0gbGlzdCBMaXN0IG9mIHByb3BlcnRpZXMgdG8gY29weVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgIERlc3RpbmF0aW9uIG9iamVjdFxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0cy5zaGFsbG93Q29weUZyb21MaXN0ID0gZnVuY3Rpb24gKHRvLCBmcm9tLCBsaXN0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwID0gbGlzdFtpXTtcbiAgICBpZiAodHlwZW9mIGZyb21bcF0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRvW3BdID0gZnJvbVtwXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcblxuLyoqXG4gKiBTaW1wbGUgaW4tcHJvY2VzcyBjYWNoZSBpbXBsZW1lbnRhdGlvbi4gRG9lcyBub3QgaW1wbGVtZW50IGxpbWl0cyBvZiBhbnlcbiAqIHNvcnQuXG4gKlxuICogQGltcGxlbWVudHMge0NhY2hlfVxuICogQHN0YXRpY1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0cy5jYWNoZSA9IHtcbiAgX2RhdGE6IHt9LFxuICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbDtcbiAgfSxcbiAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFba2V5XTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVsZXRlIHRoaXMuX2RhdGFba2V5XTtcbiAgfSxcbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kYXRhID0ge307XG4gIH1cbn07XG5cbi8qKlxuICogVHJhbnNmb3JtcyBoeXBoZW4gY2FzZSB2YXJpYWJsZSBpbnRvIGNhbWVsIGNhc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBIeXBoZW4gY2FzZSBzdHJpbmdcbiAqIEByZXR1cm4ge1N0cmluZ30gQ2FtZWwgY2FzZSBzdHJpbmdcbiAqIEBzdGF0aWNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydHMuaHlwaGVuVG9DYW1lbCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tW2Etel0vZywgZnVuY3Rpb24gKG1hdGNoKSB7IHJldHVybiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpOyB9KTtcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=