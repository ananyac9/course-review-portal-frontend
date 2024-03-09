// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'; // Assuming App is your main application component

import Homepage from './Homepage';
import Page4 from './component/Page4';
import './index.css';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App/>} /> {/* Render your main application component */}
        <Route path="/p4" element={<Page4 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homepage" element={<Homepage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

