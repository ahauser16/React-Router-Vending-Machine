import React from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';

const VendingMachine = () => (
  <div className="vending-machine">
    <h1>Vending Machine</h1>
    <ul>
      <li><Link to="/soda">Soda</Link></li>
      <li><Link to="/chips">Chips</Link></li>
      <li><Link to="/chocolate">Chocolate</Link></li>
    </ul>
  </div>
);

export default VendingMachine;