import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState , useEffect } from 'react'; 
import axios from "axios";

const card = () => (
  <React.Fragment>
    <CardContent style={{ backgroundColor:'#023047'}}>
      <Typography sx={{ fontSize: 24 , color: 'white' }} color="text.primary" gutterBottom>
        Data Algorithm 
      </Typography>
      <ul style={{listStyleType:'none'}}>
        <li>
          <Typography sx={{ fontSize:15 , color: 'white', marginLeft: 0 }} color="text.primary">
            Course code : 
          </Typography>
        </li>
        <li>
          <Typography sx={{ fontSize:15 , color: 'white' }} color="text.primary">
            Professor :  
          </Typography>
        </li>
        <li>
          <Typography sx={{ fontSize:15 , color: 'white'}} color="text.primary">
            Credit : 
          </Typography>
        </li>
      </ul>
    </CardContent>
  </React.Fragment>
);

export default function BottomCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card()}</Card>
    </Box>
  );
}
