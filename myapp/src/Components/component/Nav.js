import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Homepage from '../../Homepage';
import Home from '../../Home';
import img from "../images/title.jpg"


export default function Navbar() {
  const navigate = useNavigate();
  
  const handlehomepage =(()=>{
    navigate("/homepage");
  })
  const handlecoursepage =(()=>{
    navigate("/department");
  })
  const handleloginpage =(()=>{
    navigate("/statistics");
  })


  return (
    <div className='navclass'>
      <nav> 
        <div className="d22"><img src={img} style={{width:400 , height: 54 , margin:0}}/></div>
        <div className="d21">
            <tr>
              <td><button className='b1' style={{textDecoration:'none', color:'white'}} onClick={handlehomepage}>Home</button></td>
              <td><button  className='b2' style={{textDecoration:'none', color:'white'}} onClick={handlecoursepage}>Departments</button></td>
              <td><button  className='b3' style={{textDecoration:'none', color:'white'}} onClick={handleloginpage}>Statistics</button></td>
            </tr>
        </div>
      </nav>
      <br/><br/>
    </div>
  );
}