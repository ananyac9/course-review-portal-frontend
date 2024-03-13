
import * as React from 'react';
import imgl from "../images/footer.jpg"
import img2 from "../images/feedback.jpg"

export default function Footer() {
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