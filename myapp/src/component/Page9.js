
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import imgl from "../images/footer.jpg"
import img2 from "../images/feedback.jpg"

export default function Page9() {
  return (
    <div className='f1'>
        
     <div className='g2'>
     <img src={imgl} style={{width:300 , height:170}}/>
     </div>
     <div className='g4'>
     <img src={img2} style={{width:910 , height:170}}/>
     </div>
    </div>
  );
}