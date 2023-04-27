"use strict";
self["webpackHotUpdatenotepad_app"]("main",{

/***/ "./src/sub_js/noteSubmitProcessor.js":
/*!*******************************************!*\
  !*** ./src/sub_js/noteSubmitProcessor.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inputCheckers_errorCleaner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputCheckers/errorCleaner */ "./src/sub_js/inputCheckers/errorCleaner.js");
/* harmony import */ var _inputCheckers_errorCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputCheckers/errorCreator */ "./src/sub_js/inputCheckers/errorCreator.js");
/* harmony import */ var _tools_firabaseProcessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/firabaseProcessor */ "./src/sub_js/tools/firabaseProcessor.js");
/* harmony import */ var _showNotesProcessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showNotesProcessor */ "./src/sub_js/showNotesProcessor.js");





const noteSubmitProcessor = () => {
    const dataSubmiter = (table, dataArray) => {
        (0,_tools_firabaseProcessor__WEBPACK_IMPORTED_MODULE_2__["default"])(table).add(localStorage.getItem("user_id"), dataArray[0], dataArray[1])
    }
    const inputCleaner = formElem => {
        let formChildren = formElem.children
        
        if(formElem.id == "list") {
            listCleaner(formElem)
        }
        [...formChildren].forEach(element => {
            if(element.nodeName == "INPUT" || "TEXTAREA") {
                element.value = ``
            }
        })
    }

    const listCleaner = formElem => {
        let formChildren = formElem.children
        let listItemElements = [];

        [...formChildren].forEach(element => {
            if(element.className == "list__item") {
                listItemElements.push(element)
            }
        })
        for(let i = 0;i < listItemElements.length;i++) {
            if(i != 0) {
                listItemElements[i].outerHTML = ``
            } else {
                let itemChildElements = listItemElements[i].children
                for(let i = 0;i < itemChildElements.length;i++) {
                    if(itemChildElements[i].nodeName == "INPUT") {
                        itemChildElements[i].value = ``
                        break
                    }
                }
            }
        }
    }

    const errorChecker = (inputElements) => {
        let errors = false
        
        for(let i = 0;i < inputElements.length;i++) {
            if(inputElements[i].value == "") {
                let error = (0,_inputCheckers_errorCreator__WEBPACK_IMPORTED_MODULE_1__["default"])("Insert any data").error
                if(inputElements[i].parentElement.className == "list__item") {
                    inputElements[i].parentElement.after(error)
                } else {
                    inputElements[i].after(error)
                }
                errors = true

                return {errors}
            }
        }
        return {errors}
    }

    const eventListenerSetter = () => {
        let formsParentElem = document.querySelector(".create-note__parameters")
        formsParentElem.addEventListener("click", event => {
            if(event.target.closest(".create-note-button")) {
                let button = event.target.closest(".create-note-button")
                let form = button.parentElement
                let inputElements = []
                for(let i = 0;i < form.children.length;i++) {
                    if(form.children[i].nodeName == "INPUT" || form.children[i].nodeName == "TEXTAREA") {
                        inputElements.push(form.children[i])
                    } else {
                        let listChildren = form.children[i].children ? form.children[i].children : undefined
                        if(listChildren) {
                             let listInputs = [...listChildren].filter(element => {
                                if(element.nodeName == "INPUT" || element.nodeName == "TEXTAREA") {
                                    return true
                                }
                            })
                            inputElements = [...inputElements, ...listInputs]
                        }
                    }
                }

                const listItemsStringifier = () => {
                    let result
                    let listItemElements = document.querySelectorAll(".create-note__parameters > .note-parameters__item > .list__item > input")

                    let listItemInputArray = [...listItemElements].map(element => {
                        return element.value.trim()
                    })
                    result = JSON.stringify(listItemInputArray)
                    return result
                }

                ;(0,_inputCheckers_errorCleaner__WEBPACK_IMPORTED_MODULE_0__["default"])(`.${form.className}`)

                if(errorChecker(inputElements).errors == false) {
                    let dataArray = []
                    let inputs = inputElements.filter(elem => {
                        if(elem.parentElement.className != "list__item") {
                            return true
                        }
                    })
                    if(button.getAttribute("submit-table") == "lists") {
                        dataArray = [...inputs.map(elem => {
                            return elem.value.trim()
                        }), listItemsStringifier()]
                    } else {
                        dataArray = inputs.map(elem => elem.value)
                    }
                    try {
                        dataSubmiter(button.getAttribute("submit-table"), dataArray)
                        inputCleaner(form)
                        ;(0,_showNotesProcessor__WEBPACK_IMPORTED_MODULE_3__["default"])().setNote()
                    } catch (error) {
                        console.log(error)
                        button.after((0,_inputCheckers_errorCreator__WEBPACK_IMPORTED_MODULE_1__["default"])("Something went wrong, reload the page").error)
                    }
                }
            }
        })
    }
    return {
        setEventListener: eventListenerSetter,
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noteSubmitProcessor);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56fc93d1b04b071772be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMzIzYmUwMjljMDM1ZjVkNDVmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0E7QUFDRTtBQUNKO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0EsNEJBQTRCLHVFQUFZO0FBQ3hDO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIseUJBQXlCO0FBQ3ZEO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0VBQVksS0FBSyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRUFBa0I7QUFDMUMsc0JBQXNCO0FBQ3RCO0FBQ0EscUNBQXFDLHVFQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7VUNwSWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3RlcGFkX2FwcC8uL3NyYy9zdWJfanMvbm90ZVN1Ym1pdFByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly9ub3RlcGFkX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVycm9yQ2xlYW5lciBmcm9tIFwiLi9pbnB1dENoZWNrZXJzL2Vycm9yQ2xlYW5lclwiXHJcbmltcG9ydCBlcnJvckNyZWF0b3IgZnJvbSBcIi4vaW5wdXRDaGVja2Vycy9lcnJvckNyZWF0b3JcIlxyXG5pbXBvcnQgZGF0YWJhc2VQcm9jZXNzb3IgZnJvbSBcIi4vdG9vbHMvZmlyYWJhc2VQcm9jZXNzb3JcIlxyXG5pbXBvcnQgc2hvd05vdGVzUHJvY2Vzc29yIGZyb20gXCIuL3Nob3dOb3Rlc1Byb2Nlc3NvclwiXHJcblxyXG5jb25zdCBub3RlU3VibWl0UHJvY2Vzc29yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVN1Ym1pdGVyID0gKHRhYmxlLCBkYXRhQXJyYXkpID0+IHtcclxuICAgICAgICBkYXRhYmFzZVByb2Nlc3Nvcih0YWJsZSkuYWRkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl9pZFwiKSwgZGF0YUFycmF5WzBdLCBkYXRhQXJyYXlbMV0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnB1dENsZWFuZXIgPSBmb3JtRWxlbSA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm1DaGlsZHJlbiA9IGZvcm1FbGVtLmNoaWxkcmVuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZm9ybUVsZW0uaWQgPT0gXCJsaXN0XCIpIHtcclxuICAgICAgICAgICAgbGlzdENsZWFuZXIoZm9ybUVsZW0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFsuLi5mb3JtQ2hpbGRyZW5dLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQubm9kZU5hbWUgPT0gXCJJTlBVVFwiIHx8IFwiVEVYVEFSRUFcIikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IGBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxpc3RDbGVhbmVyID0gZm9ybUVsZW0gPT4ge1xyXG4gICAgICAgIGxldCBmb3JtQ2hpbGRyZW4gPSBmb3JtRWxlbS5jaGlsZHJlblxyXG4gICAgICAgIGxldCBsaXN0SXRlbUVsZW1lbnRzID0gW107XHJcblxyXG4gICAgICAgIFsuLi5mb3JtQ2hpbGRyZW5dLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NOYW1lID09IFwibGlzdF9faXRlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbUVsZW1lbnRzLnB1c2goZWxlbWVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgbGlzdEl0ZW1FbGVtZW50cy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGkgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW1FbGVtZW50c1tpXS5vdXRlckhUTUwgPSBgYFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1DaGlsZEVsZW1lbnRzID0gbGlzdEl0ZW1FbGVtZW50c1tpXS5jaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgaXRlbUNoaWxkRWxlbWVudHMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW1DaGlsZEVsZW1lbnRzW2ldLm5vZGVOYW1lID09IFwiSU5QVVRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2hpbGRFbGVtZW50c1tpXS52YWx1ZSA9IGBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVycm9yQ2hlY2tlciA9IChpbnB1dEVsZW1lbnRzKSA9PiB7XHJcbiAgICAgICAgbGV0IGVycm9ycyA9IGZhbHNlXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgaW5wdXRFbGVtZW50cy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGlucHV0RWxlbWVudHNbaV0udmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yID0gZXJyb3JDcmVhdG9yKFwiSW5zZXJ0IGFueSBkYXRhXCIpLmVycm9yXHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dEVsZW1lbnRzW2ldLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09IFwibGlzdF9faXRlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50c1tpXS5wYXJlbnRFbGVtZW50LmFmdGVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRzW2ldLmFmdGVyKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXJyb3JzID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7ZXJyb3JzfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7ZXJyb3JzfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJTZXR0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZvcm1zUGFyZW50RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLW5vdGVfX3BhcmFtZXRlcnNcIilcclxuICAgICAgICBmb3Jtc1BhcmVudEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuY3JlYXRlLW5vdGUtYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuY3JlYXRlLW5vdGUtYnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybSA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRFbGVtZW50cyA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBmb3JtLmNoaWxkcmVuLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihmb3JtLmNoaWxkcmVuW2ldLm5vZGVOYW1lID09IFwiSU5QVVRcIiB8fCBmb3JtLmNoaWxkcmVuW2ldLm5vZGVOYW1lID09IFwiVEVYVEFSRUFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnRzLnB1c2goZm9ybS5jaGlsZHJlbltpXSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdENoaWxkcmVuID0gZm9ybS5jaGlsZHJlbltpXS5jaGlsZHJlbiA/IGZvcm0uY2hpbGRyZW5baV0uY2hpbGRyZW4gOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobGlzdENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJbnB1dHMgPSBbLi4ubGlzdENoaWxkcmVuXS5maWx0ZXIoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5ub2RlTmFtZSA9PSBcIklOUFVUXCIgfHwgZWxlbWVudC5ub2RlTmFtZSA9PSBcIlRFWFRBUkVBXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRFbGVtZW50cyA9IFsuLi5pbnB1dEVsZW1lbnRzLCAuLi5saXN0SW5wdXRzXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtc1N0cmluZ2lmaWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW1FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY3JlYXRlLW5vdGVfX3BhcmFtZXRlcnMgPiAubm90ZS1wYXJhbWV0ZXJzX19pdGVtID4gLmxpc3RfX2l0ZW0gPiBpbnB1dFwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdEl0ZW1JbnB1dEFycmF5ID0gWy4uLmxpc3RJdGVtRWxlbWVudHNdLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWUudHJpbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShsaXN0SXRlbUlucHV0QXJyYXkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVycm9yQ2xlYW5lcihgLiR7Zm9ybS5jbGFzc05hbWV9YClcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlcnJvckNoZWNrZXIoaW5wdXRFbGVtZW50cykuZXJyb3JzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFBcnJheSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0cyA9IGlucHV0RWxlbWVudHMuZmlsdGVyKGVsZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICE9IFwibGlzdF9faXRlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihidXR0b24uZ2V0QXR0cmlidXRlKFwic3VibWl0LXRhYmxlXCIpID09IFwibGlzdHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQXJyYXkgPSBbLi4uaW5wdXRzLm1hcChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLnZhbHVlLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgbGlzdEl0ZW1zU3RyaW5naWZpZXIoKV1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQXJyYXkgPSBpbnB1dHMubWFwKGVsZW0gPT4gZWxlbS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVN1Ym1pdGVyKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJzdWJtaXQtdGFibGVcIiksIGRhdGFBcnJheSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDbGVhbmVyKGZvcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dOb3Rlc1Byb2Nlc3NvcigpLnNldE5vdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWZ0ZXIoZXJyb3JDcmVhdG9yKFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHJlbG9hZCB0aGUgcGFnZVwiKS5lcnJvcilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRFdmVudExpc3RlbmVyOiBldmVudExpc3RlbmVyU2V0dGVyLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RlU3VibWl0UHJvY2Vzc29yIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTZmYzkzZDFiMDRiMDcxNzcyYmVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=