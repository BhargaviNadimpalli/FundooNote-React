import React from "react";
import '../css/takeNote.css';
import { InputBase } from "@mui/material";
import remainder from '../assets/reminder.svg';
import pin from '../assets/pinIcon.svg';
import collaborator from '../assets/collaborator.svg';
import image from '../assets/image.svg';
import archive from '../assets/archive.svg';
import { IconButton, Button } from "@material-ui/core";
import More from '@material-ui/icons/MoreVert';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {takeNote} from '../services/dataService'
import SimplePopper from '../components/colorPopper'

function Note(props){
    const [title, setTitle] = React.useState("")
    const [takeanote, setTakeNote] = React.useState("")
    const [isArchive, setIsArchive] = React.useState(false)
    const [color, setColor] = React.useState("")
    const takeTitle = function(event){
        setTitle(event.target.value)
   }

   const takeDescription = function(event){
    setTakeNote(event.target.value)
}
const Add = function()
{
   
    let statusTitle 
    if(title == null)
    {      
     console.log("false")
     statusTitle = true
    }
    else
    {
      console.log("true")
      statusTitle = false
    }

    let statusTakeNote
    if(takeanote != null)
    {      
     console.log("false")
     statusTakeNote = true
    }
    else
    {
      console.log("true")
      statusTakeNote = false
    }
    if(statusTitle == true || statusTakeNote == true)
    {
    let obj = {
        UserId: parseInt( localStorage.getItem("userId")),
        Title: title,
        Notes: takeanote,
        Is_Archive: isArchive,
        Color: color
   }
 
   console.log(obj) 
    takeNote(obj).then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log(error)  
    })
  }
props.listentotakenote(false)

}
const handleClickAway = function(){
       props.listentotakenote(false)
    } 
    const clickonarchive = function(){
         setIsArchive(!isArchive)
    }
    const changeColor = function(data){
        setColor(data)
    }
    const listentonotecolor = function(data){
      if(data == true){
          props.listentocolorchange(true)
      }
  }
     return(
        <ClickAwayListener onClickAway={handleClickAway}>
         <div className = "note" style = {{backgroundColor: color}}>
             <InputBase className = "title" type = "text" placeholder = "Title" onChange = {takeTitle} ></InputBase>
             <img src = {pin} alt = "Pin Icon" className = "pin"/> 
             <InputBase className = "takenote" type = "text" placeholder = "Take a note." onChange = {takeDescription}></InputBase>
            <div className = "icons">
             <img src = {remainder} alt = "Remainder" className = "remainder"/>
             <img src = {collaborator} alt = "collaborator" className = "collaborator"/>
             <div id = "coloricon">
              <SimplePopper action = "create" changeColor = {changeColor} listentonotecolor = {listentonotecolor}/>
              </div>
              <img src = {image} alt = "image" className = "image"/>
             <img src = {archive} alt = "archive" className = "archive" onClick = {clickonarchive} />
             <IconButton><More/></IconButton>
             <Button onClick = {Add} color="secondary" className = "closebutton">Close</Button>
             </div>
         </div>
         </ClickAwayListener>
     )
}
export default Note