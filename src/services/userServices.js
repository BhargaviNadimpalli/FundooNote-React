import axios from 'axios'
const header = {
    headers : {
        "Access-Control-Allow-Origin": "*", Authorized: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const signUp = async function(obj){
    let response = await axios.post("https://localhost:44361/api/register", obj, header) 
    return response
} 

export const signIn = async function(obj){
    let response = await axios.post("https://localhost:44361/api/login", obj, header)
    return response 
} 