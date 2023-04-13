const pageChangeProcessor = () => {
    let footer = document.querySelector(".footer")

    const pageChanger = (switchTarget) => {
        let switchElems = document.querySelectorAll(".options__item")
        let switchElem
        switchElems.forEach(element => {
            if(element.getAttribute("switchelem") == switchTarget) {
                switchElem = element
            }
        })
        if(switchTarget) {
            switchElems.forEach(elem => {
                elem.id = ""
            })
            switchElem.id = "current"
            windowSwitcher(switchElem.getAttribute("switchelem"))
        }
    }
    const eventListenerSetter = () => {
        footer.addEventListener("click", event => {
            if(event.target.closest("li")) {
                let elem = event.target.closest("li")
                
                pageChanger(elem.getAttribute("switchelem"))
            }
        })
    }

    return {
        setEventListener: eventListenerSetter,
        changePage: pageChanger,
    }
}


const windowSwitcher = (page) => {
    const windowCleaner = () => {
        let windowList = document.querySelectorAll("#page")
        windowList.forEach(elem => {
            elem.style.display = "none"
        })
    }
    const switcher = (switchTarget) => {
        let windowList = document.querySelectorAll("#page")
        windowList.forEach(element => {
            if(element.getAttribute("switchTarget") == switchTarget) {
                windowCleaner()
                element.style.display = "flex"
                window.scrollTo(0, 0)
            }
        })
    }

    windowCleaner()
    if(page) {
        switcher(page)
    }
}
export default pageChangeProcessor