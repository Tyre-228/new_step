import autorizationProcessor from "./authorization"
import { currentDataSetter } from "./accountPageProcessor"
import showNotesProcessor from "./showNotesProcessor"
import preloaderProcessor from "./preloader"

const changeAccountProcessor = () => {
    const dataRewriter = async () => {
        await preloaderProcessor("start")
        await currentDataSetter()
        await showNotesProcessor().setNote()
        await preloaderProcessor("end")
    }
    //Activate preloader and rewrite all data according to account
    const authorizationFinishChecker = () => {
        let authorizationElem = document.querySelector(".authorization")
        setTimeout(() => {
            if(authorizationElem.style.display == "none") {
                dataRewriter()
            } else {
                authorizationFinishChecker()
            }
        }, 200)
    }
    //Wait for authorization finishing
    const eventListenerSetter = () => {
        let changeAccountButton = document.querySelector(".account__form > .account__change")
        let wrapperElem = document.querySelector(".wrapper")

        changeAccountButton.addEventListener("click", (event) => {
            event.preventDefault()
            wrapperElem.style.display = "none"
            autorizationProcessor().setEventListeners()
            authorizationFinishChecker()
        })
    }
    //Set event listener to change account button. After pressing button app move user to authorization form

    return {
        setEventListener: eventListenerSetter,
    }
}
export default changeAccountProcessor