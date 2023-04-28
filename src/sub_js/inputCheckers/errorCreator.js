const errorCreator = (text) => {
    let error = document.createElement("div")
    error.id = "error"
    error.innerHTML = `${text}`
    
    return {error}
}
//Receive text and return error HTML element with this text
export default errorCreator;