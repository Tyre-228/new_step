import preloaderProcessor from "./sub_js/preloader.js";
import autorizationProcessor from "./sub_js/authorization.js";
import addNoteProcessor from "./sub_js/addNoteProcessor.js";
import sideBarPositioner from "./sub_js/sideBarPositioner.js";
import listController from "./sub_js/listController.js";
import pageChangeProcessor from "./sub_js/pageChangeProcessor.js";
import showNotesProcessor from "./sub_js/showNotesProcessor.js";
import noteCreatorSwitcher from "./sub_js/noteCreatorSwitcher.js";
import noteSubmitProcessor from "./sub_js/noteSubmitProcessor.js";
import { currentDataSetter } from "./sub_js/accountPageProcessor.js";
import changeAccountProcessor from "./sub_js/changeAccountProcessor.js";
import removeNoteProcessor from "./sub_js/removeNoteProcessor.js";
// importing all modules

const onloadFunction = async () => {
    let wrapperElem = document.querySelector(".wrapper")
    let autorizationElem = document.querySelector(".authorization")
    await preloaderProcessor("start")

    const authorizationFinishChecker = () => {
        let authorizationElem = document.querySelector(".authorization")
        setTimeout(async () => {
            if(!authorizationElem || authorizationElem.style.display == "none") {
                await preloaderProcessor("start")
                postAuthorizationLoader()
                await preloaderProcessor("end")
            } else {
                authorizationFinishChecker()
            }
        }, 200)
    }

    if(!(localStorage.getItem("user_id"))) {
        await preloaderProcessor("end")
        wrapperElem.style.display = "none"
        autorizationProcessor().setEventListeners()
        authorizationFinishChecker()
    } else {
        postAuthorizationLoader()
        autorizationElem.style.display = "none"
        await preloaderProcessor("end")
    }
}
// loading of preloader and authorization if necessary

const postAuthorizationLoader = async () => {
    let wrapperElem = document.querySelector(".wrapper")
    wrapperElem.removeAttribute("style")
    
    sideBarPositioner()
    currentDataSetter()
    showNotesProcessor().setNote()
    pageChangeProcessor().changePage("note-list")
    noteCreatorSwitcher().switch("task")
    addNoteProcessor()

    showNotesProcessor().setEventListener()
    noteSubmitProcessor().setEventListener()
    changeAccountProcessor().setEventListener()
    removeNoteProcessor().setEventListener()
    pageChangeProcessor().setEventListener()
    listController().setEventListener()
    noteCreatorSwitcher().setEventListener()

    await preloaderProcessor("end")
}
// Loading all modules after authorization
window.onload = () => {
    onloadFunction()
}
