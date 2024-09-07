import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Chocolate from './components/Chocolate';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/soda" element={<Soda />} />
      <Route path="/chips" element={<Chips />} />
      <Route path="/chocolate" element={<Chocolate />} />
    </Routes>
  </Router>
);

export default App;