import React from 'react';
import { Link } from 'react-router-dom';

const Chocolate = () => (
  <div>
    <h1>Chocolate</h1>
    <img src="path/to/chocolate.jpg" alt="Chocolate" />
    <Link to="/">Back to Vending Machine</Link>
  </div>
);

export default Chocolate;