const listController = () => {
    let addListItemElem = document.querySelector(".list__add")
    let listElem = document.querySelector("#list.note-parameters__item")

    const itemCreator = () => {
        let taskElem = document.createElement("div")

        taskElem.className = "list__item"
        taskElem.innerHTML = 
        `
        <input placeholder = "List item" type="text">
        <button class="delete-list-item"><span class="material-symbols-outlined">close</span></button>
        `
        
        return taskElem
    }
    //Create list input and return HTML element

    const itemDeleter = () => {
        let allListItems = document.querySelectorAll(".note-parameters__item .list__item")

        if(event.target.closest(".list__item") && (allListItems.length > 1)) {
            let listItemElem = event.target.closest(".list__item")
            if(event.target.closest(".delete-list-item")) {
                listItemElem.outerHTML = ""
            }
        }
    }
    //Delete list input

    const listItemCounter = () => {
        let listItemElements = document.querySelectorAll(".list__item")
        return listItemElements.length
    }
    //Count list inputs and return result

    const eventListenerSetter = () => {
        addListItemElem.addEventListener("click", event => {
            event.preventDefault()
            addListItemElem.before(itemCreator())
        })
        listElem.addEventListener("click", event => {
            event.preventDefault()
            itemDeleter()
        })
    }
    //Set event listener to inputs

    return {
        setEventListener: eventListenerSetter,
        countLists: listItemCounter,
    }
}
export default listController