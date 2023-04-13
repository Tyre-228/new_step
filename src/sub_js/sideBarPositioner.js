const sideBarPositioner = () => {
    let footer = document.querySelector(".footer")
    const sideBarChanger = () => {
        if(window.scrollY >= 200) {
            footer.id = "top"
        } else {
            footer.id = "bottom"
        }
    }
    sideBarChanger()
    window.addEventListener("scroll", () => {sideBarChanger()})
}
export default sideBarPositioner;