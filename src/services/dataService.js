import axios from 'axios'
const header = {
    headers : {
       //"Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ localStorage.getItem("Token")
    }
}

export const takeNote = async function(obj){
    let response = await axios.post("https://localhost:44361/api/addNote", obj, header) 
    return response
} 

export const GetNote = async function(){
    let response = await axios.get(`https://localhost:44361/api/getNotes?userId=${localStorage.getItem("userId")}`, header) 
    return response
} 
 
export const UpdateNote = async function(obj){
    let response = await axios.put(`https://localhost:44361/api/updateNote`, obj, header)
    return response
}

export const UpdateColor = async function(obj){
    let response = await axios.put(`https://localhost:44361/api/UpdateColor?noteId=${obj.NotesId}&color=${obj.color}`,null, header)
    return response
}

export const UpdateArchive = async function(obj){
    let response = await axios.put(`https://localhost:44361/api/archive?notesId=${obj.NotesId}`,null, header)
    return response
}

export const UpdateTrash = async function(obj){
    let response = await axios.put(`https://localhost:44361/api/Trash?notesId=${obj.NotesId}`,null, header)
    return response
}

export const GetArchive = async function(obj){
    let response = await axios.get(`https://localhost:44361/api/GetArchiveNotes?userId=${localStorage.getItem("userId")}`, header) 
    return response
} 
 
export const GetTrash = async function(){
    let response = await axios.get(`https://localhost:44361/api/GetTrashNotes?userId=${localStorage.getItem("userId")}`, header) 
    return response
} 
 

