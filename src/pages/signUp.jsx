import React from "react";
import '../css/example.css'
import logo from '../assets/googleLogo.png'
import logoOne from '../assets/logo.svg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {signUp} from '../services/userServices'
import { useHistory } from "react-router-dom";
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
const nameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
function CreateAccount(){
     let history = useHistory()
     const [firstName, setFirstName] = React.useState("")
     const [lastName, setLastName] = React.useState("")
     const [email, setEmail] = React.useState("")
     const [password, setPassword] = React.useState("")
     const[confirmPassword, setConfirmPassword] = React.useState("")
     // const [open, setOpen] = React.useState(false);
     // const [snackbaropen, setsnackbarOpen] = React.useState(false)
     // const [snackbarmessage, setsnackbarMessage] = React.useState("")
     //error for firstname
     const[errorfirstName, setErrorFirstName] = React.useState(false)
     const[helperfirstname, setHelperFirstName] = React.useState("")
     //error last name
     const[errorlastName, setErrorLastName] = React.useState(false)
     const[helperlastname, setHelperLastName] = React.useState("")
     //error email
     const[erroremail, setErrorEmail] = React.useState(false)
     const[helperemail, setHelperEmail] = React.useState("")
     //error password
     const[errorpassword, setErrorPassword] = React.useState(false)
     const[helperpassword, setHelperPassword] = React.useState("")
     //error confirm password
     const[errorconfirmPassword, setErrorConfirmPassword] = React.useState(false)
     const[helperconfirmPassword, setHelperConfirmPassword] = React.useState("")

     const takeFirstName = function(event){
          setFirstName(event.target.value)
     }

          const takeLastName = function(event){
              setLastName(event.target.value)
     }
     const takeEmail = function(event){
         setEmail(event.target.value)
}
const takePassword = function(event){
    setPassword(event.target.value)
}
const takeConfirmPassword = function(event){
     setConfirmPassword(event.target.value)
}
const submit = function()
{
   // status for first name
    let statusFirstName
    if(nameRegex.test(firstName))
    {
     console.log("false")
     setErrorFirstName(false)
     setHelperFirstName("")
     statusFirstName = true
    }
    else
    {
     setErrorFirstName(true)
      console.log("true")
      setHelperFirstName("Enter correct first name")
      statusFirstName = false
    }

    let statusLastName
    if(nameRegex.test(lastName))
    {
     console.log("false")
     setErrorLastName(false)
     setHelperLastName("")
     statusLastName = true
    }
    else
    {
     setErrorLastName(true)
      console.log("true")
      setHelperLastName("Enter correct last name")
      statusLastName = false
    }

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
      setHelperPassword("Enter the valid password")
      statusPassword = false
    }
    let statusConfirmPassword
    if(passwordRegex.test(confirmPassword))
    {
     console.log("false")
     setErrorConfirmPassword(false)
     setHelperConfirmPassword("")
     statusConfirmPassword = true
    }
    else
    {
     setErrorConfirmPassword(true)
      console.log("true")
      setHelperConfirmPassword("Enter the valid password")
      statusConfirmPassword = false
    }
    if(statusFirstName == true && statusLastName == true && statusEmail == true && statusPassword == true)
    {
         let obj = {

              FirstName: firstName,
              LastName: lastName,
              Email: email,
              Password: password
         }
         console.log(obj)
         signUp(obj).then(function(response){
             console.log(response)

             if(response.status==200){
               // setsnackbarOpen(true)
               // setsnackbarMessage("login successful")
               history.push("/")
             }
         })
         .catch(function(error){
        
           console.log(error)
          //  setsnackbarOpen(true)
         })

    }
}
// const snackbarClose = function(){
//      setsnackbarOpen(false)
//    };
const taketosignIn = function(){
    history.push("/")
}

  
    return (
        <div className = "main">
{/* 
       <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left-bottom",
              }}
              open={snackbaropen}
              autoHideDuration={3000}
              onClose={snackbarClose}>
              <Alert onClose={snackbarClose} severity="error" sx={{ width: '100%' }}>signup Failed</Alert>
            </Snackbar> */}
          <div className = "form">
            <div>
                <img src = {logo} alt = "logo" className = "logo"></img>
                 <h3>Create your Google Account</h3>
            </div>
            <div className = "name">
                 <TextField error = {errorfirstName} helperText = {helperfirstname} onChange = {takeFirstName} label="First name" variant="outlined" size = "small"/>
                 <TextField error = {errorlastName} helperText = {helperlastname} onChange = {takeLastName} label="Last name" variant="outlined" size = "small" />
            </div>
            <div className = "Email">
                 <TextField error = {erroremail} helperText = {helperemail} onChange = {takeEmail} label="Username" variant="outlined" size = "small"/>

            </div>
                 <a href = "" className = "lineone">You can use letters, numbers, periods </a>
                 <a href = "" className = "linetwo">Use my current email address instead</a>
            <div className = "emailpassword">
                 <TextField error = {errorpassword} helperText = {helperpassword} onChange = {takePassword}
                      type = "password" label="Password" variant="outlined" size = "small"/>
                  <TextField error = {errorconfirmPassword} helperText = {helperconfirmPassword} onChange = {takeConfirmPassword}
                             type = "password" label="Confirm" variant="outlined" size = "small" />
           </div>
                <a href = "" className = "linethree">Use 8 or more characters with a mix of letters, numbers and symbols</a>
                <a href = "" className = "linefour" onClick = {taketosignIn}> Sign in instead </a>
                <Button onClick = {submit} variant="contained" id = "next">Next</Button>
                <img src = {logoOne} alt = "logo"  className = "icon"></img>
                   <p id = "google"> One account. All of Google </p>
                     <p id = "space"> working for you.</p>

        </div>
        </div>
    )
}
export default CreateAccount
