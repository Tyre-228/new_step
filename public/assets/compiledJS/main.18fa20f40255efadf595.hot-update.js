"use strict";
self["webpackHotUpdatenotepad_app"]("main",{

/***/ "./src/sub_js/listController.js":
/*!**************************************!*\
  !*** ./src/sub_js/listController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const listController = () => {
    let addListTaskElem = document.querySelector(".list__add")
    let listElem = document.querySelector("#list.note-parameters__item")

    const itemCreator = () => {
        let taskElem = document.createElement("div")

        taskElem.className = "list__item"
        taskElem.innerHTML = 
        `
        <input placeholder = "List item" type="text">
        <button class="delete-list-item"><span class="material-symbols-outlined">close</span></button>
        `
        
        return taskElem
    }

    const itemDeleter = () => {
        let allListItems = document.querySelectorAll(".note-parameters__item .list__item")

        if(event.target.closest(".list__item") && (allListItems.length > 1)) {
            let listItemElem = event.target.closest(".list__item")
            if(event.target.closest(".delete-list-item")) {
                listItemElem.outerHTML = ""
            }
        }
    }

    const listItemCounter = () => {
        let listItemElements = document.querySelectorAll(".list__item")
        return listItemElements.length
    }

    const eventListenerSetter = () => {
        addListTaskElem.addEventListener("click", event => {
            event.preventDefault()
            addListTaskElem.before(itemCreator())
        })

        listElem.addEventListener("click", event => {
            event.preventDefault()
            itemDeleter()
        })
    }

    return {
        setEventListener: eventListenerSetter,
        countLists: listItemCounter,
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listController);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e323be029c035f5d45f8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOGZhMjBmNDAyNTVlZmFkZjU5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7OztVQ2xEZiIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVwYWRfYXBwLy4vc3JjL3N1Yl9qcy9saXN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9ub3RlcGFkX2FwcC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGlzdENvbnRyb2xsZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgYWRkTGlzdFRhc2tFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0X19hZGRcIilcclxuICAgIGxldCBsaXN0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdC5ub3RlLXBhcmFtZXRlcnNfX2l0ZW1cIilcclxuXHJcbiAgICBjb25zdCBpdGVtQ3JlYXRvciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGFza0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcblxyXG4gICAgICAgIHRhc2tFbGVtLmNsYXNzTmFtZSA9IFwibGlzdF9faXRlbVwiXHJcbiAgICAgICAgdGFza0VsZW0uaW5uZXJIVE1MID0gXHJcbiAgICAgICAgYFxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlciA9IFwiTGlzdCBpdGVtXCIgdHlwZT1cInRleHRcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWxpc3QtaXRlbVwiPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3NlPC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgIGBcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGFza0VsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpdGVtRGVsZXRlciA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYWxsTGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlLXBhcmFtZXRlcnNfX2l0ZW0gLmxpc3RfX2l0ZW1cIilcclxuXHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubGlzdF9faXRlbVwiKSAmJiAoYWxsTGlzdEl0ZW1zLmxlbmd0aCA+IDEpKSB7XHJcbiAgICAgICAgICAgIGxldCBsaXN0SXRlbUVsZW0gPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5saXN0X19pdGVtXCIpXHJcbiAgICAgICAgICAgIGlmKGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmRlbGV0ZS1saXN0LWl0ZW1cIikpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtRWxlbS5vdXRlckhUTUwgPSBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGlzdEl0ZW1Db3VudGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBsaXN0SXRlbUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0X19pdGVtXCIpXHJcbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtRWxlbWVudHMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lclNldHRlciA9ICgpID0+IHtcclxuICAgICAgICBhZGRMaXN0VGFza0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBhZGRMaXN0VGFza0VsZW0uYmVmb3JlKGl0ZW1DcmVhdG9yKCkpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGlzdEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBpdGVtRGVsZXRlcigpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEV2ZW50TGlzdGVuZXI6IGV2ZW50TGlzdGVuZXJTZXR0ZXIsXHJcbiAgICAgICAgY291bnRMaXN0czogbGlzdEl0ZW1Db3VudGVyLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxpc3RDb250cm9sbGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTMyM2JlMDI5YzAzNWY1ZDQ1ZjhcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=