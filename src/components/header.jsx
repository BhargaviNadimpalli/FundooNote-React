import React from "react";
import '../css/header.css'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import RefreshIcon from '@material-ui/icons/Refresh';
import Toolbar from "@material-ui/core/Toolbar";
import logo from '../assets/googleKeepLogo.png';
import list from '../assets/list.svg'
import { IconButton, Button } from "@material-ui/core";
import { Icon, InputBase } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '../assets/grid.svg';
import Profile from '../assets/profile.svg';
import Setting from '../assets/settings.svg';
function Header(props)
{
    const [opennav, setOpenNav ] = React.useState(true)
  const  Menubar= function()
   {
       setOpenNav(!opennav)
     props.listenToHeader(opennav)
   }
   const handleClickAway = function(){
    props.listenToHeader(false)
 }

        return(
            <ClickAwayListener onClickAway={handleClickAway}>
            <div className = "header">
               
                 <Toolbar className = "toolbar">
                  <div className = "headermenu">
                      <IconButton> <MenuIcon onClick = {Menubar}/></IconButton>
                      <img src = {logo} alt = "logo" className = "keeplogo"></img>
                      <h4 id = "keep">Keep</h4>
                  </div>
                  <div className = "search">
                       <div className = "searchicon">
                           <IconButton><SearchIcon/></IconButton>
                       </div>
                       <div className = "text">
                            <InputBase placeholder = "Search" name = "value"/>
                        </div>
                        <div className = "clear-icon">
                              <IconButton><ClearIcon /></IconButton>
                        </div>
                  </div>
                  <div className = "grid">
                    <IconButton>
                        <img src = {list} alt = "list" className = "list"/>
                    </IconButton>
                  </div>
                  <div className = "refresh">
                         <IconButton><RefreshIcon/></IconButton>
                  </div>
                  <img src = {Setting} alt = "settings" className = "setting"/>
                  <img src = {Grid} alt = "grid" className = "gridsymbol"/>
                  <img src = {Profile} alt = "profile" className = "profile"/>
                 </Toolbar> 
                 
            </div> 
            </ClickAwayListener>
        ) 
    
}
export default Header
