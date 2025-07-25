import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nation from './pages/Nation';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';
import WhatsAppButton from './components/whatsapp';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nation/:id" element={<Nation />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
};

export default App;