import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './component/Page2';
import Page4 from './component/Page4';
import Page6 from './component/Page6';
import Page7 from './component/Page7';
import Page8 from './component/Page8';
import Page8b from './component/Page8b';
import Page9 from './component/Page9';
import Page7b from './component/Page7b';
import Game from './Game';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page4 />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;