import React from "react";
import '../css/noteDetails.css';
import remainder from '../assets/reminder.svg';
import pin from '../assets/pinIcon.svg';
import collaborator from '../assets/collaborator.svg';
import image from '../assets/image.svg';
import archive from '../assets/archive.svg';
import Delete from '../assets/deleteIcon.svg'
import { IconButton, Button, InputBase } from "@material-ui/core";
import { UpdateArchive, UpdateNote } from "../services/dataService";
import SimplePopper from '../components/colorPopper'
import { UpdateTrash } from "../services/dataService";
import BasicModal from '../components/modal.jsx'
function NoteDetails(props){
    const [isArchive, setIsArchive] = React.useState(false)
    const [noteid , setNoteId] = React.useState()
    const [trash, setTrash] = React.useState(false)


    const clickonarchive = function(event){
        setIsArchive(!isArchive)
         if (isArchive){
            let obj = {
              UserId: parseInt( localStorage.getItem("userId")),
              NotesId: event.target.id,
              Is_Archive: isArchive
            }
            console.log(obj)
    
            UpdateArchive(obj).then(function(response){
                props.listentoclickarchive(true)
        })
        .catch(function(error){
          console.log(error)  
        })
      }
        
   }

   const clickontrash=function(event){
    setTrash(!trash)
    if(trash){
        let obj = {
            NotesId: event.target.id,
            UserId: parseInt( localStorage.getItem("userId")),
            Is_Trash: trash
        } 
        console.log(obj)
        UpdateTrash(obj).then(function(response){
            props.listentoclicktrash(true)
        })
        .catch(function(error){
            console.log(error)
        }) 
    }
}
  const listentocolor = function(data){
      if(data == true){
          props.listentocolorchange(true)
      }
  }
  const listentoclose = function(data){
      if(data == true){
          props.listentoclosebutton(true)
      }
  }

    return(
        <div className = "notes" style = {{backgroundColor: props.note.color}} >
           
            <InputBase type= "text" placeholder = "Title" value = {props.note.title} ></InputBase>
            <img src = {pin} alt = "Pin Icon" className = "pins"/>
           
            <InputBase type = "text" placeholder = "Description" value = {props.note.notes}></InputBase>
            <BasicModal note = {props.note} listentoclose = {listentoclose}/>
           
            <div className = "icons">
             <img src = {remainder} alt = "Remainder" className = "remainder"/>
             <img src = {collaborator} alt = "collaborator" className = "collaborator"/>
             <SimplePopper action = "update" noteid = {props.note.notesId} listentocolor = {listentocolor}/>
             <img src = {image} alt = "image" className = "image" />
             <img src = {archive} alt = "archive" className = "archive" onClick = {clickonarchive} id = {props.note.notesId}/>
             <img src = {Delete} alt = "delete" className = "delete" onClick = {clickontrash} id = {props.note.notesId}/>
             </div>
        </div>
    )
}
export default NoteDetails