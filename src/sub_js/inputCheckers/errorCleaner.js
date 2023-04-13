const errorCleaner = (parentSelector) => {
    document.querySelectorAll(`${parentSelector} #error`).forEach(elem => {
        elem.outerHTML = ``
    })
}
export default errorCleaner;