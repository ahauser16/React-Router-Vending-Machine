import React from 'react';
import { Link } from 'react-router-dom';
import './kitkat.css';


const Kitkat = () => {
  return (
    <div className="kitkat-container">
      <h1>Kitkat</h1>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  )
}
export default Kitkat;