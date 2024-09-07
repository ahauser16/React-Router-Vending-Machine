import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => (
  <div>
    <h1>Soda</h1>
    <img src="path/to/soda.jpg" alt="Soda" />
    <Link to="/">Back to Vending Machine</Link>
  </div>
);

export default Soda;