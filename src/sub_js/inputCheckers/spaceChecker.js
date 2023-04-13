const spaceChecker = (string) => {
    let sucess = true
    let stringArray = [...(string.trim())]
    stringArray.forEach(element => {
        if(element == " ") {
            sucess = false
        }
    })
    return {sucess}
}
export default spaceChecker