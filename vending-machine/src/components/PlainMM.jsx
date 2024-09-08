import React from 'react';
import { Link } from 'react-router-dom';
import './plainMM.css';


const PlainMM = () => {
  return (
    <div className="plainMM-container">
      <h1>Plain M&M</h1>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default PlainMM;