import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Homepage';
import Coursepage from './pages/Coursepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" >
      <Route index element={<Home />} />
      <Route path="course/:uid" element={<Coursepage></Coursepage>} />
    </Route>
  </Routes> 
</BrowserRouter>
);