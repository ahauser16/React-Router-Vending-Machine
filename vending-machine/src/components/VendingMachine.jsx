import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <div className="grid">
        <Link to="/kitkat" className="grid-item kitkat">Kit Kat</Link>
        <Link to="/twix" className="grid-item twix">Twix</Link>
        <Link to="/peanutMM" className="grid-item peanutMM">Peanut M&M</Link>
        <Link to="/plainMM" className="grid-item plainMM">Plain M&M</Link>
      </div>
    </div>
  )
}
export default VendingMachine;