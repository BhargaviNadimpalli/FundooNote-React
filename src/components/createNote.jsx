import React from "react";
import Note from '../components/takeNote';
import NoteTwo from "../components/takeNoteTwo";
function CreateNote(props){
    const [clickfirstnote, setClickFirstNote] = React.useState(false)
    const listentotakenote = function(data){
        if(data == true)
        {
            setClickFirstNote(true)
        }
        else if (data == false)
        {
            props.listentotakenotecontainer(false)
            setClickFirstNote(false)
        } 
    }
    return(
        <div>
            <div className = "createnote">
            {
                clickfirstnote ? <Note listentotakenote = {listentotakenote}/> : <NoteTwo listentotakenote = {listentotakenote}/>
            }
            </div>           
        </div>
    )
} 
export default CreateNote