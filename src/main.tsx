import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Cloud } from './components/pages/Cloud/Cloud';
import { Phones } from './components/pages/Phones/Phones';
import { Documents } from './components/pages/Documents/Documents';

import './assets/styles/resets.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Home />} />
        <Route path="/post" element={<Home />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
