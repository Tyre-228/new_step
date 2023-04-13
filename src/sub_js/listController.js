const listController = () => {
    let addListTaskElem = document.querySelector(".list__add")
    let listElem = document.querySelector("#list.note-parameters__item")

    const itemCreator = () => {
        let taskElem = document.createElement("div")

        taskElem.className = "list__item"
        taskElem.setAttribute("type", "text")
        taskElem.setAttribute("placeholder", "Task")
        taskElem.innerHTML = 
        `
        <input placeholder = "Task" type="text">
        <button class="delete-list-item"><span class="material-symbols-outlined">close</span></button>
        `
        
        return taskElem
    }

    const itemDeleter = () => {
        let allListItems = document.querySelectorAll(".note-parameters__item .list__item")

        if(event.target.closest(".list__item") && (allListItems.length > 1)) {
            let listItemElem = event.target.closest(".list__item")
            if(event.target.closest(".delete-list-item")) {
                listItemElem.outerHTML = ""
            }
        }
    }

    const listItemCounter = () => {
        let listItemElements = document.querySelectorAll(".list__item")
        return listItemElements.length
    }

    const eventListenerSetter = () => {
        addListTaskElem.addEventListener("click", event => {
            event.preventDefault()
            addListTaskElem.before(itemCreator())
        })

        listElem.addEventListener("click", event => {
            event.preventDefault()
            itemDeleter()
        })
    }

    return {
        setEventListener: eventListenerSetter,
        countLists: listItemCounter,
    }
}
export default listController