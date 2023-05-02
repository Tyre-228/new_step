import { Error } from '../view/view.js'
import { LogIn } from '../model/model.js'





class Controller{
    constructor(){
        
    }
    #errorCleaner(form) {
        let errorElems = [...form.children].filter(elem => elem.id === "error" ? true : false)
        errorElems.forEach(elem => elem.outerHTML = ``)
    }
    #validateLogIn(nameInp, passwordInp) {
        const logIn = new LogIn(nameInp, passwordInp)
        if(logIn.validate().success === false) {
            logIn.validate().errorSource.after(new Error(logIn.validate().error).create())
        } else {
            logIn.close()
        }
    }
    submitSetEventListener() {
        let submitButton = document.querySelector(".authentefication__submit")
        submitButton.addEventListener("click", (event) => {
            event.preventDefault()
            let formElem = document.querySelector(".authentefication__form")
            let nameInp = document.querySelector("#name.authentefication__input")
            let passwordInp = document.querySelector("#password.authentefication__input")
            this.#errorCleaner(formElem)
            this.#validateLogIn(nameInp, passwordInp)
        })
    }
}


export default Controller