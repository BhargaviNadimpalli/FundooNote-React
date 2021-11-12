import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import InputBase from "@material-ui/core/InputBase";
import remainder from '../assets/reminder.svg';
import collaborator from '../assets/collaborator.svg';
import image from '../assets/image.svg';
import archive from '../assets/archive.svg';
import { UpdateNote } from "../services/dataService";
import SimplePopper from '../components/colorPopper'
import '../css/model.css'

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle]=React.useState(props.note.title)
  const [body, setBody]=React.useState(props.note.notes)
  const [id, setId]=React.useState(props.note.notesId)

  const takeTitle=function(event){
    setTitle(event.target.value)
  }
  const takeBody=function(event){
    setBody(event.target.value)
  }

  const click=function(){
    
      let obj = {
        NotesId: id,
        Title: title,
        Notes: body,
        UserId: parseInt(localStorage.getItem("userId"))
      }
      console.log(obj)
      UpdateNote(obj).then(function(response){
       props.listentoclose(true)
       handleClose()
    })
    .catch(function(error){
        console.log(error)
    })
  
}

  return (
    <div>
        <Button onClick = {handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">    
        <Box className="modalbox">
        <InputBase type="text" placeholder="Title" defaultValue={props.note.title} onChange={takeTitle}></InputBase>
        <br/>
        <InputBase type="text" placeholder="Description" defaultValue={props.note.notes} onChange={takeBody}></InputBase>
        <div className="display">
        <img src={remainder} alt="Reminder" className = "remainder"/>
        <img src={collaborator} alt="Collaborator" className="collaborator"/>
        <div className = "modalcolor"><SimplePopper/></div>
       <img src={image} alt="Image" className="image"/>
       <img src={archive} alt="Archive" className="archive"/>
       </div>
       <div className="closeButton">
       <Button onClick={click}>Close</Button>
       </div>  
       </Box>
     </Modal>
   </div>
 );
}
