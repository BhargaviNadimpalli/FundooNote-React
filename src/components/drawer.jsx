import * as React from "react";
import '../css/drawer.css'
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteIcon from '../assets/NoteIcon.svg'
import { IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Reminder from '../assets/ReminderLogo.svg';
import EditLabel from '../assets/EditIcon.svg';
import Archive from '../assets/archiveIcon.svg';
import Trash from '../assets/deleteIcon.svg';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
 
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));
const useStyles = makeStyles({ drawerPaper: { marginTop: "67px" } });
export default function MiniDrawer(props) {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [archive, setArchive] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const takearchive = function(){
         props.listentoarchive(false)
  }

  const taketrash = function(){
    props.listentotrash(false)
  }
  const takenote = function(){
    props.listentonotes(false)
  }
  return (

    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={props.Navopen}
      classes={{ paper: classes.drawerPaper }}>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <img src = {NoteIcon} alt = "Note Icon" className = "Icon" onClick = {takenote} />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
                 <img src = {Reminder} alt = "Reminder" className = "Icon"/>
            </ListItemIcon>
            <ListItemText primary="Reminder" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src = {EditLabel} alt = "Edit labels" className = "Icon"/>
            </ListItemIcon>
            <ListItemText primary="Edit Labels" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src = {Archive} alt = "Archive" className = "Icon" onClick = {takearchive}/>
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src = {Trash} alt = "Trash" className = "Icon" onClick = {taketrash}/>
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
