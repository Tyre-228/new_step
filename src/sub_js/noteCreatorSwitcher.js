const noteCreatorSwitcher = () => {
    let selectorElem = document.querySelector(".create-note__type-selector select")
    let noteCreators = document.querySelectorAll(".note-parameters__item")

    const elemCleaner = () => {
        noteCreators.forEach(elem => {
            elem.style.display = "none"
        })
    }
    //Clean all sections

    const switcher = (switchTo) => {
        elemCleaner()
        if(switchTo) {
            selectorElem.value = switchTo
        }
        for(let i = 0;i < noteCreators.length;i++) {
            if(noteCreators[i].id == selectorElem.value) {
                noteCreators[i].removeAttribute("style")
                break
            }
        }
    }
    //Clean types and switch either to chosen type or to selector value

    const eventListenerSetter = () => {
        selectorElem.addEventListener("change", () => {switcher()})
    }
    //Adding event listener to type selector
    return {
        switch: switcher,
        setEventListener: eventListenerSetter,
    }
}
export default noteCreatorSwitcher