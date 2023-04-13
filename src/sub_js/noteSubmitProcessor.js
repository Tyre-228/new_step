import errorCleaner from "./inputCheckers/errorCleaner"
import errorCreator from "./inputCheckers/errorCreator"
import databaseProcessor from "./tools/firabaseProcessor"
import showNotesProcessor from "./showNotesProcessor"

const noteSubmitProcessor = () => {
    const dataSubmiter = (table, dataArray) => {
        databaseProcessor(table).add(localStorage.getItem("user_id"), dataArray[0], dataArray[1])
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
                let error = errorCreator("Insert any data").error
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

                errorCleaner(`.${form.className}`)

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
                        dataArray = inputs.map(elem => elem.value.trim())
                    }
                    try {
                        dataSubmiter(button.getAttribute("submit-table"), dataArray)
                        inputCleaner(form)
                        showNotesProcessor().setNote()
                    } catch (error) {
                        console.log(error)
                        button.after(errorCreator("Something went wrong, reload the page").error)
                    }
                }
            }
        })
    }
    return {
        setEventListener: eventListenerSetter,
    }
}

export default noteSubmitProcessor