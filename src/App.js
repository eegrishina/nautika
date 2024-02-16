import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Education from './pages/Education';
import Rent from './pages/Rent';
import Walks from './pages/Walks';
import Certificates from './pages/Certificates';
import About from './pages/About';
import Thanks from './pages/Thanks';
import NoPage from './pages/NoPage';
import Contacts from './pages/Contacts';
import {api} from './api';

export default function App({ path }) {
  document.addEventListener('click', (e) => {
    let link = e.target.closest('a');
    if (!link) return;
    window.scrollTo(0, 0);
  })
  
  function handleImage() {
    api.map(item => {
      if (item.id === path) {
        return item.imgTitle;
      }
      if (path === 'home') {
        return '/public/images/main-ship.png';
      }
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home imgPath={handleImage} />} />
          <Route path="services" element={<Services imgPath={handleImage} />} />
          <Route path="education" element={<Education imgPath={handleImage} />} />
          <Route path="rent" element={<Rent imgPath={handleImage} />} />
          <Route path="walks" element={<Walks imgPath={handleImage} />} />
          <Route path="certificates" element={<Certificates imgPath={handleImage} />} />
          <Route path="about" element={<About imgPath={handleImage} />} />
          <Route path="thanks" element={<Thanks imgPath={handleImage} />} />
          <Route path="contacts" element={<Contacts imgPath={handleImage} />} />
          <Route path="*" element={<NoPage imgPath={handleImage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
