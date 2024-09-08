import React from 'react';
import { Link } from 'react-router-dom';
import './twix.css';


const Twix = () => {
  return (
    <div className="twix-container">
      <h1>Twix</h1>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default Twix;