const navigationProcessor = () => {
    let optionsElem = document.querySelector(".header__options")
    let burgerMenuElem = document.querySelector(".burger-menu")

    const scroller = (option) => {
        let sections = document.querySelectorAll("#nav_target")

        for(let i = 0;i < sections.length;i++) {
            if(sections[i].getAttribute("nav_target") === option.getAttribute("nav_data")) {
                window.scrollTo({
                    top: sections[i].offsetTop - 88,
                    left: 0,
                    behavior: 'smooth'
                  })
                break
            }
        }
    }
    const scrollChecker = () => {
        let sections = document.querySelectorAll("#nav_target")
        let options = document.querySelectorAll(".options__item")
        let documentHeight = documentHeightFinder().documentHeight
        for(let i = 0;i < sections.length;i++) {
            if(window.scrollY >= sections[i].offsetTop-100 && window.scrollY <= sections[i].offsetTop + sections[i].clientHeight-100) {
                if(documentHeight - window.scrollY <= window.innerHeight + 100) {
                    for(let i = 0;i < options.length;i++) {
                        options[i].classList.remove("options__item_current")
                    }
                    options[--options.length].classList.add("options__item_current")
                    options[options.length-2].classList.add("options__item_current")
                } else {
                    for(let j = 0;j < options.length;j++) {
                        if(sections[i].attributes.nav_target.value == options[j].attributes.nav_data.value) {
                            if(!options[j].classList.contains("options__item_current")) {
                                for(let k = 0;k < options.length;k++) {
                                    options[k].classList.remove("options__item_current")
                                }
                                options[j].classList.add("options__item_current")
                                options[++j].classList.add("options__item_current")
                            }
                            break
                        }
                    }
                }
                break
            }
        }
    }
    const eventListenerSetter = () => {
        optionsElem.addEventListener("click", (event) => {
            if(event.target.closest(".options__item") && !event.target.closest(".options__item").classList.contains("options__item_current")) {
                let selectedOption = event.target.closest(".options__item")
                scroller(selectedOption)
            }
        })
        burgerMenuElem.addEventListener("click", (event) => {
            if(event.target.closest(".burger-menu__options__item") && !event.target.closest(".burger-menu__options__item").classList.contains("options__item_current")) {
                let selectedOption = event.target.closest(".burger-menu__options__item")
                burgerMenuProcessor().close()
                scroller(selectedOption)
            }
        })
        window.addEventListener("scroll", () => {
            scrollChecker()
        })
    }
    return {
        setEventListener: eventListenerSetter,
    }
}

const documentHeightFinder = () => {
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight)
    return {documentHeight}
}
const resizeProcessor = () => {
    const resizeContentChanger = () => {
        if(document.querySelector(".burger-menu__content").style.display != ("flex" || "block")) {
            let headerOptions = document.querySelector(".header__options")
            let headerBurgerMenu = document.querySelector(".header__burger-menu")

            let burgerMenuOpen = document.querySelector(".burger-menu__open")

            if(window.innerWidth <= 680) {
                document.querySelector(".introduction__image img").setAttribute("src", "./images/denis_novik_mobile.png")
                headerOptions.style.display = "none"
                headerBurgerMenu.style.display = "flex"
                burgerMenuOpen.onclick = () => {burgerMenuProcessor().open()}
            } else {
                document.querySelector(".introduction__image img").setAttribute("src", "./images/denis_novik.png")
                headerOptions.style.display = "flex"
                headerBurgerMenu.style.display = "none"
                burgerMenuOpen.onclick = "none"
            }
        }
    }
    resizeContentChanger()
    window.addEventListener("resize", () => {resizeContentChanger()})
}
const burgerMenuProcessor = () => {
    let burgerMenuContent = document.querySelector(".burger-menu__content")
    let burgerMenuOpen = document.querySelector(".burger-menu__open")
    let burgerMenuClose = document.querySelector(".burger-menu__close")
    let mainElem = document.querySelector(".main")
    let footer = document.querySelector(".footer")

    const burgerMenuOpenFunc = () => {
        burgerMenuContent.style.display = "flex"
        burgerMenuClose.addEventListener("click", () => {burgerMenuCloseFunc()})
        burgerMenuOpen.style.display = "none"
        mainElem.style.display = "none"
        footer.style.display = "none"
    }
    const burgerMenuCloseFunc = () => {
        let burgerMenuContent = document.querySelector(".burger-menu__content")
        burgerMenuContent.style.display = "none"
        burgerMenuOpen.style.display = "block"
        mainElem.style.display = "block"
        footer.style.display = "flex"
        resizeProcessor()
    }
    return {
        open: burgerMenuOpenFunc,
        close: burgerMenuCloseFunc,
    }
}



const launchJS = () => {
    navigationProcessor().setEventListener()
    resizeProcessor()
}
document.onload = launchJS()