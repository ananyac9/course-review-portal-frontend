

import title from "./Title.png"
import React from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Route, Routes, Link } from 'react-router-dom';
import Home from "../Home";
import Homepage from "../Homepage";
import Department from "../Department";

// import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <img src={title}  className='nav-title' />
            <div className="NavName">
           
            {/* <Stack direction="row" spacing={2}> 
                <Button href="#text-buttons" className="Home">Home</Button>
                <Button href="#text-buttons" className="Statistics">Statistics</Button>
                <Button href="#text-buttons" className="Department">Department</Button>
              
              
            </Stack>  */}
            <table>
            <tr>
              <td><Link to="/homepage" className="Home">Home</Link></td>
              <td><Link to="/department" className="Department">Departments</Link></td>
              
            </tr>
            </table>
            <Routes>
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/department" element={<Department/>} />
              
            </Routes>
              {/* <h3 className="Home">Home</h3>
              
              
              <h3 className="Department">Department</h3>
              <h3 className="Statistics">Statistics</h3> */}
              
            </div>
        </nav>
    )
}