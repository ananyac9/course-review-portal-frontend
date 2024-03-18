import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Home from './Home';
import Department from './Department';
/*
import Home from './Home';
import Page1 from './Page1';
import Page2 from './component/Page2';
import Page4 from './component/Page4';
import BottomCard from './component/BottomCard';
import Review from './component/Review';
import CardTop from './component/CardTop';
import CourseCard from './component/CourseCard';
import Footer from './component/Footer';
import Page7b from './component/Page7b';

import Homepage from './Homepage';
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/department" element={<Department />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;