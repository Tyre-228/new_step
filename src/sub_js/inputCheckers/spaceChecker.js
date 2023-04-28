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
//Receive string and check it for spaces between words. Has method sucess which give true/false according to checking results
export default spaceChecker