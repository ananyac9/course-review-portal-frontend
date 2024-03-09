import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent style={{ backgroundColor:'#023047'}}>
      <Typography sx={{ fontSize: 24 , color: 'white' }} color="text.primary" gutterBottom>
        Robotics and Simulation 
      </Typography>
      <ul style={{listStyle:'none'}}>
          <li><Typography sx={{ fontSize:15  , color: 'white', marginLeft: 0 }} color="text.primary">
        Course code : 
        </Typography></li>
        <li><Typography sx={{ fontSize:15 , color: 'white' }} color="text.primary">
        professor :  
        </Typography></li>
        <li><Typography sx={{ fontSize:15 , color: 'white'}} color="text.primary">
        Credit : 
        </Typography></li>
        </ul>
    </CardContent>
  </React.Fragment>
);

export default function Page6() {
  return (
    <>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    </>
  );
}