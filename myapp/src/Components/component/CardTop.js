import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CourseCard from './CourseCard';

export default function CardTop() {
  
  return (
    <div className="combine">
      <div className='page8'>
        <CourseCard/>
      </div>

      <div className='page8b'>
        <Card sx={{ minWidth: 350 , height:325, backgroundColor:'#023047' ,color:'white' }}>
          <CardContent>
            <div className='ty1'>
              <Typography sx={{ fontSize: 24, color: 'white' }} color="text.primary" gutterBottom>
                <div style={{ width: 160, height: 50, backgroundColor: '#8ECAE6', marginLeft: 40, color: 'black', padding: 36, marginTop: 0, fontSize: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  cse 
                </div>
                <br/>
              </Typography>
              <div className='ty1'>
                <Typography sx={{ fontSize:15, color: 'white', marginLeft: 0 }} color="text.primary">
                  Address : 
                </Typography>
                <Typography sx={{ fontSize:15, color: 'white' }} color="text.primary">
                  phone-No : 
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
