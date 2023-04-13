import databaseProcessor from "../tools/firabaseProcessor"

const uniquenessChecker = async (table, data, datatype) => {
    const chosenData = await databaseProcessor(table).get()
    let unique = true
    switch (datatype) {
        case "name":
            for(let i = 0;i < chosenData.length;i++) {
                if(chosenData[i].name == data) {
                    unique = false
                    break
                }
            }

            break
        case "password":
            for(let i = 0;i < chosenData.length;i++) {
                if(chosenData[i].password == data) {
                    unique = false
                    break
                }
            }
            
            break
    }
    return {unique}
}

export default uniquenessChecker