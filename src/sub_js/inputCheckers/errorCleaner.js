const errorCleaner = (parentSelector) => {
    document.querySelectorAll(`${parentSelector} #error`).forEach(elem => {
        elem.outerHTML = ``
    })
}
//Receive selector of parent node and delete all elements with id error(which all error elements must have)
export default errorCleaner;