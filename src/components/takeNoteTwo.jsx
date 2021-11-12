import { InputBase } from "@material-ui/core";
import React from "react";
import '../css/takeNote.css';
function NoteTwo(props){
    const clicked = function(){
        props.listentotakenote(true)
    }
    return(
        <div onClick = {clicked} class = "note">
            <InputBase type = "text" placeholder = "Take a note.."></InputBase>
        </div>
    ) 
}
export default NoteTwo 