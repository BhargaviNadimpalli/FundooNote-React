import React from "react";
import '../css/signIn.css'
import logo from '../assets/googleLogo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {signIn} from '../services/userServices'
import { useHistory } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
 function Login(){
     let history = useHistory()
     const [email, setEmail] = React.useState("")
     const [password, setPassword] = React.useState("")
     const[erroremail, setErrorEmail] = React.useState(false)
     const[helperemail, setHelperEmail] = React.useState("")
     const[errorpassword, setErrorPassword] = React.useState(false)
     const[helperpassword, setHelperPassword] = React.useState("")
     const [snackbaropen, setsnackbarOpen] = React.useState(false)
     const [snackbarmessage, setsnackbarMessage] = React.useState("")
     const takeEmail = function(event)
     {
        setEmail(event.target.value)
     }
     const takePassword = function(event)
     {
         setPassword(event.target.value)
     }
const submit = function()
{
    let statusEmail 
    if(emailRegex.test(email))
    {      
     console.log("false")
     setErrorEmail(false)
     setHelperEmail("")
     statusEmail = true
    }
    else
    {
     setErrorEmail(true)
      console.log("true")
      setHelperEmail("Enter the valid email")
      statusEmail = false
    }
    let statusPassword 
    if(passwordRegex.test(password))
    {      
     console.log("false")
     setErrorPassword(false)
     setHelperPassword("")
     statusPassword = true
    }
    else
    {
      setErrorPassword(true)
      console.log("true")
      setHelperPassword("Enter valid password ")
      statusPassword = false
    }
    if(statusEmail == true && statusPassword == true)
    {
         let obj = {
              Email: email,
              Password: password
         }
    
    console.log(obj) 
    signIn(obj).then(function(response){
        console.log(response)
       let tokenArray = response.data.userId
       localStorage.setItem("userId", tokenArray)
       localStorage.setItem("Token", response.data.tokenString)
       
       if(response.status==200){
         setsnackbarOpen(true)
         setsnackbarMessage("login successful")
        history.push("/Dashboard")
      }
    })
    .catch(function(error){
      console.log(error)  
      setsnackbarOpen(true)
    
    })


}
}
const taketosignUp = function(){
   history.push("/signUp")
}
const snackbarClose = function(){
  setsnackbarOpen(false)
}

    return (
        <div className = "signin">
           <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left-bottom",
              }}
              open={snackbaropen}
              autoHideDuration={3000}
              onClose={snackbarClose}>
              <Alert onClose={snackbarClose} className = "alert" severity="error" sx={{ width: '100%' }}>Login Failed</Alert>
            </Snackbar>
            <img src = {logo} alt = "logo" className = "googlelogo"></img>
            <h3 className = "sign">Sign in</h3>
            <p id = "One">Use your Google Account</p>   
            <div className = "email">
                <TextField error = {erroremail} helperText = {helperemail} onChange = {takeEmail} label="Email" 
                                    variant="outlined" size = "large"/>  <br/>          
                <TextField id = "password" error = {errorpassword} helperText = {helperpassword} onChange = {takePassword} 
                            type = "password" label="Password" variant="outlined" size = "large"/>            
            </div> 
            <Button color="secondary" id = "lineOne">Forgot email?</Button>
            <p id = "two">Not your computer? Use Guest mode to sign in privately.</p>
            <Button color="secondary" id = "lineTwo">Learn more</Button> 
            <div className = "account">
           <Button color="secondary" id = "lineThree" onClick = {taketosignUp}>Create account</Button>
           <Button onClick = {submit} variant="contained" id = "button">Next</Button>
           </div>
        </div>
        
    )
}
export default Login
