export class LogIn {
    constructor(nameInp, passwordInp){
        this.nameInp = nameInp
        this.passwordInp = passwordInp
        this.name = nameInp.value
        this.password = passwordInp.value
    }

    #isEmply(inputValue) {
        return inputValue.length < 1 ? true : false
    }
    #checkCorrection(data, type) {
        let properName = "Tyre228"
        let properPassword = "Agent3310"
        let error = ""
        switch(type) {
            case "name":
                if(data === properName) {
                    return true
                } else {
                    error = "Insert correct name"
                    return {error: error}
                }
            case "password":
                if(data === properPassword) {
                    return true
                } else {
                    error = "Insert correct password"
                    return {error: error}
                }
            default:
                throw Error("This type is unsupported by #CheckCorrection method")
        }
    }
    validate() {
        let success = true
        let error = ""
        let errorSource
        if(this.#isEmply(this.name) === true) {
            success = false
            error = "Insert something"
            errorSource = this.nameInp
        } else if(this.#checkCorrection(this.name, "name") !== true) {
            success = false
            error = this.#checkCorrection(this.name, "name").error
            errorSource = this.nameInp
        }
        else if(this.#isEmply(this.password) === true) {
            success = false
            error = "Insert something"
            errorSource = this.passwordInp
        } else if(this.#checkCorrection(this.password, "password") !== true) {
            success = false
            error = this.#checkCorrection(this.password, "password").error
            errorSource = this.passwordInp
        }

        return {
            success: success,
            error: error,
            errorSource: errorSource,
        }
    }
    close() {
        this.nameInp.closest("section").id = "closed"
        setTimeout(() => {
            this.nameInp.closest("section").style.display = "none"
            document.querySelector(".wrapper").removeAttribute("style")
        }, 900)
    }
}