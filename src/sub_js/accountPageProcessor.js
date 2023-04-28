import databaseProcessor from "./tools/firabaseProcessor"

export const currentDataSetter = async () => {
    let nameInput = document.querySelector(".account__insert-name")
    let passwordInput = document.querySelector(".account__insert-password")
    let dbQuery = await databaseProcessor("users").get()
    let userData = [...dbQuery].find(elem => elem.id == localStorage.getItem("user_id"))
    
    nameInput.value = userData.name
    passwordInput.value = userData.password
    passwordInput.setAttribute("type", "text")
}
//Set user data