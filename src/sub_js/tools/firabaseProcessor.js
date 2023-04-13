import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, onSnapshot, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPKDDOyFXurQk08rjhWFIcLZJbGAc6SS4",
  authDomain: "notepad-app-f39ba.firebaseapp.com",
  projectId: "notepad-app-f39ba",
  storageBucket: "notepad-app-f39ba.appspot.com",
  messagingSenderId: "439041864772",
  appId: "1:439041864772:web:155ab96b3a0a8189e63811",
  measurementId: "G-K7VNFGB4M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

const databaseProcessor = (table) => {
  let defaultTable = "users"
  if(!table) {
    table = defaultTable
  }
  let dbConf = collection(database, `${table}`)

  const addData = (data1 , data2, data3) => {
    switch(table) {
      case "users":
        addDoc(dbConf, {
          name: data1,
          password: data2,
        })
        break
      case "tasks":
        addDoc(dbConf, {
          userId: data1,
          task: data2,
          deadline: data3,
        })
        break
      case "lists":
        addDoc(dbConf, {
          userId: data1,
          listName: data2,
          stringifiedList: data3,
        })
        break
      case "ideas":
        addDoc(dbConf, {
          userId: data1,
          title: data2,
          text: data3,
        })
        break
      case "dates":
        addDoc(dbConf, {
          userId: data1,
          event: data2,
          date: data3,
        })
        break
      default:
        console.log("this table does not exist")
    }
  }
  const removeData = (id) => {
      deleteDoc(doc(database, table, id))
  }
  const getData = async () => {
    let object
    if(table == "users") {
      await getDocs(dbConf).then((response) => {
        object =  response.docs.map(item => {
          return {...item.data(), id: item.id}
        })
      })
    } else {
      object = new Promise(resolve => {
        onSnapshot(dbConf,  response => {
            object = response.docs.map(item => {
              return {...item.data(), id: item.id}
            })
            resolve(object)
        })
      })
    }
    return object
  }
  const getDataById = async (userId) => {
    let object = []
    const conditionalQuery = query(dbConf, where("userId", "==", userId))
    if(table == "users") {
      console.log("This table is unsupported by this method!!!")
    } else {
      let dataReceiver = () => {
        return new Promise(resolve => {
          onSnapshot(conditionalQuery, { includeMetadataChanges: true },  response => {
              object = response.docs.map(item => {
                return {...item.data(), id: item.id}
              })
              resolve(object)
          })
        })
      }
      object = [...(await dataReceiver())]
    }
    return object
  }
  return {
    add: addData,
    remove: removeData,
    get: getData,
    getById: getDataById,
  }
}



export default databaseProcessor;