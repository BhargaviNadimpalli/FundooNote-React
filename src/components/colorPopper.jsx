import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import colorIcon from '../assets/color.svg';
import '../css/color.css';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { UpdateColor } from '../services/dataService';
export default function SimplePopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [color, setColor] = React.useState()
  const array = [{ code: "#FFFFFF", name: "white" },
                { code: "#F28B82", name: "red" },
                { code: "#F7BC04", name: "orange" },
                { code: "#FCF474", name: "yellow" },
                { code: "#CCFF90", name: "green" },
                { code: "#A7FFEB", name: "teal" },
                { code: "#CBF0F8", name: "blue" },
                { code: "#AECBFA", name: "Drak blue" },
                { code: "#D7AEFB", name: "purple" },
                { code: "#FACFE8", name: "pink" },
                { code: "#E6C9A8", name: "Brown" },
                { code: "#E8EAED", name: "grey" },]

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
 
  const changeColor = function(event){
    setColor(event.target.id)
  }
  const takecolor = function(event){
    
       
      if(props.action == "create"){
        props.changeColor(event.target.id)
        
        let obj = {
          UserId: parseInt( localStorage.getItem("userId")),
          NotesId: props.noteid,
          color: event.target.id
        }
        console.log(obj)

        UpdateColor(obj).then(function(response){
          props.listentonotecolor(true)
    })
    .catch(function(error){
      console.log(error)  
    })
      }
      else if (props.action == "update"){
       
        let obj = {
          UserId: parseInt( localStorage.getItem("userId")),
          NotesId: props.noteid,
          color: event.target.id
        }
        console.log(obj)

        UpdateColor(obj).then(function(response){
          props.listentocolor(true)

    })
    .catch(function(error){
      console.log(error)  
    })
      }
  }

  return (
    <div>
       <img src = {colorIcon} alt = "color" className = "colorsize" onClick={handleClick}/>
      {/* <button aria-describedby={id} type="button" >
        Toggle Popper
      </button> */}
      <Popper id={id} open={open} anchorEl={anchorEl} >
               <div class="colorButton">
                   {
                   array.map((item) => (
                    <div className="coloricons"  onClick = {takecolor} id = {item.name} onChange = {changeColor} >
                      <Tooltip title={item.name}>
                        <IconButton  
                         
                          style={{ backgroundColor: item.code }}
                        ></IconButton>
                      </Tooltip>
                    </div>
                  ))}
                   
              </div>
      </Popper>
    </div>
  );
}
