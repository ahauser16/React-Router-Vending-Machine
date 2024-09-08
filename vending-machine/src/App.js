import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Kitkat from './components/Kitkat';
import Twix from './components/Twix';
import PeanutMM from './components/PeanutMM';
import PlainMM from './components/PlainMM';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/kitkat" element={<Kitkat />} />
          <Route path="/twix" element={<Twix />} />
          <Route path="/peanutMM" element={<PeanutMM />} />
          <Route path="/plainMM" element={<PlainMM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;