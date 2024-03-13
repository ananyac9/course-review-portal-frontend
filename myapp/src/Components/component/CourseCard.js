import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function CourseCard() {
  const [rating, setRating] = useState(2.5);

  function handleRating(event, newValue) {
    setRating(newValue);
  }

  return (
    <Card sx={{ minWidth: 450, height: 325, backgroundColor: '#023047', color: 'white' }}>
      <CardContent>
        <Typography sx={{ fontSize: 30, color: 'white' }} color="text.primary" gutterBottom>
          Data Structure and Algorithms
        </Typography>
        <br/>
        <div className='stack'>
          <tr>
            <th>
              <Stack>
                <Rating name="half-rating" precision={0.5} value={rating} onChange={handleRating} />
              </Stack>
            </th>  
            <th>
              <Typography sx={{ fontSize: 20, color: 'white' }} color="text.primary" gutterBottom> ({rating}) </Typography>
            </th>
          </tr>
        </div>
        <br/>
        <div className='ty1'>
          <Typography sx={{ fontSize: 15, color: 'white', marginLeft: 0 }} color="text.primary">
            Course code : 
          </Typography>
          <Typography sx={{ fontSize: 15, color: 'white', marginLeft: -2 }} color="text.primary">
            Professor :  
          </Typography>
          <Typography sx={{ fontSize: 15, color: 'white', marginLeft: -5.5 }} color="text.primary">
            Credit :
          </Typography>
          <Typography sx={{ fontSize: 15, color: 'white', marginLeft: -7 }} color="text.primary">
          Type:
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
