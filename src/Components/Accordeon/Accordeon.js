import React from 'react';
import './Accordeon.css';
import Chevron from './Chevron.png'

export default function Accordeon() {
  return (
    <div className="accordeon">

      <div className="accordeon-visible">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={Chevron} alt="Chevron down" />
      </div>

    </div>
  )
}
