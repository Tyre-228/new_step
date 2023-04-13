const preloaderProcessor = async (state) => {
    let preloaderElem = document.querySelector(".preloader")
    let preloaderImage = document.querySelector(".preloader .preloader__image span")
    let wrapperElem = document.querySelector(".wrapper")
    wrapperElem.style.display = "none"

    const preloaderCreator = () => {
        preloaderElem.removeAttribute("style")
        preloaderElem.id = ""
        preloaderImage.id = "loading"
    }
    const preloaderDestroyer = () => {
        preloaderImage.id = "loaded"
        preloaderElem.id = "loaded"
        return new Promise(resolve => {
            setTimeout(() => {
                preloaderElem.style.display = "none"
                wrapperElem.removeAttribute("style")
                resolve()
            }, 1900)
        })
    }
    const destroyerDelay = (delay) => {
        return new Promise(resolve => {
            setTimeout(() => {resolve()}, delay)
        })
    }
    
    if(state == "start") {
        preloaderCreator()
    }
    if(state == "end") {
        await destroyerDelay(1200)
        await preloaderDestroyer()
    }
}
export default preloaderProcessor;