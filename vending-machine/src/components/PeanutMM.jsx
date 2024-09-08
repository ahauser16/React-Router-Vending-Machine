import React from 'react';
import { Link } from 'react-router-dom';
import './peanutMM.css';


const PeanutMM = () => {
  return (
    <div className="peanutMM-container">
      <h1>PeanutM&M</h1>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}

export default PeanutMM;