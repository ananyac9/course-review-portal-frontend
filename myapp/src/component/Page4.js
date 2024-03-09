import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Homepage from '../Homepage';
import Home from '../Home';
//import Departments from './Departments'; // Import Departments component
//import Statistics from './Statistics'; // Import Statistics component

export default function Page4() {
  return (
    <div>
      <nav> 
        <div className="d22">COURSE REVIEW SYSTEM</div>
        <div className="d21">
          <table>
            <tr>
              <td><Link to="/homepage" style={{textDecoration:'none', color:'white'}}>Home</Link></td>
              <td><Link to="/home" style={{textDecoration:'none', color:'white'}}>Departments</Link></td>
              <td><Link to="/statistics" style={{textDecoration:'none', color:'white'}}>Statistics</Link></td>
            </tr>
          </table>
        </div>
      </nav>
      <br/><br/>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/statistics" element={<Home />} />
      </Routes>
    </div>
  );
}
