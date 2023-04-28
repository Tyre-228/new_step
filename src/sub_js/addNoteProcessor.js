import pageChangeProcessor from "./pageChangeProcessor"
import noteCreatorSwitcher from "./noteCreatorSwitcher"

const addNoteProcessor = () => {
    let notesElem = document.querySelector(".notes")

    notesElem.addEventListener("click", event => {
        if(event.target.closest(".note-type__item")) {
            let noteItemElem = event.target.closest(".note-type__item")
            if(event.target.closest(".note-type__item .nt-item__content .add-note-button")) {
                pageChangeProcessor().changePage("note-creator")
                noteCreatorSwitcher().switch(noteItemElem.getAttribute("note-type"))
            }
        }
    })
}
//Set event listener to add-note button. After pressing this button app move user to create note section with appropriate note type
export default addNoteProcessor