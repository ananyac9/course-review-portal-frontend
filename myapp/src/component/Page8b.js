import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Page8b() {
  const [rating, setRating] = useState(2.5);
  function handlerating(event, newvalue){
    setRating(newvalue);
  }

  return (
    <Card sx={{ minWidth: 450 , height:325 , backgroundColor:'#023047', color:'white'}}>
      <CardContent>
        <Typography sx={{ fontSize: 30, color: 'white' }} color="text.primary" gutterBottom>
          Data Structure and Algorithms
        </Typography>
        <br/>
        <div className='stack'>
          <tr>
        <th><Stack>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} value={rating} onChange={handlerating} />
      </Stack></th>  
      <th>
      <Typography  sx={{ fontSize: 20, color: 'white' }} color="text.primary" gutterBottom> ({rating}) </Typography>
      </th>
      </tr>
      </div>
        <br/>
        <div className='ty1'>
          <Typography sx={{ fontSize:15 , color: 'white' , marginLeft: 0 }} color="text.primary">
        Course code : 
        </Typography>
        <Typography sx={{ fontSize:15, color: 'white', marginLeft: 0  }} color="text.primary">
        professor :  
        </Typography>
        <Typography sx={{ fontSize:15 , color: 'white', marginLeft: 0 }} color="text.primary">
        Credit : 
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}


