const errorCreator = (text) => {
    let error = document.createElement("div")
    error.id = "error"
    error.innerHTML = `${text}`
    
    return {error}
}

export default errorCreator;