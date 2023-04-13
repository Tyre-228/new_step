import databaseProcessor from "./tools/firabaseProcessor"

const removeNoteProcessor = () => {
    const listContentChecker = (list) => {
        let content = true
        if(list.innerHTML.trim() == "") {
            content = false
        }
        return {content}
    }
    const eventListenerSetter = () => {
        let notesElement = document.querySelector(".notes")
        notesElement.addEventListener("click", event => {
            if(event.target.closest(".note-list__done") || event.target.closest(".note-list__remove")) {
                let noteList = event.target.closest(".note-list")
                let noteElement = event.target.closest(".note-list__item")
                let noteId = noteElement.getAttribute("note-id")
                let table = event.target.closest(".note-type__item").getAttribute("note-type") + "s"

                databaseProcessor(table).remove(noteId)
                noteElement.outerHTML = ``
                if(listContentChecker(noteList).content == false) {
                    noteList.innerHTML = "You don`t have any notes in this section"
                }
            }
        })
    }
    return {
        setEventListener: eventListenerSetter,
    }
}
export default removeNoteProcessor