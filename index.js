const videoProcessor = () => {
    let video = document.getElementById("video")
    let startVideoButton = document.querySelector(".start-video__button")
    const videoPlayer = () => {
        video.play()
        video.setAttribute("controls", true)
        startVideoButton.style.display = "none"
    }
    startVideoButton.addEventListener("click", (event) => {
        event.preventDefault()
        videoPlayer()
    })
}



const menuChanger = () => {
    let optionMenu = document.querySelector(".header__content")
    let burgerMenu = document.querySelector(".header__burger-menu")
    let openMenuButton = document.querySelector(".open-menu-button")

    const resizeFunc = () => {
        if(window.innerWidth <= 560) {
            optionMenu.style.display = `none`
            burgerMenu.style.display = `flex`
            openMenuButton.onclick = () => {burgerMenuProcessor().stateChanger("open")}
        } else if(burgerMenu.id == `closed`) {
            optionMenu.style.display = `flex`
            burgerMenu.style.display = `none`
            openMenuButton.onclick = ""
        }
    }
    resizeFunc()
    window.addEventListener("resize", resizeFunc)
}
const burgerMenuProcessor = () => {
    let burgerMenu = document.querySelector(".burger-menu")
    let burgerMenuClosed = document.querySelector(".closed-menu")
    let burgerMenuOpened = document.querySelector(".opened-menu")
    let mainElem = document.querySelector(".main")
    let footerElem = document.querySelector(".footer")
    let closeMenuButton = document.querySelector(".close-menu-button")

    const burgerMenuStateChanger = (action) => {
        if(action == "close") {
            closeMenuButton.removeEventListener("click", () => {burgerMenuStateChanger("close")})
            burgerMenuClosed.style.display = `flex`
            burgerMenuOpened.style.display = `none`
            mainElem.style.display = `block`
            footerElem.style.display = `block`
            burgerMenu.id = `closed`
            menuChanger()
        }
        if(action == "open") {
            burgerMenuClosed.style.display = `none`
            burgerMenuOpened.style.display = `flex`
            mainElem.style.display = `none`
            footerElem.style.display = `none`
            burgerMenu.id = `opened`
            closeMenuButton.addEventListener("click", () => {burgerMenuStateChanger("close")
            })
        }
    }
    return {
        stateChanger: burgerMenuStateChanger,
    }
}




const launch = () => {
    menuChanger()
    videoProcessor()
}
document.onload = launch()