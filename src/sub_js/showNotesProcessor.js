import databaseProcessor from "./tools/firabaseProcessor"

const showNotesProcessor = () => {
    let noteTypeListElem = document.querySelector(".notes")

    const noteCreator = async (noteType) => {
            let addNoteElem = document.createElement("button")
            addNoteElem.className = "add-note-button"
            addNoteElem.innerHTML = `<span class="material-symbols-outlined">add</span>`
            
            let noteElem = document.createElement("ul")
            
            noteElem.className = "note-list"
            let data = await databaseProcessor(noteType).getById(localStorage.getItem("user_id"))
            const listHTMLCreator = (list) => {
                let listElem = document.createElement("ol")
                listElem.className = "note-item__list"
                list.forEach(elem => {
                    listElem.innerHTML += `<li class = "list__item"><p>${elem}</p></li>`
                })
                return listElem
            }

            switch (noteType) {
                case "tasks":
                    data.forEach(element => {
                        noteElem.innerHTML += 
                        `
                        <li note-id = ${element.id} class = "note-list__item">
                            <div class = "note-list__content">
                                <p class = "task">Task: ${element.task}</p>
                                <p class = "deadline">Complete to: ${element.deadline}</p>
                            </div>
                            <button class = "note-list__done done"><span class="material-symbols-outlined">done</span></button>
                        </li>
                        `
                    })
                    break
                case "lists":
                    data.forEach(element => {
                        noteElem.innerHTML += 
                        `
                        <li note-id = ${element.id} class = "note-list__item">
                            <div class = "note-list__content">
                                <h3 class = "title">List title: ${element.listName}</h3>
                                ${listHTMLCreator(JSON.parse(element.stringifiedList)).outerHTML}
                            </div>
                            <button class = "note-list__remove remove"><span class="material-symbols-outlined">close</span></button>
                        </li>
                        `
                    })
                    break
                case "ideas":
                    data.forEach(element => {
                        noteElem.innerHTML += 
                        `
                        <li note-id = ${element.id} class = "note-list__item">
                            <div class = "note-list__content">
                                <p class = "title">Title: ${element.title}</p>
                                <p class = "text">Text: ${element.text}</p>
                            </div>
                            <button class = "note-list__remove remove"><span class="material-symbols-outlined">close</span></button>
                        </li>
                        `
                    })
                    break
                case "dates":
                    data.forEach(element => {
                        noteElem.innerHTML += 
                        `
                        <li note-id = ${element.id} class = "note-list__item">
                            <div class = "note-list__content">
                                <p class = "event">Event: ${element.event}</p>
                                <p class = "date">Date: ${element.date}</p>
                            </div>
                            <button class = "note-list__remove remove"><span class="material-symbols-outlined">close</span></button>
                        </li>
                        `
                    })
                    break
            }
            if(!noteElem.innerHTML) {
                noteElem.innerHTML = "You don`t have any notes in this section"
            }
            return `${noteElem.outerHTML}` + `${addNoteElem.outerHTML}`
    }
    const noteSetter = async () => {
        let noteListElements = document.querySelectorAll(".nt-item__content")
        for(let i = 0;i < noteListElements.length;i++) {
            let noteType = noteListElements[i].closest(".note-type__item").getAttribute("note-type")
            noteListElements[i].innerHTML = (await noteCreator(`${noteType}s`))
        }
    }
    const eventListenerSetter = () => {
        noteTypeListElem.addEventListener("click", event => {
            if(event.target.closest(".note-type__item") && event.target.closest(".open-list-button")) {
                let noteTypeElem = event.target.closest(".note-type__item")
                let noteList = document.querySelector(`.${noteTypeElem.classList[0]} .nt-item__content`)
                if(noteTypeElem.id != "opened") {
                    noteTypeElem.id = "opened"
                    noteList.removeAttribute("style")
                } else {
                    noteTypeElem.id = ""
                    noteList.style.display = "none"
                }
            }
        })
    }
    return {
        setEventListener: eventListenerSetter,
        createNotes: noteCreator,
        setNote: noteSetter,
    }
}
export default showNotesProcessor