import React from "react";
import '../css/dashBoard.css';
import Header from '../components/header.jsx';
import CreateNote from "../components/createNote.jsx";
import MiniDrawer from '../components/drawer.jsx'
import NoteDetails from '../components/noteDetails.jsx';
import {GetNote} from '../services/dataService'
import { color } from "@mui/system";
import { UpdateColor } from "../services/dataService";
import { GetArchive } from "../services/dataService";
import { GetTrash } from "../services/dataService";
function DashBoard()
{
    const[open, setopen] = React.useState(false)
    const [notearray, setNoteArray] = React.useState([])
     
    const getnote = function(){
        let obj = {

            UserId: localStorage.getItem("userId")
        }
      GetNote(obj).then(function(response){
          console.log(response.data.data)
         setNoteArray(response.data.data)
      })
      .catch(function(error){
          console.log(error) 
      })
    }
    React.useEffect(() => {
       getnote()
       return () => {

       }
    },[]) 
    
    const listentonotes = function(data){
        if(data == false)
        {
           getnote()
        }
    }
      
   const listenToHeader = function(data){
      if(data==true){
          setopen(true)
      } 
      else
      {
          setopen(false)
      }
   }
   const listentotakenotecontainer = function(data){
        console.log(data)
        if(data == false)
        {
            getnote()
        }
   }

   const listentoarchive = function(data){
    console.log(data)
    if(data == false)
    {
        let obj = {

            UserId: localStorage.getItem("userId")
        }
      GetArchive(obj).then(function(response){
          console.log(response.data.data)
         setNoteArray(response.data.data)
      })
      .catch(function(error){
          console.log(error) 
      })
    }
}
    
    const listentotrash = function(data){
        console.log(data)
    if(data == false)
    {
        let obj = {

            UserId: localStorage.getItem("userId")
        }
      GetTrash(obj).then(function(response){
          console.log(response.data.data)
         setNoteArray(response.data.data)
      })
      .catch(function(error){
          console.log(error) 
      })
    }
    }

    const listentocolorchange = function(data){
        if(data == true){
           getnote()
        }
    }
    const listentoclickarchive = function(data){
        if(data == true){
            getnote()
        }
    }
    const listentoclosebutton = function(data){
        if(data == true){
            getnote()
        }
    }
    const listentoclicktrash = function(data){
        if(data == true){
            getnote()
        }
    }
    
    return(
        <div className = "dashBoardContainer" >
            <div className = "dashBoardHeaderContainer">
                <Header listenToHeader = {listenToHeader} />
            </div>
            <div className = "dashBoardCreateNote">
                 <CreateNote listentotakenotecontainer = {listentotakenotecontainer}/> 
                
            </div>
            <div className = "dashBoardMenu">
                <MiniDrawer Navopen = {open} listentoarchive = {listentoarchive}  listentotrash = {listentotrash} listentonotes = {listentonotes}/> 
            </div>
            <div className = "dashBoardNoteContainer">
                {
                  notearray.map((x) => (<NoteDetails note= {x} listentocolorchange = {listentocolorchange} 
                                           listentoclickarchive = {listentoclickarchive}
                                           listentoclicktrash = {listentoclicktrash}
                                           listentoclosebutton = {listentoclosebutton}/>) )
                }
            </div>
        </div> 
    )
}
export default DashBoard