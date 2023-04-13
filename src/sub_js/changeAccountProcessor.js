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

    return {
        setEventListener: eventListenerSetter,
    }
}
export default changeAccountProcessor