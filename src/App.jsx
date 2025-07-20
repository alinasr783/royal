import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nation from './pages/Nation';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nation/:id" element={<Nation />} />
    </Routes>
  );
};

export default App;