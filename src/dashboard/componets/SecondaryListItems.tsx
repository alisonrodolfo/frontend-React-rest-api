import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';

  export default function SecondaryListItems(){
  //use navigation hook shown as below

  return (
    <React.Fragment>
    <ListSubheader component="div" inset>
    Relatórios salvos
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mês atual" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Ultimo quarto" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Promos" />
    </ListItemButton>
  </React.Fragment>
  );
}


