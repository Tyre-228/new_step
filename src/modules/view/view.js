export class Error {
    constructor(message) {
        this.message = message
    }
    create() {
        let errorElem = document.createElement("div")
        errorElem.id = "error"
        errorElem.innerHTML = this.message
        return errorElem
    }
}