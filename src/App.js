import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

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

export default function App({ path }) {
  document.addEventListener('click', (e) => {
    let link = e.target.closest('a');
    if (!link) return;
    window.scrollTo(0, 0);
  })

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="education" element={<Education />} />
          <Route path="rent" element={<Rent />} />
          <Route path="walks" element={<Walks />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="about" element={<About />} />
          <Route path="thanks" element={<Thanks />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
