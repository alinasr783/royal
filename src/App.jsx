import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nation from './pages/Nation';
import Programs from './pages/Programs'; // الجديد
import ProgramDetail from './pages/ProgramDetail'; // الجديد
import Destination from './pages/Destination';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nation/:id" element={<Nation />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/program/:id" element={<ProgramDetail />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
};

export default App;