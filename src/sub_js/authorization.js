import databaseProcessor from "./tools/firabaseProcessor.js";
import uniquenessChecker from "./inputCheckers/uniquenessCheckerChecker.js";
import errorCleaner from "./inputCheckers/errorCleaner.js";
import errorCreator from "./inputCheckers/errorCreator.js";
import spaceChecker from "./inputCheckers/spaceChecker.js";

const autorizationProcessor = () => {
    let authorizationElem = document.querySelector(".authorization")
    let goToSignUpElem = document.querySelector("#go-to-sign-up")
    let goToSignInElem = document.querySelector("#go-to-sign-in")
    authorizationElem.removeAttribute("style")
    
    const changeAutorizationType = (changeTo) => {
        errorCleaner(".sign-up form")
        errorCleaner(".sign-in form")
        let selectedElem = document.getElementsByClassName(changeTo)[0]

        for(let i = 0;i < authorizationElem.children.length;i++) {
            authorizationElem.children[i].style.display = "none"
        }
        selectedElem.style.display = "block"
    }
    const dataValidation = async (data, dataType) => {
        let sucess = false
        let error = document.createElement("div")
        error.id = "error"

        const errorChecker = async (dataType) => {
            if(dataType == "nickname") {
                if(data) {
                    if(data.length < 4) {
                        error.innerHTML = "Nickname is too short"
                        return error
                    }
                    if(data.length > 16) {
                        error.innerHTML = "Nickname is too long"
                        return error
                    } else {
                        return true
                    }
                } else {
                    error.innerHTML = "Insert nickname"
                    return error
                }
            }
            if(dataType == "password") {
                const stringNumbersChecker = (data) => {
                    let numbers = false
                    for(let i = 0;i < data.length;i++) {
                        if(parseInt(data[i])) {
                            numbers = true
                            break
                        }
                    }
                    return numbers
                }

                if(data) {
                    if(data.length < 4) {
                        error.innerHTML = "Password is too short"
                        return error
                    }
                    if(data.length > 24) {
                        error.innerHTML = "Password is too long"
                        return error
                    }
                    if(!stringNumbersChecker(data)) {
                        error.innerHTML = "Use numbers for password"
                        return error
                    }
                    return true
                } else {
                    error.innerHTML = "Insert password"
                    return error
                }
            } else {
                console.log("Incorrect data type!")
            }
        }
        if(await errorChecker(dataType) == true) {
            sucess = true
            error = ``
        }

        return {
            sucess,
            error,
        }
    }
    const idSetter = async (nickname, password) => {
        let userData = await databaseProcessor("users").get()
        for(let i = 0;i < userData.length;i++) {
            if(userData[i].name == nickname && userData[i].password == password) {
                return userData[i].id
            }
        }
    }
    const passwordAppropriationChecker = async (password, nickname) => {
        const userData = await databaseProcessor("users").get()
        for(let i = 0;i < userData.length;i++) {
            if(userData[i].name == nickname) {
                if(userData[i].password == password) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
    const formCleaner = () => {
        let signInForm = document.querySelector(".sign-in__form")
        let signUpForm = document.querySelector(".sign-up__form")
        let inputs = [
            ...[...signInForm.children].filter(elem => {return elem.nodeName === ("INPUT" || "TEXTAREA") ? true : false}), 
            ...[...signUpForm.children].filter(elem => {return elem.nodeName === ("INPUT" || "TEXTAREA") ? true : false})
        ]

        inputs.forEach(elem => elem.value = ``)
    }
    const eventListenerSetter = () => {
        let createAccountButton = document.querySelector(".sign-up__submit")
        let createNicknameInput = document.querySelector(".sign-up__insert-name")
        let createPasswordInput = document.querySelector(".sign-up__insert-password")

        let enterAccountButton = document.querySelector(".sign-in__submit")
        let enterNicknameInput = document.querySelector(".sign-in__insert-name")
        let enterPasswordInput = document.querySelector(".sign-in__insert-password")

        goToSignUpElem.onclick = () => {changeAutorizationType("sign-up")}
        goToSignInElem.onclick = () => {changeAutorizationType("sign-in")}

        if(createAccountButton.style.display != "none") {
            createAccountButton.onclick = async event => {
                event.preventDefault()

                let nicknameValue = createNicknameInput.value.trim()
                let passwordValue = createPasswordInput.value.trim()

                errorCleaner(".sign-up form")
                if((await dataValidation(nicknameValue, "nickname")).sucess === false) {
                    createNicknameInput.after((await dataValidation(nicknameValue, "nickname")).error)
                } else if((await dataValidation(passwordValue, "password")).sucess === false) {
                    createPasswordInput.after((await dataValidation(passwordValue, "password")).error)
                } else if(spaceChecker(nicknameValue).sucess === false) {
                    createNicknameInput.after(errorCreator("Enter only one word").error)
                } else if(spaceChecker(passwordValue).sucess === false) {
                    createPasswordInput.after(errorCreator("Enter only one word").error)
                } else {
                    if((await uniquenessChecker("users", nicknameValue, "name")).unique === true) {
                        if((await uniquenessChecker("users", passwordValue, "password")).unique === true) {
                            try {
                                databaseProcessor("users").add(nicknameValue, passwordValue)
                                localStorage.setItem("user_id", `${await idSetter(nicknameValue, passwordValue)}`)
                                formCleaner()
                                authorizationElem.style.display = "none"
                            } catch (error) {
                                console.log(error)
                                createAccountButton.after(errorCreator("Something went wrong").error)
                            }
                        } else {
                            createPasswordInput.after(errorCreator("This password do already exist").error)
                        }
                    } else {
                        createNicknameInput.after(errorCreator("This nickname do already exist").error)
                    } 
                }
            }
        }
        if(enterAccountButton.style.display != "none") {

            enterAccountButton.onclick = async event => {
                event.preventDefault()

                let nicknameValue = enterNicknameInput.value.trim()
                let passwordValue = enterPasswordInput.value.trim()

                errorCleaner(".sign-in form")
                if((await dataValidation(nicknameValue, "nickname")).sucess === false) {
                    enterNicknameInput.after((await dataValidation(nicknameValue, "nickname")).error)
                } else if((await dataValidation(passwordValue, "password")).sucess === false) {
                    enterPasswordInput.after((await dataValidation(passwordValue, "password")).error)
                } else if(spaceChecker(nicknameValue).sucess === false) {
                    enterNicknameInput.after(errorCreator("Enter only one word").error)
                } else if(spaceChecker(passwordValue).sucess === false) {
                    enterPasswordInput.after(errorCreator("Enter only one word").error)
                } else {
                      if((await uniquenessChecker("users", nicknameValue, "name")).unique === false) {
                        if((await passwordAppropriationChecker(passwordValue, nicknameValue)) === true) {
                            try {
                                localStorage.setItem("user_id", `${await idSetter(nicknameValue, passwordValue)}`)
                                formCleaner()
                                authorizationElem.style.display = "none"
                            } catch (error) {
                                console.log(error)
                                enterAccountButton.after(errorCreator("Something went wrong, reload the page").error)
                            }
                        } else {
                            enterPasswordInput.after(errorCreator("This password is not correct").error)
                        }
                    } else {
                        enterNicknameInput.after(errorCreator("This nickname do not exist").error)
                    }
                }
            }
        }
    }

    changeAutorizationType("sign-in")

    return {
        setEventListeners: eventListenerSetter
    }
}
export default autorizationProcessor